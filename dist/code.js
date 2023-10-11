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
    ElementName[ElementName["none"] = 0] = "none";
    ElementName[ElementName["ImageButton"] = 1] = "ImageButton";
    ElementName[ElementName["CollectionView"] = 2] = "CollectionView";
    ElementName[ElementName["Background"] = 3] = "Background";
    ElementName[ElementName["LinearGradientBrush"] = 4] = "LinearGradientBrush";
    ElementName[ElementName["RadialGradientBrush"] = 5] = "RadialGradientBrush";
    ElementName[ElementName["GradientStop"] = 6] = "GradientStop";
    ElementName[ElementName["Shadow"] = 7] = "Shadow";
    ElementName[ElementName["Label"] = 8] = "Label";
    ElementName[ElementName["Button"] = 9] = "Button";
    ElementName[ElementName["Editor"] = 10] = "Editor";
    ElementName[ElementName["Entry"] = 11] = "Entry";
    ElementName[ElementName["StackFrame"] = 12] = "StackFrame";
    ElementName[ElementName["TextBlock"] = 13] = "TextBlock";
    ElementName[ElementName["TextBox"] = 14] = "TextBox";
    ElementName[ElementName["ComboBox"] = 15] = "ComboBox";
    ElementName[ElementName["RadioButton"] = 16] = "RadioButton";
    ElementName[ElementName["CheckBox"] = 17] = "CheckBox";
    ElementName[ElementName["Image"] = 18] = "Image";
    ElementName[ElementName["Border"] = 19] = "Border";
    ElementName[ElementName["ScrollView"] = 20] = "ScrollView";
    ElementName[ElementName["ProgressBar"] = 21] = "ProgressBar";
    ElementName[ElementName["Slider"] = 22] = "Slider";
    ElementName[ElementName["Switch"] = 23] = "Switch";
    ElementName[ElementName["TabControl"] = 24] = "TabControl";
    ElementName[ElementName["TabItem"] = 25] = "TabItem";
    ElementName[ElementName["Menu"] = 26] = "Menu";
    ElementName[ElementName["MenuItem"] = 27] = "MenuItem";
    ElementName[ElementName["ContextMenu"] = 28] = "ContextMenu";
    ElementName[ElementName["Popup"] = 29] = "Popup";
    ElementName[ElementName["Rectangle"] = 30] = "Rectangle";
    ElementName[ElementName["Ellipse"] = 31] = "Ellipse";
    ElementName[ElementName["Polygon"] = 32] = "Polygon";
    ElementName[ElementName["Line"] = 33] = "Line";
    ElementName[ElementName["HorizontalStackLayout"] = 34] = "HorizontalStackLayout";
    ElementName[ElementName["VerticalStackLayout"] = 35] = "VerticalStackLayout";
    ElementName[ElementName["FlexLayout"] = 36] = "FlexLayout";
    ElementName[ElementName["Frame"] = 37] = "Frame";
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
    PropertyName[PropertyName["StrokeDashArray"] = 0] = "StrokeDashArray";
    //rectangle
    PropertyName[PropertyName["RadiusX"] = 1] = "RadiusX";
    PropertyName[PropertyName["RadiusY"] = 2] = "RadiusY";
    // vector?
    PropertyName[PropertyName["Center"] = 3] = "Center";
    PropertyName[PropertyName["EndPoint"] = 4] = "EndPoint";
    PropertyName[PropertyName["Color"] = 5] = "Color";
    //Shadow
    PropertyName[PropertyName["Brush"] = 6] = "Brush";
    PropertyName[PropertyName["OffSet"] = 7] = "OffSet";
    PropertyName[PropertyName["Radius"] = 8] = "Radius";
    //Common
    PropertyName[PropertyName["VerticalOptions"] = 9] = "VerticalOptions";
    PropertyName[PropertyName["HorizontalOptions"] = 10] = "HorizontalOptions";
    PropertyName[PropertyName["Background"] = 11] = "Background";
    //Margin is not possible to have on a figma node
    //Button
    PropertyName[PropertyName["BorderWidth"] = 12] = "BorderWidth";
    PropertyName[PropertyName["ContentLayout"] = 13] = "ContentLayout";
    //Label
    PropertyName[PropertyName["CharacterSpacing"] = 14] = "CharacterSpacing";
    PropertyName[PropertyName["FontAttributes"] = 15] = "FontAttributes";
    PropertyName[PropertyName["FontAutoScalingEnabled"] = 16] = "FontAutoScalingEnabled";
    PropertyName[PropertyName["FontFamily"] = 17] = "FontFamily";
    PropertyName[PropertyName["FontSize"] = 18] = "FontSize";
    PropertyName[PropertyName["FormattedText"] = 19] = "FormattedText";
    PropertyName[PropertyName["HorizontalTextAlignment"] = 20] = "HorizontalTextAlignment";
    PropertyName[PropertyName["LineBreakMode"] = 21] = "LineBreakMode";
    PropertyName[PropertyName["LineHeight"] = 22] = "LineHeight";
    PropertyName[PropertyName["MaxLines"] = 23] = "MaxLines";
    PropertyName[PropertyName["Padding"] = 24] = "Padding";
    PropertyName[PropertyName["Text"] = 25] = "Text";
    PropertyName[PropertyName["TextColor"] = 26] = "TextColor";
    PropertyName[PropertyName["TextDecorations"] = 27] = "TextDecorations";
    PropertyName[PropertyName["TextTransform"] = 28] = "TextTransform";
    PropertyName[PropertyName["TextType"] = 29] = "TextType";
    PropertyName[PropertyName["VerticalTextAlignment"] = 30] = "VerticalTextAlignment";
    //Frame
    PropertyName[PropertyName["Spacing"] = 31] = "Spacing";
    //FlexLayout
    PropertyName[PropertyName["AlignContent"] = 32] = "AlignContent";
    PropertyName[PropertyName["AlignItems"] = 33] = "AlignItems";
    PropertyName[PropertyName["Direction"] = 34] = "Direction";
    PropertyName[PropertyName["JustifyContent"] = 35] = "JustifyContent";
    PropertyName[PropertyName["Position"] = 36] = "Position";
    PropertyName[PropertyName["Wrap"] = 37] = "Wrap";
    PropertyName[PropertyName["AlignSelf"] = 38] = "AlignSelf";
    PropertyName[PropertyName["Basis"] = 39] = "Basis";
    PropertyName[PropertyName["Grow"] = 40] = "Grow";
    PropertyName[PropertyName["Order"] = 41] = "Order";
    PropertyName[PropertyName["Shrink"] = 42] = "Shrink";
    //Polygon
    PropertyName[PropertyName["Points"] = 43] = "Points";
    PropertyName[PropertyName["Fill"] = 44] = "Fill";
    PropertyName[PropertyName["FillRule"] = 45] = "FillRule";
    PropertyName[PropertyName["Stroke"] = 46] = "Stroke";
    PropertyName[PropertyName["StrokeThickness"] = 47] = "StrokeThickness";
    //Line
    PropertyName[PropertyName["X1"] = 48] = "X1";
    PropertyName[PropertyName["X2"] = 49] = "X2";
    PropertyName[PropertyName["Y1"] = 50] = "Y1";
    PropertyName[PropertyName["Y2"] = 51] = "Y2";
    //Border
    PropertyName[PropertyName["StrokeShape"] = 52] = "StrokeShape";
    PropertyName[PropertyName["FontAttribute"] = 53] = "FontAttribute";
    PropertyName[PropertyName["none"] = 54] = "none";
    PropertyName[PropertyName["x:Name"] = 55] = "x:Name";
    PropertyName[PropertyName["ForegroundColor"] = 56] = "ForegroundColor";
    PropertyName[PropertyName["BorderColor"] = 57] = "BorderColor";
    PropertyName[PropertyName["BorderThickness"] = 58] = "BorderThickness";
    PropertyName[PropertyName["Visibility"] = 59] = "Visibility";
    PropertyName[PropertyName["IsEnabled"] = 60] = "IsEnabled";
    PropertyName[PropertyName["IsReadOnly"] = 61] = "IsReadOnly";
    PropertyName[PropertyName["FontWeight"] = 62] = "FontWeight";
    PropertyName[PropertyName["FontStyle"] = 63] = "FontStyle";
    PropertyName[PropertyName["TextAlignment"] = 64] = "TextAlignment";
    PropertyName[PropertyName["ImageSource"] = 65] = "ImageSource";
    PropertyName[PropertyName["Source"] = 66] = "Source";
    PropertyName[PropertyName["HorizontalAlignment"] = 67] = "HorizontalAlignment";
    PropertyName[PropertyName["VerticalAlignment"] = 68] = "VerticalAlignment";
    PropertyName[PropertyName["Opacity"] = 69] = "Opacity";
    PropertyName[PropertyName["Command"] = 70] = "Command";
    PropertyName[PropertyName["CommandParameter"] = 71] = "CommandParameter";
    PropertyName[PropertyName["IsChecked"] = 72] = "IsChecked";
    PropertyName[PropertyName["Content"] = 73] = "Content";
    PropertyName[PropertyName["Header"] = 74] = "Header";
    PropertyName[PropertyName["PlaceholderText"] = 75] = "PlaceholderText";
    PropertyName[PropertyName["PlaceholderTextColor"] = 76] = "PlaceholderTextColor";
    PropertyName[PropertyName["IsVisible"] = 77] = "IsVisible";
    PropertyName[PropertyName["IsFocused"] = 78] = "IsFocused";
    PropertyName[PropertyName["IsSelected"] = 79] = "IsSelected";
    PropertyName[PropertyName["ItemsSource"] = 80] = "ItemsSource";
    PropertyName[PropertyName["ItemTemplate"] = 81] = "ItemTemplate";
    PropertyName[PropertyName["Placeholder"] = 82] = "Placeholder";
    PropertyName[PropertyName["SelectedIndex"] = 83] = "SelectedIndex";
    PropertyName[PropertyName["Minimum"] = 84] = "Minimum";
    PropertyName[PropertyName["Maximum"] = 85] = "Maximum";
    PropertyName[PropertyName["Value"] = 86] = "Value";
    PropertyName[PropertyName["IsToggled"] = 87] = "IsToggled";
    PropertyName[PropertyName["CornerRadius"] = 88] = "CornerRadius";
    PropertyName[PropertyName["IsPassword"] = 89] = "IsPassword";
    PropertyName[PropertyName["IsReadOnlyCaretVisible"] = 90] = "IsReadOnlyCaretVisible";
    PropertyName[PropertyName["Items"] = 91] = "Items";
    PropertyName[PropertyName["IsOpen"] = 92] = "IsOpen";
    PropertyName[PropertyName["IsEditable"] = 93] = "IsEditable";
    PropertyName[PropertyName["DisplayMemberPath"] = 94] = "DisplayMemberPath";
    PropertyName[PropertyName["SelectedValue"] = 95] = "SelectedValue";
    PropertyName[PropertyName["SelectedValuePath"] = 96] = "SelectedValuePath";
    PropertyName[PropertyName["HeaderTemplate"] = 97] = "HeaderTemplate";
    PropertyName[PropertyName["FooterTemplate"] = 98] = "FooterTemplate";
    PropertyName[PropertyName["Icon"] = 99] = "Icon";
    PropertyName[PropertyName["IconSource"] = 100] = "IconSource";
    PropertyName[PropertyName["GroupName"] = 101] = "GroupName";
    PropertyName[PropertyName["CanUserSort"] = 102] = "CanUserSort";
    PropertyName[PropertyName["CanUserFilter"] = 103] = "CanUserFilter";
    PropertyName[PropertyName["Columns"] = 104] = "Columns";
    PropertyName[PropertyName["Rows"] = 105] = "Rows";
    PropertyName[PropertyName["ColumnDefinitions"] = 106] = "ColumnDefinitions";
    PropertyName[PropertyName["RowDefinitions"] = 107] = "RowDefinitions";
    PropertyName[PropertyName["CellPadding"] = 108] = "CellPadding";
    PropertyName[PropertyName["RowSpan"] = 109] = "RowSpan";
    PropertyName[PropertyName["ColumnSpan"] = 110] = "ColumnSpan";
    PropertyName[PropertyName["IsHeaderVisible"] = 111] = "IsHeaderVisible";
    PropertyName[PropertyName["IsSortable"] = 112] = "IsSortable";
    PropertyName[PropertyName["SortDirection"] = 113] = "SortDirection";
    PropertyName[PropertyName["GroupHeaderTemplate"] = 114] = "GroupHeaderTemplate";
    PropertyName[PropertyName["GroupFooterTemplate"] = 115] = "GroupFooterTemplate";
    PropertyName[PropertyName["GroupStyle"] = 116] = "GroupStyle";
    PropertyName[PropertyName["IsExpanded"] = 117] = "IsExpanded";
    PropertyName[PropertyName["ItemsPanel"] = 118] = "ItemsPanel";
    PropertyName[PropertyName["AlternatingRowColor"] = 119] = "AlternatingRowColor";
    PropertyName[PropertyName["ItemContainerStyle"] = 120] = "ItemContainerStyle";
    PropertyName[PropertyName["ItemContainerStyleSelector"] = 121] = "ItemContainerStyleSelector";
    PropertyName[PropertyName["ItemTemplateSelector"] = 122] = "ItemTemplateSelector";
    PropertyName[PropertyName["GroupHeaderStyle"] = 123] = "GroupHeaderStyle";
    PropertyName[PropertyName["GroupFooterStyle"] = 124] = "GroupFooterStyle";
    PropertyName[PropertyName["GroupFooterTemplateSelector"] = 125] = "GroupFooterTemplateSelector";
    PropertyName[PropertyName["ColumnHeaderStyle"] = 126] = "ColumnHeaderStyle";
    PropertyName[PropertyName["ColumnHeaderTemplateSelector"] = 127] = "ColumnHeaderTemplateSelector";
    PropertyName[PropertyName["FrozenColumnCount"] = 128] = "FrozenColumnCount";
    PropertyName[PropertyName["AutoGenerateColumns"] = 129] = "AutoGenerateColumns";
    PropertyName[PropertyName["ColumnsSource"] = 130] = "ColumnsSource";
    PropertyName[PropertyName["ColumnsWidth"] = 131] = "ColumnsWidth";
    PropertyName[PropertyName["SortMemberPath"] = 132] = "SortMemberPath";
    PropertyName[PropertyName["RowHeaderTemplate"] = 133] = "RowHeaderTemplate";
    PropertyName[PropertyName["RowHeaderStyle"] = 134] = "RowHeaderStyle";
    PropertyName[PropertyName["RowHeaderTemplateSelector"] = 135] = "RowHeaderTemplateSelector";
    PropertyName[PropertyName["AlternationCount"] = 136] = "AlternationCount";
    PropertyName[PropertyName["IsAlternatingRowColorEnabled"] = 137] = "IsAlternatingRowColorEnabled";
    PropertyName[PropertyName["IsItemClickEnabled"] = 138] = "IsItemClickEnabled";
    PropertyName[PropertyName["HorizontalScrollBarVisibility"] = 139] = "HorizontalScrollBarVisibility";
    PropertyName[PropertyName["VerticalScrollBarVisibility"] = 140] = "VerticalScrollBarVisibility";
    PropertyName[PropertyName["SelectionMode"] = 141] = "SelectionMode";
    PropertyName[PropertyName["SelectedItems"] = 142] = "SelectedItems";
    PropertyName[PropertyName["SelectedItem"] = 143] = "SelectedItem";
    PropertyName[PropertyName["ItemClick"] = 144] = "ItemClick";
    PropertyName[PropertyName["IsSticky"] = 145] = "IsSticky";
    PropertyName[PropertyName["IsPullToRefreshEnabled"] = 146] = "IsPullToRefreshEnabled";
    PropertyName[PropertyName["RefreshCommand"] = 147] = "RefreshCommand";
    PropertyName[PropertyName["IsPullToRefreshRefreshing"] = 148] = "IsPullToRefreshRefreshing";
    PropertyName[PropertyName["IsPullToRefreshRefreshingChanged"] = 149] = "IsPullToRefreshRefreshingChanged";
    PropertyName[PropertyName["IsLoadMoreEnabled"] = 150] = "IsLoadMoreEnabled";
    PropertyName[PropertyName["LoadMoreCommand"] = 151] = "LoadMoreCommand";
    PropertyName[PropertyName["IsLoadMoreLoading"] = 152] = "IsLoadMoreLoading";
    PropertyName[PropertyName["IsLoadMoreLoadingChanged"] = 153] = "IsLoadMoreLoadingChanged";
    PropertyName[PropertyName["ItemTapped"] = 154] = "ItemTapped";
    PropertyName[PropertyName["ItemSelected"] = 155] = "ItemSelected";
    PropertyName[PropertyName["ItemDoubleTapped"] = 156] = "ItemDoubleTapped";
    PropertyName[PropertyName["SwipeLeftCommand"] = 157] = "SwipeLeftCommand";
    PropertyName[PropertyName["SwipeRightCommand"] = 158] = "SwipeRightCommand";
    PropertyName[PropertyName["SwipeUpCommand"] = 159] = "SwipeUpCommand";
    PropertyName[PropertyName["SwipeDownCommand"] = 160] = "SwipeDownCommand";
    PropertyName[PropertyName["SwipeItems"] = 161] = "SwipeItems";
    PropertyName[PropertyName["IsRefreshing"] = 162] = "IsRefreshing";
    PropertyName[PropertyName["RefreshCommandParameter"] = 163] = "RefreshCommandParameter";
    PropertyName[PropertyName["RowHeight"] = 164] = "RowHeight";
    PropertyName[PropertyName["AutoGenerateItem"] = 165] = "AutoGenerateItem";
    PropertyName[PropertyName["ScrollMode"] = 166] = "ScrollMode";
    PropertyName[PropertyName["ScrollBarVisibility"] = 167] = "ScrollBarVisibility";
    PropertyName[PropertyName["ScrollTo"] = 168] = "ScrollTo";
    PropertyName[PropertyName["ScrollToRow"] = 169] = "ScrollToRow";
    PropertyName[PropertyName["ScrollToRowIndex"] = 170] = "ScrollToRowIndex";
    PropertyName[PropertyName["ScrollToColumn"] = 171] = "ScrollToColumn";
    PropertyName[PropertyName["ScrollToColumnIndex"] = 172] = "ScrollToColumnIndex";
    PropertyName[PropertyName["HeaderTemplateSelector"] = 173] = "HeaderTemplateSelector";
    PropertyName[PropertyName["FooterTemplateSelector"] = 174] = "FooterTemplateSelector";
    PropertyName[PropertyName["GroupHeaderTemplateSelector"] = 175] = "GroupHeaderTemplateSelector";
    PropertyName[PropertyName["RowHeightResizer"] = 176] = "RowHeightResizer";
    PropertyName[PropertyName["OnPullStarted"] = 177] = "OnPullStarted";
    PropertyName[PropertyName["OnPullDelta"] = 178] = "OnPullDelta";
    PropertyName[PropertyName["OnPullCompleted"] = 179] = "OnPullCompleted";
    PropertyName[PropertyName["OnPullContent"] = 180] = "OnPullContent";
    PropertyName[PropertyName["OnReleaseContent"] = 181] = "OnReleaseContent";
    PropertyName[PropertyName["OnSwipeStarted"] = 182] = "OnSwipeStarted";
    PropertyName[PropertyName["OnSwipeDelta"] = 183] = "OnSwipeDelta";
    PropertyName[PropertyName["OnSwipeCompleted"] = 184] = "OnSwipeCompleted";
    PropertyName[PropertyName["OnRevealing"] = 185] = "OnRevealing";
    PropertyName[PropertyName["OnSwipeEnded"] = 186] = "OnSwipeEnded";
    PropertyName[PropertyName["OnRevealed"] = 187] = "OnRevealed";
    PropertyName[PropertyName["OnExecute"] = 188] = "OnExecute";
    PropertyName[PropertyName["OnHiding"] = 189] = "OnHiding";
    PropertyName[PropertyName["OnHidden"] = 190] = "OnHidden";
    PropertyName[PropertyName["OnStateChange"] = 191] = "OnStateChange";
    PropertyName[PropertyName["AnimationDuration"] = 192] = "AnimationDuration";
    PropertyName[PropertyName["MaxTopOffset"] = 193] = "MaxTopOffset";
    PropertyName[PropertyName["MinTopOffset"] = 194] = "MinTopOffset";
    PropertyName[PropertyName["MinTopRevealed"] = 195] = "MinTopRevealed";
    PropertyName[PropertyName["MaxTopRevealed"] = 196] = "MaxTopRevealed";
    PropertyName[PropertyName["ContentTemplate"] = 197] = "ContentTemplate";
    PropertyName[PropertyName["ContentTemplateSelector"] = 198] = "ContentTemplateSelector";
    PropertyName[PropertyName["Rotation"] = 199] = "Rotation";
    PropertyName[PropertyName["Scale"] = 200] = "Scale";
    PropertyName[PropertyName["TranslationX"] = 201] = "TranslationX";
    PropertyName[PropertyName["TranslationY"] = 202] = "TranslationY";
    PropertyName[PropertyName["LayoutX"] = 203] = "LayoutX";
    PropertyName[PropertyName["LayoutY"] = 204] = "LayoutY";
    PropertyName[PropertyName["WidthRequest"] = 205] = "WidthRequest";
    PropertyName[PropertyName["HeightRequest"] = 206] = "HeightRequest";
    PropertyName[PropertyName["MinimumWidthRequest"] = 207] = "MinimumWidthRequest";
    PropertyName[PropertyName["MinimumHeightRequest"] = 208] = "MinimumHeightRequest";
    PropertyName[PropertyName["AnchorX"] = 209] = "AnchorX";
    PropertyName[PropertyName["AnchorY"] = 210] = "AnchorY";
    PropertyName[PropertyName["RotationX"] = 211] = "RotationX";
    PropertyName[PropertyName["RotationY"] = 212] = "RotationY";
    PropertyName[PropertyName["ScaleX"] = 213] = "ScaleX";
    PropertyName[PropertyName["ScaleY"] = 214] = "ScaleY";
    PropertyName[PropertyName["PlatformConfiguration"] = 215] = "PlatformConfiguration";
    PropertyName[PropertyName["GestureRecognizers"] = 216] = "GestureRecognizers";
    PropertyName[PropertyName["Behavior"] = 217] = "Behavior";
    PropertyName[PropertyName["Triggers"] = 218] = "Triggers";
    PropertyName[PropertyName["ClassId"] = 219] = "ClassId";
    PropertyName[PropertyName["StyleId"] = 220] = "StyleId";
    PropertyName[PropertyName["FlowDirection"] = 221] = "FlowDirection";
    PropertyName[PropertyName["InputTransparent"] = 222] = "InputTransparent";
    PropertyName[PropertyName["IsVisibleBackgroundColor"] = 223] = "IsVisibleBackgroundColor";
    PropertyName[PropertyName["IsVisibleBorderColor"] = 224] = "IsVisibleBorderColor";
    PropertyName[PropertyName["IsVisibleCornerRadius"] = 225] = "IsVisibleCornerRadius";
    PropertyName[PropertyName["IsVisibleElevation"] = 226] = "IsVisibleElevation";
    PropertyName[PropertyName["IsVisiblePadding"] = 227] = "IsVisiblePadding";
    PropertyName[PropertyName["IsVisiblePlaceholder"] = 228] = "IsVisiblePlaceholder";
    PropertyName[PropertyName["IsVisibleSeparatorColor"] = 229] = "IsVisibleSeparatorColor";
    PropertyName[PropertyName["IsVisibleSeparatorWidth"] = 230] = "IsVisibleSeparatorWidth";
    PropertyName[PropertyName["IsVisibleShadow"] = 231] = "IsVisibleShadow";
    PropertyName[PropertyName["IsVisibleStroke"] = 232] = "IsVisibleStroke";
    PropertyName[PropertyName["IsVisibleTextColor"] = 233] = "IsVisibleTextColor";
    PropertyName[PropertyName["IsVisibleTextDecorations"] = 234] = "IsVisibleTextDecorations";
    PropertyName[PropertyName["IsVisibleTranslationX"] = 235] = "IsVisibleTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationY"] = 236] = "IsVisibleTranslationY";
    PropertyName[PropertyName["IsVisibleRotation"] = 237] = "IsVisibleRotation";
    PropertyName[PropertyName["IsVisibleScale"] = 238] = "IsVisibleScale";
    PropertyName[PropertyName["IsVisibleHeightRequest"] = 239] = "IsVisibleHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequest"] = 240] = "IsVisibleWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequest"] = 241] = "IsVisibleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequest"] = 242] = "IsVisibleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraints"] = 243] = "IsVisiblePaddingConstraints";
    PropertyName[PropertyName["IsVisibleRowSpacing"] = 244] = "IsVisibleRowSpacing";
    PropertyName[PropertyName["IsVisibleColumnSpacing"] = 245] = "IsVisibleColumnSpacing";
    PropertyName[PropertyName["IsVisibleBackgroundColorOpacity"] = 246] = "IsVisibleBackgroundColorOpacity";
    PropertyName[PropertyName["IsVisibleBorderColorOpacity"] = 247] = "IsVisibleBorderColorOpacity";
    PropertyName[PropertyName["IsVisibleSeparatorColorOpacity"] = 248] = "IsVisibleSeparatorColorOpacity";
    PropertyName[PropertyName["IsVisibleShadowOpacity"] = 249] = "IsVisibleShadowOpacity";
    PropertyName[PropertyName["IsVisibleTextColorOpacity"] = 250] = "IsVisibleTextColorOpacity";
    PropertyName[PropertyName["IsVisibleTranslationXOpacity"] = 251] = "IsVisibleTranslationXOpacity";
    PropertyName[PropertyName["IsVisibleTranslationYOpacity"] = 252] = "IsVisibleTranslationYOpacity";
    PropertyName[PropertyName["IsVisibleRotationOpacity"] = 253] = "IsVisibleRotationOpacity";
    PropertyName[PropertyName["IsVisibleScaleOpacity"] = 254] = "IsVisibleScaleOpacity";
    PropertyName[PropertyName["IsVisibleHeightRequestOpacity"] = 255] = "IsVisibleHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleWidthRequestOpacity"] = 256] = "IsVisibleWidthRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestOpacity"] = 257] = "IsVisibleMinimumHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestOpacity"] = 258] = "IsVisibleMinimumWidthRequestOpacity";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsOpacity"] = 259] = "IsVisiblePaddingConstraintsOpacity";
    PropertyName[PropertyName["IsVisibleRowSpacingOpacity"] = 260] = "IsVisibleRowSpacingOpacity";
    PropertyName[PropertyName["IsVisibleColumnSpacingOpacity"] = 261] = "IsVisibleColumnSpacingOpacity";
    PropertyName[PropertyName["IsEditableLayout"] = 262] = "IsEditableLayout";
    PropertyName[PropertyName["IsEnabledOpacity"] = 263] = "IsEnabledOpacity";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotation"] = 264] = "IsVisibleBackgroundColorRotation";
    PropertyName[PropertyName["IsVisibleBorderColorRotation"] = 265] = "IsVisibleBorderColorRotation";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotation"] = 266] = "IsVisibleCornerRadiusRotation";
    PropertyName[PropertyName["IsVisibleElevationRotation"] = 267] = "IsVisibleElevationRotation";
    PropertyName[PropertyName["IsVisiblePaddingRotation"] = 268] = "IsVisiblePaddingRotation";
    PropertyName[PropertyName["IsVisiblePlaceholderRotation"] = 269] = "IsVisiblePlaceholderRotation";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotation"] = 270] = "IsVisibleSeparatorColorRotation";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotation"] = 271] = "IsVisibleSeparatorWidthRotation";
    PropertyName[PropertyName["IsVisibleShadowRotation"] = 272] = "IsVisibleShadowRotation";
    PropertyName[PropertyName["IsVisibleStrokeRotation"] = 273] = "IsVisibleStrokeRotation";
    PropertyName[PropertyName["IsVisibleTextColorRotation"] = 274] = "IsVisibleTextColorRotation";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotation"] = 275] = "IsVisibleTextDecorationsRotation";
    PropertyName[PropertyName["IsVisibleTranslationXRotation"] = 276] = "IsVisibleTranslationXRotation";
    PropertyName[PropertyName["IsVisibleTranslationYRotation"] = 277] = "IsVisibleTranslationYRotation";
    PropertyName[PropertyName["IsVisibleRotationRotation"] = 278] = "IsVisibleRotationRotation";
    PropertyName[PropertyName["IsVisibleScaleRotation"] = 279] = "IsVisibleScaleRotation";
    PropertyName[PropertyName["IsVisibleHeightRequestRotation"] = 280] = "IsVisibleHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleWidthRequestRotation"] = 281] = "IsVisibleWidthRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotation"] = 282] = "IsVisibleMinimumHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotation"] = 283] = "IsVisibleMinimumWidthRequestRotation";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotation"] = 284] = "IsVisiblePaddingConstraintsRotation";
    PropertyName[PropertyName["IsVisibleRowSpacingRotation"] = 285] = "IsVisibleRowSpacingRotation";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotation"] = 286] = "IsVisibleColumnSpacingRotation";
    PropertyName[PropertyName["IsVisibleBackgroundColorScale"] = 287] = "IsVisibleBackgroundColorScale";
    PropertyName[PropertyName["IsVisibleBorderColorScale"] = 288] = "IsVisibleBorderColorScale";
    PropertyName[PropertyName["IsVisibleCornerRadiusScale"] = 289] = "IsVisibleCornerRadiusScale";
    PropertyName[PropertyName["IsVisibleElevationScale"] = 290] = "IsVisibleElevationScale";
    PropertyName[PropertyName["IsVisiblePaddingScale"] = 291] = "IsVisiblePaddingScale";
    PropertyName[PropertyName["IsVisiblePlaceholderScale"] = 292] = "IsVisiblePlaceholderScale";
    PropertyName[PropertyName["IsVisibleSeparatorColorScale"] = 293] = "IsVisibleSeparatorColorScale";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScale"] = 294] = "IsVisibleSeparatorWidthScale";
    PropertyName[PropertyName["IsVisibleShadowScale"] = 295] = "IsVisibleShadowScale";
    PropertyName[PropertyName["IsVisibleStrokeScale"] = 296] = "IsVisibleStrokeScale";
    PropertyName[PropertyName["IsVisibleTextColorScale"] = 297] = "IsVisibleTextColorScale";
    PropertyName[PropertyName["IsVisibleTextDecorationsScale"] = 298] = "IsVisibleTextDecorationsScale";
    PropertyName[PropertyName["IsVisibleTranslationXScale"] = 299] = "IsVisibleTranslationXScale";
    PropertyName[PropertyName["IsVisibleTranslationYScale"] = 300] = "IsVisibleTranslationYScale";
    PropertyName[PropertyName["IsVisibleRotationScale"] = 301] = "IsVisibleRotationScale";
    PropertyName[PropertyName["IsVisibleScaleScale"] = 302] = "IsVisibleScaleScale";
    PropertyName[PropertyName["IsVisibleHeightRequestScale"] = 303] = "IsVisibleHeightRequestScale";
    PropertyName[PropertyName["IsVisibleWidthRequestScale"] = 304] = "IsVisibleWidthRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScale"] = 305] = "IsVisibleMinimumHeightRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScale"] = 306] = "IsVisibleMinimumWidthRequestScale";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScale"] = 307] = "IsVisiblePaddingConstraintsScale";
    PropertyName[PropertyName["IsVisibleRowSpacingScale"] = 308] = "IsVisibleRowSpacingScale";
    PropertyName[PropertyName["IsVisibleColumnSpacingScale"] = 309] = "IsVisibleColumnSpacingScale";
    PropertyName[PropertyName["IsEnabledScale"] = 310] = "IsEnabledScale";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleX"] = 311] = "IsVisibleBackgroundColorScaleX";
    PropertyName[PropertyName["IsVisibleBorderColorScaleX"] = 312] = "IsVisibleBorderColorScaleX";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleX"] = 313] = "IsVisibleCornerRadiusScaleX";
    PropertyName[PropertyName["IsVisibleElevationScaleX"] = 314] = "IsVisibleElevationScaleX";
    PropertyName[PropertyName["IsVisiblePaddingScaleX"] = 315] = "IsVisiblePaddingScaleX";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleX"] = 316] = "IsVisiblePlaceholderScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleX"] = 317] = "IsVisibleSeparatorColorScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleX"] = 318] = "IsVisibleSeparatorWidthScaleX";
    PropertyName[PropertyName["IsVisibleShadowScaleX"] = 319] = "IsVisibleShadowScaleX";
    PropertyName[PropertyName["IsVisibleStrokeScaleX"] = 320] = "IsVisibleStrokeScaleX";
    PropertyName[PropertyName["IsVisibleTextColorScaleX"] = 321] = "IsVisibleTextColorScaleX";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleX"] = 322] = "IsVisibleTextDecorationsScaleX";
    PropertyName[PropertyName["IsVisibleTranslationXScaleX"] = 323] = "IsVisibleTranslationXScaleX";
    PropertyName[PropertyName["IsVisibleTranslationYScaleX"] = 324] = "IsVisibleTranslationYScaleX";
    PropertyName[PropertyName["IsVisibleRotationScaleX"] = 325] = "IsVisibleRotationScaleX";
    PropertyName[PropertyName["IsVisibleScaleScaleX"] = 326] = "IsVisibleScaleScaleX";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleX"] = 327] = "IsVisibleHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleX"] = 328] = "IsVisibleWidthRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleX"] = 329] = "IsVisibleMinimumHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleX"] = 330] = "IsVisibleMinimumWidthRequestScaleX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleX"] = 331] = "IsVisiblePaddingConstraintsScaleX";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleX"] = 332] = "IsVisibleRowSpacingScaleX";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleX"] = 333] = "IsVisibleColumnSpacingScaleX";
    PropertyName[PropertyName["IsEnabledScaleX"] = 334] = "IsEnabledScaleX";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleY"] = 335] = "IsVisibleBackgroundColorScaleY";
    PropertyName[PropertyName["IsVisibleBorderColorScaleY"] = 336] = "IsVisibleBorderColorScaleY";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleY"] = 337] = "IsVisibleCornerRadiusScaleY";
    PropertyName[PropertyName["IsVisibleElevationScaleY"] = 338] = "IsVisibleElevationScaleY";
    PropertyName[PropertyName["IsVisiblePaddingScaleY"] = 339] = "IsVisiblePaddingScaleY";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleY"] = 340] = "IsVisiblePlaceholderScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleY"] = 341] = "IsVisibleSeparatorColorScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleY"] = 342] = "IsVisibleSeparatorWidthScaleY";
    PropertyName[PropertyName["IsVisibleShadowScaleY"] = 343] = "IsVisibleShadowScaleY";
    PropertyName[PropertyName["IsVisibleStrokeScaleY"] = 344] = "IsVisibleStrokeScaleY";
    PropertyName[PropertyName["IsVisibleTextColorScaleY"] = 345] = "IsVisibleTextColorScaleY";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleY"] = 346] = "IsVisibleTextDecorationsScaleY";
    PropertyName[PropertyName["IsVisibleTranslationXScaleY"] = 347] = "IsVisibleTranslationXScaleY";
    PropertyName[PropertyName["IsVisibleTranslationYScaleY"] = 348] = "IsVisibleTranslationYScaleY";
    PropertyName[PropertyName["IsVisibleRotationScaleY"] = 349] = "IsVisibleRotationScaleY";
    PropertyName[PropertyName["IsVisibleScaleScaleY"] = 350] = "IsVisibleScaleScaleY";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleY"] = 351] = "IsVisibleHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleY"] = 352] = "IsVisibleWidthRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleY"] = 353] = "IsVisibleMinimumHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleY"] = 354] = "IsVisibleMinimumWidthRequestScaleY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleY"] = 355] = "IsVisiblePaddingConstraintsScaleY";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleY"] = 356] = "IsVisibleRowSpacingScaleY";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleY"] = 357] = "IsVisibleColumnSpacingScaleY";
    PropertyName[PropertyName["IsEnabledScaleY"] = 358] = "IsEnabledScaleY";
    PropertyName[PropertyName["IsVisibleBackgroundColorTranslationX"] = 359] = "IsVisibleBackgroundColorTranslationX";
    PropertyName[PropertyName["IsVisibleBorderColorTranslationX"] = 360] = "IsVisibleBorderColorTranslationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusTranslationX"] = 361] = "IsVisibleCornerRadiusTranslationX";
    PropertyName[PropertyName["IsVisibleElevationTranslationX"] = 362] = "IsVisibleElevationTranslationX";
    PropertyName[PropertyName["IsVisiblePaddingTranslationX"] = 363] = "IsVisiblePaddingTranslationX";
    PropertyName[PropertyName["IsVisiblePlaceholderTranslationX"] = 364] = "IsVisiblePlaceholderTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorTranslationX"] = 365] = "IsVisibleSeparatorColorTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthTranslationX"] = 366] = "IsVisibleSeparatorWidthTranslationX";
    PropertyName[PropertyName["IsVisibleShadowTranslationX"] = 367] = "IsVisibleShadowTranslationX";
    PropertyName[PropertyName["IsVisibleStrokeTranslationX"] = 368] = "IsVisibleStrokeTranslationX";
    PropertyName[PropertyName["IsVisibleTextColorTranslationX"] = 369] = "IsVisibleTextColorTranslationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsTranslationX"] = 370] = "IsVisibleTextDecorationsTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationXTranslationX"] = 371] = "IsVisibleTranslationXTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationYTranslationX"] = 372] = "IsVisibleTranslationYTranslationX";
    PropertyName[PropertyName["IsVisibleRotationTranslationX"] = 373] = "IsVisibleRotationTranslationX";
    PropertyName[PropertyName["IsVisibleScaleTranslationX"] = 374] = "IsVisibleScaleTranslationX";
    PropertyName[PropertyName["IsVisibleHeightRequestTranslationX"] = 375] = "IsVisibleHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleWidthRequestTranslationX"] = 376] = "IsVisibleWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestTranslationX"] = 377] = "IsVisibleMinimumHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestTranslationX"] = 378] = "IsVisibleMinimumWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsTranslationX"] = 379] = "IsVisiblePaddingConstraintsTranslationX";
    PropertyName[PropertyName["IsVisibleRowSpacingTranslationX"] = 380] = "IsVisibleRowSpacingTranslationX";
    PropertyName[PropertyName["IsVisibleColumnSpacingTranslationX"] = 381] = "IsVisibleColumnSpacingTranslationX";
    PropertyName[PropertyName["IsEnabledTranslationX"] = 382] = "IsEnabledTranslationX";
    PropertyName[PropertyName["IsVisibleBackgroundColorTranslationY"] = 383] = "IsVisibleBackgroundColorTranslationY";
    PropertyName[PropertyName["IsVisibleBorderColorTranslationY"] = 384] = "IsVisibleBorderColorTranslationY";
    PropertyName[PropertyName["IsVisibleCornerRadiusTranslationY"] = 385] = "IsVisibleCornerRadiusTranslationY";
    PropertyName[PropertyName["IsVisibleElevationTranslationY"] = 386] = "IsVisibleElevationTranslationY";
    PropertyName[PropertyName["IsVisiblePaddingTranslationY"] = 387] = "IsVisiblePaddingTranslationY";
    PropertyName[PropertyName["IsVisiblePlaceholderTranslationY"] = 388] = "IsVisiblePlaceholderTranslationY";
    PropertyName[PropertyName["IsVisibleSeparatorColorTranslationY"] = 389] = "IsVisibleSeparatorColorTranslationY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthTranslationY"] = 390] = "IsVisibleSeparatorWidthTranslationY";
    PropertyName[PropertyName["IsVisibleShadowTranslationY"] = 391] = "IsVisibleShadowTranslationY";
    PropertyName[PropertyName["IsVisibleStrokeTranslationY"] = 392] = "IsVisibleStrokeTranslationY";
    PropertyName[PropertyName["IsVisibleTextColorTranslationY"] = 393] = "IsVisibleTextColorTranslationY";
    PropertyName[PropertyName["IsVisibleTextDecorationsTranslationY"] = 394] = "IsVisibleTextDecorationsTranslationY";
    PropertyName[PropertyName["IsVisibleTranslationXTranslationY"] = 395] = "IsVisibleTranslationXTranslationY";
    PropertyName[PropertyName["IsVisibleTranslationYTranslationY"] = 396] = "IsVisibleTranslationYTranslationY";
    PropertyName[PropertyName["IsVisibleRotationTranslationY"] = 397] = "IsVisibleRotationTranslationY";
    PropertyName[PropertyName["IsVisibleScaleTranslationY"] = 398] = "IsVisibleScaleTranslationY";
    PropertyName[PropertyName["IsVisibleHeightRequestTranslationY"] = 399] = "IsVisibleHeightRequestTranslationY";
    PropertyName[PropertyName["IsVisibleWidthRequestTranslationY"] = 400] = "IsVisibleWidthRequestTranslationY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestTranslationY"] = 401] = "IsVisibleMinimumHeightRequestTranslationY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestTranslationY"] = 402] = "IsVisibleMinimumWidthRequestTranslationY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsTranslationY"] = 403] = "IsVisiblePaddingConstraintsTranslationY";
    PropertyName[PropertyName["IsVisibleRowSpacingTranslationY"] = 404] = "IsVisibleRowSpacingTranslationY";
    PropertyName[PropertyName["IsVisibleColumnSpacingTranslationY"] = 405] = "IsVisibleColumnSpacingTranslationY";
    PropertyName[PropertyName["IsEnabledTranslationY"] = 406] = "IsEnabledTranslationY";
    PropertyName[PropertyName["IsVisibleBackgroundColorLayoutX"] = 407] = "IsVisibleBackgroundColorLayoutX";
    PropertyName[PropertyName["IsVisibleBorderColorLayoutX"] = 408] = "IsVisibleBorderColorLayoutX";
    PropertyName[PropertyName["IsVisibleCornerRadiusLayoutX"] = 409] = "IsVisibleCornerRadiusLayoutX";
    PropertyName[PropertyName["IsVisibleElevationLayoutX"] = 410] = "IsVisibleElevationLayoutX";
    PropertyName[PropertyName["IsVisiblePaddingLayoutX"] = 411] = "IsVisiblePaddingLayoutX";
    PropertyName[PropertyName["IsVisiblePlaceholderLayoutX"] = 412] = "IsVisiblePlaceholderLayoutX";
    PropertyName[PropertyName["IsVisibleSeparatorColorLayoutX"] = 413] = "IsVisibleSeparatorColorLayoutX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthLayoutX"] = 414] = "IsVisibleSeparatorWidthLayoutX";
    PropertyName[PropertyName["IsVisibleShadowLayoutX"] = 415] = "IsVisibleShadowLayoutX";
    PropertyName[PropertyName["IsVisibleStrokeLayoutX"] = 416] = "IsVisibleStrokeLayoutX";
    PropertyName[PropertyName["IsVisibleTextColorLayoutX"] = 417] = "IsVisibleTextColorLayoutX";
    PropertyName[PropertyName["IsVisibleTextDecorationsLayoutX"] = 418] = "IsVisibleTextDecorationsLayoutX";
    PropertyName[PropertyName["IsVisibleTranslationXLayoutX"] = 419] = "IsVisibleTranslationXLayoutX";
    PropertyName[PropertyName["IsVisibleTranslationYLayoutX"] = 420] = "IsVisibleTranslationYLayoutX";
    PropertyName[PropertyName["IsVisibleRotationLayoutX"] = 421] = "IsVisibleRotationLayoutX";
    PropertyName[PropertyName["IsVisibleScaleLayoutX"] = 422] = "IsVisibleScaleLayoutX";
    PropertyName[PropertyName["IsVisibleHeightRequestLayoutX"] = 423] = "IsVisibleHeightRequestLayoutX";
    PropertyName[PropertyName["IsVisibleWidthRequestLayoutX"] = 424] = "IsVisibleWidthRequestLayoutX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestLayoutX"] = 425] = "IsVisibleMinimumHeightRequestLayoutX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestLayoutX"] = 426] = "IsVisibleMinimumWidthRequestLayoutX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsLayoutX"] = 427] = "IsVisiblePaddingConstraintsLayoutX";
    PropertyName[PropertyName["IsVisibleRowSpacingLayoutX"] = 428] = "IsVisibleRowSpacingLayoutX";
    PropertyName[PropertyName["IsVisibleColumnSpacingLayoutX"] = 429] = "IsVisibleColumnSpacingLayoutX";
    PropertyName[PropertyName["IsEnabledLayoutX"] = 430] = "IsEnabledLayoutX";
    PropertyName[PropertyName["IsVisibleBackgroundColorLayoutY"] = 431] = "IsVisibleBackgroundColorLayoutY";
    PropertyName[PropertyName["IsVisibleBorderColorLayoutY"] = 432] = "IsVisibleBorderColorLayoutY";
    PropertyName[PropertyName["IsVisibleCornerRadiusLayoutY"] = 433] = "IsVisibleCornerRadiusLayoutY";
    PropertyName[PropertyName["IsVisibleElevationLayoutY"] = 434] = "IsVisibleElevationLayoutY";
    PropertyName[PropertyName["IsVisiblePaddingLayoutY"] = 435] = "IsVisiblePaddingLayoutY";
    PropertyName[PropertyName["IsVisiblePlaceholderLayoutY"] = 436] = "IsVisiblePlaceholderLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorColorLayoutY"] = 437] = "IsVisibleSeparatorColorLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthLayoutY"] = 438] = "IsVisibleSeparatorWidthLayoutY";
    PropertyName[PropertyName["IsVisibleShadowLayoutY"] = 439] = "IsVisibleShadowLayoutY";
    PropertyName[PropertyName["IsVisibleStrokeLayoutY"] = 440] = "IsVisibleStrokeLayoutY";
    PropertyName[PropertyName["IsVisibleTextColorLayoutY"] = 441] = "IsVisibleTextColorLayoutY";
    PropertyName[PropertyName["IsVisibleTextDecorationsLayoutY"] = 442] = "IsVisibleTextDecorationsLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationXLayoutY"] = 443] = "IsVisibleTranslationXLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationYLayoutY"] = 444] = "IsVisibleTranslationYLayoutY";
    PropertyName[PropertyName["IsVisibleRotationLayoutY"] = 445] = "IsVisibleRotationLayoutY";
    PropertyName[PropertyName["IsVisibleScaleLayoutY"] = 446] = "IsVisibleScaleLayoutY";
    PropertyName[PropertyName["IsVisibleHeightRequestLayoutY"] = 447] = "IsVisibleHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleWidthRequestLayoutY"] = 448] = "IsVisibleWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestLayoutY"] = 449] = "IsVisibleMinimumHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestLayoutY"] = 450] = "IsVisibleMinimumWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsLayoutY"] = 451] = "IsVisiblePaddingConstraintsLayoutY";
    PropertyName[PropertyName["IsVisibleRowSpacingLayoutY"] = 452] = "IsVisibleRowSpacingLayoutY";
    PropertyName[PropertyName["IsVisibleColumnSpacingLayoutY"] = 453] = "IsVisibleColumnSpacingLayoutY";
    PropertyName[PropertyName["IsEnabledLayoutY"] = 454] = "IsEnabledLayoutY";
    PropertyName[PropertyName["IsVisibleBackgroundColorWidthRequest"] = 455] = "IsVisibleBackgroundColorWidthRequest";
    PropertyName[PropertyName["IsVisibleBorderColorWidthRequest"] = 456] = "IsVisibleBorderColorWidthRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusWidthRequest"] = 457] = "IsVisibleCornerRadiusWidthRequest";
    PropertyName[PropertyName["IsVisibleElevationWidthRequest"] = 458] = "IsVisibleElevationWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingWidthRequest"] = 459] = "IsVisiblePaddingWidthRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderWidthRequest"] = 460] = "IsVisiblePlaceholderWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorWidthRequest"] = 461] = "IsVisibleSeparatorColorWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthWidthRequest"] = 462] = "IsVisibleSeparatorWidthWidthRequest";
    PropertyName[PropertyName["IsVisibleShadowWidthRequest"] = 463] = "IsVisibleShadowWidthRequest";
    PropertyName[PropertyName["IsVisibleStrokeWidthRequest"] = 464] = "IsVisibleStrokeWidthRequest";
    PropertyName[PropertyName["IsVisibleTextColorWidthRequest"] = 465] = "IsVisibleTextColorWidthRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsWidthRequest"] = 466] = "IsVisibleTextDecorationsWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationXWidthRequest"] = 467] = "IsVisibleTranslationXWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationYWidthRequest"] = 468] = "IsVisibleTranslationYWidthRequest";
    PropertyName[PropertyName["IsVisibleRotationWidthRequest"] = 469] = "IsVisibleRotationWidthRequest";
    PropertyName[PropertyName["IsVisibleScaleWidthRequest"] = 470] = "IsVisibleScaleWidthRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestWidthRequest"] = 471] = "IsVisibleHeightRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestWidthRequest"] = 472] = "IsVisibleWidthRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestWidthRequest"] = 473] = "IsVisibleMinimumHeightRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestWidthRequest"] = 474] = "IsVisibleMinimumWidthRequestWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsWidthRequest"] = 475] = "IsVisiblePaddingConstraintsWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingWidthRequest"] = 476] = "IsVisibleRowSpacingWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingWidthRequest"] = 477] = "IsVisibleColumnSpacingWidthRequest";
    PropertyName[PropertyName["IsEnabledWidthRequest"] = 478] = "IsEnabledWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorHeightRequest"] = 479] = "IsVisibleBackgroundColorHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorHeightRequest"] = 480] = "IsVisibleBorderColorHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusHeightRequest"] = 481] = "IsVisibleCornerRadiusHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationHeightRequest"] = 482] = "IsVisibleElevationHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingHeightRequest"] = 483] = "IsVisiblePaddingHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderHeightRequest"] = 484] = "IsVisiblePlaceholderHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorHeightRequest"] = 485] = "IsVisibleSeparatorColorHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthHeightRequest"] = 486] = "IsVisibleSeparatorWidthHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowHeightRequest"] = 487] = "IsVisibleShadowHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeHeightRequest"] = 488] = "IsVisibleStrokeHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorHeightRequest"] = 489] = "IsVisibleTextColorHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsHeightRequest"] = 490] = "IsVisibleTextDecorationsHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXHeightRequest"] = 491] = "IsVisibleTranslationXHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYHeightRequest"] = 492] = "IsVisibleTranslationYHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationHeightRequest"] = 493] = "IsVisibleRotationHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleHeightRequest"] = 494] = "IsVisibleScaleHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestHeightRequest"] = 495] = "IsVisibleHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestHeightRequest"] = 496] = "IsVisibleWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestHeightRequest"] = 497] = "IsVisibleMinimumHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestHeightRequest"] = 498] = "IsVisibleMinimumWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsHeightRequest"] = 499] = "IsVisiblePaddingConstraintsHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingHeightRequest"] = 500] = "IsVisibleRowSpacingHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingHeightRequest"] = 501] = "IsVisibleColumnSpacingHeightRequest";
    PropertyName[PropertyName["IsEnabledHeightRequest"] = 502] = "IsEnabledHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumHeightRequest"] = 503] = "IsVisibleBackgroundColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumHeightRequest"] = 504] = "IsVisibleBorderColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumHeightRequest"] = 505] = "IsVisibleCornerRadiusMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumHeightRequest"] = 506] = "IsVisibleElevationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumHeightRequest"] = 507] = "IsVisiblePaddingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumHeightRequest"] = 508] = "IsVisiblePlaceholderMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumHeightRequest"] = 509] = "IsVisibleSeparatorColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumHeightRequest"] = 510] = "IsVisibleSeparatorWidthMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumHeightRequest"] = 511] = "IsVisibleShadowMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumHeightRequest"] = 512] = "IsVisibleStrokeMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumHeightRequest"] = 513] = "IsVisibleTextColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumHeightRequest"] = 514] = "IsVisibleTextDecorationsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumHeightRequest"] = 515] = "IsVisibleTranslationXMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumHeightRequest"] = 516] = "IsVisibleTranslationYMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumHeightRequest"] = 517] = "IsVisibleRotationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumHeightRequest"] = 518] = "IsVisibleScaleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumHeightRequest"] = 519] = "IsVisibleHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumHeightRequest"] = 520] = "IsVisibleWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumHeightRequest"] = 521] = "IsVisibleMinimumHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumHeightRequest"] = 522] = "IsVisibleMinimumWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumHeightRequest"] = 523] = "IsVisiblePaddingConstraintsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumHeightRequest"] = 524] = "IsVisibleRowSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumHeightRequest"] = 525] = "IsVisibleColumnSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsEnabledMinimumHeightRequest"] = 526] = "IsEnabledMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumWidthRequest"] = 527] = "IsVisibleBackgroundColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumWidthRequest"] = 528] = "IsVisibleBorderColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumWidthRequest"] = 529] = "IsVisibleCornerRadiusMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumWidthRequest"] = 530] = "IsVisibleElevationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumWidthRequest"] = 531] = "IsVisiblePaddingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumWidthRequest"] = 532] = "IsVisiblePlaceholderMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumWidthRequest"] = 533] = "IsVisibleSeparatorColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumWidthRequest"] = 534] = "IsVisibleSeparatorWidthMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumWidthRequest"] = 535] = "IsVisibleShadowMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumWidthRequest"] = 536] = "IsVisibleStrokeMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumWidthRequest"] = 537] = "IsVisibleTextColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumWidthRequest"] = 538] = "IsVisibleTextDecorationsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumWidthRequest"] = 539] = "IsVisibleTranslationXMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumWidthRequest"] = 540] = "IsVisibleTranslationYMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumWidthRequest"] = 541] = "IsVisibleRotationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumWidthRequest"] = 542] = "IsVisibleScaleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumWidthRequest"] = 543] = "IsVisibleHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumWidthRequest"] = 544] = "IsVisibleWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumWidthRequest"] = 545] = "IsVisibleMinimumHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumWidthRequest"] = 546] = "IsVisibleMinimumWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumWidthRequest"] = 547] = "IsVisiblePaddingConstraintsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumWidthRequest"] = 548] = "IsVisibleRowSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumWidthRequest"] = 549] = "IsVisibleColumnSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsEnabledMinimumWidthRequest"] = 550] = "IsEnabledMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorX"] = 551] = "IsVisibleBackgroundColorAnchorX";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorX"] = 552] = "IsVisibleBorderColorAnchorX";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorX"] = 553] = "IsVisibleCornerRadiusAnchorX";
    PropertyName[PropertyName["IsVisibleElevationAnchorX"] = 554] = "IsVisibleElevationAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingAnchorX"] = 555] = "IsVisiblePaddingAnchorX";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorX"] = 556] = "IsVisiblePlaceholderAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorX"] = 557] = "IsVisibleSeparatorColorAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorX"] = 558] = "IsVisibleSeparatorWidthAnchorX";
    PropertyName[PropertyName["IsVisibleShadowAnchorX"] = 559] = "IsVisibleShadowAnchorX";
    PropertyName[PropertyName["IsVisibleStrokeAnchorX"] = 560] = "IsVisibleStrokeAnchorX";
    PropertyName[PropertyName["IsVisibleTextColorAnchorX"] = 561] = "IsVisibleTextColorAnchorX";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorX"] = 562] = "IsVisibleTextDecorationsAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorX"] = 563] = "IsVisibleTranslationXAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorX"] = 564] = "IsVisibleTranslationYAnchorX";
    PropertyName[PropertyName["IsVisibleRotationAnchorX"] = 565] = "IsVisibleRotationAnchorX";
    PropertyName[PropertyName["IsVisibleScaleAnchorX"] = 566] = "IsVisibleScaleAnchorX";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorX"] = 567] = "IsVisibleHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorX"] = 568] = "IsVisibleWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorX"] = 569] = "IsVisibleMinimumHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorX"] = 570] = "IsVisibleMinimumWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorX"] = 571] = "IsVisiblePaddingConstraintsAnchorX";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorX"] = 572] = "IsVisibleRowSpacingAnchorX";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorX"] = 573] = "IsVisibleColumnSpacingAnchorX";
    PropertyName[PropertyName["IsEnabledAnchorX"] = 574] = "IsEnabledAnchorX";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorY"] = 575] = "IsVisibleBackgroundColorAnchorY";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorY"] = 576] = "IsVisibleBorderColorAnchorY";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorY"] = 577] = "IsVisibleCornerRadiusAnchorY";
    PropertyName[PropertyName["IsVisibleElevationAnchorY"] = 578] = "IsVisibleElevationAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingAnchorY"] = 579] = "IsVisiblePaddingAnchorY";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorY"] = 580] = "IsVisiblePlaceholderAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorY"] = 581] = "IsVisibleSeparatorColorAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorY"] = 582] = "IsVisibleSeparatorWidthAnchorY";
    PropertyName[PropertyName["IsVisibleShadowAnchorY"] = 583] = "IsVisibleShadowAnchorY";
    PropertyName[PropertyName["IsVisibleStrokeAnchorY"] = 584] = "IsVisibleStrokeAnchorY";
    PropertyName[PropertyName["IsVisibleTextColorAnchorY"] = 585] = "IsVisibleTextColorAnchorY";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorY"] = 586] = "IsVisibleTextDecorationsAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorY"] = 587] = "IsVisibleTranslationXAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorY"] = 588] = "IsVisibleTranslationYAnchorY";
    PropertyName[PropertyName["IsVisibleRotationAnchorY"] = 589] = "IsVisibleRotationAnchorY";
    PropertyName[PropertyName["IsVisibleScaleAnchorY"] = 590] = "IsVisibleScaleAnchorY";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorY"] = 591] = "IsVisibleHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorY"] = 592] = "IsVisibleWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorY"] = 593] = "IsVisibleMinimumHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorY"] = 594] = "IsVisibleMinimumWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorY"] = 595] = "IsVisiblePaddingConstraintsAnchorY";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorY"] = 596] = "IsVisibleRowSpacingAnchorY";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorY"] = 597] = "IsVisibleColumnSpacingAnchorY";
    PropertyName[PropertyName["IsEnabledAnchorY"] = 598] = "IsEnabledAnchorY";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationX"] = 599] = "IsVisibleBackgroundColorRotationX";
    PropertyName[PropertyName["IsVisibleBorderColorRotationX"] = 600] = "IsVisibleBorderColorRotationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationX"] = 601] = "IsVisibleCornerRadiusRotationX";
    PropertyName[PropertyName["IsVisibleElevationRotationX"] = 602] = "IsVisibleElevationRotationX";
    PropertyName[PropertyName["IsVisiblePaddingRotationX"] = 603] = "IsVisiblePaddingRotationX";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationX"] = 604] = "IsVisiblePlaceholderRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationX"] = 605] = "IsVisibleSeparatorColorRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationX"] = 606] = "IsVisibleSeparatorWidthRotationX";
    PropertyName[PropertyName["IsVisibleShadowRotationX"] = 607] = "IsVisibleShadowRotationX";
    PropertyName[PropertyName["IsVisibleStrokeRotationX"] = 608] = "IsVisibleStrokeRotationX";
    PropertyName[PropertyName["IsVisibleTextColorRotationX"] = 609] = "IsVisibleTextColorRotationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationX"] = 610] = "IsVisibleTextDecorationsRotationX";
    PropertyName[PropertyName["IsVisibleTranslationXRotationX"] = 611] = "IsVisibleTranslationXRotationX";
    PropertyName[PropertyName["IsVisibleTranslationYRotationX"] = 612] = "IsVisibleTranslationYRotationX";
    PropertyName[PropertyName["IsVisibleRotationRotationX"] = 613] = "IsVisibleRotationRotationX";
    PropertyName[PropertyName["IsVisibleScaleRotationX"] = 614] = "IsVisibleScaleRotationX";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationX"] = 615] = "IsVisibleHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationX"] = 616] = "IsVisibleWidthRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationX"] = 617] = "IsVisibleMinimumHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationX"] = 618] = "IsVisibleMinimumWidthRequestRotationX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationX"] = 619] = "IsVisiblePaddingConstraintsRotationX";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationX"] = 620] = "IsVisibleRowSpacingRotationX";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationX"] = 621] = "IsVisibleColumnSpacingRotationX";
    PropertyName[PropertyName["IsEnabledRotationX"] = 622] = "IsEnabledRotationX";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationY"] = 623] = "IsVisibleBackgroundColorRotationY";
    PropertyName[PropertyName["IsVisibleBorderColorRotationY"] = 624] = "IsVisibleBorderColorRotationY";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationY"] = 625] = "IsVisibleCornerRadiusRotationY";
    PropertyName[PropertyName["IsVisibleElevationRotationY"] = 626] = "IsVisibleElevationRotationY";
    PropertyName[PropertyName["IsVisiblePaddingRotationY"] = 627] = "IsVisiblePaddingRotationY";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationY"] = 628] = "IsVisiblePlaceholderRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationY"] = 629] = "IsVisibleSeparatorColorRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationY"] = 630] = "IsVisibleSeparatorWidthRotationY";
    PropertyName[PropertyName["IsVisibleShadowRotationY"] = 631] = "IsVisibleShadowRotationY";
    PropertyName[PropertyName["IsVisibleStrokeRotationY"] = 632] = "IsVisibleStrokeRotationY";
    PropertyName[PropertyName["IsVisibleTextColorRotationY"] = 633] = "IsVisibleTextColorRotationY";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationY"] = 634] = "IsVisibleTextDecorationsRotationY";
    PropertyName[PropertyName["IsVisibleTranslationXRotationY"] = 635] = "IsVisibleTranslationXRotationY";
    PropertyName[PropertyName["IsVisibleTranslationYRotationY"] = 636] = "IsVisibleTranslationYRotationY";
    PropertyName[PropertyName["IsVisibleRotationRotationY"] = 637] = "IsVisibleRotationRotationY";
    PropertyName[PropertyName["IsVisibleScaleRotationY"] = 638] = "IsVisibleScaleRotationY";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationY"] = 639] = "IsVisibleHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationY"] = 640] = "IsVisibleWidthRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationY"] = 641] = "IsVisibleMinimumHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationY"] = 642] = "IsVisibleMinimumWidthRequestRotationY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationY"] = 643] = "IsVisiblePaddingConstraintsRotationY";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationY"] = 644] = "IsVisibleRowSpacingRotationY";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationY"] = 645] = "IsVisibleColumnSpacingRotationY";
    PropertyName[PropertyName["IsEnabledRotationY"] = 646] = "IsEnabledRotationY";
})(PropertyName || (PropertyName = {}));


