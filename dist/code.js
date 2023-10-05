/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Element.ts":
/*!************************!*\
  !*** ./src/Element.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementName: () => (/* binding */ ElementName)
/* harmony export */ });
var ElementName;
(function (ElementName) {
    ElementName[ElementName["Background"] = 0] = "Background";
    ElementName[ElementName["LinearGradientBrush"] = 1] = "LinearGradientBrush";
    ElementName[ElementName["RadialGradientBrush"] = 2] = "RadialGradientBrush";
    ElementName[ElementName["GradientStop"] = 3] = "GradientStop";
    ElementName[ElementName["Shadow"] = 4] = "Shadow";
    ElementName[ElementName["Label"] = 5] = "Label";
    ElementName[ElementName["Button"] = 6] = "Button";
    ElementName[ElementName["Editor"] = 7] = "Editor";
    ElementName[ElementName["Entry"] = 8] = "Entry";
    ElementName[ElementName["StackFrame"] = 9] = "StackFrame";
    ElementName[ElementName["TextBlock"] = 10] = "TextBlock";
    ElementName[ElementName["TextBox"] = 11] = "TextBox";
    ElementName[ElementName["ComboBox"] = 12] = "ComboBox";
    ElementName[ElementName["ListBox"] = 13] = "ListBox";
    ElementName[ElementName["ListView"] = 14] = "ListView";
    ElementName[ElementName["RadioButton"] = 15] = "RadioButton";
    ElementName[ElementName["CheckBox"] = 16] = "CheckBox";
    ElementName[ElementName["Image"] = 17] = "Image";
    ElementName[ElementName["Border"] = 18] = "Border";
    ElementName[ElementName["ScrollViewer"] = 19] = "ScrollViewer";
    ElementName[ElementName["ProgressBar"] = 20] = "ProgressBar";
    ElementName[ElementName["Slider"] = 21] = "Slider";
    ElementName[ElementName["TabControl"] = 22] = "TabControl";
    ElementName[ElementName["TabItem"] = 23] = "TabItem";
    ElementName[ElementName["Menu"] = 24] = "Menu";
    ElementName[ElementName["MenuItem"] = 25] = "MenuItem";
    ElementName[ElementName["ContextMenu"] = 26] = "ContextMenu";
    ElementName[ElementName["Popup"] = 27] = "Popup";
    ElementName[ElementName["Rectangle"] = 28] = "Rectangle";
    ElementName[ElementName["Ellipse"] = 29] = "Ellipse";
    ElementName[ElementName["Polygon"] = 30] = "Polygon";
    ElementName[ElementName["Line"] = 31] = "Line";
    ElementName[ElementName["HorizontalStackLayout"] = 32] = "HorizontalStackLayout";
    ElementName[ElementName["VerticalStackLayout"] = 33] = "VerticalStackLayout";
    ElementName[ElementName["FlexLayout"] = 34] = "FlexLayout";
    ElementName[ElementName["Frame"] = 35] = "Frame";
})(ElementName || (ElementName = {}));


/***/ }),

/***/ "./src/Property.ts":
/*!*************************!*\
  !*** ./src/Property.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyName: () => (/* binding */ PropertyName)
