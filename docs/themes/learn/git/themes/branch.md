# Работа с ветками и коммитами

### `branch` `checkout`
```bash:no-line-numbers:no-line-numbers
git branch                    # Список веток с указанием текущей
git branch NameBranch         # Создание новой ветки
git checkout -b NameBranch    # Создание новой ветки
git checkout NameBranch       # Переход на ветку
git branch -m NewName         # Переименование локальной ветки (если на текущей ветке)
git branch -m OldName NewName # Переименование локальной ветки (если на другой ветке)
git branch -d NameBranch      # Удаление ветки (после мерджа)
git branch -D NameBranch      # Удаление ветки (тупиковая ветвь)
git push origin -d NameBranch # Удаление ветки из удаленного репозитория
git push origin :NameBranch   # Удаление ветки из удаленного репозитория
```

### `log` `cherry-pick`
- `cherry-pick` позволяет взять коммит с <u>Ветки1</u> и перенести его на <u>Ветку2</u>
- Вызывается из ветки, в которую нужно добавить коммиты
```bash:no-line-numbers:no-line-numbers
git log                    # Информация по коммитам
git cherry-pick HashCommit # Взять изменения определенного коммита
```

### `stash`
- Сменить ветку, не теряя текущих несохраненных изменений
```bash:no-line-numbers:no-line-numbers
git stash       # Сохранение неподтвержденных изменений в отдельном хранилище
git stash -u    # Сохранение неподтвержденных изменений, включая файлы НЕ в Индексе
git stash pop   # Применение отложенных изменений (происходит удаление из набора)
git stash apply # Применение отложенных изменений (НЕ происходит удаление из набора)
git stash clear # Удалить все наборы отложенных изменений
```
