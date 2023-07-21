const iconsDOM = document.querySelector(".icons");
const showTime = document.querySelector(".iconShowTime");

class Icons {
  async getIcons() {
    try {
      let result = await fetch("icons.json");
      let icons = await result.json();

      icons = Object.keys(icons).map((k) => {
        const name = k;
        const svg = icons[k].svg;
        const label = icons[k].label;
        const styles = icons[k].styles;
        const unicode = icons[k].unicode;

        return { name, label, styles, svg, unicode };
      });

      return icons;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayIcons(icons) {
    let result = "";

    icons.forEach((icon) => {
      let svg = icon.svg;

      Object.keys(svg).map((k) => {
        result += `
        <div class="icon icon__${icon.name}">
          <span data-name="${icon.name}" data-style="${k}">
            ${icon.svg[k].raw}
          </span>
        </div>
    `;
      });
    });
    iconsDOM.innerHTML = result;
  }

  selectIcon() {
    var styleClass = "";

    iconsDOM.addEventListener("click", (e) => {
      showTime.classList = "iconShowTime";

      const targetIcon = e.target.closest("span");

      if (!targetIcon) return;
      styleClass = Support.styleClass(targetIcon.dataset.style);
      name = `fa-${targetIcon.dataset.name}`;

      showTime.classList.add(styleClass, name);
    });
  }
}

class Support {
  static styleClass(style) {
    switch (style) {
      case "solid":
        style = "fas";
        break;
      case "brands":
        style = "fab";
        break;
      case "regular":
        style = "far";
        break;
      default:
        style = "";
    }
    return style;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const icons = new Icons();

  icons.getIcons().then((icons) => {
    ui.displayIcons(icons);
  });

  ui.selectIcon();
});
