# Backoffice

Framework based on [Material UI](https://material-ui-next.com), a Material UI
React implementation that provided a couple of components you might want to use
in a backoffice app.

Backoffice also uses `react-router-dom`, `material-ui-icons` and some more OSS.

## Components

### Home

Dashboard-like homepage

### Menu

A menu that lists entries

### Listing

Data-Table

### AddButton

Button in the bottom right, that let's you link to a new page

### NoMatch

A content-snippet for 404 pages

### Drawer

Element that has an (off-canvas) menu

* `data: object[]`, menu data
* `open: boolean`, is the drawer open?
* `handleDrawerClose: function`, what happens when drawer is closed
* `redirectTo: function`, what happens when clicking on a link

### BackButton

A Button to go "back" to a given url

* `url: string`, where to go next

### Form

Form components

* `form: (FormGroup | FormField)[]`, form configuration

#### FormGroup

* `id: string`, identifier of the group
* `group: boolean`, group the following elements into one section
* `title: string`, title of the group
* `data: FormField[]`

#### FormField

* `id: string`, identifier of the field (concatenated with `FormGroup.id` if set)
* `type: ENUM('select' | 'list' | 'multiline' | 'text' | 'date' | 'time' | 'datetime')`, default: `text`
* `title: string`, label of field
* `width: ENUM('small' | 'mid' | 'full')`, default: `full`
* `value: string | string[]`, default value of a field
* `options: string[]`, options of a field of type `select`
* `format: string`, formation of a field of type `date`, `time` or `datetime`, uses [Moment.js](https://momentjs.com/docs/#/parsing/string-format/)
* `renderElement: function`, element that should be rendered of a field of type `list`

### ErrorSnackbar

Show an error in the left hand corner

* `open: boolean`, is the snackbar open?
* `message: string`, message to show with snackbar
