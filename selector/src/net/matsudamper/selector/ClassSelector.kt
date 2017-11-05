package net.matsudamper.selector

import kotlin.browser.document

class ClassSelector : BaseSelector {
    override val targetName: String = "class"

    constructor() {
        for (item in document.body?.getElementsByTagName(elementName)?.toArray() ?: return) {
            item ?: continue

            // デフォルト値を設定
            if (item.getAttribute(getAttributeName(WindowState.MD)) == null) {
                val classItem = item.getAttribute("class") ?: continue

                item.setAttribute(getAttributeName(WindowState.MD), classItem)
            }

            mutableListOf<Pair<WindowState, String?>>().also { list ->

                WindowState.values().reversedArray().forEach {
                    list.add(Pair(it, item.getAttribute(getAttributeName(it))))
                }
            }.let { targetItems ->
                targetItems.forEachIndexed { index, targetItem ->

                    // nullな要素を探す
                    if (targetItem.second == null) {

                        // null以降から探す
                        targetItems.slice(IntRange(index + 1, targetItems.size - 1))
                                .map { it.second }
                                .firstOrNull { it != null }
                                ?.let {
                                    item.setAttribute(getAttributeName(targetItem.first), it)
                                    return@forEachIndexed
                                }


                        // 無かったら前から探す
                        targetItems.slice(IntRange(0, index - 1)).reversed()
                                .map { it.second }
                                .firstOrNull { it != null }
                                ?.let {
                                    item.setAttribute(getAttributeName(targetItem.first), it)
                                    return@forEachIndexed
                                }

                    }
                }
            }
        }
    }

    override fun stateChanged(windowState: WindowState) {

        for (item in document.body?.getElementsByTagName(elementName)?.toArray() ?: return) {
            item ?: continue

            item.className = item.getAttribute(getAttributeName(windowState)) ?: ""
        }
    }
}
/*


            // 設定していない値を埋める
            val attributes = WindowState.values().reversedArray()
                    .map { item.getAttribute(getAttributeName(it)) }.toTypedArray()

            for ((index, attribute) in attributes.withIndex()) {


                // nullな要素を探す
                if (attribute == null) {

                    // null以降から探す
                    attributes.sliceArray(IntRange(index + 1, attributes.size - 1))
                            .firstOrNull { it != null }
                            ?.let { item.setAttribute(getAttributeName(windowState), nextAttribute) }



                    // 無かったら前から探す
                    for (nextWindowState in windowStates.sliceArray(IntRange(0, index - 1)).reversedArray()) {

                        val nextAttribute = item.getAttribute(getAttributeName(nextWindowState))
                        if (nextAttribute != null) {
                            item.setAttribute(getAttributeName(windowState), nextAttribute)
                            break
                        }
                    }

                }
            }
 */