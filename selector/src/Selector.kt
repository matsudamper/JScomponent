import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.window

class Selector {
    val SmallBreakPoint = 800

    lateinit var selectors :List<BaseSelector>
    private var windowState = WindowState.MEDIUM

    constructor() {

        window.addEventListener("load", {
            selectors = listOf(ClassSelector(), VisibilitySelector())
        }, false)

        window.addEventListener("load", selectorRoot, false)
        window.addEventListener("resize", selectorRoot, false)
    }


    private val selectorRoot = object : EventListener {
        override fun handleEvent(event: Event) {

            val beforeWindowState = windowState
            windowState = if (window.innerWidth <= SmallBreakPoint) {
                if (windowState === WindowState.SMALL) return

                WindowState.SMALL
            } else {
                if (windowState === WindowState.MEDIUM) return

                WindowState.MEDIUM
            }

            for (item in selectors) {
                item.stateChanged(windowState, beforeWindowState)
            }
        }
    }
}

val selector = Selector()