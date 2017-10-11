window.addEventListener("resize", FlexRowJustSpace, false);
window.addEventListener("load", FlexRowJustSpace, false);

function FlexRowJustSpace() {

    for (var classCount = 0; classCount < document.getElementsByClassName("flex-row-just-wrap").length; classCount++) {
        var obj = document.getElementsByClassName("flex-row-just-wrap").item(classCount);

        var spaceItemCount = obj.getElementsByClassName("flex-row-just-space").length;

        // 存在するなら
        if (obj.firstElementChild) {
            var firstTop = obj.firstElementChild.getBoundingClientRect().top;

            for (var rowCount = 1; rowCount < obj.childElementCount; rowCount++) {

                // 改行されたら
                if (obj.children[rowCount].getBoundingClientRect().top !== firstTop) {

                    var addSpaceCount = rowCount - (obj.childElementCount - spaceItemCount) % rowCount - spaceItemCount;

                    // 割り切れたなら
                    if ((obj.childElementCount - spaceItemCount) % rowCount === 0) {
                        addSpaceCount = spaceItemCount * -1;
                    }

                    if (addSpaceCount > 0) {
                        // 追加
                        if (addSpaceCount + spaceItemCount !== rowCount) {
                            for (var ii = 0; ii < addSpaceCount; ii++) {

                                var child = obj.firstElementChild.cloneNode(true);
                                child.classList.add("flex-row-just-space");

                                obj.appendChild(child);
                            }
                        }
                    } else {
                        // 削除
                        addSpaceCount = addSpaceCount * -1;

                        var spaceItems = obj.getElementsByClassName("flex-row-just-space");

                        for (var ii = 0; ii < addSpaceCount; ii++) {
                            obj.removeChild(spaceItems.item(0))
                        }
                    }

                    // 一列なら
                    if (rowCount === 1) {
                        for (var ii = 0; ii < obj.childElementCount; ii++) {
                            obj.childNodes[ii].classList.add("flex-row-just-wrap__single-column");
                        }
                    }else {
                        for (var ii = 0; ii < obj.childElementCount; ii++) {
                            obj.childNodes[ii].classList.remove("flex-row-just-wrap__single-column");
                        }
                    }

                    break;
                }
            }
        }
    }
}