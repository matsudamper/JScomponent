package net.matsudamper.selector

import org.w3c.dom.HTMLElement
import kotlin.browser.document

class VisibilitySelector(val windowState: WindowState) : BaseSelector {
    override val targetName: String = "visibility"

    init {
        document.body?.getElementsByTagName(elementName)?.forEach { parent ->
            parent?.children?.toArray()?.filterNotNull()?.forEach { child ->

                WindowState.values()
                        // 値が設定されている値を取得
                        .mapNotNull { child.getAttribute(getAttributeName(it)) }
                        // 全てBool値にフィルタ
                        .filter { it == "true" || it == "false" }
                        .let {
                            // 全て同じ値になっているか
                            val isAllTrue = it.all { it == "true" }
                            val isAllFalse = it.all { it == "false" }

                            val defaultAttribute = when {
                                isAllTrue -> false
                                isAllFalse -> true
                                else -> {

                                    // バラバラの場合は前の値を適用する
                                    mutableListOf<Pair<WindowState, String?>>().also { list ->

                                        WindowState.values().reversedArray().forEach {
                                            list.add(Pair(it, child.getAttribute(getAttributeName(it))))
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
                                                            child.setAttribute(getAttributeName(targetItem.first), it)
                                                            return@forEachIndexed
                                                        }


                                                // 無かったら前から探す
                                                targetItems.slice(IntRange(0, index - 1)).reversed()
                                                        .map { it.second }
                                                        .firstOrNull { it != null }
                                                        ?.let {
                                                            child.setAttribute(getAttributeName(targetItem.first), it)
                                                            return@forEachIndexed
                                                        }

                                            }
                                        }
                                    }
                                    return@forEach
                                }
                            }

                            // 同じ場合は反対の値を適用する
                            WindowState.values()
                                    // 要素名
                                    .map { getAttributeName(it) }
                                    // 値が設定されていないものをフィルタ
                                    .filter {
                                        child.getAttribute(it).let {
                                            it != "true" && it != "false"
                                        }
                                    }
                                    .forEach { child.setAttribute(it, defaultAttribute.toString()) }
                        }
            }
        }

        stateChanged(windowState)
    }

    override fun stateChanged(windowState: WindowState) {

        document.body?.getElementsByTagName(elementName)?.forEach { parent ->
            parent?.children?.toArray()?.filterNotNull()?.forEach { child ->

                (child as HTMLElement).style.display =
                        when (child.getAttribute(getAttributeName(windowState))) {
                            "true" -> ""
                            "false" -> "none"
                            else -> throw Error()
                        }
            }
        }
    }
}