/***/ }),

/***/ "./src/XamlParser.ts":
/*!***************************!*\
  !*** ./src/XamlParser.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParseFigma: () => (/* binding */ ParseFigma)
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
/* harmony import */ var _user_defined_types_translation_slider_2_xaml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-defined-types-translation/slider-2-xaml */ "./src/user-defined-types-translation/slider-2-xaml.ts");
/* harmony import */ var _user_defined_types_translation_switch_2_xaml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-defined-types-translation/switch-2-xaml */ "./src/user-defined-types-translation/switch-2-xaml.ts");
/* harmony import */ var _user_defined_types_translation_checkBox_2_xaml__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-defined-types-translation/checkBox-2-xaml */ "./src/user-defined-types-translation/checkBox-2-xaml.ts");
/* harmony import */ var _user_defined_types_translation_button_2_imagebutton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-defined-types-translation/button-2-imagebutton */ "./src/user-defined-types-translation/button-2-imagebutton.ts");


















function ParseFigma(nodes) {
    //console.log('Parsing Nodes: ', nodes);
    let xamlCode = "";
    let rootnode = nodes[0];
    let contentPage = new _xaml_views_classes_xaml_page__WEBPACK_IMPORTED_MODULE_9__.ContentPage(rootnode.parent.node.name);
    let rootView = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.ScrollView, properties: [] };
    let rootLayout = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.VerticalStackLayout, properties: [] };
    xamlCode += contentPage.getStartTag() + `\n${formatStartTag(rootView)}\n` + `\n${formatStartTag(rootLayout)}\n`;
    rootnode.children.reverse().forEach(c => {
        //Traslate the Nested elements to 
        xamlCode += formatNestedElement(checkNodeType(c));
    });
    xamlCode += `\n${formatEndTag(rootLayout)}\n` + `\n${formatEndTag(rootView)}\n` + contentPage.getEndTag();
    return xamlCode;
}
function formatNestedElement(element) {
    let result = '';
    if (element.parent instanceof _xaml_views_classes_xaml_custom_control__WEBPACK_IMPORTED_MODULE_6__.CustomControl) {
        result += element.parent.getStartTag() + element.parent.getEndTag();
    }
    else if (element.parent instanceof _xaml_views_classes_xaml_view__WEBPACK_IMPORTED_MODULE_5__.ContentView) {
        result += element.parent.getStartTag() + /*`\n${nestedComponent}` +*/ element.parent.getEndTag();
    }
    else {
        if (element.parent.name === _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.none) {
            return '';
        }
        if (element.children.length > 0) {
            // Start tag
            result += formatStartTag(element.parent);
            // Iterate over children and recursively call formatNestedElement on each child
            element.children.forEach(c => {
                result += formatNestedElement(c);
            });
            result += formatEndTag(element.parent);
        }
        else {
            result += formatShortTag(element.parent);
        }
    }
    return result;
}
function checkNodeType(nn) {
    //Check if the node has been assigned a custom value
    if (nn.parent.utype !== 'None') {
        return parseUtypeNodes(nn);
    }
    // take the top node
    let node = nn.parent.node;
    // Check the node's type using the 'type' property
    switch (node.type) {
        case 'FRAME':
            if (nn.children.length === 1 && nn.children[0].parent.node.type === 'VECTOR') {
                // Skip the frame and return the vector directly
                return checkNodeType(nn.children[0]);
            }
            else {
                // Create frame element -> becaomes a xaml layout element 
                let frameNode = node;
                let frameElement = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(frameNode);
                frameElement.properties.push(TranslateFillsToFigma(node, false));
                let nestedFrame = { parent: frameElement, children: [] };
                nn.children.forEach(n => nestedFrame.children.push(checkNodeType(n)));
                return nestedFrame;
            }
        case 'GROUP':
            let groupElement = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.none, properties: [] };
            let nestedGroup = { parent: groupElement, children: [] };
            nn.children.forEach(n => nestedGroup.children.push(checkNodeType(n)));
            return nestedGroup;
        case 'TEXT':
            let textNode = node;
            let textElement = (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.TranslateTextElement)(textNode);
            let nestedText = { parent: textElement, children: [] };
            return nestedText;
        case 'ELLIPSE':
            let ellipseNode = node;
            let ellipseElement = (0,_figma_node_translation_shapes_ellipse_2_ellipse__WEBPACK_IMPORTED_MODULE_3__.TranslateEllipseElement)(ellipseNode);
            let nestedElipse = { parent: ellipseElement, children: [] };
            return nestedElipse;
        case 'LINE':
            let lineNode = node;
            let lineElement = (0,_figma_node_translation_shapes_line_2_line__WEBPACK_IMPORTED_MODULE_8__.TranslateLineElement)(lineNode);
            let nestedLine = { parent: lineElement, children: [] };
            return nestedLine;
        case 'RECTANGLE':
            let rectangleNode = node;
            let rectangleElement = (0,_figma_node_translation_shapes_rectangle_2_rectangle__WEBPACK_IMPORTED_MODULE_7__.TranslateRectangleElement)(rectangleNode);
            let nestedRectangle = { parent: rectangleElement, children: [] };
            return nestedRectangle;
        case 'VECTOR':
            let vectorNode = node;
            let vectorElement = (0,_figma_node_translation_shapes_vector_2_icon__WEBPACK_IMPORTED_MODULE_10__.TranslateVectorElement)(vectorNode);
            let nestedVector = { parent: vectorElement, children: [] };
            return nestedVector;
        case 'INSTANCE':
            let instanceNode = node;
            let bindings = []; //TODO: children
            let customControl = new _xaml_views_classes_xaml_custom_control__WEBPACK_IMPORTED_MODULE_6__.CustomControl(instanceNode.name, bindings);
            let nestedControl = { parent: customControl, children: [] };
            return nestedControl;
        case 'COMPONENT':
            let componentNode = node;
            // TODO: Make new resource file / new window
            let contentView = new _xaml_views_classes_xaml_view__WEBPACK_IMPORTED_MODULE_5__.ContentView(node.name);
            let nestedComponent = { parent: contentView, children: [] };
            nn.children.forEach(n => nestedComponent.children.push(checkNodeType(n)));
            return nestedComponent;
        case 'STAR':
        case 'BOOLEAN_OPERATION':
        case 'SLICE':
        default:
            let element = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.none, properties: [] };
            let nested = { parent: element, children: [] };
            return nested;
    }
}
function parseUtypeNodes(nn) {
    let node = nn.parent;
    //console.log('translating : ', node.utype);
    // Check the node's type using the 'type' property
    switch (node.utype) {
        case 'BUTTON':
            if (node.node.type === 'INSTANCE') {
                nn.parent.utype = 'None';
                return checkNodeType(nn);
            }
            let buttonNode = node.node;
            let buttonElement = (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.TranslateButtonElement)(buttonNode);
            buttonElement.properties.push(TranslateFillsToFigma(node.node, false));
            let nestedButton = { parent: buttonElement, children: [] };
            if (nn.children.length > 0) {
                nn.children.forEach(n => {
                    var _a, _b;
                    let childNode = n.parent.node;
                    if (childNode.type === 'TEXT') {
                        let textElement = (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.TranslateTextElement)(childNode);
                        buttonElement.properties.concat(textElement.properties);
                    }
                    else if ((childNode.type === 'VECTOR') || (n.parent.utype === 'IMAGE')) {
                        let vectorElement = (0,_figma_node_translation_shapes_vector_2_icon__WEBPACK_IMPORTED_MODULE_10__.TranslateVectorElement)(childNode);
                        let imageButtonElement = (0,_user_defined_types_translation_button_2_imagebutton__WEBPACK_IMPORTED_MODULE_17__.TranslateImageButtonElement)(buttonNode);
                        imageButtonElement.properties.concat(vectorElement.properties);
                        return { parent: imageButtonElement, children: [] };
                    }
                    else if (childNode.type === 'ELLIPSE') {
                        let width = childNode.width;
                        let cornerRadius = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.CornerRadius, value: (width / 2).toString() };
                        buttonElement.properties.push(cornerRadius);
                    }
                    else if (childNode.type === 'RECTANGLE') {
                        let cp = [
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Background, value: (_a = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.translateFillsToFigma)(childNode)) !== null && _a !== void 0 ? _a : 'None' },
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.BorderColor, value: (_b = (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.translateStrokesToFigma)(childNode)) !== null && _b !== void 0 ? _b : 'None' },
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.BorderWidth, value: (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.translateStrokeWeight)(childNode) },
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.CornerRadius, value: (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.checkCornerRadius)(childNode) },
                        ];
                        buttonElement.properties.concat(cp);
                    }
                });
            }
            return nestedButton;
        case 'EDITOR':
            let editorNode = node.node;
            let editorElement = (0,_user_defined_types_translation_editor_2_xaml__WEBPACK_IMPORTED_MODULE_12__.TranslateEditorElement)(editorNode);
            editorElement.properties.push(TranslateFillsToFigma(node.node, false));
            let nestedEditor = { parent: editorElement, children: [] };
            if (nn.children.length > 0) {
                nn.children.forEach(n => {
                    let childNode = n.parent.node;
                    if (childNode.type === 'TEXT') {
                        let placeholderProp = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Placeholder, value: childNode.characters };
                        editorElement.properties.push(placeholderProp);
                    }
                });
            }
            return nestedEditor;
        case 'ENTRY':
            let entryNode = node.node;
            let entryElement = (0,_user_defined_types_translation_entry_2_xaml__WEBPACK_IMPORTED_MODULE_13__.TranslateEntryElement)(entryNode);
            let nestedEntry = { parent: entryElement, children: [] };
            if (nn.children.length > 0) {
                nn.children.forEach(n => {
                    let childNode = n.parent.node;
                    if (childNode.type === 'TEXT') {
                        let placeholderProp = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Placeholder, value: childNode.characters };
                        entryElement.properties.push(placeholderProp);
                    }
                });
            }
            return nestedEntry;
        case 'IMAGE':
            let vectorNode = node.node;
            let vectorElement = (0,_figma_node_translation_shapes_vector_2_icon__WEBPACK_IMPORTED_MODULE_10__.TranslateVectorElement)(vectorNode);
            let nestedVector = { parent: vectorElement, children: [] };
            return nestedVector;
        case 'CHECKBOX':
            let checkBoxNode = node.node;
            let checkBoxElement = (0,_user_defined_types_translation_checkBox_2_xaml__WEBPACK_IMPORTED_MODULE_16__.TranslateCheckBoxElement)(checkBoxNode);
            let nestedCheckBox = { parent: checkBoxElement, children: [] };
            return nestedCheckBox;
        case 'SWITCH':
            let switchNode = node.node;
            let switchElement = (0,_user_defined_types_translation_switch_2_xaml__WEBPACK_IMPORTED_MODULE_15__.TranslateSwitchElement)(switchNode);
            let nestedSwitch = { parent: switchElement, children: [] };
            return nestedSwitch;
        case 'SLIDER':
            let sliderNode = node.node;
            let sliderElement = (0,_user_defined_types_translation_slider_2_xaml__WEBPACK_IMPORTED_MODULE_14__.TranslateSliderElement)(sliderNode);
            let nestedSlider = { parent: sliderElement, children: [] };
            return nestedSlider;
        default:
            let element = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.none, properties: [] };
            let nested = { parent: element, children: [] };
            return nested;
    }
}
function formatStartTag(element) {
    const propertyString = element.properties
        .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
        .map((prop) => `${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join(` \n\t`);
    return `<${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]} ${propertyString}>\n`;
}
function formatShortTag(element) {
    const propertyString = element.properties
        .filter((prop) => prop.value !== 'None') // Exclude properties with value 'None' because then it is set to default value
        .map((prop) => `${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join(" " + `\n\t`);
    return `<${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]} ${propertyString}/>\n`;
}
function formatEndTag(element) {
    return `</${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]}>\n`;
}
function TranslateFillsToFigma(node, fill) {
    if ('fills' in node) {
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                    if (fill) {
                        return { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Fill, value: color };
                    }
                    return { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Background, value: color };
                }
            });
        }
    }
    return { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.none, value: 'None' };
}


