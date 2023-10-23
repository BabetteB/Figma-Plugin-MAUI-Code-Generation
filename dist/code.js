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


















const INDENTATION_SPACES = 4;
function ParseFigma(nodes) {
    console.log('Parsing Nodes: ', nodes);
    let xamlCode = "";
    let rootnode = nodes[0];
    let contentPage = new _xaml_views_classes_xaml_page__WEBPACK_IMPORTED_MODULE_9__.ContentPage(rootnode.parent.node.name);
    let rootView = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.ScrollView, properties: [] };
    let rootLayout = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.VerticalStackLayout, properties: [] };
    xamlCode += contentPage.getStartTag() + `\n${formatStartTag(rootView)}\n` + `\n${formatStartTag(rootLayout)}\n`;
    rootnode.children.reverse().forEach(c => {
        xamlCode += formatNestedElement(checkNodeType(c), 2); // starting at level 2 for children of rootLayout
    });
    xamlCode += `\n${formatEndTag(rootLayout)}\n` + `\n${formatEndTag(rootView)}\n` + contentPage.getEndTag();
    return xamlCode;
}
function formatNestedElement(element, level = 0) {
    let result = '';
    if (element.parent instanceof _xaml_views_classes_xaml_custom_control__WEBPACK_IMPORTED_MODULE_6__.CustomControl) {
        // Assuming CustomControl's getStartTag and getEndTag methods handle indentation internally
        result += element.parent.getStartTag(level) + element.parent.getEndTag(level);
    }
    else if (element.parent instanceof _xaml_views_classes_xaml_view__WEBPACK_IMPORTED_MODULE_5__.ContentView) {
        // Assuming ContentView's getStartTag and getEndTag methods handle indentation internally
        let nestedComponent = '';
        element.children.forEach(c => {
            nestedComponent += formatNestedElement(c, level + 1); // Increment the level
        });
        result += element.parent.getStartTag(level) + `\n${nestedComponent}` + element.parent.getEndTag(level);
    }
    else {
        if (element.parent.name === _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.none) {
            return '';
        }
        if (element.children.length > 0) {
            // Start tag
            result += formatStartTag(element.parent, level);
            // Iterate over children and recursively call formatNestedElement on each child
            element.children.forEach(c => {
                result += formatNestedElement(c, level + 1); // Increment the level
            });
            // End tag
            result += formatEndTag(element.parent, level);
        }
        else {
            // For elements without children
            result += formatShortTag(element.parent, level);
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
            let frameNode = node;
            let frameElement = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(frameNode);
            // This will serve as the main nested element to return
            let nestedFrame = { parent: frameElement, children: [] };
            // Assign children directly to frameElement first
            nn.children.forEach(n => nestedFrame.children.push(checkNodeType(n)));
            // Handle the case when the frameNode has cornerRadius
            if (frameNode.cornerRadius !== 0) {
                let cornerRadius = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.StrokeShape, value: `RoundRectangle ${frameNode.topLeftRadius} ${frameNode.topRightRadius} ${frameNode.bottomLeftRadius} ${frameNode.bottomRightRadius}` };
                let borderElement = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.Border, properties: [cornerRadius] };
                // In this setup, the borderElement wraps the frameElement (which already has the children)
                nestedFrame = {
                    parent: borderElement,
                    children: [nestedFrame] // Note that we're wrapping the existing nestedFrame
                };
            }
            // Translate and add frame stroke if exists
            let frameStroke = translateStroke(frameNode);
            if (frameStroke !== null) {
                nestedFrame.children.push({ parent: frameStroke.parent, children: frameStroke.children });
            }
            return nestedFrame;
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
        case 'COMPONENT_SET':
            let componentSetNode = node.defaultVariant;
            console.log('componentSetNode: ', componentSetNode);
            // TODO: Make new resource file / new window
            let contentSetView = new _xaml_views_classes_xaml_view__WEBPACK_IMPORTED_MODULE_5__.ContentView(node.name);
            let rootLayout = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.VerticalStackLayout, properties: [] };
            let nestedComponentSet = { parent: contentSetView, children: [{ parent: rootLayout, children: [] }] };
            nn.children[0].children.forEach(n => nestedComponentSet.children.push(checkNodeType(n)));
            return nestedComponentSet;
        case 'COMPONENT':
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
            let nestedButton = { parent: { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.none, properties: [] }, children: [] };
            if (nn.children.length > 0) {
                nn.children.forEach(n => {
                    var _a, _b, _c, _d;
                    let childNode = n.parent.node;
                    if (childNode.type === 'TEXT') {
                        let textElement = (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.TranslateTextElement)(childNode);
                        buttonElement.properties.concat(textElement.properties);
                        nestedButton = { parent: buttonElement, children: [] };
                    }
                    else if ((childNode.type === 'VECTOR') || (n.parent.utype === 'IMAGE')) {
                        let vectorElement = (0,_figma_node_translation_shapes_vector_2_icon__WEBPACK_IMPORTED_MODULE_10__.TranslateVectorElement)(childNode);
                        let imageButtonElement = (0,_user_defined_types_translation_button_2_imagebutton__WEBPACK_IMPORTED_MODULE_17__.TranslateImageButtonElement)(buttonNode);
                        imageButtonElement.properties.concat(vectorElement.properties);
                        nestedButton = { parent: imageButtonElement, children: [] };
                    }
                    else if (childNode.type === 'ELLIPSE') {
                        let cp = [
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Background, value: (_a = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.getHexColorFromFillFrame)(childNode)) !== null && _a !== void 0 ? _a : 'None' },
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.BorderColor, value: (_b = (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.translateStrokesToFigma)(childNode)) !== null && _b !== void 0 ? _b : 'None' },
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.BorderWidth, value: (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.translateStrokeWeight)(childNode) },
                        ];
                        buttonElement.properties.concat(cp);
                        let width = childNode.width;
                        let cornerRadius = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.StrokeShape, value: `RoundRectangle ${(width / 2).toString()}` };
                        let borderElement = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.Border, properties: [cornerRadius] };
                        nestedButton = { parent: borderElement, children: [{ parent: buttonElement, children: [] }] };
                    }
                    else if (childNode.type === 'RECTANGLE') {
                        let cp = [
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Background, value: (_c = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.getHexColorFromFillFrame)(childNode)) !== null && _c !== void 0 ? _c : 'None' },
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.BorderColor, value: (_d = (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.translateStrokesToFigma)(childNode)) !== null && _d !== void 0 ? _d : 'None' },
                            { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.BorderWidth, value: (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.translateStrokeWeight)(childNode) },
                        ];
                        buttonElement.properties.concat(cp);
                        let cornerRadius = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.StrokeShape, value: `RoundRectangle ${(0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.checkCornerRadius)(childNode)}` };
                        let borderElement = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.Border, properties: [cornerRadius] };
                        nestedButton = { parent: borderElement, children: [{ parent: buttonElement, children: [] }] };
                    }
                });
            }
            else {
                nestedButton = { parent: buttonElement, children: [] };
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
function formatStartTag(element, level = 0) {
    const indent = ' '.repeat(level * INDENTATION_SPACES);
    const propertyString = element.properties
        .filter((prop) => (prop.value !== 'None'))
        .map((prop) => `\n${indent}    ${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join('');
    return `${indent}<${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]}${propertyString}>\n`;
}
function formatShortTag(element, level = 0) {
    const indent = ' '.repeat(level * INDENTATION_SPACES);
    const propertyString = element.properties
        .filter((prop) => prop.value !== 'None')
        .map((prop) => `\n${indent}    ${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join('');
    return `${indent}<${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]}${propertyString}/>\n`;
}
function formatEndTag(element, level = 0) {
    const indent = ' '.repeat(level * INDENTATION_SPACES);
    return `${indent}</${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]}>\n`;
}
function TranslateFillsToFigma(node, fill) {
    let property = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.none, value: 'None' };
    if ('fills' in node) {
        const fills = node.fills;
        if (fills && fills.length > 0) {
            const paint = fills[0]; // Take the first paint/fill for simplicity
            if (paint.type === 'SOLID') {
                const color = paint.color;
                const alpha = (paint.opacity || 1) * 255;
                property.value = `#${Math.round(alpha).toString(16).padStart(2, '0')}${Math.round(color.r * 255).toString(16).padStart(2, '0')}${Math.round(color.g * 255).toString(16).padStart(2, '0')}${Math.round(color.b * 255).toString(16).padStart(2, '0')}`;
                property.name = fill ? _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Fill : _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Background;
            }
            // TODO: Handle other paint types if necessary
        }
    }
    return property;
}
function translateStroke(node) {
    //color
    let borderElement = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.Border, properties: [] };
    if ('strokes' in node) {
        node.strokes.forEach(stroke => {
            if (stroke.type === 'SOLID' && (node.strokeWeight !== 0)) {
                let col = stroke.color;
                let strokeColor = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Stroke, value: `#${col.r}${col.g}${col.b}` };
                borderElement.properties.push(strokeColor);
                let strokeWeight = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.StrokeThickness, value: `${node.strokeWeight}` };
                borderElement.properties.push(strokeWeight);
                let innerLayout = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.VerticalStackLayout, properties: [] };
                return { parent: borderElement, children: [innerLayout] };
            }
        });
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
/* harmony export */   TranslateCommonProperties: () => (/* binding */ TranslateCommonProperties),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase)
/* harmony export */ });
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Property */ "./src/Property.ts");

function TranslateCommonProperties(node) {
    var _a, _b, _c;
    const commonProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName["x:Name"], value: toCamelCase(node.name) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Opacity, value: (_a = translateOpacity(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.IsVisible, value: boolToDefault(node.visible, true) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.HorizontalOptions, value: (_b = translateLayoutAlign(node)) !== null && _b !== void 0 ? _b : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.VerticalOptions, value: (_c = translateLayoutAlign(node)) !== null && _c !== void 0 ? _c : 'None' },
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


/***/ }),

/***/ "./src/figma-node-translation/frame-2-layout.ts":
/*!******************************************************!*\
  !*** ./src/figma-node-translation/frame-2-layout.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateFigmaFrameToXamlLayout: () => (/* binding */ TranslateFigmaFrameToXamlLayout),
