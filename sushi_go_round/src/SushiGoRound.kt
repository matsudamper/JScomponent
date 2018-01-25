import org.w3c.dom.HTMLLIElement
import org.w3c.dom.HTMLUListElement
import org.w3c.dom.events.EventListener
import kotlin.browser.document
import kotlin.browser.window
import kotlin.collections.first
import kotlin.collections.forEach
import kotlin.collections.forEachIndexed
import kotlin.collections.mapNotNull
import kotlin.collections.mutableMapOf
import kotlin.collections.set
import kotlin.math.absoluteValue

class SushiGoRound {

    var loopCounter = mutableMapOf<Int, Int>()

    private val onAction = EventListener {

        val ulArray = document.getElementsByClassName("sushi").toArray()
                .mapNotNull { it as?  HTMLUListElement }

        ulArray.forEachIndexed { index, parent ->
            val description = window.getComputedStyle(parent, null).getPropertyValue("flex-direction")

            // order追加
            val children = parent.children.toArray().mapNotNull { it as? HTMLLIElement }
            if (children[0].style.order.isEmpty()) {
                children.forEachIndexed { index, item ->
                    item.style.order = index.toString()
                }
            }

            // Loop
            loopCounter[index] = 0
            window.setInterval(handler = {
                val current = children.first { it.style.order.toInt() == 0 }

                fun orderChange() {
                    children.forEach {
                        val order = it.style.order.toInt()
                        it.style.order = when (order) {
                            0 -> (children.size - 1).toString()
                            else -> (order - 1).toString()
                        }
                    }
                }

                when (description) {
                    "row" -> {
                        if (loopCounter[index]!!.absoluteValue >= current.clientWidth) {
                            current.style.marginLeft = 0.toString()
                            loopCounter[index] = 0
                            orderChange()
                            return@setInterval
                        } else {
                            current.style.marginLeft = "${loopCounter[index]!!}px"
                        }
                    }
                    "row-reverse" -> {
                        if (loopCounter[index]!!.absoluteValue >= current.clientWidth) {
                            current.style.marginRight = 0.toString()
                            loopCounter[index] = 0
                            orderChange()
                            return@setInterval
                        } else {
                            current.style.marginRight = "${loopCounter[index]!!}px"
                        }
                    }
                    else -> throw IllegalStateException()
                }
                loopCounter[index] = loopCounter[index]!! - 1
            }, timeout = 50)
        }

    }

    init {
        window.addEventListener("DOMContentLoaded", onAction, false)
    }
}

val sushi_go_round = SushiGoRound()