/***/ }),

/***/ "./src/commonPropertyParser.ts":
/*!*************************************!*\
  !*** ./src/commonPropertyParser.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateCommonProperties: () => (/* binding */ TranslateCommonProperties),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property */ "./src/Property.ts");
/* harmony import */ var _figmaNodeTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figmaNodeTypes */ "./src/figmaNodeTypes.ts");



let borderElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Border, properties: [] };
let background = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Background, properties: [] };
function TranslateCommonProperties(node) {
    var _a, _b, _c;
    const commonProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName["x:Name"], value: toCamelCase(node.name) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Opacity, value: (_a = translateOpacity(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.IsVisible, value: boolToDefault(node.visible, true) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HorizontalOptions, value: (_b = translateLayoutAlign(node)) !== null && _b !== void 0 ? _b : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.VerticalOptions, value: (_c = translateLayoutAlign(node)) !== null && _c !== void 0 ? _c : 'None' },
    ];
    return commonProperties;
}
function toCamelCase(str) {
    return str.split(' ') // Split the string by spaces
        .map((word, index) => {
        // Convert the first word to lowercase and others to capitalize the first letter
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join(''); // Join all parts together
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
                return 'None';
        }
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
        if (node.opacity === 1) {
            return 'None';
        }
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
/* harmony export */   TranslateFigmaFrameToXamlLayout: () => (/* binding */ TranslateFigmaFrameToXamlLayout),
/* harmony export */   translateDefaultNumberValue: () => (/* binding */ translateDefaultNumberValue),
/* harmony export */   translateFigmaPaddingToXAMLPadding: () => (/* binding */ translateFigmaPaddingToXAMLPadding),
/* harmony export */   translateFillsToFigma: () => (/* binding */ translateFillsToFigma)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");



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
    var _a;
    const flexLayoutProperties = [
        /* Determines whether this layer uses auto-layout to position its children. Defaults to "NONE". */
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName["x:Name"], value: (0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(node.name) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: translateDefaultNumberValue(node.itemSpacing.toString()) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignContent, value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignItems, value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Wrap, value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Grow, value: translateDefaultNumberValue(node.layoutGrow.toString()) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignSelf, value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
    ];
    const flexLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.FlexLayout, properties: flexLayoutProperties };
    return flexLayoutElement;
}
function translateDefaultNumberValue(value) {
    if (value === '0') {
        return 'None';
    }
    return value.toString();
}
function TranslateHorizontalStackLayoutElement(node) {
    var _a;
    const horizontalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const horizontalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties };
    return horizontalStackLayoutElement;
}
function TranslateVerticalStackLayoutElement(node) {
    var _a;
    const verticalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const vertivalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties };
    return vertivalStackLayoutElement;
}
function translateFigmaPaddingToXAMLPadding(node) {
    if ('paddingLeft' in node) {
        if (node.paddingLeft == node.paddingRight && node.paddingLeft == node.paddingTop && node.paddingLeft == node.paddingBottom) {
            return node.paddingLeft.toString();
        }
        else {
            return `${node.paddingLeft}, ${node.paddingTop}, ${node.paddingRight}, ${node.paddingBottom},`;
        }
    }
    return 'None';
}
function translateFigmaAlignItemsToXamlAlignItems(value) {
    switch (value) {
        case "MAX":
            return 'End';
        case "CENTER":
            return 'Center';
        default:
            return 'None';
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
            return 'None';
    }
}
function translateFillsToFigma(node) {
    if ('fills' in node) {
        let xamlString = `.${_Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Background}`;
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                }
            });
        }
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslateEllipseElement(node) {
    var _a, _b;
    const ellipseProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Fill, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeThickness, value: node.strokeWeight.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: (_b = translateFillsToFigma(node)) !== null && _b !== void 0 ? _b : 'None' },
    ];
    const ellipseElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Ellipse, properties: ellipseProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return ellipseElement;
}
function translateFillsToFigma(node) {
    if ('fills' in node) {
        let xamlString = `.${_Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Background}`;
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                }
            });
        }
    }
    return null;
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
    var _a;
    const lineProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.X1, value: '0' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Y1, value: '0' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.X2, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Y2, value: getYforX(node).toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeDashArray, value: translateDash(node) },
        // Add other line-related properties as needed
    ];
    const lineElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Line, properties: lineProperties };
    return lineElement;
}
function translateDash(node) {
    return `${node.dashPattern[0]},${node.dashPattern[1]}`;
}
function getYforX(node) {
    let length = node.width;
    let rotation = node.rotation;
    // Convert the rotation angle from degrees to radians
    // Convert the rotation angle from degrees to radians
    let theta = rotation * (Math.PI / 180);
    // Calculate the y-change using sine of the angle
    let h = length * Math.sin(theta);
    return h;
}
function translateFillsToFigma(node) {
    if ('fills' in node) {
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                }
            });
        }
    }
    return null;
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
    var _a;
    const rectangleProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.RadiusX, value: translateDefaultNumberValue(node.topLeftRadius) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.RadiusY, value: translateDefaultNumberValue(node.bottomRightRadius) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Fill, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' }
    ];
    const rectangleElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Rectangle, properties: rectangleProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return rectangleElement;
}
function translateDefaultNumberValue(n) {
    if (n === 0) {
        return 'None';
    }
    else {
        return n.toString();
    }
}
function translateFillsToFigma(node) {
    if ('fills' in node) {
        let xamlString = `.${_Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Background}`;
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                }
            });
        }
    }
    return null;
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslateVectorElement(node) {
    const vectorProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Source, value: translateSource(node) },
    ];
    const vectorElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Image, properties: vectorProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return vectorElement;
}
function translateSource(node) {
    let sourcename = node.name.split(' ').join('_').toLowerCase();
    return `${sourcename}.png`;
}


