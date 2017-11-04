
interface BaseSelector {
    val targetName: String
    val elementName get() = "selector-$targetName"

    fun getAttributeName(windowState: WindowState) = when (windowState) {
        WindowState.SMALL -> "data-$targetName-s"
        WindowState.MEDIUM -> "data-$targetName-m"
    }

    fun stateChanged(windowState: WindowState, beforeWindowState: WindowState)
}