package net.matsudamper.selector

interface BaseSelector {
    val targetName: String
    val elementName get() = "selector-$targetName"

    fun getAttributeName(windowState: WindowState) = when (windowState) {
        WindowState.XS -> "data-$targetName-${WindowState.XS.getSuffix()}"
        WindowState.SM -> "data-$targetName-${WindowState.SM.getSuffix()}"
        WindowState.MD -> "data-$targetName-${WindowState.MD.getSuffix()}"
        WindowState.LG -> "data-$targetName-${WindowState.LG.getSuffix()}"
        WindowState.XL -> "data-$targetName-${WindowState.XL.getSuffix()}"
    }

    fun stateChanged(windowState: WindowState)
}