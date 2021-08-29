import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./table.template";
import { resizeHandler } from "./table.resize";
import { shouldResize } from "./table.functions";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

     toHTML() {
        return createTable(30)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event)
        }
    }

}

{/* <div class="row">

                    <div class="row-info"></div>

                    <div class="row-data">

                        <div class="column">
                            A
                        </div>
                        <div class="column">
                            B
                        </div>
                        <div class="column">
                            C
                        </div>


                    </div>

                </div>

                <div class="row">

                    <div class="row-info">
                        1
                    </div>

                    <div class="row-data">

                        <div class="cell selected" contenteditable>A1</div>
                        <div class="cell" contenteditable>B2</div>
                        <div class="cell" contenteditable>C3</div>

                    </div>

                </div>

                <div class="row">

                    <div class="row-info">
                        1
                    </div>

                    <div class="row-data">

                        <div class="cell">A1</div>
                        <div class="cell">B2</div>
                        <div class="cell">C3</div>

                    </div>

                </div> */}