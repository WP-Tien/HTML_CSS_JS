## Noting text line

```css
.text-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    &--2 {
        -webkit-line-clamp: 2;
    }
}

&__details {
    // 1 line
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```