/* harmony export */ });
var PropertyName;
(function (PropertyName) {
    //rectangle
    PropertyName[PropertyName["RadiusX"] = 0] = "RadiusX";
    PropertyName[PropertyName["RadiusY"] = 1] = "RadiusY";
    // vector?
    PropertyName[PropertyName["Center"] = 2] = "Center";
    PropertyName[PropertyName["EndPoint"] = 3] = "EndPoint";
    PropertyName[PropertyName["Color"] = 4] = "Color";
    //Shadow
    PropertyName[PropertyName["Brush"] = 5] = "Brush";
    PropertyName[PropertyName["OffSet"] = 6] = "OffSet";
    PropertyName[PropertyName["Radius"] = 7] = "Radius";
    //Common
    PropertyName[PropertyName["VerticalOptions"] = 8] = "VerticalOptions";
    PropertyName[PropertyName["HorizontalOptions"] = 9] = "HorizontalOptions";
    PropertyName[PropertyName["Background"] = 10] = "Background";
    //Margin is not possible to have on a figma node
    //Button
    PropertyName[PropertyName["BorderWidth"] = 11] = "BorderWidth";
    PropertyName[PropertyName["ContentLayout"] = 12] = "ContentLayout";
    //Label
    PropertyName[PropertyName["CharacterSpacing"] = 13] = "CharacterSpacing";
    PropertyName[PropertyName["FontAttributes"] = 14] = "FontAttributes";
    PropertyName[PropertyName["FontAutoScalingEnabled"] = 15] = "FontAutoScalingEnabled";
    PropertyName[PropertyName["FontFamily"] = 16] = "FontFamily";
    PropertyName[PropertyName["FontSize"] = 17] = "FontSize";
    PropertyName[PropertyName["FormattedText"] = 18] = "FormattedText";
    PropertyName[PropertyName["HorizontalTextAlignment"] = 19] = "HorizontalTextAlignment";
    PropertyName[PropertyName["LineBreakMode"] = 20] = "LineBreakMode";
    PropertyName[PropertyName["LineHeight"] = 21] = "LineHeight";
    PropertyName[PropertyName["MaxLines"] = 22] = "MaxLines";
    PropertyName[PropertyName["Padding"] = 23] = "Padding";
    PropertyName[PropertyName["Text"] = 24] = "Text";
    PropertyName[PropertyName["TextColor"] = 25] = "TextColor";
    PropertyName[PropertyName["TextDecorations"] = 26] = "TextDecorations";
    PropertyName[PropertyName["TextTransform"] = 27] = "TextTransform";
    PropertyName[PropertyName["TextType"] = 28] = "TextType";
    PropertyName[PropertyName["VerticalTextAlignment"] = 29] = "VerticalTextAlignment";
    //Frame
    PropertyName[PropertyName["Spacing"] = 30] = "Spacing";
    //FlexLayout
    PropertyName[PropertyName["AlignContent"] = 31] = "AlignContent";
    PropertyName[PropertyName["AlignItems"] = 32] = "AlignItems";
    PropertyName[PropertyName["Direction"] = 33] = "Direction";
    PropertyName[PropertyName["JustifyContent"] = 34] = "JustifyContent";
    PropertyName[PropertyName["Position"] = 35] = "Position";
    PropertyName[PropertyName["Wrap"] = 36] = "Wrap";
    PropertyName[PropertyName["AlignSelf"] = 37] = "AlignSelf";
    PropertyName[PropertyName["Basis"] = 38] = "Basis";
    PropertyName[PropertyName["Grow"] = 39] = "Grow";
    PropertyName[PropertyName["Order"] = 40] = "Order";
    PropertyName[PropertyName["Shrink"] = 41] = "Shrink";
    //Polygon
    PropertyName[PropertyName["Points"] = 42] = "Points";
    PropertyName[PropertyName["Fill"] = 43] = "Fill";
    PropertyName[PropertyName["FillRule"] = 44] = "FillRule";
    PropertyName[PropertyName["Stroke"] = 45] = "Stroke";
    PropertyName[PropertyName["StrokeThickness"] = 46] = "StrokeThickness";
    //Line
    PropertyName[PropertyName["X1"] = 47] = "X1";
    PropertyName[PropertyName["X2"] = 48] = "X2";
    PropertyName[PropertyName["Y1"] = 49] = "Y1";
    PropertyName[PropertyName["Y2"] = 50] = "Y2";
    //Border
    PropertyName[PropertyName["StrokeShape"] = 51] = "StrokeShape";
    PropertyName[PropertyName["FontAttribute"] = 52] = "FontAttribute";
    PropertyName[PropertyName["ForegroundColor"] = 53] = "ForegroundColor";
    PropertyName[PropertyName["BorderColor"] = 54] = "BorderColor";
    PropertyName[PropertyName["BorderThickness"] = 55] = "BorderThickness";
    PropertyName[PropertyName["Visibility"] = 56] = "Visibility";
    PropertyName[PropertyName["IsEnabled"] = 57] = "IsEnabled";
    PropertyName[PropertyName["IsReadOnly"] = 58] = "IsReadOnly";
    PropertyName[PropertyName["FontWeight"] = 59] = "FontWeight";
    PropertyName[PropertyName["FontStyle"] = 60] = "FontStyle";
    PropertyName[PropertyName["TextAlignment"] = 61] = "TextAlignment";
    PropertyName[PropertyName["ImageSource"] = 62] = "ImageSource";
    PropertyName[PropertyName["Source"] = 63] = "Source";
    PropertyName[PropertyName["HorizontalAlignment"] = 64] = "HorizontalAlignment";
    PropertyName[PropertyName["VerticalAlignment"] = 65] = "VerticalAlignment";
    PropertyName[PropertyName["Opacity"] = 66] = "Opacity";
    PropertyName[PropertyName["Command"] = 67] = "Command";
    PropertyName[PropertyName["CommandParameter"] = 68] = "CommandParameter";
    PropertyName[PropertyName["IsChecked"] = 69] = "IsChecked";
    PropertyName[PropertyName["Content"] = 70] = "Content";
    PropertyName[PropertyName["Header"] = 71] = "Header";
    PropertyName[PropertyName["PlaceholderText"] = 72] = "PlaceholderText";
    PropertyName[PropertyName["PlaceholderTextColor"] = 73] = "PlaceholderTextColor";
    PropertyName[PropertyName["IsVisible"] = 74] = "IsVisible";
    PropertyName[PropertyName["IsFocused"] = 75] = "IsFocused";
    PropertyName[PropertyName["IsSelected"] = 76] = "IsSelected";
    PropertyName[PropertyName["ItemsSource"] = 77] = "ItemsSource";
    PropertyName[PropertyName["ItemTemplate"] = 78] = "ItemTemplate";
    PropertyName[PropertyName["Placeholder"] = 79] = "Placeholder";
    PropertyName[PropertyName["SelectedIndex"] = 80] = "SelectedIndex";
    PropertyName[PropertyName["Minimum"] = 81] = "Minimum";
    PropertyName[PropertyName["Maximum"] = 82] = "Maximum";
    PropertyName[PropertyName["Value"] = 83] = "Value";
    PropertyName[PropertyName["IsToggled"] = 84] = "IsToggled";
    PropertyName[PropertyName["CornerRadius"] = 85] = "CornerRadius";
    PropertyName[PropertyName["IsPassword"] = 86] = "IsPassword";
    PropertyName[PropertyName["IsReadOnlyCaretVisible"] = 87] = "IsReadOnlyCaretVisible";
    PropertyName[PropertyName["Items"] = 88] = "Items";
    PropertyName[PropertyName["IsOpen"] = 89] = "IsOpen";
    PropertyName[PropertyName["IsEditable"] = 90] = "IsEditable";
    PropertyName[PropertyName["DisplayMemberPath"] = 91] = "DisplayMemberPath";
    PropertyName[PropertyName["SelectedValue"] = 92] = "SelectedValue";
    PropertyName[PropertyName["SelectedValuePath"] = 93] = "SelectedValuePath";
    PropertyName[PropertyName["HeaderTemplate"] = 94] = "HeaderTemplate";
    PropertyName[PropertyName["FooterTemplate"] = 95] = "FooterTemplate";
    PropertyName[PropertyName["Icon"] = 96] = "Icon";
    PropertyName[PropertyName["IconSource"] = 97] = "IconSource";
    PropertyName[PropertyName["GroupName"] = 98] = "GroupName";
    PropertyName[PropertyName["CanUserSort"] = 99] = "CanUserSort";
    PropertyName[PropertyName["CanUserFilter"] = 100] = "CanUserFilter";
    PropertyName[PropertyName["Columns"] = 101] = "Columns";
    PropertyName[PropertyName["Rows"] = 102] = "Rows";
    PropertyName[PropertyName["ColumnDefinitions"] = 103] = "ColumnDefinitions";
    PropertyName[PropertyName["RowDefinitions"] = 104] = "RowDefinitions";
    PropertyName[PropertyName["CellPadding"] = 105] = "CellPadding";
    PropertyName[PropertyName["RowSpan"] = 106] = "RowSpan";
    PropertyName[PropertyName["ColumnSpan"] = 107] = "ColumnSpan";
    PropertyName[PropertyName["IsHeaderVisible"] = 108] = "IsHeaderVisible";
    PropertyName[PropertyName["IsSortable"] = 109] = "IsSortable";
    PropertyName[PropertyName["SortDirection"] = 110] = "SortDirection";
    PropertyName[PropertyName["GroupHeaderTemplate"] = 111] = "GroupHeaderTemplate";
    PropertyName[PropertyName["GroupFooterTemplate"] = 112] = "GroupFooterTemplate";
    PropertyName[PropertyName["GroupStyle"] = 113] = "GroupStyle";
    PropertyName[PropertyName["IsExpanded"] = 114] = "IsExpanded";
    PropertyName[PropertyName["ItemsPanel"] = 115] = "ItemsPanel";
    PropertyName[PropertyName["AlternatingRowColor"] = 116] = "AlternatingRowColor";
    PropertyName[PropertyName["ItemContainerStyle"] = 117] = "ItemContainerStyle";
    PropertyName[PropertyName["ItemContainerStyleSelector"] = 118] = "ItemContainerStyleSelector";
    PropertyName[PropertyName["ItemTemplateSelector"] = 119] = "ItemTemplateSelector";
    PropertyName[PropertyName["GroupHeaderStyle"] = 120] = "GroupHeaderStyle";
    PropertyName[PropertyName["GroupFooterStyle"] = 121] = "GroupFooterStyle";
    PropertyName[PropertyName["GroupFooterTemplateSelector"] = 122] = "GroupFooterTemplateSelector";
    PropertyName[PropertyName["ColumnHeaderStyle"] = 123] = "ColumnHeaderStyle";
    PropertyName[PropertyName["ColumnHeaderTemplateSelector"] = 124] = "ColumnHeaderTemplateSelector";
    PropertyName[PropertyName["FrozenColumnCount"] = 125] = "FrozenColumnCount";
    PropertyName[PropertyName["AutoGenerateColumns"] = 126] = "AutoGenerateColumns";
    PropertyName[PropertyName["ColumnsSource"] = 127] = "ColumnsSource";
    PropertyName[PropertyName["ColumnsWidth"] = 128] = "ColumnsWidth";
    PropertyName[PropertyName["SortMemberPath"] = 129] = "SortMemberPath";
    PropertyName[PropertyName["RowHeaderTemplate"] = 130] = "RowHeaderTemplate";
    PropertyName[PropertyName["RowHeaderStyle"] = 131] = "RowHeaderStyle";
    PropertyName[PropertyName["RowHeaderTemplateSelector"] = 132] = "RowHeaderTemplateSelector";
    PropertyName[PropertyName["AlternationCount"] = 133] = "AlternationCount";
    PropertyName[PropertyName["IsAlternatingRowColorEnabled"] = 134] = "IsAlternatingRowColorEnabled";
    PropertyName[PropertyName["IsItemClickEnabled"] = 135] = "IsItemClickEnabled";
    PropertyName[PropertyName["HorizontalScrollBarVisibility"] = 136] = "HorizontalScrollBarVisibility";
    PropertyName[PropertyName["VerticalScrollBarVisibility"] = 137] = "VerticalScrollBarVisibility";
    PropertyName[PropertyName["SelectionMode"] = 138] = "SelectionMode";
    PropertyName[PropertyName["SelectedItems"] = 139] = "SelectedItems";
    PropertyName[PropertyName["SelectedItem"] = 140] = "SelectedItem";
    PropertyName[PropertyName["ItemClick"] = 141] = "ItemClick";
    PropertyName[PropertyName["IsSticky"] = 142] = "IsSticky";
    PropertyName[PropertyName["IsPullToRefreshEnabled"] = 143] = "IsPullToRefreshEnabled";
    PropertyName[PropertyName["RefreshCommand"] = 144] = "RefreshCommand";
    PropertyName[PropertyName["IsPullToRefreshRefreshing"] = 145] = "IsPullToRefreshRefreshing";
    PropertyName[PropertyName["IsPullToRefreshRefreshingChanged"] = 146] = "IsPullToRefreshRefreshingChanged";
    PropertyName[PropertyName["IsLoadMoreEnabled"] = 147] = "IsLoadMoreEnabled";
    PropertyName[PropertyName["LoadMoreCommand"] = 148] = "LoadMoreCommand";
    PropertyName[PropertyName["IsLoadMoreLoading"] = 149] = "IsLoadMoreLoading";
    PropertyName[PropertyName["IsLoadMoreLoadingChanged"] = 150] = "IsLoadMoreLoadingChanged";
    PropertyName[PropertyName["ItemTapped"] = 151] = "ItemTapped";
    PropertyName[PropertyName["ItemSelected"] = 152] = "ItemSelected";
    PropertyName[PropertyName["ItemDoubleTapped"] = 153] = "ItemDoubleTapped";
    PropertyName[PropertyName["SwipeLeftCommand"] = 154] = "SwipeLeftCommand";
    PropertyName[PropertyName["SwipeRightCommand"] = 155] = "SwipeRightCommand";
    PropertyName[PropertyName["SwipeUpCommand"] = 156] = "SwipeUpCommand";
    PropertyName[PropertyName["SwipeDownCommand"] = 157] = "SwipeDownCommand";
    PropertyName[PropertyName["SwipeItems"] = 158] = "SwipeItems";
    PropertyName[PropertyName["IsRefreshing"] = 159] = "IsRefreshing";
    PropertyName[PropertyName["RefreshCommandParameter"] = 160] = "RefreshCommandParameter";
    PropertyName[PropertyName["RowHeight"] = 161] = "RowHeight";
    PropertyName[PropertyName["AutoGenerateItem"] = 162] = "AutoGenerateItem";
    PropertyName[PropertyName["ScrollMode"] = 163] = "ScrollMode";
    PropertyName[PropertyName["ScrollBarVisibility"] = 164] = "ScrollBarVisibility";
    PropertyName[PropertyName["ScrollTo"] = 165] = "ScrollTo";
    PropertyName[PropertyName["ScrollToRow"] = 166] = "ScrollToRow";
    PropertyName[PropertyName["ScrollToRowIndex"] = 167] = "ScrollToRowIndex";
    PropertyName[PropertyName["ScrollToColumn"] = 168] = "ScrollToColumn";
    PropertyName[PropertyName["ScrollToColumnIndex"] = 169] = "ScrollToColumnIndex";
    PropertyName[PropertyName["HeaderTemplateSelector"] = 170] = "HeaderTemplateSelector";
    PropertyName[PropertyName["FooterTemplateSelector"] = 171] = "FooterTemplateSelector";
    PropertyName[PropertyName["GroupHeaderTemplateSelector"] = 172] = "GroupHeaderTemplateSelector";
    PropertyName[PropertyName["RowHeightResizer"] = 173] = "RowHeightResizer";
    PropertyName[PropertyName["OnPullStarted"] = 174] = "OnPullStarted";
    PropertyName[PropertyName["OnPullDelta"] = 175] = "OnPullDelta";
    PropertyName[PropertyName["OnPullCompleted"] = 176] = "OnPullCompleted";
    PropertyName[PropertyName["OnPullContent"] = 177] = "OnPullContent";
    PropertyName[PropertyName["OnReleaseContent"] = 178] = "OnReleaseContent";
    PropertyName[PropertyName["OnSwipeStarted"] = 179] = "OnSwipeStarted";
    PropertyName[PropertyName["OnSwipeDelta"] = 180] = "OnSwipeDelta";
    PropertyName[PropertyName["OnSwipeCompleted"] = 181] = "OnSwipeCompleted";
    PropertyName[PropertyName["OnRevealing"] = 182] = "OnRevealing";
    PropertyName[PropertyName["OnSwipeEnded"] = 183] = "OnSwipeEnded";
    PropertyName[PropertyName["OnRevealed"] = 184] = "OnRevealed";
    PropertyName[PropertyName["OnExecute"] = 185] = "OnExecute";
    PropertyName[PropertyName["OnHiding"] = 186] = "OnHiding";
    PropertyName[PropertyName["OnHidden"] = 187] = "OnHidden";
    PropertyName[PropertyName["OnStateChange"] = 188] = "OnStateChange";
    PropertyName[PropertyName["AnimationDuration"] = 189] = "AnimationDuration";
    PropertyName[PropertyName["MaxTopOffset"] = 190] = "MaxTopOffset";
    PropertyName[PropertyName["MinTopOffset"] = 191] = "MinTopOffset";
    PropertyName[PropertyName["MinTopRevealed"] = 192] = "MinTopRevealed";
    PropertyName[PropertyName["MaxTopRevealed"] = 193] = "MaxTopRevealed";
    PropertyName[PropertyName["ContentTemplate"] = 194] = "ContentTemplate";
    PropertyName[PropertyName["ContentTemplateSelector"] = 195] = "ContentTemplateSelector";
    PropertyName[PropertyName["Rotation"] = 196] = "Rotation";
    PropertyName[PropertyName["Scale"] = 197] = "Scale";
    PropertyName[PropertyName["TranslationX"] = 198] = "TranslationX";
    PropertyName[PropertyName["TranslationY"] = 199] = "TranslationY";
    PropertyName[PropertyName["LayoutX"] = 200] = "LayoutX";
    PropertyName[PropertyName["LayoutY"] = 201] = "LayoutY";
    PropertyName[PropertyName["WidthRequest"] = 202] = "WidthRequest";
    PropertyName[PropertyName["HeightRequest"] = 203] = "HeightRequest";
    PropertyName[PropertyName["MinimumWidthRequest"] = 204] = "MinimumWidthRequest";
    PropertyName[PropertyName["MinimumHeightRequest"] = 205] = "MinimumHeightRequest";
    PropertyName[PropertyName["AnchorX"] = 206] = "AnchorX";
    PropertyName[PropertyName["AnchorY"] = 207] = "AnchorY";
    PropertyName[PropertyName["RotationX"] = 208] = "RotationX";
    PropertyName[PropertyName["RotationY"] = 209] = "RotationY";
    PropertyName[PropertyName["ScaleX"] = 210] = "ScaleX";
    PropertyName[PropertyName["ScaleY"] = 211] = "ScaleY";
    PropertyName[PropertyName["PlatformConfiguration"] = 212] = "PlatformConfiguration";
    PropertyName[PropertyName["GestureRecognizers"] = 213] = "GestureRecognizers";
    PropertyName[PropertyName["Behavior"] = 214] = "Behavior";
    PropertyName[PropertyName["Triggers"] = 215] = "Triggers";
    PropertyName[PropertyName["ClassId"] = 216] = "ClassId";
    PropertyName[PropertyName["StyleId"] = 217] = "StyleId";
    PropertyName[PropertyName["FlowDirection"] = 218] = "FlowDirection";
    PropertyName[PropertyName["InputTransparent"] = 219] = "InputTransparent";
    PropertyName[PropertyName["IsVisibleBackgroundColor"] = 220] = "IsVisibleBackgroundColor";
    PropertyName[PropertyName["IsVisibleBorderColor"] = 221] = "IsVisibleBorderColor";
    PropertyName[PropertyName["IsVisibleCornerRadius"] = 222] = "IsVisibleCornerRadius";
    PropertyName[PropertyName["IsVisibleElevation"] = 223] = "IsVisibleElevation";
    PropertyName[PropertyName["IsVisiblePadding"] = 224] = "IsVisiblePadding";
    PropertyName[PropertyName["IsVisiblePlaceholder"] = 225] = "IsVisiblePlaceholder";
    PropertyName[PropertyName["IsVisibleSeparatorColor"] = 226] = "IsVisibleSeparatorColor";
    PropertyName[PropertyName["IsVisibleSeparatorWidth"] = 227] = "IsVisibleSeparatorWidth";
    PropertyName[PropertyName["IsVisibleShadow"] = 228] = "IsVisibleShadow";
    PropertyName[PropertyName["IsVisibleStroke"] = 229] = "IsVisibleStroke";
    PropertyName[PropertyName["IsVisibleTextColor"] = 230] = "IsVisibleTextColor";
    PropertyName[PropertyName["IsVisibleTextDecorations"] = 231] = "IsVisibleTextDecorations";
    PropertyName[PropertyName["IsVisibleTranslationX"] = 232] = "IsVisibleTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationY"] = 233] = "IsVisibleTranslationY";
    PropertyName[PropertyName["IsVisibleRotation"] = 234] = "IsVisibleRotation";
    PropertyName[PropertyName["IsVisibleScale"] = 235] = "IsVisibleScale";
    PropertyName[PropertyName["IsVisibleHeightRequest"] = 236] = "IsVisibleHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequest"] = 237] = "IsVisibleWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequest"] = 238] = "IsVisibleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequest"] = 239] = "IsVisibleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraints"] = 240] = "IsVisiblePaddingConstraints";
    PropertyName[PropertyName["IsVisibleRowSpacing"] = 241] = "IsVisibleRowSpacing";
    PropertyName[PropertyName["IsVisibleColumnSpacing"] = 242] = "IsVisibleColumnSpacing";
    PropertyName[PropertyName["IsVisibleBackgroundColorOpacity"] = 243] = "IsVisibleBackgroundColorOpacity";
    PropertyName[PropertyName["IsVisibleBorderColorOpacity"] = 244] = "IsVisibleBorderColorOpacity";
    PropertyName[PropertyName["IsVisibleSeparatorColorOpacity"] = 245] = "IsVisibleSeparatorColorOpacity";
    PropertyName[PropertyName["IsVisibleShadowOpacity"] = 246] = "IsVisibleShadowOpacity";
    PropertyName[PropertyName["IsVisibleTextColorOpacity"] = 247] = "IsVisibleTextColorOpacity";
    PropertyName[PropertyName["IsVisibleTranslationXOpacity"] = 248] = "IsVisibleTranslationXOpacity";
    PropertyName[PropertyName["IsVisibleTranslationYOpacity"] = 249] = "IsVisibleTranslationYOpacity";
    PropertyName[PropertyName["IsVisibleRotationOpacity"] = 250] = "IsVisibleRotationOpacity";
    PropertyName[PropertyName["IsVisibleScaleOpacity"] = 251] = "IsVisibleScaleOpacity";
    PropertyName[PropertyName["IsVisibleHeightRequestOpacity"] = 252] = "IsVisibleHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleWidthRequestOpacity"] = 253] = "IsVisibleWidthRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestOpacity"] = 254] = "IsVisibleMinimumHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestOpacity"] = 255] = "IsVisibleMinimumWidthRequestOpacity";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsOpacity"] = 256] = "IsVisiblePaddingConstraintsOpacity";
    PropertyName[PropertyName["IsVisibleRowSpacingOpacity"] = 257] = "IsVisibleRowSpacingOpacity";
    PropertyName[PropertyName["IsVisibleColumnSpacingOpacity"] = 258] = "IsVisibleColumnSpacingOpacity";
    PropertyName[PropertyName["IsEditableLayout"] = 259] = "IsEditableLayout";
    PropertyName[PropertyName["IsEnabledOpacity"] = 260] = "IsEnabledOpacity";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotation"] = 261] = "IsVisibleBackgroundColorRotation";
    PropertyName[PropertyName["IsVisibleBorderColorRotation"] = 262] = "IsVisibleBorderColorRotation";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotation"] = 263] = "IsVisibleCornerRadiusRotation";
    PropertyName[PropertyName["IsVisibleElevationRotation"] = 264] = "IsVisibleElevationRotation";
    PropertyName[PropertyName["IsVisiblePaddingRotation"] = 265] = "IsVisiblePaddingRotation";
    PropertyName[PropertyName["IsVisiblePlaceholderRotation"] = 266] = "IsVisiblePlaceholderRotation";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotation"] = 267] = "IsVisibleSeparatorColorRotation";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotation"] = 268] = "IsVisibleSeparatorWidthRotation";
    PropertyName[PropertyName["IsVisibleShadowRotation"] = 269] = "IsVisibleShadowRotation";
    PropertyName[PropertyName["IsVisibleStrokeRotation"] = 270] = "IsVisibleStrokeRotation";
    PropertyName[PropertyName["IsVisibleTextColorRotation"] = 271] = "IsVisibleTextColorRotation";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotation"] = 272] = "IsVisibleTextDecorationsRotation";
    PropertyName[PropertyName["IsVisibleTranslationXRotation"] = 273] = "IsVisibleTranslationXRotation";
    PropertyName[PropertyName["IsVisibleTranslationYRotation"] = 274] = "IsVisibleTranslationYRotation";
    PropertyName[PropertyName["IsVisibleRotationRotation"] = 275] = "IsVisibleRotationRotation";
    PropertyName[PropertyName["IsVisibleScaleRotation"] = 276] = "IsVisibleScaleRotation";
    PropertyName[PropertyName["IsVisibleHeightRequestRotation"] = 277] = "IsVisibleHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleWidthRequestRotation"] = 278] = "IsVisibleWidthRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotation"] = 279] = "IsVisibleMinimumHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotation"] = 280] = "IsVisibleMinimumWidthRequestRotation";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotation"] = 281] = "IsVisiblePaddingConstraintsRotation";
    PropertyName[PropertyName["IsVisibleRowSpacingRotation"] = 282] = "IsVisibleRowSpacingRotation";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotation"] = 283] = "IsVisibleColumnSpacingRotation";
    PropertyName[PropertyName["IsVisibleBackgroundColorScale"] = 284] = "IsVisibleBackgroundColorScale";
    PropertyName[PropertyName["IsVisibleBorderColorScale"] = 285] = "IsVisibleBorderColorScale";
    PropertyName[PropertyName["IsVisibleCornerRadiusScale"] = 286] = "IsVisibleCornerRadiusScale";
    PropertyName[PropertyName["IsVisibleElevationScale"] = 287] = "IsVisibleElevationScale";
    PropertyName[PropertyName["IsVisiblePaddingScale"] = 288] = "IsVisiblePaddingScale";
    PropertyName[PropertyName["IsVisiblePlaceholderScale"] = 289] = "IsVisiblePlaceholderScale";
    PropertyName[PropertyName["IsVisibleSeparatorColorScale"] = 290] = "IsVisibleSeparatorColorScale";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScale"] = 291] = "IsVisibleSeparatorWidthScale";
    PropertyName[PropertyName["IsVisibleShadowScale"] = 292] = "IsVisibleShadowScale";
    PropertyName[PropertyName["IsVisibleStrokeScale"] = 293] = "IsVisibleStrokeScale";
    PropertyName[PropertyName["IsVisibleTextColorScale"] = 294] = "IsVisibleTextColorScale";
    PropertyName[PropertyName["IsVisibleTextDecorationsScale"] = 295] = "IsVisibleTextDecorationsScale";
    PropertyName[PropertyName["IsVisibleTranslationXScale"] = 296] = "IsVisibleTranslationXScale";
    PropertyName[PropertyName["IsVisibleTranslationYScale"] = 297] = "IsVisibleTranslationYScale";
    PropertyName[PropertyName["IsVisibleRotationScale"] = 298] = "IsVisibleRotationScale";
    PropertyName[PropertyName["IsVisibleScaleScale"] = 299] = "IsVisibleScaleScale";
    PropertyName[PropertyName["IsVisibleHeightRequestScale"] = 300] = "IsVisibleHeightRequestScale";
    PropertyName[PropertyName["IsVisibleWidthRequestScale"] = 301] = "IsVisibleWidthRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScale"] = 302] = "IsVisibleMinimumHeightRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScale"] = 303] = "IsVisibleMinimumWidthRequestScale";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScale"] = 304] = "IsVisiblePaddingConstraintsScale";
    PropertyName[PropertyName["IsVisibleRowSpacingScale"] = 305] = "IsVisibleRowSpacingScale";
    PropertyName[PropertyName["IsVisibleColumnSpacingScale"] = 306] = "IsVisibleColumnSpacingScale";
    PropertyName[PropertyName["IsEnabledScale"] = 307] = "IsEnabledScale";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleX"] = 308] = "IsVisibleBackgroundColorScaleX";
    PropertyName[PropertyName["IsVisibleBorderColorScaleX"] = 309] = "IsVisibleBorderColorScaleX";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleX"] = 310] = "IsVisibleCornerRadiusScaleX";
    PropertyName[PropertyName["IsVisibleElevationScaleX"] = 311] = "IsVisibleElevationScaleX";
    PropertyName[PropertyName["IsVisiblePaddingScaleX"] = 312] = "IsVisiblePaddingScaleX";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleX"] = 313] = "IsVisiblePlaceholderScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleX"] = 314] = "IsVisibleSeparatorColorScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleX"] = 315] = "IsVisibleSeparatorWidthScaleX";
    PropertyName[PropertyName["IsVisibleShadowScaleX"] = 316] = "IsVisibleShadowScaleX";
    PropertyName[PropertyName["IsVisibleStrokeScaleX"] = 317] = "IsVisibleStrokeScaleX";
    PropertyName[PropertyName["IsVisibleTextColorScaleX"] = 318] = "IsVisibleTextColorScaleX";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleX"] = 319] = "IsVisibleTextDecorationsScaleX";
    PropertyName[PropertyName["IsVisibleTranslationXScaleX"] = 320] = "IsVisibleTranslationXScaleX";
    PropertyName[PropertyName["IsVisibleTranslationYScaleX"] = 321] = "IsVisibleTranslationYScaleX";
    PropertyName[PropertyName["IsVisibleRotationScaleX"] = 322] = "IsVisibleRotationScaleX";
    PropertyName[PropertyName["IsVisibleScaleScaleX"] = 323] = "IsVisibleScaleScaleX";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleX"] = 324] = "IsVisibleHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleX"] = 325] = "IsVisibleWidthRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleX"] = 326] = "IsVisibleMinimumHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleX"] = 327] = "IsVisibleMinimumWidthRequestScaleX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleX"] = 328] = "IsVisiblePaddingConstraintsScaleX";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleX"] = 329] = "IsVisibleRowSpacingScaleX";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleX"] = 330] = "IsVisibleColumnSpacingScaleX";
    PropertyName[PropertyName["IsEnabledScaleX"] = 331] = "IsEnabledScaleX";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleY"] = 332] = "IsVisibleBackgroundColorScaleY";
    PropertyName[PropertyName["IsVisibleBorderColorScaleY"] = 333] = "IsVisibleBorderColorScaleY";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleY"] = 334] = "IsVisibleCornerRadiusScaleY";
    PropertyName[PropertyName["IsVisibleElevationScaleY"] = 335] = "IsVisibleElevationScaleY";
    PropertyName[PropertyName["IsVisiblePaddingScaleY"] = 336] = "IsVisiblePaddingScaleY";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleY"] = 337] = "IsVisiblePlaceholderScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleY"] = 338] = "IsVisibleSeparatorColorScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleY"] = 339] = "IsVisibleSeparatorWidthScaleY";
    PropertyName[PropertyName["IsVisibleShadowScaleY"] = 340] = "IsVisibleShadowScaleY";
    PropertyName[PropertyName["IsVisibleStrokeScaleY"] = 341] = "IsVisibleStrokeScaleY";
    PropertyName[PropertyName["IsVisibleTextColorScaleY"] = 342] = "IsVisibleTextColorScaleY";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleY"] = 343] = "IsVisibleTextDecorationsScaleY";
    PropertyName[PropertyName["IsVisibleTranslationXScaleY"] = 344] = "IsVisibleTranslationXScaleY";
    PropertyName[PropertyName["IsVisibleTranslationYScaleY"] = 345] = "IsVisibleTranslationYScaleY";
    PropertyName[PropertyName["IsVisibleRotationScaleY"] = 346] = "IsVisibleRotationScaleY";
    PropertyName[PropertyName["IsVisibleScaleScaleY"] = 347] = "IsVisibleScaleScaleY";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleY"] = 348] = "IsVisibleHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleY"] = 349] = "IsVisibleWidthRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleY"] = 350] = "IsVisibleMinimumHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleY"] = 351] = "IsVisibleMinimumWidthRequestScaleY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleY"] = 352] = "IsVisiblePaddingConstraintsScaleY";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleY"] = 353] = "IsVisibleRowSpacingScaleY";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleY"] = 354] = "IsVisibleColumnSpacingScaleY";
    PropertyName[PropertyName["IsEnabledScaleY"] = 355] = "IsEnabledScaleY";
    PropertyName[PropertyName["IsVisibleBackgroundColorTranslationX"] = 356] = "IsVisibleBackgroundColorTranslationX";
    PropertyName[PropertyName["IsVisibleBorderColorTranslationX"] = 357] = "IsVisibleBorderColorTranslationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusTranslationX"] = 358] = "IsVisibleCornerRadiusTranslationX";
    PropertyName[PropertyName["IsVisibleElevationTranslationX"] = 359] = "IsVisibleElevationTranslationX";
    PropertyName[PropertyName["IsVisiblePaddingTranslationX"] = 360] = "IsVisiblePaddingTranslationX";
    PropertyName[PropertyName["IsVisiblePlaceholderTranslationX"] = 361] = "IsVisiblePlaceholderTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorTranslationX"] = 362] = "IsVisibleSeparatorColorTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthTranslationX"] = 363] = "IsVisibleSeparatorWidthTranslationX";
    PropertyName[PropertyName["IsVisibleShadowTranslationX"] = 364] = "IsVisibleShadowTranslationX";
    PropertyName[PropertyName["IsVisibleStrokeTranslationX"] = 365] = "IsVisibleStrokeTranslationX";
    PropertyName[PropertyName["IsVisibleTextColorTranslationX"] = 366] = "IsVisibleTextColorTranslationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsTranslationX"] = 367] = "IsVisibleTextDecorationsTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationXTranslationX"] = 368] = "IsVisibleTranslationXTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationYTranslationX"] = 369] = "IsVisibleTranslationYTranslationX";
    PropertyName[PropertyName["IsVisibleRotationTranslationX"] = 370] = "IsVisibleRotationTranslationX";
    PropertyName[PropertyName["IsVisibleScaleTranslationX"] = 371] = "IsVisibleScaleTranslationX";
    PropertyName[PropertyName["IsVisibleHeightRequestTranslationX"] = 372] = "IsVisibleHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleWidthRequestTranslationX"] = 373] = "IsVisibleWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestTranslationX"] = 374] = "IsVisibleMinimumHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestTranslationX"] = 375] = "IsVisibleMinimumWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsTranslationX"] = 376] = "IsVisiblePaddingConstraintsTranslationX";
    PropertyName[PropertyName["IsVisibleRowSpacingTranslationX"] = 377] = "IsVisibleRowSpacingTranslationX";
    PropertyName[PropertyName["IsVisibleColumnSpacingTranslationX"] = 378] = "IsVisibleColumnSpacingTranslationX";
    PropertyName[PropertyName["IsEnabledTranslationX"] = 379] = "IsEnabledTranslationX";
    PropertyName[PropertyName["IsVisibleBackgroundColorTranslationY"] = 380] = "IsVisibleBackgroundColorTranslationY";
    PropertyName[PropertyName["IsVisibleBorderColorTranslationY"] = 381] = "IsVisibleBorderColorTranslationY";
    PropertyName[PropertyName["IsVisibleCornerRadiusTranslationY"] = 382] = "IsVisibleCornerRadiusTranslationY";
    PropertyName[PropertyName["IsVisibleElevationTranslationY"] = 383] = "IsVisibleElevationTranslationY";
    PropertyName[PropertyName["IsVisiblePaddingTranslationY"] = 384] = "IsVisiblePaddingTranslationY";
    PropertyName[PropertyName["IsVisiblePlaceholderTranslationY"] = 385] = "IsVisiblePlaceholderTranslationY";
    PropertyName[PropertyName["IsVisibleSeparatorColorTranslationY"] = 386] = "IsVisibleSeparatorColorTranslationY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthTranslationY"] = 387] = "IsVisibleSeparatorWidthTranslationY";
    PropertyName[PropertyName["IsVisibleShadowTranslationY"] = 388] = "IsVisibleShadowTranslationY";
    PropertyName[PropertyName["IsVisibleStrokeTranslationY"] = 389] = "IsVisibleStrokeTranslationY";
    PropertyName[PropertyName["IsVisibleTextColorTranslationY"] = 390] = "IsVisibleTextColorTranslationY";
    PropertyName[PropertyName["IsVisibleTextDecorationsTranslationY"] = 391] = "IsVisibleTextDecorationsTranslationY";
    PropertyName[PropertyName["IsVisibleTranslationXTranslationY"] = 392] = "IsVisibleTranslationXTranslationY";
    PropertyName[PropertyName["IsVisibleTranslationYTranslationY"] = 393] = "IsVisibleTranslationYTranslationY";
    PropertyName[PropertyName["IsVisibleRotationTranslationY"] = 394] = "IsVisibleRotationTranslationY";
    PropertyName[PropertyName["IsVisibleScaleTranslationY"] = 395] = "IsVisibleScaleTranslationY";
    PropertyName[PropertyName["IsVisibleHeightRequestTranslationY"] = 396] = "IsVisibleHeightRequestTranslationY";
    PropertyName[PropertyName["IsVisibleWidthRequestTranslationY"] = 397] = "IsVisibleWidthRequestTranslationY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestTranslationY"] = 398] = "IsVisibleMinimumHeightRequestTranslationY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestTranslationY"] = 399] = "IsVisibleMinimumWidthRequestTranslationY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsTranslationY"] = 400] = "IsVisiblePaddingConstraintsTranslationY";
    PropertyName[PropertyName["IsVisibleRowSpacingTranslationY"] = 401] = "IsVisibleRowSpacingTranslationY";
    PropertyName[PropertyName["IsVisibleColumnSpacingTranslationY"] = 402] = "IsVisibleColumnSpacingTranslationY";
    PropertyName[PropertyName["IsEnabledTranslationY"] = 403] = "IsEnabledTranslationY";
    PropertyName[PropertyName["IsVisibleBackgroundColorLayoutX"] = 404] = "IsVisibleBackgroundColorLayoutX";
    PropertyName[PropertyName["IsVisibleBorderColorLayoutX"] = 405] = "IsVisibleBorderColorLayoutX";
    PropertyName[PropertyName["IsVisibleCornerRadiusLayoutX"] = 406] = "IsVisibleCornerRadiusLayoutX";
    PropertyName[PropertyName["IsVisibleElevationLayoutX"] = 407] = "IsVisibleElevationLayoutX";
    PropertyName[PropertyName["IsVisiblePaddingLayoutX"] = 408] = "IsVisiblePaddingLayoutX";
    PropertyName[PropertyName["IsVisiblePlaceholderLayoutX"] = 409] = "IsVisiblePlaceholderLayoutX";
    PropertyName[PropertyName["IsVisibleSeparatorColorLayoutX"] = 410] = "IsVisibleSeparatorColorLayoutX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthLayoutX"] = 411] = "IsVisibleSeparatorWidthLayoutX";
    PropertyName[PropertyName["IsVisibleShadowLayoutX"] = 412] = "IsVisibleShadowLayoutX";
    PropertyName[PropertyName["IsVisibleStrokeLayoutX"] = 413] = "IsVisibleStrokeLayoutX";
    PropertyName[PropertyName["IsVisibleTextColorLayoutX"] = 414] = "IsVisibleTextColorLayoutX";
    PropertyName[PropertyName["IsVisibleTextDecorationsLayoutX"] = 415] = "IsVisibleTextDecorationsLayoutX";
    PropertyName[PropertyName["IsVisibleTranslationXLayoutX"] = 416] = "IsVisibleTranslationXLayoutX";
    PropertyName[PropertyName["IsVisibleTranslationYLayoutX"] = 417] = "IsVisibleTranslationYLayoutX";
    PropertyName[PropertyName["IsVisibleRotationLayoutX"] = 418] = "IsVisibleRotationLayoutX";
    PropertyName[PropertyName["IsVisibleScaleLayoutX"] = 419] = "IsVisibleScaleLayoutX";
    PropertyName[PropertyName["IsVisibleHeightRequestLayoutX"] = 420] = "IsVisibleHeightRequestLayoutX";
    PropertyName[PropertyName["IsVisibleWidthRequestLayoutX"] = 421] = "IsVisibleWidthRequestLayoutX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestLayoutX"] = 422] = "IsVisibleMinimumHeightRequestLayoutX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestLayoutX"] = 423] = "IsVisibleMinimumWidthRequestLayoutX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsLayoutX"] = 424] = "IsVisiblePaddingConstraintsLayoutX";
    PropertyName[PropertyName["IsVisibleRowSpacingLayoutX"] = 425] = "IsVisibleRowSpacingLayoutX";
    PropertyName[PropertyName["IsVisibleColumnSpacingLayoutX"] = 426] = "IsVisibleColumnSpacingLayoutX";
    PropertyName[PropertyName["IsEnabledLayoutX"] = 427] = "IsEnabledLayoutX";
    PropertyName[PropertyName["IsVisibleBackgroundColorLayoutY"] = 428] = "IsVisibleBackgroundColorLayoutY";
    PropertyName[PropertyName["IsVisibleBorderColorLayoutY"] = 429] = "IsVisibleBorderColorLayoutY";
    PropertyName[PropertyName["IsVisibleCornerRadiusLayoutY"] = 430] = "IsVisibleCornerRadiusLayoutY";
    PropertyName[PropertyName["IsVisibleElevationLayoutY"] = 431] = "IsVisibleElevationLayoutY";
    PropertyName[PropertyName["IsVisiblePaddingLayoutY"] = 432] = "IsVisiblePaddingLayoutY";
    PropertyName[PropertyName["IsVisiblePlaceholderLayoutY"] = 433] = "IsVisiblePlaceholderLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorColorLayoutY"] = 434] = "IsVisibleSeparatorColorLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthLayoutY"] = 435] = "IsVisibleSeparatorWidthLayoutY";
    PropertyName[PropertyName["IsVisibleShadowLayoutY"] = 436] = "IsVisibleShadowLayoutY";
    PropertyName[PropertyName["IsVisibleStrokeLayoutY"] = 437] = "IsVisibleStrokeLayoutY";
    PropertyName[PropertyName["IsVisibleTextColorLayoutY"] = 438] = "IsVisibleTextColorLayoutY";
    PropertyName[PropertyName["IsVisibleTextDecorationsLayoutY"] = 439] = "IsVisibleTextDecorationsLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationXLayoutY"] = 440] = "IsVisibleTranslationXLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationYLayoutY"] = 441] = "IsVisibleTranslationYLayoutY";
    PropertyName[PropertyName["IsVisibleRotationLayoutY"] = 442] = "IsVisibleRotationLayoutY";
    PropertyName[PropertyName["IsVisibleScaleLayoutY"] = 443] = "IsVisibleScaleLayoutY";
    PropertyName[PropertyName["IsVisibleHeightRequestLayoutY"] = 444] = "IsVisibleHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleWidthRequestLayoutY"] = 445] = "IsVisibleWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestLayoutY"] = 446] = "IsVisibleMinimumHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestLayoutY"] = 447] = "IsVisibleMinimumWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsLayoutY"] = 448] = "IsVisiblePaddingConstraintsLayoutY";
    PropertyName[PropertyName["IsVisibleRowSpacingLayoutY"] = 449] = "IsVisibleRowSpacingLayoutY";
    PropertyName[PropertyName["IsVisibleColumnSpacingLayoutY"] = 450] = "IsVisibleColumnSpacingLayoutY";
    PropertyName[PropertyName["IsEnabledLayoutY"] = 451] = "IsEnabledLayoutY";
    PropertyName[PropertyName["IsVisibleBackgroundColorWidthRequest"] = 452] = "IsVisibleBackgroundColorWidthRequest";
    PropertyName[PropertyName["IsVisibleBorderColorWidthRequest"] = 453] = "IsVisibleBorderColorWidthRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusWidthRequest"] = 454] = "IsVisibleCornerRadiusWidthRequest";
    PropertyName[PropertyName["IsVisibleElevationWidthRequest"] = 455] = "IsVisibleElevationWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingWidthRequest"] = 456] = "IsVisiblePaddingWidthRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderWidthRequest"] = 457] = "IsVisiblePlaceholderWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorWidthRequest"] = 458] = "IsVisibleSeparatorColorWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthWidthRequest"] = 459] = "IsVisibleSeparatorWidthWidthRequest";
    PropertyName[PropertyName["IsVisibleShadowWidthRequest"] = 460] = "IsVisibleShadowWidthRequest";
    PropertyName[PropertyName["IsVisibleStrokeWidthRequest"] = 461] = "IsVisibleStrokeWidthRequest";
    PropertyName[PropertyName["IsVisibleTextColorWidthRequest"] = 462] = "IsVisibleTextColorWidthRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsWidthRequest"] = 463] = "IsVisibleTextDecorationsWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationXWidthRequest"] = 464] = "IsVisibleTranslationXWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationYWidthRequest"] = 465] = "IsVisibleTranslationYWidthRequest";
    PropertyName[PropertyName["IsVisibleRotationWidthRequest"] = 466] = "IsVisibleRotationWidthRequest";
    PropertyName[PropertyName["IsVisibleScaleWidthRequest"] = 467] = "IsVisibleScaleWidthRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestWidthRequest"] = 468] = "IsVisibleHeightRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestWidthRequest"] = 469] = "IsVisibleWidthRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestWidthRequest"] = 470] = "IsVisibleMinimumHeightRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestWidthRequest"] = 471] = "IsVisibleMinimumWidthRequestWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsWidthRequest"] = 472] = "IsVisiblePaddingConstraintsWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingWidthRequest"] = 473] = "IsVisibleRowSpacingWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingWidthRequest"] = 474] = "IsVisibleColumnSpacingWidthRequest";
    PropertyName[PropertyName["IsEnabledWidthRequest"] = 475] = "IsEnabledWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorHeightRequest"] = 476] = "IsVisibleBackgroundColorHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorHeightRequest"] = 477] = "IsVisibleBorderColorHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusHeightRequest"] = 478] = "IsVisibleCornerRadiusHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationHeightRequest"] = 479] = "IsVisibleElevationHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingHeightRequest"] = 480] = "IsVisiblePaddingHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderHeightRequest"] = 481] = "IsVisiblePlaceholderHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorHeightRequest"] = 482] = "IsVisibleSeparatorColorHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthHeightRequest"] = 483] = "IsVisibleSeparatorWidthHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowHeightRequest"] = 484] = "IsVisibleShadowHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeHeightRequest"] = 485] = "IsVisibleStrokeHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorHeightRequest"] = 486] = "IsVisibleTextColorHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsHeightRequest"] = 487] = "IsVisibleTextDecorationsHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXHeightRequest"] = 488] = "IsVisibleTranslationXHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYHeightRequest"] = 489] = "IsVisibleTranslationYHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationHeightRequest"] = 490] = "IsVisibleRotationHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleHeightRequest"] = 491] = "IsVisibleScaleHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestHeightRequest"] = 492] = "IsVisibleHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestHeightRequest"] = 493] = "IsVisibleWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestHeightRequest"] = 494] = "IsVisibleMinimumHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestHeightRequest"] = 495] = "IsVisibleMinimumWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsHeightRequest"] = 496] = "IsVisiblePaddingConstraintsHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingHeightRequest"] = 497] = "IsVisibleRowSpacingHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingHeightRequest"] = 498] = "IsVisibleColumnSpacingHeightRequest";
    PropertyName[PropertyName["IsEnabledHeightRequest"] = 499] = "IsEnabledHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumHeightRequest"] = 500] = "IsVisibleBackgroundColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumHeightRequest"] = 501] = "IsVisibleBorderColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumHeightRequest"] = 502] = "IsVisibleCornerRadiusMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumHeightRequest"] = 503] = "IsVisibleElevationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumHeightRequest"] = 504] = "IsVisiblePaddingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumHeightRequest"] = 505] = "IsVisiblePlaceholderMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumHeightRequest"] = 506] = "IsVisibleSeparatorColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumHeightRequest"] = 507] = "IsVisibleSeparatorWidthMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumHeightRequest"] = 508] = "IsVisibleShadowMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumHeightRequest"] = 509] = "IsVisibleStrokeMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumHeightRequest"] = 510] = "IsVisibleTextColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumHeightRequest"] = 511] = "IsVisibleTextDecorationsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumHeightRequest"] = 512] = "IsVisibleTranslationXMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumHeightRequest"] = 513] = "IsVisibleTranslationYMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumHeightRequest"] = 514] = "IsVisibleRotationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumHeightRequest"] = 515] = "IsVisibleScaleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumHeightRequest"] = 516] = "IsVisibleHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumHeightRequest"] = 517] = "IsVisibleWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumHeightRequest"] = 518] = "IsVisibleMinimumHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumHeightRequest"] = 519] = "IsVisibleMinimumWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumHeightRequest"] = 520] = "IsVisiblePaddingConstraintsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumHeightRequest"] = 521] = "IsVisibleRowSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumHeightRequest"] = 522] = "IsVisibleColumnSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsEnabledMinimumHeightRequest"] = 523] = "IsEnabledMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumWidthRequest"] = 524] = "IsVisibleBackgroundColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumWidthRequest"] = 525] = "IsVisibleBorderColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumWidthRequest"] = 526] = "IsVisibleCornerRadiusMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumWidthRequest"] = 527] = "IsVisibleElevationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumWidthRequest"] = 528] = "IsVisiblePaddingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumWidthRequest"] = 529] = "IsVisiblePlaceholderMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumWidthRequest"] = 530] = "IsVisibleSeparatorColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumWidthRequest"] = 531] = "IsVisibleSeparatorWidthMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumWidthRequest"] = 532] = "IsVisibleShadowMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumWidthRequest"] = 533] = "IsVisibleStrokeMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumWidthRequest"] = 534] = "IsVisibleTextColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumWidthRequest"] = 535] = "IsVisibleTextDecorationsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumWidthRequest"] = 536] = "IsVisibleTranslationXMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumWidthRequest"] = 537] = "IsVisibleTranslationYMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumWidthRequest"] = 538] = "IsVisibleRotationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumWidthRequest"] = 539] = "IsVisibleScaleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumWidthRequest"] = 540] = "IsVisibleHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumWidthRequest"] = 541] = "IsVisibleWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumWidthRequest"] = 542] = "IsVisibleMinimumHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumWidthRequest"] = 543] = "IsVisibleMinimumWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumWidthRequest"] = 544] = "IsVisiblePaddingConstraintsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumWidthRequest"] = 545] = "IsVisibleRowSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumWidthRequest"] = 546] = "IsVisibleColumnSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsEnabledMinimumWidthRequest"] = 547] = "IsEnabledMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorX"] = 548] = "IsVisibleBackgroundColorAnchorX";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorX"] = 549] = "IsVisibleBorderColorAnchorX";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorX"] = 550] = "IsVisibleCornerRadiusAnchorX";
    PropertyName[PropertyName["IsVisibleElevationAnchorX"] = 551] = "IsVisibleElevationAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingAnchorX"] = 552] = "IsVisiblePaddingAnchorX";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorX"] = 553] = "IsVisiblePlaceholderAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorX"] = 554] = "IsVisibleSeparatorColorAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorX"] = 555] = "IsVisibleSeparatorWidthAnchorX";
    PropertyName[PropertyName["IsVisibleShadowAnchorX"] = 556] = "IsVisibleShadowAnchorX";
    PropertyName[PropertyName["IsVisibleStrokeAnchorX"] = 557] = "IsVisibleStrokeAnchorX";
    PropertyName[PropertyName["IsVisibleTextColorAnchorX"] = 558] = "IsVisibleTextColorAnchorX";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorX"] = 559] = "IsVisibleTextDecorationsAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorX"] = 560] = "IsVisibleTranslationXAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorX"] = 561] = "IsVisibleTranslationYAnchorX";
    PropertyName[PropertyName["IsVisibleRotationAnchorX"] = 562] = "IsVisibleRotationAnchorX";
    PropertyName[PropertyName["IsVisibleScaleAnchorX"] = 563] = "IsVisibleScaleAnchorX";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorX"] = 564] = "IsVisibleHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorX"] = 565] = "IsVisibleWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorX"] = 566] = "IsVisibleMinimumHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorX"] = 567] = "IsVisibleMinimumWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorX"] = 568] = "IsVisiblePaddingConstraintsAnchorX";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorX"] = 569] = "IsVisibleRowSpacingAnchorX";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorX"] = 570] = "IsVisibleColumnSpacingAnchorX";
    PropertyName[PropertyName["IsEnabledAnchorX"] = 571] = "IsEnabledAnchorX";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorY"] = 572] = "IsVisibleBackgroundColorAnchorY";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorY"] = 573] = "IsVisibleBorderColorAnchorY";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorY"] = 574] = "IsVisibleCornerRadiusAnchorY";
    PropertyName[PropertyName["IsVisibleElevationAnchorY"] = 575] = "IsVisibleElevationAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingAnchorY"] = 576] = "IsVisiblePaddingAnchorY";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorY"] = 577] = "IsVisiblePlaceholderAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorY"] = 578] = "IsVisibleSeparatorColorAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorY"] = 579] = "IsVisibleSeparatorWidthAnchorY";
    PropertyName[PropertyName["IsVisibleShadowAnchorY"] = 580] = "IsVisibleShadowAnchorY";
    PropertyName[PropertyName["IsVisibleStrokeAnchorY"] = 581] = "IsVisibleStrokeAnchorY";
    PropertyName[PropertyName["IsVisibleTextColorAnchorY"] = 582] = "IsVisibleTextColorAnchorY";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorY"] = 583] = "IsVisibleTextDecorationsAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorY"] = 584] = "IsVisibleTranslationXAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorY"] = 585] = "IsVisibleTranslationYAnchorY";
    PropertyName[PropertyName["IsVisibleRotationAnchorY"] = 586] = "IsVisibleRotationAnchorY";
    PropertyName[PropertyName["IsVisibleScaleAnchorY"] = 587] = "IsVisibleScaleAnchorY";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorY"] = 588] = "IsVisibleHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorY"] = 589] = "IsVisibleWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorY"] = 590] = "IsVisibleMinimumHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorY"] = 591] = "IsVisibleMinimumWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorY"] = 592] = "IsVisiblePaddingConstraintsAnchorY";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorY"] = 593] = "IsVisibleRowSpacingAnchorY";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorY"] = 594] = "IsVisibleColumnSpacingAnchorY";
    PropertyName[PropertyName["IsEnabledAnchorY"] = 595] = "IsEnabledAnchorY";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationX"] = 596] = "IsVisibleBackgroundColorRotationX";
    PropertyName[PropertyName["IsVisibleBorderColorRotationX"] = 597] = "IsVisibleBorderColorRotationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationX"] = 598] = "IsVisibleCornerRadiusRotationX";
    PropertyName[PropertyName["IsVisibleElevationRotationX"] = 599] = "IsVisibleElevationRotationX";
    PropertyName[PropertyName["IsVisiblePaddingRotationX"] = 600] = "IsVisiblePaddingRotationX";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationX"] = 601] = "IsVisiblePlaceholderRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationX"] = 602] = "IsVisibleSeparatorColorRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationX"] = 603] = "IsVisibleSeparatorWidthRotationX";
    PropertyName[PropertyName["IsVisibleShadowRotationX"] = 604] = "IsVisibleShadowRotationX";
    PropertyName[PropertyName["IsVisibleStrokeRotationX"] = 605] = "IsVisibleStrokeRotationX";
    PropertyName[PropertyName["IsVisibleTextColorRotationX"] = 606] = "IsVisibleTextColorRotationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationX"] = 607] = "IsVisibleTextDecorationsRotationX";
    PropertyName[PropertyName["IsVisibleTranslationXRotationX"] = 608] = "IsVisibleTranslationXRotationX";
    PropertyName[PropertyName["IsVisibleTranslationYRotationX"] = 609] = "IsVisibleTranslationYRotationX";
    PropertyName[PropertyName["IsVisibleRotationRotationX"] = 610] = "IsVisibleRotationRotationX";
    PropertyName[PropertyName["IsVisibleScaleRotationX"] = 611] = "IsVisibleScaleRotationX";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationX"] = 612] = "IsVisibleHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationX"] = 613] = "IsVisibleWidthRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationX"] = 614] = "IsVisibleMinimumHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationX"] = 615] = "IsVisibleMinimumWidthRequestRotationX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationX"] = 616] = "IsVisiblePaddingConstraintsRotationX";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationX"] = 617] = "IsVisibleRowSpacingRotationX";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationX"] = 618] = "IsVisibleColumnSpacingRotationX";
    PropertyName[PropertyName["IsEnabledRotationX"] = 619] = "IsEnabledRotationX";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationY"] = 620] = "IsVisibleBackgroundColorRotationY";
    PropertyName[PropertyName["IsVisibleBorderColorRotationY"] = 621] = "IsVisibleBorderColorRotationY";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationY"] = 622] = "IsVisibleCornerRadiusRotationY";
    PropertyName[PropertyName["IsVisibleElevationRotationY"] = 623] = "IsVisibleElevationRotationY";
    PropertyName[PropertyName["IsVisiblePaddingRotationY"] = 624] = "IsVisiblePaddingRotationY";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationY"] = 625] = "IsVisiblePlaceholderRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationY"] = 626] = "IsVisibleSeparatorColorRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationY"] = 627] = "IsVisibleSeparatorWidthRotationY";
    PropertyName[PropertyName["IsVisibleShadowRotationY"] = 628] = "IsVisibleShadowRotationY";
    PropertyName[PropertyName["IsVisibleStrokeRotationY"] = 629] = "IsVisibleStrokeRotationY";
    PropertyName[PropertyName["IsVisibleTextColorRotationY"] = 630] = "IsVisibleTextColorRotationY";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationY"] = 631] = "IsVisibleTextDecorationsRotationY";
    PropertyName[PropertyName["IsVisibleTranslationXRotationY"] = 632] = "IsVisibleTranslationXRotationY";
    PropertyName[PropertyName["IsVisibleTranslationYRotationY"] = 633] = "IsVisibleTranslationYRotationY";
    PropertyName[PropertyName["IsVisibleRotationRotationY"] = 634] = "IsVisibleRotationRotationY";
    PropertyName[PropertyName["IsVisibleScaleRotationY"] = 635] = "IsVisibleScaleRotationY";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationY"] = 636] = "IsVisibleHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationY"] = 637] = "IsVisibleWidthRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationY"] = 638] = "IsVisibleMinimumHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationY"] = 639] = "IsVisibleMinimumWidthRequestRotationY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationY"] = 640] = "IsVisiblePaddingConstraintsRotationY";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationY"] = 641] = "IsVisibleRowSpacingRotationY";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationY"] = 642] = "IsVisibleColumnSpacingRotationY";
    PropertyName[PropertyName["IsEnabledRotationY"] = 643] = "IsEnabledRotationY";
})(PropertyName || (PropertyName = {}));


