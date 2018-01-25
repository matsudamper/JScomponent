import org.w3c.dom.HTMLLIElement
import org.w3c.dom.HTMLUListElement
import org.w3c.dom.css.CSSStyleSheet
import org.w3c.dom.css.get
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.document
import kotlin.browser.window

class SushiGoRound {

    lateinit var styleSheet: CSSStyleSheet
    var targetRuleIndex: Int? = null
    //var currentElement: HTMLLIElement? = null
    lateinit var ulArray: List<HTMLUListElement>

    private val onAction = EventListener {

        if (::styleSheet.isInitialized.not()) {
            styleSheet = document.styleSheets[0] as CSSStyleSheet
        }

        if (targetRuleIndex == null) {
            targetRuleIndex = styleSheet.cssRules.length
        }

        if (::ulArray.isInitialized.not()) {
            ulArray = document.getElementsByClassName("sushi").toArray()
                    .mapNotNull { it as?  HTMLUListElement }
        }

        ulArray.forEach { parent ->
            val children = parent.children.toArray().mapNotNull { it as? HTMLLIElement }

            if (children[0].style.order.isEmpty()) {
                children.forEachIndexed { index, item ->
                    item.style.order = index.toString()
                }
            }

            slide(null, children)
        }

    }

    init {
        window.addEventListener("DOMContentLoaded", onAction, false)
    }

    private fun slide(current: HTMLLIElement?, children: List<HTMLLIElement>) {

        if (styleSheet.cssRules[targetRuleIndex!!] != null) {
            styleSheet.deleteRule(targetRuleIndex!!)

            children.forEach {
                current?.style?.animation = "none"
            }
        }

        val current = children.first { it.style.order.toInt() == 0 }

        val keyframes =
                """
                        @keyframes slide {
                            to {
                                margin-left: ${-current.clientWidth}px;
                            }
                        }
                        """
        styleSheet.insertRule(keyframes, targetRuleIndex!!)


        current.addEventListener("webkitAnimationEnd", object : EventListener {
            override fun handleEvent(event: Event) {
                current.removeEventListener("webkitAnimationEnd", this)

                children.forEach {
                    val order = it.style.order.toInt()
                    it.style.order = when (order) {
                        0 -> (children.size - 1).toString()
                        else -> (order - 1).toString()
                    }
                }
                slide(current, children)
            }
        })

        current.style.apply {
            animationName = "slide"
            animationDuration = "3s"
            animationIterationCount = "1"
            animationTimingFunction = "linear"
        }

    }

}

val sushi_go_round = SushiGoRound()