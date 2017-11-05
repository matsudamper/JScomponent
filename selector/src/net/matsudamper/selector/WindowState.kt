package net.matsudamper.selector

enum class WindowState {
    XS {
        override fun getBreakPoint() = 0
        override fun getSuffix() = "xs"
    },
    SM {
        override fun getBreakPoint() = 768
        override fun getSuffix() = "sm"
    },
    MD {
        override fun getBreakPoint() = 768
        override fun getSuffix() = "md"
    },
    LG {
        override fun getBreakPoint() = 992
        override fun getSuffix() = "lg"
    },
    XL {
        override fun getBreakPoint() = 1200
        override fun getSuffix() = "xl"
    };

    abstract fun getBreakPoint(): Int
    abstract fun getSuffix() : String
}