/***/ }),

/***/ "./src/XamlParser.ts":
/*!***************************!*\
  !*** ./src/XamlParser.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParseFigma: () => (/* binding */ ParseFigma),
/* harmony export */   formatEndTag: () => (/* binding */ formatEndTag),
/* harmony export */   formatShortTag: () => (/* binding */ formatShortTag),
/* harmony export */   formatStartTag: () => (/* binding */ formatStartTag)
/* harmony export */ });
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Property */ "./src/Property.ts");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element */ "./src/Element.ts");
/* harmony import */ var _figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figma-node-translation/frame-2-layout */ "./src/figma-node-translation/frame-2-layout.ts");
/* harmony import */ var _figma_node_translation_shapes_ellipse_2_ellipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./figma-node-translation/shapes/ellipse-2-ellipse */ "./src/figma-node-translation/shapes/ellipse-2-ellipse.ts");
/* harmony import */ var _figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./figma-node-translation/text-2-label */ "./src/figma-node-translation/text-2-label.ts");
/* harmony import */ var _xaml_views_classes_xaml_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xaml-views-classes/xaml-view */ "./src/xaml-views-classes/xaml-view.ts");
/* harmony import */ var _xaml_views_classes_xaml_custom_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xaml-views-classes/xaml-custom-control */ "./src/xaml-views-classes/xaml-custom-control.ts");
/* harmony import */ var _figma_node_translation_shapes_rectangle_2_rectangle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./figma-node-translation/shapes/rectangle-2-rectangle */ "./src/figma-node-translation/shapes/rectangle-2-rectangle.ts");
/* harmony import */ var _figma_node_translation_shapes_line_2_line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./figma-node-translation/shapes/line-2-line */ "./src/figma-node-translation/shapes/line-2-line.ts");
/* harmony import */ var _xaml_views_classes_xaml_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./xaml-views-classes/xaml-page */ "./src/xaml-views-classes/xaml-page.ts");
/* harmony import */ var _figma_node_translation_shapes_vector_2_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./figma-node-translation/shapes/vector-2-icon */ "./src/figma-node-translation/shapes/vector-2-icon.ts");
/* harmony import */ var _user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-defined-types-translation/button-2-xaml */ "./src/user-defined-types-translation/button-2-xaml.ts");
/* harmony import */ var _user_defined_types_translation_editor_2_xaml__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-defined-types-translation/editor-2-xaml */ "./src/user-defined-types-translation/editor-2-xaml.ts");
/* harmony import */ var _user_defined_types_translation_entry_2_xaml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-defined-types-translation/entry-2-xaml */ "./src/user-defined-types-translation/entry-2-xaml.ts");
/* harmony import */ var _user_defined_types_translation_listview_2_xaml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-defined-types-translation/listview-2-xaml */ "./src/user-defined-types-translation/listview-2-xaml.ts");















function checkNodeType(nn) {
    if (nn.parent.utype !== 'None') {
        return parseUtypeNodes(nn);
    }
    let node = nn.parent.node;
    // Check the node's type using the 'type' property
    switch (node.type) {
        case 'FRAME':
            let frameNode = node;
            let nestedFrameNodes = '';
            nn.children.forEach(n => nestedFrameNodes += checkNodeType(n) + `\n`);
            let frameElement = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(frameNode);
            return formatStartTag(frameElement) + `\t${nestedFrameNodes}` + formatEndTag(frameElement);
        case 'GROUP':
            let groupNode = node;
            let nestedGroupNodes = '';
            nn.children.forEach(n => nestedGroupNodes += checkNodeType(n) + `\n`);
            return nestedGroupNodes;
        case 'TEXT':
            let textNode = node;
            let textElement = (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.TranslateTextElement)(textNode);
            return formatShortTag(textElement);
        case 'ELLIPSE':
            let ellipseNode = node;
            let ellipseElement = (0,_figma_node_translation_shapes_ellipse_2_ellipse__WEBPACK_IMPORTED_MODULE_3__.TranslateEllipseElement)(ellipseNode);
            return formatShortTag(ellipseElement);
        case 'LINE':
            let lineNode = node;
            let lineElement = (0,_figma_node_translation_shapes_line_2_line__WEBPACK_IMPORTED_MODULE_8__.TranslateLineElement)(lineNode);
            return formatShortTag(lineElement);
        case 'RECTANGLE':
            let rectangleNode = node;
            let rectangleElement = (0,_figma_node_translation_shapes_rectangle_2_rectangle__WEBPACK_IMPORTED_MODULE_7__.TranslateRectangleElement)(rectangleNode);
            return formatShortTag(rectangleElement);
        case 'POLYGON':
            let polygonNode = node;
            return 'Polygon';
        case 'INSTANCE':
            let instanceNode = node;
            let bindings = []; //TODO: children
            let customControl = new _xaml_views_classes_xaml_custom_control__WEBPACK_IMPORTED_MODULE_6__.CustomControl(instanceNode.name, bindings);
            return customControl.getStartTag() + customControl.getEndTag();
        case 'COMPONENT':
            let componentNode = node;
            // TODO: Make new resource file / new window
            let contentView = new _xaml_views_classes_xaml_view__WEBPACK_IMPORTED_MODULE_5__.ContentView(node.name);
            let nestedComponent = '';
            nn.children.forEach(n => nestedComponent += `\t${checkNodeType(n)}\n`);
            return contentView.getStartTag() + `\n${nestedComponent}` + contentView.getEndTag();
        //Are not getting castet 
        case 'VECTOR':
            let vectorNode = node;
            let vectorNote = `// Please export ${vectorNode.name} as a .png- or .svg file and place in the Resource/Images/ folder\n`;
            let vectorElement = (0,_figma_node_translation_shapes_vector_2_icon__WEBPACK_IMPORTED_MODULE_10__.TranslateVectorElement)(vectorNode);
            return vectorNote + formatShortTag(vectorElement);
        case 'STAR':
            let starNode = node;
        case 'BOOLEAN_OPERATION':
            let booleanOperationNode = node;
        case 'SLICE':
            let sliceNode = node;
        default:
            return `<!-- This plugin is unfortuanately unable to cast ${node.type}s as MAUI elements. -->`;
    }
}
function parseUtypeNodes(nn) {
    let node = nn.parent;
    console.log('translating : ', node.utype);
    // Check the node's type using the 'type' property
    switch (node.utype) {
        case 'BUTTON':
            let buttonNode = node.node;
            let buttonElement = (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.TranslateButtonElement)(buttonNode);
            return formatShortTag(buttonElement);
        case 'EDITOR':
            let editorNode = node.node;
            let editorElement = (0,_user_defined_types_translation_editor_2_xaml__WEBPACK_IMPORTED_MODULE_12__.TranslateEditorElement)(editorNode);
            return formatShortTag(editorElement);
        case 'ENTRY':
            let entryNode = node.node;
            let entryElement = (0,_user_defined_types_translation_entry_2_xaml__WEBPACK_IMPORTED_MODULE_13__.TranslateEntryElement)(entryNode);
            return formatShortTag(entryElement);
        case 'LISTVIEW':
            let listViewNode = node.node;
            let listViewElement = (0,_user_defined_types_translation_listview_2_xaml__WEBPACK_IMPORTED_MODULE_14__.TranslateListViewElement)(listViewNode);
            return formatShortTag(listViewElement);
        default:
            return '';
    }
}
function ParseFigma(nodes) {
    console.log('Parsing Nodes: ', nodes);
    let xamlCode = "";
    let rootnode = nodes[0];
    let contentPage = new _xaml_views_classes_xaml_page__WEBPACK_IMPORTED_MODULE_9__.ContentPage(rootnode.parent.node.name);
    xamlCode += contentPage.getStartTag() + newline();
    rootnode.children.forEach(c => {
        xamlCode += checkNodeType(c); //check if it is a user defined node or not
    });
    xamlCode += contentPage.getEndTag();
    return xamlCode;
}
function formatStartTag(element) {
    const propertyString = element.properties
        .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
        .map((prop) => `${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join(" ");
    return `<${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]} ${propertyString}>` + newline();
}
function formatShortTag(element) {
    const propertyString = element.properties
        .filter((prop) => prop.value !== 'None') // Exclude properties with value 'None' because then it is set to default value
        .map((prop) => `${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join(" " + newline() + `\t`);
    return `<${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]} ${propertyString}/>` + newline();
}
function formatEndTag(element) {
    return `</${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]}>`;
}
function newline() {
    return `\n`;
}
function backgroundToXaml(node) {
    let background = translateFillsToFigma(node);
}
function translateFillsToFigma(node) {
    let elements = [];
    if ('fills' in node) {
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                    return [{ name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Background, value: color }];
                }
                else if (fill.type === 'GRADIENT_LINEAR') {
                    const gradientPaint = fill;
                    let linearGradientBrushProp = [
                        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.EndPoint, value: '1,0' }
                    ];
                    let linearGradientBrushElement = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.LinearGradientBrush, properties: linearGradientBrushProp };
                    if (gradientPaint.gradientStops) {
                        let gradProps = [];
                        gradientPaint.gradientStops.forEach(stop => {
                            let gradProp = [
                                { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.OffSet, value: `${stop.position}` },
                                { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}` }
                            ];
                            gradProps.push({ name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.GradientStop, properties: gradProp });
                        });
                        elements.push({ parent: linearGradientBrushElement, children: gradProps });
                    }
                }
                else if (fill.type === 'GRADIENT_RADIAL') {
                    // Handle Gradient Paint (Linear or Radial)
                    const gradientPaint = fill;
                    let radialGradientBrushProp = [
                        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Center, value: '0.5, 0.5' },
                        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Radius, value: '0.5' }
                    ];
                    let radialGradientBrushElement = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.RadialGradientBrush, properties: radialGradientBrushProp };
                    if (gradientPaint.gradientStops) {
                        let gradProps = [];
                        gradientPaint.gradientStops.forEach(stop => {
                            let gradProp = [
                                { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.OffSet, value: `${stop.position}` },
                                { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}` }
                            ];
                            let gradStop = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.GradientStop, properties: gradProp };
                            gradProps.push({ name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.GradientStop, properties: gradProp });
                        });
                        elements.push({ parent: radialGradientBrushElement, children: gradProps });
                    }
                }
            });
        }
    }
    if (elements.length !== 0) {
        return elements;
    }
    return null;
}


