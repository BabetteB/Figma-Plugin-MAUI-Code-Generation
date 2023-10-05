import { Property } from "./Property"

export type Element = {
    name : ElementName,
    properties : Property[]
}

export enum ElementName {
    Background,
    LinearGradientBrush,
    RadialGradientBrush,
    GradientStop,
    Shadow,
    Label,
    Button,
    Editor,
    Entry,
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
