Практическая задача

# 1 TODO App - Верстка

Вам нужно будет реализовать простое TODO приложение на основе готовой верстки.
Задача будет разбита на этапы, код ревью будет проводится по итоговому приложению.
Первая часть - создать реакт приложение и перенести верстку.

Ссылка на репо с версткой https://github.com/jm-program/todo-template

Вам нужно:

- Перенести верстку TODO из примера в ваше React приложение.
- Разбейте верстку на компоненты и отобразите на экране визуальную часть TODO. Вынесите в отдельные компоненты:
  Task - одна задача
  TaskList - список задач
  NewTaskForm - форма для добавления
  Footer - футер с информацией и кнопками
  TasksFilter - фильтры в футере
- Сделайте, чтобы все данные в Task передавались через props из верхнего компонента вашего приложения

Особенности:

Пока не реализовывайте отображение строки "created 5 minutes ago" - мы займемся этим потом
Время создания задачи должно быть классом Date
Для отображения в качестве строки используйте эту функцию библиотеки date-fns (https://date-fns.org/v2.13.0/docs/formatDistanceToNow)

# 2 Продолжим работу над нашим приложением.

Вам нужно:

- Перенесите список ваших задач в состояние родительского компонента
- Реализуйте изменение состояние задачи активный-выполненный
- Реализуйте удаление задачи из списка

# 3 Завершаем приложение.

Вам нужно:

- Реализовать добавление задач
- Реализовать логику фильтрации
- Если выбран таб All, то отображаются все задачи.
- Если выбран таб Active, то отображаются лишь незавершенные задачи
- Если выбран таб Completed, то отображаются лишь завершенные задачи

- Добавьте возможность удаления всех Completed задач нажатием на кнопку "Clear completed", которая расположена в нижней части списка задач с правой стороны.

- Добавьте логику для счетчика незавершенных задач, расположенного в нижней части списка задач с левой стороны. Счетчик всегда должен показывать общее количество незавершенных задач независимо от того, что отображается на экране пользователя и какой таб выбран.

# 4 Финальные штрихи.

Вам нужно:

- Фиксировать время создания задачи в момент ее добавления, а в списке выводить "created N seconds / minutes ago"
- Добавить defaultProps вашим компонентам
- Добавить propTypes вашим компонентам
- Проверьте, что ваше приложение функционирует правильно
- Проверьте, что во время использования приложения нет никаких ошибок / предупреждений в консоли браузера
- Изучите статью о философии React и убедитесь, что ваше приложение соотвествует принятым в React правилам
  Для первого пункта вам потребуется установить библиотеку date-fns и воспользоваться функцией formatDistanceToNow

Результат должен быть ссылкой на репозиторий гитхаб Pages
