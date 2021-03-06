/* XXX: partial */
import {Markup, MarkupView} from "./markup"
import {pre} from "core/dom"

export class PreTextView extends MarkupView {
  model: PreText

  render(): void {
    super.render()
    const content = pre({style: {overflow: "auto"}}, this.model.text)
    this.markupEl.appendChild(content)
  }
}

export class PreText extends Markup {
}

PreText.prototype.type = "PreText"
PreText.prototype.default_view = PreTextView
