package net.matsudamper.selector

import org.w3c.dom.Element
import org.w3c.dom.HTMLCollection
import org.w3c.dom.get

fun HTMLCollection.forEach(action: (Element) -> Unit) {
    for (i in 0..this.length) this[i]?.let(action)
}

fun HTMLCollection.toArray(): List<Element> = mutableListOf<Element>().also { result ->
    for (i in 0..this.length) this[i]?.let { result.add(it) }
}