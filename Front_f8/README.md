# Shortcut :fire:

- Ctrl + D  :heavy_plus_sign:  button :arrow_forward: ( Select multi `<tag>` ) 
- Ctrl + D  :heavy_plus_sign:  button :arrow_forward: :heavy_plus_sign: button Shift + Alt + :arrow_forward:
- Shift + Alt :heavy_plus_sign:  button :arrow_forward:
- Window + :heavy_plus_sign: To use manifest
- Ctrl + Shift + K : Xóa
- Ctrl + Shift + L : Chọn tất cả

### Emmet 
- .class
```
    <div class="class"></div>
```    

- #id
```
    <div id="id"></div>
```

- .box+.box
```
    <div class="box"></div>
    <div class="box"></div>
```

- .box>.box-inner+.box-content
```
    <div class="box">
        <div class="box-inner"></div>
        <div class="box-content"></div>
    </div>
```

- .header>.header-inner+.header-content^.container>.container-item
```
    <div class="header">
        <div class="header-inner"></div>
        <div class="header-content"></div>
    </div>
    <div class="container">
        <div class="container-item"></div>
    </div>
```

- ul>li.item$*3
```
    <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
    </ul>
```

- Wrap tới end tag, trong tag
Ctrl + Shift + P -> Emmet outward / Emmet inward

- Wrap Individual Lines with Abbreviation
```
    home
    about
    contact
    blog
    user
    cart
```
Ctrl + Shift + P -> Emmet : Wrap Individual Lines with Abbreviation
-> ul.menu__list>li*.menu_item>a.menu_link
```
    <ul class="menu__list">
        <li class="menu_item">
            <a href="" class="menu_link">home</a>
        </li>
        <li class="menu_item">
            <a href="" class="menu_link">about</a>
        </li>
        <li class="menu_item">
            <a href="" class="menu_link">contact</a>
        </li>
        <li class="menu_item">
            <a href="" class="menu_link">blog</a>
        </li>
        <li class="menu_item">
            <a href="" class="menu_link">user</a>
        </li>
        <li class="menu_item">
            <a href="" class="menu_link">cart</a>
        </li>
    </ul>
```
# Basic tag :smile:
- h1 | Heading tag
- p | Paragraph
- img | Image
- a | Anchor
- ul, li | Unordered list, list item 
- table 
- input
- button 
- div

# Attribute :sleeping:
```
<a title="This is attribute">Attribute in html</a>
```

# Usage CSS in HTML :relaxed:
- Internal | Viết thẳng trong file với tag `<style> </style>`
- External | Link file bên ngoài `<link rel="stylesheet" href="main.css">`
- Inline | Viết trong tag với thuộc tính style `<h1 style="color: red">Heading tag</h1>`

# ID and Class :kissing_heart:
- ID | identity identifier, sử dụng duy nhất không dc trùng
- Class Sử dụng nhiều trùng sau khi qua JS thì mới biết dc 2 anh này sao phải ID, và sao phải là class

# Prioritizing in CSS :satisfied:
- 2 Anh internal và external anh nào nằm dưới thì anh đó ưu tiên hơn
- Inline - 1000
- #id - 100 
- .class - 10
- tag - 1
- Equal specificity ?
- Universal ( 0 ) selector and inherited ?

# CSS variables :rage:
```
:root {
    --text-color: red;
}
.variables {
    color: var(--text-color);
}
```
# Units in Css :sunglasses:

### Absolute units
* px ( 1px tương ứng 1 điểm ảnh thật trên màn hình -> tùy độ phân giải màn hình )
* pt 
* cm
* mm 
* inch
* pc 

### Relative units 
* % ( Nó sẽ ảnh hưởng bởi tag cha warp nó )
* rem ( Nó sẽ ảnh hưởng bởi tag html ) (dễ kiểm soát) (html: font-size: 100% = 16px, Tăng hay giảm toàn bộ kích thước chữ)
* em ( Nó sẽ ảnh hưởng bởi tag wrap/ gần nhất chứa nó, tìm tới thuộc tính kích thước giống nó )
* vw | Viewport width
* vh | Viewport height
* vmin
* vmax
* ex
* ch

# CSS Padding :confused:
- padding: top right bottom left;
- padding-lelf
- padding-right
- padding-bottom
- padding-top

# CSS border :tired_face:
- border: position style color;
- border-top
- border-width
- border-top-with
- border-right-width
- border-bottom-width
- border-left-width
- border-style
- border-color

# CSS Margin :imp:
- margin 
- margin-top
- margin-bottom
- margin-right
- margin-left

# CSS Box-sizing :innocent:
- box-sizing: border-box; (Tổng padding, border + lại ra kích thước width, height)
- box-sizing: content-box; trở lại bình thường
- box-sizing: unset;

# CSS Background-clip :star:
- background-clip: border-box ( Đổ màu từ border vào )
- background-clip: padding-box ( Đổ màu từ padding vào )
- background-clip: content-box ( Đổ màu từ content )

# CSS Background-image :fist:
- background-image: linear-gradient(90deg, rgba(255, 255, 0, .5), rgba(0, 0, 255, .5) ), url('/no-image.png');
- background-size: 100% auto;
- background-repeat: no-repeat;

# CSS Background-size keyswords :triumph:
- background-size: contain;
- background-size: cover;

