import net.matsudamper.selector.toArray
import org.w3c.dom.Element
import org.w3c.dom.events.EventListener
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Math

class Layout {

    private val tagName = "flex-arrange"
    private val spaceName = "flex-arrange-space"

    private val beforeHeight = "data-before-height"

    private val onResized = EventListener {
        for (parent in document.body?.getElementsByTagName(tagName)?.toArray() ?: return@EventListener) {
            val height = parent.getBoundingClientRect().height

            // 前回と違う高さ
            if (height != parent.getAttribute(beforeHeight)?.toDoubleOrNull()) {
                parent.setAttribute(beforeHeight, height.toString())

                if (isSingle(parent)) {

                    (0..parent.childElementCount)
                            .forEach { parent.children[it]?.classList?.add("single") }

                } else {

                    (0..parent.childElementCount)
                            .forEach { parent.children[it]?.classList?.remove("single") }
                }
            }

        }
    }

    private fun isSingle(parent: Element): Boolean {
        val firstTop = parent.firstElementChild?.getBoundingClientRect()?.top ?: throw IllegalStateException()
        val secondTop = (parent.children[1] ?: return true).getBoundingClientRect().top

        return firstTop != secondTop
    }

    init {
        window.addEventListener("DOMContentLoaded", EventListener {

            val displaySize = Math.max(window.parent.screen.width, window.parent.screen.height)

            for (parent in document.body?.getElementsByTagName(tagName)?.toArray() ?: return@EventListener) {

                val child = parent.firstElementChild ?: continue
                val childWidth = child.getBoundingClientRect().width.toInt()

                for (i in 0..(displaySize / childWidth)) {
                    val newChild = child.cloneNode(false) as Element
                    newChild.classList.add(spaceName)

                    parent.append(newChild)
                }
            }
        }, false)

        window.addEventListener("DOMContentLoaded", onResized, false)
        window.addEventListener("resize", onResized, false)
    }
}

val hoge = Layout()
