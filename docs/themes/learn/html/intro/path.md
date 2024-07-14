# Задание пути к файлам

::: details Темы
- Относительные и абсолютные пути
- Подключение файла style.css
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Относительные и абсолютные пути
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<table>
    <tr>
        <td>https://yandex.ru/mail.html</td>
        <td>Абсолютный путь</td>
    </tr>
    <tr>
        <td>mail.html</td>
        <td>Относительный путь (относительно index.html)</td>
    </tr>
    <tr>
        <td>C:\Users\User\Desktop\www\mail.html</td>
        <td>Абсолютный путь</td>
    </tr>
    <tr>
        <td>mail.html</td>
        <td>Относительный путь (относительно index.html)</td>
    </tr>
</table>


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Подключение файла `style.css`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```bash:no-line-numbers
href="style.css"     # Файлы index.html и style.css находится в одной папке
href="css/style.css" # Файл style.css находится в папке "css" (директория вниз)
href="../style.css"  # Файл style.css находится на директорию выше (директория вверх)
```