/***/ }),

/***/ "./src/commonPropertyParser.ts":
/*!*************************************!*\
  !*** ./src/commonPropertyParser.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateCommonProperties: () => (/* binding */ TranslateCommonProperties)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property */ "./src/Property.ts");
/* harmony import */ var _figmaNodeTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figmaNodeTypes */ "./src/figmaNodeTypes.ts");



let borderElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Border, properties: [] };
let background = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Background, properties: [] };
function TranslateCommonProperties(node) {
    var _a, _b, _c;
    const commonProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Opacity, value: (_a = translateOpacity(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.IsVisible, value: boolToDefault(node.visible, true) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HorizontalOptions, value: (_b = translateLayoutAlign(node)) !== null && _b !== void 0 ? _b : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.VerticalOptions, value: (_c = translateLayoutAlign(node)) !== null && _c !== void 0 ? _c : 'None' },
    ];
    return commonProperties;
}
function translateLayoutAlign(node) {
    if ('layoutAlign' in node) {
        switch (node.layoutAlign) {
            case "CENTER":
                return 'Center';
            case "MAX":
                return 'End';
            case "STRETCH":
                return 'Fill';
            default:
                return 'Start';
        }
    }
    return null;
}
function translateFillsToFigma(node) {
    let elements = [];
    const backgroundProperties = [];
    if ('fills' in node) {
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                    backgroundProperties.push({ name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: color });
                }
                else if (fill.type === 'GRADIENT_LINEAR') {
                    const gradientPaint = fill;
                    let linearGradientBrushProp = [
                        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.EndPoint, value: '1,0' }
                    ];
                    let linearGradientBrushElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.LinearGradientBrush, properties: linearGradientBrushProp };
                    if (gradientPaint.gradientStops) {
                        let gradProps = [];
                        gradientPaint.gradientStops.forEach(stop => {
                            let gradProp = [
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.OffSet, value: `${stop.position}` },
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}` }
                            ];
                            gradProps.push({ name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.GradientStop, properties: gradProp });
                        });
                        elements.push({ parent: linearGradientBrushElement, children: gradProps });
                    }
                }
                else if (fill.type === 'GRADIENT_RADIAL') {
                    // Handle Gradient Paint (Linear or Radial)
                    const gradientPaint = fill;
                    let radialGradientBrushProp = [
                        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Center, value: '0.5, 0.5' },
                        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Radius, value: '0.5' }
                    ];
                    let radialGradientBrushElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.RadialGradientBrush, properties: radialGradientBrushProp };
                    if (gradientPaint.gradientStops) {
                        let gradProps = [];
                        gradientPaint.gradientStops.forEach(stop => {
                            let gradProp = [
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.OffSet, value: `${stop.position}` },
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}` }
                            ];
                            let gradStop = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.GradientStop, properties: gradProp };
                            gradProps.push({ name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.GradientStop, properties: gradProp });
                        });
                        elements.push({ parent: radialGradientBrushElement, children: gradProps });
                    }
                }
            });
        }
    }
    if (backgroundProperties.length !== 0) {
        return backgroundProperties;
    }
    else if (elements.length !== 0) {
        return elements;
    }
    return null;
}
function translateStroke(node) {
    //color
    if ('strokes' in node) {
        node.strokes.forEach(stroke => {
            if (stroke.type === 'SOLID' && (node.strokeWeight !== 0)) {
                let col = stroke.color;
                let strokeColor = { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: `#${col.r}${col.g}${col.b}` };
                borderElement.properties.push(strokeColor);
                let strokeWeight = { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeThickness, value: `${node.strokeWeight}` };
                borderElement.properties.push(strokeWeight);
            }
        });
    }
}
function boolToDefault(value, defaultValue) {
    if (value === defaultValue) {
        return 'None';
    }
    return value.toString();
}
function translateOpacity(node) {
    if ('opacity' in node) {
        return node.opacity.toString();
    }
    return null;
}
function translateCornerRadius(node) {
    if (node.type !== (_figmaNodeTypes__WEBPACK_IMPORTED_MODULE_2__.FigmaNode.COMPONENT || _figmaNodeTypes__WEBPACK_IMPORTED_MODULE_2__.FigmaNode.COMPONENT_SET || _figmaNodeTypes__WEBPACK_IMPORTED_MODULE_2__.FigmaNode.FRAME || _figmaNodeTypes__WEBPACK_IMPORTED_MODULE_2__.FigmaNode.INSTANCE || _figmaNodeTypes__WEBPACK_IMPORTED_MODULE_2__.FigmaNode.RECTANGLE)) {
        return;
    }
    let strokeShape = { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeShape, value: `RoundRectangle  ${node.topLeftRadius}, ${node.topRightRadius}, ${node.bottomLeftRadius}, ${node.bottomRightRadius}` };
    borderElement.properties.push(strokeShape);
}
function translateShadow(node) {
    if ('effects' in node) {
        node.effects.forEach(effect => {
            if (effect.type === 'DROP_SHADOW') {
                let col = effect.color;
                let off = effect.offset;
                let shadowProperties = [
                    { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Brush, value: `#${col.r}${col.g}${col.b}` },
                    { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.OffSet, value: `${off.x}, ${off.y}` },
                    { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Opacity, value: `${col.a}` },
                    { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Radius, value: `${effect.radius}` },
                ];
                return { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Shadow, properties: shadowProperties };
            }
        });
    }
    return null;
}


/***/ }),

/***/ "./src/figma-node-translation/frame-2-layout.ts":
/*!******************************************************!*\
  !*** ./src/figma-node-translation/frame-2-layout.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateFigmaFrameToXamlLayout: () => (/* binding */ TranslateFigmaFrameToXamlLayout)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateFigmaFrameToXamlLayout(node) {
    switch (node.layoutMode) {
        case "HORIZONTAL":
            return TranslateHorizontalStackLayoutElement(node);
        case "VERTICAL":
            return TranslateVerticalStackLayoutElement(node);
        default:
            return TranslateFlexLayoutElement(node);
    }
}
function TranslateFlexLayoutElement(node) {
    const flexLayoutProperties = [
        /* Determines whether this layer uses auto-layout to position its children. Defaults to "NONE". */
        //layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: translateDefaultNumberValue(node.itemSpacing.toString()) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignContent, value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignItems, value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Wrap, value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Grow, value: translateDefaultNumberValue(node.layoutGrow.toString()) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignSelf, value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
    ];
    const flexLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.FlexLayout, properties: flexLayoutProperties };
    return flexLayoutElement; //formatStartTag(flexLayoutElement)  + formatEndTag(flexLayoutElement);
}
function translateDefaultNumberValue(value) {
    if (value === '0') {
        return 'None';
    }
    return value.toString();
}
function TranslateHorizontalStackLayoutElement(node) {
    const horizontalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const horizontalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties };
    return horizontalStackLayoutElement; //formatStartTag(horizontalStackLayoutElement)  + formatEndTag(horizontalStackLayoutElement);
}
function TranslateVerticalStackLayoutElement(node) {
    const verticalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ];
    const vertivalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties };
    return vertivalStackLayoutElement; //formatStartTag(vertivalStackLayoutElement)  + formatEndTag(vertivalStackLayoutElement);
}
function translateFigmaPaddingToXAMLPadding(node) {
    if (node.paddingLeft == node.paddingRight && node.paddingLeft == node.paddingTop && node.paddingLeft == node.paddingBottom) {
        return node.paddingLeft.toString();
    }
    else {
        return `${node.paddingLeft}, ${node.paddingTop}, ${node.paddingRight}, ${node.paddingBottom},`;
    }
}
function translateFigmaAlignItemsToXamlAlignItems(value) {
    switch (value) {
        case "MAX":
            return 'End';
        case "CENTER":
            return 'Center';
        case "MIN":
            return 'Start';
        default:
            return 'Stretch';
    }
}
function translateFigmaWrapToXamlWrap(value) {
    switch (value) {
        case 'WRAP':
            return 'Wrap';
        case 'NO_WRAP':
        default:
            return 'None';
    }
}
function translateFigmaAlignContent(value) {
    switch (value) {
        case 'SPACE_BETWEEN':
            return 'SpaceBetween';
        default:
            return 'Stretch';
    }
}


/***/ }),

/***/ "./src/figma-node-translation/shapes/common-shape-properties.ts":
/*!**********************************************************************!*\
  !*** ./src/figma-node-translation/shapes/common-shape-properties.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateCommonShapeProperties: () => (/* binding */ TranslateCommonShapeProperties)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");


function TranslateCommonShapeProperties(node) {
    return ''; //translateFillsToFigma(node);
}
function translateFillsToFigma(node) {
    let elements = [];
    if ('fills' in node) {
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                    return [{ name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: color }];
                }
                else if (fill.type === 'GRADIENT_LINEAR') {
                    const gradientPaint = fill;
                    let linearGradientBrushProp = [
                        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.EndPoint, value: '1,0' }
                    ];
                    let linearGradientBrushElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.LinearGradientBrush, properties: linearGradientBrushProp };
                    if (gradientPaint.gradientStops) {
                        let gradProps = [];
                        gradientPaint.gradientStops.forEach(stop => {
                            let gradProp = [
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.OffSet, value: `${stop.position}` },
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}` }
                            ];
                            gradProps.push({ name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.GradientStop, properties: gradProp });
                        });
                        elements.push({ parent: linearGradientBrushElement, children: gradProps });
                    }
                }
                else if (fill.type === 'GRADIENT_RADIAL') {
                    // Handle Gradient Paint (Linear or Radial)
                    const gradientPaint = fill;
                    let radialGradientBrushProp = [
                        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Center, value: '0.5, 0.5' },
                        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Radius, value: '0.5' }
                    ];
                    let radialGradientBrushElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.RadialGradientBrush, properties: radialGradientBrushProp };
                    if (gradientPaint.gradientStops) {
                        let gradProps = [];
                        gradientPaint.gradientStops.forEach(stop => {
                            let gradProp = [
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.OffSet, value: `${stop.position}` },
                                { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Color, value: `#${stop.color.r}${stop.color.g}${stop.color.b}` }
                            ];
                            let gradStop = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.GradientStop, properties: gradProp };
                            gradProps.push({ name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.GradientStop, properties: gradProp });
                        });
                        elements.push({ parent: radialGradientBrushElement, children: gradProps });
                    }
                }
            });
        }
    }
    if (elements.length !== 0) {
        return elements;
    }
    return null;
}


/***/ }),

/***/ "./src/figma-node-translation/shapes/ellipse-2-ellipse.ts":
/*!****************************************************************!*\
  !*** ./src/figma-node-translation/shapes/ellipse-2-ellipse.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateEllipseElement: () => (/* binding */ TranslateEllipseElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");
/* harmony import */ var _common_shape_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-shape-properties */ "./src/figma-node-translation/shapes/common-shape-properties.ts");



function TranslateEllipseElement(node) {
    let commonShapeProps = (0,_common_shape_properties__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonShapeProperties)(node);
    const ellipseProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Fill, value: node.fills.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeThickness, value: node.strokeWeight.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: '#000000' },
        // Add other ellipse-related properties as needed
    ];
    const ellipseElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Ellipse, properties: ellipseProperties };
    return ellipseElement;
}
function commonShapePropsType(s) {
}


/***/ }),

/***/ "./src/figma-node-translation/shapes/line-2-line.ts":
/*!**********************************************************!*\
  !*** ./src/figma-node-translation/shapes/line-2-line.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateLineElement: () => (/* binding */ TranslateLineElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");


function TranslateLineElement(node) {
    const lineProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.X1, value: '0' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Y1, value: '0' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.X2, value: '50' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Y2, value: '0' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: '#000000' },
        // Add other line-related properties as needed
    ];
    const lineElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Line, properties: lineProperties };
    return lineElement;
}


/***/ }),

/***/ "./src/figma-node-translation/shapes/rectangle-2-rectangle.ts":
/*!********************************************************************!*\
  !*** ./src/figma-node-translation/shapes/rectangle-2-rectangle.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateRectangleElement: () => (/* binding */ TranslateRectangleElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslateRectangleElement(node) {
    let commonProperties = (0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node);
    const rectangleProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.RadiusX, value: node.topLeftRadius.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.RadiusY, value: node.bottomRightRadius.toString() }
    ];
    const rectangleElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Rectangle, properties: rectangleProperties.concat(commonProperties) };
    return rectangleElement;
}


/***/ }),

/***/ "./src/figma-node-translation/shapes/vector-2-icon.ts":
/*!************************************************************!*\
  !*** ./src/figma-node-translation/shapes/vector-2-icon.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateVectorElement: () => (/* binding */ TranslateVectorElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");


function TranslateVectorElement(node) {
    const vectorProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Source, value: translateSource(node) },
        // Add other ellipse-related properties as needed
    ];
    const vectorElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Image, properties: vectorProperties };
    return vectorElement;
}
function translateSource(node) {
    return `${node.name}.png`;
}


/***/ }),

/***/ "./src/figma-node-translation/text-2-label.ts":
/*!****************************************************!*\
  !*** ./src/figma-node-translation/text-2-label.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateTextElement: () => (/* binding */ TranslateTextElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateTextElement(node) {
    var _a, _b, _c, _d, _e;
    const textProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.CharacterSpacing, value: (_a = translateLetterSpacing(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAttributes, value: translateFontWeightToFontAttributes(node.fontWeight) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAutoScalingEnabled, value: translateTextAutoResizeToFontAutoScalingEnabled(node.textAutoResize) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontSize, value: node.fontSize.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HorizontalTextAlignment, value: translateHorizontalAlignment(node.textAlignHorizontal) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.LineBreakMode, value: translateTextTruncationToLineBreakMode(node.textTruncation) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.LineHeight, value: (_b = translateLineHeight(node)) !== null && _b !== void 0 ? _b : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.MaxLines, value: (_d = (_c = node.maxLines) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Text, value: node.characters },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextColor, value: (_e = getHexColorFromFill(node)) !== null && _e !== void 0 ? _e : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextDecorations, value: translateTextDecorationToXAML(node.textDecoration) || 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextTransform, value: translateTextCaseToXAML(node.textCase) || 'None' },
    ];
    const textElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Label, properties: textProperties };
    return textElement;
}
function translateLineHeight(node) {
    let lh = node.lineHeight;
    if ("value" in lh) {
        return lh.value.toString();
    }
    return null;
}
function translateLetterSpacing(node) {
    let ls = node.letterSpacing.value;
    if (ls !== 0) {
        return ls.toString();
    }
    return null;
}
function getHexColorFromFill(textNode) {
    if (!textNode || !textNode.fills || textNode.fills.length === 0) {
        return null;
    }
    const fill = textNode.fills[0]; // We assume the first fill is the one we want
    if (fill === undefined)
        return null;
    if (fill.type === 'SOLID') {
        const solidFill = fill;
        return rgbToHex(solidFill.color);
    }
    else if (fill.type.startsWith('GRADIENT')) {
        // Handle gradient fills (if needed)
        // You can add logic here to handle gradient fills
        return null;
    }
    return null;
}
function rgbToHex(rgb) {
    const r = Math.round(rgb.r * 255).toString(16).padStart(2, '0');
    const g = Math.round(rgb.g * 255).toString(16).padStart(2, '0');
    const b = Math.round(rgb.b * 255).toString(16).padStart(2, '0');
    let color = `#${r}${g}${b}`;
    if (color === '#000000') {
        return 'None';
    }
    return color;
}
function translateTextCaseToXAML(textCase) {
    switch (textCase) {
        case "UPPER":
            return "Uppercase";
        case "LOWER":
            return "Lowercase";
        case "TITLE":
            return "Capitalize";
        // Figma "ORIGINAL" corresponds to "None" in XAML, which leaves the text case as is.
        case "ORIGINAL":
        default:
            return "None"; // Default to no transformation
    }
}
function translateTextDecorationToXAML(textDecoration) {
    switch (textDecoration) {
        case "STRIKETHROUGH":
            return "Strikethrough";
        case "UNDERLINE":
            return "Underline";
        default:
            return "None";
    }
}
function translateTextTruncationToLineBreakMode(figmaTextTruncation) {
    //OBS ! Do not fulfill all LineBreakModes of Xaml. See following link for more info about LineBreakMode: https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.linebreakmode?view=net-maui-7.0
    switch (figmaTextTruncation) {
        case "ENDING":
            return "TailTruncation";
        default:
            return "None"; // Default to NoWrap if the value is not recognized
    }
}
function translateTextAutoResizeToFontAutoScalingEnabled(figmaTextAutoResize) {
    switch (figmaTextAutoResize) {
        case "NONE":
            return "false";
        default:
            return "None"; // when returning none it will not be included in the final xaml text, since it is the default value
    }
}
// Helper function to translate Figma horizontal text alignment to XAML
function translateHorizontalAlignment(align) {
    //TODO: fix this to correct xaml
    switch (align) {
        case "CENTER":
            return "Center";
        case "RIGHT":
            return "Right";
        default:
            return "None";
    }
}
function translateFontWeightToFontAttributes(figmaFontWeight) {
    if (figmaFontWeight > 400) {
        return 'Bold';
    }
    else {
        return 'None';
    }
}


/***/ }),

/***/ "./src/figmaNodeTypes.ts":
/*!*******************************!*\
  !*** ./src/figmaNodeTypes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FigmaNode: () => (/* binding */ FigmaNode)
/* harmony export */ });
var FigmaNode;
(function (FigmaNode) {
    FigmaNode["COMPONENT"] = "COMPONENT";
    FigmaNode["COMPONENT_SET"] = "COMPONENT_SET";
    FigmaNode["FRAME"] = "FRAME";
    FigmaNode["INSTANCE"] = "INSTANCE";
    FigmaNode["RECTANGLE"] = "RECTANGLE";
})(FigmaNode || (FigmaNode = {}));


/***/ }),

/***/ "./src/user-defined-types-translation/button-2-xaml.ts":
/*!*************************************************************!*\
  !*** ./src/user-defined-types-translation/button-2-xaml.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateButtonElement: () => (/* binding */ TranslateButtonElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateButtonElement(node) {
    const buttonProperties = [
        //common stuff
        //Frame stuff
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.BorderColor, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.BorderWidth, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.CharacterSpacing, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.ContentLayout, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.CornerRadius, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAttributes, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAutoScalingEnabled, value: node.height.toString() },
        //text stuff
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontSize, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.LineBreakMode, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Text, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextColor, value: node.width.toString() },
    ];
    const buttonElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Button, properties: buttonProperties };
    return buttonElement;
}


/***/ }),

/***/ "./src/user-defined-types-translation/editor-2-xaml.ts":
/*!*************************************************************!*\
  !*** ./src/user-defined-types-translation/editor-2-xaml.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateEditorElement: () => (/* binding */ TranslateEditorElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateEditorElement(node) {
    const editorProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() }
    ];
    const editorElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Editor, properties: editorProperties };
    return editorElement;
}


/***/ }),

/***/ "./src/user-defined-types-translation/entry-2-xaml.ts":
/*!************************************************************!*\
  !*** ./src/user-defined-types-translation/entry-2-xaml.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateEntryElement: () => (/* binding */ TranslateEntryElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateEntryElement(node) {
    const entryProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() }
    ];
    const entryElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Entry, properties: entryProperties };
    return entryElement;
}


/***/ }),

/***/ "./src/user-defined-types-translation/listview-2-xaml.ts":
/*!***************************************************************!*\
  !*** ./src/user-defined-types-translation/listview-2-xaml.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateListViewElement: () => (/* binding */ TranslateListViewElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateListViewElement(node) {
    const listviewProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() }
    ];
    const listviewElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.ListView, properties: listviewProperties };
    return listviewElement;
}


/***/ }),

/***/ "./src/xaml-views-classes/xaml-custom-control.ts":
/*!*******************************************************!*\
  !*** ./src/xaml-views-classes/xaml-custom-control.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomControl: () => (/* binding */ CustomControl)
/* harmony export */ });
class CustomControl {
    constructor(controlName, bindings) {
        this.endTag = '/>';
        this.bindings = bindings;
        this.startTag = this.FormatStartTag();
        this.name = controlName;
    }
    getStartTag() {
        return this.startTag;
    }
    getEndTag() {
        return this.endTag;
    }
    FormatStartTag() {
        let setBindings = '';
        this.bindings.forEach(b => setBindings + `${b.name} = ${b.value}\n`);
        return `
        <control:${this.name} ${setBindings}`;
    }
}


/***/ }),

/***/ "./src/xaml-views-classes/xaml-page.ts":
/*!*********************************************!*\
  !*** ./src/xaml-views-classes/xaml-page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentPage: () => (/* binding */ ContentPage)
/* harmony export */ });
class ContentPage {
    constructor(className) {
        this.startEndTag = '>';
        this.controls = '';
        this.startTag = FormatPageStartTag(className);
        this.endTag = '\n</ContentPage>';
        this.name = className;
    }
    getStartTag() {
        return this.startTag + this.startEndTag;
    }
    getEndTag() {
        return this.endTag;
    }
}
function addControl(page) {
    page.startTag = `${page.startTag}
                    xmlns:controls=clr-namespace:CustomControls\n`;
}
function FormatPageStartTag(className) {
    return `<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                    x:Class=${className}
                    x:Name=${className}\n`;
}


/***/ }),

/***/ "./src/xaml-views-classes/xaml-view.ts":
/*!*********************************************!*\
  !*** ./src/xaml-views-classes/xaml-view.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentView: () => (/* binding */ ContentView)
/* harmony export */ });
class ContentView {
    constructor(className) {
        this.startEndTag = '>';
        this.controls = '';
        this.startTag = FormatPageStartTag(className);
        this.endTag = '\n</ContentView>';
        this.name = className;
    }
    getStartTag() {
        return this.startTag + this.startEndTag;
    }
    getEndTag() {
        return this.endTag;
    }
}
function FormatPageStartTag(className) {
    return `
    //Create a folder under Resources called "CustomControls" and make a new "ContentView" in there 
    <ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                    xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                    x:Class=CustomControls.${className}
                    x:Name=${className}\n`;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _XamlParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XamlParser */ "./src/XamlParser.ts");