/***/ }),

/***/ "./src/figma-node-translation/text-2-label.ts":
/*!****************************************************!*\
  !*** ./src/figma-node-translation/text-2-label.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateTextElement: () => (/* binding */ TranslateTextElement),
/* harmony export */   getHexColorFromFill: () => (/* binding */ getHexColorFromFill),
/* harmony export */   translateFontWeightToFontAttributes: () => (/* binding */ translateFontWeightToFontAttributes),
/* harmony export */   translateLetterSpacing: () => (/* binding */ translateLetterSpacing),
/* harmony export */   translateTextAutoResizeToFontAutoScalingEnabled: () => (/* binding */ translateTextAutoResizeToFontAutoScalingEnabled),
/* harmony export */   translateTextTruncationToLineBreakMode: () => (/* binding */ translateTextTruncationToLineBreakMode)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");



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
    const textElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Label, properties: textProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
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

/***/ "./src/user-defined-types-translation/button-2-imagebutton.ts":
/*!********************************************************************!*\
  !*** ./src/user-defined-types-translation/button-2-imagebutton.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateImageButtonElement: () => (/* binding */ TranslateImageButtonElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _button_2_xaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-2-xaml */ "./src/user-defined-types-translation/button-2-xaml.ts");



function TranslateImageButtonElement(node) {
    let buttonElement = (0,_button_2_xaml__WEBPACK_IMPORTED_MODULE_2__.TranslateButtonElement)(node);
    let imageButtonProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.ImageSource, value: translateSource(node) }
    ];
    let imageButtonElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.ImageButton, properties: buttonElement.properties.concat(imageButtonProperties) };
    return imageButtonElement;
}
function translateSource(node) {
    return `${node.name.toLowerCase()}.png`;
}


/***/ }),

/***/ "./src/user-defined-types-translation/button-2-xaml.ts":
/*!*************************************************************!*\
  !*** ./src/user-defined-types-translation/button-2-xaml.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateButtonElement: () => (/* binding */ TranslateButtonElement),
/* harmony export */   checkCornerRadius: () => (/* binding */ checkCornerRadius),
/* harmony export */   translateStrokeWeight: () => (/* binding */ translateStrokeWeight),
/* harmony export */   translateStrokesToFigma: () => (/* binding */ translateStrokesToFigma)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");
/* harmony import */ var _figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../figma-node-translation/frame-2-layout */ "./src/figma-node-translation/frame-2-layout.ts");
/* harmony import */ var _figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../figma-node-translation/text-2-label */ "./src/figma-node-translation/text-2-label.ts");





