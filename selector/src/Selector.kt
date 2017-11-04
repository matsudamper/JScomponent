import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.window

class Selector {
    val SmallBreakPoint = 800

    lateinit var selectors: List<BaseSelector>
    private var windowState = WindowState.MEDIUM

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
            }

            for (item in selectors) {
                item.stateChanged(windowState, beforeWindowState)
            }
        }
    }

    private fun getWindowState() = when {
        window.innerWidth <= SmallBreakPoint -> WindowState.SMALL
        else -> WindowState.MEDIUM
    }
}

val selector = Selector()