// src/plugin.ts
figma.showUI(__html__, { width: 600, height: 400 });
function makeDisplayNode(_node) {
    return { name: _node.name, utype: 'None', node: _node };
}
function childrenToNestedNodes(cn) {
    const list = [];
    cn.forEach((c) => {
        const nn = traverse(c);
        list.push(nn);
    });
    return list;
}
function traverse(cn) {
    const dn = makeDisplayNode(cn);
    const nn = {
        parent: dn,
        children: [],
    };
    if ('children' in cn) {
        // If the child has children, we must go through them and make them into nested nodes
        nn.children = childrenToNestedNodes(cn.children);
    }
    return nn;
}
const selection = figma.currentPage.selection[0];
const rootNode = makeDisplayNode(selection);
let list = [];
if ('children' in selection) {
    selection.children.forEach(c => list.push(c));
}
const nodes = [
    {
        parent: rootNode,
        children: childrenToNestedNodes(list),
    },
];
let nodes2Parse = [];
figma.ui.postMessage({ type: 'init', nodes });
figma.ui.onmessage = (message) => {
    console.log("got this from the UI", message);
    nodes2Parse = updateDisplayNodeUType(nodes, message);
    function updateDisplayNodeUType(selection, message) {
        // Create a mapping of BaseNode.id to selectedValue
        const selectedValueMap = {};
        message.forEach((item) => {
            selectedValueMap[item.node.parent.node.id] = item.selectedValue;
        });
        // Create a new array to hold the updated selection
        const updatedSelection = [];
        // Recursive function to update nodes
        function updateChildren(node) {
            const selectedValue = selectedValueMap[node.parent.node.id];
            if (selectedValue !== undefined) {
                // Create a new node with updated utype
                const updatedParent = Object.assign(Object.assign({}, node.parent), { utype: selectedValue });
                return { parent: updatedParent, children: node.children.map((child) => updateChildren(child)) };
            }
            else {
                // If no update is needed, return the original node
                return { parent: node.parent, children: node.children.map((child) => updateChildren(child)) };
            }
        }
        // Iterate through the selection and update nodes based on the message
        selection.forEach((nestedNode) => {
            const updatedNode = updateChildren(nestedNode);
            updatedSelection.push(updatedNode);
        });
        return updatedSelection;
    }
    const textContent = (0,_XamlParser__WEBPACK_IMPORTED_MODULE_0__.ParseFigma)(nodes2Parse);
    figma.ui.postMessage({ type: "fileInfo", textContent });
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQztBQUMxQztBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGtCQUFrQixzQkFBc0I7QUFDNUcseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdCQUF3Qix1REFBVTtBQUNsQywyQkFBMkIsK0JBQStCO0FBQzFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL1Byb3BlcnR5LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9YYW1sUGFyc2VyLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9jb21tb25Qcm9wZXJ0eVBhcnNlci50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9mcmFtZS0yLWxheW91dC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvY29tbW9uLXNoYXBlLXByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2VsbGlwc2UtMi1lbGxpcHNlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9saW5lLTItbGluZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy92ZWN0b3ItMi1pY29uLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWFOb2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZWRpdG9yLTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2VudHJ5LTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2xpc3R2aWV3LTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMveGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtY3VzdG9tLWNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXZpZXcudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBFbGVtZW50TmFtZTtcclxuKGZ1bmN0aW9uIChFbGVtZW50TmFtZSkge1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJCYWNrZ3JvdW5kXCJdID0gMF0gPSBcIkJhY2tncm91bmRcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGluZWFyR3JhZGllbnRCcnVzaFwiXSA9IDFdID0gXCJMaW5lYXJHcmFkaWVudEJydXNoXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlJhZGlhbEdyYWRpZW50QnJ1c2hcIl0gPSAyXSA9IFwiUmFkaWFsR3JhZGllbnRCcnVzaFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJHcmFkaWVudFN0b3BcIl0gPSAzXSA9IFwiR3JhZGllbnRTdG9wXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNoYWRvd1wiXSA9IDRdID0gXCJTaGFkb3dcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGFiZWxcIl0gPSA1XSA9IFwiTGFiZWxcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQnV0dG9uXCJdID0gNl0gPSBcIkJ1dHRvblwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJFZGl0b3JcIl0gPSA3XSA9IFwiRWRpdG9yXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVudHJ5XCJdID0gOF0gPSBcIkVudHJ5XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlN0YWNrRnJhbWVcIl0gPSA5XSA9IFwiU3RhY2tGcmFtZVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUZXh0QmxvY2tcIl0gPSAxMF0gPSBcIlRleHRCbG9ja1wiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUZXh0Qm94XCJdID0gMTFdID0gXCJUZXh0Qm94XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbWJvQm94XCJdID0gMTJdID0gXCJDb21ib0JveFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaXN0Qm94XCJdID0gMTNdID0gXCJMaXN0Qm94XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxpc3RWaWV3XCJdID0gMTRdID0gXCJMaXN0Vmlld1wiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJSYWRpb0J1dHRvblwiXSA9IDE1XSA9IFwiUmFkaW9CdXR0b25cIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQ2hlY2tCb3hcIl0gPSAxNl0gPSBcIkNoZWNrQm94XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkltYWdlXCJdID0gMTddID0gXCJJbWFnZVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJCb3JkZXJcIl0gPSAxOF0gPSBcIkJvcmRlclwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJTY3JvbGxWaWV3ZXJcIl0gPSAxOV0gPSBcIlNjcm9sbFZpZXdlclwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQcm9ncmVzc0JhclwiXSA9IDIwXSA9IFwiUHJvZ3Jlc3NCYXJcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2xpZGVyXCJdID0gMjFdID0gXCJTbGlkZXJcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGFiQ29udHJvbFwiXSA9IDIyXSA9IFwiVGFiQ29udHJvbFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJJdGVtXCJdID0gMjNdID0gXCJUYWJJdGVtXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIk1lbnVcIl0gPSAyNF0gPSBcIk1lbnVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTWVudUl0ZW1cIl0gPSAyNV0gPSBcIk1lbnVJdGVtXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbnRleHRNZW51XCJdID0gMjZdID0gXCJDb250ZXh0TWVudVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQb3B1cFwiXSA9IDI3XSA9IFwiUG9wdXBcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUmVjdGFuZ2xlXCJdID0gMjhdID0gXCJSZWN0YW5nbGVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRWxsaXBzZVwiXSA9IDI5XSA9IFwiRWxsaXBzZVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQb2x5Z29uXCJdID0gMzBdID0gXCJQb2x5Z29uXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxpbmVcIl0gPSAzMV0gPSBcIkxpbmVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSG9yaXpvbnRhbFN0YWNrTGF5b3V0XCJdID0gMzJdID0gXCJIb3Jpem9udGFsU3RhY2tMYXlvdXRcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVmVydGljYWxTdGFja0xheW91dFwiXSA9IDMzXSA9IFwiVmVydGljYWxTdGFja0xheW91dFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJGbGV4TGF5b3V0XCJdID0gMzRdID0gXCJGbGV4TGF5b3V0XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZyYW1lXCJdID0gMzVdID0gXCJGcmFtZVwiO1xyXG59KShFbGVtZW50TmFtZSB8fCAoRWxlbWVudE5hbWUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIFByb3BlcnR5TmFtZTtcclxuKGZ1bmN0aW9uIChQcm9wZXJ0eU5hbWUpIHtcclxuICAgIC8vcmVjdGFuZ2xlXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUmFkaXVzWFwiXSA9IDBdID0gXCJSYWRpdXNYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUmFkaXVzWVwiXSA9IDFdID0gXCJSYWRpdXNZXCI7XHJcbiAgICAvLyB2ZWN0b3I/XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2VudGVyXCJdID0gMl0gPSBcIkNlbnRlclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkVuZFBvaW50XCJdID0gM10gPSBcIkVuZFBvaW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sb3JcIl0gPSA0XSA9IFwiQ29sb3JcIjtcclxuICAgIC8vU2hhZG93XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQnJ1c2hcIl0gPSA1XSA9IFwiQnJ1c2hcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPZmZTZXRcIl0gPSA2XSA9IFwiT2ZmU2V0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUmFkaXVzXCJdID0gN10gPSBcIlJhZGl1c1wiO1xyXG4gICAgLy9Db21tb25cclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbE9wdGlvbnNcIl0gPSA4XSA9IFwiVmVydGljYWxPcHRpb25zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbE9wdGlvbnNcIl0gPSA5XSA9IFwiSG9yaXpvbnRhbE9wdGlvbnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCYWNrZ3JvdW5kXCJdID0gMTBdID0gXCJCYWNrZ3JvdW5kXCI7XHJcbiAgICAvL01hcmdpbiBpcyBub3QgcG9zc2libGUgdG8gaGF2ZSBvbiBhIGZpZ21hIG5vZGVcclxuICAgIC8vQnV0dG9uXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyV2lkdGhcIl0gPSAxMV0gPSBcIkJvcmRlcldpZHRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudExheW91dFwiXSA9IDEyXSA9IFwiQ29udGVudExheW91dFwiO1xyXG4gICAgLy9MYWJlbFxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNoYXJhY3RlclNwYWNpbmdcIl0gPSAxM10gPSBcIkNoYXJhY3RlclNwYWNpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXR0cmlidXRlc1wiXSA9IDE0XSA9IFwiRm9udEF0dHJpYnV0ZXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCJdID0gMTVdID0gXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEZhbWlseVwiXSA9IDE2XSA9IFwiRm9udEZhbWlseVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRTaXplXCJdID0gMTddID0gXCJGb250U2l6ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcm1hdHRlZFRleHRcIl0gPSAxOF0gPSBcIkZvcm1hdHRlZFRleHRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsVGV4dEFsaWdubWVudFwiXSA9IDE5XSA9IFwiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMaW5lQnJlYWtNb2RlXCJdID0gMjBdID0gXCJMaW5lQnJlYWtNb2RlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGluZUhlaWdodFwiXSA9IDIxXSA9IFwiTGluZUhlaWdodFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heExpbmVzXCJdID0gMjJdID0gXCJNYXhMaW5lc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBhZGRpbmdcIl0gPSAyM10gPSBcIlBhZGRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0XCJdID0gMjRdID0gXCJUZXh0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dENvbG9yXCJdID0gMjVdID0gXCJUZXh0Q29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0RGVjb3JhdGlvbnNcIl0gPSAyNl0gPSBcIlRleHREZWNvcmF0aW9uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRUcmFuc2Zvcm1cIl0gPSAyN10gPSBcIlRleHRUcmFuc2Zvcm1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0VHlwZVwiXSA9IDI4XSA9IFwiVGV4dFR5cGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbFRleHRBbGlnbm1lbnRcIl0gPSAyOV0gPSBcIlZlcnRpY2FsVGV4dEFsaWdubWVudFwiO1xyXG4gICAgLy9GcmFtZVxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNwYWNpbmdcIl0gPSAzMF0gPSBcIlNwYWNpbmdcIjtcclxuICAgIC8vRmxleExheW91dFxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduQ29udGVudFwiXSA9IDMxXSA9IFwiQWxpZ25Db250ZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWxpZ25JdGVtc1wiXSA9IDMyXSA9IFwiQWxpZ25JdGVtc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkRpcmVjdGlvblwiXSA9IDMzXSA9IFwiRGlyZWN0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSnVzdGlmeUNvbnRlbnRcIl0gPSAzNF0gPSBcIkp1c3RpZnlDb250ZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUG9zaXRpb25cIl0gPSAzNV0gPSBcIlBvc2l0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiV3JhcFwiXSA9IDM2XSA9IFwiV3JhcFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduU2VsZlwiXSA9IDM3XSA9IFwiQWxpZ25TZWxmXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmFzaXNcIl0gPSAzOF0gPSBcIkJhc2lzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3Jvd1wiXSA9IDM5XSA9IFwiR3Jvd1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9yZGVyXCJdID0gNDBdID0gXCJPcmRlclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNocmlua1wiXSA9IDQxXSA9IFwiU2hyaW5rXCI7XHJcbiAgICAvL1BvbHlnb25cclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQb2ludHNcIl0gPSA0Ml0gPSBcIlBvaW50c1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZpbGxcIl0gPSA0M10gPSBcIkZpbGxcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGaWxsUnVsZVwiXSA9IDQ0XSA9IFwiRmlsbFJ1bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VcIl0gPSA0NV0gPSBcIlN0cm9rZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0cm9rZVRoaWNrbmVzc1wiXSA9IDQ2XSA9IFwiU3Ryb2tlVGhpY2tuZXNzXCI7XHJcbiAgICAvL0xpbmVcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJYMVwiXSA9IDQ3XSA9IFwiWDFcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJYMlwiXSA9IDQ4XSA9IFwiWDJcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMVwiXSA9IDQ5XSA9IFwiWTFcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMlwiXSA9IDUwXSA9IFwiWTJcIjtcclxuICAgIC8vQm9yZGVyXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlU2hhcGVcIl0gPSA1MV0gPSBcIlN0cm9rZVNoYXBlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF0dHJpYnV0ZVwiXSA9IDUyXSA9IFwiRm9udEF0dHJpYnV0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcmVncm91bmRDb2xvclwiXSA9IDUzXSA9IFwiRm9yZWdyb3VuZENvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyQ29sb3JcIl0gPSA1NF0gPSBcIkJvcmRlckNvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyVGhpY2tuZXNzXCJdID0gNTVdID0gXCJCb3JkZXJUaGlja25lc3NcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWaXNpYmlsaXR5XCJdID0gNTZdID0gXCJWaXNpYmlsaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkXCJdID0gNTddID0gXCJJc0VuYWJsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlYWRPbmx5XCJdID0gNThdID0gXCJJc1JlYWRPbmx5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFdlaWdodFwiXSA9IDU5XSA9IFwiRm9udFdlaWdodFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRTdHlsZVwiXSA9IDYwXSA9IFwiRm9udFN0eWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dEFsaWdubWVudFwiXSA9IDYxXSA9IFwiVGV4dEFsaWdubWVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkltYWdlU291cmNlXCJdID0gNjJdID0gXCJJbWFnZVNvdXJjZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNvdXJjZVwiXSA9IDYzXSA9IFwiU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbEFsaWdubWVudFwiXSA9IDY0XSA9IFwiSG9yaXpvbnRhbEFsaWdubWVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsQWxpZ25tZW50XCJdID0gNjVdID0gXCJWZXJ0aWNhbEFsaWdubWVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9wYWNpdHlcIl0gPSA2Nl0gPSBcIk9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb21tYW5kXCJdID0gNjddID0gXCJDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29tbWFuZFBhcmFtZXRlclwiXSA9IDY4XSA9IFwiQ29tbWFuZFBhcmFtZXRlclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQ2hlY2tlZFwiXSA9IDY5XSA9IFwiSXNDaGVja2VkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFwiXSA9IDcwXSA9IFwiQ29udGVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclwiXSA9IDcxXSA9IFwiSGVhZGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJUZXh0XCJdID0gNzJdID0gXCJQbGFjZWhvbGRlclRleHRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclRleHRDb2xvclwiXSA9IDczXSA9IFwiUGxhY2Vob2xkZXJUZXh0Q29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVcIl0gPSA3NF0gPSBcIklzVmlzaWJsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRm9jdXNlZFwiXSA9IDc1XSA9IFwiSXNGb2N1c2VkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNTZWxlY3RlZFwiXSA9IDc2XSA9IFwiSXNTZWxlY3RlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1zU291cmNlXCJdID0gNzddID0gXCJJdGVtc1NvdXJjZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UZW1wbGF0ZVwiXSA9IDc4XSA9IFwiSXRlbVRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJcIl0gPSA3OV0gPSBcIlBsYWNlaG9sZGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJbmRleFwiXSA9IDgwXSA9IFwiU2VsZWN0ZWRJbmRleFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1cIl0gPSA4MV0gPSBcIk1pbmltdW1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhpbXVtXCJdID0gODJdID0gXCJNYXhpbXVtXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmFsdWVcIl0gPSA4M10gPSBcIlZhbHVlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNUb2dnbGVkXCJdID0gODRdID0gXCJJc1RvZ2dsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb3JuZXJSYWRpdXNcIl0gPSA4NV0gPSBcIkNvcm5lclJhZGl1c1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUGFzc3dvcmRcIl0gPSA4Nl0gPSBcIklzUGFzc3dvcmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCJdID0gODddID0gXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNcIl0gPSA4OF0gPSBcIkl0ZW1zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNPcGVuXCJdID0gODldID0gXCJJc09wZW5cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VkaXRhYmxlXCJdID0gOTBdID0gXCJJc0VkaXRhYmxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRGlzcGxheU1lbWJlclBhdGhcIl0gPSA5MV0gPSBcIkRpc3BsYXlNZW1iZXJQYXRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRWYWx1ZVwiXSA9IDkyXSA9IFwiU2VsZWN0ZWRWYWx1ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGVkVmFsdWVQYXRoXCJdID0gOTNdID0gXCJTZWxlY3RlZFZhbHVlUGF0aFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclRlbXBsYXRlXCJdID0gOTRdID0gXCJIZWFkZXJUZW1wbGF0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvb3RlclRlbXBsYXRlXCJdID0gOTVdID0gXCJGb290ZXJUZW1wbGF0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkljb25cIl0gPSA5Nl0gPSBcIkljb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJY29uU291cmNlXCJdID0gOTddID0gXCJJY29uU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBOYW1lXCJdID0gOThdID0gXCJHcm91cE5hbWVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyU29ydFwiXSA9IDk5XSA9IFwiQ2FuVXNlclNvcnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyRmlsdGVyXCJdID0gMTAwXSA9IFwiQ2FuVXNlckZpbHRlclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNcIl0gPSAxMDFdID0gXCJDb2x1bW5zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93c1wiXSA9IDEwMl0gPSBcIlJvd3NcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5EZWZpbml0aW9uc1wiXSA9IDEwM10gPSBcIkNvbHVtbkRlZmluaXRpb25zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93RGVmaW5pdGlvbnNcIl0gPSAxMDRdID0gXCJSb3dEZWZpbml0aW9uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNlbGxQYWRkaW5nXCJdID0gMTA1XSA9IFwiQ2VsbFBhZGRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dTcGFuXCJdID0gMTA2XSA9IFwiUm93U3BhblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtblNwYW5cIl0gPSAxMDddID0gXCJDb2x1bW5TcGFuXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNIZWFkZXJWaXNpYmxlXCJdID0gMTA4XSA9IFwiSXNIZWFkZXJWaXNpYmxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNTb3J0YWJsZVwiXSA9IDEwOV0gPSBcIklzU29ydGFibGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0RGlyZWN0aW9uXCJdID0gMTEwXSA9IFwiU29ydERpcmVjdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwSGVhZGVyVGVtcGxhdGVcIl0gPSAxMTFdID0gXCJHcm91cEhlYWRlclRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBGb290ZXJUZW1wbGF0ZVwiXSA9IDExMl0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cFN0eWxlXCJdID0gMTEzXSA9IFwiR3JvdXBTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRXhwYW5kZWRcIl0gPSAxMTRdID0gXCJJc0V4cGFuZGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNQYW5lbFwiXSA9IDExNV0gPSBcIkl0ZW1zUGFuZWxcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGluZ1Jvd0NvbG9yXCJdID0gMTE2XSA9IFwiQWx0ZXJuYXRpbmdSb3dDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Db250YWluZXJTdHlsZVwiXSA9IDExN10gPSBcIkl0ZW1Db250YWluZXJTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Db250YWluZXJTdHlsZVNlbGVjdG9yXCJdID0gMTE4XSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGVtcGxhdGVTZWxlY3RvclwiXSA9IDExOV0gPSBcIkl0ZW1UZW1wbGF0ZVNlbGVjdG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBIZWFkZXJTdHlsZVwiXSA9IDEyMF0gPSBcIkdyb3VwSGVhZGVyU3R5bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclN0eWxlXCJdID0gMTIxXSA9IFwiR3JvdXBGb290ZXJTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEyMl0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbkhlYWRlclN0eWxlXCJdID0gMTIzXSA9IFwiQ29sdW1uSGVhZGVyU3R5bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTI0XSA9IFwiQ29sdW1uSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZyb3plbkNvbHVtbkNvdW50XCJdID0gMTI1XSA9IFwiRnJvemVuQ29sdW1uQ291bnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBdXRvR2VuZXJhdGVDb2x1bW5zXCJdID0gMTI2XSA9IFwiQXV0b0dlbmVyYXRlQ29sdW1uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNTb3VyY2VcIl0gPSAxMjddID0gXCJDb2x1bW5zU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1dpZHRoXCJdID0gMTI4XSA9IFwiQ29sdW1uc1dpZHRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU29ydE1lbWJlclBhdGhcIl0gPSAxMjldID0gXCJTb3J0TWVtYmVyUGF0aFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclRlbXBsYXRlXCJdID0gMTMwXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJTdHlsZVwiXSA9IDEzMV0gPSBcIlJvd0hlYWRlclN0eWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEzMl0gPSBcIlJvd0hlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGlvbkNvdW50XCJdID0gMTMzXSA9IFwiQWx0ZXJuYXRpb25Db3VudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQWx0ZXJuYXRpbmdSb3dDb2xvckVuYWJsZWRcIl0gPSAxMzRdID0gXCJJc0FsdGVybmF0aW5nUm93Q29sb3JFbmFibGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNJdGVtQ2xpY2tFbmFibGVkXCJdID0gMTM1XSA9IFwiSXNJdGVtQ2xpY2tFbmFibGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMzZdID0gXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDEzN10gPSBcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGlvbk1vZGVcIl0gPSAxMzhdID0gXCJTZWxlY3Rpb25Nb2RlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtc1wiXSA9IDEzOV0gPSBcIlNlbGVjdGVkSXRlbXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEl0ZW1cIl0gPSAxNDBdID0gXCJTZWxlY3RlZEl0ZW1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtQ2xpY2tcIl0gPSAxNDFdID0gXCJJdGVtQ2xpY2tcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1N0aWNreVwiXSA9IDE0Ml0gPSBcIklzU3RpY2t5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoRW5hYmxlZFwiXSA9IDE0M10gPSBcIklzUHVsbFRvUmVmcmVzaEVuYWJsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSZWZyZXNoQ29tbWFuZFwiXSA9IDE0NF0gPSBcIlJlZnJlc2hDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiXSA9IDE0NV0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nQ2hhbmdlZFwiXSA9IDE0Nl0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdDaGFuZ2VkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNMb2FkTW9yZUVuYWJsZWRcIl0gPSAxNDddID0gXCJJc0xvYWRNb3JlRW5hYmxlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxvYWRNb3JlQ29tbWFuZFwiXSA9IDE0OF0gPSBcIkxvYWRNb3JlQ29tbWFuZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nXCJdID0gMTQ5XSA9IFwiSXNMb2FkTW9yZUxvYWRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlTG9hZGluZ0NoYW5nZWRcIl0gPSAxNTBdID0gXCJJc0xvYWRNb3JlTG9hZGluZ0NoYW5nZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGFwcGVkXCJdID0gMTUxXSA9IFwiSXRlbVRhcHBlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1TZWxlY3RlZFwiXSA9IDE1Ml0gPSBcIkl0ZW1TZWxlY3RlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Eb3VibGVUYXBwZWRcIl0gPSAxNTNdID0gXCJJdGVtRG91YmxlVGFwcGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVMZWZ0Q29tbWFuZFwiXSA9IDE1NF0gPSBcIlN3aXBlTGVmdENvbW1hbmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVJpZ2h0Q29tbWFuZFwiXSA9IDE1NV0gPSBcIlN3aXBlUmlnaHRDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVVcENvbW1hbmRcIl0gPSAxNTZdID0gXCJTd2lwZVVwQ29tbWFuZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlRG93bkNvbW1hbmRcIl0gPSAxNTddID0gXCJTd2lwZURvd25Db21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVJdGVtc1wiXSA9IDE1OF0gPSBcIlN3aXBlSXRlbXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlZnJlc2hpbmdcIl0gPSAxNTldID0gXCJJc1JlZnJlc2hpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSZWZyZXNoQ29tbWFuZFBhcmFtZXRlclwiXSA9IDE2MF0gPSBcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVpZ2h0XCJdID0gMTYxXSA9IFwiUm93SGVpZ2h0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQXV0b0dlbmVyYXRlSXRlbVwiXSA9IDE2Ml0gPSBcIkF1dG9HZW5lcmF0ZUl0ZW1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxNb2RlXCJdID0gMTYzXSA9IFwiU2Nyb2xsTW9kZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxNjRdID0gXCJTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9cIl0gPSAxNjVdID0gXCJTY3JvbGxUb1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvUm93XCJdID0gMTY2XSA9IFwiU2Nyb2xsVG9Sb3dcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1Jvd0luZGV4XCJdID0gMTY3XSA9IFwiU2Nyb2xsVG9Sb3dJbmRleFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvQ29sdW1uXCJdID0gMTY4XSA9IFwiU2Nyb2xsVG9Db2x1bW5cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb0NvbHVtbkluZGV4XCJdID0gMTY5XSA9IFwiU2Nyb2xsVG9Db2x1bW5JbmRleFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNzBdID0gXCJIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDE3MV0gPSBcIkZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNzJdID0gXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWlnaHRSZXNpemVyXCJdID0gMTczXSA9IFwiUm93SGVpZ2h0UmVzaXplclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbFN0YXJ0ZWRcIl0gPSAxNzRdID0gXCJPblB1bGxTdGFydGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsRGVsdGFcIl0gPSAxNzVdID0gXCJPblB1bGxEZWx0YVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbENvbXBsZXRlZFwiXSA9IDE3Nl0gPSBcIk9uUHVsbENvbXBsZXRlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbENvbnRlbnRcIl0gPSAxNzddID0gXCJPblB1bGxDb250ZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZWxlYXNlQ29udGVudFwiXSA9IDE3OF0gPSBcIk9uUmVsZWFzZUNvbnRlbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlU3RhcnRlZFwiXSA9IDE3OV0gPSBcIk9uU3dpcGVTdGFydGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZURlbHRhXCJdID0gMTgwXSA9IFwiT25Td2lwZURlbHRhXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZUNvbXBsZXRlZFwiXSA9IDE4MV0gPSBcIk9uU3dpcGVDb21wbGV0ZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJldmVhbGluZ1wiXSA9IDE4Ml0gPSBcIk9uUmV2ZWFsaW5nXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZUVuZGVkXCJdID0gMTgzXSA9IFwiT25Td2lwZUVuZGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxlZFwiXSA9IDE4NF0gPSBcIk9uUmV2ZWFsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkV4ZWN1dGVcIl0gPSAxODVdID0gXCJPbkV4ZWN1dGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkhpZGluZ1wiXSA9IDE4Nl0gPSBcIk9uSGlkaW5nXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25IaWRkZW5cIl0gPSAxODddID0gXCJPbkhpZGRlblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3RhdGVDaGFuZ2VcIl0gPSAxODhdID0gXCJPblN0YXRlQ2hhbmdlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5pbWF0aW9uRHVyYXRpb25cIl0gPSAxODldID0gXCJBbmltYXRpb25EdXJhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcE9mZnNldFwiXSA9IDE5MF0gPSBcIk1heFRvcE9mZnNldFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pblRvcE9mZnNldFwiXSA9IDE5MV0gPSBcIk1pblRvcE9mZnNldFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pblRvcFJldmVhbGVkXCJdID0gMTkyXSA9IFwiTWluVG9wUmV2ZWFsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhUb3BSZXZlYWxlZFwiXSA9IDE5M10gPSBcIk1heFRvcFJldmVhbGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFRlbXBsYXRlXCJdID0gMTk0XSA9IFwiQ29udGVudFRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxOTVdID0gXCJDb250ZW50VGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uXCJdID0gMTk2XSA9IFwiUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY2FsZVwiXSA9IDE5N10gPSBcIlNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJhbnNsYXRpb25YXCJdID0gMTk4XSA9IFwiVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJhbnNsYXRpb25ZXCJdID0gMTk5XSA9IFwiVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGF5b3V0WFwiXSA9IDIwMF0gPSBcIkxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMYXlvdXRZXCJdID0gMjAxXSA9IFwiTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIldpZHRoUmVxdWVzdFwiXSA9IDIwMl0gPSBcIldpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlaWdodFJlcXVlc3RcIl0gPSAyMDNdID0gXCJIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDIwNF0gPSBcIk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDIwNV0gPSBcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5jaG9yWFwiXSA9IDIwNl0gPSBcIkFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbmNob3JZXCJdID0gMjA3XSA9IFwiQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWFwiXSA9IDIwOF0gPSBcIlJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWVwiXSA9IDIwOV0gPSBcIlJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlWFwiXSA9IDIxMF0gPSBcIlNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlWVwiXSA9IDIxMV0gPSBcIlNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiXSA9IDIxMl0gPSBcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdlc3R1cmVSZWNvZ25pemVyc1wiXSA9IDIxM10gPSBcIkdlc3R1cmVSZWNvZ25pemVyc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJlaGF2aW9yXCJdID0gMjE0XSA9IFwiQmVoYXZpb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmlnZ2Vyc1wiXSA9IDIxNV0gPSBcIlRyaWdnZXJzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2xhc3NJZFwiXSA9IDIxNl0gPSBcIkNsYXNzSWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHlsZUlkXCJdID0gMjE3XSA9IFwiU3R5bGVJZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZsb3dEaXJlY3Rpb25cIl0gPSAyMThdID0gXCJGbG93RGlyZWN0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSW5wdXRUcmFuc3BhcmVudFwiXSA9IDIxOV0gPSBcIklucHV0VHJhbnNwYXJlbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JcIl0gPSAyMjBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclwiXSA9IDIyMV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzXCJdID0gMjIyXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uXCJdID0gMjIzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1wiXSA9IDIyNF0gPSBcIklzVmlzaWJsZVBhZGRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclwiXSA9IDIyNV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JcIl0gPSAyMjZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoXCJdID0gMjI3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dcIl0gPSAyMjhdID0gXCJJc1Zpc2libGVTaGFkb3dcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VcIl0gPSAyMjldID0gXCJJc1Zpc2libGVTdHJva2VcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JcIl0gPSAyMzBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNcIl0gPSAyMzFdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhcIl0gPSAyMzJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIl0gPSAyMzNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblwiXSA9IDIzNF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVcIl0gPSAyMzVdID0gXCJJc1Zpc2libGVTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RcIl0gPSAyMzZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0XCJdID0gMjM3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSAyMzhdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSAyMzldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzXCJdID0gMjQwXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1wiXSA9IDI0MV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nXCJdID0gMjQyXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck9wYWNpdHlcIl0gPSAyNDNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCJdID0gMjQ0XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCJdID0gMjQ1XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93T3BhY2l0eVwiXSA9IDI0Nl0gPSBcIklzVmlzaWJsZVNoYWRvd09wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCJdID0gMjQ3XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE9wYWNpdHlcIl0gPSAyNDhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZT3BhY2l0eVwiXSA9IDI0OV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIl0gPSAyNTBdID0gXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIl0gPSAyNTFdID0gXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1Ml0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1M10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIl0gPSAyNTRdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1NV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiXSA9IDI1Nl0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c09wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nT3BhY2l0eVwiXSA9IDI1N10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ09wYWNpdHlcIl0gPSAyNThdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRWRpdGFibGVMYXlvdXRcIl0gPSAyNTldID0gXCJJc0VkaXRhYmxlTGF5b3V0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkT3BhY2l0eVwiXSA9IDI2MF0gPSBcIklzRW5hYmxlZE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblwiXSA9IDI2MV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiXSA9IDI2Ml0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblwiXSA9IDI2M10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25cIl0gPSAyNjRdID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiXSA9IDI2NV0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25cIl0gPSAyNjZdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblwiXSA9IDI2N10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCJdID0gMjY4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uXCJdID0gMjY5XSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblwiXSA9IDI3MF0gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25cIl0gPSAyNzFdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uXCJdID0gMjcyXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblwiXSA9IDI3M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25cIl0gPSAyNzRdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25cIl0gPSAyNzVdID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblwiXSA9IDI3Nl0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzddID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblwiXSA9IDI3OF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblwiXSA9IDI3OV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyODBdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblwiXSA9IDI4MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uXCJdID0gMjgyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uXCJdID0gMjgzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVcIl0gPSAyODRdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVcIl0gPSAyODVdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVcIl0gPSAyODZdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlXCJdID0gMjg3XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVcIl0gPSAyODhdID0gXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlXCJdID0gMjg5XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVcIl0gPSAyOTBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVwiXSA9IDI5MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVwiXSA9IDI5Ml0gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVcIl0gPSAyOTNdID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlXCJdID0gMjk0XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVwiXSA9IDI5NV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVcIl0gPSAyOTZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlXCJdID0gMjk3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlXCJdID0gMjk4XSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVcIl0gPSAyOTldID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlXCJdID0gMzAwXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVcIl0gPSAzMDFdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVcIl0gPSAzMDJdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlXCJdID0gMzAzXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVcIl0gPSAzMDRdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVwiXSA9IDMwNV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiXSA9IDMwNl0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFNjYWxlXCJdID0gMzA3XSA9IFwiSXNFbmFibGVkU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVhcIl0gPSAzMDhdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWFwiXSA9IDMwOV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCJdID0gMzEwXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVYXCJdID0gMzExXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWFwiXSA9IDMxMl0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWFwiXSA9IDMxM10gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVhcIl0gPSAzMTRdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVYXCJdID0gMzE1XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIl0gPSAzMTZdID0gXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VTY2FsZVhcIl0gPSAzMTddID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIl0gPSAzMThdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIl0gPSAzMTldID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVhcIl0gPSAzMjBdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIl0gPSAzMjFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWFwiXSA9IDMyMl0gPSBcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVTY2FsZVhcIl0gPSAzMjNdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVhcIl0gPSAzMjRdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCJdID0gMzI1XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVhcIl0gPSAzMjZdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVhcIl0gPSAzMjddID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVYXCJdID0gMzI4XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWFwiXSA9IDMyOV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVYXCJdID0gMzMwXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFNjYWxlWFwiXSA9IDMzMV0gPSBcIklzRW5hYmxlZFNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiXSA9IDMzMl0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVZXCJdID0gMzMzXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVlcIl0gPSAzMzRdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIl0gPSAzMzVdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVZXCJdID0gMzM2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVZXCJdID0gMzM3XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWVwiXSA9IDMzOF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVlcIl0gPSAzMzldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlWVwiXSA9IDM0MF0gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiXSA9IDM0MV0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWVwiXSA9IDM0Ml0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWVwiXSA9IDM0M10gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiXSA9IDM0NF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWVwiXSA9IDM0NV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVZXCJdID0gMzQ2XSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWVwiXSA9IDM0N10gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM0OF0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVlcIl0gPSAzNDldID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM1MF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWVwiXSA9IDM1MV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIl0gPSAzNTJdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVZXCJdID0gMzUzXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVlcIl0gPSAzNTRdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVZXCJdID0gMzU1XSA9IFwiSXNFbmFibGVkU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCJdID0gMzU2XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNTddID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiXSA9IDM1OF0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiXSA9IDM1OV0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvblhcIl0gPSAzNjBdID0gXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvblhcIl0gPSAzNjFdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25YXCJdID0gMzYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWFwiXSA9IDM2M10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCJdID0gMzY0XSA9IFwiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCJdID0gMzY1XSA9IFwiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yVHJhbnNsYXRpb25YXCJdID0gMzY2XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCJdID0gMzY3XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCJdID0gMzY4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZVHJhbnNsYXRpb25YXCJdID0gMzY5XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNzBdID0gXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25YXCJdID0gMzcxXSA9IFwiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzcyXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3M10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc0XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc1XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiXSA9IDM3Nl0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvblhcIl0gPSAzNzddID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWFwiXSA9IDM3OF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIl0gPSAzNzldID0gXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvbllcIl0gPSAzODBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4MV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCJdID0gMzgyXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25ZXCJdID0gMzgzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWVwiXSA9IDM4NF0gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWVwiXSA9IDM4NV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvbllcIl0gPSAzODZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25ZXCJdID0gMzg3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIl0gPSAzODhdID0gXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvbllcIl0gPSAzODldID0gXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIl0gPSAzOTBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIl0gPSAzOTFdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvbllcIl0gPSAzOTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIl0gPSAzOTNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWVwiXSA9IDM5NF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvbllcIl0gPSAzOTVdID0gXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOTZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gMzk3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOThdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOTldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25ZXCJdID0gNDAwXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwMV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25ZXCJdID0gNDAyXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFRyYW5zbGF0aW9uWVwiXSA9IDQwM10gPSBcIklzRW5hYmxlZFRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFhcIl0gPSA0MDRdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRYXCJdID0gNDA1XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WFwiXSA9IDQwNl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRYXCJdID0gNDA3XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRYXCJdID0gNDA4XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0xheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFhcIl0gPSA0MDldID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIl0gPSA0MTBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFhcIl0gPSA0MTFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRYXCJdID0gNDEyXSA9IFwiSXNWaXNpYmxlU2hhZG93TGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUxheW91dFhcIl0gPSA0MTNdID0gXCJJc1Zpc2libGVTdHJva2VMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WFwiXSA9IDQxNF0gPSBcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRYXCJdID0gNDE1XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFhcIl0gPSA0MTZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WFwiXSA9IDQxN10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFhcIl0gPSA0MThdID0gXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIl0gPSA0MTldID0gXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyMF0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyMV0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjJdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyM10gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WFwiXSA9IDQyNF0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WFwiXSA9IDQyNV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFhcIl0gPSA0MjZdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZExheW91dFhcIl0gPSA0MjddID0gXCJJc0VuYWJsZWRMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WVwiXSA9IDQyOF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFlcIl0gPSA0MjldID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRZXCJdID0gNDMwXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFlcIl0gPSA0MzFdID0gXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0xheW91dFlcIl0gPSA0MzJdID0gXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WVwiXSA9IDQzM10gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiXSA9IDQzNF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WVwiXSA9IDQzNV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0xheW91dFlcIl0gPSA0MzZdID0gXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WVwiXSA9IDQzN10gPSBcIklzVmlzaWJsZVN0cm9rZUxheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRZXCJdID0gNDM4XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFlcIl0gPSA0MzldID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WVwiXSA9IDQ0MF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRZXCJdID0gNDQxXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WVwiXSA9IDQ0Ml0gPSBcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiXSA9IDQ0M10gPSBcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ0XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ1XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0Nl0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ3XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRZXCJdID0gNDQ4XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRZXCJdID0gNDQ5XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WVwiXSA9IDQ1MF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTGF5b3V0WVwiXSA9IDQ1MV0gPSBcIklzRW5hYmxlZExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTJdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ1M10gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzV2lkdGhSZXF1ZXN0XCJdID0gNDU0XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDU1XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1dpZHRoUmVxdWVzdFwiXSA9IDQ1Nl0gPSBcIklzVmlzaWJsZVBhZGRpbmdXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlcldpZHRoUmVxdWVzdFwiXSA9IDQ1N10gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NThdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvcldpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoV2lkdGhSZXF1ZXN0XCJdID0gNDU5XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dXaWR0aFJlcXVlc3RcIl0gPSA0NjBdID0gXCJJc1Zpc2libGVTaGFkb3dXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIl0gPSA0NjFdID0gXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NjJdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNXaWR0aFJlcXVlc3RcIl0gPSA0NjNdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIl0gPSA0NjRdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllXaWR0aFJlcXVlc3RcIl0gPSA0NjVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbldpZHRoUmVxdWVzdFwiXSA9IDQ2Nl0gPSBcIklzVmlzaWJsZVJvdGF0aW9uV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVXaWR0aFJlcXVlc3RcIl0gPSA0NjddID0gXCJJc1Zpc2libGVTY2FsZVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NjhdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDY5XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzBdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzFdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCJdID0gNDcyXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1dpZHRoUmVxdWVzdFwiXSA9IDQ3M10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nV2lkdGhSZXF1ZXN0XCJdID0gNDc0XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1dpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiXSA9IDQ3NV0gPSBcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0NzZdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDc3XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ3OF0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0hlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25IZWlnaHRSZXF1ZXN0XCJdID0gNDc5XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdIZWlnaHRSZXF1ZXN0XCJdID0gNDgwXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0hlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIl0gPSA0ODFdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEhlaWdodFJlcXVlc3RcIl0gPSA0ODNdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCJdID0gNDg0XSA9IFwiSXNWaXNpYmxlU2hhZG93SGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUhlaWdodFJlcXVlc3RcIl0gPSA0ODVdID0gXCJJc1Zpc2libGVTdHJva2VIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9ySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4Nl0gPSBcIklzVmlzaWJsZVRleHRDb2xvckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCJdID0gNDg3XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEhlaWdodFJlcXVlc3RcIl0gPSA0ODhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4OV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIl0gPSA0OTBdID0gXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIl0gPSA0OTFdID0gXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5Ml0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5M10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OTRdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5NV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5Nl0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0hlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5N10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0hlaWdodFJlcXVlc3RcIl0gPSA0OThdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIl0gPSA0OTldID0gXCJJc0VuYWJsZWRIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTAzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDRdID0gXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwOF0gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDldID0gXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxMV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTVdID0gXCJJc1Zpc2libGVTY2FsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MThdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjBdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMl0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTIzXSA9IFwiSXNFbmFibGVkTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTI0XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUyNV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MjZdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUyN10gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUyOF0gPSBcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTI5XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMxXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMl0gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMzXSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzRdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM2XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM4XSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM5XSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDBdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDFdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQyXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDNdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDRdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDVdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ2XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ3XSA9IFwiSXNFbmFibGVkTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvclhcIl0gPSA1NDhdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JYXCJdID0gNTQ5XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWFwiXSA9IDU1MF0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JYXCJdID0gNTUxXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JYXCJdID0gNTUyXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0FuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvclhcIl0gPSA1NTNdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIl0gPSA1NTRdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvclhcIl0gPSA1NTVdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dBbmNob3JYXCJdID0gNTU2XSA9IFwiSXNWaXNpYmxlU2hhZG93QW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUFuY2hvclhcIl0gPSA1NTddID0gXCJJc1Zpc2libGVTdHJva2VBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWFwiXSA9IDU1OF0gPSBcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JYXCJdID0gNTU5XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvclhcIl0gPSA1NjBdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWFwiXSA9IDU2MV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvclhcIl0gPSA1NjJdID0gXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIl0gPSA1NjNdID0gXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWFwiXSA9IDU2NF0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWFwiXSA9IDU2NV0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NjZdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWFwiXSA9IDU2N10gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWFwiXSA9IDU2OF0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWFwiXSA9IDU2OV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvclhcIl0gPSA1NzBdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEFuY2hvclhcIl0gPSA1NzFdID0gXCJJc0VuYWJsZWRBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWVwiXSA9IDU3Ml0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvcllcIl0gPSA1NzNdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JZXCJdID0gNTc0XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvcllcIl0gPSA1NzVdID0gXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0FuY2hvcllcIl0gPSA1NzZdID0gXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWVwiXSA9IDU3N10gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiXSA9IDU3OF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWVwiXSA9IDU3OV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0FuY2hvcllcIl0gPSA1ODBdID0gXCJJc1Zpc2libGVTaGFkb3dBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWVwiXSA9IDU4MV0gPSBcIklzVmlzaWJsZVN0cm9rZUFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JZXCJdID0gNTgyXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvcllcIl0gPSA1ODNdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWVwiXSA9IDU4NF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JZXCJdID0gNTg1XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWVwiXSA9IDU4Nl0gPSBcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiXSA9IDU4N10gPSBcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JZXCJdID0gNTg4XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JZXCJdID0gNTg5XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5MF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JZXCJdID0gNTkxXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JZXCJdID0gNTkyXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JZXCJdID0gNTkzXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWVwiXSA9IDU5NF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkQW5jaG9yWVwiXSA9IDU5NV0gPSBcIklzRW5hYmxlZEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIl0gPSA1OTZdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWFwiXSA9IDU5N10gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25YXCJdID0gNTk4XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCJdID0gNTk5XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWFwiXSA9IDYwMF0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uWFwiXSA9IDYwMV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblhcIl0gPSA2MDJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25YXCJdID0gNjAzXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblhcIl0gPSA2MDRdID0gXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIl0gPSA2MDVdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblhcIl0gPSA2MDZdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblhcIl0gPSA2MDddID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIl0gPSA2MDhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblhcIl0gPSA2MDldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uWFwiXSA9IDYxMF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblhcIl0gPSA2MTFdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTJdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25YXCJdID0gNjEzXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTRdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTVdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCJdID0gNjE2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWFwiXSA9IDYxN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25YXCJdID0gNjE4XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFJvdGF0aW9uWFwiXSA9IDYxOV0gPSBcIklzRW5hYmxlZFJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiXSA9IDYyMF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25ZXCJdID0gNjIxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIl0gPSA2MjJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIl0gPSA2MjNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25ZXCJdID0gNjI0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25ZXCJdID0gNjI1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWVwiXSA9IDYyNl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvbllcIl0gPSA2MjddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiXSA9IDYyOF0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiXSA9IDYyOV0gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWVwiXSA9IDYzMF0gPSBcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiXSA9IDYzMV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiXSA9IDYzMl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWVwiXSA9IDYzM10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25ZXCJdID0gNjM0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWVwiXSA9IDYzNV0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiXSA9IDYzNl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2MzddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiXSA9IDYzOF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiXSA9IDYzOV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIl0gPSA2NDBdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25ZXCJdID0gNjQxXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvbllcIl0gPSA2NDJdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkUm90YXRpb25ZXCJdID0gNjQzXSA9IFwiSXNFbmFibGVkUm90YXRpb25ZXCI7XHJcbn0pKFByb3BlcnR5TmFtZSB8fCAoUHJvcGVydHlOYW1lID0ge30pKTtcclxuIiwiaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL2ZyYW1lLTItbGF5b3V0XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvZWxsaXBzZS0yLWVsbGlwc2VcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbFwiO1xyXG5pbXBvcnQgeyBDb250ZW50VmlldyB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXZpZXdcIjtcclxuaW1wb3J0IHsgQ3VzdG9tQ29udHJvbCB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLWN1c3RvbS1jb250cm9sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVJlY3RhbmdsZUVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9yZWN0YW5nbGUtMi1yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlTGluZUVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9saW5lLTItbGluZVwiO1xyXG5pbXBvcnQgeyBDb250ZW50UGFnZSB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXBhZ2VcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlVmVjdG9yRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3ZlY3Rvci0yLWljb25cIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQnV0dG9uRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi14YW1sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUVkaXRvckVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZWRpdG9yLTIteGFtbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVFbnRyeUVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZW50cnktMi14YW1sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxpc3RWaWV3RWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9saXN0dmlldy0yLXhhbWxcIjtcclxuZnVuY3Rpb24gY2hlY2tOb2RlVHlwZShubikge1xyXG4gICAgaWYgKG5uLnBhcmVudC51dHlwZSAhPT0gJ05vbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVXR5cGVOb2Rlcyhubik7XHJcbiAgICB9XHJcbiAgICBsZXQgbm9kZSA9IG5uLnBhcmVudC5ub2RlO1xyXG4gICAgLy8gQ2hlY2sgdGhlIG5vZGUncyB0eXBlIHVzaW5nIHRoZSAndHlwZScgcHJvcGVydHlcclxuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnRlJBTUUnOlxyXG4gICAgICAgICAgICBsZXQgZnJhbWVOb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZEZyYW1lTm9kZXMgPSAnJztcclxuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEZyYW1lTm9kZXMgKz0gY2hlY2tOb2RlVHlwZShuKSArIGBcXG5gKTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lRWxlbWVudCA9IFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQoZnJhbWVOb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFN0YXJ0VGFnKGZyYW1lRWxlbWVudCkgKyBgXFx0JHtuZXN0ZWRGcmFtZU5vZGVzfWAgKyBmb3JtYXRFbmRUYWcoZnJhbWVFbGVtZW50KTtcclxuICAgICAgICBjYXNlICdHUk9VUCc6XHJcbiAgICAgICAgICAgIGxldCBncm91cE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkR3JvdXBOb2RlcyA9ICcnO1xyXG4gICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmVzdGVkR3JvdXBOb2RlcyArPSBjaGVja05vZGVUeXBlKG4pICsgYFxcbmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkR3JvdXBOb2RlcztcclxuICAgICAgICBjYXNlICdURVhUJzpcclxuICAgICAgICAgICAgbGV0IHRleHROb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IHRleHRFbGVtZW50ID0gVHJhbnNsYXRlVGV4dEVsZW1lbnQodGV4dE5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcodGV4dEVsZW1lbnQpO1xyXG4gICAgICAgIGNhc2UgJ0VMTElQU0UnOlxyXG4gICAgICAgICAgICBsZXQgZWxsaXBzZU5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICBsZXQgZWxsaXBzZUVsZW1lbnQgPSBUcmFuc2xhdGVFbGxpcHNlRWxlbWVudChlbGxpcHNlTm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhlbGxpcHNlRWxlbWVudCk7XHJcbiAgICAgICAgY2FzZSAnTElORSc6XHJcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCBsaW5lRWxlbWVudCA9IFRyYW5zbGF0ZUxpbmVFbGVtZW50KGxpbmVOb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFNob3J0VGFnKGxpbmVFbGVtZW50KTtcclxuICAgICAgICBjYXNlICdSRUNUQU5HTEUnOlxyXG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVFbGVtZW50ID0gVHJhbnNsYXRlUmVjdGFuZ2xlRWxlbWVudChyZWN0YW5nbGVOb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFNob3J0VGFnKHJlY3RhbmdsZUVsZW1lbnQpO1xyXG4gICAgICAgIGNhc2UgJ1BPTFlHT04nOlxyXG4gICAgICAgICAgICBsZXQgcG9seWdvbk5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ1BvbHlnb24nO1xyXG4gICAgICAgIGNhc2UgJ0lOU1RBTkNFJzpcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5ncyA9IFtdOyAvL1RPRE86IGNoaWxkcmVuXHJcbiAgICAgICAgICAgIGxldCBjdXN0b21Db250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woaW5zdGFuY2VOb2RlLm5hbWUsIGJpbmRpbmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbUNvbnRyb2wuZ2V0U3RhcnRUYWcoKSArIGN1c3RvbUNvbnRyb2wuZ2V0RW5kVGFnKCk7XHJcbiAgICAgICAgY2FzZSAnQ09NUE9ORU5UJzpcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBNYWtlIG5ldyByZXNvdXJjZSBmaWxlIC8gbmV3IHdpbmRvd1xyXG4gICAgICAgICAgICBsZXQgY29udGVudFZpZXcgPSBuZXcgQ29udGVudFZpZXcobm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZENvbXBvbmVudCA9ICcnO1xyXG4gICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmVzdGVkQ29tcG9uZW50ICs9IGBcXHQke2NoZWNrTm9kZVR5cGUobil9XFxuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50Vmlldy5nZXRTdGFydFRhZygpICsgYFxcbiR7bmVzdGVkQ29tcG9uZW50fWAgKyBjb250ZW50Vmlldy5nZXRFbmRUYWcoKTtcclxuICAgICAgICAvL0FyZSBub3QgZ2V0dGluZyBjYXN0ZXQgXHJcbiAgICAgICAgY2FzZSAnVkVDVE9SJzpcclxuICAgICAgICAgICAgbGV0IHZlY3Rvck5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICBsZXQgdmVjdG9yTm90ZSA9IGAvLyBQbGVhc2UgZXhwb3J0ICR7dmVjdG9yTm9kZS5uYW1lfSBhcyBhIC5wbmctIG9yIC5zdmcgZmlsZSBhbmQgcGxhY2UgaW4gdGhlIFJlc291cmNlL0ltYWdlcy8gZm9sZGVyXFxuYDtcclxuICAgICAgICAgICAgbGV0IHZlY3RvckVsZW1lbnQgPSBUcmFuc2xhdGVWZWN0b3JFbGVtZW50KHZlY3Rvck5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yTm90ZSArIGZvcm1hdFNob3J0VGFnKHZlY3RvckVsZW1lbnQpO1xyXG4gICAgICAgIGNhc2UgJ1NUQVInOlxyXG4gICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBub2RlO1xyXG4gICAgICAgIGNhc2UgJ0JPT0xFQU5fT1BFUkFUSU9OJzpcclxuICAgICAgICAgICAgbGV0IGJvb2xlYW5PcGVyYXRpb25Ob2RlID0gbm9kZTtcclxuICAgICAgICBjYXNlICdTTElDRSc6XHJcbiAgICAgICAgICAgIGxldCBzbGljZU5vZGUgPSBub2RlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBgPCEtLSBUaGlzIHBsdWdpbiBpcyB1bmZvcnR1YW5hdGVseSB1bmFibGUgdG8gY2FzdCAke25vZGUudHlwZX1zIGFzIE1BVUkgZWxlbWVudHMuIC0tPmA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VVdHlwZU5vZGVzKG5uKSB7XHJcbiAgICBsZXQgbm9kZSA9IG5uLnBhcmVudDtcclxuICAgIGNvbnNvbGUubG9nKCd0cmFuc2xhdGluZyA6ICcsIG5vZGUudXR5cGUpO1xyXG4gICAgLy8gQ2hlY2sgdGhlIG5vZGUncyB0eXBlIHVzaW5nIHRoZSAndHlwZScgcHJvcGVydHlcclxuICAgIHN3aXRjaCAobm9kZS51dHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0JVVFRPTic6XHJcbiAgICAgICAgICAgIGxldCBidXR0b25Ob2RlID0gbm9kZS5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uRWxlbWVudCA9IFRyYW5zbGF0ZUJ1dHRvbkVsZW1lbnQoYnV0dG9uTm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhidXR0b25FbGVtZW50KTtcclxuICAgICAgICBjYXNlICdFRElUT1InOlxyXG4gICAgICAgICAgICBsZXQgZWRpdG9yTm9kZSA9IG5vZGUubm9kZTtcclxuICAgICAgICAgICAgbGV0IGVkaXRvckVsZW1lbnQgPSBUcmFuc2xhdGVFZGl0b3JFbGVtZW50KGVkaXRvck5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcoZWRpdG9yRWxlbWVudCk7XHJcbiAgICAgICAgY2FzZSAnRU5UUlknOlxyXG4gICAgICAgICAgICBsZXQgZW50cnlOb2RlID0gbm9kZS5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgZW50cnlFbGVtZW50ID0gVHJhbnNsYXRlRW50cnlFbGVtZW50KGVudHJ5Tm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhlbnRyeUVsZW1lbnQpO1xyXG4gICAgICAgIGNhc2UgJ0xJU1RWSUVXJzpcclxuICAgICAgICAgICAgbGV0IGxpc3RWaWV3Tm9kZSA9IG5vZGUubm9kZTtcclxuICAgICAgICAgICAgbGV0IGxpc3RWaWV3RWxlbWVudCA9IFRyYW5zbGF0ZUxpc3RWaWV3RWxlbWVudChsaXN0Vmlld05vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcobGlzdFZpZXdFbGVtZW50KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmlnbWEobm9kZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdQYXJzaW5nIE5vZGVzOiAnLCBub2Rlcyk7XHJcbiAgICBsZXQgeGFtbENvZGUgPSBcIlwiO1xyXG4gICAgbGV0IHJvb3Rub2RlID0gbm9kZXNbMF07XHJcbiAgICBsZXQgY29udGVudFBhZ2UgPSBuZXcgQ29udGVudFBhZ2Uocm9vdG5vZGUucGFyZW50Lm5vZGUubmFtZSk7XHJcbiAgICB4YW1sQ29kZSArPSBjb250ZW50UGFnZS5nZXRTdGFydFRhZygpICsgbmV3bGluZSgpO1xyXG4gICAgcm9vdG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcclxuICAgICAgICB4YW1sQ29kZSArPSBjaGVja05vZGVUeXBlKGMpOyAvL2NoZWNrIGlmIGl0IGlzIGEgdXNlciBkZWZpbmVkIG5vZGUgb3Igbm90XHJcbiAgICB9KTtcclxuICAgIHhhbWxDb2RlICs9IGNvbnRlbnRQYWdlLmdldEVuZFRhZygpO1xyXG4gICAgcmV0dXJuIHhhbWxDb2RlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTdGFydFRhZyhlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xyXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+IChwcm9wLnZhbHVlICE9PSAnTm9uZScpKSAvLyBFeGNsdWRlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZSAnTm9uZScgYmVjYXVzZSB0aGVuIGl0IGlzIHNldCB0byBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcclxuICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICByZXR1cm4gYDwke0VsZW1lbnROYW1lW2VsZW1lbnQubmFtZV19ICR7cHJvcGVydHlTdHJpbmd9PmAgKyBuZXdsaW5lKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNob3J0VGFnKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gZWxlbWVudC5wcm9wZXJ0aWVzXHJcbiAgICAgICAgLmZpbHRlcigocHJvcCkgPT4gcHJvcC52YWx1ZSAhPT0gJ05vbmUnKSAvLyBFeGNsdWRlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZSAnTm9uZScgYmVjYXVzZSB0aGVuIGl0IGlzIHNldCB0byBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcclxuICAgICAgICAuam9pbihcIiBcIiArIG5ld2xpbmUoKSArIGBcXHRgKTtcclxuICAgIHJldHVybiBgPCR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0gJHtwcm9wZXJ0eVN0cmluZ30vPmAgKyBuZXdsaW5lKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEVuZFRhZyhlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gYDwvJHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfT5gO1xyXG59XHJcbmZ1bmN0aW9uIG5ld2xpbmUoKSB7XHJcbiAgICByZXR1cm4gYFxcbmA7XHJcbn1cclxuZnVuY3Rpb24gYmFja2dyb3VuZFRvWGFtbChub2RlKSB7XHJcbiAgICBsZXQgYmFja2dyb3VuZCA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKTtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gW107XHJcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xyXG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbGxzLmZvckVhY2goKGZpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb2xpZFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3sgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiBjb2xvciB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpbGwudHlwZSA9PT0gJ0dSQURJRU5UX0xJTkVBUicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmFkaWVudFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZWFyR3JhZGllbnRCcnVzaFByb3AgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkVuZFBvaW50LCB2YWx1ZTogJzEsMCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVhckdyYWRpZW50QnJ1c2hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5MaW5lYXJHcmFkaWVudEJydXNoLCBwcm9wZXJ0aWVzOiBsaW5lYXJHcmFkaWVudEJydXNoUHJvcCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRQcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMuZm9yRWFjaChzdG9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmFkUHJvcCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5PZmZTZXQsIHZhbHVlOiBgJHtzdG9wLnBvc2l0aW9ufWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db2xvciwgdmFsdWU6IGAjJHtzdG9wLmNvbG9yLnJ9JHtzdG9wLmNvbG9yLmd9JHtzdG9wLmNvbG9yLmJ9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZFByb3BzLnB1c2goeyBuYW1lOiBFbGVtZW50TmFtZS5HcmFkaWVudFN0b3AsIHByb3BlcnRpZXM6IGdyYWRQcm9wIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh7IHBhcmVudDogbGluZWFyR3JhZGllbnRCcnVzaEVsZW1lbnQsIGNoaWxkcmVuOiBncmFkUHJvcHMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsbC50eXBlID09PSAnR1JBRElFTlRfUkFESUFMJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBHcmFkaWVudCBQYWludCAoTGluZWFyIG9yIFJhZGlhbClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmFkaWVudFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaWFsR3JhZGllbnRCcnVzaFByb3AgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNlbnRlciwgdmFsdWU6ICcwLjUsIDAuNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzLCB2YWx1ZTogJzAuNScgfVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGlhbEdyYWRpZW50QnJ1c2hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5SYWRpYWxHcmFkaWVudEJydXNoLCBwcm9wZXJ0aWVzOiByYWRpYWxHcmFkaWVudEJydXNoUHJvcCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRQcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMuZm9yRWFjaChzdG9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmFkUHJvcCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5PZmZTZXQsIHZhbHVlOiBgJHtzdG9wLnBvc2l0aW9ufWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db2xvciwgdmFsdWU6IGAjJHtzdG9wLmNvbG9yLnJ9JHtzdG9wLmNvbG9yLmd9JHtzdG9wLmNvbG9yLmJ9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRTdG9wID0geyBuYW1lOiBFbGVtZW50TmFtZS5HcmFkaWVudFN0b3AsIHByb3BlcnRpZXM6IGdyYWRQcm9wIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkUHJvcHMucHVzaCh7IG5hbWU6IEVsZW1lbnROYW1lLkdyYWRpZW50U3RvcCwgcHJvcGVydGllczogZ3JhZFByb3AgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKHsgcGFyZW50OiByYWRpYWxHcmFkaWVudEJydXNoRWxlbWVudCwgY2hpbGRyZW46IGdyYWRQcm9wcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgRmlnbWFOb2RlIH0gZnJvbSBcIi4vZmlnbWFOb2RlVHlwZXNcIjtcclxubGV0IGJvcmRlckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJvcmRlciwgcHJvcGVydGllczogW10gfTtcclxubGV0IGJhY2tncm91bmQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJhY2tncm91bmQsIHByb3BlcnRpZXM6IFtdIH07XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgY29uc3QgY29tbW9uUHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk9wYWNpdHksIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVPcGFjaXR5KG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Jc1Zpc2libGUsIHZhbHVlOiBib29sVG9EZWZhdWx0KG5vZGUudmlzaWJsZSwgdHJ1ZSkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Ib3Jpem9udGFsT3B0aW9ucywgdmFsdWU6IChfYiA9IHRyYW5zbGF0ZUxheW91dEFsaWduKG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5WZXJ0aWNhbE9wdGlvbnMsIHZhbHVlOiAoX2MgPSB0cmFuc2xhdGVMYXlvdXRBbGlnbihub2RlKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJ05vbmUnIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNvbW1vblByb3BlcnRpZXM7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlTGF5b3V0QWxpZ24obm9kZSkge1xyXG4gICAgaWYgKCdsYXlvdXRBbGlnbicgaW4gbm9kZSkge1xyXG4gICAgICAgIHN3aXRjaCAobm9kZS5sYXlvdXRBbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0NlbnRlcic7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnRW5kJztcclxuICAgICAgICAgICAgY2FzZSBcIlNUUkVUQ0hcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnRmlsbCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1N0YXJ0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gW107XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kUHJvcGVydGllcyA9IFtdO1xyXG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbGxzID0gbm9kZS5maWxscztcclxuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBgIyR7c29saWRQYWludC5jb2xvci5yfSR7c29saWRQYWludC5jb2xvci5nfSR7c29saWRQYWludC5jb2xvci5ifWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFByb3BlcnRpZXMucHVzaCh7IG5hbWU6IFByb3BlcnR5TmFtZS5CYWNrZ3JvdW5kLCB2YWx1ZTogY29sb3IgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWxsLnR5cGUgPT09ICdHUkFESUVOVF9MSU5FQVInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRQYWludCA9IGZpbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVhckdyYWRpZW50QnJ1c2hQcm9wID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5FbmRQb2ludCwgdmFsdWU6ICcxLDAnIH1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lYXJHcmFkaWVudEJydXNoRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGluZWFyR3JhZGllbnRCcnVzaCwgcHJvcGVydGllczogbGluZWFyR3JhZGllbnRCcnVzaFByb3AgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhZGllbnRQYWludC5ncmFkaWVudFN0b3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmFkUHJvcHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRQYWludC5ncmFkaWVudFN0b3BzLmZvckVhY2goc3RvcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JhZFByb3AgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuT2ZmU2V0LCB2YWx1ZTogYCR7c3RvcC5wb3NpdGlvbn1gIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29sb3IsIHZhbHVlOiBgIyR7c3RvcC5jb2xvci5yfSR7c3RvcC5jb2xvci5nfSR7c3RvcC5jb2xvci5ifWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRQcm9wcy5wdXNoKHsgbmFtZTogRWxlbWVudE5hbWUuR3JhZGllbnRTdG9wLCBwcm9wZXJ0aWVzOiBncmFkUHJvcCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goeyBwYXJlbnQ6IGxpbmVhckdyYWRpZW50QnJ1c2hFbGVtZW50LCBjaGlsZHJlbjogZ3JhZFByb3BzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpbGwudHlwZSA9PT0gJ0dSQURJRU5UX1JBRElBTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgR3JhZGllbnQgUGFpbnQgKExpbmVhciBvciBSYWRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRQYWludCA9IGZpbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGlhbEdyYWRpZW50QnJ1c2hQcm9wID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5DZW50ZXIsIHZhbHVlOiAnMC41LCAwLjUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlJhZGl1cywgdmFsdWU6ICcwLjUnIH1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpYWxHcmFkaWVudEJydXNoRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuUmFkaWFsR3JhZGllbnRCcnVzaCwgcHJvcGVydGllczogcmFkaWFsR3JhZGllbnRCcnVzaFByb3AgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhZGllbnRQYWludC5ncmFkaWVudFN0b3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmFkUHJvcHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRQYWludC5ncmFkaWVudFN0b3BzLmZvckVhY2goc3RvcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JhZFByb3AgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuT2ZmU2V0LCB2YWx1ZTogYCR7c3RvcC5wb3NpdGlvbn1gIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29sb3IsIHZhbHVlOiBgIyR7c3RvcC5jb2xvci5yfSR7c3RvcC5jb2xvci5nfSR7c3RvcC5jb2xvci5ifWAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmFkU3RvcCA9IHsgbmFtZTogRWxlbWVudE5hbWUuR3JhZGllbnRTdG9wLCBwcm9wZXJ0aWVzOiBncmFkUHJvcCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZFByb3BzLnB1c2goeyBuYW1lOiBFbGVtZW50TmFtZS5HcmFkaWVudFN0b3AsIHByb3BlcnRpZXM6IGdyYWRQcm9wIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh7IHBhcmVudDogcmFkaWFsR3JhZGllbnRCcnVzaEVsZW1lbnQsIGNoaWxkcmVuOiBncmFkUHJvcHMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYmFja2dyb3VuZFByb3BlcnRpZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGJhY2tncm91bmRQcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlU3Ryb2tlKG5vZGUpIHtcclxuICAgIC8vY29sb3JcclxuICAgIGlmICgnc3Ryb2tlcycgaW4gbm9kZSkge1xyXG4gICAgICAgIG5vZGUuc3Ryb2tlcy5mb3JFYWNoKHN0cm9rZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PT0gJ1NPTElEJyAmJiAobm9kZS5zdHJva2VXZWlnaHQgIT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gc3Ryb2tlLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0cm9rZUNvbG9yID0geyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlLCB2YWx1ZTogYCMke2NvbC5yfSR7Y29sLmd9JHtjb2wuYn1gIH07XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnByb3BlcnRpZXMucHVzaChzdHJva2VDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3Ryb2tlV2VpZ2h0ID0geyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlVGhpY2tuZXNzLCB2YWx1ZTogYCR7bm9kZS5zdHJva2VXZWlnaHR9YCB9O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goc3Ryb2tlV2VpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJvb2xUb0RlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlT3BhY2l0eShub2RlKSB7XHJcbiAgICBpZiAoJ29wYWNpdHknIGluIG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5vcGFjaXR5LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVDb3JuZXJSYWRpdXMobm9kZSkge1xyXG4gICAgaWYgKG5vZGUudHlwZSAhPT0gKEZpZ21hTm9kZS5DT01QT05FTlQgfHwgRmlnbWFOb2RlLkNPTVBPTkVOVF9TRVQgfHwgRmlnbWFOb2RlLkZSQU1FIHx8IEZpZ21hTm9kZS5JTlNUQU5DRSB8fCBGaWdtYU5vZGUuUkVDVEFOR0xFKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzdHJva2VTaGFwZSA9IHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZVNoYXBlLCB2YWx1ZTogYFJvdW5kUmVjdGFuZ2xlICAke25vZGUudG9wTGVmdFJhZGl1c30sICR7bm9kZS50b3BSaWdodFJhZGl1c30sICR7bm9kZS5ib3R0b21MZWZ0UmFkaXVzfSwgJHtub2RlLmJvdHRvbVJpZ2h0UmFkaXVzfWAgfTtcclxuICAgIGJvcmRlckVsZW1lbnQucHJvcGVydGllcy5wdXNoKHN0cm9rZVNoYXBlKTtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVTaGFkb3cobm9kZSkge1xyXG4gICAgaWYgKCdlZmZlY3RzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgbm9kZS5lZmZlY3RzLmZvckVhY2goZWZmZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSAnRFJPUF9TSEFET1cnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gZWZmZWN0LmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZiA9IGVmZmVjdC5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hhZG93UHJvcGVydGllcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5CcnVzaCwgdmFsdWU6IGAjJHtjb2wucn0ke2NvbC5nfSR7Y29sLmJ9YCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk9mZlNldCwgdmFsdWU6IGAke29mZi54fSwgJHtvZmYueX1gIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuT3BhY2l0eSwgdmFsdWU6IGAke2NvbC5hfWAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5SYWRpdXMsIHZhbHVlOiBgJHtlZmZlY3QucmFkaXVzfWAgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiBFbGVtZW50TmFtZS5TaGFkb3csIHByb3BlcnRpZXM6IHNoYWRvd1Byb3BlcnRpZXMgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQobm9kZSkge1xyXG4gICAgc3dpdGNoIChub2RlLmxheW91dE1vZGUpIHtcclxuICAgICAgICBjYXNlIFwiSE9SSVpPTlRBTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRlSG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKTtcclxuICAgICAgICBjYXNlIFwiVkVSVElDQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZVZlcnRpY2FsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVGbGV4TGF5b3V0RWxlbWVudChub2RlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBUcmFuc2xhdGVGbGV4TGF5b3V0RWxlbWVudChub2RlKSB7XHJcbiAgICBjb25zdCBmbGV4TGF5b3V0UHJvcGVydGllcyA9IFtcclxuICAgICAgICAvKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBsYXllciB1c2VzIGF1dG8tbGF5b3V0IHRvIHBvc2l0aW9uIGl0cyBjaGlsZHJlbi4gRGVmYXVsdHMgdG8gXCJOT05FXCIuICovXHJcbiAgICAgICAgLy9sYXlvdXRNb2RlOiAnTk9ORScgfCAnSE9SSVpPTlRBTCcgfCAnVkVSVElDQUwnXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3BhY2luZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLml0ZW1TcGFjaW5nLnRvU3RyaW5nKCkpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25Db250ZW50LCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkNvbnRlbnQobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25JdGVtcywgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXMobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV3JhcCwgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hV3JhcFRvWGFtbFdyYXAobm9kZS5sYXlvdXRXcmFwKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkdyb3csIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUobm9kZS5sYXlvdXRHcm93LnRvU3RyaW5nKCkpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25TZWxmLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyhub2RlLmxheW91dEFsaWduKSB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGZsZXhMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5GbGV4TGF5b3V0LCBwcm9wZXJ0aWVzOiBmbGV4TGF5b3V0UHJvcGVydGllcyB9O1xyXG4gICAgcmV0dXJuIGZsZXhMYXlvdXRFbGVtZW50OyAvL2Zvcm1hdFN0YXJ0VGFnKGZsZXhMYXlvdXRFbGVtZW50KSAgKyBmb3JtYXRFbmRUYWcoZmxleExheW91dEVsZW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSAnMCcpIHtcclxuICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbn1cclxuZnVuY3Rpb24gVHJhbnNsYXRlSG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKSB7XHJcbiAgICBjb25zdCBob3Jpem9udGFsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNwYWNpbmcsIHZhbHVlOiBub2RlLml0ZW1TcGFjaW5nLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5Ib3Jpem9udGFsU3RhY2tMYXlvdXQsIHByb3BlcnRpZXM6IGhvcml6b250YWxTdGFja0xheW91dFByb3BlcnRpZXMgfTtcclxuICAgIHJldHVybiBob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50OyAvL2Zvcm1hdFN0YXJ0VGFnKGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQpICArIGZvcm1hdEVuZFRhZyhob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KTtcclxufVxyXG5mdW5jdGlvbiBUcmFuc2xhdGVWZXJ0aWNhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKSB7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkpIH0sXHJcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5WZXJ0aWNhbE9wdGlvbnMsICAgdmFsdWU6IG5vZGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zfSxcclxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogbm9kZS5sZXR0ZXJTcGFjaW5nLnRvU3RyaW5nKCkgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5WZXJ0aWNhbFN0YWNrTGF5b3V0LCBwcm9wZXJ0aWVzOiB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcyB9O1xyXG4gICAgcmV0dXJuIHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50OyAvL2Zvcm1hdFN0YXJ0VGFnKHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50KSAgKyBmb3JtYXRFbmRUYWcodmVydGl2YWxTdGFja0xheW91dEVsZW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkge1xyXG4gICAgaWYgKG5vZGUucGFkZGluZ0xlZnQgPT0gbm9kZS5wYWRkaW5nUmlnaHQgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdUb3AgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdCb3R0b20pIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5wYWRkaW5nTGVmdC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGAke25vZGUucGFkZGluZ0xlZnR9LCAke25vZGUucGFkZGluZ1RvcH0sICR7bm9kZS5wYWRkaW5nUmlnaHR9LCAke25vZGUucGFkZGluZ0JvdHRvbX0sYDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYUFsaWduSXRlbXNUb1hhbWxBbGlnbkl0ZW1zKHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSBcIk1BWFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gJ0VuZCc7XHJcbiAgICAgICAgY2FzZSBcIkNFTlRFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gJ0NlbnRlcic7XHJcbiAgICAgICAgY2FzZSBcIk1JTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gJ1N0YXJ0JztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ1N0cmV0Y2gnO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hV3JhcFRvWGFtbFdyYXAodmFsdWUpIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlICdXUkFQJzpcclxuICAgICAgICAgICAgcmV0dXJuICdXcmFwJztcclxuICAgICAgICBjYXNlICdOT19XUkFQJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hQWxpZ25Db250ZW50KHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSAnU1BBQ0VfQkVUV0VFTic6XHJcbiAgICAgICAgICAgIHJldHVybiAnU3BhY2VCZXR3ZWVuJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ1N0cmV0Y2gnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVDb21tb25TaGFwZVByb3BlcnRpZXMobm9kZSkge1xyXG4gICAgcmV0dXJuICcnOyAvL3RyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKTtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gW107XHJcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xyXG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbGxzLmZvckVhY2goKGZpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb2xpZFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3sgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiBjb2xvciB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpbGwudHlwZSA9PT0gJ0dSQURJRU5UX0xJTkVBUicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmFkaWVudFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZWFyR3JhZGllbnRCcnVzaFByb3AgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkVuZFBvaW50LCB2YWx1ZTogJzEsMCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVhckdyYWRpZW50QnJ1c2hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5MaW5lYXJHcmFkaWVudEJydXNoLCBwcm9wZXJ0aWVzOiBsaW5lYXJHcmFkaWVudEJydXNoUHJvcCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRQcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMuZm9yRWFjaChzdG9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmFkUHJvcCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5PZmZTZXQsIHZhbHVlOiBgJHtzdG9wLnBvc2l0aW9ufWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db2xvciwgdmFsdWU6IGAjJHtzdG9wLmNvbG9yLnJ9JHtzdG9wLmNvbG9yLmd9JHtzdG9wLmNvbG9yLmJ9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZFByb3BzLnB1c2goeyBuYW1lOiBFbGVtZW50TmFtZS5HcmFkaWVudFN0b3AsIHByb3BlcnRpZXM6IGdyYWRQcm9wIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh7IHBhcmVudDogbGluZWFyR3JhZGllbnRCcnVzaEVsZW1lbnQsIGNoaWxkcmVuOiBncmFkUHJvcHMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsbC50eXBlID09PSAnR1JBRElFTlRfUkFESUFMJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBHcmFkaWVudCBQYWludCAoTGluZWFyIG9yIFJhZGlhbClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmFkaWVudFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaWFsR3JhZGllbnRCcnVzaFByb3AgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNlbnRlciwgdmFsdWU6ICcwLjUsIDAuNScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzLCB2YWx1ZTogJzAuNScgfVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGlhbEdyYWRpZW50QnJ1c2hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5SYWRpYWxHcmFkaWVudEJydXNoLCBwcm9wZXJ0aWVzOiByYWRpYWxHcmFkaWVudEJydXNoUHJvcCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRQcm9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMuZm9yRWFjaChzdG9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmFkUHJvcCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5PZmZTZXQsIHZhbHVlOiBgJHtzdG9wLnBvc2l0aW9ufWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db2xvciwgdmFsdWU6IGAjJHtzdG9wLmNvbG9yLnJ9JHtzdG9wLmNvbG9yLmd9JHtzdG9wLmNvbG9yLmJ9YCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRTdG9wID0geyBuYW1lOiBFbGVtZW50TmFtZS5HcmFkaWVudFN0b3AsIHByb3BlcnRpZXM6IGdyYWRQcm9wIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkUHJvcHMucHVzaCh7IG5hbWU6IEVsZW1lbnROYW1lLkdyYWRpZW50U3RvcCwgcHJvcGVydGllczogZ3JhZFByb3AgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKHsgcGFyZW50OiByYWRpYWxHcmFkaWVudEJydXNoRWxlbWVudCwgY2hpbGRyZW46IGdyYWRQcm9wcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25TaGFwZVByb3BlcnRpZXMgfSBmcm9tIFwiLi9jb21tb24tc2hhcGUtcHJvcGVydGllc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQobm9kZSkge1xyXG4gICAgbGV0IGNvbW1vblNoYXBlUHJvcHMgPSBUcmFuc2xhdGVDb21tb25TaGFwZVByb3BlcnRpZXMobm9kZSk7XHJcbiAgICBjb25zdCBlbGxpcHNlUHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5GaWxsLCB2YWx1ZTogbm9kZS5maWxscy50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlVGhpY2tuZXNzLCB2YWx1ZTogbm9kZS5zdHJva2VXZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6ICcjMDAwMDAwJyB9LFxyXG4gICAgICAgIC8vIEFkZCBvdGhlciBlbGxpcHNlLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcclxuICAgIF07XHJcbiAgICBjb25zdCBlbGxpcHNlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWxsaXBzZSwgcHJvcGVydGllczogZWxsaXBzZVByb3BlcnRpZXMgfTtcclxuICAgIHJldHVybiBlbGxpcHNlRWxlbWVudDtcclxufVxyXG5mdW5jdGlvbiBjb21tb25TaGFwZVByb3BzVHlwZShzKSB7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUxpbmVFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IGxpbmVQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlgxLCB2YWx1ZTogJzAnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTEsIHZhbHVlOiAnMCcgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5YMiwgdmFsdWU6ICc1MCcgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5ZMiwgdmFsdWU6ICcwJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6ICcjMDAwMDAwJyB9LFxyXG4gICAgICAgIC8vIEFkZCBvdGhlciBsaW5lLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcclxuICAgIF07XHJcbiAgICBjb25zdCBsaW5lRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGluZSwgcHJvcGVydGllczogbGluZVByb3BlcnRpZXMgfTtcclxuICAgIHJldHVybiBsaW5lRWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KG5vZGUpIHtcclxuICAgIGxldCBjb21tb25Qcm9wZXJ0aWVzID0gVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKTtcclxuICAgIGNvbnN0IHJlY3RhbmdsZVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzWCwgdmFsdWU6IG5vZGUudG9wTGVmdFJhZGl1cy50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzWSwgdmFsdWU6IG5vZGUuYm90dG9tUmlnaHRSYWRpdXMudG9TdHJpbmcoKSB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgcmVjdGFuZ2xlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuUmVjdGFuZ2xlLCBwcm9wZXJ0aWVzOiByZWN0YW5nbGVQcm9wZXJ0aWVzLmNvbmNhdChjb21tb25Qcm9wZXJ0aWVzKSB9O1xyXG4gICAgcmV0dXJuIHJlY3RhbmdsZUVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQobm9kZSkge1xyXG4gICAgY29uc3QgdmVjdG9yUHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNvdXJjZSwgdmFsdWU6IHRyYW5zbGF0ZVNvdXJjZShub2RlKSB9LFxyXG4gICAgICAgIC8vIEFkZCBvdGhlciBlbGxpcHNlLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcclxuICAgIF07XHJcbiAgICBjb25zdCB2ZWN0b3JFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5JbWFnZSwgcHJvcGVydGllczogdmVjdG9yUHJvcGVydGllcyB9O1xyXG4gICAgcmV0dXJuIHZlY3RvckVsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlU291cmNlKG5vZGUpIHtcclxuICAgIHJldHVybiBgJHtub2RlLm5hbWV9LnBuZ2A7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVRleHRFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XHJcbiAgICBjb25zdCB0ZXh0UHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5DaGFyYWN0ZXJTcGFjaW5nLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlTGV0dGVyU3BhY2luZyhub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF0dHJpYnV0ZXMsIHZhbHVlOiB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcyhub2RlLmZvbnRXZWlnaHQpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF1dG9TY2FsaW5nRW5hYmxlZCwgdmFsdWU6IHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKG5vZGUudGV4dEF1dG9SZXNpemUpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udFNpemUsIHZhbHVlOiBub2RlLmZvbnRTaXplLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Ib3Jpem9udGFsVGV4dEFsaWdubWVudCwgdmFsdWU6IHRyYW5zbGF0ZUhvcml6b250YWxBbGlnbm1lbnQobm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVCcmVha01vZGUsIHZhbHVlOiB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZShub2RlLnRleHRUcnVuY2F0aW9uKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVIZWlnaHQsIHZhbHVlOiAoX2IgPSB0cmFuc2xhdGVMaW5lSGVpZ2h0KG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5NYXhMaW5lcywgdmFsdWU6IChfZCA9IChfYyA9IG5vZGUubWF4TGluZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0LCB2YWx1ZTogbm9kZS5jaGFyYWN0ZXJzIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dENvbG9yLCB2YWx1ZTogKF9lID0gZ2V0SGV4Q29sb3JGcm9tRmlsbChub2RlKSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dERlY29yYXRpb25zLCB2YWx1ZTogdHJhbnNsYXRlVGV4dERlY29yYXRpb25Ub1hBTUwobm9kZS50ZXh0RGVjb3JhdGlvbikgfHwgJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dFRyYW5zZm9ybSwgdmFsdWU6IHRyYW5zbGF0ZVRleHRDYXNlVG9YQU1MKG5vZGUudGV4dENhc2UpIHx8ICdOb25lJyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHRleHRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5MYWJlbCwgcHJvcGVydGllczogdGV4dFByb3BlcnRpZXMgfTtcclxuICAgIHJldHVybiB0ZXh0RWxlbWVudDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVMaW5lSGVpZ2h0KG5vZGUpIHtcclxuICAgIGxldCBsaCA9IG5vZGUubGluZUhlaWdodDtcclxuICAgIGlmIChcInZhbHVlXCIgaW4gbGgpIHtcclxuICAgICAgICByZXR1cm4gbGgudmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldHRlclNwYWNpbmcobm9kZSkge1xyXG4gICAgbGV0IGxzID0gbm9kZS5sZXR0ZXJTcGFjaW5nLnZhbHVlO1xyXG4gICAgaWYgKGxzICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGxzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBnZXRIZXhDb2xvckZyb21GaWxsKHRleHROb2RlKSB7XHJcbiAgICBpZiAoIXRleHROb2RlIHx8ICF0ZXh0Tm9kZS5maWxscyB8fCB0ZXh0Tm9kZS5maWxscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbGwgPSB0ZXh0Tm9kZS5maWxsc1swXTsgLy8gV2UgYXNzdW1lIHRoZSBmaXJzdCBmaWxsIGlzIHRoZSBvbmUgd2Ugd2FudFxyXG4gICAgaWYgKGZpbGwgPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICBjb25zdCBzb2xpZEZpbGwgPSBmaWxsO1xyXG4gICAgICAgIHJldHVybiByZ2JUb0hleChzb2xpZEZpbGwuY29sb3IpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZmlsbC50eXBlLnN0YXJ0c1dpdGgoJ0dSQURJRU5UJykpIHtcclxuICAgICAgICAvLyBIYW5kbGUgZ3JhZGllbnQgZmlsbHMgKGlmIG5lZWRlZClcclxuICAgICAgICAvLyBZb3UgY2FuIGFkZCBsb2dpYyBoZXJlIHRvIGhhbmRsZSBncmFkaWVudCBmaWxsc1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZnVuY3Rpb24gcmdiVG9IZXgocmdiKSB7XHJcbiAgICBjb25zdCByID0gTWF0aC5yb3VuZChyZ2IuciAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCBnID0gTWF0aC5yb3VuZChyZ2IuZyAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCBiID0gTWF0aC5yb3VuZChyZ2IuYiAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBsZXQgY29sb3IgPSBgIyR7cn0ke2d9JHtifWA7XHJcbiAgICBpZiAoY29sb3IgPT09ICcjMDAwMDAwJykge1xyXG4gICAgICAgIHJldHVybiAnTm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dENhc2VUb1hBTUwodGV4dENhc2UpIHtcclxuICAgIHN3aXRjaCAodGV4dENhc2UpIHtcclxuICAgICAgICBjYXNlIFwiVVBQRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVXBwZXJjYXNlXCI7XHJcbiAgICAgICAgY2FzZSBcIkxPV0VSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkxvd2VyY2FzZVwiO1xyXG4gICAgICAgIGNhc2UgXCJUSVRMRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXBpdGFsaXplXCI7XHJcbiAgICAgICAgLy8gRmlnbWEgXCJPUklHSU5BTFwiIGNvcnJlc3BvbmRzIHRvIFwiTm9uZVwiIGluIFhBTUwsIHdoaWNoIGxlYXZlcyB0aGUgdGV4dCBjYXNlIGFzIGlzLlxyXG4gICAgICAgIGNhc2UgXCJPUklHSU5BTFwiOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjsgLy8gRGVmYXVsdCB0byBubyB0cmFuc2Zvcm1hdGlvblxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHREZWNvcmF0aW9uVG9YQU1MKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcIlNUUklLRVRIUk9VR0hcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiU3RyaWtldGhyb3VnaFwiO1xyXG4gICAgICAgIGNhc2UgXCJVTkRFUkxJTkVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVW5kZXJsaW5lXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUcnVuY2F0aW9uVG9MaW5lQnJlYWtNb2RlKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcclxuICAgIC8vT0JTICEgRG8gbm90IGZ1bGZpbGwgYWxsIExpbmVCcmVha01vZGVzIG9mIFhhbWwuIFNlZSBmb2xsb3dpbmcgbGluayBmb3IgbW9yZSBpbmZvIGFib3V0IExpbmVCcmVha01vZGU6IGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvYXBpL21pY3Jvc29mdC5tYXVpLmxpbmVicmVha21vZGU/dmlldz1uZXQtbWF1aS03LjBcclxuICAgIHN3aXRjaCAoZmlnbWFUZXh0VHJ1bmNhdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJFTkRJTkdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVGFpbFRydW5jYXRpb25cIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIERlZmF1bHQgdG8gTm9XcmFwIGlmIHRoZSB2YWx1ZSBpcyBub3QgcmVjb2duaXplZFxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcclxuICAgIHN3aXRjaCAoZmlnbWFUZXh0QXV0b1Jlc2l6ZSkge1xyXG4gICAgICAgIGNhc2UgXCJOT05FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImZhbHNlXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiOyAvLyB3aGVuIHJldHVybmluZyBub25lIGl0IHdpbGwgbm90IGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB4YW1sIHRleHQsIHNpbmNlIGl0IGlzIHRoZSBkZWZhdWx0IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHRyYW5zbGF0ZSBGaWdtYSBob3Jpem9udGFsIHRleHQgYWxpZ25tZW50IHRvIFhBTUxcclxuZnVuY3Rpb24gdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChhbGlnbikge1xyXG4gICAgLy9UT0RPOiBmaXggdGhpcyB0byBjb3JyZWN0IHhhbWxcclxuICAgIHN3aXRjaCAoYWxpZ24pIHtcclxuICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNlbnRlclwiO1xyXG4gICAgICAgIGNhc2UgXCJSSUdIVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJSaWdodFwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcyhmaWdtYUZvbnRXZWlnaHQpIHtcclxuICAgIGlmIChmaWdtYUZvbnRXZWlnaHQgPiA0MDApIHtcclxuICAgICAgICByZXR1cm4gJ0JvbGQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdmFyIEZpZ21hTm9kZTtcclxuKGZ1bmN0aW9uIChGaWdtYU5vZGUpIHtcclxuICAgIEZpZ21hTm9kZVtcIkNPTVBPTkVOVFwiXSA9IFwiQ09NUE9ORU5UXCI7XHJcbiAgICBGaWdtYU5vZGVbXCJDT01QT05FTlRfU0VUXCJdID0gXCJDT01QT05FTlRfU0VUXCI7XHJcbiAgICBGaWdtYU5vZGVbXCJGUkFNRVwiXSA9IFwiRlJBTUVcIjtcclxuICAgIEZpZ21hTm9kZVtcIklOU1RBTkNFXCJdID0gXCJJTlNUQU5DRVwiO1xyXG4gICAgRmlnbWFOb2RlW1wiUkVDVEFOR0xFXCJdID0gXCJSRUNUQU5HTEVcIjtcclxufSkoRmlnbWFOb2RlIHx8IChGaWdtYU5vZGUgPSB7fSkpO1xyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChub2RlKSB7XHJcbiAgICBjb25zdCBidXR0b25Qcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIC8vY29tbW9uIHN0dWZmXHJcbiAgICAgICAgLy9GcmFtZSBzdHVmZlxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyQ29sb3IsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyV2lkdGgsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5DaGFyYWN0ZXJTcGFjaW5nLCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNvbnRlbnRMYXlvdXQsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db3JuZXJSYWRpdXMsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF0dHJpYnV0ZXMsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250QXV0b1NjYWxpbmdFbmFibGVkLCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIC8vdGV4dCBzdHVmZlxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRTaXplLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTGluZUJyZWFrTW9kZSwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0Q29sb3IsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5CdXR0b24sIHByb3BlcnRpZXM6IGJ1dHRvblByb3BlcnRpZXMgfTtcclxuICAgIHJldHVybiBidXR0b25FbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFZGl0b3JFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IGVkaXRvclByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkVkaXRvciwgcHJvcGVydGllczogZWRpdG9yUHJvcGVydGllcyB9O1xyXG4gICAgcmV0dXJuIGVkaXRvckVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUVudHJ5RWxlbWVudChub2RlKSB7XHJcbiAgICBjb25zdCBlbnRyeVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IGVudHJ5RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRW50cnksIHByb3BlcnRpZXM6IGVudHJ5UHJvcGVydGllcyB9O1xyXG4gICAgcmV0dXJuIGVudHJ5RWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlTGlzdFZpZXdFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IGxpc3R2aWV3UHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgbGlzdHZpZXdFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5MaXN0VmlldywgcHJvcGVydGllczogbGlzdHZpZXdQcm9wZXJ0aWVzIH07XHJcbiAgICByZXR1cm4gbGlzdHZpZXdFbGVtZW50O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDdXN0b21Db250cm9sIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xOYW1lLCBiaW5kaW5ncykge1xyXG4gICAgICAgIHRoaXMuZW5kVGFnID0gJy8+JztcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0gYmluZGluZ3M7XHJcbiAgICAgICAgdGhpcy5zdGFydFRhZyA9IHRoaXMuRm9ybWF0U3RhcnRUYWcoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBjb250cm9sTmFtZTtcclxuICAgIH1cclxuICAgIGdldFN0YXJ0VGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kVGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcclxuICAgIH1cclxuICAgIEZvcm1hdFN0YXJ0VGFnKCkge1xyXG4gICAgICAgIGxldCBzZXRCaW5kaW5ncyA9ICcnO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChiID0+IHNldEJpbmRpbmdzICsgYCR7Yi5uYW1lfSA9ICR7Yi52YWx1ZX1cXG5gKTtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxjb250cm9sOiR7dGhpcy5uYW1lfSAke3NldEJpbmRpbmdzfWA7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRFbmRUYWcgPSAnPic7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmVuZFRhZyA9ICdcXG48L0NvbnRlbnRQYWdlPic7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0U3RhcnRUYWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUYWcgKyB0aGlzLnN0YXJ0RW5kVGFnO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kVGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRDb250cm9sKHBhZ2UpIHtcclxuICAgIHBhZ2Uuc3RhcnRUYWcgPSBgJHtwYWdlLnN0YXJ0VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zOmNvbnRyb2xzPWNsci1uYW1lc3BhY2U6Q3VzdG9tQ29udHJvbHNcXG5gO1xyXG59XHJcbmZ1bmN0aW9uIEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiBgPENvbnRlbnRQYWdlIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9JHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeDpOYW1lPSR7Y2xhc3NOYW1lfVxcbmA7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRlbnRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRFbmRUYWcgPSAnPic7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmVuZFRhZyA9ICdcXG48L0NvbnRlbnRWaWV3Pic7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0U3RhcnRUYWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUYWcgKyB0aGlzLnN0YXJ0RW5kVGFnO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kVGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgLy9DcmVhdGUgYSBmb2xkZXIgdW5kZXIgUmVzb3VyY2VzIGNhbGxlZCBcIkN1c3RvbUNvbnRyb2xzXCIgYW5kIG1ha2UgYSBuZXcgXCJDb250ZW50Vmlld1wiIGluIHRoZXJlIFxyXG4gICAgPENvbnRlbnRWaWV3IHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9Q3VzdG9tQ29udHJvbHMuJHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeDpOYW1lPSR7Y2xhc3NOYW1lfVxcbmA7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQYXJzZUZpZ21hIH0gZnJvbSBcIi4vWGFtbFBhcnNlclwiO1xyXG4vLyBzcmMvcGx1Z2luLnRzXHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNjAwLCBoZWlnaHQ6IDQwMCB9KTtcclxuZnVuY3Rpb24gbWFrZURpc3BsYXlOb2RlKF9ub2RlKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBfbm9kZS5uYW1lLCB1dHlwZTogJ05vbmUnLCBub2RlOiBfbm9kZSB9O1xyXG59XHJcbmZ1bmN0aW9uIGNoaWxkcmVuVG9OZXN0ZWROb2Rlcyhjbikge1xyXG4gICAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICAgY24uZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5uID0gdHJhdmVyc2UoYyk7XHJcbiAgICAgICAgbGlzdC5wdXNoKG5uKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuZnVuY3Rpb24gdHJhdmVyc2UoY24pIHtcclxuICAgIGNvbnN0IGRuID0gbWFrZURpc3BsYXlOb2RlKGNuKTtcclxuICAgIGNvbnN0IG5uID0ge1xyXG4gICAgICAgIHBhcmVudDogZG4sXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfTtcclxuICAgIGlmICgnY2hpbGRyZW4nIGluIGNuKSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGhhcyBjaGlsZHJlbiwgd2UgbXVzdCBnbyB0aHJvdWdoIHRoZW0gYW5kIG1ha2UgdGhlbSBpbnRvIG5lc3RlZCBub2Rlc1xyXG4gICAgICAgIG5uLmNoaWxkcmVuID0gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuLmNoaWxkcmVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiBubjtcclxufVxyXG5jb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XHJcbmNvbnN0IHJvb3ROb2RlID0gbWFrZURpc3BsYXlOb2RlKHNlbGVjdGlvbik7XHJcbmxldCBsaXN0ID0gW107XHJcbmlmICgnY2hpbGRyZW4nIGluIHNlbGVjdGlvbikge1xyXG4gICAgc2VsZWN0aW9uLmNoaWxkcmVuLmZvckVhY2goYyA9PiBsaXN0LnB1c2goYykpO1xyXG59XHJcbmNvbnN0IG5vZGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhcmVudDogcm9vdE5vZGUsXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuVG9OZXN0ZWROb2RlcyhsaXN0KSxcclxuICAgIH0sXHJcbl07XHJcbmxldCBub2RlczJQYXJzZSA9IFtdO1xyXG5maWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6ICdpbml0Jywgbm9kZXMgfSk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImdvdCB0aGlzIGZyb20gdGhlIFVJXCIsIG1lc3NhZ2UpO1xyXG4gICAgbm9kZXMyUGFyc2UgPSB1cGRhdGVEaXNwbGF5Tm9kZVVUeXBlKG5vZGVzLCBtZXNzYWdlKTtcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlOb2RlVVR5cGUoc2VsZWN0aW9uLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbWFwcGluZyBvZiBCYXNlTm9kZS5pZCB0byBzZWxlY3RlZFZhbHVlXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZU1hcCA9IHt9O1xyXG4gICAgICAgIG1lc3NhZ2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlTWFwW2l0ZW0ubm9kZS5wYXJlbnQubm9kZS5pZF0gPSBpdGVtLnNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGFycmF5IHRvIGhvbGQgdGhlIHVwZGF0ZWQgc2VsZWN0aW9uXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgIC8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0byB1cGRhdGUgbm9kZXNcclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbihub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlTWFwW25vZGUucGFyZW50Lm5vZGUuaWRdO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSB3aXRoIHVwZGF0ZWQgdXR5cGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQYXJlbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG5vZGUucGFyZW50KSwgeyB1dHlwZTogc2VsZWN0ZWRWYWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHBhcmVudDogdXBkYXRlZFBhcmVudCwgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gdXBkYXRlQ2hpbGRyZW4oY2hpbGQpKSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gdXBkYXRlIGlzIG5lZWRlZCwgcmV0dXJuIHRoZSBvcmlnaW5hbCBub2RlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IG5vZGUucGFyZW50LCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB1cGRhdGVDaGlsZHJlbihjaGlsZCkpIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5kIHVwZGF0ZSBub2RlcyBiYXNlZCBvbiB0aGUgbWVzc2FnZVxyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChuZXN0ZWROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWROb2RlID0gdXBkYXRlQ2hpbGRyZW4obmVzdGVkTm9kZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb24ucHVzaCh1cGRhdGVkTm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IFBhcnNlRmlnbWEobm9kZXMyUGFyc2UpO1xyXG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImZpbGVJbmZvXCIsIHRleHRDb250ZW50IH0pO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=