import { Property } from "./Property"

export type Element = {
    name : ElementName,
    properties : Property[]
}

export enum ElementName {
    Label,
    Button,
    StackFrame,
    TextBlock,
    TextBox,
    ComboBox,
    ListBox,
    ListView,
    RadioButton,
    CheckBox,
    Image,
    Border,
    ScrollViewer,
    ProgressBar,
    Slider,
    TabControl,
    TabItem,
    Menu,
    MenuItem,
    ContextMenu,
    Popup,
    Rectangle,
    Ellipse,
    Polygon,
    Line,
    HorizontalStackLayout,
    VerticalStackLayout,
    FlexLayout,
    Frame,
}