function TranslateButtonElement(node) {
    var _a, _b;
    let buttonProperties = [];
    let buttonElement;
    if ('children' in node) {
        node.children.forEach(c => {
            switch (c.type) {
                case 'TEXT':
                    buttonProperties = buttonProperties.concat(textProps(c));
            }
        });
    }
    let frameProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_3__.translateFillsToFigma)(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.BorderColor, value: (_b = translateStrokesToFigma(node)) !== null && _b !== void 0 ? _b : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.BorderWidth, value: translateStrokeWeight(node) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.CornerRadius, value: checkCornerRadius(node) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_3__.translateDefaultNumberValue)((0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_3__.translateFigmaPaddingToXAMLPadding)(node)) },
    ];
    buttonProperties = buttonProperties.concat(frameProperties);
    buttonElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Button, properties: buttonProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return buttonElement;
}
function translateStrokesToFigma(node) {
    if ('strokes' in node) {
        const strokes = node.strokes;
        if (strokes && strokes.length > 0) {
            strokes.forEach((stroke) => {
                if (stroke.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = stroke;
                    return `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                }
            });
        }
    }
    return null;
}
function translateStrokeWeight(node) {
    if ('strokeWeight' in node) {
        return node.strokeWeight.toString();
    }
    return 'None';
}
function checkCornerRadius(node) {
    if ('cornerRadius' in node) {
        if (node.cornerRadius !== undefined && node.cornerRadius !== 0) {
            return node.cornerRadius.toString();
        }
    }
    return 'None';
}
function textProps(node) {
    var _a, _b;
    let textProp = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.CharacterSpacing, value: (_a = (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.translateLetterSpacing)(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontSize, value: node.fontSize.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Text, value: node.characters },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextColor, value: (_b = (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.getHexColorFromFill)(node)) !== null && _b !== void 0 ? _b : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAttributes, value: (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.translateFontWeightToFontAttributes)(node.fontWeight) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAutoScalingEnabled, value: (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.translateTextAutoResizeToFontAutoScalingEnabled)(node.textAutoResize) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.LineBreakMode, value: (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.translateTextTruncationToLineBreakMode)(node.textTruncation) },
    ];
    return textProp;
}


/***/ }),

/***/ "./src/user-defined-types-translation/checkBox-2-xaml.ts":
/*!***************************************************************!*\
  !*** ./src/user-defined-types-translation/checkBox-2-xaml.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateCheckBoxElement: () => (/* binding */ TranslateCheckBoxElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslateCheckBoxElement(node) {
    const checkBoxProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.IsChecked, value: "false" }
    ];
    const checkBoxElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.CheckBox, properties: checkBoxProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return checkBoxElement;
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");


function TranslateEditorElement(node) {
    const editorProperties = [];
    const editorElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Editor, properties: editorProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_1__.TranslateCommonProperties)(node)) };
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");


function TranslateEntryElement(node) {
    const entryProperties = [];
    const entryElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Entry, properties: entryProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_1__.TranslateCommonProperties)(node)) };
    return entryElement;
}


/***/ }),

/***/ "./src/user-defined-types-translation/slider-2-xaml.ts":
/*!*************************************************************!*\
  !*** ./src/user-defined-types-translation/slider-2-xaml.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateSliderElement: () => (/* binding */ TranslateSliderElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslateSliderElement(node) {
    const sliderProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Maximum, value: "10" }
    ];
    const sliderElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Slider, properties: sliderProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return sliderElement;
}


/***/ }),

/***/ "./src/user-defined-types-translation/switch-2-xaml.ts":
/*!*************************************************************!*\
  !*** ./src/user-defined-types-translation/switch-2-xaml.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateSwitchElement: () => (/* binding */ TranslateSwitchElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslateSwitchElement(node) {
    const switchProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.IsToggled, value: "false" }
    ];
    const switchElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Switch, properties: switchProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return switchElement;
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");

class CustomControl {
    constructor(controlName, bindings) {
        this.endTag = '/>\n';
        this.name = (0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(controlName);
        this.bindings = bindings;
        this.startTag = this.FormatStartTag();
    }
    getStartTag() {
        return this.startTag + this.name;
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");

class ContentPage {
    constructor(className) {
        this.startEndTag = '>';
        this.controls = '';
        this.name = (0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(className);
        this.startTag = FormatPageStartTag(className);
        this.endTag = '\n</ContentPage>';
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");

class ContentView {
    constructor(className) {
        this.startEndTag = '>';
        this.controls = '';
        this.name = (0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(className);
        this.startTag = FormatPageStartTag(className);
        this.endTag = '\n</ContentView>';
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
if (selection !== undefined || null) {
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
        //console.log("got this from the UI", message);
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnBCSztBQUNGO0FBQ3lFO0FBQ3JCO0FBQ2Y7QUFDaEI7QUFDWTtBQUN5QjtBQUNmO0FBQ3RCO0FBQzBCO0FBQ29FO0FBQ25FO0FBQ0Y7QUFDRTtBQUNBO0FBQ0k7QUFDUTtBQUM3RjtBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzRUFBVztBQUNyQyxxQkFBcUIsTUFBTSxpREFBVztBQUN0Qyx1QkFBdUIsTUFBTSxpREFBVztBQUN4QyxpREFBaUQseUJBQXlCLFdBQVcsMkJBQTJCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIseUJBQXlCLFdBQVcsdUJBQXVCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtGQUFhO0FBQy9DO0FBQ0E7QUFDQSx1Q0FBdUMsc0VBQVc7QUFDbEQsd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdUdBQStCO0FBQ2xFO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU0saURBQVc7QUFDbEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBGQUFvQjtBQUNsRCwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlHQUF1QjtBQUN4RCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdHQUFvQjtBQUNsRCwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLCtHQUF5QjtBQUM1RCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFHQUFzQjtBQUN0RCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLG9DQUFvQyxrRkFBYTtBQUNqRCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0VBQVc7QUFDN0Msb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNLGlEQUFXO0FBQzdDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNHQUFzQjtBQUN0RDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBGQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUdBQXNCO0FBQ2xFLGlEQUFpRCxrSEFBMkI7QUFDNUU7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE1BQU0sbURBQVk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTSxtREFBWSwwQkFBMEIsNkZBQXFCLHNEQUFzRDtBQUNySiw4QkFBOEIsTUFBTSxtREFBWSwyQkFBMkIsdUdBQXVCLHNEQUFzRDtBQUN4Siw4QkFBOEIsTUFBTSxtREFBWSxxQkFBcUIscUdBQXFCLGFBQWE7QUFDdkcsOEJBQThCLE1BQU0sbURBQVksc0JBQXNCLGlHQUFpQixhQUFhO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQ7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTSxtREFBWTtBQUNsRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9HQUFxQjtBQUNwRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTSxtREFBWTtBQUNsRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFHQUFzQjtBQUN0RCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBHQUF3QjtBQUMxRCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNHQUFzQjtBQUN0RCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNHQUFzQjtBQUN0RCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDRCQUE0QixNQUFNLGlEQUFXO0FBQzdDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQVksWUFBWSxJQUFJLFdBQVc7QUFDakU7QUFDQSxlQUFlLGlEQUFXLGdCQUFnQixFQUFFLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQVksWUFBWSxJQUFJLFdBQVc7QUFDakU7QUFDQSxlQUFlLGlEQUFXLGdCQUFnQixFQUFFLGVBQWU7QUFDM0Q7QUFDQTtBQUNBLGdCQUFnQixpREFBVyxlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDbkc7QUFDQSxpQ0FBaUMsTUFBTSxtREFBWTtBQUNuRDtBQUNBLDZCQUE2QixNQUFNLG1EQUFZO0FBQy9DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLE1BQU0sbURBQVk7QUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UXdDO0FBQ0U7QUFDRztBQUM3QyxzQkFBc0IsTUFBTSxpREFBVztBQUN2QyxtQkFBbUIsTUFBTSxpREFBVztBQUM3QjtBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksMkNBQTJDO0FBQ3ZFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BILFVBQVUsTUFBTSxtREFBWSxzREFBc0Q7QUFDbEYsVUFBVSxNQUFNLG1EQUFZLHNHQUFzRztBQUNsSSxVQUFVLE1BQU0sbURBQVksb0dBQW9HO0FBQ2hJO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU0sbURBQVksb0JBQW9CLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtBQUNoRztBQUNBLHFDQUFxQyxNQUFNLG1EQUFZLDRCQUE0QixrQkFBa0I7QUFDckc7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVMsY0FBYyxzREFBUyxrQkFBa0Isc0RBQVMsVUFBVSxzREFBUyxhQUFhLHNEQUFTO0FBQzNIO0FBQ0E7QUFDQSx3QkFBd0IsTUFBTSxtREFBWSx3Q0FBd0MsbUJBQW1CLElBQUksb0JBQW9CLElBQUksc0JBQXNCLElBQUksdUJBQXVCO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNLG1EQUFZLG1CQUFtQixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRztBQUNwRixzQkFBc0IsTUFBTSxtREFBWSxtQkFBbUIsTUFBTSxJQUFJLE1BQU0sR0FBRztBQUM5RSxzQkFBc0IsTUFBTSxtREFBWSxvQkFBb0IsTUFBTSxHQUFHO0FBQ3JFLHNCQUFzQixNQUFNLG1EQUFZLG1CQUFtQixjQUFjLEdBQUc7QUFDNUU7QUFDQSx5QkFBeUIsTUFBTSxpREFBVztBQUMxQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHeUM7QUFDRTtBQUNXO0FBQy9DO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksZ0dBQWdHO0FBQzVILFVBQVUsTUFBTSxtREFBWSxtQkFBbUIsa0VBQVcsYUFBYTtBQUN2RSxVQUFVLE1BQU0sbURBQVksMkVBQTJFO0FBQ3ZHLFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEgsVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksMEZBQTBGO0FBQ3RILFVBQVUsTUFBTSxtREFBWSw2REFBNkQ7QUFDekYsVUFBVSxNQUFNLG1EQUFZLHVFQUF1RTtBQUNuRyxVQUFVLE1BQU0sbURBQVksK0VBQStFO0FBQzNHO0FBQ0EsZ0NBQWdDLE1BQU0saURBQVc7QUFDakQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSxnR0FBZ0c7QUFDNUgsVUFBVSxNQUFNLG1EQUFZLDhDQUE4QztBQUMxRSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BIO0FBQ0EsMkNBQTJDLE1BQU0saURBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSxnR0FBZ0c7QUFDNUgsVUFBVSxNQUFNLG1EQUFZLDhDQUE4QztBQUMxRSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BIO0FBQ0EseUNBQXlDLE1BQU0saURBQVc7QUFDMUQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUIsSUFBSSxnQkFBZ0IsSUFBSSxrQkFBa0IsSUFBSSxtQkFBbUI7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsNkJBQTZCLGlEQUFXLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUM1RjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0c0QztBQUNFO0FBQ3lCO0FBQ2hFO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSwwRkFBMEY7QUFDdEgsVUFBVSxNQUFNLG1EQUFZLHVEQUF1RDtBQUNuRixVQUFVLE1BQU0sbURBQVksNEZBQTRGO0FBQ3hIO0FBQ0EsNkJBQTZCLE1BQU0saURBQVcsK0NBQStDLGdGQUF5QjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBVyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDNUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUI0QztBQUNFO0FBQ3ZDO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSxpQkFBaUI7QUFDN0MsVUFBVSxNQUFNLG1EQUFZLGlCQUFpQjtBQUM3QyxVQUFVLE1BQU0sbURBQVksbUNBQW1DO0FBQy9ELFVBQVUsTUFBTSxtREFBWSx1Q0FBdUM7QUFDbkUsVUFBVSxNQUFNLG1EQUFZLDRGQUE0RjtBQUN4SCxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxpREFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQixHQUFHLG9CQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDNUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDNEM7QUFDRTtBQUN5QjtBQUNoRTtBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksa0VBQWtFO0FBQzlGLFVBQVUsTUFBTSxtREFBWSxzRUFBc0U7QUFDbEcsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsK0JBQStCLE1BQU0saURBQVcsbURBQW1ELGdGQUF5QjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVcsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQzVGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzRDO0FBQ0U7QUFDeUI7QUFDaEU7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSx1Q0FBdUM7QUFDbkU7QUFDQSw0QkFBNEIsTUFBTSxpREFBVyw0Q0FBNEMsZ0ZBQXlCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J5QztBQUNFO0FBQ3lCO0FBQzdEO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSx1R0FBdUc7QUFDbkksVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksc0dBQXNHO0FBQ2xJLFVBQVUsTUFBTSxtREFBWSw0Q0FBNEM7QUFDeEUsVUFBVSxNQUFNLG1EQUFZLHlGQUF5RjtBQUNySCxVQUFVLE1BQU0sbURBQVksb0ZBQW9GO0FBQ2hILFVBQVUsTUFBTSxtREFBWSw4RkFBOEY7QUFDMUgsVUFBVSxNQUFNLG1EQUFZLDBJQUEwSTtBQUN0SyxVQUFVLE1BQU0sbURBQVksK0JBQStCO0FBQzNELFVBQVUsTUFBTSxtREFBWSw2RkFBNkY7QUFDekgsVUFBVSxNQUFNLG1EQUFZLHVGQUF1RjtBQUNuSCxVQUFVLE1BQU0sbURBQVkseUVBQXlFO0FBQ3JHO0FBQ0EsMEJBQTBCLE1BQU0saURBQVcsMENBQTBDLGdGQUF5QjtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BVO0FBQ0U7QUFDYztBQUNsRDtBQUNQLHdCQUF3QixzRUFBc0I7QUFDOUM7QUFDQSxVQUFVLE1BQU0sbURBQVk7QUFDNUI7QUFDQSwrQkFBK0IsTUFBTSxpREFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNieUM7QUFDRTtBQUN5QjtBQUM4RTtBQUNpRjtBQUM1TjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLDBCQUEwQiw2RkFBcUIsaURBQWlEO0FBQzVILFVBQVUsTUFBTSxtREFBWSxtR0FBbUc7QUFDL0gsVUFBVSxNQUFNLG1EQUFZLGtEQUFrRDtBQUM5RSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWSxpQkFBaUIsbUdBQTJCLENBQUMsMEdBQWtDLFNBQVM7QUFDcEg7QUFDQTtBQUNBLHNCQUFzQixNQUFNLGlEQUFXLDZDQUE2QyxnRkFBeUI7QUFDN0c7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQzVGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSxnQ0FBZ0MsNEZBQXNCLGlEQUFpRDtBQUNuSSxVQUFVLE1BQU0sbURBQVksNENBQTRDO0FBQ3hFLFVBQVUsTUFBTSxtREFBWSwrQkFBK0I7QUFDM0QsVUFBVSxNQUFNLG1EQUFZLHlCQUF5Qix5RkFBbUIsaURBQWlEO0FBQ3pILFVBQVUsTUFBTSxtREFBWSx3QkFBd0IseUdBQW1DLG1CQUFtQjtBQUMxRyxVQUFVLE1BQU0sbURBQVksZ0NBQWdDLHFIQUErQyx1QkFBdUI7QUFDbEksVUFBVSxNQUFNLG1EQUFZLHVCQUF1Qiw0R0FBc0MsdUJBQXVCO0FBQ2hIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckV5QztBQUNFO0FBQ3lCO0FBQzdEO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVk7QUFDNUI7QUFDQSw4QkFBOEIsTUFBTSxpREFBVyxpREFBaUQsZ0ZBQXlCO0FBQ3pIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQzJCO0FBQzdEO0FBQ1A7QUFDQSw0QkFBNEIsTUFBTSxpREFBVyw2Q0FBNkMsZ0ZBQXlCO0FBQ25IO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQzJCO0FBQzdEO0FBQ1A7QUFDQSwyQkFBMkIsTUFBTSxpREFBVywyQ0FBMkMsZ0ZBQXlCO0FBQ2hIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUNFO0FBQ3lCO0FBQzdEO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVk7QUFDNUI7QUFDQSw0QkFBNEIsTUFBTSxpREFBVyw2Q0FBNkMsZ0ZBQXlCO0FBQ25IO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUNFO0FBQ3lCO0FBQzdEO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVk7QUFDNUI7QUFDQSw0QkFBNEIsTUFBTSxpREFBVyw2Q0FBNkMsZ0ZBQXlCO0FBQ25IO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUc0Q7QUFDL0M7QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLGtFQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsUUFBUSxJQUFJLFFBQVE7QUFDeEU7QUFDQSxtQkFBbUIsV0FBVyxFQUFFLFlBQVk7QUFDNUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCc0Q7QUFDL0M7QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0VBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDZCQUE2QixVQUFVO0FBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJzRDtBQUMvQztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrRUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsNkJBQTZCLFVBQVU7QUFDdkM7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQztBQUMxQztBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0Usa0JBQWtCLHNCQUFzQjtBQUNoSCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLHVEQUFVO0FBQ3RDLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9FbGVtZW50LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9Qcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvWGFtbFBhcnNlci50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvY29tbW9uUHJvcGVydHlQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2VsbGlwc2UtMi1lbGxpcHNlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9saW5lLTItbGluZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy92ZWN0b3ItMi1pY29uLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWFOb2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi1pbWFnZWJ1dHRvbi50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2J1dHRvbi0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9jaGVja0JveC0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lZGl0b3ItMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZW50cnktMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vc2xpZGVyLTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL3N3aXRjaC0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLWN1c3RvbS1jb250cm9sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC1wYWdlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC12aWV3LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRWxlbWVudE5hbWU7XG4oZnVuY3Rpb24gKEVsZW1lbnROYW1lKSB7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJub25lXCJdID0gMF0gPSBcIm5vbmVcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkltYWdlQnV0dG9uXCJdID0gMV0gPSBcIkltYWdlQnV0dG9uXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDb2xsZWN0aW9uVmlld1wiXSA9IDJdID0gXCJDb2xsZWN0aW9uVmlld1wiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQmFja2dyb3VuZFwiXSA9IDNdID0gXCJCYWNrZ3JvdW5kXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaW5lYXJHcmFkaWVudEJydXNoXCJdID0gNF0gPSBcIkxpbmVhckdyYWRpZW50QnJ1c2hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlJhZGlhbEdyYWRpZW50QnJ1c2hcIl0gPSA1XSA9IFwiUmFkaWFsR3JhZGllbnRCcnVzaFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiR3JhZGllbnRTdG9wXCJdID0gNl0gPSBcIkdyYWRpZW50U3RvcFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2hhZG93XCJdID0gN10gPSBcIlNoYWRvd1wiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGFiZWxcIl0gPSA4XSA9IFwiTGFiZWxcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkJ1dHRvblwiXSA9IDldID0gXCJCdXR0b25cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVkaXRvclwiXSA9IDEwXSA9IFwiRWRpdG9yXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJFbnRyeVwiXSA9IDExXSA9IFwiRW50cnlcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlN0YWNrRnJhbWVcIl0gPSAxMl0gPSBcIlN0YWNrRnJhbWVcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlRleHRCbG9ja1wiXSA9IDEzXSA9IFwiVGV4dEJsb2NrXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUZXh0Qm94XCJdID0gMTRdID0gXCJUZXh0Qm94XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDb21ib0JveFwiXSA9IDE1XSA9IFwiQ29tYm9Cb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlJhZGlvQnV0dG9uXCJdID0gMTZdID0gXCJSYWRpb0J1dHRvblwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQ2hlY2tCb3hcIl0gPSAxN10gPSBcIkNoZWNrQm94XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJJbWFnZVwiXSA9IDE4XSA9IFwiSW1hZ2VcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkJvcmRlclwiXSA9IDE5XSA9IFwiQm9yZGVyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJTY3JvbGxWaWV3XCJdID0gMjBdID0gXCJTY3JvbGxWaWV3XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQcm9ncmVzc0JhclwiXSA9IDIxXSA9IFwiUHJvZ3Jlc3NCYXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNsaWRlclwiXSA9IDIyXSA9IFwiU2xpZGVyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJTd2l0Y2hcIl0gPSAyM10gPSBcIlN3aXRjaFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGFiQ29udHJvbFwiXSA9IDI0XSA9IFwiVGFiQ29udHJvbFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGFiSXRlbVwiXSA9IDI1XSA9IFwiVGFiSXRlbVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTWVudVwiXSA9IDI2XSA9IFwiTWVudVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTWVudUl0ZW1cIl0gPSAyN10gPSBcIk1lbnVJdGVtXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDb250ZXh0TWVudVwiXSA9IDI4XSA9IFwiQ29udGV4dE1lbnVcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlBvcHVwXCJdID0gMjldID0gXCJQb3B1cFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUmVjdGFuZ2xlXCJdID0gMzBdID0gXCJSZWN0YW5nbGVcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVsbGlwc2VcIl0gPSAzMV0gPSBcIkVsbGlwc2VcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlBvbHlnb25cIl0gPSAzMl0gPSBcIlBvbHlnb25cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxpbmVcIl0gPSAzM10gPSBcIkxpbmVcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkhvcml6b250YWxTdGFja0xheW91dFwiXSA9IDM0XSA9IFwiSG9yaXpvbnRhbFN0YWNrTGF5b3V0XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJWZXJ0aWNhbFN0YWNrTGF5b3V0XCJdID0gMzVdID0gXCJWZXJ0aWNhbFN0YWNrTGF5b3V0XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJGbGV4TGF5b3V0XCJdID0gMzZdID0gXCJGbGV4TGF5b3V0XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJGcmFtZVwiXSA9IDM3XSA9IFwiRnJhbWVcIjtcbn0pKEVsZW1lbnROYW1lIHx8IChFbGVtZW50TmFtZSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFByb3BlcnR5TmFtZTtcbihmdW5jdGlvbiAoUHJvcGVydHlOYW1lKSB7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0cm9rZURhc2hBcnJheVwiXSA9IDBdID0gXCJTdHJva2VEYXNoQXJyYXlcIjtcbiAgICAvL3JlY3RhbmdsZVxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSYWRpdXNYXCJdID0gMV0gPSBcIlJhZGl1c1hcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUmFkaXVzWVwiXSA9IDJdID0gXCJSYWRpdXNZXCI7XG4gICAgLy8gdmVjdG9yP1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDZW50ZXJcIl0gPSAzXSA9IFwiQ2VudGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkVuZFBvaW50XCJdID0gNF0gPSBcIkVuZFBvaW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbG9yXCJdID0gNV0gPSBcIkNvbG9yXCI7XG4gICAgLy9TaGFkb3dcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQnJ1c2hcIl0gPSA2XSA9IFwiQnJ1c2hcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT2ZmU2V0XCJdID0gN10gPSBcIk9mZlNldFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSYWRpdXNcIl0gPSA4XSA9IFwiUmFkaXVzXCI7XG4gICAgLy9Db21tb25cbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxPcHRpb25zXCJdID0gOV0gPSBcIlZlcnRpY2FsT3B0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsT3B0aW9uc1wiXSA9IDEwXSA9IFwiSG9yaXpvbnRhbE9wdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmFja2dyb3VuZFwiXSA9IDExXSA9IFwiQmFja2dyb3VuZFwiO1xuICAgIC8vTWFyZ2luIGlzIG5vdCBwb3NzaWJsZSB0byBoYXZlIG9uIGEgZmlnbWEgbm9kZVxuICAgIC8vQnV0dG9uXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJvcmRlcldpZHRoXCJdID0gMTJdID0gXCJCb3JkZXJXaWR0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50TGF5b3V0XCJdID0gMTNdID0gXCJDb250ZW50TGF5b3V0XCI7XG4gICAgLy9MYWJlbFxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDaGFyYWN0ZXJTcGFjaW5nXCJdID0gMTRdID0gXCJDaGFyYWN0ZXJTcGFjaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRBdHRyaWJ1dGVzXCJdID0gMTVdID0gXCJGb250QXR0cmlidXRlc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCJdID0gMTZdID0gXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRGYW1pbHlcIl0gPSAxN10gPSBcIkZvbnRGYW1pbHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFNpemVcIl0gPSAxOF0gPSBcIkZvbnRTaXplXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcm1hdHRlZFRleHRcIl0gPSAxOV0gPSBcIkZvcm1hdHRlZFRleHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIl0gPSAyMF0gPSBcIkhvcml6b250YWxUZXh0QWxpZ25tZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxpbmVCcmVha01vZGVcIl0gPSAyMV0gPSBcIkxpbmVCcmVha01vZGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGluZUhlaWdodFwiXSA9IDIyXSA9IFwiTGluZUhlaWdodFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhMaW5lc1wiXSA9IDIzXSA9IFwiTWF4TGluZXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGFkZGluZ1wiXSA9IDI0XSA9IFwiUGFkZGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0XCJdID0gMjVdID0gXCJUZXh0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRDb2xvclwiXSA9IDI2XSA9IFwiVGV4dENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHREZWNvcmF0aW9uc1wiXSA9IDI3XSA9IFwiVGV4dERlY29yYXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRUcmFuc2Zvcm1cIl0gPSAyOF0gPSBcIlRleHRUcmFuc2Zvcm1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dFR5cGVcIl0gPSAyOV0gPSBcIlRleHRUeXBlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsVGV4dEFsaWdubWVudFwiXSA9IDMwXSA9IFwiVmVydGljYWxUZXh0QWxpZ25tZW50XCI7XG4gICAgLy9GcmFtZVxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTcGFjaW5nXCJdID0gMzFdID0gXCJTcGFjaW5nXCI7XG4gICAgLy9GbGV4TGF5b3V0XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduQ29udGVudFwiXSA9IDMyXSA9IFwiQWxpZ25Db250ZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduSXRlbXNcIl0gPSAzM10gPSBcIkFsaWduSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRGlyZWN0aW9uXCJdID0gMzRdID0gXCJEaXJlY3Rpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSnVzdGlmeUNvbnRlbnRcIl0gPSAzNV0gPSBcIkp1c3RpZnlDb250ZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBvc2l0aW9uXCJdID0gMzZdID0gXCJQb3NpdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJXcmFwXCJdID0gMzddID0gXCJXcmFwXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduU2VsZlwiXSA9IDM4XSA9IFwiQWxpZ25TZWxmXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJhc2lzXCJdID0gMzldID0gXCJCYXNpc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm93XCJdID0gNDBdID0gXCJHcm93XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9yZGVyXCJdID0gNDFdID0gXCJPcmRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTaHJpbmtcIl0gPSA0Ml0gPSBcIlNocmlua1wiO1xuICAgIC8vUG9seWdvblxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQb2ludHNcIl0gPSA0M10gPSBcIlBvaW50c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGaWxsXCJdID0gNDRdID0gXCJGaWxsXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZpbGxSdWxlXCJdID0gNDVdID0gXCJGaWxsUnVsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VcIl0gPSA0Nl0gPSBcIlN0cm9rZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VUaGlja25lc3NcIl0gPSA0N10gPSBcIlN0cm9rZVRoaWNrbmVzc1wiO1xuICAgIC8vTGluZVxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJYMVwiXSA9IDQ4XSA9IFwiWDFcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiWDJcIl0gPSA0OV0gPSBcIlgyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlkxXCJdID0gNTBdID0gXCJZMVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMlwiXSA9IDUxXSA9IFwiWTJcIjtcbiAgICAvL0JvcmRlclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VTaGFwZVwiXSA9IDUyXSA9IFwiU3Ryb2tlU2hhcGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF0dHJpYnV0ZVwiXSA9IDUzXSA9IFwiRm9udEF0dHJpYnV0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJub25lXCJdID0gNTRdID0gXCJub25lXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIng6TmFtZVwiXSA9IDU1XSA9IFwieDpOYW1lXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcmVncm91bmRDb2xvclwiXSA9IDU2XSA9IFwiRm9yZWdyb3VuZENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJvcmRlckNvbG9yXCJdID0gNTddID0gXCJCb3JkZXJDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCb3JkZXJUaGlja25lc3NcIl0gPSA1OF0gPSBcIkJvcmRlclRoaWNrbmVzc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWaXNpYmlsaXR5XCJdID0gNTldID0gXCJWaXNpYmlsaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFwiXSA9IDYwXSA9IFwiSXNFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVhZE9ubHlcIl0gPSA2MV0gPSBcIklzUmVhZE9ubHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFdlaWdodFwiXSA9IDYyXSA9IFwiRm9udFdlaWdodFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250U3R5bGVcIl0gPSA2M10gPSBcIkZvbnRTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0QWxpZ25tZW50XCJdID0gNjRdID0gXCJUZXh0QWxpZ25tZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkltYWdlU291cmNlXCJdID0gNjVdID0gXCJJbWFnZVNvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3VyY2VcIl0gPSA2Nl0gPSBcIlNvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsQWxpZ25tZW50XCJdID0gNjddID0gXCJIb3Jpem9udGFsQWxpZ25tZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsQWxpZ25tZW50XCJdID0gNjhdID0gXCJWZXJ0aWNhbEFsaWdubWVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPcGFjaXR5XCJdID0gNjldID0gXCJPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbW1hbmRcIl0gPSA3MF0gPSBcIkNvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29tbWFuZFBhcmFtZXRlclwiXSA9IDcxXSA9IFwiQ29tbWFuZFBhcmFtZXRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0NoZWNrZWRcIl0gPSA3Ml0gPSBcIklzQ2hlY2tlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50XCJdID0gNzNdID0gXCJDb250ZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclwiXSA9IDc0XSA9IFwiSGVhZGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYWNlaG9sZGVyVGV4dFwiXSA9IDc1XSA9IFwiUGxhY2Vob2xkZXJUZXh0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYWNlaG9sZGVyVGV4dENvbG9yXCJdID0gNzZdID0gXCJQbGFjZWhvbGRlclRleHRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVcIl0gPSA3N10gPSBcIklzVmlzaWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0ZvY3VzZWRcIl0gPSA3OF0gPSBcIklzRm9jdXNlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1NlbGVjdGVkXCJdID0gNzldID0gXCJJc1NlbGVjdGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1zU291cmNlXCJdID0gODBdID0gXCJJdGVtc1NvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGVtcGxhdGVcIl0gPSA4MV0gPSBcIkl0ZW1UZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclwiXSA9IDgyXSA9IFwiUGxhY2Vob2xkZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJbmRleFwiXSA9IDgzXSA9IFwiU2VsZWN0ZWRJbmRleFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtXCJdID0gODRdID0gXCJNaW5pbXVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heGltdW1cIl0gPSA4NV0gPSBcIk1heGltdW1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmFsdWVcIl0gPSA4Nl0gPSBcIlZhbHVlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVG9nZ2xlZFwiXSA9IDg3XSA9IFwiSXNUb2dnbGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvcm5lclJhZGl1c1wiXSA9IDg4XSA9IFwiQ29ybmVyUmFkaXVzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUGFzc3dvcmRcIl0gPSA4OV0gPSBcIklzUGFzc3dvcmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNSZWFkT25seUNhcmV0VmlzaWJsZVwiXSA9IDkwXSA9IFwiSXNSZWFkT25seUNhcmV0VmlzaWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtc1wiXSA9IDkxXSA9IFwiSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNPcGVuXCJdID0gOTJdID0gXCJJc09wZW5cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFZGl0YWJsZVwiXSA9IDkzXSA9IFwiSXNFZGl0YWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJEaXNwbGF5TWVtYmVyUGF0aFwiXSA9IDk0XSA9IFwiRGlzcGxheU1lbWJlclBhdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRWYWx1ZVwiXSA9IDk1XSA9IFwiU2VsZWN0ZWRWYWx1ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZFZhbHVlUGF0aFwiXSA9IDk2XSA9IFwiU2VsZWN0ZWRWYWx1ZVBhdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVhZGVyVGVtcGxhdGVcIl0gPSA5N10gPSBcIkhlYWRlclRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvb3RlclRlbXBsYXRlXCJdID0gOThdID0gXCJGb290ZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJY29uXCJdID0gOTldID0gXCJJY29uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkljb25Tb3VyY2VcIl0gPSAxMDBdID0gXCJJY29uU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwTmFtZVwiXSA9IDEwMV0gPSBcIkdyb3VwTmFtZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyU29ydFwiXSA9IDEwMl0gPSBcIkNhblVzZXJTb3J0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNhblVzZXJGaWx0ZXJcIl0gPSAxMDNdID0gXCJDYW5Vc2VyRmlsdGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNcIl0gPSAxMDRdID0gXCJDb2x1bW5zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd3NcIl0gPSAxMDVdID0gXCJSb3dzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbkRlZmluaXRpb25zXCJdID0gMTA2XSA9IFwiQ29sdW1uRGVmaW5pdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93RGVmaW5pdGlvbnNcIl0gPSAxMDddID0gXCJSb3dEZWZpbml0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDZWxsUGFkZGluZ1wiXSA9IDEwOF0gPSBcIkNlbGxQYWRkaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd1NwYW5cIl0gPSAxMDldID0gXCJSb3dTcGFuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtblNwYW5cIl0gPSAxMTBdID0gXCJDb2x1bW5TcGFuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzSGVhZGVyVmlzaWJsZVwiXSA9IDExMV0gPSBcIklzSGVhZGVyVmlzaWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1NvcnRhYmxlXCJdID0gMTEyXSA9IFwiSXNTb3J0YWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0RGlyZWN0aW9uXCJdID0gMTEzXSA9IFwiU29ydERpcmVjdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclRlbXBsYXRlXCJdID0gMTE0XSA9IFwiR3JvdXBIZWFkZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclRlbXBsYXRlXCJdID0gMTE1XSA9IFwiR3JvdXBGb290ZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cFN0eWxlXCJdID0gMTE2XSA9IFwiR3JvdXBTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0V4cGFuZGVkXCJdID0gMTE3XSA9IFwiSXNFeHBhbmRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtc1BhbmVsXCJdID0gMTE4XSA9IFwiSXRlbXNQYW5lbFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGluZ1Jvd0NvbG9yXCJdID0gMTE5XSA9IFwiQWx0ZXJuYXRpbmdSb3dDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtQ29udGFpbmVyU3R5bGVcIl0gPSAxMjBdID0gXCJJdGVtQ29udGFpbmVyU3R5bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIl0gPSAxMjFdID0gXCJJdGVtQ29udGFpbmVyU3R5bGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEyMl0gPSBcIkl0ZW1UZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwSGVhZGVyU3R5bGVcIl0gPSAxMjNdID0gXCJHcm91cEhlYWRlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwRm9vdGVyU3R5bGVcIl0gPSAxMjRdID0gXCJHcm91cEZvb3RlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEyNV0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5IZWFkZXJTdHlsZVwiXSA9IDEyNl0gPSBcIkNvbHVtbkhlYWRlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMjddID0gXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZyb3plbkNvbHVtbkNvdW50XCJdID0gMTI4XSA9IFwiRnJvemVuQ29sdW1uQ291bnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQXV0b0dlbmVyYXRlQ29sdW1uc1wiXSA9IDEyOV0gPSBcIkF1dG9HZW5lcmF0ZUNvbHVtbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1NvdXJjZVwiXSA9IDEzMF0gPSBcIkNvbHVtbnNTb3VyY2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1dpZHRoXCJdID0gMTMxXSA9IFwiQ29sdW1uc1dpZHRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNvcnRNZW1iZXJQYXRoXCJdID0gMTMyXSA9IFwiU29ydE1lbWJlclBhdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyVGVtcGxhdGVcIl0gPSAxMzNdID0gXCJSb3dIZWFkZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJTdHlsZVwiXSA9IDEzNF0gPSBcIlJvd0hlYWRlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMzVdID0gXCJSb3dIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsdGVybmF0aW9uQ291bnRcIl0gPSAxMzZdID0gXCJBbHRlcm5hdGlvbkNvdW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQWx0ZXJuYXRpbmdSb3dDb2xvckVuYWJsZWRcIl0gPSAxMzddID0gXCJJc0FsdGVybmF0aW5nUm93Q29sb3JFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzSXRlbUNsaWNrRW5hYmxlZFwiXSA9IDEzOF0gPSBcIklzSXRlbUNsaWNrRW5hYmxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDEzOV0gPSBcIkhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDE0MF0gPSBcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3Rpb25Nb2RlXCJdID0gMTQxXSA9IFwiU2VsZWN0aW9uTW9kZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEl0ZW1zXCJdID0gMTQyXSA9IFwiU2VsZWN0ZWRJdGVtc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEl0ZW1cIl0gPSAxNDNdID0gXCJTZWxlY3RlZEl0ZW1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNsaWNrXCJdID0gMTQ0XSA9IFwiSXRlbUNsaWNrXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzU3RpY2t5XCJdID0gMTQ1XSA9IFwiSXNTdGlja3lcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoRW5hYmxlZFwiXSA9IDE0Nl0gPSBcIklzUHVsbFRvUmVmcmVzaEVuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUmVmcmVzaENvbW1hbmRcIl0gPSAxNDddID0gXCJSZWZyZXNoQ29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nXCJdID0gMTQ4XSA9IFwiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nQ2hhbmdlZFwiXSA9IDE0OV0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdDaGFuZ2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVFbmFibGVkXCJdID0gMTUwXSA9IFwiSXNMb2FkTW9yZUVuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTG9hZE1vcmVDb21tYW5kXCJdID0gMTUxXSA9IFwiTG9hZE1vcmVDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nXCJdID0gMTUyXSA9IFwiSXNMb2FkTW9yZUxvYWRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNMb2FkTW9yZUxvYWRpbmdDaGFuZ2VkXCJdID0gMTUzXSA9IFwiSXNMb2FkTW9yZUxvYWRpbmdDaGFuZ2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UYXBwZWRcIl0gPSAxNTRdID0gXCJJdGVtVGFwcGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1TZWxlY3RlZFwiXSA9IDE1NV0gPSBcIkl0ZW1TZWxlY3RlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtRG91YmxlVGFwcGVkXCJdID0gMTU2XSA9IFwiSXRlbURvdWJsZVRhcHBlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZUxlZnRDb21tYW5kXCJdID0gMTU3XSA9IFwiU3dpcGVMZWZ0Q29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVJpZ2h0Q29tbWFuZFwiXSA9IDE1OF0gPSBcIlN3aXBlUmlnaHRDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlVXBDb21tYW5kXCJdID0gMTU5XSA9IFwiU3dpcGVVcENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVEb3duQ29tbWFuZFwiXSA9IDE2MF0gPSBcIlN3aXBlRG93bkNvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVJdGVtc1wiXSA9IDE2MV0gPSBcIlN3aXBlSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNSZWZyZXNoaW5nXCJdID0gMTYyXSA9IFwiSXNSZWZyZXNoaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCJdID0gMTYzXSA9IFwiUmVmcmVzaENvbW1hbmRQYXJhbWV0ZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVpZ2h0XCJdID0gMTY0XSA9IFwiUm93SGVpZ2h0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkF1dG9HZW5lcmF0ZUl0ZW1cIl0gPSAxNjVdID0gXCJBdXRvR2VuZXJhdGVJdGVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbE1vZGVcIl0gPSAxNjZdID0gXCJTY3JvbGxNb2RlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxNjddID0gXCJTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvXCJdID0gMTY4XSA9IFwiU2Nyb2xsVG9cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Sb3dcIl0gPSAxNjldID0gXCJTY3JvbGxUb1Jvd1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1Jvd0luZGV4XCJdID0gMTcwXSA9IFwiU2Nyb2xsVG9Sb3dJbmRleFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb0NvbHVtblwiXSA9IDE3MV0gPSBcIlNjcm9sbFRvQ29sdW1uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvQ29sdW1uSW5kZXhcIl0gPSAxNzJdID0gXCJTY3JvbGxUb0NvbHVtbkluZGV4XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNzNdID0gXCJIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNzRdID0gXCJGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDE3NV0gPSBcIkdyb3VwSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWlnaHRSZXNpemVyXCJdID0gMTc2XSA9IFwiUm93SGVpZ2h0UmVzaXplclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxTdGFydGVkXCJdID0gMTc3XSA9IFwiT25QdWxsU3RhcnRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxEZWx0YVwiXSA9IDE3OF0gPSBcIk9uUHVsbERlbHRhXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbENvbXBsZXRlZFwiXSA9IDE3OV0gPSBcIk9uUHVsbENvbXBsZXRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxDb250ZW50XCJdID0gMTgwXSA9IFwiT25QdWxsQ29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJlbGVhc2VDb250ZW50XCJdID0gMTgxXSA9IFwiT25SZWxlYXNlQ29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlU3RhcnRlZFwiXSA9IDE4Ml0gPSBcIk9uU3dpcGVTdGFydGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3dpcGVEZWx0YVwiXSA9IDE4M10gPSBcIk9uU3dpcGVEZWx0YVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlQ29tcGxldGVkXCJdID0gMTg0XSA9IFwiT25Td2lwZUNvbXBsZXRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJldmVhbGluZ1wiXSA9IDE4NV0gPSBcIk9uUmV2ZWFsaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3dpcGVFbmRlZFwiXSA9IDE4Nl0gPSBcIk9uU3dpcGVFbmRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJldmVhbGVkXCJdID0gMTg3XSA9IFwiT25SZXZlYWxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkV4ZWN1dGVcIl0gPSAxODhdID0gXCJPbkV4ZWN1dGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25IaWRpbmdcIl0gPSAxODldID0gXCJPbkhpZGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkhpZGRlblwiXSA9IDE5MF0gPSBcIk9uSGlkZGVuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3RhdGVDaGFuZ2VcIl0gPSAxOTFdID0gXCJPblN0YXRlQ2hhbmdlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuaW1hdGlvbkR1cmF0aW9uXCJdID0gMTkyXSA9IFwiQW5pbWF0aW9uRHVyYXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4VG9wT2Zmc2V0XCJdID0gMTkzXSA9IFwiTWF4VG9wT2Zmc2V0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pblRvcE9mZnNldFwiXSA9IDE5NF0gPSBcIk1pblRvcE9mZnNldFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5Ub3BSZXZlYWxlZFwiXSA9IDE5NV0gPSBcIk1pblRvcFJldmVhbGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcFJldmVhbGVkXCJdID0gMTk2XSA9IFwiTWF4VG9wUmV2ZWFsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFRlbXBsYXRlXCJdID0gMTk3XSA9IFwiQ29udGVudFRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTk4XSA9IFwiQ29udGVudFRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm90YXRpb25cIl0gPSAxOTldID0gXCJSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY2FsZVwiXSA9IDIwMF0gPSBcIlNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRyYW5zbGF0aW9uWFwiXSA9IDIwMV0gPSBcIlRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmFuc2xhdGlvbllcIl0gPSAyMDJdID0gXCJUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGF5b3V0WFwiXSA9IDIwM10gPSBcIkxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGF5b3V0WVwiXSA9IDIwNF0gPSBcIkxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiV2lkdGhSZXF1ZXN0XCJdID0gMjA1XSA9IFwiV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlaWdodFJlcXVlc3RcIl0gPSAyMDZdID0gXCJIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSAyMDddID0gXCJNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gMjA4XSA9IFwiTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5jaG9yWFwiXSA9IDIwOV0gPSBcIkFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5jaG9yWVwiXSA9IDIxMF0gPSBcIkFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm90YXRpb25YXCJdID0gMjExXSA9IFwiUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWVwiXSA9IDIxMl0gPSBcIlJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY2FsZVhcIl0gPSAyMTNdID0gXCJTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVZXCJdID0gMjE0XSA9IFwiU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiXSA9IDIxNV0gPSBcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHZXN0dXJlUmVjb2duaXplcnNcIl0gPSAyMTZdID0gXCJHZXN0dXJlUmVjb2duaXplcnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmVoYXZpb3JcIl0gPSAyMTddID0gXCJCZWhhdmlvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmlnZ2Vyc1wiXSA9IDIxOF0gPSBcIlRyaWdnZXJzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNsYXNzSWRcIl0gPSAyMTldID0gXCJDbGFzc0lkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0eWxlSWRcIl0gPSAyMjBdID0gXCJTdHlsZUlkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZsb3dEaXJlY3Rpb25cIl0gPSAyMjFdID0gXCJGbG93RGlyZWN0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklucHV0VHJhbnNwYXJlbnRcIl0gPSAyMjJdID0gXCJJbnB1dFRyYW5zcGFyZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiXSA9IDIyM10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclwiXSA9IDIyNF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1wiXSA9IDIyNV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25cIl0gPSAyMjZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1wiXSA9IDIyN10gPSBcIklzVmlzaWJsZVBhZGRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJcIl0gPSAyMjhdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclwiXSA9IDIyOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoXCJdID0gMjMwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93XCJdID0gMjMxXSA9IFwiSXNWaXNpYmxlU2hhZG93XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVwiXSA9IDIzMl0gPSBcIklzVmlzaWJsZVN0cm9rZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JcIl0gPSAyMzNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zXCJdID0gMjM0XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiXSA9IDIzNV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIl0gPSAyMzZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25cIl0gPSAyMzddID0gXCJJc1Zpc2libGVSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVwiXSA9IDIzOF0gPSBcIklzVmlzaWJsZVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RcIl0gPSAyMzldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFwiXSA9IDI0MF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDI0MV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSAyNDJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1wiXSA9IDI0M10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nXCJdID0gMjQ0XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nXCJdID0gMjQ1XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JPcGFjaXR5XCJdID0gMjQ2XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck9wYWNpdHlcIl0gPSAyNDddID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCJdID0gMjQ4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd09wYWNpdHlcIl0gPSAyNDldID0gXCJJc1Zpc2libGVTaGFkb3dPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck9wYWNpdHlcIl0gPSAyNTBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE9wYWNpdHlcIl0gPSAyNTFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU9wYWNpdHlcIl0gPSAyNTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uT3BhY2l0eVwiXSA9IDI1M10gPSBcIklzVmlzaWJsZVJvdGF0aW9uT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIl0gPSAyNTRdID0gXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIl0gPSAyNTVdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RPcGFjaXR5XCJdID0gMjU2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIl0gPSAyNTddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE9wYWNpdHlcIl0gPSAyNThdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNPcGFjaXR5XCJdID0gMjU5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nT3BhY2l0eVwiXSA9IDI2MF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdPcGFjaXR5XCJdID0gMjYxXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ09wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFZGl0YWJsZUxheW91dFwiXSA9IDI2Ml0gPSBcIklzRWRpdGFibGVMYXlvdXRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkT3BhY2l0eVwiXSA9IDI2M10gPSBcIklzRW5hYmxlZE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25cIl0gPSAyNjRdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uXCJdID0gMjY1XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblwiXSA9IDI2Nl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uXCJdID0gMjY3XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uXCJdID0gMjY4XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25cIl0gPSAyNjldID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25cIl0gPSAyNzBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25cIl0gPSAyNzFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uXCJdID0gMjcyXSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25cIl0gPSAyNzNdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiXSA9IDI3NF0gPSBcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uXCJdID0gMjc1XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25cIl0gPSAyNzZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiXSA9IDI3N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25cIl0gPSAyNzhdID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlUm90YXRpb25cIl0gPSAyNzldID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblwiXSA9IDI4MF0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblwiXSA9IDI4MV0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25cIl0gPSAyODJdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblwiXSA9IDI4M10gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblwiXSA9IDI4NF0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblwiXSA9IDI4NV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIl0gPSAyODZdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVcIl0gPSAyODddID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlXCJdID0gMjg4XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVwiXSA9IDI4OV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlXCJdID0gMjkwXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlXCJdID0gMjkxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVcIl0gPSAyOTJdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVcIl0gPSAyOTNdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVcIl0gPSAyOTRdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlXCJdID0gMjk1XSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVcIl0gPSAyOTZdID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVwiXSA9IDI5N10gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlXCJdID0gMjk4XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVcIl0gPSAyOTldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVwiXSA9IDMwMF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVcIl0gPSAzMDFdID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVcIl0gPSAzMDJdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVwiXSA9IDMwM10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVwiXSA9IDMwNF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVcIl0gPSAzMDVdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVwiXSA9IDMwNl0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVwiXSA9IDMwN10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVwiXSA9IDMwOF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVcIl0gPSAzMDldID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVcIl0gPSAzMTBdID0gXCJJc0VuYWJsZWRTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVhcIl0gPSAzMTFdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVhcIl0gPSAzMTJdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVhcIl0gPSAzMTNdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVYXCJdID0gMzE0XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVhcIl0gPSAzMTVdID0gXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVYXCJdID0gMzE2XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVhcIl0gPSAzMTddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWFwiXSA9IDMxOF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlWFwiXSA9IDMxOV0gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VTY2FsZVhcIl0gPSAzMjBdID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVYXCJdID0gMzIxXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWFwiXSA9IDMyMl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVhcIl0gPSAzMjNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVYXCJdID0gMzI0XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVYXCJdID0gMzI1XSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVTY2FsZVhcIl0gPSAzMjZdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVYXCJdID0gMzI3XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVhcIl0gPSAzMjhdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVhcIl0gPSAzMjldID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVYXCJdID0gMzMwXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIl0gPSAzMzFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWFwiXSA9IDMzMl0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWFwiXSA9IDMzM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVYXCJdID0gMzM0XSA9IFwiSXNFbmFibGVkU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiXSA9IDMzNV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWVwiXSA9IDMzNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiXSA9IDMzN10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIl0gPSAzMzhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWVwiXSA9IDMzOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVlcIl0gPSAzNDBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWVwiXSA9IDM0MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVZXCJdID0gMzQyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCJdID0gMzQzXSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiXSA9IDM0NF0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVlcIl0gPSAzNDVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCJdID0gMzQ2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiXSA9IDM0N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVlcIl0gPSAzNDhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25TY2FsZVlcIl0gPSAzNDldID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWVwiXSA9IDM1MF0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVlcIl0gPSAzNTFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiXSA9IDM1Ml0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM1M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVlcIl0gPSAzNTRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWVwiXSA9IDM1NV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVZXCJdID0gMzU2XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVZXCJdID0gMzU3XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRTY2FsZVlcIl0gPSAzNThdID0gXCJJc0VuYWJsZWRTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCJdID0gMzU5XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25YXCJdID0gMzYwXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25YXCJdID0gMzYxXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiXSA9IDM2Ml0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25YXCJdID0gMzYzXSA9IFwiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiXSA9IDM2NF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25YXCJdID0gMzY1XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvblhcIl0gPSAzNjZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvblhcIl0gPSAzNjddID0gXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCJdID0gMzY4XSA9IFwiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM2OV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvblhcIl0gPSAzNzBdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCJdID0gMzcxXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWFwiXSA9IDM3Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiXSA9IDM3M10gPSBcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25YXCJdID0gMzc0XSA9IFwiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3NV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc3XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3OF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25YXCJdID0gMzc5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvblhcIl0gPSAzODBdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvblhcIl0gPSAzODFdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFRyYW5zbGF0aW9uWFwiXSA9IDM4Ml0gPSBcIklzRW5hYmxlZFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvbllcIl0gPSAzODNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvbllcIl0gPSAzODRdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNUcmFuc2xhdGlvbllcIl0gPSAzODVdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25ZXCJdID0gMzg2XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvbllcIl0gPSAzODddID0gXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25ZXCJdID0gMzg4XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvbllcIl0gPSAzODldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWVwiXSA9IDM5MF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1RyYW5zbGF0aW9uWVwiXSA9IDM5MV0gPSBcIklzVmlzaWJsZVNoYWRvd1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvbllcIl0gPSAzOTJdID0gXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzkzXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1RyYW5zbGF0aW9uWVwiXSA9IDM5NF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvbllcIl0gPSAzOTVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZVHJhbnNsYXRpb25ZXCJdID0gMzk2XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25ZXCJdID0gMzk3XSA9IFwiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvbllcIl0gPSAzOThdID0gXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gMzk5XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSA0MDBdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSA0MDFdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gNDAyXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIl0gPSA0MDNdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwNF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwNV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCJdID0gNDA2XSA9IFwiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFhcIl0gPSA0MDddID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WFwiXSA9IDQwOF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRYXCJdID0gNDA5XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRYXCJdID0gNDEwXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WFwiXSA9IDQxMV0gPSBcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiXSA9IDQxMl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIl0gPSA0MTNdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRYXCJdID0gNDE0XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0xheW91dFhcIl0gPSA0MTVdID0gXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUxheW91dFhcIl0gPSA0MTZdID0gXCJJc1Zpc2libGVTdHJva2VMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFhcIl0gPSA0MTddID0gXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFhcIl0gPSA0MThdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFhcIl0gPSA0MTldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFhcIl0gPSA0MjBdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiXSA9IDQyMV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIl0gPSA0MjJdID0gXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjNdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRYXCJdID0gNDI0XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjVdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFhcIl0gPSA0MjZdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRYXCJdID0gNDI3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WFwiXSA9IDQyOF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRYXCJdID0gNDI5XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTGF5b3V0WFwiXSA9IDQzMF0gPSBcIklzRW5hYmxlZExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WVwiXSA9IDQzMV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRZXCJdID0gNDMyXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFlcIl0gPSA0MzNdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFlcIl0gPSA0MzRdID0gXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRZXCJdID0gNDM1XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCJdID0gNDM2XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiXSA9IDQzN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFlcIl0gPSA0MzhdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TGF5b3V0WVwiXSA9IDQzOV0gPSBcIklzVmlzaWJsZVNoYWRvd0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WVwiXSA9IDQ0MF0gPSBcIklzVmlzaWJsZVN0cm9rZUxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WVwiXSA9IDQ0MV0gPSBcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WVwiXSA9IDQ0Ml0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WVwiXSA9IDQ0M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WVwiXSA9IDQ0NF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCJdID0gNDQ1XSA9IFwiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiXSA9IDQ0Nl0gPSBcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0N10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFlcIl0gPSA0NDhdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0OV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ1MF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFlcIl0gPSA0NTFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRZXCJdID0gNDUyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFlcIl0gPSA0NTNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRMYXlvdXRZXCJdID0gNDU0XSA9IFwiSXNFbmFibGVkTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIl0gPSA0NTddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDU4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NTldID0gXCJJc1Zpc2libGVQYWRkaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyV2lkdGhSZXF1ZXN0XCJdID0gNDYwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NjFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFdpZHRoUmVxdWVzdFwiXSA9IDQ2Ml0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiXSA9IDQ2M10gPSBcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIl0gPSA0NjRdID0gXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yV2lkdGhSZXF1ZXN0XCJdID0gNDY1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiXSA9IDQ2Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIl0gPSA0NjddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZV2lkdGhSZXF1ZXN0XCJdID0gNDY4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDY5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVXaWR0aFJlcXVlc3RcIl0gPSA0NzBdID0gXCJJc1Zpc2libGVTY2FsZVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDcxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDc0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNXaWR0aFJlcXVlc3RcIl0gPSA0NzVdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1dpZHRoUmVxdWVzdFwiXSA9IDQ3Nl0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1dpZHRoUmVxdWVzdFwiXSA9IDQ3N10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkV2lkdGhSZXF1ZXN0XCJdID0gNDc4XSA9IFwiSXNFbmFibGVkV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0NzldID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9ySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4MF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNIZWlnaHRSZXF1ZXN0XCJdID0gNDgxXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25IZWlnaHRSZXF1ZXN0XCJdID0gNDgyXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4M10gPSBcIklzVmlzaWJsZVBhZGRpbmdIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4NF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODVdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhIZWlnaHRSZXF1ZXN0XCJdID0gNDg2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0hlaWdodFJlcXVlc3RcIl0gPSA0ODddID0gXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUhlaWdodFJlcXVlc3RcIl0gPSA0ODhdID0gXCJJc1Zpc2libGVTdHJva2VIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODldID0gXCJJc1Zpc2libGVUZXh0Q29sb3JIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0hlaWdodFJlcXVlc3RcIl0gPSA0OTBdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEhlaWdodFJlcXVlc3RcIl0gPSA0OTFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUhlaWdodFJlcXVlc3RcIl0gPSA0OTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5M10gPSBcIklzVmlzaWJsZVJvdGF0aW9uSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIl0gPSA0OTRdID0gXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OTVdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OTddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OThdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNIZWlnaHRSZXF1ZXN0XCJdID0gNDk5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdIZWlnaHRSZXF1ZXN0XCJdID0gNTAxXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMl0gPSBcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA0XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA2XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDhdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTExXSA9IFwiSXNWaXNpYmxlU2hhZG93TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTJdID0gXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxM10gPSBcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE0XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxNl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTddID0gXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MThdID0gXCJJc1Zpc2libGVTY2FsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxOV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjFdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMl0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyM10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyNF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjVdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjZdID0gXCJJc0VuYWJsZWRNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTI3XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MjhdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUyOV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzFdID0gXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzJdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMzXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM1XSA9IFwiSXNWaXNpYmxlU2hhZG93TWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM2XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM3XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM4XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM5XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQwXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDFdID0gXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQyXSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQzXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0NF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ1XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ2XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0N10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDhdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0OV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NTBdID0gXCJJc0VuYWJsZWRNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvclhcIl0gPSA1NTFdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWFwiXSA9IDU1Ml0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JYXCJdID0gNTUzXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JYXCJdID0gNTU0XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWFwiXSA9IDU1NV0gPSBcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiXSA9IDU1Nl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIl0gPSA1NTddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JYXCJdID0gNTU4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0FuY2hvclhcIl0gPSA1NTldID0gXCJJc1Zpc2libGVTaGFkb3dBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUFuY2hvclhcIl0gPSA1NjBdID0gXCJJc1Zpc2libGVTdHJva2VBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvclhcIl0gPSA1NjFdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvclhcIl0gPSA1NjJdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvclhcIl0gPSA1NjNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvclhcIl0gPSA1NjRdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiXSA9IDU2NV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIl0gPSA1NjZdID0gXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NjddID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JYXCJdID0gNTY4XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NjldID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvclhcIl0gPSA1NzBdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JYXCJdID0gNTcxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWFwiXSA9IDU3Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JYXCJdID0gNTczXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkQW5jaG9yWFwiXSA9IDU3NF0gPSBcIklzRW5hYmxlZEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWVwiXSA9IDU3NV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JZXCJdID0gNTc2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvcllcIl0gPSA1NzddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvcllcIl0gPSA1NzhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JZXCJdID0gNTc5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCJdID0gNTgwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiXSA9IDU4MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvcllcIl0gPSA1ODJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93QW5jaG9yWVwiXSA9IDU4M10gPSBcIklzVmlzaWJsZVNoYWRvd0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWVwiXSA9IDU4NF0gPSBcIklzVmlzaWJsZVN0cm9rZUFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWVwiXSA9IDU4NV0gPSBcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWVwiXSA9IDU4Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWVwiXSA9IDU4N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWVwiXSA9IDU4OF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCJdID0gNTg5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiXSA9IDU5MF0gPSBcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5MV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvcllcIl0gPSA1OTJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5NF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvcllcIl0gPSA1OTVdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JZXCJdID0gNTk2XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvcllcIl0gPSA1OTddID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRBbmNob3JZXCJdID0gNTk4XSA9IFwiSXNFbmFibGVkQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIl0gPSA1OTldID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblhcIl0gPSA2MDBdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIl0gPSA2MDFdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCJdID0gNjAyXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblhcIl0gPSA2MDNdID0gXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25YXCJdID0gNjA0XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblhcIl0gPSA2MDVdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWFwiXSA9IDYwNl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiXSA9IDYwN10gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIl0gPSA2MDhdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25YXCJdID0gNjA5XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiXSA9IDYxMF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIl0gPSA2MTFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25YXCJdID0gNjEyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25YXCJdID0gNjEzXSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblhcIl0gPSA2MTRdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25YXCJdID0gNjE1XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTZdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25YXCJdID0gNjE4XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblhcIl0gPSA2MTldID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWFwiXSA9IDYyMF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWFwiXSA9IDYyMV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkUm90YXRpb25YXCJdID0gNjIyXSA9IFwiSXNFbmFibGVkUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiXSA9IDYyM10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWVwiXSA9IDYyNF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWVwiXSA9IDYyNV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIl0gPSA2MjZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWVwiXSA9IDYyN10gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIl0gPSA2MjhdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWVwiXSA9IDYyOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25ZXCJdID0gNjMwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93Um90YXRpb25ZXCJdID0gNjMxXSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiXSA9IDYzMl0gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvbllcIl0gPSA2MzNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25ZXCJdID0gNjM0XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiXSA9IDYzNV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvbllcIl0gPSA2MzZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIl0gPSA2MzddID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWVwiXSA9IDYzOF0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2MzldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiXSA9IDY0MF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiXSA9IDY0MV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uWVwiXSA9IDY0M10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25ZXCJdID0gNjQ0XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25ZXCJdID0gNjQ1XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRSb3RhdGlvbllcIl0gPSA2NDZdID0gXCJJc0VuYWJsZWRSb3RhdGlvbllcIjtcbn0pKFByb3BlcnR5TmFtZSB8fCAoUHJvcGVydHlOYW1lID0ge30pKTtcbiIsImltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuL0VsZW1lbnRcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQsIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYSB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXRcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvZWxsaXBzZS0yLWVsbGlwc2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVRleHRFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWxcIjtcbmltcG9ydCB7IENvbnRlbnRWaWV3IH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtdmlld1wiO1xuaW1wb3J0IHsgQ3VzdG9tQ29udHJvbCB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLWN1c3RvbS1jb250cm9sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVMaW5lRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2xpbmUtMi1saW5lXCI7XG5pbXBvcnQgeyBDb250ZW50UGFnZSB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXBhZ2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy92ZWN0b3ItMi1pY29uXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVCdXR0b25FbGVtZW50LCBjaGVja0Nvcm5lclJhZGl1cywgdHJhbnNsYXRlU3Ryb2tlV2VpZ2h0LCB0cmFuc2xhdGVTdHJva2VzVG9GaWdtYSB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi14YW1sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVFZGl0b3JFbGVtZW50IH0gZnJvbSBcIi4vdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2VkaXRvci0yLXhhbWxcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUVudHJ5RWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lbnRyeS0yLXhhbWxcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNsaWRlckVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vc2xpZGVyLTIteGFtbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU3dpdGNoRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9zd2l0Y2gtMi14YW1sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDaGVja0JveEVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vY2hlY2tCb3gtMi14YW1sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVJbWFnZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vYnV0dG9uLTItaW1hZ2VidXR0b25cIjtcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUZpZ21hKG5vZGVzKSB7XG4gICAgLy9jb25zb2xlLmxvZygnUGFyc2luZyBOb2RlczogJywgbm9kZXMpO1xuICAgIGxldCB4YW1sQ29kZSA9IFwiXCI7XG4gICAgbGV0IHJvb3Rub2RlID0gbm9kZXNbMF07XG4gICAgbGV0IGNvbnRlbnRQYWdlID0gbmV3IENvbnRlbnRQYWdlKHJvb3Rub2RlLnBhcmVudC5ub2RlLm5hbWUpO1xuICAgIGxldCByb290VmlldyA9IHsgbmFtZTogRWxlbWVudE5hbWUuU2Nyb2xsVmlldywgcHJvcGVydGllczogW10gfTtcbiAgICBsZXQgcm9vdExheW91dCA9IHsgbmFtZTogRWxlbWVudE5hbWUuVmVydGljYWxTdGFja0xheW91dCwgcHJvcGVydGllczogW10gfTtcbiAgICB4YW1sQ29kZSArPSBjb250ZW50UGFnZS5nZXRTdGFydFRhZygpICsgYFxcbiR7Zm9ybWF0U3RhcnRUYWcocm9vdFZpZXcpfVxcbmAgKyBgXFxuJHtmb3JtYXRTdGFydFRhZyhyb290TGF5b3V0KX1cXG5gO1xuICAgIHJvb3Rub2RlLmNoaWxkcmVuLnJldmVyc2UoKS5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAvL1RyYXNsYXRlIHRoZSBOZXN0ZWQgZWxlbWVudHMgdG8gXG4gICAgICAgIHhhbWxDb2RlICs9IGZvcm1hdE5lc3RlZEVsZW1lbnQoY2hlY2tOb2RlVHlwZShjKSk7XG4gICAgfSk7XG4gICAgeGFtbENvZGUgKz0gYFxcbiR7Zm9ybWF0RW5kVGFnKHJvb3RMYXlvdXQpfVxcbmAgKyBgXFxuJHtmb3JtYXRFbmRUYWcocm9vdFZpZXcpfVxcbmAgKyBjb250ZW50UGFnZS5nZXRFbmRUYWcoKTtcbiAgICByZXR1cm4geGFtbENvZGU7XG59XG5mdW5jdGlvbiBmb3JtYXROZXN0ZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50IGluc3RhbmNlb2YgQ3VzdG9tQ29udHJvbCkge1xuICAgICAgICByZXN1bHQgKz0gZWxlbWVudC5wYXJlbnQuZ2V0U3RhcnRUYWcoKSArIGVsZW1lbnQucGFyZW50LmdldEVuZFRhZygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50LnBhcmVudCBpbnN0YW5jZW9mIENvbnRlbnRWaWV3KSB7XG4gICAgICAgIHJlc3VsdCArPSBlbGVtZW50LnBhcmVudC5nZXRTdGFydFRhZygpICsgLypgXFxuJHtuZXN0ZWRDb21wb25lbnR9YCArKi8gZWxlbWVudC5wYXJlbnQuZ2V0RW5kVGFnKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQubmFtZSA9PT0gRWxlbWVudE5hbWUubm9uZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRhZ1xuICAgICAgICAgICAgcmVzdWx0ICs9IGZvcm1hdFN0YXJ0VGFnKGVsZW1lbnQucGFyZW50KTtcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBjaGlsZHJlbiBhbmQgcmVjdXJzaXZlbHkgY2FsbCBmb3JtYXROZXN0ZWRFbGVtZW50IG9uIGVhY2ggY2hpbGRcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gZm9ybWF0TmVzdGVkRWxlbWVudChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzdWx0ICs9IGZvcm1hdEVuZFRhZyhlbGVtZW50LnBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZm9ybWF0U2hvcnRUYWcoZWxlbWVudC5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjaGVja05vZGVUeXBlKG5uKSB7XG4gICAgLy9DaGVjayBpZiB0aGUgbm9kZSBoYXMgYmVlbiBhc3NpZ25lZCBhIGN1c3RvbSB2YWx1ZVxuICAgIGlmIChubi5wYXJlbnQudXR5cGUgIT09ICdOb25lJykge1xuICAgICAgICByZXR1cm4gcGFyc2VVdHlwZU5vZGVzKG5uKTtcbiAgICB9XG4gICAgLy8gdGFrZSB0aGUgdG9wIG5vZGVcbiAgICBsZXQgbm9kZSA9IG5uLnBhcmVudC5ub2RlO1xuICAgIC8vIENoZWNrIHRoZSBub2RlJ3MgdHlwZSB1c2luZyB0aGUgJ3R5cGUnIHByb3BlcnR5XG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRlJBTUUnOlxuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBubi5jaGlsZHJlblswXS5wYXJlbnQubm9kZS50eXBlID09PSAnVkVDVE9SJykge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGZyYW1lIGFuZCByZXR1cm4gdGhlIHZlY3RvciBkaXJlY3RseVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja05vZGVUeXBlKG5uLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBmcmFtZSBlbGVtZW50IC0+IGJlY2FvbWVzIGEgeGFtbCBsYXlvdXQgZWxlbWVudCBcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWVOb2RlID0gbm9kZTtcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWVFbGVtZW50ID0gVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dChmcmFtZU5vZGUpO1xuICAgICAgICAgICAgICAgIGZyYW1lRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goVHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgbGV0IG5lc3RlZEZyYW1lID0geyBwYXJlbnQ6IGZyYW1lRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEZyYW1lLmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXN0ZWRGcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnR1JPVVAnOlxuICAgICAgICAgICAgbGV0IGdyb3VwRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUubm9uZSwgcHJvcGVydGllczogW10gfTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRHcm91cCA9IHsgcGFyZW50OiBncm91cEVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEdyb3VwLmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSkpO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEdyb3VwO1xuICAgICAgICBjYXNlICdURVhUJzpcbiAgICAgICAgICAgIGxldCB0ZXh0Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgdGV4dEVsZW1lbnQgPSBUcmFuc2xhdGVUZXh0RWxlbWVudCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkVGV4dCA9IHsgcGFyZW50OiB0ZXh0RWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkVGV4dDtcbiAgICAgICAgY2FzZSAnRUxMSVBTRSc6XG4gICAgICAgICAgICBsZXQgZWxsaXBzZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IGVsbGlwc2VFbGVtZW50ID0gVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQoZWxsaXBzZU5vZGUpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZEVsaXBzZSA9IHsgcGFyZW50OiBlbGxpcHNlRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkRWxpcHNlO1xuICAgICAgICBjYXNlICdMSU5FJzpcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgbGluZUVsZW1lbnQgPSBUcmFuc2xhdGVMaW5lRWxlbWVudChsaW5lTm9kZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkTGluZSA9IHsgcGFyZW50OiBsaW5lRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkTGluZTtcbiAgICAgICAgY2FzZSAnUkVDVEFOR0xFJzpcbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVFbGVtZW50ID0gVHJhbnNsYXRlUmVjdGFuZ2xlRWxlbWVudChyZWN0YW5nbGVOb2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRSZWN0YW5nbGUgPSB7IHBhcmVudDogcmVjdGFuZ2xlRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkUmVjdGFuZ2xlO1xuICAgICAgICBjYXNlICdWRUNUT1InOlxuICAgICAgICAgICAgbGV0IHZlY3Rvck5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IHZlY3RvckVsZW1lbnQgPSBUcmFuc2xhdGVWZWN0b3JFbGVtZW50KHZlY3Rvck5vZGUpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZFZlY3RvciA9IHsgcGFyZW50OiB2ZWN0b3JFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRWZWN0b3I7XG4gICAgICAgIGNhc2UgJ0lOU1RBTkNFJzpcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IGJpbmRpbmdzID0gW107IC8vVE9ETzogY2hpbGRyZW5cbiAgICAgICAgICAgIGxldCBjdXN0b21Db250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woaW5zdGFuY2VOb2RlLm5hbWUsIGJpbmRpbmdzKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRDb250cm9sID0geyBwYXJlbnQ6IGN1c3RvbUNvbnRyb2wsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZENvbnRyb2w7XG4gICAgICAgIGNhc2UgJ0NPTVBPTkVOVCc6XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAvLyBUT0RPOiBNYWtlIG5ldyByZXNvdXJjZSBmaWxlIC8gbmV3IHdpbmRvd1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRWaWV3ID0gbmV3IENvbnRlbnRWaWV3KG5vZGUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkQ29tcG9uZW50ID0geyBwYXJlbnQ6IGNvbnRlbnRWaWV3LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuZXN0ZWRDb21wb25lbnQuY2hpbGRyZW4ucHVzaChjaGVja05vZGVUeXBlKG4pKSk7XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQ29tcG9uZW50O1xuICAgICAgICBjYXNlICdTVEFSJzpcbiAgICAgICAgY2FzZSAnQk9PTEVBTl9PUEVSQVRJT04nOlxuICAgICAgICBjYXNlICdTTElDRSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUubm9uZSwgcHJvcGVydGllczogW10gfTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWQgPSB7IHBhcmVudDogZWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlVXR5cGVOb2Rlcyhubikge1xuICAgIGxldCBub2RlID0gbm4ucGFyZW50O1xuICAgIC8vY29uc29sZS5sb2coJ3RyYW5zbGF0aW5nIDogJywgbm9kZS51dHlwZSk7XG4gICAgLy8gQ2hlY2sgdGhlIG5vZGUncyB0eXBlIHVzaW5nIHRoZSAndHlwZScgcHJvcGVydHlcbiAgICBzd2l0Y2ggKG5vZGUudXR5cGUpIHtcbiAgICAgICAgY2FzZSAnQlVUVE9OJzpcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAgICAgICAgIG5uLnBhcmVudC51dHlwZSA9ICdOb25lJztcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tOb2RlVHlwZShubik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYnV0dG9uTm9kZSA9IG5vZGUubm9kZTtcbiAgICAgICAgICAgIGxldCBidXR0b25FbGVtZW50ID0gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChidXR0b25Ob2RlKTtcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5wdXNoKFRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlLm5vZGUsIGZhbHNlKSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkQnV0dG9uID0geyBwYXJlbnQ6IGJ1dHRvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gbi5wYXJlbnQubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0RWxlbWVudCA9IFRyYW5zbGF0ZVRleHRFbGVtZW50KGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LnByb3BlcnRpZXMuY29uY2F0KHRleHRFbGVtZW50LnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChjaGlsZE5vZGUudHlwZSA9PT0gJ1ZFQ1RPUicpIHx8IChuLnBhcmVudC51dHlwZSA9PT0gJ0lNQUdFJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZWN0b3JFbGVtZW50ID0gVHJhbnNsYXRlVmVjdG9yRWxlbWVudChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlQnV0dG9uRWxlbWVudCA9IFRyYW5zbGF0ZUltYWdlQnV0dG9uRWxlbWVudChidXR0b25Ob2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQnV0dG9uRWxlbWVudC5wcm9wZXJ0aWVzLmNvbmNhdCh2ZWN0b3JFbGVtZW50LnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFyZW50OiBpbWFnZUJ1dHRvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkTm9kZS50eXBlID09PSAnRUxMSVBTRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IGNoaWxkTm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3JuZXJSYWRpdXMgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db3JuZXJSYWRpdXMsIHZhbHVlOiAod2lkdGggLyAyKS50b1N0cmluZygpIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LnByb3BlcnRpZXMucHVzaChjb3JuZXJSYWRpdXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkTm9kZS50eXBlID09PSAnUkVDVEFOR0xFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNwID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEoY2hpbGROb2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyQ29sb3IsIHZhbHVlOiAoX2IgPSB0cmFuc2xhdGVTdHJva2VzVG9GaWdtYShjaGlsZE5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Cb3JkZXJXaWR0aCwgdmFsdWU6IHRyYW5zbGF0ZVN0cm9rZVdlaWdodChjaGlsZE5vZGUpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29ybmVyUmFkaXVzLCB2YWx1ZTogY2hlY2tDb3JuZXJSYWRpdXMoY2hpbGROb2RlKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5jb25jYXQoY3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQnV0dG9uO1xuICAgICAgICBjYXNlICdFRElUT1InOlxuICAgICAgICAgICAgbGV0IGVkaXRvck5vZGUgPSBub2RlLm5vZGU7XG4gICAgICAgICAgICBsZXQgZWRpdG9yRWxlbWVudCA9IFRyYW5zbGF0ZUVkaXRvckVsZW1lbnQoZWRpdG9yTm9kZSk7XG4gICAgICAgICAgICBlZGl0b3JFbGVtZW50LnByb3BlcnRpZXMucHVzaChUcmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZS5ub2RlLCBmYWxzZSkpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZEVkaXRvciA9IHsgcGFyZW50OiBlZGl0b3JFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIGlmIChubi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZSA9IG4ucGFyZW50Lm5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXJQcm9wID0geyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGxhY2Vob2xkZXIsIHZhbHVlOiBjaGlsZE5vZGUuY2hhcmFjdGVycyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2gocGxhY2Vob2xkZXJQcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEVkaXRvcjtcbiAgICAgICAgY2FzZSAnRU5UUlknOlxuICAgICAgICAgICAgbGV0IGVudHJ5Tm9kZSA9IG5vZGUubm9kZTtcbiAgICAgICAgICAgIGxldCBlbnRyeUVsZW1lbnQgPSBUcmFuc2xhdGVFbnRyeUVsZW1lbnQoZW50cnlOb2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRFbnRyeSA9IHsgcGFyZW50OiBlbnRyeUVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gbi5wYXJlbnQubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlclByb3AgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5QbGFjZWhvbGRlciwgdmFsdWU6IGNoaWxkTm9kZS5jaGFyYWN0ZXJzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeUVsZW1lbnQucHJvcGVydGllcy5wdXNoKHBsYWNlaG9sZGVyUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRFbnRyeTtcbiAgICAgICAgY2FzZSAnSU1BR0UnOlxuICAgICAgICAgICAgbGV0IHZlY3Rvck5vZGUgPSBub2RlLm5vZGU7XG4gICAgICAgICAgICBsZXQgdmVjdG9yRWxlbWVudCA9IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQodmVjdG9yTm9kZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkVmVjdG9yID0geyBwYXJlbnQ6IHZlY3RvckVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFZlY3RvcjtcbiAgICAgICAgY2FzZSAnQ0hFQ0tCT1gnOlxuICAgICAgICAgICAgbGV0IGNoZWNrQm94Tm9kZSA9IG5vZGUubm9kZTtcbiAgICAgICAgICAgIGxldCBjaGVja0JveEVsZW1lbnQgPSBUcmFuc2xhdGVDaGVja0JveEVsZW1lbnQoY2hlY2tCb3hOb2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRDaGVja0JveCA9IHsgcGFyZW50OiBjaGVja0JveEVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZENoZWNrQm94O1xuICAgICAgICBjYXNlICdTV0lUQ0gnOlxuICAgICAgICAgICAgbGV0IHN3aXRjaE5vZGUgPSBub2RlLm5vZGU7XG4gICAgICAgICAgICBsZXQgc3dpdGNoRWxlbWVudCA9IFRyYW5zbGF0ZVN3aXRjaEVsZW1lbnQoc3dpdGNoTm9kZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkU3dpdGNoID0geyBwYXJlbnQ6IHN3aXRjaEVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFN3aXRjaDtcbiAgICAgICAgY2FzZSAnU0xJREVSJzpcbiAgICAgICAgICAgIGxldCBzbGlkZXJOb2RlID0gbm9kZS5ub2RlO1xuICAgICAgICAgICAgbGV0IHNsaWRlckVsZW1lbnQgPSBUcmFuc2xhdGVTbGlkZXJFbGVtZW50KHNsaWRlck5vZGUpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZFNsaWRlciA9IHsgcGFyZW50OiBzbGlkZXJFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRTbGlkZXI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUubm9uZSwgcHJvcGVydGllczogW10gfTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWQgPSB7IHBhcmVudDogZWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZvcm1hdFN0YXJ0VGFnKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xuICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiAocHJvcC52YWx1ZSAhPT0gJ05vbmUnKSkgLy8gRXhjbHVkZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWUgJ05vbmUnIGJlY2F1c2UgdGhlbiBpdCBpcyBzZXQgdG8gZGVmYXVsdCB2YWx1ZVxuICAgICAgICAubWFwKChwcm9wKSA9PiBgJHtQcm9wZXJ0eU5hbWVbcHJvcC5uYW1lXX09XCIke3Byb3AudmFsdWV9XCJgKVxuICAgICAgICAuam9pbihgIFxcblxcdGApO1xuICAgIHJldHVybiBgPCR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0gJHtwcm9wZXJ0eVN0cmluZ30+XFxuYDtcbn1cbmZ1bmN0aW9uIGZvcm1hdFNob3J0VGFnKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xuICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiBwcm9wLnZhbHVlICE9PSAnTm9uZScpIC8vIEV4Y2x1ZGUgcHJvcGVydGllcyB3aXRoIHZhbHVlICdOb25lJyBiZWNhdXNlIHRoZW4gaXQgaXMgc2V0IHRvIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcbiAgICAgICAgLmpvaW4oXCIgXCIgKyBgXFxuXFx0YCk7XG4gICAgcmV0dXJuIGA8JHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfSAke3Byb3BlcnR5U3RyaW5nfS8+XFxuYDtcbn1cbmZ1bmN0aW9uIGZvcm1hdEVuZFRhZyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGA8LyR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0+XFxuYDtcbn1cbmZ1bmN0aW9uIFRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlLCBmaWxsKSB7XG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xuICAgICAgICBjb25zdCBmaWxscyA9IG5vZGUuZmlsbHM7XG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogUHJvcGVydHlOYW1lLkZpbGwsIHZhbHVlOiBjb2xvciB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFByb3BlcnR5TmFtZS5CYWNrZ3JvdW5kLCB2YWx1ZTogY29sb3IgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBuYW1lOiBQcm9wZXJ0eU5hbWUubm9uZSwgdmFsdWU6ICdOb25lJyB9O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgRmlnbWFOb2RlIH0gZnJvbSBcIi4vZmlnbWFOb2RlVHlwZXNcIjtcbmxldCBib3JkZXJFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5Cb3JkZXIsIHByb3BlcnRpZXM6IFtdIH07XG5sZXQgYmFja2dyb3VuZCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQmFja2dyb3VuZCwgcHJvcGVydGllczogW10gfTtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBjb25zdCBjb21tb25Qcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZVtcIng6TmFtZVwiXSwgdmFsdWU6IHRvQ2FtZWxDYXNlKG5vZGUubmFtZSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk9wYWNpdHksIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVPcGFjaXR5KG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSXNWaXNpYmxlLCB2YWx1ZTogYm9vbFRvRGVmYXVsdChub2RlLnZpc2libGUsIHRydWUpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogKF9iID0gdHJhbnNsYXRlTGF5b3V0QWxpZ24obm9kZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5WZXJ0aWNhbE9wdGlvbnMsIHZhbHVlOiAoX2MgPSB0cmFuc2xhdGVMYXlvdXRBbGlnbihub2RlKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJ05vbmUnIH0sXG4gICAgXTtcbiAgICByZXR1cm4gY29tbW9uUHJvcGVydGllcztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcgJykgLy8gU3BsaXQgdGhlIHN0cmluZyBieSBzcGFjZXNcbiAgICAgICAgLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgZmlyc3Qgd29yZCB0byBsb3dlcmNhc2UgYW5kIG90aGVycyB0byBjYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gd29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTsgLy8gSm9pbiBhbGwgcGFydHMgdG9nZXRoZXJcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxheW91dEFsaWduKG5vZGUpIHtcbiAgICBpZiAoJ2xheW91dEFsaWduJyBpbiBub2RlKSB7XG4gICAgICAgIHN3aXRjaCAobm9kZS5sYXlvdXRBbGlnbikge1xuICAgICAgICAgICAgY2FzZSBcIkNFTlRFUlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnQ2VudGVyJztcbiAgICAgICAgICAgIGNhc2UgXCJNQVhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0VuZCc7XG4gICAgICAgICAgICBjYXNlIFwiU1RSRVRDSFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnRmlsbCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVTdHJva2Uobm9kZSkge1xuICAgIC8vY29sb3JcbiAgICBpZiAoJ3N0cm9rZXMnIGluIG5vZGUpIHtcbiAgICAgICAgbm9kZS5zdHJva2VzLmZvckVhY2goc3Ryb2tlID0+IHtcbiAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PT0gJ1NPTElEJyAmJiAobm9kZS5zdHJva2VXZWlnaHQgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IHN0cm9rZS5jb2xvcjtcbiAgICAgICAgICAgICAgICBsZXQgc3Ryb2tlQ29sb3IgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2UsIHZhbHVlOiBgIyR7Y29sLnJ9JHtjb2wuZ30ke2NvbC5ifWAgfTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnByb3BlcnRpZXMucHVzaChzdHJva2VDb2xvcik7XG4gICAgICAgICAgICAgICAgbGV0IHN0cm9rZVdlaWdodCA9IHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZVRoaWNrbmVzcywgdmFsdWU6IGAke25vZGUuc3Ryb2tlV2VpZ2h0fWAgfTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnByb3BlcnRpZXMucHVzaChzdHJva2VXZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBib29sVG9EZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZU9wYWNpdHkobm9kZSkge1xuICAgIGlmICgnb3BhY2l0eScgaW4gbm9kZSkge1xuICAgICAgICBpZiAobm9kZS5vcGFjaXR5ID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlLm9wYWNpdHkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVDb3JuZXJSYWRpdXMobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgIT09IChGaWdtYU5vZGUuQ09NUE9ORU5UIHx8IEZpZ21hTm9kZS5DT01QT05FTlRfU0VUIHx8IEZpZ21hTm9kZS5GUkFNRSB8fCBGaWdtYU5vZGUuSU5TVEFOQ0UgfHwgRmlnbWFOb2RlLlJFQ1RBTkdMRSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc3Ryb2tlU2hhcGUgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VTaGFwZSwgdmFsdWU6IGBSb3VuZFJlY3RhbmdsZSAgJHtub2RlLnRvcExlZnRSYWRpdXN9LCAke25vZGUudG9wUmlnaHRSYWRpdXN9LCAke25vZGUuYm90dG9tTGVmdFJhZGl1c30sICR7bm9kZS5ib3R0b21SaWdodFJhZGl1c31gIH07XG4gICAgYm9yZGVyRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goc3Ryb2tlU2hhcGUpO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlU2hhZG93KG5vZGUpIHtcbiAgICBpZiAoJ2VmZmVjdHMnIGluIG5vZGUpIHtcbiAgICAgICAgbm9kZS5lZmZlY3RzLmZvckVhY2goZWZmZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gJ0RST1BfU0hBRE9XJykge1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBlZmZlY3QuY29sb3I7XG4gICAgICAgICAgICAgICAgbGV0IG9mZiA9IGVmZmVjdC5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgbGV0IHNoYWRvd1Byb3BlcnRpZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJydXNoLCB2YWx1ZTogYCMke2NvbC5yfSR7Y29sLmd9JHtjb2wuYn1gIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk9mZlNldCwgdmFsdWU6IGAke29mZi54fSwgJHtvZmYueX1gIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk9wYWNpdHksIHZhbHVlOiBgJHtjb2wuYX1gIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlJhZGl1cywgdmFsdWU6IGAke2VmZmVjdC5yYWRpdXN9YCB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogRWxlbWVudE5hbWUuU2hhZG93LCBwcm9wZXJ0aWVzOiBzaGFkb3dQcm9wZXJ0aWVzIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0KG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUubGF5b3V0TW9kZSkge1xuICAgICAgICBjYXNlIFwiSE9SSVpPTlRBTFwiOlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQobm9kZSk7XG4gICAgICAgIGNhc2UgXCJWRVJUSUNBTFwiOlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZVZlcnRpY2FsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUZsZXhMYXlvdXRFbGVtZW50KG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFRyYW5zbGF0ZUZsZXhMYXlvdXRFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZmxleExheW91dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIC8qIERldGVybWluZXMgd2hldGhlciB0aGlzIGxheWVyIHVzZXMgYXV0by1sYXlvdXQgdG8gcG9zaXRpb24gaXRzIGNoaWxkcmVuLiBEZWZhdWx0cyB0byBcIk5PTkVcIi4gKi9cbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQmFja2dyb3VuZCwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lW1wieDpOYW1lXCJdLCB2YWx1ZTogdG9DYW1lbENhc2Uobm9kZS5uYW1lKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKG5vZGUuaXRlbVNwYWNpbmcudG9TdHJpbmcoKSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnbkNvbnRlbnQsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYUFsaWduQ29udGVudChub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25JdGVtcywgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXMobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldyYXAsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYVdyYXBUb1hhbWxXcmFwKG5vZGUubGF5b3V0V3JhcCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuR3JvdywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLmxheW91dEdyb3cudG9TdHJpbmcoKSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25TZWxmLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyhub2RlLmxheW91dEFsaWduKSB9LFxuICAgIF07XG4gICAgY29uc3QgZmxleExheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkZsZXhMYXlvdXQsIHByb3BlcnRpZXM6IGZsZXhMYXlvdXRQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGZsZXhMYXlvdXRFbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJzAnKSB7XG4gICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gVHJhbnNsYXRlSG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcbiAgICBdO1xuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkhvcml6b250YWxTdGFja0xheW91dCwgcHJvcGVydGllczogaG9yaXpvbnRhbFN0YWNrTGF5b3V0UHJvcGVydGllcyB9O1xuICAgIHJldHVybiBob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50O1xufVxuZnVuY3Rpb24gVHJhbnNsYXRlVmVydGljYWxTdGFja0xheW91dEVsZW1lbnQobm9kZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQmFja2dyb3VuZCwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNwYWNpbmcsIHZhbHVlOiBub2RlLml0ZW1TcGFjaW5nLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxuICAgIF07XG4gICAgY29uc3QgdmVydGl2YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlZlcnRpY2FsU3RhY2tMYXlvdXQsIHByb3BlcnRpZXM6IHZlcnRpY2FsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkge1xuICAgIGlmICgncGFkZGluZ0xlZnQnIGluIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUucGFkZGluZ0xlZnQgPT0gbm9kZS5wYWRkaW5nUmlnaHQgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdUb3AgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdCb3R0b20pIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnBhZGRpbmdMZWZ0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bm9kZS5wYWRkaW5nTGVmdH0sICR7bm9kZS5wYWRkaW5nVG9wfSwgJHtub2RlLnBhZGRpbmdSaWdodH0sICR7bm9kZS5wYWRkaW5nQm90dG9tfSxgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnTm9uZSc7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYUFsaWduSXRlbXNUb1hhbWxBbGlnbkl0ZW1zKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIFwiTUFYXCI6XG4gICAgICAgICAgICByZXR1cm4gJ0VuZCc7XG4gICAgICAgIGNhc2UgXCJDRU5URVJcIjpcbiAgICAgICAgICAgIHJldHVybiAnQ2VudGVyJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFXcmFwVG9YYW1sV3JhcCh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSAnV1JBUCc6XG4gICAgICAgICAgICByZXR1cm4gJ1dyYXAnO1xuICAgICAgICBjYXNlICdOT19XUkFQJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFBbGlnbkNvbnRlbnQodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ1NQQUNFX0JFVFdFRU4nOlxuICAgICAgICAgICAgcmV0dXJuICdTcGFjZUJldHdlZW4nO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpIHtcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XG4gICAgICAgIGxldCB4YW1sU3RyaW5nID0gYC4ke0VsZW1lbnROYW1lLkJhY2tncm91bmR9YDtcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsbHMuZm9yRWFjaCgoZmlsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBmaWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQobm9kZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgZWxsaXBzZVByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZpbGwsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VUaGlja25lc3MsIHZhbHVlOiBub2RlLnN0cm9rZVdlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6IChfYiA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXG4gICAgXTtcbiAgICBjb25zdCBlbGxpcHNlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWxsaXBzZSwgcHJvcGVydGllczogZWxsaXBzZVByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XG4gICAgcmV0dXJuIGVsbGlwc2VFbGVtZW50O1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpIHtcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XG4gICAgICAgIGxldCB4YW1sU3RyaW5nID0gYC4ke0VsZW1lbnROYW1lLkJhY2tncm91bmR9YDtcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsbHMuZm9yRWFjaCgoZmlsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBmaWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlTGluZUVsZW1lbnQobm9kZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBsaW5lUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWDEsIHZhbHVlOiAnMCcgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTEsIHZhbHVlOiAnMCcgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWDIsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTIsIHZhbHVlOiBnZXRZZm9yWChub2RlKS50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZURhc2hBcnJheSwgdmFsdWU6IHRyYW5zbGF0ZURhc2gobm9kZSkgfSxcbiAgICAgICAgLy8gQWRkIG90aGVyIGxpbmUtcmVsYXRlZCBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxuICAgIF07XG4gICAgY29uc3QgbGluZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxpbmUsIHByb3BlcnRpZXM6IGxpbmVQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGxpbmVFbGVtZW50O1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlRGFzaChub2RlKSB7XG4gICAgcmV0dXJuIGAke25vZGUuZGFzaFBhdHRlcm5bMF19LCR7bm9kZS5kYXNoUGF0dGVyblsxXX1gO1xufVxuZnVuY3Rpb24gZ2V0WWZvclgobm9kZSkge1xuICAgIGxldCBsZW5ndGggPSBub2RlLndpZHRoO1xuICAgIGxldCByb3RhdGlvbiA9IG5vZGUucm90YXRpb247XG4gICAgLy8gQ29udmVydCB0aGUgcm90YXRpb24gYW5nbGUgZnJvbSBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAvLyBDb252ZXJ0IHRoZSByb3RhdGlvbiBhbmdsZSBmcm9tIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIGxldCB0aGV0YSA9IHJvdGF0aW9uICogKE1hdGguUEkgLyAxODApO1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgeS1jaGFuZ2UgdXNpbmcgc2luZSBvZiB0aGUgYW5nbGVcbiAgICBsZXQgaCA9IGxlbmd0aCAqIE1hdGguc2luKHRoZXRhKTtcbiAgICByZXR1cm4gaDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSB7XG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xuICAgICAgICBjb25zdCBmaWxscyA9IG5vZGUuZmlsbHM7XG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgIyR7c29saWRQYWludC5jb2xvci5yfSR7c29saWRQYWludC5jb2xvci5nfSR7c29saWRQYWludC5jb2xvci5ifWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgcmVjdGFuZ2xlUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzWCwgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLnRvcExlZnRSYWRpdXMpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlJhZGl1c1ksIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUobm9kZS5ib3R0b21SaWdodFJhZGl1cykgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRmlsbCwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH1cbiAgICBdO1xuICAgIGNvbnN0IHJlY3RhbmdsZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlJlY3RhbmdsZSwgcHJvcGVydGllczogcmVjdGFuZ2xlUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gcmVjdGFuZ2xlRWxlbWVudDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShuKSB7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpIHtcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XG4gICAgICAgIGxldCB4YW1sU3RyaW5nID0gYC4ke0VsZW1lbnROYW1lLkJhY2tncm91bmR9YDtcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsbHMuZm9yRWFjaCgoZmlsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBmaWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlVmVjdG9yRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgdmVjdG9yUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU291cmNlLCB2YWx1ZTogdHJhbnNsYXRlU291cmNlKG5vZGUpIH0sXG4gICAgXTtcbiAgICBjb25zdCB2ZWN0b3JFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5JbWFnZSwgcHJvcGVydGllczogdmVjdG9yUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gdmVjdG9yRWxlbWVudDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVNvdXJjZShub2RlKSB7XG4gICAgbGV0IHNvdXJjZW5hbWUgPSBub2RlLm5hbWUuc3BsaXQoJyAnKS5qb2luKCdfJykudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYCR7c291cmNlbmFtZX0ucG5nYDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVRleHRFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgIGNvbnN0IHRleHRQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5DaGFyYWN0ZXJTcGFjaW5nLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlTGV0dGVyU3BhY2luZyhub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdHRyaWJ1dGVzLCB2YWx1ZTogdHJhbnNsYXRlRm9udFdlaWdodFRvRm9udEF0dHJpYnV0ZXMobm9kZS5mb250V2VpZ2h0KSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250QXV0b1NjYWxpbmdFbmFibGVkLCB2YWx1ZTogdHJhbnNsYXRlVGV4dEF1dG9SZXNpemVUb0ZvbnRBdXRvU2NhbGluZ0VuYWJsZWQobm9kZS50ZXh0QXV0b1Jlc2l6ZSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udFNpemUsIHZhbHVlOiBub2RlLmZvbnRTaXplLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSG9yaXpvbnRhbFRleHRBbGlnbm1lbnQsIHZhbHVlOiB0cmFuc2xhdGVIb3Jpem9udGFsQWxpZ25tZW50KG5vZGUudGV4dEFsaWduSG9yaXpvbnRhbCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTGluZUJyZWFrTW9kZSwgdmFsdWU6IHRyYW5zbGF0ZVRleHRUcnVuY2F0aW9uVG9MaW5lQnJlYWtNb2RlKG5vZGUudGV4dFRydW5jYXRpb24pIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVIZWlnaHQsIHZhbHVlOiAoX2IgPSB0cmFuc2xhdGVMaW5lSGVpZ2h0KG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTWF4TGluZXMsIHZhbHVlOiAoX2QgPSAoX2MgPSBub2RlLm1heExpbmVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHQsIHZhbHVlOiBub2RlLmNoYXJhY3RlcnMgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dENvbG9yLCB2YWx1ZTogKF9lID0gZ2V0SGV4Q29sb3JGcm9tRmlsbChub2RlKSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHREZWNvcmF0aW9ucywgdmFsdWU6IHRyYW5zbGF0ZVRleHREZWNvcmF0aW9uVG9YQU1MKG5vZGUudGV4dERlY29yYXRpb24pIHx8ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0VHJhbnNmb3JtLCB2YWx1ZTogdHJhbnNsYXRlVGV4dENhc2VUb1hBTUwobm9kZS50ZXh0Q2FzZSkgfHwgJ05vbmUnIH0sXG4gICAgXTtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGFiZWwsIHByb3BlcnRpZXM6IHRleHRQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xuICAgIHJldHVybiB0ZXh0RWxlbWVudDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxpbmVIZWlnaHQobm9kZSkge1xuICAgIGxldCBsaCA9IG5vZGUubGluZUhlaWdodDtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGxoKSB7XG4gICAgICAgIHJldHVybiBsaC52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVMZXR0ZXJTcGFjaW5nKG5vZGUpIHtcbiAgICBsZXQgbHMgPSBub2RlLmxldHRlclNwYWNpbmcudmFsdWU7XG4gICAgaWYgKGxzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBscy50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZXhDb2xvckZyb21GaWxsKHRleHROb2RlKSB7XG4gICAgaWYgKCF0ZXh0Tm9kZSB8fCAhdGV4dE5vZGUuZmlsbHMgfHwgdGV4dE5vZGUuZmlsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmaWxsID0gdGV4dE5vZGUuZmlsbHNbMF07IC8vIFdlIGFzc3VtZSB0aGUgZmlyc3QgZmlsbCBpcyB0aGUgb25lIHdlIHdhbnRcbiAgICBpZiAoZmlsbCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIGNvbnN0IHNvbGlkRmlsbCA9IGZpbGw7XG4gICAgICAgIHJldHVybiByZ2JUb0hleChzb2xpZEZpbGwuY29sb3IpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmaWxsLnR5cGUuc3RhcnRzV2l0aCgnR1JBRElFTlQnKSkge1xuICAgICAgICAvLyBIYW5kbGUgZ3JhZGllbnQgZmlsbHMgKGlmIG5lZWRlZClcbiAgICAgICAgLy8gWW91IGNhbiBhZGQgbG9naWMgaGVyZSB0byBoYW5kbGUgZ3JhZGllbnQgZmlsbHNcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcmdiVG9IZXgocmdiKSB7XG4gICAgY29uc3QgciA9IE1hdGgucm91bmQocmdiLnIgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGcgPSBNYXRoLnJvdW5kKHJnYi5nICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBiID0gTWF0aC5yb3VuZChyZ2IuYiAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgbGV0IGNvbG9yID0gYCMke3J9JHtnfSR7Yn1gO1xuICAgIGlmIChjb2xvciA9PT0gJyMwMDAwMDAnKSB7XG4gICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcjtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRDYXNlVG9YQU1MKHRleHRDYXNlKSB7XG4gICAgc3dpdGNoICh0ZXh0Q2FzZSkge1xuICAgICAgICBjYXNlIFwiVVBQRVJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlVwcGVyY2FzZVwiO1xuICAgICAgICBjYXNlIFwiTE9XRVJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIkxvd2VyY2FzZVwiO1xuICAgICAgICBjYXNlIFwiVElUTEVcIjpcbiAgICAgICAgICAgIHJldHVybiBcIkNhcGl0YWxpemVcIjtcbiAgICAgICAgLy8gRmlnbWEgXCJPUklHSU5BTFwiIGNvcnJlc3BvbmRzIHRvIFwiTm9uZVwiIGluIFhBTUwsIHdoaWNoIGxlYXZlcyB0aGUgdGV4dCBjYXNlIGFzIGlzLlxuICAgICAgICBjYXNlIFwiT1JJR0lOQUxcIjpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjsgLy8gRGVmYXVsdCB0byBubyB0cmFuc2Zvcm1hdGlvblxuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHREZWNvcmF0aW9uVG9YQU1MKHRleHREZWNvcmF0aW9uKSB7XG4gICAgc3dpdGNoICh0ZXh0RGVjb3JhdGlvbikge1xuICAgICAgICBjYXNlIFwiU1RSSUtFVEhST1VHSFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiU3RyaWtldGhyb3VnaFwiO1xuICAgICAgICBjYXNlIFwiVU5ERVJMSU5FXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJVbmRlcmxpbmVcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlVGV4dFRydW5jYXRpb25Ub0xpbmVCcmVha01vZGUoZmlnbWFUZXh0VHJ1bmNhdGlvbikge1xuICAgIC8vT0JTICEgRG8gbm90IGZ1bGZpbGwgYWxsIExpbmVCcmVha01vZGVzIG9mIFhhbWwuIFNlZSBmb2xsb3dpbmcgbGluayBmb3IgbW9yZSBpbmZvIGFib3V0IExpbmVCcmVha01vZGU6IGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvYXBpL21pY3Jvc29mdC5tYXVpLmxpbmVicmVha21vZGU/dmlldz1uZXQtbWF1aS03LjBcbiAgICBzd2l0Y2ggKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcbiAgICAgICAgY2FzZSBcIkVORElOR1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiVGFpbFRydW5jYXRpb25cIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjsgLy8gRGVmYXVsdCB0byBOb1dyYXAgaWYgdGhlIHZhbHVlIGlzIG5vdCByZWNvZ25pemVkXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcbiAgICBzd2l0Y2ggKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcbiAgICAgICAgY2FzZSBcIk5PTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhbHNlXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIHdoZW4gcmV0dXJuaW5nIG5vbmUgaXQgd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHhhbWwgdGV4dCwgc2luY2UgaXQgaXMgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICB9XG59XG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdHJhbnNsYXRlIEZpZ21hIGhvcml6b250YWwgdGV4dCBhbGlnbm1lbnQgdG8gWEFNTFxuZnVuY3Rpb24gdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChhbGlnbikge1xuICAgIC8vVE9ETzogZml4IHRoaXMgdG8gY29ycmVjdCB4YW1sXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJDZW50ZXJcIjtcbiAgICAgICAgY2FzZSBcIlJJR0hUXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJSaWdodFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcyhmaWdtYUZvbnRXZWlnaHQpIHtcbiAgICBpZiAoZmlnbWFGb250V2VpZ2h0ID4gNDAwKSB7XG4gICAgICAgIHJldHVybiAnQm9sZCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgRmlnbWFOb2RlO1xuKGZ1bmN0aW9uIChGaWdtYU5vZGUpIHtcbiAgICBGaWdtYU5vZGVbXCJDT01QT05FTlRcIl0gPSBcIkNPTVBPTkVOVFwiO1xuICAgIEZpZ21hTm9kZVtcIkNPTVBPTkVOVF9TRVRcIl0gPSBcIkNPTVBPTkVOVF9TRVRcIjtcbiAgICBGaWdtYU5vZGVbXCJGUkFNRVwiXSA9IFwiRlJBTUVcIjtcbiAgICBGaWdtYU5vZGVbXCJJTlNUQU5DRVwiXSA9IFwiSU5TVEFOQ0VcIjtcbiAgICBGaWdtYU5vZGVbXCJSRUNUQU5HTEVcIl0gPSBcIlJFQ1RBTkdMRVwiO1xufSkoRmlnbWFOb2RlIHx8IChGaWdtYU5vZGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVCdXR0b25FbGVtZW50IH0gZnJvbSBcIi4vYnV0dG9uLTIteGFtbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUltYWdlQnV0dG9uRWxlbWVudChub2RlKSB7XG4gICAgbGV0IGJ1dHRvbkVsZW1lbnQgPSBUcmFuc2xhdGVCdXR0b25FbGVtZW50KG5vZGUpO1xuICAgIGxldCBpbWFnZUJ1dHRvblByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkltYWdlU291cmNlLCB2YWx1ZTogdHJhbnNsYXRlU291cmNlKG5vZGUpIH1cbiAgICBdO1xuICAgIGxldCBpbWFnZUJ1dHRvbkVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkltYWdlQnV0dG9uLCBwcm9wZXJ0aWVzOiBidXR0b25FbGVtZW50LnByb3BlcnRpZXMuY29uY2F0KGltYWdlQnV0dG9uUHJvcGVydGllcykgfTtcbiAgICByZXR1cm4gaW1hZ2VCdXR0b25FbGVtZW50O1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlU291cmNlKG5vZGUpIHtcbiAgICByZXR1cm4gYCR7bm9kZS5uYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2A7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmltcG9ydCB7IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSwgdHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZywgdHJhbnNsYXRlRmlsbHNUb0ZpZ21hIH0gZnJvbSBcIi4uL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXRcIjtcbmltcG9ydCB7IGdldEhleENvbG9yRnJvbUZpbGwsIHRyYW5zbGF0ZUZvbnRXZWlnaHRUb0ZvbnRBdHRyaWJ1dGVzLCB0cmFuc2xhdGVMZXR0ZXJTcGFjaW5nLCB0cmFuc2xhdGVUZXh0QXV0b1Jlc2l6ZVRvRm9udEF1dG9TY2FsaW5nRW5hYmxlZCwgdHJhbnNsYXRlVGV4dFRydW5jYXRpb25Ub0xpbmVCcmVha01vZGUgfSBmcm9tIFwiLi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVCdXR0b25FbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGxldCBidXR0b25Qcm9wZXJ0aWVzID0gW107XG4gICAgbGV0IGJ1dHRvbkVsZW1lbnQ7XG4gICAgaWYgKCdjaGlsZHJlbicgaW4gbm9kZSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGMudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1RFWFQnOlxuICAgICAgICAgICAgICAgICAgICBidXR0b25Qcm9wZXJ0aWVzID0gYnV0dG9uUHJvcGVydGllcy5jb25jYXQodGV4dFByb3BzKGMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBmcmFtZVByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Cb3JkZXJDb2xvciwgdmFsdWU6IChfYiA9IHRyYW5zbGF0ZVN0cm9rZXNUb0ZpZ21hKG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyV2lkdGgsIHZhbHVlOiB0cmFuc2xhdGVTdHJva2VXZWlnaHQobm9kZSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29ybmVyUmFkaXVzLCB2YWx1ZTogY2hlY2tDb3JuZXJSYWRpdXMobm9kZSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxuICAgIF07XG4gICAgYnV0dG9uUHJvcGVydGllcyA9IGJ1dHRvblByb3BlcnRpZXMuY29uY2F0KGZyYW1lUHJvcGVydGllcyk7XG4gICAgYnV0dG9uRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQnV0dG9uLCBwcm9wZXJ0aWVzOiBidXR0b25Qcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xuICAgIHJldHVybiBidXR0b25FbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVN0cm9rZXNUb0ZpZ21hKG5vZGUpIHtcbiAgICBpZiAoJ3N0cm9rZXMnIGluIG5vZGUpIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlcyA9IG5vZGUuc3Ryb2tlcztcbiAgICAgICAgaWYgKHN0cm9rZXMgJiYgc3Ryb2tlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzdHJva2VzLmZvckVhY2goKHN0cm9rZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IHN0cm9rZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVTdHJva2VXZWlnaHQobm9kZSkge1xuICAgIGlmICgnc3Ryb2tlV2VpZ2h0JyBpbiBub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLnN0cm9rZVdlaWdodC50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gJ05vbmUnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29ybmVyUmFkaXVzKG5vZGUpIHtcbiAgICBpZiAoJ2Nvcm5lclJhZGl1cycgaW4gbm9kZSkge1xuICAgICAgICBpZiAobm9kZS5jb3JuZXJSYWRpdXMgIT09IHVuZGVmaW5lZCAmJiBub2RlLmNvcm5lclJhZGl1cyAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29ybmVyUmFkaXVzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdOb25lJztcbn1cbmZ1bmN0aW9uIHRleHRQcm9wcyhub2RlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBsZXQgdGV4dFByb3AgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNoYXJhY3RlclNwYWNpbmcsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVMZXR0ZXJTcGFjaW5nKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udFNpemUsIHZhbHVlOiBub2RlLmZvbnRTaXplLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dCwgdmFsdWU6IG5vZGUuY2hhcmFjdGVycyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0Q29sb3IsIHZhbHVlOiAoX2IgPSBnZXRIZXhDb2xvckZyb21GaWxsKG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF0dHJpYnV0ZXMsIHZhbHVlOiB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcyhub2RlLmZvbnRXZWlnaHQpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdXRvU2NhbGluZ0VuYWJsZWQsIHZhbHVlOiB0cmFuc2xhdGVUZXh0QXV0b1Jlc2l6ZVRvRm9udEF1dG9TY2FsaW5nRW5hYmxlZChub2RlLnRleHRBdXRvUmVzaXplKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lQnJlYWtNb2RlLCB2YWx1ZTogdHJhbnNsYXRlVGV4dFRydW5jYXRpb25Ub0xpbmVCcmVha01vZGUobm9kZS50ZXh0VHJ1bmNhdGlvbikgfSxcbiAgICBdO1xuICAgIHJldHVybiB0ZXh0UHJvcDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUNoZWNrQm94RWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgY2hlY2tCb3hQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Jc0NoZWNrZWQsIHZhbHVlOiBcImZhbHNlXCIgfVxuICAgIF07XG4gICAgY29uc3QgY2hlY2tCb3hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5DaGVja0JveCwgcHJvcGVydGllczogY2hlY2tCb3hQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xuICAgIHJldHVybiBjaGVja0JveEVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRWRpdG9yRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgZWRpdG9yUHJvcGVydGllcyA9IFtdO1xuICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkVkaXRvciwgcHJvcGVydGllczogZWRpdG9yUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gZWRpdG9yRWxlbWVudDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFbnRyeUVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IGVudHJ5UHJvcGVydGllcyA9IFtdO1xuICAgIGNvbnN0IGVudHJ5RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRW50cnksIHByb3BlcnRpZXM6IGVudHJ5UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gZW50cnlFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlU2xpZGVyRWxlbWVudChub2RlKSB7XG4gICAgY29uc3Qgc2xpZGVyUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTWF4aW11bSwgdmFsdWU6IFwiMTBcIiB9XG4gICAgXTtcbiAgICBjb25zdCBzbGlkZXJFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5TbGlkZXIsIHByb3BlcnRpZXM6IHNsaWRlclByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XG4gICAgcmV0dXJuIHNsaWRlckVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVTd2l0Y2hFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBzd2l0Y2hQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Jc1RvZ2dsZWQsIHZhbHVlOiBcImZhbHNlXCIgfVxuICAgIF07XG4gICAgY29uc3Qgc3dpdGNoRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuU3dpdGNoLCBwcm9wZXJ0aWVzOiBzd2l0Y2hQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xuICAgIHJldHVybiBzd2l0Y2hFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBjbGFzcyBDdXN0b21Db250cm9sIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sTmFtZSwgYmluZGluZ3MpIHtcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnLz5cXG4nO1xuICAgICAgICB0aGlzLm5hbWUgPSB0b0NhbWVsQ2FzZShjb250cm9sTmFtZSk7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSBiaW5kaW5ncztcbiAgICAgICAgdGhpcy5zdGFydFRhZyA9IHRoaXMuRm9ybWF0U3RhcnRUYWcoKTtcbiAgICB9XG4gICAgZ2V0U3RhcnRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnICsgdGhpcy5uYW1lO1xuICAgIH1cbiAgICBnZXRFbmRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcbiAgICB9XG4gICAgRm9ybWF0U3RhcnRUYWcoKSB7XG4gICAgICAgIGxldCBzZXRCaW5kaW5ncyA9ICcnO1xuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goYiA9PiBzZXRCaW5kaW5ncyArIGAke2IubmFtZX0gPSAke2IudmFsdWV9XFxuYCk7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGNvbnRyb2w6JHt0aGlzLm5hbWV9ICR7c2V0QmluZGluZ3N9YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5zdGFydEVuZFRhZyA9ICc+JztcbiAgICAgICAgdGhpcy5jb250cm9scyA9ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSB0b0NhbWVsQ2FzZShjbGFzc05hbWUpO1xuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gRm9ybWF0UGFnZVN0YXJ0VGFnKGNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuZW5kVGFnID0gJ1xcbjwvQ29udGVudFBhZ2U+JztcbiAgICB9XG4gICAgZ2V0U3RhcnRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnICsgdGhpcy5zdGFydEVuZFRhZztcbiAgICB9XG4gICAgZ2V0RW5kVGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmRUYWc7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkQ29udHJvbChwYWdlKSB7XG4gICAgcGFnZS5zdGFydFRhZyA9IGAke3BhZ2Uuc3RhcnRUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM6Y29udHJvbHM9Y2xyLW5hbWVzcGFjZTpDdXN0b21Db250cm9sc1xcbmA7XG59XG5mdW5jdGlvbiBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGA8Q29udGVudFBhZ2UgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2RvdG5ldC8yMDIxL21hdWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zOng9XCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dpbmZ4LzIwMDkveGFtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeDpDbGFzcz0ke2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB4Ok5hbWU9JHtjbGFzc05hbWV9XFxuYDtcbn1cbiIsImltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XG5leHBvcnQgY2xhc3MgQ29udGVudFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz4nO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gJyc7XG4gICAgICAgIHRoaXMubmFtZSA9IHRvQ2FtZWxDYXNlKGNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnXFxuPC9Db250ZW50Vmlldz4nO1xuICAgIH1cbiAgICBnZXRTdGFydFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUYWcgKyB0aGlzLnN0YXJ0RW5kVGFnO1xuICAgIH1cbiAgICBnZXRFbmRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcbiAgICB9XG59XG5mdW5jdGlvbiBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGBcclxuICAgIC8vQ3JlYXRlIGEgZm9sZGVyIHVuZGVyIFJlc291cmNlcyBjYWxsZWQgXCJDdXN0b21Db250cm9sc1wiIGFuZCBtYWtlIGEgbmV3IFwiQ29udGVudFZpZXdcIiBpbiB0aGVyZSBcclxuICAgIDxDb250ZW50VmlldyB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vZG90bmV0LzIwMjEvbWF1aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM6eD1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd2luZngvMjAwOS94YW1sXCJcclxuICAgICAgICAgICAgICAgICAgICB4OkNsYXNzPUN1c3RvbUNvbnRyb2xzLiR7Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHg6TmFtZT0ke2NsYXNzTmFtZX1cXG5gO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQYXJzZUZpZ21hIH0gZnJvbSBcIi4vWGFtbFBhcnNlclwiO1xuLy8gc3JjL3BsdWdpbi50c1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA2MDAsIGhlaWdodDogNDAwIH0pO1xuZnVuY3Rpb24gbWFrZURpc3BsYXlOb2RlKF9ub2RlKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogX25vZGUubmFtZSwgdXR5cGU6ICdOb25lJywgbm9kZTogX25vZGUgfTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuVG9OZXN0ZWROb2Rlcyhjbikge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBjbi5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IG5uID0gdHJhdmVyc2UoYyk7XG4gICAgICAgIGxpc3QucHVzaChubik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG59XG5mdW5jdGlvbiB0cmF2ZXJzZShjbikge1xuICAgIGNvbnN0IGRuID0gbWFrZURpc3BsYXlOb2RlKGNuKTtcbiAgICBjb25zdCBubiA9IHtcbiAgICAgICAgcGFyZW50OiBkbixcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgaWYgKCdjaGlsZHJlbicgaW4gY24pIHtcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGhhcyBjaGlsZHJlbiwgd2UgbXVzdCBnbyB0aHJvdWdoIHRoZW0gYW5kIG1ha2UgdGhlbSBpbnRvIG5lc3RlZCBub2Rlc1xuICAgICAgICBubi5jaGlsZHJlbiA9IGNoaWxkcmVuVG9OZXN0ZWROb2Rlcyhjbi5jaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBubjtcbn1cbmNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbmlmIChzZWxlY3Rpb24gIT09IHVuZGVmaW5lZCB8fCBudWxsKSB7XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBtYWtlRGlzcGxheU5vZGUoc2VsZWN0aW9uKTtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGlmICgnY2hpbGRyZW4nIGluIHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3Rpb24uY2hpbGRyZW4uZm9yRWFjaChjID0+IGxpc3QucHVzaChjKSk7XG4gICAgfVxuICAgIGNvbnN0IG5vZGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXJlbnQ6IHJvb3ROb2RlLFxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuVG9OZXN0ZWROb2RlcyhsaXN0KSxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIGxldCBub2RlczJQYXJzZSA9IFtdO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogJ2luaXQnLCBub2RlcyB9KTtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ290IHRoaXMgZnJvbSB0aGUgVUlcIiwgbWVzc2FnZSk7XG4gICAgICAgIG5vZGVzMlBhcnNlID0gdXBkYXRlRGlzcGxheU5vZGVVVHlwZShub2RlcywgbWVzc2FnZSk7XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlOb2RlVVR5cGUoc2VsZWN0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIEJhc2VOb2RlLmlkIHRvIHNlbGVjdGVkVmFsdWVcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVNYXAgPSB7fTtcbiAgICAgICAgICAgIG1lc3NhZ2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVNYXBbaXRlbS5ub2RlLnBhcmVudC5ub2RlLmlkXSA9IGl0ZW0uc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGFycmF5IHRvIGhvbGQgdGhlIHVwZGF0ZWQgc2VsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkU2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICAvLyBSZWN1cnNpdmUgZnVuY3Rpb24gdG8gdXBkYXRlIG5vZGVzXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbihub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVNYXBbbm9kZS5wYXJlbnQubm9kZS5pZF07XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSB3aXRoIHVwZGF0ZWQgdXR5cGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFBhcmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbm9kZS5wYXJlbnQpLCB7IHV0eXBlOiBzZWxlY3RlZFZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IHVwZGF0ZWRQYXJlbnQsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHVwZGF0ZUNoaWxkcmVuKGNoaWxkKSkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIHVwZGF0ZSBpcyBuZWVkZWQsIHJldHVybiB0aGUgb3JpZ2luYWwgbm9kZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IG5vZGUucGFyZW50LCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB1cGRhdGVDaGlsZHJlbihjaGlsZCkpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5kIHVwZGF0ZSBub2RlcyBiYXNlZCBvbiB0aGUgbWVzc2FnZVxuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKG5lc3RlZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTm9kZSA9IHVwZGF0ZUNoaWxkcmVuKG5lc3RlZE5vZGUpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb24ucHVzaCh1cGRhdGVkTm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkU2VsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gUGFyc2VGaWdtYShub2RlczJQYXJzZSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJmaWxlSW5mb1wiLCB0ZXh0Q29udGVudCB9KTtcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9