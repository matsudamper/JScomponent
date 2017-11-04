import kotlin.browser.document

class ClassSelector : BaseSelector {
    override val targetName: String = "class"

    constructor() {

        for (item in document.body?.getElementsByTagName(elementName)?.toArray() ?: return) {
            item ?: continue

            if (item.getAttribute(getAttributeName(WindowState.MEDIUM)) == null) {
                val classItem = item.getAttribute("class") ?: continue

                item.setAttribute(getAttributeName(WindowState.MEDIUM), classItem)
            }
        }
    }

    override fun stateChanged(windowState: WindowState, beforeWindowState: WindowState) {

        for (item in document.body?.getElementsByTagName(elementName)?.toArray() ?: return) {
            item ?: continue

            item.className = item.getAttribute(getAttributeName(windowState)) ?: ""
        }
    }
}