# CSS Background-origin :persevere: ( background-clip <-> color | background-origin <-> image )
- background-origin: border-box;
- background-origin: content-box;

# CSS background-position :dizzy:
- background-position: top right;
- background-position: top; ( tự hiểu giá trị thứ 2 là center )
- background-position: top 20px right 20px; ( giá trị kết hợp )
- background-position: 0 0; ( trục x - y )

# CSS background shorthand :no_mouth:
- background: url('/no-image.png') no-repeat center / contain; ( background-size cần thêm dấu / )

# CSS functions :alien:
- var()
- linear-gradient()
- rgba()
- rgb() ( rgb( 190, 124, 157 ) )
- calc() ( calc( 80% + 20% ) )
- attr()
```
a::after {
    content: "(" attr(href) ")";
}
.box::after {
    content: attr(data-title);
}
```

# Pseudo Classes( Lớp giả ) :anger:
- :root (phần tử gốc bao trùm toàn document html)
- :hover 
- :active
- :first-child 
- :last-child

# Pseudo Elements( Phần tử giả ) :fire:
- ::before
- ::after
- ::first-letter
- ::first-line
- ::selection

# CSS Position :dizzy_face:
- position: relative; ( Vị trí tương đối, lấy chính nó làm trục tọa độ không ảnh hưởng đối tượng nào cả )
- position: absolute; ( Di chuyển vị trí đối tượng con dựa/ phụ thuộc vào thuộc tính ( position ) đối tượng cha )
- position: fixed;
- position: sticky;

# Flexbox :grimacing:
![alt text](flex_terms.png)

- display: flex| inline-flex
- flex-direction: row| column
- flex-wrap: nowrap| wrap| wrap-reverse
- flex-basis: `<length>`
- justify-content: flex-start| flex-end| center| space-between| space-around
- justify-self: flex-start| flex-end| center
- align-content: flex-start| flex-end| center
- align-self: flex-start| flex-end| center
- flex-grow: `<number>`
- flex-shrink: `<number>`
- flex: `flex-grow | flex-shrink | flex-basis`
- order: `<number>`

# BEM Block Element Modifier :+1:
```
<header class="header"> <-- Block
    <nav class="header__navbar--success"> <-- navbar: Element, success: Modifier
    </nav>
    <nav class="header__navbar--error">
    </nav>
</header>
```

- Block Element Modifier
- BLOCK: sandalone component that is meaningful on its own.
- ELEMENT: part of a block that has no standalone meaning
- MODIFIER: a different version of a block or an element.

```
.block {}
.block__element {}
.block__element--modifier {}
```

# Create a triangle in CSS :sparkling_heart:
- https://css-tricks.com/snippets/css/css-triangle/
- https://css-tricks.com/the-shapes-of-css/

# Responsive (Trật tự, thống nhất, cân bằng) :bowtie: 
- Grid - lưới ( Trong grid có nhiều rows, cols ) ( Thường là phần cha )
-- Rows - dòng ( Trong Row chứa columns ) ( Chiều ngang ) (Loại bỏ phần khoảng trắng thừa ở col đầu và col cuối)
--- Columns - cột ( Trong columns là contents, parts website ) 
- Gutter: Khoảng cách 2 phí của Column.
### Hệ thống lưới thường gặp:
- Lưới nhiều cột ( Multilcolumn grid)
- Lưới một cột (Single column grid)
- Lưới module (Modular grid)
- Lưới đường cơ sở (Baseline grid)
### Lý thuyết: 
1. Column - Cột
Độ rộng sử dụng đơn vị % (tương đối) giúp linh động, dễ dàng tương thích với độ rộng khác nhau của các thiết bị. Số lượng cột trong grid system được xác định trước.
VD: 
- PC 12 | 16 cột
- Tablet 8 cột
- Mobile 4 cột
2. Gutter - Đường ngăn cách (rãnh ngăn)
Là khoảng cách 2 phía của 1 cột, tạo nên rãnh ngăn giữa  các cột. Độ rộng rãnh ngăn có thể thay đổi cho phú hợp với thiết kế hoặc độ rộng màn hình.
VD: 
- PC/Tablet 24px 
- Mobile 16px
3. Margin - Phần lề 
Là khoảng cách 2 bên trái/phải của bố cục chính của website. Độ rộng phần lề thay đổi để phù hợp với các kích thước màn hình. VD: Phần lề lớn thích hợp cho màn hình lớn như PC, Phần lề nhỏ thích hợp cho màn hình nhỏ Tablet, mobile.


# Handle title :couple: ( để ý line-height, height )
- 1 line 
```
text-overflow: ellipsis;
white-space: nowrap; 
```
- 2 lines
```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

# Use `currentColor` :weary:
- color: red;
- background-color: currentColor;


# Viewport :yum:
- https://responsivedesign.is/develop/responsive-html/viewport-meta-element/

# Media :cupid:
- https://zellwk.com/blog/media-query-units/
- @media @@not|only@@ mediatype @@and@@ (mediafeature @@and|or|not@@ mediafeature) {
    CSS-code;
}

1.Keywords: 
- not
- only
- and
- or

2. Mediatypes:
- print
- screen
- speech
- all - default

3. Media Features:
- min-width
- max-width
- ...

4. Polyfill ?
