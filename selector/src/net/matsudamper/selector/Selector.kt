package net.matsudamper.selector

import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.window

class Selector {

    lateinit var selectors: List<BaseSelector>
    private var windowState: WindowState? = null

    constructor() {

        window.addEventListener("load", {
            selectors = listOf(ClassSelector(), VisibilitySelector(getWindowState()))
        }, false)

        window.addEventListener("load", selectorRoot, false)
        window.addEventListener("resize", selectorRoot, false)
    }


    private val selectorRoot = object : EventListener {
        override fun handleEvent(event: Event) {

            val beforeWindowState = windowState
            windowState = getWindowState().also {
                if (it == beforeWindowState) return

                for (item in selectors) {
                    item.stateChanged(it)
                }
            }
        }
    }

    private fun getWindowState() = window.innerWidth.let { width->
        when {
            width < WindowState.SM.getBreakPoint()-> WindowState.XS
            width < WindowState.MD.getBreakPoint()-> WindowState.SM
            width < WindowState.LG.getBreakPoint()-> WindowState.MD
            width < WindowState.SM.getBreakPoint()-> WindowState.LG
            else-> WindowState.XL
        }
    }
}

val selector = Selector()