/* harmony export */   getHexColorFromFillFrame: () => (/* binding */ getHexColorFromFillFrame),
/* harmony export */   translateDefaultNumberValue: () => (/* binding */ translateDefaultNumberValue),
/* harmony export */   translateFigmaPaddingToXAMLPadding: () => (/* binding */ translateFigmaPaddingToXAMLPadding)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");
/* harmony import */ var _text_2_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-2-label */ "./src/figma-node-translation/text-2-label.ts");




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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = getHexColorFromFillFrame(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignContent, value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignItems, value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Wrap, value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Grow, value: translateDefaultNumberValue(node.layoutGrow.toString()) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignSelf, value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
    ];
    const flexLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.FlexLayout, properties: flexLayoutProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = getHexColorFromFillFrame(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const horizontalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return horizontalStackLayoutElement;
}
function TranslateVerticalStackLayoutElement(node) {
    var _a;
    const verticalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = getHexColorFromFillFrame(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const vertivalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
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
function getHexColorFromFillFrame(node) {
    if ('fills' in node) {
        const fill = node.fills[0]; // We assume the first fill is the one we want
        if (fill === undefined)
            return null;
        if (fill.type === 'SOLID') {
            const solidFill = fill;
            return (0,_text_2_label__WEBPACK_IMPORTED_MODULE_3__.rgbToHex)(solidFill.color);
        }
        else if (fill.type.startsWith('GRADIENT')) {
            // Handle gradient fills (if needed)
            // You can add logic here to handle gradient fills
            return null;
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
/* harmony export */   rgbToHex: () => (/* binding */ rgbToHex),
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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_3__.getHexColorFromFillFrame)(node)) !== null && _a !== void 0 ? _a : 'None' },
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
/* harmony import */ var _xaml_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xaml-view */ "./src/xaml-views-classes/xaml-view.ts");


class CustomControl {
    constructor(controlName, bindings) {
        this.endTag = '/>\n';
        this.name = (0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(controlName);
        this.bindings = bindings;
        this.startTag = this.formatStartTag();
    }
    getStartTag(level = 0) {
        const indent = (0,_xaml_view__WEBPACK_IMPORTED_MODULE_1__.getIndentation)(level);
        return indent + this.startTag + this.name;
    }
    getEndTag(level = 0) {
        const indent = (0,_xaml_view__WEBPACK_IMPORTED_MODULE_1__.getIndentation)(level);
        return indent + this.endTag;
    }
    formatStartTag() {
        let setBindings = '';
        this.bindings.forEach(b => setBindings += `${b.name} = ${b.value}\n`);
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
                    x:Class=${className}Page
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
/* harmony export */   ContentView: () => (/* binding */ ContentView),
/* harmony export */   getIndentation: () => (/* binding */ getIndentation)
/* harmony export */ });
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");

class ContentView {
    constructor(className) {
        this.startEndTag = '>\n';
        this.controls = '';
        this.name = (0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(className);
        this.startTag = formatPageStartTag(className);
        this.endTag = '\n</ContentView>';
    }
    getStartTag(level = 0) {
        const indent = getIndentation(level);
        return indent + this.startTag + this.startEndTag;
    }
    getEndTag(level = 0) {
        const indent = getIndentation(level);
        return indent + this.endTag;
    }
}
function formatPageStartTag(className) {
    return `
    // Create a folder under Resources called "CustomControls" and make a new "ContentView" in there 
    <ContentView xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                 xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                 x:Class=CustomControls.${(0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_0__.toCamelCase)(className)}
                 x:Name="${className}"`;
}
// Helper function to return indentation
function getIndentation(level) {
    return '    '.repeat(level); // Assuming 4 spaces per level
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnBCSztBQUNGO0FBQzRFO0FBQ3hCO0FBQ2Y7QUFDaEI7QUFDWTtBQUN5QjtBQUNmO0FBQ3RCO0FBQzBCO0FBQ29FO0FBQ25FO0FBQ0Y7QUFDRTtBQUNBO0FBQ0k7QUFDUTtBQUNwRztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNFQUFXO0FBQ3JDLHFCQUFxQixNQUFNLGlEQUFXO0FBQ3RDLHVCQUF1QixNQUFNLGlEQUFXO0FBQ3hDLGlEQUFpRCx5QkFBeUIsV0FBVywyQkFBMkI7QUFDaEg7QUFDQSw4REFBOEQ7QUFDOUQsS0FBSztBQUNMLHFCQUFxQix5QkFBeUIsV0FBVyx1QkFBdUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0ZBQWE7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNFQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRSxTQUFTO0FBQ1QsMkRBQTJELGdCQUFnQjtBQUMzRTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUdBQStCO0FBQzlEO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE1BQU0sbURBQVksdUNBQXVDLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLDRCQUE0QixFQUFFLDRCQUE0QjtBQUMvTSxzQ0FBc0MsTUFBTSxpREFBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNERBQTREO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFNLGlEQUFXO0FBQ2xELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwRkFBb0I7QUFDbEQsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx5R0FBdUI7QUFDeEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnR0FBb0I7QUFDbEQsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrR0FBeUI7QUFDNUQsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixvQ0FBb0Msa0ZBQWE7QUFDakQsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0VBQVc7QUFDaEQsK0JBQStCLE1BQU0saURBQVc7QUFDaEQsdUNBQXVDLHFDQUFxQyxrQ0FBa0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxpREFBVztBQUM3QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQ7QUFDQSxpQ0FBaUMsVUFBVSxNQUFNLGlEQUFXLHVCQUF1QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBGQUFvQjtBQUM5RDtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsNENBQTRDLHFHQUFzQjtBQUNsRSxpREFBaUQsa0hBQTJCO0FBQzVFO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNLG1EQUFZLDBCQUEwQixnR0FBd0Isc0RBQXNEO0FBQ3hKLDhCQUE4QixNQUFNLG1EQUFZLDJCQUEyQix1R0FBdUIsc0RBQXNEO0FBQ3hKLDhCQUE4QixNQUFNLG1EQUFZLHFCQUFxQixxR0FBcUIsYUFBYTtBQUN2RztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTSxtREFBWSx1Q0FBdUMsdUJBQXVCO0FBQzdILDhDQUE4QyxNQUFNLGlEQUFXO0FBQy9ELHlDQUF5QyxvQ0FBb0MscUNBQXFDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNLG1EQUFZLDBCQUEwQixnR0FBd0Isc0RBQXNEO0FBQ3hKLDhCQUE4QixNQUFNLG1EQUFZLDJCQUEyQix1R0FBdUIsc0RBQXNEO0FBQ3hKLDhCQUE4QixNQUFNLG1EQUFZLHFCQUFxQixxR0FBcUIsYUFBYTtBQUN2RztBQUNBO0FBQ0EsNkNBQTZDLE1BQU0sbURBQVksdUNBQXVDLGlHQUFpQixZQUFZO0FBQ25JLDhDQUE4QyxNQUFNLGlEQUFXO0FBQy9ELHlDQUF5QyxvQ0FBb0MscUNBQXFDO0FBQ2xIO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0dBQXNCO0FBQ3REO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU0sbURBQVk7QUFDbEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvR0FBcUI7QUFDcEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU0sbURBQVk7QUFDbEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwR0FBd0I7QUFDMUQsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxpREFBVztBQUM3QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVyxFQUFFLG1EQUFZLFlBQVksSUFBSSxXQUFXO0FBQ2hGO0FBQ0EsY0FBYyxPQUFPLEdBQUcsaURBQVcsZUFBZSxFQUFFLGVBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXLEVBQUUsbURBQVksWUFBWSxJQUFJLFdBQVc7QUFDaEY7QUFDQSxjQUFjLE9BQU8sR0FBRyxpREFBVyxlQUFlLEVBQUUsZUFBZTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU8sSUFBSSxpREFBVyxlQUFlO0FBQ25EO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTSxtREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdEQUFnRCxFQUFFLHdEQUF3RCxFQUFFLHdEQUF3RCxFQUFFLHdEQUF3RDtBQUNuUSx1Q0FBdUMsbURBQVksUUFBUSxtREFBWTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU0saURBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsTUFBTSxtREFBWSxvQkFBb0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO0FBQ2hHO0FBQ0EscUNBQXFDLE1BQU0sbURBQVksNEJBQTRCLGtCQUFrQjtBQUNyRztBQUNBLG9DQUFvQyxNQUFNLGlEQUFXO0FBQ3JELHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFUwQztBQUNuQztBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksMkNBQTJDO0FBQ3ZFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BILFVBQVUsTUFBTSxtREFBWSxzREFBc0Q7QUFDbEYsVUFBVSxNQUFNLG1EQUFZLHNHQUFzRztBQUNsSSxVQUFVLE1BQU0sbURBQVksb0dBQW9HO0FBQ2hJO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdER5QztBQUNFO0FBQ3lCO0FBQzFCO0FBQ25DO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksbUdBQW1HO0FBQy9ILFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEgsVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksMEZBQTBGO0FBQ3RILFVBQVUsTUFBTSxtREFBWSw2REFBNkQ7QUFDekYsVUFBVSxNQUFNLG1EQUFZLHVFQUF1RTtBQUNuRyxVQUFVLE1BQU0sbURBQVksK0VBQStFO0FBQzNHO0FBQ0EsZ0NBQWdDLE1BQU0saURBQVcscURBQXFELGdGQUF5QjtBQUMvSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLG1HQUFtRztBQUMvSCxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFLFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEg7QUFDQSwyQ0FBMkMsTUFBTSxpREFBVywyRUFBMkUsZ0ZBQXlCO0FBQ2hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksbUdBQW1HO0FBQy9ILFVBQVUsTUFBTSxtREFBWSw4Q0FBOEM7QUFDMUUsVUFBVSxNQUFNLG1EQUFZLHdGQUF3RjtBQUNwSDtBQUNBLHlDQUF5QyxNQUFNLGlEQUFXLHVFQUF1RSxnRkFBeUI7QUFDMUo7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUIsSUFBSSxnQkFBZ0IsSUFBSSxrQkFBa0IsSUFBSSxtQkFBbUI7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0c0QztBQUNFO0FBQ3lCO0FBQ2hFO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSwwRkFBMEY7QUFDdEgsVUFBVSxNQUFNLG1EQUFZLHVEQUF1RDtBQUNuRixVQUFVLE1BQU0sbURBQVksNEZBQTRGO0FBQ3hIO0FBQ0EsNkJBQTZCLE1BQU0saURBQVcsK0NBQStDLGdGQUF5QjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBVyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDNUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUI0QztBQUNFO0FBQ3ZDO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSxpQkFBaUI7QUFDN0MsVUFBVSxNQUFNLG1EQUFZLGlCQUFpQjtBQUM3QyxVQUFVLE1BQU0sbURBQVksbUNBQW1DO0FBQy9ELFVBQVUsTUFBTSxtREFBWSx1Q0FBdUM7QUFDbkUsVUFBVSxNQUFNLG1EQUFZLDRGQUE0RjtBQUN4SCxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxpREFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQixHQUFHLG9CQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDNUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDNEM7QUFDRTtBQUN5QjtBQUNoRTtBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksa0VBQWtFO0FBQzlGLFVBQVUsTUFBTSxtREFBWSxzRUFBc0U7QUFDbEcsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsK0JBQStCLE1BQU0saURBQVcsbURBQW1ELGdGQUF5QjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVcsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQzVGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzRDO0FBQ0U7QUFDeUI7QUFDaEU7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSx1Q0FBdUM7QUFDbkU7QUFDQSw0QkFBNEIsTUFBTSxpREFBVyw0Q0FBNEMsZ0ZBQXlCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNieUM7QUFDRTtBQUN5QjtBQUM3RDtBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksdUdBQXVHO0FBQ25JLFVBQVUsTUFBTSxtREFBWSw4RUFBOEU7QUFDMUcsVUFBVSxNQUFNLG1EQUFZLHNHQUFzRztBQUNsSSxVQUFVLE1BQU0sbURBQVksNENBQTRDO0FBQ3hFLFVBQVUsTUFBTSxtREFBWSx5RkFBeUY7QUFDckgsVUFBVSxNQUFNLG1EQUFZLG9GQUFvRjtBQUNoSCxVQUFVLE1BQU0sbURBQVksOEZBQThGO0FBQzFILFVBQVUsTUFBTSxtREFBWSwwSUFBMEk7QUFDdEssVUFBVSxNQUFNLG1EQUFZLCtCQUErQjtBQUMzRCxVQUFVLE1BQU0sbURBQVksNkZBQTZGO0FBQ3pILFVBQVUsTUFBTSxtREFBWSx1RkFBdUY7QUFDbkgsVUFBVSxNQUFNLG1EQUFZLHlFQUF5RTtBQUNyRztBQUNBLDBCQUEwQixNQUFNLGlEQUFXLDBDQUEwQyxnRkFBeUI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIeUM7QUFDRTtBQUNjO0FBQ2xEO0FBQ1Asd0JBQXdCLHNFQUFzQjtBQUM5QztBQUNBLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLCtCQUErQixNQUFNLGlEQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0JBQXdCO0FBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J5QztBQUNFO0FBQ3lCO0FBQ2lGO0FBQzhFO0FBQzVOO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksMEJBQTBCLGdHQUF3QixpREFBaUQ7QUFDL0gsVUFBVSxNQUFNLG1EQUFZLG1HQUFtRztBQUMvSCxVQUFVLE1BQU0sbURBQVksa0RBQWtEO0FBQzlFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLGlCQUFpQixtR0FBMkIsQ0FBQywwR0FBa0MsU0FBUztBQUNwSDtBQUNBO0FBQ0Esc0JBQXNCLE1BQU0saURBQVcsNkNBQTZDLGdGQUF5QjtBQUM3RztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDNUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLGdDQUFnQyw0RkFBc0IsaURBQWlEO0FBQ25JLFVBQVUsTUFBTSxtREFBWSw0Q0FBNEM7QUFDeEUsVUFBVSxNQUFNLG1EQUFZLCtCQUErQjtBQUMzRCxVQUFVLE1BQU0sbURBQVkseUJBQXlCLHlGQUFtQixpREFBaUQ7QUFDekgsVUFBVSxNQUFNLG1EQUFZLHdCQUF3Qix5R0FBbUMsbUJBQW1CO0FBQzFHLFVBQVUsTUFBTSxtREFBWSxnQ0FBZ0MscUhBQStDLHVCQUF1QjtBQUNsSSxVQUFVLE1BQU0sbURBQVksdUJBQXVCLDRHQUFzQyx1QkFBdUI7QUFDaEg7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRXlDO0FBQ0U7QUFDeUI7QUFDN0Q7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDhCQUE4QixNQUFNLGlEQUFXLGlEQUFpRCxnRkFBeUI7QUFDekg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeUM7QUFDMkI7QUFDN0Q7QUFDUDtBQUNBLDRCQUE0QixNQUFNLGlEQUFXLDZDQUE2QyxnRkFBeUI7QUFDbkg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDMkI7QUFDN0Q7QUFDUDtBQUNBLDJCQUEyQixNQUFNLGlEQUFXLDJDQUEyQyxnRkFBeUI7QUFDaEg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0U7QUFDeUI7QUFDN0Q7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDRCQUE0QixNQUFNLGlEQUFXLDZDQUE2QyxnRkFBeUI7QUFDbkg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQ0U7QUFDeUI7QUFDN0Q7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDRCQUE0QixNQUFNLGlEQUFXLDZDQUE2QyxnRkFBeUI7QUFDbkg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUc0Q7QUFDVDtBQUN0QztBQUNQO0FBQ0E7QUFDQSxvQkFBb0Isa0VBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBEQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFFBQVEsSUFBSSxRQUFRO0FBQ3pFO0FBQ0EsbUJBQW1CLFdBQVcsRUFBRSxZQUFZO0FBQzVDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnNEO0FBQy9DO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtFQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDLDZCQUE2QixVQUFVO0FBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCc0Q7QUFDL0M7QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0VBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrRUFBVztBQUNyRCwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ087QUFDUCxpQ0FBaUM7QUFDakM7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQztBQUMxQztBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0Usa0JBQWtCLHNCQUFzQjtBQUNoSCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLHVEQUFVO0FBQ3RDLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9FbGVtZW50LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9Qcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvWGFtbFBhcnNlci50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvY29tbW9uUHJvcGVydHlQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2VsbGlwc2UtMi1lbGxpcHNlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9saW5lLTItbGluZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy92ZWN0b3ItMi1pY29uLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2J1dHRvbi0yLWltYWdlYnV0dG9uLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vYnV0dG9uLTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2NoZWNrQm94LTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2VkaXRvci0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lbnRyeS0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9zbGlkZXItMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vc3dpdGNoLTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMveGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtY3VzdG9tLWNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXZpZXcudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBFbGVtZW50TmFtZTtcclxuKGZ1bmN0aW9uIChFbGVtZW50TmFtZSkge1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJub25lXCJdID0gMF0gPSBcIm5vbmVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSW1hZ2VCdXR0b25cIl0gPSAxXSA9IFwiSW1hZ2VCdXR0b25cIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQ29sbGVjdGlvblZpZXdcIl0gPSAyXSA9IFwiQ29sbGVjdGlvblZpZXdcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQmFja2dyb3VuZFwiXSA9IDNdID0gXCJCYWNrZ3JvdW5kXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxpbmVhckdyYWRpZW50QnJ1c2hcIl0gPSA0XSA9IFwiTGluZWFyR3JhZGllbnRCcnVzaFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJSYWRpYWxHcmFkaWVudEJydXNoXCJdID0gNV0gPSBcIlJhZGlhbEdyYWRpZW50QnJ1c2hcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiR3JhZGllbnRTdG9wXCJdID0gNl0gPSBcIkdyYWRpZW50U3RvcFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJTaGFkb3dcIl0gPSA3XSA9IFwiU2hhZG93XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxhYmVsXCJdID0gOF0gPSBcIkxhYmVsXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkJ1dHRvblwiXSA9IDldID0gXCJCdXR0b25cIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRWRpdG9yXCJdID0gMTBdID0gXCJFZGl0b3JcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRW50cnlcIl0gPSAxMV0gPSBcIkVudHJ5XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlN0YWNrRnJhbWVcIl0gPSAxMl0gPSBcIlN0YWNrRnJhbWVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGV4dEJsb2NrXCJdID0gMTNdID0gXCJUZXh0QmxvY2tcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGV4dEJveFwiXSA9IDE0XSA9IFwiVGV4dEJveFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDb21ib0JveFwiXSA9IDE1XSA9IFwiQ29tYm9Cb3hcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUmFkaW9CdXR0b25cIl0gPSAxNl0gPSBcIlJhZGlvQnV0dG9uXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNoZWNrQm94XCJdID0gMTddID0gXCJDaGVja0JveFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJJbWFnZVwiXSA9IDE4XSA9IFwiSW1hZ2VcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQm9yZGVyXCJdID0gMTldID0gXCJCb3JkZXJcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2Nyb2xsVmlld1wiXSA9IDIwXSA9IFwiU2Nyb2xsVmlld1wiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQcm9ncmVzc0JhclwiXSA9IDIxXSA9IFwiUHJvZ3Jlc3NCYXJcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2xpZGVyXCJdID0gMjJdID0gXCJTbGlkZXJcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU3dpdGNoXCJdID0gMjNdID0gXCJTd2l0Y2hcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGFiQ29udHJvbFwiXSA9IDI0XSA9IFwiVGFiQ29udHJvbFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJJdGVtXCJdID0gMjVdID0gXCJUYWJJdGVtXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIk1lbnVcIl0gPSAyNl0gPSBcIk1lbnVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTWVudUl0ZW1cIl0gPSAyN10gPSBcIk1lbnVJdGVtXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbnRleHRNZW51XCJdID0gMjhdID0gXCJDb250ZXh0TWVudVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQb3B1cFwiXSA9IDI5XSA9IFwiUG9wdXBcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUmVjdGFuZ2xlXCJdID0gMzBdID0gXCJSZWN0YW5nbGVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRWxsaXBzZVwiXSA9IDMxXSA9IFwiRWxsaXBzZVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQb2x5Z29uXCJdID0gMzJdID0gXCJQb2x5Z29uXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxpbmVcIl0gPSAzM10gPSBcIkxpbmVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSG9yaXpvbnRhbFN0YWNrTGF5b3V0XCJdID0gMzRdID0gXCJIb3Jpem9udGFsU3RhY2tMYXlvdXRcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVmVydGljYWxTdGFja0xheW91dFwiXSA9IDM1XSA9IFwiVmVydGljYWxTdGFja0xheW91dFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJGbGV4TGF5b3V0XCJdID0gMzZdID0gXCJGbGV4TGF5b3V0XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZyYW1lXCJdID0gMzddID0gXCJGcmFtZVwiO1xyXG59KShFbGVtZW50TmFtZSB8fCAoRWxlbWVudE5hbWUgPSB7fSkpO1xyXG4iLCJleHBvcnQgdmFyIFByb3BlcnR5TmFtZTtcclxuKGZ1bmN0aW9uIChQcm9wZXJ0eU5hbWUpIHtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VEYXNoQXJyYXlcIl0gPSAwXSA9IFwiU3Ryb2tlRGFzaEFycmF5XCI7XHJcbiAgICAvL3JlY3RhbmdsZVxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJhZGl1c1hcIl0gPSAxXSA9IFwiUmFkaXVzWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJhZGl1c1lcIl0gPSAyXSA9IFwiUmFkaXVzWVwiO1xyXG4gICAgLy8gdmVjdG9yP1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNlbnRlclwiXSA9IDNdID0gXCJDZW50ZXJcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJFbmRQb2ludFwiXSA9IDRdID0gXCJFbmRQb2ludFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbG9yXCJdID0gNV0gPSBcIkNvbG9yXCI7XHJcbiAgICAvL1NoYWRvd1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJydXNoXCJdID0gNl0gPSBcIkJydXNoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT2ZmU2V0XCJdID0gN10gPSBcIk9mZlNldFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJhZGl1c1wiXSA9IDhdID0gXCJSYWRpdXNcIjtcclxuICAgIC8vQ29tbW9uXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxPcHRpb25zXCJdID0gOV0gPSBcIlZlcnRpY2FsT3B0aW9uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhvcml6b250YWxPcHRpb25zXCJdID0gMTBdID0gXCJIb3Jpem9udGFsT3B0aW9uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJhY2tncm91bmRcIl0gPSAxMV0gPSBcIkJhY2tncm91bmRcIjtcclxuICAgIC8vTWFyZ2luIGlzIG5vdCBwb3NzaWJsZSB0byBoYXZlIG9uIGEgZmlnbWEgbm9kZVxyXG4gICAgLy9CdXR0b25cclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCb3JkZXJXaWR0aFwiXSA9IDEyXSA9IFwiQm9yZGVyV2lkdGhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50TGF5b3V0XCJdID0gMTNdID0gXCJDb250ZW50TGF5b3V0XCI7XHJcbiAgICAvL0xhYmVsXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2hhcmFjdGVyU3BhY2luZ1wiXSA9IDE0XSA9IFwiQ2hhcmFjdGVyU3BhY2luZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRBdHRyaWJ1dGVzXCJdID0gMTVdID0gXCJGb250QXR0cmlidXRlc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRBdXRvU2NhbGluZ0VuYWJsZWRcIl0gPSAxNl0gPSBcIkZvbnRBdXRvU2NhbGluZ0VuYWJsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250RmFtaWx5XCJdID0gMTddID0gXCJGb250RmFtaWx5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFNpemVcIl0gPSAxOF0gPSBcIkZvbnRTaXplXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9ybWF0dGVkVGV4dFwiXSA9IDE5XSA9IFwiRm9ybWF0dGVkVGV4dFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhvcml6b250YWxUZXh0QWxpZ25tZW50XCJdID0gMjBdID0gXCJIb3Jpem9udGFsVGV4dEFsaWdubWVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxpbmVCcmVha01vZGVcIl0gPSAyMV0gPSBcIkxpbmVCcmVha01vZGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMaW5lSGVpZ2h0XCJdID0gMjJdID0gXCJMaW5lSGVpZ2h0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4TGluZXNcIl0gPSAyM10gPSBcIk1heExpbmVzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGFkZGluZ1wiXSA9IDI0XSA9IFwiUGFkZGluZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRcIl0gPSAyNV0gPSBcIlRleHRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0Q29sb3JcIl0gPSAyNl0gPSBcIlRleHRDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHREZWNvcmF0aW9uc1wiXSA9IDI3XSA9IFwiVGV4dERlY29yYXRpb25zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dFRyYW5zZm9ybVwiXSA9IDI4XSA9IFwiVGV4dFRyYW5zZm9ybVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRUeXBlXCJdID0gMjldID0gXCJUZXh0VHlwZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsVGV4dEFsaWdubWVudFwiXSA9IDMwXSA9IFwiVmVydGljYWxUZXh0QWxpZ25tZW50XCI7XHJcbiAgICAvL0ZyYW1lXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3BhY2luZ1wiXSA9IDMxXSA9IFwiU3BhY2luZ1wiO1xyXG4gICAgLy9GbGV4TGF5b3V0XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWxpZ25Db250ZW50XCJdID0gMzJdID0gXCJBbGlnbkNvbnRlbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbGlnbkl0ZW1zXCJdID0gMzNdID0gXCJBbGlnbkl0ZW1zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRGlyZWN0aW9uXCJdID0gMzRdID0gXCJEaXJlY3Rpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJKdXN0aWZ5Q29udGVudFwiXSA9IDM1XSA9IFwiSnVzdGlmeUNvbnRlbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQb3NpdGlvblwiXSA9IDM2XSA9IFwiUG9zaXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJXcmFwXCJdID0gMzddID0gXCJXcmFwXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWxpZ25TZWxmXCJdID0gMzhdID0gXCJBbGlnblNlbGZcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCYXNpc1wiXSA9IDM5XSA9IFwiQmFzaXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm93XCJdID0gNDBdID0gXCJHcm93XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT3JkZXJcIl0gPSA0MV0gPSBcIk9yZGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2hyaW5rXCJdID0gNDJdID0gXCJTaHJpbmtcIjtcclxuICAgIC8vUG9seWdvblxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBvaW50c1wiXSA9IDQzXSA9IFwiUG9pbnRzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRmlsbFwiXSA9IDQ0XSA9IFwiRmlsbFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZpbGxSdWxlXCJdID0gNDVdID0gXCJGaWxsUnVsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0cm9rZVwiXSA9IDQ2XSA9IFwiU3Ryb2tlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlVGhpY2tuZXNzXCJdID0gNDddID0gXCJTdHJva2VUaGlja25lc3NcIjtcclxuICAgIC8vTGluZVxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlgxXCJdID0gNDhdID0gXCJYMVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlgyXCJdID0gNDldID0gXCJYMlwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlkxXCJdID0gNTBdID0gXCJZMVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlkyXCJdID0gNTFdID0gXCJZMlwiO1xyXG4gICAgLy9Cb3JkZXJcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VTaGFwZVwiXSA9IDUyXSA9IFwiU3Ryb2tlU2hhcGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXR0cmlidXRlXCJdID0gNTNdID0gXCJGb250QXR0cmlidXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wibm9uZVwiXSA9IDU0XSA9IFwibm9uZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIng6TmFtZVwiXSA9IDU1XSA9IFwieDpOYW1lXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9yZWdyb3VuZENvbG9yXCJdID0gNTZdID0gXCJGb3JlZ3JvdW5kQ29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCb3JkZXJDb2xvclwiXSA9IDU3XSA9IFwiQm9yZGVyQ29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCb3JkZXJUaGlja25lc3NcIl0gPSA1OF0gPSBcIkJvcmRlclRoaWNrbmVzc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZpc2liaWxpdHlcIl0gPSA1OV0gPSBcIlZpc2liaWxpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRcIl0gPSA2MF0gPSBcIklzRW5hYmxlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVhZE9ubHlcIl0gPSA2MV0gPSBcIklzUmVhZE9ubHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250V2VpZ2h0XCJdID0gNjJdID0gXCJGb250V2VpZ2h0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFN0eWxlXCJdID0gNjNdID0gXCJGb250U3R5bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0QWxpZ25tZW50XCJdID0gNjRdID0gXCJUZXh0QWxpZ25tZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSW1hZ2VTb3VyY2VcIl0gPSA2NV0gPSBcIkltYWdlU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU291cmNlXCJdID0gNjZdID0gXCJTb3VyY2VcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsQWxpZ25tZW50XCJdID0gNjddID0gXCJIb3Jpem9udGFsQWxpZ25tZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxBbGlnbm1lbnRcIl0gPSA2OF0gPSBcIlZlcnRpY2FsQWxpZ25tZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT3BhY2l0eVwiXSA9IDY5XSA9IFwiT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbW1hbmRcIl0gPSA3MF0gPSBcIkNvbW1hbmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb21tYW5kUGFyYW1ldGVyXCJdID0gNzFdID0gXCJDb21tYW5kUGFyYW1ldGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNDaGVja2VkXCJdID0gNzJdID0gXCJJc0NoZWNrZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50XCJdID0gNzNdID0gXCJDb250ZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVhZGVyXCJdID0gNzRdID0gXCJIZWFkZXJcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclRleHRcIl0gPSA3NV0gPSBcIlBsYWNlaG9sZGVyVGV4dFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYWNlaG9sZGVyVGV4dENvbG9yXCJdID0gNzZdID0gXCJQbGFjZWhvbGRlclRleHRDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVwiXSA9IDc3XSA9IFwiSXNWaXNpYmxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNGb2N1c2VkXCJdID0gNzhdID0gXCJJc0ZvY3VzZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1NlbGVjdGVkXCJdID0gNzldID0gXCJJc1NlbGVjdGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNTb3VyY2VcIl0gPSA4MF0gPSBcIkl0ZW1zU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbVRlbXBsYXRlXCJdID0gODFdID0gXCJJdGVtVGVtcGxhdGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclwiXSA9IDgyXSA9IFwiUGxhY2Vob2xkZXJcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEluZGV4XCJdID0gODNdID0gXCJTZWxlY3RlZEluZGV4XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluaW11bVwiXSA9IDg0XSA9IFwiTWluaW11bVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heGltdW1cIl0gPSA4NV0gPSBcIk1heGltdW1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWYWx1ZVwiXSA9IDg2XSA9IFwiVmFsdWVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1RvZ2dsZWRcIl0gPSA4N10gPSBcIklzVG9nZ2xlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvcm5lclJhZGl1c1wiXSA9IDg4XSA9IFwiQ29ybmVyUmFkaXVzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQYXNzd29yZFwiXSA9IDg5XSA9IFwiSXNQYXNzd29yZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVhZE9ubHlDYXJldFZpc2libGVcIl0gPSA5MF0gPSBcIklzUmVhZE9ubHlDYXJldFZpc2libGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtc1wiXSA9IDkxXSA9IFwiSXRlbXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc09wZW5cIl0gPSA5Ml0gPSBcIklzT3BlblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRWRpdGFibGVcIl0gPSA5M10gPSBcIklzRWRpdGFibGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJEaXNwbGF5TWVtYmVyUGF0aFwiXSA9IDk0XSA9IFwiRGlzcGxheU1lbWJlclBhdGhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZFZhbHVlXCJdID0gOTVdID0gXCJTZWxlY3RlZFZhbHVlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRWYWx1ZVBhdGhcIl0gPSA5Nl0gPSBcIlNlbGVjdGVkVmFsdWVQYXRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVhZGVyVGVtcGxhdGVcIl0gPSA5N10gPSBcIkhlYWRlclRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9vdGVyVGVtcGxhdGVcIl0gPSA5OF0gPSBcIkZvb3RlclRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSWNvblwiXSA9IDk5XSA9IFwiSWNvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkljb25Tb3VyY2VcIl0gPSAxMDBdID0gXCJJY29uU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBOYW1lXCJdID0gMTAxXSA9IFwiR3JvdXBOYW1lXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2FuVXNlclNvcnRcIl0gPSAxMDJdID0gXCJDYW5Vc2VyU29ydFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNhblVzZXJGaWx0ZXJcIl0gPSAxMDNdID0gXCJDYW5Vc2VyRmlsdGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1wiXSA9IDEwNF0gPSBcIkNvbHVtbnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dzXCJdID0gMTA1XSA9IFwiUm93c1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbkRlZmluaXRpb25zXCJdID0gMTA2XSA9IFwiQ29sdW1uRGVmaW5pdGlvbnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dEZWZpbml0aW9uc1wiXSA9IDEwN10gPSBcIlJvd0RlZmluaXRpb25zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2VsbFBhZGRpbmdcIl0gPSAxMDhdID0gXCJDZWxsUGFkZGluZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd1NwYW5cIl0gPSAxMDldID0gXCJSb3dTcGFuXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uU3BhblwiXSA9IDExMF0gPSBcIkNvbHVtblNwYW5cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0hlYWRlclZpc2libGVcIl0gPSAxMTFdID0gXCJJc0hlYWRlclZpc2libGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1NvcnRhYmxlXCJdID0gMTEyXSA9IFwiSXNTb3J0YWJsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNvcnREaXJlY3Rpb25cIl0gPSAxMTNdID0gXCJTb3J0RGlyZWN0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBIZWFkZXJUZW1wbGF0ZVwiXSA9IDExNF0gPSBcIkdyb3VwSGVhZGVyVGVtcGxhdGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclRlbXBsYXRlXCJdID0gMTE1XSA9IFwiR3JvdXBGb290ZXJUZW1wbGF0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwU3R5bGVcIl0gPSAxMTZdID0gXCJHcm91cFN0eWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFeHBhbmRlZFwiXSA9IDExN10gPSBcIklzRXhwYW5kZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtc1BhbmVsXCJdID0gMTE4XSA9IFwiSXRlbXNQYW5lbFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsdGVybmF0aW5nUm93Q29sb3JcIl0gPSAxMTldID0gXCJBbHRlcm5hdGluZ1Jvd0NvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNvbnRhaW5lclN0eWxlXCJdID0gMTIwXSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIl0gPSAxMjFdID0gXCJJdGVtQ29udGFpbmVyU3R5bGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTIyXSA9IFwiSXRlbVRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclN0eWxlXCJdID0gMTIzXSA9IFwiR3JvdXBIZWFkZXJTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwRm9vdGVyU3R5bGVcIl0gPSAxMjRdID0gXCJHcm91cEZvb3RlclN0eWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTI1XSA9IFwiR3JvdXBGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uSGVhZGVyU3R5bGVcIl0gPSAxMjZdID0gXCJDb2x1bW5IZWFkZXJTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMjddID0gXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRnJvemVuQ29sdW1uQ291bnRcIl0gPSAxMjhdID0gXCJGcm96ZW5Db2x1bW5Db3VudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkF1dG9HZW5lcmF0ZUNvbHVtbnNcIl0gPSAxMjldID0gXCJBdXRvR2VuZXJhdGVDb2x1bW5zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1NvdXJjZVwiXSA9IDEzMF0gPSBcIkNvbHVtbnNTb3VyY2VcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5zV2lkdGhcIl0gPSAxMzFdID0gXCJDb2x1bW5zV2lkdGhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0TWVtYmVyUGF0aFwiXSA9IDEzMl0gPSBcIlNvcnRNZW1iZXJQYXRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyVGVtcGxhdGVcIl0gPSAxMzNdID0gXCJSb3dIZWFkZXJUZW1wbGF0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclN0eWxlXCJdID0gMTM0XSA9IFwiUm93SGVhZGVyU3R5bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTM1XSA9IFwiUm93SGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsdGVybmF0aW9uQ291bnRcIl0gPSAxMzZdID0gXCJBbHRlcm5hdGlvbkNvdW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNBbHRlcm5hdGluZ1Jvd0NvbG9yRW5hYmxlZFwiXSA9IDEzN10gPSBcIklzQWx0ZXJuYXRpbmdSb3dDb2xvckVuYWJsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0l0ZW1DbGlja0VuYWJsZWRcIl0gPSAxMzhdID0gXCJJc0l0ZW1DbGlja0VuYWJsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDEzOV0gPSBcIkhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5XCJdID0gMTQwXSA9IFwiVmVydGljYWxTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0aW9uTW9kZVwiXSA9IDE0MV0gPSBcIlNlbGVjdGlvbk1vZGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEl0ZW1zXCJdID0gMTQyXSA9IFwiU2VsZWN0ZWRJdGVtc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGVkSXRlbVwiXSA9IDE0M10gPSBcIlNlbGVjdGVkSXRlbVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1DbGlja1wiXSA9IDE0NF0gPSBcIkl0ZW1DbGlja1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzU3RpY2t5XCJdID0gMTQ1XSA9IFwiSXNTdGlja3lcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hFbmFibGVkXCJdID0gMTQ2XSA9IFwiSXNQdWxsVG9SZWZyZXNoRW5hYmxlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJlZnJlc2hDb21tYW5kXCJdID0gMTQ3XSA9IFwiUmVmcmVzaENvbW1hbmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nXCJdID0gMTQ4XSA9IFwiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdDaGFuZ2VkXCJdID0gMTQ5XSA9IFwiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ0NoYW5nZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlRW5hYmxlZFwiXSA9IDE1MF0gPSBcIklzTG9hZE1vcmVFbmFibGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTG9hZE1vcmVDb21tYW5kXCJdID0gMTUxXSA9IFwiTG9hZE1vcmVDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNMb2FkTW9yZUxvYWRpbmdcIl0gPSAxNTJdID0gXCJJc0xvYWRNb3JlTG9hZGluZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiXSA9IDE1M10gPSBcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UYXBwZWRcIl0gPSAxNTRdID0gXCJJdGVtVGFwcGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbVNlbGVjdGVkXCJdID0gMTU1XSA9IFwiSXRlbVNlbGVjdGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbURvdWJsZVRhcHBlZFwiXSA9IDE1Nl0gPSBcIkl0ZW1Eb3VibGVUYXBwZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZUxlZnRDb21tYW5kXCJdID0gMTU3XSA9IFwiU3dpcGVMZWZ0Q29tbWFuZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlUmlnaHRDb21tYW5kXCJdID0gMTU4XSA9IFwiU3dpcGVSaWdodENvbW1hbmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVVwQ29tbWFuZFwiXSA9IDE1OV0gPSBcIlN3aXBlVXBDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVEb3duQ29tbWFuZFwiXSA9IDE2MF0gPSBcIlN3aXBlRG93bkNvbW1hbmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZUl0ZW1zXCJdID0gMTYxXSA9IFwiU3dpcGVJdGVtc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVmcmVzaGluZ1wiXSA9IDE2Ml0gPSBcIklzUmVmcmVzaGluZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCJdID0gMTYzXSA9IFwiUmVmcmVzaENvbW1hbmRQYXJhbWV0ZXJcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWlnaHRcIl0gPSAxNjRdID0gXCJSb3dIZWlnaHRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBdXRvR2VuZXJhdGVJdGVtXCJdID0gMTY1XSA9IFwiQXV0b0dlbmVyYXRlSXRlbVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbE1vZGVcIl0gPSAxNjZdID0gXCJTY3JvbGxNb2RlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDE2N10gPSBcIlNjcm9sbEJhclZpc2liaWxpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1wiXSA9IDE2OF0gPSBcIlNjcm9sbFRvXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Sb3dcIl0gPSAxNjldID0gXCJTY3JvbGxUb1Jvd1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvUm93SW5kZXhcIl0gPSAxNzBdID0gXCJTY3JvbGxUb1Jvd0luZGV4XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Db2x1bW5cIl0gPSAxNzFdID0gXCJTY3JvbGxUb0NvbHVtblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvQ29sdW1uSW5kZXhcIl0gPSAxNzJdID0gXCJTY3JvbGxUb0NvbHVtbkluZGV4XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDE3M10gPSBcIkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTc0XSA9IFwiRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDE3NV0gPSBcIkdyb3VwSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlaWdodFJlc2l6ZXJcIl0gPSAxNzZdID0gXCJSb3dIZWlnaHRSZXNpemVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsU3RhcnRlZFwiXSA9IDE3N10gPSBcIk9uUHVsbFN0YXJ0ZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxEZWx0YVwiXSA9IDE3OF0gPSBcIk9uUHVsbERlbHRhXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsQ29tcGxldGVkXCJdID0gMTc5XSA9IFwiT25QdWxsQ29tcGxldGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsQ29udGVudFwiXSA9IDE4MF0gPSBcIk9uUHVsbENvbnRlbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJlbGVhc2VDb250ZW50XCJdID0gMTgxXSA9IFwiT25SZWxlYXNlQ29udGVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3dpcGVTdGFydGVkXCJdID0gMTgyXSA9IFwiT25Td2lwZVN0YXJ0ZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRGVsdGFcIl0gPSAxODNdID0gXCJPblN3aXBlRGVsdGFcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlQ29tcGxldGVkXCJdID0gMTg0XSA9IFwiT25Td2lwZUNvbXBsZXRlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUmV2ZWFsaW5nXCJdID0gMTg1XSA9IFwiT25SZXZlYWxpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRW5kZWRcIl0gPSAxODZdID0gXCJPblN3aXBlRW5kZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJldmVhbGVkXCJdID0gMTg3XSA9IFwiT25SZXZlYWxlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uRXhlY3V0ZVwiXSA9IDE4OF0gPSBcIk9uRXhlY3V0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uSGlkaW5nXCJdID0gMTg5XSA9IFwiT25IaWRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkhpZGRlblwiXSA9IDE5MF0gPSBcIk9uSGlkZGVuXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25TdGF0ZUNoYW5nZVwiXSA9IDE5MV0gPSBcIk9uU3RhdGVDaGFuZ2VcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbmltYXRpb25EdXJhdGlvblwiXSA9IDE5Ml0gPSBcIkFuaW1hdGlvbkR1cmF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4VG9wT2Zmc2V0XCJdID0gMTkzXSA9IFwiTWF4VG9wT2Zmc2V0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluVG9wT2Zmc2V0XCJdID0gMTk0XSA9IFwiTWluVG9wT2Zmc2V0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluVG9wUmV2ZWFsZWRcIl0gPSAxOTVdID0gXCJNaW5Ub3BSZXZlYWxlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcFJldmVhbGVkXCJdID0gMTk2XSA9IFwiTWF4VG9wUmV2ZWFsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50VGVtcGxhdGVcIl0gPSAxOTddID0gXCJDb250ZW50VGVtcGxhdGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50VGVtcGxhdGVTZWxlY3RvclwiXSA9IDE5OF0gPSBcIkNvbnRlbnRUZW1wbGF0ZVNlbGVjdG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm90YXRpb25cIl0gPSAxOTldID0gXCJSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlXCJdID0gMjAwXSA9IFwiU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmFuc2xhdGlvblhcIl0gPSAyMDFdID0gXCJUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmFuc2xhdGlvbllcIl0gPSAyMDJdID0gXCJUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMYXlvdXRYXCJdID0gMjAzXSA9IFwiTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxheW91dFlcIl0gPSAyMDRdID0gXCJMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiV2lkdGhSZXF1ZXN0XCJdID0gMjA1XSA9IFwiV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVpZ2h0UmVxdWVzdFwiXSA9IDIwNl0gPSBcIkhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gMjA3XSA9IFwiTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gMjA4XSA9IFwiTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbmNob3JYXCJdID0gMjA5XSA9IFwiQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuY2hvcllcIl0gPSAyMTBdID0gXCJBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm90YXRpb25YXCJdID0gMjExXSA9IFwiUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm90YXRpb25ZXCJdID0gMjEyXSA9IFwiUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVYXCJdID0gMjEzXSA9IFwiU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVZXCJdID0gMjE0XSA9IFwiU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhdGZvcm1Db25maWd1cmF0aW9uXCJdID0gMjE1XSA9IFwiUGxhdGZvcm1Db25maWd1cmF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR2VzdHVyZVJlY29nbml6ZXJzXCJdID0gMjE2XSA9IFwiR2VzdHVyZVJlY29nbml6ZXJzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmVoYXZpb3JcIl0gPSAyMTddID0gXCJCZWhhdmlvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRyaWdnZXJzXCJdID0gMjE4XSA9IFwiVHJpZ2dlcnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDbGFzc0lkXCJdID0gMjE5XSA9IFwiQ2xhc3NJZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0eWxlSWRcIl0gPSAyMjBdID0gXCJTdHlsZUlkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRmxvd0RpcmVjdGlvblwiXSA9IDIyMV0gPSBcIkZsb3dEaXJlY3Rpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJbnB1dFRyYW5zcGFyZW50XCJdID0gMjIyXSA9IFwiSW5wdXRUcmFuc3BhcmVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiXSA9IDIyM10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yXCJdID0gMjI0XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNcIl0gPSAyMjVdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25cIl0gPSAyMjZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nXCJdID0gMjI3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyXCJdID0gMjI4XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclwiXSA9IDIyOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhcIl0gPSAyMzBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1wiXSA9IDIzMV0gPSBcIklzVmlzaWJsZVNoYWRvd1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVwiXSA9IDIzMl0gPSBcIklzVmlzaWJsZVN0cm9rZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclwiXSA9IDIzM10gPSBcIklzVmlzaWJsZVRleHRDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1wiXSA9IDIzNF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiXSA9IDIzNV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVwiXSA9IDIzNl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uXCJdID0gMjM3XSA9IFwiSXNWaXNpYmxlUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVwiXSA9IDIzOF0gPSBcIklzVmlzaWJsZVNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFwiXSA9IDIzOV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RcIl0gPSAyNDBdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDI0MV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDI0Ml0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIl0gPSAyNDNdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nXCJdID0gMjQ0XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdcIl0gPSAyNDVdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yT3BhY2l0eVwiXSA9IDI0Nl0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck9wYWNpdHlcIl0gPSAyNDddID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck9wYWNpdHlcIl0gPSAyNDhdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dPcGFjaXR5XCJdID0gMjQ5XSA9IFwiSXNWaXNpYmxlU2hhZG93T3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck9wYWNpdHlcIl0gPSAyNTBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YT3BhY2l0eVwiXSA9IDI1MV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllPcGFjaXR5XCJdID0gMjUyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uT3BhY2l0eVwiXSA9IDI1M10gPSBcIklzVmlzaWJsZVJvdGF0aW9uT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlT3BhY2l0eVwiXSA9IDI1NF0gPSBcIklzVmlzaWJsZVNjYWxlT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RPcGFjaXR5XCJdID0gMjU1XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RPcGFjaXR5XCJdID0gMjU2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1N10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0T3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RPcGFjaXR5XCJdID0gMjU4XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNPcGFjaXR5XCJdID0gMjU5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdPcGFjaXR5XCJdID0gMjYwXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ09wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nT3BhY2l0eVwiXSA9IDI2MV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFZGl0YWJsZUxheW91dFwiXSA9IDI2Ml0gPSBcIklzRWRpdGFibGVMYXlvdXRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRPcGFjaXR5XCJdID0gMjYzXSA9IFwiSXNFbmFibGVkT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uXCJdID0gMjY0XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uXCJdID0gMjY1XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uXCJdID0gMjY2XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblwiXSA9IDI2N10gPSBcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uXCJdID0gMjY4XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblwiXSA9IDI2OV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uXCJdID0gMjcwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25cIl0gPSAyNzFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93Um90YXRpb25cIl0gPSAyNzJdID0gXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uXCJdID0gMjczXSA9IFwiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiXSA9IDI3NF0gPSBcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25cIl0gPSAyNzVdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uXCJdID0gMjc2XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiXSA9IDI3N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblwiXSA9IDI3OF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uXCJdID0gMjc5XSA9IFwiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblwiXSA9IDI4MF0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uXCJdID0gMjgxXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uXCJdID0gMjgyXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblwiXSA9IDI4M10gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uXCJdID0gMjg0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25cIl0gPSAyODVdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIl0gPSAyODZdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVwiXSA9IDI4N10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVwiXSA9IDI4OF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVwiXSA9IDI4OV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVcIl0gPSAyOTBdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVwiXSA9IDI5MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVcIl0gPSAyOTJdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVwiXSA9IDI5M10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlXCJdID0gMjk0XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlXCJdID0gMjk1XSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VTY2FsZVwiXSA9IDI5Nl0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVcIl0gPSAyOTddID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlXCJdID0gMjk4XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVwiXSA9IDI5OV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVcIl0gPSAzMDBdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVcIl0gPSAzMDFdID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVTY2FsZVwiXSA9IDMwMl0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVcIl0gPSAzMDNdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVwiXSA9IDMwNF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVwiXSA9IDMwNV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVcIl0gPSAzMDZdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVwiXSA9IDMwN10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlXCJdID0gMzA4XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlXCJdID0gMzA5XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVcIl0gPSAzMTBdID0gXCJJc0VuYWJsZWRTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWFwiXSA9IDMxMV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVYXCJdID0gMzEyXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVhcIl0gPSAzMTNdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVhcIl0gPSAzMTRdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVYXCJdID0gMzE1XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVYXCJdID0gMzE2XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWFwiXSA9IDMxN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVhcIl0gPSAzMThdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlWFwiXSA9IDMxOV0gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWFwiXSA9IDMyMF0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWFwiXSA9IDMyMV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWFwiXSA9IDMyMl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWFwiXSA9IDMyM10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWFwiXSA9IDMyNF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVYXCJdID0gMzI1XSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWFwiXSA9IDMyNl0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWFwiXSA9IDMyN10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVhcIl0gPSAzMjhdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWFwiXSA9IDMyOV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWFwiXSA9IDMzMF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIl0gPSAzMzFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVYXCJdID0gMzMyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVhcIl0gPSAzMzNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVYXCJdID0gMzM0XSA9IFwiSXNFbmFibGVkU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVZXCJdID0gMzM1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVlcIl0gPSAzMzZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiXSA9IDMzN10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWVwiXSA9IDMzOF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVlcIl0gPSAzMzldID0gXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVlcIl0gPSAzNDBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVZXCJdID0gMzQxXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWVwiXSA9IDM0Ml0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCJdID0gMzQzXSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVZXCJdID0gMzQ0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVZXCJdID0gMzQ1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCJdID0gMzQ2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVZXCJdID0gMzQ3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVZXCJdID0gMzQ4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25TY2FsZVlcIl0gPSAzNDldID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVZXCJdID0gMzUwXSA9IFwiSXNWaXNpYmxlU2NhbGVTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVZXCJdID0gMzUxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiXSA9IDM1Ml0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVZXCJdID0gMzUzXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVZXCJdID0gMzU0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWVwiXSA9IDM1NV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVlcIl0gPSAzNTZdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWVwiXSA9IDM1N10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRTY2FsZVlcIl0gPSAzNThdID0gXCJJc0VuYWJsZWRTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNTldID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM2MF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25YXCJdID0gMzYxXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25YXCJdID0gMzYyXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWFwiXSA9IDM2M10gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiXSA9IDM2NF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNjVdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25YXCJdID0gMzY2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvblhcIl0gPSAzNjddID0gXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvblhcIl0gPSAzNjhdID0gXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNjldID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvblhcIl0gPSAzNzBdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvblhcIl0gPSAzNzFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIl0gPSAzNzJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiXSA9IDM3M10gPSBcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvblhcIl0gPSAzNzRdID0gXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzVdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzhdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25YXCJdID0gMzc5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWFwiXSA9IDM4MF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25YXCJdID0gMzgxXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFRyYW5zbGF0aW9uWFwiXSA9IDM4Ml0gPSBcIklzRW5hYmxlZFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4M10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzg0XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNUcmFuc2xhdGlvbllcIl0gPSAzODVdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvbllcIl0gPSAzODZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25ZXCJdID0gMzg3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25ZXCJdID0gMzg4XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4OV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvbllcIl0gPSAzOTBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1RyYW5zbGF0aW9uWVwiXSA9IDM5MV0gPSBcIklzVmlzaWJsZVNoYWRvd1RyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWVwiXSA9IDM5Ml0gPSBcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM5M10gPSBcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1RyYW5zbGF0aW9uWVwiXSA9IDM5NF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1RyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWVwiXSA9IDM5NV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWVwiXSA9IDM5Nl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25ZXCJdID0gMzk3XSA9IFwiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWVwiXSA9IDM5OF0gPSBcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5OV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSA0MDBdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDQwMV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDQwMl0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIl0gPSA0MDNdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25ZXCJdID0gNDA0XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvbllcIl0gPSA0MDVdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCJdID0gNDA2XSA9IFwiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WFwiXSA9IDQwN10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFhcIl0gPSA0MDhdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRYXCJdID0gNDA5XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFhcIl0gPSA0MTBdID0gXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0xheW91dFhcIl0gPSA0MTFdID0gXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiXSA9IDQxMl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WFwiXSA9IDQxM10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WFwiXSA9IDQxNF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0xheW91dFhcIl0gPSA0MTVdID0gXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WFwiXSA9IDQxNl0gPSBcIklzVmlzaWJsZVN0cm9rZUxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRYXCJdID0gNDE3XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFhcIl0gPSA0MThdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WFwiXSA9IDQxOV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRYXCJdID0gNDIwXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiXSA9IDQyMV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTGF5b3V0WFwiXSA9IDQyMl0gPSBcIklzVmlzaWJsZVNjYWxlTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRYXCJdID0gNDIzXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRYXCJdID0gNDI0XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyNV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRYXCJdID0gNDI2XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRYXCJdID0gNDI3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRYXCJdID0gNDI4XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WFwiXSA9IDQyOV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTGF5b3V0WFwiXSA9IDQzMF0gPSBcIklzRW5hYmxlZExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRZXCJdID0gNDMxXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WVwiXSA9IDQzMl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFlcIl0gPSA0MzNdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WVwiXSA9IDQzNF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WVwiXSA9IDQzNV0gPSBcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCJdID0gNDM2XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JMYXlvdXRZXCJdID0gNDM3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRZXCJdID0gNDM4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TGF5b3V0WVwiXSA9IDQzOV0gPSBcIklzVmlzaWJsZVNoYWRvd0xheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VMYXlvdXRZXCJdID0gNDQwXSA9IFwiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFlcIl0gPSA0NDFdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WVwiXSA9IDQ0Ml0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRZXCJdID0gNDQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFlcIl0gPSA0NDRdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCJdID0gNDQ1XSA9IFwiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVMYXlvdXRZXCJdID0gNDQ2XSA9IFwiSXNWaXNpYmxlU2NhbGVMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFlcIl0gPSA0NDddID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFlcIl0gPSA0NDhdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFlcIl0gPSA0NTBdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFlcIl0gPSA0NTFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFlcIl0gPSA0NTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRZXCJdID0gNDUzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRMYXlvdXRZXCJdID0gNDU0XSA9IFwiSXNFbmFibGVkTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ1NV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvcldpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yV2lkdGhSZXF1ZXN0XCJdID0gNDU2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIl0gPSA0NTddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25XaWR0aFJlcXVlc3RcIl0gPSA0NThdID0gXCJJc1Zpc2libGVFbGV2YXRpb25XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nV2lkdGhSZXF1ZXN0XCJdID0gNDU5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1dpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyV2lkdGhSZXF1ZXN0XCJdID0gNDYwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ2MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhXaWR0aFJlcXVlc3RcIl0gPSA0NjJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiXSA9IDQ2M10gPSBcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVdpZHRoUmVxdWVzdFwiXSA9IDQ2NF0gPSBcIklzVmlzaWJsZVN0cm9rZVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ2NV0gPSBcIklzVmlzaWJsZVRleHRDb2xvcldpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiXSA9IDQ2Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFdpZHRoUmVxdWVzdFwiXSA9IDQ2N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVdpZHRoUmVxdWVzdFwiXSA9IDQ2OF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDY5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVdpZHRoUmVxdWVzdFwiXSA9IDQ3MF0gPSBcIklzVmlzaWJsZVNjYWxlV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiXSA9IDQ3MV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiXSA9IDQ3M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFdpZHRoUmVxdWVzdFwiXSA9IDQ3NF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNXaWR0aFJlcXVlc3RcIl0gPSA0NzVdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nV2lkdGhSZXF1ZXN0XCJdID0gNDc2XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1dpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NzddID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkV2lkdGhSZXF1ZXN0XCJdID0gNDc4XSA9IFwiSXNFbmFibGVkV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9ySGVpZ2h0UmVxdWVzdFwiXSA9IDQ3OV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODBdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNIZWlnaHRSZXF1ZXN0XCJdID0gNDgxXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkhlaWdodFJlcXVlc3RcIl0gPSA0ODJdID0gXCJJc1Zpc2libGVFbGV2YXRpb25IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0hlaWdodFJlcXVlc3RcIl0gPSA0ODNdID0gXCJJc1Zpc2libGVQYWRkaW5nSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4NF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVySGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9ySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4NV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9ySGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0hlaWdodFJlcXVlc3RcIl0gPSA0ODddID0gXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4OF0gPSBcIklzVmlzaWJsZVN0cm9rZUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDg5XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9ySGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0hlaWdodFJlcXVlc3RcIl0gPSA0OTBdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5MV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllIZWlnaHRSZXF1ZXN0XCJdID0gNDkyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5M10gPSBcIklzVmlzaWJsZVJvdGF0aW9uSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5NF0gPSBcIklzVmlzaWJsZVNjYWxlSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk1XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5N10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk4XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNIZWlnaHRSZXF1ZXN0XCJdID0gNDk5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdIZWlnaHRSZXF1ZXN0XCJdID0gNTAwXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0hlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMl0gPSBcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwM10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwN10gPSBcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDhdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTExXSA9IFwiSXNWaXNpYmxlU2hhZG93TWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxMl0gPSBcIklzVmlzaWJsZVN0cm9rZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE0XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxNV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTddID0gXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxOF0gPSBcIklzVmlzaWJsZVNjYWxlTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyM10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTI0XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTI1XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjZdID0gXCJJc0VuYWJsZWRNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MjddID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTI4XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUyOV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMwXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzJdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzNdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzRdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM1XSA9IFwiSXNWaXNpYmxlU2hhZG93TWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzZdID0gXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzN10gPSBcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM4XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0MF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDFdID0gXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDJdID0gXCJJc1Zpc2libGVTY2FsZU1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0M10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0NF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDVdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0Nl0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0N10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0OF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDldID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NTBdID0gXCJJc0VuYWJsZWRNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWFwiXSA9IDU1MV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvclhcIl0gPSA1NTJdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JYXCJdID0gNTUzXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvclhcIl0gPSA1NTRdID0gXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0FuY2hvclhcIl0gPSA1NTVdID0gXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiXSA9IDU1Nl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWFwiXSA9IDU1N10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWFwiXSA9IDU1OF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0FuY2hvclhcIl0gPSA1NTldID0gXCJJc1Zpc2libGVTaGFkb3dBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWFwiXSA9IDU2MF0gPSBcIklzVmlzaWJsZVN0cm9rZUFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JYXCJdID0gNTYxXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvclhcIl0gPSA1NjJdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWFwiXSA9IDU2M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JYXCJdID0gNTY0XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiXSA9IDU2NV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlQW5jaG9yWFwiXSA9IDU2Nl0gPSBcIklzVmlzaWJsZVNjYWxlQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JYXCJdID0gNTY3XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JYXCJdID0gNTY4XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWFwiXSA9IDU2OV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JYXCJdID0gNTcwXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JYXCJdID0gNTcxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JYXCJdID0gNTcyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWFwiXSA9IDU3M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkQW5jaG9yWFwiXSA9IDU3NF0gPSBcIklzRW5hYmxlZEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JZXCJdID0gNTc1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWVwiXSA9IDU3Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvcllcIl0gPSA1NzddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWVwiXSA9IDU3OF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWVwiXSA9IDU3OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCJdID0gNTgwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JBbmNob3JZXCJdID0gNTgxXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JZXCJdID0gNTgyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93QW5jaG9yWVwiXSA9IDU4M10gPSBcIklzVmlzaWJsZVNoYWRvd0FuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VBbmNob3JZXCJdID0gNTg0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvcllcIl0gPSA1ODVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWVwiXSA9IDU4Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JZXCJdID0gNTg3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvcllcIl0gPSA1ODhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCJdID0gNTg5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVBbmNob3JZXCJdID0gNTkwXSA9IFwiSXNWaXNpYmxlU2NhbGVBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvcllcIl0gPSA1OTFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvcllcIl0gPSA1OTJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RBbmNob3JZXCJdID0gNTkzXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvcllcIl0gPSA1OTRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvcllcIl0gPSA1OTVdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvcllcIl0gPSA1OTZdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JZXCJdID0gNTk3XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRBbmNob3JZXCJdID0gNTk4XSA9IFwiSXNFbmFibGVkQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWFwiXSA9IDU5OV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25YXCJdID0gNjAwXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIl0gPSA2MDFdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblhcIl0gPSA2MDJdID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25YXCJdID0gNjAzXSA9IFwiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25YXCJdID0gNjA0XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWFwiXSA9IDYwNV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblhcIl0gPSA2MDZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiXSA9IDYwN10gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWFwiXSA9IDYwOF0gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWFwiXSA9IDYwOV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiXSA9IDYxMF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWFwiXSA9IDYxMV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWFwiXSA9IDYxMl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25YXCJdID0gNjEzXSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWFwiXSA9IDYxNF0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiXSA9IDYxNV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTZdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiXSA9IDYxN10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWFwiXSA9IDYxOF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblhcIl0gPSA2MTldID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25YXCJdID0gNjIwXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblhcIl0gPSA2MjFdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkUm90YXRpb25YXCJdID0gNjIyXSA9IFwiSXNFbmFibGVkUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25ZXCJdID0gNjIzXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvbllcIl0gPSA2MjRdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWVwiXSA9IDYyNV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uWVwiXSA9IDYyNl0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvbllcIl0gPSA2MjddID0gXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIl0gPSA2MjhdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25ZXCJdID0gNjI5XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWVwiXSA9IDYzMF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93Um90YXRpb25ZXCJdID0gNjMxXSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25ZXCJdID0gNjMyXSA9IFwiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCJdID0gNjMzXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25ZXCJdID0gNjM0XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25ZXCJdID0gNjM1XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCJdID0gNjM2XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIl0gPSA2MzddID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlUm90YXRpb25ZXCJdID0gNjM4XSA9IFwiSXNWaXNpYmxlU2NhbGVSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjM5XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiXSA9IDY0MF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjQxXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjQyXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uWVwiXSA9IDY0M10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvbllcIl0gPSA2NDRdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWVwiXSA9IDY0NV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRSb3RhdGlvbllcIl0gPSA2NDZdID0gXCJJc0VuYWJsZWRSb3RhdGlvbllcIjtcclxufSkoUHJvcGVydHlOYW1lIHx8IChQcm9wZXJ0eU5hbWUgPSB7fSkpO1xyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dCwgZ2V0SGV4Q29sb3JGcm9tRmlsbEZyYW1lIH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9mcmFtZS0yLWxheW91dFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVFbGxpcHNlRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2VsbGlwc2UtMi1lbGxpcHNlXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVRleHRFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWxcIjtcclxuaW1wb3J0IHsgQ29udGVudFZpZXcgfSBmcm9tIFwiLi94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC12aWV3XCI7XHJcbmltcG9ydCB7IEN1c3RvbUNvbnRyb2wgfSBmcm9tIFwiLi94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC1jdXN0b20tY29udHJvbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxpbmVFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvbGluZS0yLWxpbmVcIjtcclxuaW1wb3J0IHsgQ29udGVudFBhZ2UgfSBmcm9tIFwiLi94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC1wYWdlXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy92ZWN0b3ItMi1pY29uXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUJ1dHRvbkVsZW1lbnQsIGNoZWNrQ29ybmVyUmFkaXVzLCB0cmFuc2xhdGVTdHJva2VXZWlnaHQsIHRyYW5zbGF0ZVN0cm9rZXNUb0ZpZ21hIH0gZnJvbSBcIi4vdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2J1dHRvbi0yLXhhbWxcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlRWRpdG9yRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lZGl0b3ItMi14YW1sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUVudHJ5RWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lbnRyeS0yLXhhbWxcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2xpZGVyRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9zbGlkZXItMi14YW1sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVN3aXRjaEVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vc3dpdGNoLTIteGFtbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDaGVja0JveEVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vY2hlY2tCb3gtMi14YW1sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUltYWdlQnV0dG9uRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi1pbWFnZWJ1dHRvblwiO1xyXG5jb25zdCBJTkRFTlRBVElPTl9TUEFDRVMgPSA0O1xyXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VGaWdtYShub2Rlcykge1xyXG4gICAgY29uc29sZS5sb2coJ1BhcnNpbmcgTm9kZXM6ICcsIG5vZGVzKTtcclxuICAgIGxldCB4YW1sQ29kZSA9IFwiXCI7XHJcbiAgICBsZXQgcm9vdG5vZGUgPSBub2Rlc1swXTtcclxuICAgIGxldCBjb250ZW50UGFnZSA9IG5ldyBDb250ZW50UGFnZShyb290bm9kZS5wYXJlbnQubm9kZS5uYW1lKTtcclxuICAgIGxldCByb290VmlldyA9IHsgbmFtZTogRWxlbWVudE5hbWUuU2Nyb2xsVmlldywgcHJvcGVydGllczogW10gfTtcclxuICAgIGxldCByb290TGF5b3V0ID0geyBuYW1lOiBFbGVtZW50TmFtZS5WZXJ0aWNhbFN0YWNrTGF5b3V0LCBwcm9wZXJ0aWVzOiBbXSB9O1xyXG4gICAgeGFtbENvZGUgKz0gY29udGVudFBhZ2UuZ2V0U3RhcnRUYWcoKSArIGBcXG4ke2Zvcm1hdFN0YXJ0VGFnKHJvb3RWaWV3KX1cXG5gICsgYFxcbiR7Zm9ybWF0U3RhcnRUYWcocm9vdExheW91dCl9XFxuYDtcclxuICAgIHJvb3Rub2RlLmNoaWxkcmVuLnJldmVyc2UoKS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIHhhbWxDb2RlICs9IGZvcm1hdE5lc3RlZEVsZW1lbnQoY2hlY2tOb2RlVHlwZShjKSwgMik7IC8vIHN0YXJ0aW5nIGF0IGxldmVsIDIgZm9yIGNoaWxkcmVuIG9mIHJvb3RMYXlvdXRcclxuICAgIH0pO1xyXG4gICAgeGFtbENvZGUgKz0gYFxcbiR7Zm9ybWF0RW5kVGFnKHJvb3RMYXlvdXQpfVxcbmAgKyBgXFxuJHtmb3JtYXRFbmRUYWcocm9vdFZpZXcpfVxcbmAgKyBjb250ZW50UGFnZS5nZXRFbmRUYWcoKTtcclxuICAgIHJldHVybiB4YW1sQ29kZTtcclxufVxyXG5mdW5jdGlvbiBmb3JtYXROZXN0ZWRFbGVtZW50KGVsZW1lbnQsIGxldmVsID0gMCkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKGVsZW1lbnQucGFyZW50IGluc3RhbmNlb2YgQ3VzdG9tQ29udHJvbCkge1xyXG4gICAgICAgIC8vIEFzc3VtaW5nIEN1c3RvbUNvbnRyb2wncyBnZXRTdGFydFRhZyBhbmQgZ2V0RW5kVGFnIG1ldGhvZHMgaGFuZGxlIGluZGVudGF0aW9uIGludGVybmFsbHlcclxuICAgICAgICByZXN1bHQgKz0gZWxlbWVudC5wYXJlbnQuZ2V0U3RhcnRUYWcobGV2ZWwpICsgZWxlbWVudC5wYXJlbnQuZ2V0RW5kVGFnKGxldmVsKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGVsZW1lbnQucGFyZW50IGluc3RhbmNlb2YgQ29udGVudFZpZXcpIHtcclxuICAgICAgICAvLyBBc3N1bWluZyBDb250ZW50VmlldydzIGdldFN0YXJ0VGFnIGFuZCBnZXRFbmRUYWcgbWV0aG9kcyBoYW5kbGUgaW5kZW50YXRpb24gaW50ZXJuYWxseVxyXG4gICAgICAgIGxldCBuZXN0ZWRDb21wb25lbnQgPSAnJztcclxuICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIG5lc3RlZENvbXBvbmVudCArPSBmb3JtYXROZXN0ZWRFbGVtZW50KGMsIGxldmVsICsgMSk7IC8vIEluY3JlbWVudCB0aGUgbGV2ZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHQgKz0gZWxlbWVudC5wYXJlbnQuZ2V0U3RhcnRUYWcobGV2ZWwpICsgYFxcbiR7bmVzdGVkQ29tcG9uZW50fWAgKyBlbGVtZW50LnBhcmVudC5nZXRFbmRUYWcobGV2ZWwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Lm5hbWUgPT09IEVsZW1lbnROYW1lLm5vbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRhZ1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gZm9ybWF0U3RhcnRUYWcoZWxlbWVudC5wYXJlbnQsIGxldmVsKTtcclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGNoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBjYWxsIGZvcm1hdE5lc3RlZEVsZW1lbnQgb24gZWFjaCBjaGlsZFxyXG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gZm9ybWF0TmVzdGVkRWxlbWVudChjLCBsZXZlbCArIDEpOyAvLyBJbmNyZW1lbnQgdGhlIGxldmVsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBFbmQgdGFnXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBmb3JtYXRFbmRUYWcoZWxlbWVudC5wYXJlbnQsIGxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZvciBlbGVtZW50cyB3aXRob3V0IGNoaWxkcmVuXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBmb3JtYXRTaG9ydFRhZyhlbGVtZW50LnBhcmVudCwgbGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tOb2RlVHlwZShubikge1xyXG4gICAgLy9DaGVjayBpZiB0aGUgbm9kZSBoYXMgYmVlbiBhc3NpZ25lZCBhIGN1c3RvbSB2YWx1ZVxyXG4gICAgaWYgKG5uLnBhcmVudC51dHlwZSAhPT0gJ05vbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVXR5cGVOb2Rlcyhubik7XHJcbiAgICB9XHJcbiAgICAvLyB0YWtlIHRoZSB0b3Agbm9kZVxyXG4gICAgbGV0IG5vZGUgPSBubi5wYXJlbnQubm9kZTtcclxuICAgIC8vIENoZWNrIHRoZSBub2RlJ3MgdHlwZSB1c2luZyB0aGUgJ3R5cGUnIHByb3BlcnR5XHJcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0ZSQU1FJzpcclxuICAgICAgICAgICAgbGV0IGZyYW1lTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZUVsZW1lbnQgPSBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0KGZyYW1lTm9kZSk7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBzZXJ2ZSBhcyB0aGUgbWFpbiBuZXN0ZWQgZWxlbWVudCB0byByZXR1cm5cclxuICAgICAgICAgICAgbGV0IG5lc3RlZEZyYW1lID0geyBwYXJlbnQ6IGZyYW1lRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBjaGlsZHJlbiBkaXJlY3RseSB0byBmcmFtZUVsZW1lbnQgZmlyc3RcclxuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEZyYW1lLmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSkpO1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiB0aGUgZnJhbWVOb2RlIGhhcyBjb3JuZXJSYWRpdXNcclxuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZS5jb3JuZXJSYWRpdXMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3JuZXJSYWRpdXMgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VTaGFwZSwgdmFsdWU6IGBSb3VuZFJlY3RhbmdsZSAke2ZyYW1lTm9kZS50b3BMZWZ0UmFkaXVzfSAke2ZyYW1lTm9kZS50b3BSaWdodFJhZGl1c30gJHtmcmFtZU5vZGUuYm90dG9tTGVmdFJhZGl1c30gJHtmcmFtZU5vZGUuYm90dG9tUmlnaHRSYWRpdXN9YCB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJvcmRlciwgcHJvcGVydGllczogW2Nvcm5lclJhZGl1c10gfTtcclxuICAgICAgICAgICAgICAgIC8vIEluIHRoaXMgc2V0dXAsIHRoZSBib3JkZXJFbGVtZW50IHdyYXBzIHRoZSBmcmFtZUVsZW1lbnQgKHdoaWNoIGFscmVhZHkgaGFzIHRoZSBjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIG5lc3RlZEZyYW1lID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogYm9yZGVyRWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW25lc3RlZEZyYW1lXSAvLyBOb3RlIHRoYXQgd2UncmUgd3JhcHBpbmcgdGhlIGV4aXN0aW5nIG5lc3RlZEZyYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBhbmQgYWRkIGZyYW1lIHN0cm9rZSBpZiBleGlzdHNcclxuICAgICAgICAgICAgbGV0IGZyYW1lU3Ryb2tlID0gdHJhbnNsYXRlU3Ryb2tlKGZyYW1lTm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZVN0cm9rZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmVzdGVkRnJhbWUuY2hpbGRyZW4ucHVzaCh7IHBhcmVudDogZnJhbWVTdHJva2UucGFyZW50LCBjaGlsZHJlbjogZnJhbWVTdHJva2UuY2hpbGRyZW4gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEZyYW1lO1xyXG4gICAgICAgIGNhc2UgJ0dST1VQJzpcclxuICAgICAgICAgICAgbGV0IGdyb3VwRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUubm9uZSwgcHJvcGVydGllczogW10gfTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZEdyb3VwID0geyBwYXJlbnQ6IGdyb3VwRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuZXN0ZWRHcm91cC5jaGlsZHJlbi5wdXNoKGNoZWNrTm9kZVR5cGUobikpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEdyb3VwO1xyXG4gICAgICAgIGNhc2UgJ1RFWFQnOlxyXG4gICAgICAgICAgICBsZXQgdGV4dE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICBsZXQgdGV4dEVsZW1lbnQgPSBUcmFuc2xhdGVUZXh0RWxlbWVudCh0ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRUZXh0ID0geyBwYXJlbnQ6IHRleHRFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFRleHQ7XHJcbiAgICAgICAgY2FzZSAnRUxMSVBTRSc6XHJcbiAgICAgICAgICAgIGxldCBlbGxpcHNlTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCBlbGxpcHNlRWxlbWVudCA9IFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50KGVsbGlwc2VOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZEVsaXBzZSA9IHsgcGFyZW50OiBlbGxpcHNlRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRFbGlwc2U7XHJcbiAgICAgICAgY2FzZSAnTElORSc6XHJcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCBsaW5lRWxlbWVudCA9IFRyYW5zbGF0ZUxpbmVFbGVtZW50KGxpbmVOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZExpbmUgPSB7IHBhcmVudDogbGluZUVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkTGluZTtcclxuICAgICAgICBjYXNlICdSRUNUQU5HTEUnOlxyXG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVFbGVtZW50ID0gVHJhbnNsYXRlUmVjdGFuZ2xlRWxlbWVudChyZWN0YW5nbGVOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZFJlY3RhbmdsZSA9IHsgcGFyZW50OiByZWN0YW5nbGVFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFJlY3RhbmdsZTtcclxuICAgICAgICBjYXNlICdWRUNUT1InOlxyXG4gICAgICAgICAgICBsZXQgdmVjdG9yTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3JFbGVtZW50ID0gVHJhbnNsYXRlVmVjdG9yRWxlbWVudCh2ZWN0b3JOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZFZlY3RvciA9IHsgcGFyZW50OiB2ZWN0b3JFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFZlY3RvcjtcclxuICAgICAgICBjYXNlICdJTlNUQU5DRSc6XHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZU5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICBsZXQgYmluZGluZ3MgPSBbXTsgLy9UT0RPOiBjaGlsZHJlblxyXG4gICAgICAgICAgICBsZXQgY3VzdG9tQ29udHJvbCA9IG5ldyBDdXN0b21Db250cm9sKGluc3RhbmNlTm9kZS5uYW1lLCBiaW5kaW5ncyk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRDb250cm9sID0geyBwYXJlbnQ6IGN1c3RvbUNvbnRyb2wsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQ29udHJvbDtcclxuICAgICAgICBjYXNlICdDT01QT05FTlRfU0VUJzpcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudFNldE5vZGUgPSBub2RlLmRlZmF1bHRWYXJpYW50O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50U2V0Tm9kZTogJywgY29tcG9uZW50U2V0Tm9kZSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgbmV3IHJlc291cmNlIGZpbGUgLyBuZXcgd2luZG93XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50U2V0VmlldyA9IG5ldyBDb250ZW50Vmlldyhub2RlLm5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgcm9vdExheW91dCA9IHsgbmFtZTogRWxlbWVudE5hbWUuVmVydGljYWxTdGFja0xheW91dCwgcHJvcGVydGllczogW10gfTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZENvbXBvbmVudFNldCA9IHsgcGFyZW50OiBjb250ZW50U2V0VmlldywgY2hpbGRyZW46IFt7IHBhcmVudDogcm9vdExheW91dCwgY2hpbGRyZW46IFtdIH1dIH07XHJcbiAgICAgICAgICAgIG5uLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuZXN0ZWRDb21wb25lbnRTZXQuY2hpbGRyZW4ucHVzaChjaGVja05vZGVUeXBlKG4pKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRDb21wb25lbnRTZXQ7XHJcbiAgICAgICAgY2FzZSAnQ09NUE9ORU5UJzpcclxuICAgICAgICBjYXNlICdTVEFSJzpcclxuICAgICAgICBjYXNlICdCT09MRUFOX09QRVJBVElPTic6XHJcbiAgICAgICAgY2FzZSAnU0xJQ0UnOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5ub25lLCBwcm9wZXJ0aWVzOiBbXSB9O1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkID0geyBwYXJlbnQ6IGVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHBhcnNlVXR5cGVOb2Rlcyhubikge1xyXG4gICAgbGV0IG5vZGUgPSBubi5wYXJlbnQ7XHJcbiAgICAvL2NvbnNvbGUubG9nKCd0cmFuc2xhdGluZyA6ICcsIG5vZGUudXR5cGUpO1xyXG4gICAgLy8gQ2hlY2sgdGhlIG5vZGUncyB0eXBlIHVzaW5nIHRoZSAndHlwZScgcHJvcGVydHlcclxuICAgIHN3aXRjaCAobm9kZS51dHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0JVVFRPTic6XHJcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJykge1xyXG4gICAgICAgICAgICAgICAgbm4ucGFyZW50LnV0eXBlID0gJ05vbmUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrTm9kZVR5cGUobm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBidXR0b25Ob2RlID0gbm9kZS5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uRWxlbWVudCA9IFRyYW5zbGF0ZUJ1dHRvbkVsZW1lbnQoYnV0dG9uTm9kZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5wdXNoKFRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlLm5vZGUsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRCdXR0b24gPSB7IHBhcmVudDogeyBuYW1lOiBFbGVtZW50TmFtZS5ub25lLCBwcm9wZXJ0aWVzOiBbXSB9LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBuLnBhcmVudC5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0RWxlbWVudCA9IFRyYW5zbGF0ZVRleHRFbGVtZW50KGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5jb25jYXQodGV4dEVsZW1lbnQucHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZEJ1dHRvbiA9IHsgcGFyZW50OiBidXR0b25FbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGNoaWxkTm9kZS50eXBlID09PSAnVkVDVE9SJykgfHwgKG4ucGFyZW50LnV0eXBlID09PSAnSU1BR0UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVjdG9yRWxlbWVudCA9IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQoY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlQnV0dG9uRWxlbWVudCA9IFRyYW5zbGF0ZUltYWdlQnV0dG9uRWxlbWVudChidXR0b25Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VCdXR0b25FbGVtZW50LnByb3BlcnRpZXMuY29uY2F0KHZlY3RvckVsZW1lbnQucHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZEJ1dHRvbiA9IHsgcGFyZW50OiBpbWFnZUJ1dHRvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ0VMTElQU0UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjcCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSBnZXRIZXhDb2xvckZyb21GaWxsRnJhbWUoY2hpbGROb2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Cb3JkZXJDb2xvciwgdmFsdWU6IChfYiA9IHRyYW5zbGF0ZVN0cm9rZXNUb0ZpZ21hKGNoaWxkTm9kZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdOb25lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyV2lkdGgsIHZhbHVlOiB0cmFuc2xhdGVTdHJva2VXZWlnaHQoY2hpbGROb2RlKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LnByb3BlcnRpZXMuY29uY2F0KGNwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gY2hpbGROb2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ybmVyUmFkaXVzID0geyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlU2hhcGUsIHZhbHVlOiBgUm91bmRSZWN0YW5nbGUgJHsod2lkdGggLyAyKS50b1N0cmluZygpfWAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJvcmRlciwgcHJvcGVydGllczogW2Nvcm5lclJhZGl1c10gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkQnV0dG9uID0geyBwYXJlbnQ6IGJvcmRlckVsZW1lbnQsIGNoaWxkcmVuOiBbeyBwYXJlbnQ6IGJ1dHRvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9XSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ1JFQ1RBTkdMRScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNwID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQmFja2dyb3VuZCwgdmFsdWU6IChfYyA9IGdldEhleENvbG9yRnJvbUZpbGxGcmFtZShjaGlsZE5vZGUpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnTm9uZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJvcmRlckNvbG9yLCB2YWx1ZTogKF9kID0gdHJhbnNsYXRlU3Ryb2tlc1RvRmlnbWEoY2hpbGROb2RlKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJ05vbmUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Cb3JkZXJXaWR0aCwgdmFsdWU6IHRyYW5zbGF0ZVN0cm9rZVdlaWdodChjaGlsZE5vZGUpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5jb25jYXQoY3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29ybmVyUmFkaXVzID0geyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlU2hhcGUsIHZhbHVlOiBgUm91bmRSZWN0YW5nbGUgJHtjaGVja0Nvcm5lclJhZGl1cyhjaGlsZE5vZGUpfWAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJvcmRlciwgcHJvcGVydGllczogW2Nvcm5lclJhZGl1c10gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkQnV0dG9uID0geyBwYXJlbnQ6IGJvcmRlckVsZW1lbnQsIGNoaWxkcmVuOiBbeyBwYXJlbnQ6IGJ1dHRvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9XSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmVzdGVkQnV0dG9uID0geyBwYXJlbnQ6IGJ1dHRvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRCdXR0b247XHJcbiAgICAgICAgY2FzZSAnRURJVE9SJzpcclxuICAgICAgICAgICAgbGV0IGVkaXRvck5vZGUgPSBub2RlLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBlZGl0b3JFbGVtZW50ID0gVHJhbnNsYXRlRWRpdG9yRWxlbWVudChlZGl0b3JOb2RlKTtcclxuICAgICAgICAgICAgZWRpdG9yRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goVHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUubm9kZSwgZmFsc2UpKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZEVkaXRvciA9IHsgcGFyZW50OiBlZGl0b3JFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZSA9IG4ucGFyZW50Lm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS50eXBlID09PSAnVEVYVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyUHJvcCA9IHsgbmFtZTogUHJvcGVydHlOYW1lLlBsYWNlaG9sZGVyLCB2YWx1ZTogY2hpbGROb2RlLmNoYXJhY3RlcnMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2gocGxhY2Vob2xkZXJQcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkRWRpdG9yO1xyXG4gICAgICAgIGNhc2UgJ0VOVFJZJzpcclxuICAgICAgICAgICAgbGV0IGVudHJ5Tm9kZSA9IG5vZGUubm9kZTtcclxuICAgICAgICAgICAgbGV0IGVudHJ5RWxlbWVudCA9IFRyYW5zbGF0ZUVudHJ5RWxlbWVudChlbnRyeU5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkRW50cnkgPSB7IHBhcmVudDogZW50cnlFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZSA9IG4ucGFyZW50Lm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS50eXBlID09PSAnVEVYVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyUHJvcCA9IHsgbmFtZTogUHJvcGVydHlOYW1lLlBsYWNlaG9sZGVyLCB2YWx1ZTogY2hpbGROb2RlLmNoYXJhY3RlcnMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlFbGVtZW50LnByb3BlcnRpZXMucHVzaChwbGFjZWhvbGRlclByb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRFbnRyeTtcclxuICAgICAgICBjYXNlICdJTUFHRSc6XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3JOb2RlID0gbm9kZS5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgdmVjdG9yRWxlbWVudCA9IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQodmVjdG9yTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRWZWN0b3IgPSB7IHBhcmVudDogdmVjdG9yRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRWZWN0b3I7XHJcbiAgICAgICAgY2FzZSAnQ0hFQ0tCT1gnOlxyXG4gICAgICAgICAgICBsZXQgY2hlY2tCb3hOb2RlID0gbm9kZS5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tCb3hFbGVtZW50ID0gVHJhbnNsYXRlQ2hlY2tCb3hFbGVtZW50KGNoZWNrQm94Tm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRDaGVja0JveCA9IHsgcGFyZW50OiBjaGVja0JveEVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQ2hlY2tCb3g7XHJcbiAgICAgICAgY2FzZSAnU1dJVENIJzpcclxuICAgICAgICAgICAgbGV0IHN3aXRjaE5vZGUgPSBub2RlLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBzd2l0Y2hFbGVtZW50ID0gVHJhbnNsYXRlU3dpdGNoRWxlbWVudChzd2l0Y2hOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZFN3aXRjaCA9IHsgcGFyZW50OiBzd2l0Y2hFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFN3aXRjaDtcclxuICAgICAgICBjYXNlICdTTElERVInOlxyXG4gICAgICAgICAgICBsZXQgc2xpZGVyTm9kZSA9IG5vZGUubm9kZTtcclxuICAgICAgICAgICAgbGV0IHNsaWRlckVsZW1lbnQgPSBUcmFuc2xhdGVTbGlkZXJFbGVtZW50KHNsaWRlck5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkU2xpZGVyID0geyBwYXJlbnQ6IHNsaWRlckVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkU2xpZGVyO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5ub25lLCBwcm9wZXJ0aWVzOiBbXSB9O1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkID0geyBwYXJlbnQ6IGVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvcm1hdFN0YXJ0VGFnKGVsZW1lbnQsIGxldmVsID0gMCkge1xyXG4gICAgY29uc3QgaW5kZW50ID0gJyAnLnJlcGVhdChsZXZlbCAqIElOREVOVEFUSU9OX1NQQUNFUyk7XHJcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xyXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+IChwcm9wLnZhbHVlICE9PSAnTm9uZScpKVxyXG4gICAgICAgIC5tYXAoKHByb3ApID0+IGBcXG4ke2luZGVudH0gICAgJHtQcm9wZXJ0eU5hbWVbcHJvcC5uYW1lXX09XCIke3Byb3AudmFsdWV9XCJgKVxyXG4gICAgICAgIC5qb2luKCcnKTtcclxuICAgIHJldHVybiBgJHtpbmRlbnR9PCR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0ke3Byb3BlcnR5U3RyaW5nfT5cXG5gO1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0VGFnKGVsZW1lbnQsIGxldmVsID0gMCkge1xyXG4gICAgY29uc3QgaW5kZW50ID0gJyAnLnJlcGVhdChsZXZlbCAqIElOREVOVEFUSU9OX1NQQUNFUyk7XHJcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xyXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+IHByb3AudmFsdWUgIT09ICdOb25lJylcclxuICAgICAgICAubWFwKChwcm9wKSA9PiBgXFxuJHtpbmRlbnR9ICAgICR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcclxuICAgICAgICAuam9pbignJyk7XHJcbiAgICByZXR1cm4gYCR7aW5kZW50fTwke0VsZW1lbnROYW1lW2VsZW1lbnQubmFtZV19JHtwcm9wZXJ0eVN0cmluZ30vPlxcbmA7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0RW5kVGFnKGVsZW1lbnQsIGxldmVsID0gMCkge1xyXG4gICAgY29uc3QgaW5kZW50ID0gJyAnLnJlcGVhdChsZXZlbCAqIElOREVOVEFUSU9OX1NQQUNFUyk7XHJcbiAgICByZXR1cm4gYCR7aW5kZW50fTwvJHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfT5cXG5gO1xyXG59XHJcbmZ1bmN0aW9uIFRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlLCBmaWxsKSB7XHJcbiAgICBsZXQgcHJvcGVydHkgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5ub25lLCB2YWx1ZTogJ05vbmUnIH07XHJcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xyXG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhaW50ID0gZmlsbHNbMF07IC8vIFRha2UgdGhlIGZpcnN0IHBhaW50L2ZpbGwgZm9yIHNpbXBsaWNpdHlcclxuICAgICAgICAgICAgaWYgKHBhaW50LnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gcGFpbnQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHBoYSA9IChwYWludC5vcGFjaXR5IHx8IDEpICogMjU1O1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBgIyR7TWF0aC5yb3VuZChhbHBoYSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyl9JHtNYXRoLnJvdW5kKGNvbG9yLnIgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpfSR7TWF0aC5yb3VuZChjb2xvci5nICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKX0ke01hdGgucm91bmQoY29sb3IuYiAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Lm5hbWUgPSBmaWxsID8gUHJvcGVydHlOYW1lLkZpbGwgOiBQcm9wZXJ0eU5hbWUuQmFja2dyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPOiBIYW5kbGUgb3RoZXIgcGFpbnQgdHlwZXMgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BlcnR5O1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVN0cm9rZShub2RlKSB7XHJcbiAgICAvL2NvbG9yXHJcbiAgICBsZXQgYm9yZGVyRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQm9yZGVyLCBwcm9wZXJ0aWVzOiBbXSB9O1xyXG4gICAgaWYgKCdzdHJva2VzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgbm9kZS5zdHJva2VzLmZvckVhY2goc3Ryb2tlID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0cm9rZS50eXBlID09PSAnU09MSUQnICYmIChub2RlLnN0cm9rZVdlaWdodCAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBzdHJva2UuY29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3Ryb2tlQ29sb3IgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2UsIHZhbHVlOiBgIyR7Y29sLnJ9JHtjb2wuZ30ke2NvbC5ifWAgfTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQucHJvcGVydGllcy5wdXNoKHN0cm9rZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGxldCBzdHJva2VXZWlnaHQgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VUaGlja25lc3MsIHZhbHVlOiBgJHtub2RlLnN0cm9rZVdlaWdodH1gIH07XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnByb3BlcnRpZXMucHVzaChzdHJva2VXZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlubmVyTGF5b3V0ID0geyBuYW1lOiBFbGVtZW50TmFtZS5WZXJ0aWNhbFN0YWNrTGF5b3V0LCBwcm9wZXJ0aWVzOiBbXSB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFyZW50OiBib3JkZXJFbGVtZW50LCBjaGlsZHJlbjogW2lubmVyTGF5b3V0XSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIGNvbnN0IGNvbW1vblByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWVbXCJ4Ok5hbWVcIl0sIHZhbHVlOiB0b0NhbWVsQ2FzZShub2RlLm5hbWUpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5PcGFjaXR5LCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlT3BhY2l0eShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSXNWaXNpYmxlLCB2YWx1ZTogYm9vbFRvRGVmYXVsdChub2RlLnZpc2libGUsIHRydWUpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSG9yaXpvbnRhbE9wdGlvbnMsIHZhbHVlOiAoX2IgPSB0cmFuc2xhdGVMYXlvdXRBbGlnbihub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVmVydGljYWxPcHRpb25zLCB2YWx1ZTogKF9jID0gdHJhbnNsYXRlTGF5b3V0QWxpZ24obm9kZSkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICdOb25lJyB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiBjb21tb25Qcm9wZXJ0aWVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc3BsaXQoJyAnKSAvLyBTcGxpdCB0aGUgc3RyaW5nIGJ5IHNwYWNlc1xyXG4gICAgICAgIC5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgZmlyc3Qgd29yZCB0byBsb3dlcmNhc2UgYW5kIG90aGVycyB0byBjYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXJcclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5qb2luKCcnKTsgLy8gSm9pbiBhbGwgcGFydHMgdG9nZXRoZXJcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVMYXlvdXRBbGlnbihub2RlKSB7XHJcbiAgICBpZiAoJ2xheW91dEFsaWduJyBpbiBub2RlKSB7XHJcbiAgICAgICAgc3dpdGNoIChub2RlLmxheW91dEFsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDRU5URVJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnQ2VudGVyJztcclxuICAgICAgICAgICAgY2FzZSBcIk1BWFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdFbmQnO1xyXG4gICAgICAgICAgICBjYXNlIFwiU1RSRVRDSFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdGaWxsJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnTm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZnVuY3Rpb24gYm9vbFRvRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAnTm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVPcGFjaXR5KG5vZGUpIHtcclxuICAgIGlmICgnb3BhY2l0eScgaW4gbm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLm9wYWNpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGUub3BhY2l0eS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5pbXBvcnQgeyByZ2JUb0hleCB9IGZyb20gXCIuL3RleHQtMi1sYWJlbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dChub2RlKSB7XHJcbiAgICBzd2l0Y2ggKG5vZGUubGF5b3V0TW9kZSkge1xyXG4gICAgICAgIGNhc2UgXCJIT1JJWk9OVEFMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVIb3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpO1xyXG4gICAgICAgIGNhc2UgXCJWRVJUSUNBTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRlVmVydGljYWxTdGFja0xheW91dEVsZW1lbnQobm9kZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUZsZXhMYXlvdXRFbGVtZW50KG5vZGUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIFRyYW5zbGF0ZUZsZXhMYXlvdXRFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IGZsZXhMYXlvdXRQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIC8qIERldGVybWluZXMgd2hldGhlciB0aGlzIGxheWVyIHVzZXMgYXV0by1sYXlvdXQgdG8gcG9zaXRpb24gaXRzIGNoaWxkcmVuLiBEZWZhdWx0cyB0byBcIk5PTkVcIi4gKi9cclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5CYWNrZ3JvdW5kLCB2YWx1ZTogKF9hID0gZ2V0SGV4Q29sb3JGcm9tRmlsbEZyYW1lKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25Db250ZW50LCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkNvbnRlbnQobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25JdGVtcywgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXMobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV3JhcCwgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hV3JhcFRvWGFtbFdyYXAobm9kZS5sYXlvdXRXcmFwKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkdyb3csIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUobm9kZS5sYXlvdXRHcm93LnRvU3RyaW5nKCkpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25TZWxmLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyhub2RlLmxheW91dEFsaWduKSB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGZsZXhMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5GbGV4TGF5b3V0LCBwcm9wZXJ0aWVzOiBmbGV4TGF5b3V0UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcclxuICAgIHJldHVybiBmbGV4TGF5b3V0RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09ICcwJykge1xyXG4gICAgICAgIHJldHVybiAnTm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5mdW5jdGlvbiBUcmFuc2xhdGVIb3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dFByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQmFja2dyb3VuZCwgdmFsdWU6IChfYSA9IGdldEhleENvbG9yRnJvbUZpbGxGcmFtZShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3BhY2luZywgdmFsdWU6IG5vZGUuaXRlbVNwYWNpbmcudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5Ib3Jpem9udGFsU3RhY2tMYXlvdXQsIHByb3BlcnRpZXM6IGhvcml6b250YWxTdGFja0xheW91dFByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gaG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudDtcclxufVxyXG5mdW5jdGlvbiBUcmFuc2xhdGVWZXJ0aWNhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5CYWNrZ3JvdW5kLCB2YWx1ZTogKF9hID0gZ2V0SGV4Q29sb3JGcm9tRmlsbEZyYW1lKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5WZXJ0aWNhbFN0YWNrTGF5b3V0LCBwcm9wZXJ0aWVzOiB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcclxuICAgIHJldHVybiB2ZXJ0aXZhbFN0YWNrTGF5b3V0RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSB7XHJcbiAgICBpZiAoJ3BhZGRpbmdMZWZ0JyBpbiBub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUucGFkZGluZ0xlZnQgPT0gbm9kZS5wYWRkaW5nUmlnaHQgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdUb3AgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdCb3R0b20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUucGFkZGluZ0xlZnQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtub2RlLnBhZGRpbmdMZWZ0fSwgJHtub2RlLnBhZGRpbmdUb3B9LCAke25vZGUucGFkZGluZ1JpZ2h0fSwgJHtub2RlLnBhZGRpbmdCb3R0b219LGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICdOb25lJztcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYUFsaWduSXRlbXNUb1hhbWxBbGlnbkl0ZW1zKHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSBcIk1BWFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gJ0VuZCc7XHJcbiAgICAgICAgY2FzZSBcIkNFTlRFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gJ0NlbnRlcic7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYVdyYXBUb1hhbWxXcmFwKHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSAnV1JBUCc6XHJcbiAgICAgICAgICAgIHJldHVybiAnV3JhcCc7XHJcbiAgICAgICAgY2FzZSAnTk9fV1JBUCc6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYUFsaWduQ29udGVudCh2YWx1ZSkge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgJ1NQQUNFX0JFVFdFRU4nOlxyXG4gICAgICAgICAgICByZXR1cm4gJ1NwYWNlQmV0d2Vlbic7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGV4Q29sb3JGcm9tRmlsbEZyYW1lKG5vZGUpIHtcclxuICAgIGlmICgnZmlsbHMnIGluIG5vZGUpIHtcclxuICAgICAgICBjb25zdCBmaWxsID0gbm9kZS5maWxsc1swXTsgLy8gV2UgYXNzdW1lIHRoZSBmaXJzdCBmaWxsIGlzIHRoZSBvbmUgd2Ugd2FudFxyXG4gICAgICAgIGlmIChmaWxsID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc29saWRGaWxsID0gZmlsbDtcclxuICAgICAgICAgICAgcmV0dXJuIHJnYlRvSGV4KHNvbGlkRmlsbC5jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZpbGwudHlwZS5zdGFydHNXaXRoKCdHUkFESUVOVCcpKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBncmFkaWVudCBmaWxscyAoaWYgbmVlZGVkKVxyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIGFkZCBsb2dpYyBoZXJlIHRvIGhhbmRsZSBncmFkaWVudCBmaWxsc1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFbGxpcHNlRWxlbWVudChub2RlKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgY29uc3QgZWxsaXBzZVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRmlsbCwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlVGhpY2tuZXNzLCB2YWx1ZTogbm9kZS5zdHJva2VXZWlnaHQudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6IChfYiA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZWxsaXBzZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkVsbGlwc2UsIHByb3BlcnRpZXM6IGVsbGlwc2VQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIGVsbGlwc2VFbGVtZW50O1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSB7XHJcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgbGV0IHhhbWxTdHJpbmcgPSBgLiR7RWxlbWVudE5hbWUuQmFja2dyb3VuZH1gO1xyXG4gICAgICAgIGNvbnN0IGZpbGxzID0gbm9kZS5maWxscztcclxuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUxpbmVFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IGxpbmVQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlgxLCB2YWx1ZTogJzAnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTEsIHZhbHVlOiAnMCcgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5YMiwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlkyLCB2YWx1ZTogZ2V0WWZvclgobm9kZSkudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlRGFzaEFycmF5LCB2YWx1ZTogdHJhbnNsYXRlRGFzaChub2RlKSB9LFxyXG4gICAgICAgIC8vIEFkZCBvdGhlciBsaW5lLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcclxuICAgIF07XHJcbiAgICBjb25zdCBsaW5lRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGluZSwgcHJvcGVydGllczogbGluZVByb3BlcnRpZXMgfTtcclxuICAgIHJldHVybiBsaW5lRWxlbWVudDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVEYXNoKG5vZGUpIHtcclxuICAgIHJldHVybiBgJHtub2RlLmRhc2hQYXR0ZXJuWzBdfSwke25vZGUuZGFzaFBhdHRlcm5bMV19YDtcclxufVxyXG5mdW5jdGlvbiBnZXRZZm9yWChub2RlKSB7XHJcbiAgICBsZXQgbGVuZ3RoID0gbm9kZS53aWR0aDtcclxuICAgIGxldCByb3RhdGlvbiA9IG5vZGUucm90YXRpb247XHJcbiAgICAvLyBDb252ZXJ0IHRoZSByb3RhdGlvbiBhbmdsZSBmcm9tIGRlZ3JlZXMgdG8gcmFkaWFuc1xyXG4gICAgLy8gQ29udmVydCB0aGUgcm90YXRpb24gYW5nbGUgZnJvbSBkZWdyZWVzIHRvIHJhZGlhbnNcclxuICAgIGxldCB0aGV0YSA9IHJvdGF0aW9uICogKE1hdGguUEkgLyAxODApO1xyXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSB5LWNoYW5nZSB1c2luZyBzaW5lIG9mIHRoZSBhbmdsZVxyXG4gICAgbGV0IGggPSBsZW5ndGggKiBNYXRoLnNpbih0aGV0YSk7XHJcbiAgICByZXR1cm4gaDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkge1xyXG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbGxzID0gbm9kZS5maWxscztcclxuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi8uLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlUmVjdGFuZ2xlRWxlbWVudChub2RlKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCByZWN0YW5nbGVQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlJhZGl1c1gsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUobm9kZS50b3BMZWZ0UmFkaXVzKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlJhZGl1c1ksIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUobm9kZS5ib3R0b21SaWdodFJhZGl1cykgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5GaWxsLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHJlY3RhbmdsZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlJlY3RhbmdsZSwgcHJvcGVydGllczogcmVjdGFuZ2xlUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcclxuICAgIHJldHVybiByZWN0YW5nbGVFbGVtZW50O1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShuKSB7XHJcbiAgICBpZiAobiA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAnTm9uZSc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbi50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSB7XHJcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgbGV0IHhhbWxTdHJpbmcgPSBgLiR7RWxlbWVudE5hbWUuQmFja2dyb3VuZH1gO1xyXG4gICAgICAgIGNvbnN0IGZpbGxzID0gbm9kZS5maWxscztcclxuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi8uLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlVmVjdG9yRWxlbWVudChub2RlKSB7XHJcbiAgICBjb25zdCB2ZWN0b3JQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNvdXJjZSwgdmFsdWU6IHRyYW5zbGF0ZVNvdXJjZShub2RlKSB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHZlY3RvckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkltYWdlLCBwcm9wZXJ0aWVzOiB2ZWN0b3JQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIHZlY3RvckVsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlU291cmNlKG5vZGUpIHtcclxuICAgIGxldCBzb3VyY2VuYW1lID0gbm9kZS5uYW1lLnNwbGl0KCcgJykuam9pbignXycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gYCR7c291cmNlbmFtZX0ucG5nYDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVUZXh0RWxlbWVudChub2RlKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xyXG4gICAgY29uc3QgdGV4dFByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ2hhcmFjdGVyU3BhY2luZywgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUxldHRlclNwYWNpbmcobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdHRyaWJ1dGVzLCB2YWx1ZTogdHJhbnNsYXRlRm9udFdlaWdodFRvRm9udEF0dHJpYnV0ZXMobm9kZS5mb250V2VpZ2h0KSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdXRvU2NhbGluZ0VuYWJsZWQsIHZhbHVlOiB0cmFuc2xhdGVUZXh0QXV0b1Jlc2l6ZVRvRm9udEF1dG9TY2FsaW5nRW5hYmxlZChub2RlLnRleHRBdXRvUmVzaXplKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRTaXplLCB2YWx1ZTogbm9kZS5mb250U2l6ZS50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSG9yaXpvbnRhbFRleHRBbGlnbm1lbnQsIHZhbHVlOiB0cmFuc2xhdGVIb3Jpem9udGFsQWxpZ25tZW50KG5vZGUudGV4dEFsaWduSG9yaXpvbnRhbCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lQnJlYWtNb2RlLCB2YWx1ZTogdHJhbnNsYXRlVGV4dFRydW5jYXRpb25Ub0xpbmVCcmVha01vZGUobm9kZS50ZXh0VHJ1bmNhdGlvbikgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lSGVpZ2h0LCB2YWx1ZTogKF9iID0gdHJhbnNsYXRlTGluZUhlaWdodChub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTWF4TGluZXMsIHZhbHVlOiAoX2QgPSAoX2MgPSBub2RlLm1heExpbmVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dCwgdmFsdWU6IG5vZGUuY2hhcmFjdGVycyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHRDb2xvciwgdmFsdWU6IChfZSA9IGdldEhleENvbG9yRnJvbUZpbGwobm9kZSkpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHREZWNvcmF0aW9ucywgdmFsdWU6IHRyYW5zbGF0ZVRleHREZWNvcmF0aW9uVG9YQU1MKG5vZGUudGV4dERlY29yYXRpb24pIHx8ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHRUcmFuc2Zvcm0sIHZhbHVlOiB0cmFuc2xhdGVUZXh0Q2FzZVRvWEFNTChub2RlLnRleHRDYXNlKSB8fCAnTm9uZScgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGFiZWwsIHByb3BlcnRpZXM6IHRleHRQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIHRleHRFbGVtZW50O1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUxpbmVIZWlnaHQobm9kZSkge1xyXG4gICAgbGV0IGxoID0gbm9kZS5saW5lSGVpZ2h0O1xyXG4gICAgaWYgKFwidmFsdWVcIiBpbiBsaCkge1xyXG4gICAgICAgIHJldHVybiBsaC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxldHRlclNwYWNpbmcobm9kZSkge1xyXG4gICAgbGV0IGxzID0gbm9kZS5sZXR0ZXJTcGFjaW5nLnZhbHVlO1xyXG4gICAgaWYgKGxzICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGxzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGV4Q29sb3JGcm9tRmlsbCh0ZXh0Tm9kZSkge1xyXG4gICAgaWYgKCF0ZXh0Tm9kZSB8fCAhdGV4dE5vZGUuZmlsbHMgfHwgdGV4dE5vZGUuZmlsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWxsID0gdGV4dE5vZGUuZmlsbHNbMF07IC8vIFdlIGFzc3VtZSB0aGUgZmlyc3QgZmlsbCBpcyB0aGUgb25lIHdlIHdhbnRcclxuICAgIGlmIChmaWxsID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XHJcbiAgICAgICAgY29uc3Qgc29saWRGaWxsID0gZmlsbDtcclxuICAgICAgICByZXR1cm4gcmdiVG9IZXgoc29saWRGaWxsLmNvbG9yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZpbGwudHlwZS5zdGFydHNXaXRoKCdHUkFESUVOVCcpKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGdyYWRpZW50IGZpbGxzIChpZiBuZWVkZWQpXHJcbiAgICAgICAgLy8gWW91IGNhbiBhZGQgbG9naWMgaGVyZSB0byBoYW5kbGUgZ3JhZGllbnQgZmlsbHNcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcclxuICAgIGNvbnN0IHIgPSBNYXRoLnJvdW5kKHJnYi5yICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGNvbnN0IGcgPSBNYXRoLnJvdW5kKHJnYi5nICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGNvbnN0IGIgPSBNYXRoLnJvdW5kKHJnYi5iICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGxldCBjb2xvciA9IGAjJHtyfSR7Z30ke2J9YDtcclxuICAgIGlmIChjb2xvciA9PT0gJyMwMDAwMDAnKSB7XHJcbiAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVUZXh0Q2FzZVRvWEFNTCh0ZXh0Q2FzZSkge1xyXG4gICAgc3dpdGNoICh0ZXh0Q2FzZSkge1xyXG4gICAgICAgIGNhc2UgXCJVUFBFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJVcHBlcmNhc2VcIjtcclxuICAgICAgICBjYXNlIFwiTE9XRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTG93ZXJjYXNlXCI7XHJcbiAgICAgICAgY2FzZSBcIlRJVExFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcGl0YWxpemVcIjtcclxuICAgICAgICAvLyBGaWdtYSBcIk9SSUdJTkFMXCIgY29ycmVzcG9uZHMgdG8gXCJOb25lXCIgaW4gWEFNTCwgd2hpY2ggbGVhdmVzIHRoZSB0ZXh0IGNhc2UgYXMgaXMuXHJcbiAgICAgICAgY2FzZSBcIk9SSUdJTkFMXCI6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiOyAvLyBEZWZhdWx0IHRvIG5vIHRyYW5zZm9ybWF0aW9uXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dERlY29yYXRpb25Ub1hBTUwodGV4dERlY29yYXRpb24pIHtcclxuICAgIHN3aXRjaCAodGV4dERlY29yYXRpb24pIHtcclxuICAgICAgICBjYXNlIFwiU1RSSUtFVEhST1VHSFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTdHJpa2V0aHJvdWdoXCI7XHJcbiAgICAgICAgY2FzZSBcIlVOREVSTElORVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJVbmRlcmxpbmVcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUcnVuY2F0aW9uVG9MaW5lQnJlYWtNb2RlKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcclxuICAgIC8vT0JTICEgRG8gbm90IGZ1bGZpbGwgYWxsIExpbmVCcmVha01vZGVzIG9mIFhhbWwuIFNlZSBmb2xsb3dpbmcgbGluayBmb3IgbW9yZSBpbmZvIGFib3V0IExpbmVCcmVha01vZGU6IGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvYXBpL21pY3Jvc29mdC5tYXVpLmxpbmVicmVha21vZGU/dmlldz1uZXQtbWF1aS03LjBcclxuICAgIHN3aXRjaCAoZmlnbWFUZXh0VHJ1bmNhdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJFTkRJTkdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVGFpbFRydW5jYXRpb25cIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIERlZmF1bHQgdG8gTm9XcmFwIGlmIHRoZSB2YWx1ZSBpcyBub3QgcmVjb2duaXplZFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVUZXh0QXV0b1Jlc2l6ZVRvRm9udEF1dG9TY2FsaW5nRW5hYmxlZChmaWdtYVRleHRBdXRvUmVzaXplKSB7XHJcbiAgICBzd2l0Y2ggKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcclxuICAgICAgICBjYXNlIFwiTk9ORVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJmYWxzZVwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjsgLy8gd2hlbiByZXR1cm5pbmcgbm9uZSBpdCB3aWxsIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgeGFtbCB0ZXh0LCBzaW5jZSBpdCBpcyB0aGUgZGVmYXVsdCB2YWx1ZVxyXG4gICAgfVxyXG59XHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byB0cmFuc2xhdGUgRmlnbWEgaG9yaXpvbnRhbCB0ZXh0IGFsaWdubWVudCB0byBYQU1MXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUhvcml6b250YWxBbGlnbm1lbnQoYWxpZ24pIHtcclxuICAgIC8vVE9ETzogZml4IHRoaXMgdG8gY29ycmVjdCB4YW1sXHJcbiAgICBzd2l0Y2ggKGFsaWduKSB7XHJcbiAgICAgICAgY2FzZSBcIkNFTlRFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJDZW50ZXJcIjtcclxuICAgICAgICBjYXNlIFwiUklHSFRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHRcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUZvbnRXZWlnaHRUb0ZvbnRBdHRyaWJ1dGVzKGZpZ21hRm9udFdlaWdodCkge1xyXG4gICAgaWYgKGZpZ21hRm9udFdlaWdodCA+IDQwMCkge1xyXG4gICAgICAgIHJldHVybiAnQm9sZCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiLi9idXR0b24tMi14YW1sXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVJbWFnZUJ1dHRvbkVsZW1lbnQobm9kZSkge1xyXG4gICAgbGV0IGJ1dHRvbkVsZW1lbnQgPSBUcmFuc2xhdGVCdXR0b25FbGVtZW50KG5vZGUpO1xyXG4gICAgbGV0IGltYWdlQnV0dG9uUHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5JbWFnZVNvdXJjZSwgdmFsdWU6IHRyYW5zbGF0ZVNvdXJjZShub2RlKSB9XHJcbiAgICBdO1xyXG4gICAgbGV0IGltYWdlQnV0dG9uRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuSW1hZ2VCdXR0b24sIHByb3BlcnRpZXM6IGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5jb25jYXQoaW1hZ2VCdXR0b25Qcm9wZXJ0aWVzKSB9O1xyXG4gICAgcmV0dXJuIGltYWdlQnV0dG9uRWxlbWVudDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVTb3VyY2Uobm9kZSkge1xyXG4gICAgcmV0dXJuIGAke25vZGUubmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcclxuaW1wb3J0IHsgdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlLCB0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nLCBnZXRIZXhDb2xvckZyb21GaWxsRnJhbWUgfSBmcm9tIFwiLi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9mcmFtZS0yLWxheW91dFwiO1xyXG5pbXBvcnQgeyBnZXRIZXhDb2xvckZyb21GaWxsLCB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcywgdHJhbnNsYXRlTGV0dGVyU3BhY2luZywgdHJhbnNsYXRlVGV4dEF1dG9SZXNpemVUb0ZvbnRBdXRvU2NhbGluZ0VuYWJsZWQsIHRyYW5zbGF0ZVRleHRUcnVuY2F0aW9uVG9MaW5lQnJlYWtNb2RlIH0gZnJvbSBcIi4uL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vdGV4dC0yLWxhYmVsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVCdXR0b25FbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBsZXQgYnV0dG9uUHJvcGVydGllcyA9IFtdO1xyXG4gICAgbGV0IGJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBub2RlKSB7XHJcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGMudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnVEVYVCc6XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uUHJvcGVydGllcyA9IGJ1dHRvblByb3BlcnRpZXMuY29uY2F0KHRleHRQcm9wcyhjKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCBmcmFtZVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQmFja2dyb3VuZCwgdmFsdWU6IChfYSA9IGdldEhleENvbG9yRnJvbUZpbGxGcmFtZShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyQ29sb3IsIHZhbHVlOiAoX2IgPSB0cmFuc2xhdGVTdHJva2VzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyV2lkdGgsIHZhbHVlOiB0cmFuc2xhdGVTdHJva2VXZWlnaHQobm9kZSkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db3JuZXJSYWRpdXMsIHZhbHVlOiBjaGVja0Nvcm5lclJhZGl1cyhub2RlKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcclxuICAgIF07XHJcbiAgICBidXR0b25Qcm9wZXJ0aWVzID0gYnV0dG9uUHJvcGVydGllcy5jb25jYXQoZnJhbWVQcm9wZXJ0aWVzKTtcclxuICAgIGJ1dHRvbkVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJ1dHRvbiwgcHJvcGVydGllczogYnV0dG9uUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcclxuICAgIHJldHVybiBidXR0b25FbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVTdHJva2VzVG9GaWdtYShub2RlKSB7XHJcbiAgICBpZiAoJ3N0cm9rZXMnIGluIG5vZGUpIHtcclxuICAgICAgICBjb25zdCBzdHJva2VzID0gbm9kZS5zdHJva2VzO1xyXG4gICAgICAgIGlmIChzdHJva2VzICYmIHN0cm9rZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdHJva2VzLmZvckVhY2goKHN0cm9rZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZS50eXBlID09PSAnU09MSUQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IHN0cm9rZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlU3Ryb2tlV2VpZ2h0KG5vZGUpIHtcclxuICAgIGlmICgnc3Ryb2tlV2VpZ2h0JyBpbiBub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuc3Ryb2tlV2VpZ2h0LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ05vbmUnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Nvcm5lclJhZGl1cyhub2RlKSB7XHJcbiAgICBpZiAoJ2Nvcm5lclJhZGl1cycgaW4gbm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLmNvcm5lclJhZGl1cyAhPT0gdW5kZWZpbmVkICYmIG5vZGUuY29ybmVyUmFkaXVzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNvcm5lclJhZGl1cy50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnTm9uZSc7XHJcbn1cclxuZnVuY3Rpb24gdGV4dFByb3BzKG5vZGUpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBsZXQgdGV4dFByb3AgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ2hhcmFjdGVyU3BhY2luZywgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUxldHRlclNwYWNpbmcobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRTaXplLCB2YWx1ZTogbm9kZS5mb250U2l6ZS50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dCwgdmFsdWU6IG5vZGUuY2hhcmFjdGVycyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHRDb2xvciwgdmFsdWU6IChfYiA9IGdldEhleENvbG9yRnJvbUZpbGwobm9kZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdHRyaWJ1dGVzLCB2YWx1ZTogdHJhbnNsYXRlRm9udFdlaWdodFRvRm9udEF0dHJpYnV0ZXMobm9kZS5mb250V2VpZ2h0KSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdXRvU2NhbGluZ0VuYWJsZWQsIHZhbHVlOiB0cmFuc2xhdGVUZXh0QXV0b1Jlc2l6ZVRvRm9udEF1dG9TY2FsaW5nRW5hYmxlZChub2RlLnRleHRBdXRvUmVzaXplKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVCcmVha01vZGUsIHZhbHVlOiB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZShub2RlLnRleHRUcnVuY2F0aW9uKSB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiB0ZXh0UHJvcDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVDaGVja0JveEVsZW1lbnQobm9kZSkge1xyXG4gICAgY29uc3QgY2hlY2tCb3hQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLklzQ2hlY2tlZCwgdmFsdWU6IFwiZmFsc2VcIiB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgY2hlY2tCb3hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5DaGVja0JveCwgcHJvcGVydGllczogY2hlY2tCb3hQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIGNoZWNrQm94RWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUVkaXRvckVsZW1lbnQobm9kZSkge1xyXG4gICAgY29uc3QgZWRpdG9yUHJvcGVydGllcyA9IFtdO1xyXG4gICAgY29uc3QgZWRpdG9yRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWRpdG9yLCBwcm9wZXJ0aWVzOiBlZGl0b3JQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIGVkaXRvckVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFbnRyeUVsZW1lbnQobm9kZSkge1xyXG4gICAgY29uc3QgZW50cnlQcm9wZXJ0aWVzID0gW107XHJcbiAgICBjb25zdCBlbnRyeUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkVudHJ5LCBwcm9wZXJ0aWVzOiBlbnRyeVByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gZW50cnlFbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVNsaWRlckVsZW1lbnQobm9kZSkge1xyXG4gICAgY29uc3Qgc2xpZGVyUHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5NYXhpbXVtLCB2YWx1ZTogXCIxMFwiIH1cclxuICAgIF07XHJcbiAgICBjb25zdCBzbGlkZXJFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5TbGlkZXIsIHByb3BlcnRpZXM6IHNsaWRlclByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gc2xpZGVyRWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVTd2l0Y2hFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHN3aXRjaFByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSXNUb2dnbGVkLCB2YWx1ZTogXCJmYWxzZVwiIH1cclxuICAgIF07XHJcbiAgICBjb25zdCBzd2l0Y2hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5Td2l0Y2gsIHByb3BlcnRpZXM6IHN3aXRjaFByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gc3dpdGNoRWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5pbXBvcnQgeyBnZXRJbmRlbnRhdGlvbiB9IGZyb20gXCIuL3hhbWwtdmlld1wiO1xyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ29udHJvbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sTmFtZSwgYmluZGluZ3MpIHtcclxuICAgICAgICB0aGlzLmVuZFRhZyA9ICcvPlxcbic7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdG9DYW1lbENhc2UoY29udHJvbE5hbWUpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSBiaW5kaW5ncztcclxuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gdGhpcy5mb3JtYXRTdGFydFRhZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3RhcnRUYWcobGV2ZWwgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZW50ID0gZ2V0SW5kZW50YXRpb24obGV2ZWwpO1xyXG4gICAgICAgIHJldHVybiBpbmRlbnQgKyB0aGlzLnN0YXJ0VGFnICsgdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kVGFnKGxldmVsID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGluZGVudCA9IGdldEluZGVudGF0aW9uKGxldmVsKTtcclxuICAgICAgICByZXR1cm4gaW5kZW50ICsgdGhpcy5lbmRUYWc7XHJcbiAgICB9XHJcbiAgICBmb3JtYXRTdGFydFRhZygpIHtcclxuICAgICAgICBsZXQgc2V0QmluZGluZ3MgPSAnJztcclxuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goYiA9PiBzZXRCaW5kaW5ncyArPSBgJHtiLm5hbWV9ID0gJHtiLnZhbHVlfVxcbmApO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGNvbnRyb2w6JHt0aGlzLm5hbWV9ICR7c2V0QmluZGluZ3N9YDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5leHBvcnQgY2xhc3MgQ29udGVudFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEVuZFRhZyA9ICc+JztcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gJyc7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdG9DYW1lbENhc2UoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gRm9ybWF0UGFnZVN0YXJ0VGFnKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnXFxuPC9Db250ZW50UGFnZT4nO1xyXG4gICAgfVxyXG4gICAgZ2V0U3RhcnRUYWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUYWcgKyB0aGlzLnN0YXJ0RW5kVGFnO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kVGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRDb250cm9sKHBhZ2UpIHtcclxuICAgIHBhZ2Uuc3RhcnRUYWcgPSBgJHtwYWdlLnN0YXJ0VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zOmNvbnRyb2xzPWNsci1uYW1lc3BhY2U6Q3VzdG9tQ29udHJvbHNcXG5gO1xyXG59XHJcbmZ1bmN0aW9uIEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiBgPENvbnRlbnRQYWdlIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9JHtjbGFzc05hbWV9UGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHg6TmFtZT0ke2NsYXNzTmFtZX1cXG5gO1xyXG59XHJcbiIsImltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBDb250ZW50VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz5cXG4nO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSAnJztcclxuICAgICAgICB0aGlzLm5hbWUgPSB0b0NhbWVsQ2FzZShjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBmb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmVuZFRhZyA9ICdcXG48L0NvbnRlbnRWaWV3Pic7XHJcbiAgICB9XHJcbiAgICBnZXRTdGFydFRhZyhsZXZlbCA9IDApIHtcclxuICAgICAgICBjb25zdCBpbmRlbnQgPSBnZXRJbmRlbnRhdGlvbihsZXZlbCk7XHJcbiAgICAgICAgcmV0dXJuIGluZGVudCArIHRoaXMuc3RhcnRUYWcgKyB0aGlzLnN0YXJ0RW5kVGFnO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kVGFnKGxldmVsID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGluZGVudCA9IGdldEluZGVudGF0aW9uKGxldmVsKTtcclxuICAgICAgICByZXR1cm4gaW5kZW50ICsgdGhpcy5lbmRUYWc7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0UGFnZVN0YXJ0VGFnKGNsYXNzTmFtZSkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIC8vIENyZWF0ZSBhIGZvbGRlciB1bmRlciBSZXNvdXJjZXMgY2FsbGVkIFwiQ3VzdG9tQ29udHJvbHNcIiBhbmQgbWFrZSBhIG5ldyBcIkNvbnRlbnRWaWV3XCIgaW4gdGhlcmUgXHJcbiAgICA8Q29udGVudFZpZXcgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2RvdG5ldC8yMDIxL21hdWlcIlxyXG4gICAgICAgICAgICAgICAgIHhtbG5zOng9XCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dpbmZ4LzIwMDkveGFtbFwiXHJcbiAgICAgICAgICAgICAgICAgeDpDbGFzcz1DdXN0b21Db250cm9scy4ke3RvQ2FtZWxDYXNlKGNsYXNzTmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgeDpOYW1lPVwiJHtjbGFzc05hbWV9XCJgO1xyXG59XHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byByZXR1cm4gaW5kZW50YXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluZGVudGF0aW9uKGxldmVsKSB7XHJcbiAgICByZXR1cm4gJyAgICAnLnJlcGVhdChsZXZlbCk7IC8vIEFzc3VtaW5nIDQgc3BhY2VzIHBlciBsZXZlbFxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUGFyc2VGaWdtYSB9IGZyb20gXCIuL1hhbWxQYXJzZXJcIjtcclxuLy8gc3JjL3BsdWdpbi50c1xyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfSk7XHJcbmZ1bmN0aW9uIG1ha2VEaXNwbGF5Tm9kZShfbm9kZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogX25vZGUubmFtZSwgdXR5cGU6ICdOb25lJywgbm9kZTogX25vZGUgfTtcclxufVxyXG5mdW5jdGlvbiBjaGlsZHJlblRvTmVzdGVkTm9kZXMoY24pIHtcclxuICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgIGNuLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICBjb25zdCBubiA9IHRyYXZlcnNlKGMpO1xyXG4gICAgICAgIGxpc3QucHVzaChubik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcbmZ1bmN0aW9uIHRyYXZlcnNlKGNuKSB7XHJcbiAgICBjb25zdCBkbiA9IG1ha2VEaXNwbGF5Tm9kZShjbik7XHJcbiAgICBjb25zdCBubiA9IHtcclxuICAgICAgICBwYXJlbnQ6IGRuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH07XHJcbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBjbikge1xyXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBoYXMgY2hpbGRyZW4sIHdlIG11c3QgZ28gdGhyb3VnaCB0aGVtIGFuZCBtYWtlIHRoZW0gaW50byBuZXN0ZWQgbm9kZXNcclxuICAgICAgICBubi5jaGlsZHJlbiA9IGNoaWxkcmVuVG9OZXN0ZWROb2Rlcyhjbi5jaGlsZHJlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm47XHJcbn1cclxuY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xyXG5pZiAoc2VsZWN0aW9uICE9PSB1bmRlZmluZWQgfHwgbnVsbCkge1xyXG4gICAgY29uc3Qgcm9vdE5vZGUgPSBtYWtlRGlzcGxheU5vZGUoc2VsZWN0aW9uKTtcclxuICAgIGxldCBsaXN0ID0gW107XHJcbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBzZWxlY3Rpb24pIHtcclxuICAgICAgICBzZWxlY3Rpb24uY2hpbGRyZW4uZm9yRWFjaChjID0+IGxpc3QucHVzaChjKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBub2RlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudDogcm9vdE5vZGUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblRvTmVzdGVkTm9kZXMobGlzdCksXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBsZXQgbm9kZXMyUGFyc2UgPSBbXTtcclxuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogJ2luaXQnLCBub2RlcyB9KTtcclxuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdvdCB0aGlzIGZyb20gdGhlIFVJXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgIG5vZGVzMlBhcnNlID0gdXBkYXRlRGlzcGxheU5vZGVVVHlwZShub2RlcywgbWVzc2FnZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheU5vZGVVVHlwZShzZWxlY3Rpb24sIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbWFwcGluZyBvZiBCYXNlTm9kZS5pZCB0byBzZWxlY3RlZFZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVNYXAgPSB7fTtcclxuICAgICAgICAgICAgbWVzc2FnZS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlTWFwW2l0ZW0ubm9kZS5wYXJlbnQubm9kZS5pZF0gPSBpdGVtLnNlbGVjdGVkVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgYXJyYXkgdG8gaG9sZCB0aGUgdXBkYXRlZCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICAvLyBSZWN1cnNpdmUgZnVuY3Rpb24gdG8gdXBkYXRlIG5vZGVzXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlTWFwW25vZGUucGFyZW50Lm5vZGUuaWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBub2RlIHdpdGggdXBkYXRlZCB1dHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQYXJlbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG5vZGUucGFyZW50KSwgeyB1dHlwZTogc2VsZWN0ZWRWYWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IHVwZGF0ZWRQYXJlbnQsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHVwZGF0ZUNoaWxkcmVuKGNoaWxkKSkgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIHVwZGF0ZSBpcyBuZWVkZWQsIHJldHVybiB0aGUgb3JpZ2luYWwgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHBhcmVudDogbm9kZS5wYXJlbnQsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHVwZGF0ZUNoaWxkcmVuKGNoaWxkKSkgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHNlbGVjdGlvbiBhbmQgdXBkYXRlIG5vZGVzIGJhc2VkIG9uIHRoZSBtZXNzYWdlXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChuZXN0ZWROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTm9kZSA9IHVwZGF0ZUNoaWxkcmVuKG5lc3RlZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZFNlbGVjdGlvbi5wdXNoKHVwZGF0ZWROb2RlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkU2VsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IFBhcnNlRmlnbWEobm9kZXMyUGFyc2UpO1xyXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJmaWxlSW5mb1wiLCB0ZXh0Q29udGVudCB9KTtcclxuICAgIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9