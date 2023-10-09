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
    ElementName[ElementName["CollectionView"] = 1] = "CollectionView";
    ElementName[ElementName["Background"] = 2] = "Background";
    ElementName[ElementName["LinearGradientBrush"] = 3] = "LinearGradientBrush";
    ElementName[ElementName["RadialGradientBrush"] = 4] = "RadialGradientBrush";
    ElementName[ElementName["GradientStop"] = 5] = "GradientStop";
    ElementName[ElementName["Shadow"] = 6] = "Shadow";
    ElementName[ElementName["Label"] = 7] = "Label";
    ElementName[ElementName["Button"] = 8] = "Button";
    ElementName[ElementName["Editor"] = 9] = "Editor";
    ElementName[ElementName["Entry"] = 10] = "Entry";
    ElementName[ElementName["StackFrame"] = 11] = "StackFrame";
    ElementName[ElementName["TextBlock"] = 12] = "TextBlock";
    ElementName[ElementName["TextBox"] = 13] = "TextBox";
    ElementName[ElementName["ComboBox"] = 14] = "ComboBox";
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
    PropertyName[PropertyName["ForegroundColor"] = 54] = "ForegroundColor";
    PropertyName[PropertyName["BorderColor"] = 55] = "BorderColor";
    PropertyName[PropertyName["BorderThickness"] = 56] = "BorderThickness";
    PropertyName[PropertyName["Visibility"] = 57] = "Visibility";
    PropertyName[PropertyName["IsEnabled"] = 58] = "IsEnabled";
    PropertyName[PropertyName["IsReadOnly"] = 59] = "IsReadOnly";
    PropertyName[PropertyName["FontWeight"] = 60] = "FontWeight";
    PropertyName[PropertyName["FontStyle"] = 61] = "FontStyle";
    PropertyName[PropertyName["TextAlignment"] = 62] = "TextAlignment";
    PropertyName[PropertyName["ImageSource"] = 63] = "ImageSource";
    PropertyName[PropertyName["Source"] = 64] = "Source";
    PropertyName[PropertyName["HorizontalAlignment"] = 65] = "HorizontalAlignment";
    PropertyName[PropertyName["VerticalAlignment"] = 66] = "VerticalAlignment";
    PropertyName[PropertyName["Opacity"] = 67] = "Opacity";
    PropertyName[PropertyName["Command"] = 68] = "Command";
    PropertyName[PropertyName["CommandParameter"] = 69] = "CommandParameter";
    PropertyName[PropertyName["IsChecked"] = 70] = "IsChecked";
    PropertyName[PropertyName["Content"] = 71] = "Content";
    PropertyName[PropertyName["Header"] = 72] = "Header";
    PropertyName[PropertyName["PlaceholderText"] = 73] = "PlaceholderText";
    PropertyName[PropertyName["PlaceholderTextColor"] = 74] = "PlaceholderTextColor";
    PropertyName[PropertyName["IsVisible"] = 75] = "IsVisible";
    PropertyName[PropertyName["IsFocused"] = 76] = "IsFocused";
    PropertyName[PropertyName["IsSelected"] = 77] = "IsSelected";
    PropertyName[PropertyName["ItemsSource"] = 78] = "ItemsSource";
    PropertyName[PropertyName["ItemTemplate"] = 79] = "ItemTemplate";
    PropertyName[PropertyName["Placeholder"] = 80] = "Placeholder";
    PropertyName[PropertyName["SelectedIndex"] = 81] = "SelectedIndex";
    PropertyName[PropertyName["Minimum"] = 82] = "Minimum";
    PropertyName[PropertyName["Maximum"] = 83] = "Maximum";
    PropertyName[PropertyName["Value"] = 84] = "Value";
    PropertyName[PropertyName["IsToggled"] = 85] = "IsToggled";
    PropertyName[PropertyName["CornerRadius"] = 86] = "CornerRadius";
    PropertyName[PropertyName["IsPassword"] = 87] = "IsPassword";
    PropertyName[PropertyName["IsReadOnlyCaretVisible"] = 88] = "IsReadOnlyCaretVisible";
    PropertyName[PropertyName["Items"] = 89] = "Items";
    PropertyName[PropertyName["IsOpen"] = 90] = "IsOpen";
    PropertyName[PropertyName["IsEditable"] = 91] = "IsEditable";
    PropertyName[PropertyName["DisplayMemberPath"] = 92] = "DisplayMemberPath";
    PropertyName[PropertyName["SelectedValue"] = 93] = "SelectedValue";
    PropertyName[PropertyName["SelectedValuePath"] = 94] = "SelectedValuePath";
    PropertyName[PropertyName["HeaderTemplate"] = 95] = "HeaderTemplate";
    PropertyName[PropertyName["FooterTemplate"] = 96] = "FooterTemplate";
    PropertyName[PropertyName["Icon"] = 97] = "Icon";
    PropertyName[PropertyName["IconSource"] = 98] = "IconSource";
    PropertyName[PropertyName["GroupName"] = 99] = "GroupName";
    PropertyName[PropertyName["CanUserSort"] = 100] = "CanUserSort";
    PropertyName[PropertyName["CanUserFilter"] = 101] = "CanUserFilter";
    PropertyName[PropertyName["Columns"] = 102] = "Columns";
    PropertyName[PropertyName["Rows"] = 103] = "Rows";
    PropertyName[PropertyName["ColumnDefinitions"] = 104] = "ColumnDefinitions";
    PropertyName[PropertyName["RowDefinitions"] = 105] = "RowDefinitions";
    PropertyName[PropertyName["CellPadding"] = 106] = "CellPadding";
    PropertyName[PropertyName["RowSpan"] = 107] = "RowSpan";
    PropertyName[PropertyName["ColumnSpan"] = 108] = "ColumnSpan";
    PropertyName[PropertyName["IsHeaderVisible"] = 109] = "IsHeaderVisible";
    PropertyName[PropertyName["IsSortable"] = 110] = "IsSortable";
    PropertyName[PropertyName["SortDirection"] = 111] = "SortDirection";
    PropertyName[PropertyName["GroupHeaderTemplate"] = 112] = "GroupHeaderTemplate";
    PropertyName[PropertyName["GroupFooterTemplate"] = 113] = "GroupFooterTemplate";
    PropertyName[PropertyName["GroupStyle"] = 114] = "GroupStyle";
    PropertyName[PropertyName["IsExpanded"] = 115] = "IsExpanded";
    PropertyName[PropertyName["ItemsPanel"] = 116] = "ItemsPanel";
    PropertyName[PropertyName["AlternatingRowColor"] = 117] = "AlternatingRowColor";
    PropertyName[PropertyName["ItemContainerStyle"] = 118] = "ItemContainerStyle";
    PropertyName[PropertyName["ItemContainerStyleSelector"] = 119] = "ItemContainerStyleSelector";
    PropertyName[PropertyName["ItemTemplateSelector"] = 120] = "ItemTemplateSelector";
    PropertyName[PropertyName["GroupHeaderStyle"] = 121] = "GroupHeaderStyle";
    PropertyName[PropertyName["GroupFooterStyle"] = 122] = "GroupFooterStyle";
    PropertyName[PropertyName["GroupFooterTemplateSelector"] = 123] = "GroupFooterTemplateSelector";
    PropertyName[PropertyName["ColumnHeaderStyle"] = 124] = "ColumnHeaderStyle";
    PropertyName[PropertyName["ColumnHeaderTemplateSelector"] = 125] = "ColumnHeaderTemplateSelector";
    PropertyName[PropertyName["FrozenColumnCount"] = 126] = "FrozenColumnCount";
    PropertyName[PropertyName["AutoGenerateColumns"] = 127] = "AutoGenerateColumns";
    PropertyName[PropertyName["ColumnsSource"] = 128] = "ColumnsSource";
    PropertyName[PropertyName["ColumnsWidth"] = 129] = "ColumnsWidth";
    PropertyName[PropertyName["SortMemberPath"] = 130] = "SortMemberPath";
    PropertyName[PropertyName["RowHeaderTemplate"] = 131] = "RowHeaderTemplate";
    PropertyName[PropertyName["RowHeaderStyle"] = 132] = "RowHeaderStyle";
    PropertyName[PropertyName["RowHeaderTemplateSelector"] = 133] = "RowHeaderTemplateSelector";
    PropertyName[PropertyName["AlternationCount"] = 134] = "AlternationCount";
    PropertyName[PropertyName["IsAlternatingRowColorEnabled"] = 135] = "IsAlternatingRowColorEnabled";
    PropertyName[PropertyName["IsItemClickEnabled"] = 136] = "IsItemClickEnabled";
    PropertyName[PropertyName["HorizontalScrollBarVisibility"] = 137] = "HorizontalScrollBarVisibility";
    PropertyName[PropertyName["VerticalScrollBarVisibility"] = 138] = "VerticalScrollBarVisibility";
    PropertyName[PropertyName["SelectionMode"] = 139] = "SelectionMode";
    PropertyName[PropertyName["SelectedItems"] = 140] = "SelectedItems";
    PropertyName[PropertyName["SelectedItem"] = 141] = "SelectedItem";
    PropertyName[PropertyName["ItemClick"] = 142] = "ItemClick";
    PropertyName[PropertyName["IsSticky"] = 143] = "IsSticky";
    PropertyName[PropertyName["IsPullToRefreshEnabled"] = 144] = "IsPullToRefreshEnabled";
    PropertyName[PropertyName["RefreshCommand"] = 145] = "RefreshCommand";
    PropertyName[PropertyName["IsPullToRefreshRefreshing"] = 146] = "IsPullToRefreshRefreshing";
    PropertyName[PropertyName["IsPullToRefreshRefreshingChanged"] = 147] = "IsPullToRefreshRefreshingChanged";
    PropertyName[PropertyName["IsLoadMoreEnabled"] = 148] = "IsLoadMoreEnabled";
    PropertyName[PropertyName["LoadMoreCommand"] = 149] = "LoadMoreCommand";
    PropertyName[PropertyName["IsLoadMoreLoading"] = 150] = "IsLoadMoreLoading";
    PropertyName[PropertyName["IsLoadMoreLoadingChanged"] = 151] = "IsLoadMoreLoadingChanged";
    PropertyName[PropertyName["ItemTapped"] = 152] = "ItemTapped";
    PropertyName[PropertyName["ItemSelected"] = 153] = "ItemSelected";
    PropertyName[PropertyName["ItemDoubleTapped"] = 154] = "ItemDoubleTapped";
    PropertyName[PropertyName["SwipeLeftCommand"] = 155] = "SwipeLeftCommand";
    PropertyName[PropertyName["SwipeRightCommand"] = 156] = "SwipeRightCommand";
    PropertyName[PropertyName["SwipeUpCommand"] = 157] = "SwipeUpCommand";
    PropertyName[PropertyName["SwipeDownCommand"] = 158] = "SwipeDownCommand";
    PropertyName[PropertyName["SwipeItems"] = 159] = "SwipeItems";
    PropertyName[PropertyName["IsRefreshing"] = 160] = "IsRefreshing";
    PropertyName[PropertyName["RefreshCommandParameter"] = 161] = "RefreshCommandParameter";
    PropertyName[PropertyName["RowHeight"] = 162] = "RowHeight";
    PropertyName[PropertyName["AutoGenerateItem"] = 163] = "AutoGenerateItem";
    PropertyName[PropertyName["ScrollMode"] = 164] = "ScrollMode";
    PropertyName[PropertyName["ScrollBarVisibility"] = 165] = "ScrollBarVisibility";
    PropertyName[PropertyName["ScrollTo"] = 166] = "ScrollTo";
    PropertyName[PropertyName["ScrollToRow"] = 167] = "ScrollToRow";
    PropertyName[PropertyName["ScrollToRowIndex"] = 168] = "ScrollToRowIndex";
    PropertyName[PropertyName["ScrollToColumn"] = 169] = "ScrollToColumn";
    PropertyName[PropertyName["ScrollToColumnIndex"] = 170] = "ScrollToColumnIndex";
    PropertyName[PropertyName["HeaderTemplateSelector"] = 171] = "HeaderTemplateSelector";
    PropertyName[PropertyName["FooterTemplateSelector"] = 172] = "FooterTemplateSelector";
    PropertyName[PropertyName["GroupHeaderTemplateSelector"] = 173] = "GroupHeaderTemplateSelector";
    PropertyName[PropertyName["RowHeightResizer"] = 174] = "RowHeightResizer";
    PropertyName[PropertyName["OnPullStarted"] = 175] = "OnPullStarted";
    PropertyName[PropertyName["OnPullDelta"] = 176] = "OnPullDelta";
    PropertyName[PropertyName["OnPullCompleted"] = 177] = "OnPullCompleted";
    PropertyName[PropertyName["OnPullContent"] = 178] = "OnPullContent";
    PropertyName[PropertyName["OnReleaseContent"] = 179] = "OnReleaseContent";
    PropertyName[PropertyName["OnSwipeStarted"] = 180] = "OnSwipeStarted";
    PropertyName[PropertyName["OnSwipeDelta"] = 181] = "OnSwipeDelta";
    PropertyName[PropertyName["OnSwipeCompleted"] = 182] = "OnSwipeCompleted";
    PropertyName[PropertyName["OnRevealing"] = 183] = "OnRevealing";
    PropertyName[PropertyName["OnSwipeEnded"] = 184] = "OnSwipeEnded";
    PropertyName[PropertyName["OnRevealed"] = 185] = "OnRevealed";
    PropertyName[PropertyName["OnExecute"] = 186] = "OnExecute";
    PropertyName[PropertyName["OnHiding"] = 187] = "OnHiding";
    PropertyName[PropertyName["OnHidden"] = 188] = "OnHidden";
    PropertyName[PropertyName["OnStateChange"] = 189] = "OnStateChange";
    PropertyName[PropertyName["AnimationDuration"] = 190] = "AnimationDuration";
    PropertyName[PropertyName["MaxTopOffset"] = 191] = "MaxTopOffset";
    PropertyName[PropertyName["MinTopOffset"] = 192] = "MinTopOffset";
    PropertyName[PropertyName["MinTopRevealed"] = 193] = "MinTopRevealed";
    PropertyName[PropertyName["MaxTopRevealed"] = 194] = "MaxTopRevealed";
    PropertyName[PropertyName["ContentTemplate"] = 195] = "ContentTemplate";
    PropertyName[PropertyName["ContentTemplateSelector"] = 196] = "ContentTemplateSelector";
    PropertyName[PropertyName["Rotation"] = 197] = "Rotation";
    PropertyName[PropertyName["Scale"] = 198] = "Scale";
    PropertyName[PropertyName["TranslationX"] = 199] = "TranslationX";
    PropertyName[PropertyName["TranslationY"] = 200] = "TranslationY";
    PropertyName[PropertyName["LayoutX"] = 201] = "LayoutX";
    PropertyName[PropertyName["LayoutY"] = 202] = "LayoutY";
    PropertyName[PropertyName["WidthRequest"] = 203] = "WidthRequest";
    PropertyName[PropertyName["HeightRequest"] = 204] = "HeightRequest";
    PropertyName[PropertyName["MinimumWidthRequest"] = 205] = "MinimumWidthRequest";
    PropertyName[PropertyName["MinimumHeightRequest"] = 206] = "MinimumHeightRequest";
    PropertyName[PropertyName["AnchorX"] = 207] = "AnchorX";
    PropertyName[PropertyName["AnchorY"] = 208] = "AnchorY";
    PropertyName[PropertyName["RotationX"] = 209] = "RotationX";
    PropertyName[PropertyName["RotationY"] = 210] = "RotationY";
    PropertyName[PropertyName["ScaleX"] = 211] = "ScaleX";
    PropertyName[PropertyName["ScaleY"] = 212] = "ScaleY";
    PropertyName[PropertyName["PlatformConfiguration"] = 213] = "PlatformConfiguration";
    PropertyName[PropertyName["GestureRecognizers"] = 214] = "GestureRecognizers";
    PropertyName[PropertyName["Behavior"] = 215] = "Behavior";
    PropertyName[PropertyName["Triggers"] = 216] = "Triggers";
    PropertyName[PropertyName["ClassId"] = 217] = "ClassId";
    PropertyName[PropertyName["StyleId"] = 218] = "StyleId";
    PropertyName[PropertyName["FlowDirection"] = 219] = "FlowDirection";
    PropertyName[PropertyName["InputTransparent"] = 220] = "InputTransparent";
    PropertyName[PropertyName["IsVisibleBackgroundColor"] = 221] = "IsVisibleBackgroundColor";
    PropertyName[PropertyName["IsVisibleBorderColor"] = 222] = "IsVisibleBorderColor";
    PropertyName[PropertyName["IsVisibleCornerRadius"] = 223] = "IsVisibleCornerRadius";
    PropertyName[PropertyName["IsVisibleElevation"] = 224] = "IsVisibleElevation";
    PropertyName[PropertyName["IsVisiblePadding"] = 225] = "IsVisiblePadding";
    PropertyName[PropertyName["IsVisiblePlaceholder"] = 226] = "IsVisiblePlaceholder";
    PropertyName[PropertyName["IsVisibleSeparatorColor"] = 227] = "IsVisibleSeparatorColor";
    PropertyName[PropertyName["IsVisibleSeparatorWidth"] = 228] = "IsVisibleSeparatorWidth";
    PropertyName[PropertyName["IsVisibleShadow"] = 229] = "IsVisibleShadow";
    PropertyName[PropertyName["IsVisibleStroke"] = 230] = "IsVisibleStroke";
    PropertyName[PropertyName["IsVisibleTextColor"] = 231] = "IsVisibleTextColor";
    PropertyName[PropertyName["IsVisibleTextDecorations"] = 232] = "IsVisibleTextDecorations";
    PropertyName[PropertyName["IsVisibleTranslationX"] = 233] = "IsVisibleTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationY"] = 234] = "IsVisibleTranslationY";
    PropertyName[PropertyName["IsVisibleRotation"] = 235] = "IsVisibleRotation";
    PropertyName[PropertyName["IsVisibleScale"] = 236] = "IsVisibleScale";
    PropertyName[PropertyName["IsVisibleHeightRequest"] = 237] = "IsVisibleHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequest"] = 238] = "IsVisibleWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequest"] = 239] = "IsVisibleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequest"] = 240] = "IsVisibleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraints"] = 241] = "IsVisiblePaddingConstraints";
    PropertyName[PropertyName["IsVisibleRowSpacing"] = 242] = "IsVisibleRowSpacing";
    PropertyName[PropertyName["IsVisibleColumnSpacing"] = 243] = "IsVisibleColumnSpacing";
    PropertyName[PropertyName["IsVisibleBackgroundColorOpacity"] = 244] = "IsVisibleBackgroundColorOpacity";
    PropertyName[PropertyName["IsVisibleBorderColorOpacity"] = 245] = "IsVisibleBorderColorOpacity";
    PropertyName[PropertyName["IsVisibleSeparatorColorOpacity"] = 246] = "IsVisibleSeparatorColorOpacity";
    PropertyName[PropertyName["IsVisibleShadowOpacity"] = 247] = "IsVisibleShadowOpacity";
    PropertyName[PropertyName["IsVisibleTextColorOpacity"] = 248] = "IsVisibleTextColorOpacity";
    PropertyName[PropertyName["IsVisibleTranslationXOpacity"] = 249] = "IsVisibleTranslationXOpacity";
    PropertyName[PropertyName["IsVisibleTranslationYOpacity"] = 250] = "IsVisibleTranslationYOpacity";
    PropertyName[PropertyName["IsVisibleRotationOpacity"] = 251] = "IsVisibleRotationOpacity";
    PropertyName[PropertyName["IsVisibleScaleOpacity"] = 252] = "IsVisibleScaleOpacity";
    PropertyName[PropertyName["IsVisibleHeightRequestOpacity"] = 253] = "IsVisibleHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleWidthRequestOpacity"] = 254] = "IsVisibleWidthRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestOpacity"] = 255] = "IsVisibleMinimumHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestOpacity"] = 256] = "IsVisibleMinimumWidthRequestOpacity";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsOpacity"] = 257] = "IsVisiblePaddingConstraintsOpacity";
    PropertyName[PropertyName["IsVisibleRowSpacingOpacity"] = 258] = "IsVisibleRowSpacingOpacity";
    PropertyName[PropertyName["IsVisibleColumnSpacingOpacity"] = 259] = "IsVisibleColumnSpacingOpacity";
    PropertyName[PropertyName["IsEditableLayout"] = 260] = "IsEditableLayout";
    PropertyName[PropertyName["IsEnabledOpacity"] = 261] = "IsEnabledOpacity";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotation"] = 262] = "IsVisibleBackgroundColorRotation";
    PropertyName[PropertyName["IsVisibleBorderColorRotation"] = 263] = "IsVisibleBorderColorRotation";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotation"] = 264] = "IsVisibleCornerRadiusRotation";
    PropertyName[PropertyName["IsVisibleElevationRotation"] = 265] = "IsVisibleElevationRotation";
    PropertyName[PropertyName["IsVisiblePaddingRotation"] = 266] = "IsVisiblePaddingRotation";
    PropertyName[PropertyName["IsVisiblePlaceholderRotation"] = 267] = "IsVisiblePlaceholderRotation";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotation"] = 268] = "IsVisibleSeparatorColorRotation";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotation"] = 269] = "IsVisibleSeparatorWidthRotation";
    PropertyName[PropertyName["IsVisibleShadowRotation"] = 270] = "IsVisibleShadowRotation";
    PropertyName[PropertyName["IsVisibleStrokeRotation"] = 271] = "IsVisibleStrokeRotation";
    PropertyName[PropertyName["IsVisibleTextColorRotation"] = 272] = "IsVisibleTextColorRotation";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotation"] = 273] = "IsVisibleTextDecorationsRotation";
    PropertyName[PropertyName["IsVisibleTranslationXRotation"] = 274] = "IsVisibleTranslationXRotation";
    PropertyName[PropertyName["IsVisibleTranslationYRotation"] = 275] = "IsVisibleTranslationYRotation";
    PropertyName[PropertyName["IsVisibleRotationRotation"] = 276] = "IsVisibleRotationRotation";
    PropertyName[PropertyName["IsVisibleScaleRotation"] = 277] = "IsVisibleScaleRotation";
    PropertyName[PropertyName["IsVisibleHeightRequestRotation"] = 278] = "IsVisibleHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleWidthRequestRotation"] = 279] = "IsVisibleWidthRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotation"] = 280] = "IsVisibleMinimumHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotation"] = 281] = "IsVisibleMinimumWidthRequestRotation";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotation"] = 282] = "IsVisiblePaddingConstraintsRotation";
    PropertyName[PropertyName["IsVisibleRowSpacingRotation"] = 283] = "IsVisibleRowSpacingRotation";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotation"] = 284] = "IsVisibleColumnSpacingRotation";
    PropertyName[PropertyName["IsVisibleBackgroundColorScale"] = 285] = "IsVisibleBackgroundColorScale";
    PropertyName[PropertyName["IsVisibleBorderColorScale"] = 286] = "IsVisibleBorderColorScale";
    PropertyName[PropertyName["IsVisibleCornerRadiusScale"] = 287] = "IsVisibleCornerRadiusScale";
    PropertyName[PropertyName["IsVisibleElevationScale"] = 288] = "IsVisibleElevationScale";
    PropertyName[PropertyName["IsVisiblePaddingScale"] = 289] = "IsVisiblePaddingScale";
    PropertyName[PropertyName["IsVisiblePlaceholderScale"] = 290] = "IsVisiblePlaceholderScale";
    PropertyName[PropertyName["IsVisibleSeparatorColorScale"] = 291] = "IsVisibleSeparatorColorScale";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScale"] = 292] = "IsVisibleSeparatorWidthScale";
    PropertyName[PropertyName["IsVisibleShadowScale"] = 293] = "IsVisibleShadowScale";
    PropertyName[PropertyName["IsVisibleStrokeScale"] = 294] = "IsVisibleStrokeScale";
    PropertyName[PropertyName["IsVisibleTextColorScale"] = 295] = "IsVisibleTextColorScale";
    PropertyName[PropertyName["IsVisibleTextDecorationsScale"] = 296] = "IsVisibleTextDecorationsScale";
    PropertyName[PropertyName["IsVisibleTranslationXScale"] = 297] = "IsVisibleTranslationXScale";
    PropertyName[PropertyName["IsVisibleTranslationYScale"] = 298] = "IsVisibleTranslationYScale";
    PropertyName[PropertyName["IsVisibleRotationScale"] = 299] = "IsVisibleRotationScale";
    PropertyName[PropertyName["IsVisibleScaleScale"] = 300] = "IsVisibleScaleScale";
    PropertyName[PropertyName["IsVisibleHeightRequestScale"] = 301] = "IsVisibleHeightRequestScale";
    PropertyName[PropertyName["IsVisibleWidthRequestScale"] = 302] = "IsVisibleWidthRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScale"] = 303] = "IsVisibleMinimumHeightRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScale"] = 304] = "IsVisibleMinimumWidthRequestScale";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScale"] = 305] = "IsVisiblePaddingConstraintsScale";
    PropertyName[PropertyName["IsVisibleRowSpacingScale"] = 306] = "IsVisibleRowSpacingScale";
    PropertyName[PropertyName["IsVisibleColumnSpacingScale"] = 307] = "IsVisibleColumnSpacingScale";
    PropertyName[PropertyName["IsEnabledScale"] = 308] = "IsEnabledScale";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleX"] = 309] = "IsVisibleBackgroundColorScaleX";
    PropertyName[PropertyName["IsVisibleBorderColorScaleX"] = 310] = "IsVisibleBorderColorScaleX";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleX"] = 311] = "IsVisibleCornerRadiusScaleX";
    PropertyName[PropertyName["IsVisibleElevationScaleX"] = 312] = "IsVisibleElevationScaleX";
    PropertyName[PropertyName["IsVisiblePaddingScaleX"] = 313] = "IsVisiblePaddingScaleX";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleX"] = 314] = "IsVisiblePlaceholderScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleX"] = 315] = "IsVisibleSeparatorColorScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleX"] = 316] = "IsVisibleSeparatorWidthScaleX";
    PropertyName[PropertyName["IsVisibleShadowScaleX"] = 317] = "IsVisibleShadowScaleX";
    PropertyName[PropertyName["IsVisibleStrokeScaleX"] = 318] = "IsVisibleStrokeScaleX";
    PropertyName[PropertyName["IsVisibleTextColorScaleX"] = 319] = "IsVisibleTextColorScaleX";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleX"] = 320] = "IsVisibleTextDecorationsScaleX";
    PropertyName[PropertyName["IsVisibleTranslationXScaleX"] = 321] = "IsVisibleTranslationXScaleX";
    PropertyName[PropertyName["IsVisibleTranslationYScaleX"] = 322] = "IsVisibleTranslationYScaleX";
    PropertyName[PropertyName["IsVisibleRotationScaleX"] = 323] = "IsVisibleRotationScaleX";
    PropertyName[PropertyName["IsVisibleScaleScaleX"] = 324] = "IsVisibleScaleScaleX";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleX"] = 325] = "IsVisibleHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleX"] = 326] = "IsVisibleWidthRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleX"] = 327] = "IsVisibleMinimumHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleX"] = 328] = "IsVisibleMinimumWidthRequestScaleX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleX"] = 329] = "IsVisiblePaddingConstraintsScaleX";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleX"] = 330] = "IsVisibleRowSpacingScaleX";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleX"] = 331] = "IsVisibleColumnSpacingScaleX";
    PropertyName[PropertyName["IsEnabledScaleX"] = 332] = "IsEnabledScaleX";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleY"] = 333] = "IsVisibleBackgroundColorScaleY";
    PropertyName[PropertyName["IsVisibleBorderColorScaleY"] = 334] = "IsVisibleBorderColorScaleY";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleY"] = 335] = "IsVisibleCornerRadiusScaleY";
    PropertyName[PropertyName["IsVisibleElevationScaleY"] = 336] = "IsVisibleElevationScaleY";
    PropertyName[PropertyName["IsVisiblePaddingScaleY"] = 337] = "IsVisiblePaddingScaleY";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleY"] = 338] = "IsVisiblePlaceholderScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleY"] = 339] = "IsVisibleSeparatorColorScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleY"] = 340] = "IsVisibleSeparatorWidthScaleY";
    PropertyName[PropertyName["IsVisibleShadowScaleY"] = 341] = "IsVisibleShadowScaleY";
    PropertyName[PropertyName["IsVisibleStrokeScaleY"] = 342] = "IsVisibleStrokeScaleY";
    PropertyName[PropertyName["IsVisibleTextColorScaleY"] = 343] = "IsVisibleTextColorScaleY";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleY"] = 344] = "IsVisibleTextDecorationsScaleY";
    PropertyName[PropertyName["IsVisibleTranslationXScaleY"] = 345] = "IsVisibleTranslationXScaleY";
    PropertyName[PropertyName["IsVisibleTranslationYScaleY"] = 346] = "IsVisibleTranslationYScaleY";
    PropertyName[PropertyName["IsVisibleRotationScaleY"] = 347] = "IsVisibleRotationScaleY";
    PropertyName[PropertyName["IsVisibleScaleScaleY"] = 348] = "IsVisibleScaleScaleY";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleY"] = 349] = "IsVisibleHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleY"] = 350] = "IsVisibleWidthRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleY"] = 351] = "IsVisibleMinimumHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleY"] = 352] = "IsVisibleMinimumWidthRequestScaleY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleY"] = 353] = "IsVisiblePaddingConstraintsScaleY";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleY"] = 354] = "IsVisibleRowSpacingScaleY";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleY"] = 355] = "IsVisibleColumnSpacingScaleY";
    PropertyName[PropertyName["IsEnabledScaleY"] = 356] = "IsEnabledScaleY";
    PropertyName[PropertyName["IsVisibleBackgroundColorTranslationX"] = 357] = "IsVisibleBackgroundColorTranslationX";
    PropertyName[PropertyName["IsVisibleBorderColorTranslationX"] = 358] = "IsVisibleBorderColorTranslationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusTranslationX"] = 359] = "IsVisibleCornerRadiusTranslationX";
    PropertyName[PropertyName["IsVisibleElevationTranslationX"] = 360] = "IsVisibleElevationTranslationX";
    PropertyName[PropertyName["IsVisiblePaddingTranslationX"] = 361] = "IsVisiblePaddingTranslationX";
    PropertyName[PropertyName["IsVisiblePlaceholderTranslationX"] = 362] = "IsVisiblePlaceholderTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorTranslationX"] = 363] = "IsVisibleSeparatorColorTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthTranslationX"] = 364] = "IsVisibleSeparatorWidthTranslationX";
    PropertyName[PropertyName["IsVisibleShadowTranslationX"] = 365] = "IsVisibleShadowTranslationX";
    PropertyName[PropertyName["IsVisibleStrokeTranslationX"] = 366] = "IsVisibleStrokeTranslationX";
    PropertyName[PropertyName["IsVisibleTextColorTranslationX"] = 367] = "IsVisibleTextColorTranslationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsTranslationX"] = 368] = "IsVisibleTextDecorationsTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationXTranslationX"] = 369] = "IsVisibleTranslationXTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationYTranslationX"] = 370] = "IsVisibleTranslationYTranslationX";
    PropertyName[PropertyName["IsVisibleRotationTranslationX"] = 371] = "IsVisibleRotationTranslationX";
    PropertyName[PropertyName["IsVisibleScaleTranslationX"] = 372] = "IsVisibleScaleTranslationX";
    PropertyName[PropertyName["IsVisibleHeightRequestTranslationX"] = 373] = "IsVisibleHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleWidthRequestTranslationX"] = 374] = "IsVisibleWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestTranslationX"] = 375] = "IsVisibleMinimumHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestTranslationX"] = 376] = "IsVisibleMinimumWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsTranslationX"] = 377] = "IsVisiblePaddingConstraintsTranslationX";
    PropertyName[PropertyName["IsVisibleRowSpacingTranslationX"] = 378] = "IsVisibleRowSpacingTranslationX";
    PropertyName[PropertyName["IsVisibleColumnSpacingTranslationX"] = 379] = "IsVisibleColumnSpacingTranslationX";
    PropertyName[PropertyName["IsEnabledTranslationX"] = 380] = "IsEnabledTranslationX";
    PropertyName[PropertyName["IsVisibleBackgroundColorTranslationY"] = 381] = "IsVisibleBackgroundColorTranslationY";
    PropertyName[PropertyName["IsVisibleBorderColorTranslationY"] = 382] = "IsVisibleBorderColorTranslationY";
    PropertyName[PropertyName["IsVisibleCornerRadiusTranslationY"] = 383] = "IsVisibleCornerRadiusTranslationY";
    PropertyName[PropertyName["IsVisibleElevationTranslationY"] = 384] = "IsVisibleElevationTranslationY";
    PropertyName[PropertyName["IsVisiblePaddingTranslationY"] = 385] = "IsVisiblePaddingTranslationY";
    PropertyName[PropertyName["IsVisiblePlaceholderTranslationY"] = 386] = "IsVisiblePlaceholderTranslationY";
    PropertyName[PropertyName["IsVisibleSeparatorColorTranslationY"] = 387] = "IsVisibleSeparatorColorTranslationY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthTranslationY"] = 388] = "IsVisibleSeparatorWidthTranslationY";
    PropertyName[PropertyName["IsVisibleShadowTranslationY"] = 389] = "IsVisibleShadowTranslationY";
    PropertyName[PropertyName["IsVisibleStrokeTranslationY"] = 390] = "IsVisibleStrokeTranslationY";
    PropertyName[PropertyName["IsVisibleTextColorTranslationY"] = 391] = "IsVisibleTextColorTranslationY";
    PropertyName[PropertyName["IsVisibleTextDecorationsTranslationY"] = 392] = "IsVisibleTextDecorationsTranslationY";
    PropertyName[PropertyName["IsVisibleTranslationXTranslationY"] = 393] = "IsVisibleTranslationXTranslationY";
    PropertyName[PropertyName["IsVisibleTranslationYTranslationY"] = 394] = "IsVisibleTranslationYTranslationY";
    PropertyName[PropertyName["IsVisibleRotationTranslationY"] = 395] = "IsVisibleRotationTranslationY";
    PropertyName[PropertyName["IsVisibleScaleTranslationY"] = 396] = "IsVisibleScaleTranslationY";
    PropertyName[PropertyName["IsVisibleHeightRequestTranslationY"] = 397] = "IsVisibleHeightRequestTranslationY";
    PropertyName[PropertyName["IsVisibleWidthRequestTranslationY"] = 398] = "IsVisibleWidthRequestTranslationY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestTranslationY"] = 399] = "IsVisibleMinimumHeightRequestTranslationY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestTranslationY"] = 400] = "IsVisibleMinimumWidthRequestTranslationY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsTranslationY"] = 401] = "IsVisiblePaddingConstraintsTranslationY";
    PropertyName[PropertyName["IsVisibleRowSpacingTranslationY"] = 402] = "IsVisibleRowSpacingTranslationY";
    PropertyName[PropertyName["IsVisibleColumnSpacingTranslationY"] = 403] = "IsVisibleColumnSpacingTranslationY";
    PropertyName[PropertyName["IsEnabledTranslationY"] = 404] = "IsEnabledTranslationY";
    PropertyName[PropertyName["IsVisibleBackgroundColorLayoutX"] = 405] = "IsVisibleBackgroundColorLayoutX";
    PropertyName[PropertyName["IsVisibleBorderColorLayoutX"] = 406] = "IsVisibleBorderColorLayoutX";
    PropertyName[PropertyName["IsVisibleCornerRadiusLayoutX"] = 407] = "IsVisibleCornerRadiusLayoutX";
    PropertyName[PropertyName["IsVisibleElevationLayoutX"] = 408] = "IsVisibleElevationLayoutX";
    PropertyName[PropertyName["IsVisiblePaddingLayoutX"] = 409] = "IsVisiblePaddingLayoutX";
    PropertyName[PropertyName["IsVisiblePlaceholderLayoutX"] = 410] = "IsVisiblePlaceholderLayoutX";
    PropertyName[PropertyName["IsVisibleSeparatorColorLayoutX"] = 411] = "IsVisibleSeparatorColorLayoutX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthLayoutX"] = 412] = "IsVisibleSeparatorWidthLayoutX";
    PropertyName[PropertyName["IsVisibleShadowLayoutX"] = 413] = "IsVisibleShadowLayoutX";
    PropertyName[PropertyName["IsVisibleStrokeLayoutX"] = 414] = "IsVisibleStrokeLayoutX";
    PropertyName[PropertyName["IsVisibleTextColorLayoutX"] = 415] = "IsVisibleTextColorLayoutX";
    PropertyName[PropertyName["IsVisibleTextDecorationsLayoutX"] = 416] = "IsVisibleTextDecorationsLayoutX";
    PropertyName[PropertyName["IsVisibleTranslationXLayoutX"] = 417] = "IsVisibleTranslationXLayoutX";
    PropertyName[PropertyName["IsVisibleTranslationYLayoutX"] = 418] = "IsVisibleTranslationYLayoutX";
    PropertyName[PropertyName["IsVisibleRotationLayoutX"] = 419] = "IsVisibleRotationLayoutX";
    PropertyName[PropertyName["IsVisibleScaleLayoutX"] = 420] = "IsVisibleScaleLayoutX";
    PropertyName[PropertyName["IsVisibleHeightRequestLayoutX"] = 421] = "IsVisibleHeightRequestLayoutX";
    PropertyName[PropertyName["IsVisibleWidthRequestLayoutX"] = 422] = "IsVisibleWidthRequestLayoutX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestLayoutX"] = 423] = "IsVisibleMinimumHeightRequestLayoutX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestLayoutX"] = 424] = "IsVisibleMinimumWidthRequestLayoutX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsLayoutX"] = 425] = "IsVisiblePaddingConstraintsLayoutX";
    PropertyName[PropertyName["IsVisibleRowSpacingLayoutX"] = 426] = "IsVisibleRowSpacingLayoutX";
    PropertyName[PropertyName["IsVisibleColumnSpacingLayoutX"] = 427] = "IsVisibleColumnSpacingLayoutX";
    PropertyName[PropertyName["IsEnabledLayoutX"] = 428] = "IsEnabledLayoutX";
    PropertyName[PropertyName["IsVisibleBackgroundColorLayoutY"] = 429] = "IsVisibleBackgroundColorLayoutY";
    PropertyName[PropertyName["IsVisibleBorderColorLayoutY"] = 430] = "IsVisibleBorderColorLayoutY";
    PropertyName[PropertyName["IsVisibleCornerRadiusLayoutY"] = 431] = "IsVisibleCornerRadiusLayoutY";
    PropertyName[PropertyName["IsVisibleElevationLayoutY"] = 432] = "IsVisibleElevationLayoutY";
    PropertyName[PropertyName["IsVisiblePaddingLayoutY"] = 433] = "IsVisiblePaddingLayoutY";
    PropertyName[PropertyName["IsVisiblePlaceholderLayoutY"] = 434] = "IsVisiblePlaceholderLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorColorLayoutY"] = 435] = "IsVisibleSeparatorColorLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthLayoutY"] = 436] = "IsVisibleSeparatorWidthLayoutY";
    PropertyName[PropertyName["IsVisibleShadowLayoutY"] = 437] = "IsVisibleShadowLayoutY";
    PropertyName[PropertyName["IsVisibleStrokeLayoutY"] = 438] = "IsVisibleStrokeLayoutY";
    PropertyName[PropertyName["IsVisibleTextColorLayoutY"] = 439] = "IsVisibleTextColorLayoutY";
    PropertyName[PropertyName["IsVisibleTextDecorationsLayoutY"] = 440] = "IsVisibleTextDecorationsLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationXLayoutY"] = 441] = "IsVisibleTranslationXLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationYLayoutY"] = 442] = "IsVisibleTranslationYLayoutY";
    PropertyName[PropertyName["IsVisibleRotationLayoutY"] = 443] = "IsVisibleRotationLayoutY";
    PropertyName[PropertyName["IsVisibleScaleLayoutY"] = 444] = "IsVisibleScaleLayoutY";
    PropertyName[PropertyName["IsVisibleHeightRequestLayoutY"] = 445] = "IsVisibleHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleWidthRequestLayoutY"] = 446] = "IsVisibleWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestLayoutY"] = 447] = "IsVisibleMinimumHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestLayoutY"] = 448] = "IsVisibleMinimumWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsLayoutY"] = 449] = "IsVisiblePaddingConstraintsLayoutY";
    PropertyName[PropertyName["IsVisibleRowSpacingLayoutY"] = 450] = "IsVisibleRowSpacingLayoutY";
    PropertyName[PropertyName["IsVisibleColumnSpacingLayoutY"] = 451] = "IsVisibleColumnSpacingLayoutY";
    PropertyName[PropertyName["IsEnabledLayoutY"] = 452] = "IsEnabledLayoutY";
    PropertyName[PropertyName["IsVisibleBackgroundColorWidthRequest"] = 453] = "IsVisibleBackgroundColorWidthRequest";
    PropertyName[PropertyName["IsVisibleBorderColorWidthRequest"] = 454] = "IsVisibleBorderColorWidthRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusWidthRequest"] = 455] = "IsVisibleCornerRadiusWidthRequest";
    PropertyName[PropertyName["IsVisibleElevationWidthRequest"] = 456] = "IsVisibleElevationWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingWidthRequest"] = 457] = "IsVisiblePaddingWidthRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderWidthRequest"] = 458] = "IsVisiblePlaceholderWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorWidthRequest"] = 459] = "IsVisibleSeparatorColorWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthWidthRequest"] = 460] = "IsVisibleSeparatorWidthWidthRequest";
    PropertyName[PropertyName["IsVisibleShadowWidthRequest"] = 461] = "IsVisibleShadowWidthRequest";
    PropertyName[PropertyName["IsVisibleStrokeWidthRequest"] = 462] = "IsVisibleStrokeWidthRequest";
    PropertyName[PropertyName["IsVisibleTextColorWidthRequest"] = 463] = "IsVisibleTextColorWidthRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsWidthRequest"] = 464] = "IsVisibleTextDecorationsWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationXWidthRequest"] = 465] = "IsVisibleTranslationXWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationYWidthRequest"] = 466] = "IsVisibleTranslationYWidthRequest";
    PropertyName[PropertyName["IsVisibleRotationWidthRequest"] = 467] = "IsVisibleRotationWidthRequest";
    PropertyName[PropertyName["IsVisibleScaleWidthRequest"] = 468] = "IsVisibleScaleWidthRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestWidthRequest"] = 469] = "IsVisibleHeightRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestWidthRequest"] = 470] = "IsVisibleWidthRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestWidthRequest"] = 471] = "IsVisibleMinimumHeightRequestWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestWidthRequest"] = 472] = "IsVisibleMinimumWidthRequestWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsWidthRequest"] = 473] = "IsVisiblePaddingConstraintsWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingWidthRequest"] = 474] = "IsVisibleRowSpacingWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingWidthRequest"] = 475] = "IsVisibleColumnSpacingWidthRequest";
    PropertyName[PropertyName["IsEnabledWidthRequest"] = 476] = "IsEnabledWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorHeightRequest"] = 477] = "IsVisibleBackgroundColorHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorHeightRequest"] = 478] = "IsVisibleBorderColorHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusHeightRequest"] = 479] = "IsVisibleCornerRadiusHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationHeightRequest"] = 480] = "IsVisibleElevationHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingHeightRequest"] = 481] = "IsVisiblePaddingHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderHeightRequest"] = 482] = "IsVisiblePlaceholderHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorHeightRequest"] = 483] = "IsVisibleSeparatorColorHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthHeightRequest"] = 484] = "IsVisibleSeparatorWidthHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowHeightRequest"] = 485] = "IsVisibleShadowHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeHeightRequest"] = 486] = "IsVisibleStrokeHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorHeightRequest"] = 487] = "IsVisibleTextColorHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsHeightRequest"] = 488] = "IsVisibleTextDecorationsHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXHeightRequest"] = 489] = "IsVisibleTranslationXHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYHeightRequest"] = 490] = "IsVisibleTranslationYHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationHeightRequest"] = 491] = "IsVisibleRotationHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleHeightRequest"] = 492] = "IsVisibleScaleHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestHeightRequest"] = 493] = "IsVisibleHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestHeightRequest"] = 494] = "IsVisibleWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestHeightRequest"] = 495] = "IsVisibleMinimumHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestHeightRequest"] = 496] = "IsVisibleMinimumWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsHeightRequest"] = 497] = "IsVisiblePaddingConstraintsHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingHeightRequest"] = 498] = "IsVisibleRowSpacingHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingHeightRequest"] = 499] = "IsVisibleColumnSpacingHeightRequest";
    PropertyName[PropertyName["IsEnabledHeightRequest"] = 500] = "IsEnabledHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumHeightRequest"] = 501] = "IsVisibleBackgroundColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumHeightRequest"] = 502] = "IsVisibleBorderColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumHeightRequest"] = 503] = "IsVisibleCornerRadiusMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumHeightRequest"] = 504] = "IsVisibleElevationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumHeightRequest"] = 505] = "IsVisiblePaddingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumHeightRequest"] = 506] = "IsVisiblePlaceholderMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumHeightRequest"] = 507] = "IsVisibleSeparatorColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumHeightRequest"] = 508] = "IsVisibleSeparatorWidthMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumHeightRequest"] = 509] = "IsVisibleShadowMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumHeightRequest"] = 510] = "IsVisibleStrokeMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumHeightRequest"] = 511] = "IsVisibleTextColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumHeightRequest"] = 512] = "IsVisibleTextDecorationsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumHeightRequest"] = 513] = "IsVisibleTranslationXMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumHeightRequest"] = 514] = "IsVisibleTranslationYMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumHeightRequest"] = 515] = "IsVisibleRotationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumHeightRequest"] = 516] = "IsVisibleScaleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumHeightRequest"] = 517] = "IsVisibleHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumHeightRequest"] = 518] = "IsVisibleWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumHeightRequest"] = 519] = "IsVisibleMinimumHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumHeightRequest"] = 520] = "IsVisibleMinimumWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumHeightRequest"] = 521] = "IsVisiblePaddingConstraintsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumHeightRequest"] = 522] = "IsVisibleRowSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumHeightRequest"] = 523] = "IsVisibleColumnSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsEnabledMinimumHeightRequest"] = 524] = "IsEnabledMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumWidthRequest"] = 525] = "IsVisibleBackgroundColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumWidthRequest"] = 526] = "IsVisibleBorderColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumWidthRequest"] = 527] = "IsVisibleCornerRadiusMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumWidthRequest"] = 528] = "IsVisibleElevationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumWidthRequest"] = 529] = "IsVisiblePaddingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumWidthRequest"] = 530] = "IsVisiblePlaceholderMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumWidthRequest"] = 531] = "IsVisibleSeparatorColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumWidthRequest"] = 532] = "IsVisibleSeparatorWidthMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumWidthRequest"] = 533] = "IsVisibleShadowMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumWidthRequest"] = 534] = "IsVisibleStrokeMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumWidthRequest"] = 535] = "IsVisibleTextColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumWidthRequest"] = 536] = "IsVisibleTextDecorationsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumWidthRequest"] = 537] = "IsVisibleTranslationXMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumWidthRequest"] = 538] = "IsVisibleTranslationYMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumWidthRequest"] = 539] = "IsVisibleRotationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumWidthRequest"] = 540] = "IsVisibleScaleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumWidthRequest"] = 541] = "IsVisibleHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumWidthRequest"] = 542] = "IsVisibleWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumWidthRequest"] = 543] = "IsVisibleMinimumHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumWidthRequest"] = 544] = "IsVisibleMinimumWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumWidthRequest"] = 545] = "IsVisiblePaddingConstraintsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumWidthRequest"] = 546] = "IsVisibleRowSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumWidthRequest"] = 547] = "IsVisibleColumnSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsEnabledMinimumWidthRequest"] = 548] = "IsEnabledMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorX"] = 549] = "IsVisibleBackgroundColorAnchorX";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorX"] = 550] = "IsVisibleBorderColorAnchorX";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorX"] = 551] = "IsVisibleCornerRadiusAnchorX";
    PropertyName[PropertyName["IsVisibleElevationAnchorX"] = 552] = "IsVisibleElevationAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingAnchorX"] = 553] = "IsVisiblePaddingAnchorX";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorX"] = 554] = "IsVisiblePlaceholderAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorX"] = 555] = "IsVisibleSeparatorColorAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorX"] = 556] = "IsVisibleSeparatorWidthAnchorX";
    PropertyName[PropertyName["IsVisibleShadowAnchorX"] = 557] = "IsVisibleShadowAnchorX";
    PropertyName[PropertyName["IsVisibleStrokeAnchorX"] = 558] = "IsVisibleStrokeAnchorX";
    PropertyName[PropertyName["IsVisibleTextColorAnchorX"] = 559] = "IsVisibleTextColorAnchorX";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorX"] = 560] = "IsVisibleTextDecorationsAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorX"] = 561] = "IsVisibleTranslationXAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorX"] = 562] = "IsVisibleTranslationYAnchorX";
    PropertyName[PropertyName["IsVisibleRotationAnchorX"] = 563] = "IsVisibleRotationAnchorX";
    PropertyName[PropertyName["IsVisibleScaleAnchorX"] = 564] = "IsVisibleScaleAnchorX";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorX"] = 565] = "IsVisibleHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorX"] = 566] = "IsVisibleWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorX"] = 567] = "IsVisibleMinimumHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorX"] = 568] = "IsVisibleMinimumWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorX"] = 569] = "IsVisiblePaddingConstraintsAnchorX";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorX"] = 570] = "IsVisibleRowSpacingAnchorX";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorX"] = 571] = "IsVisibleColumnSpacingAnchorX";
    PropertyName[PropertyName["IsEnabledAnchorX"] = 572] = "IsEnabledAnchorX";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorY"] = 573] = "IsVisibleBackgroundColorAnchorY";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorY"] = 574] = "IsVisibleBorderColorAnchorY";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorY"] = 575] = "IsVisibleCornerRadiusAnchorY";
    PropertyName[PropertyName["IsVisibleElevationAnchorY"] = 576] = "IsVisibleElevationAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingAnchorY"] = 577] = "IsVisiblePaddingAnchorY";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorY"] = 578] = "IsVisiblePlaceholderAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorY"] = 579] = "IsVisibleSeparatorColorAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorY"] = 580] = "IsVisibleSeparatorWidthAnchorY";
    PropertyName[PropertyName["IsVisibleShadowAnchorY"] = 581] = "IsVisibleShadowAnchorY";
    PropertyName[PropertyName["IsVisibleStrokeAnchorY"] = 582] = "IsVisibleStrokeAnchorY";
    PropertyName[PropertyName["IsVisibleTextColorAnchorY"] = 583] = "IsVisibleTextColorAnchorY";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorY"] = 584] = "IsVisibleTextDecorationsAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorY"] = 585] = "IsVisibleTranslationXAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorY"] = 586] = "IsVisibleTranslationYAnchorY";
    PropertyName[PropertyName["IsVisibleRotationAnchorY"] = 587] = "IsVisibleRotationAnchorY";
    PropertyName[PropertyName["IsVisibleScaleAnchorY"] = 588] = "IsVisibleScaleAnchorY";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorY"] = 589] = "IsVisibleHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorY"] = 590] = "IsVisibleWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorY"] = 591] = "IsVisibleMinimumHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorY"] = 592] = "IsVisibleMinimumWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorY"] = 593] = "IsVisiblePaddingConstraintsAnchorY";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorY"] = 594] = "IsVisibleRowSpacingAnchorY";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorY"] = 595] = "IsVisibleColumnSpacingAnchorY";
    PropertyName[PropertyName["IsEnabledAnchorY"] = 596] = "IsEnabledAnchorY";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationX"] = 597] = "IsVisibleBackgroundColorRotationX";
    PropertyName[PropertyName["IsVisibleBorderColorRotationX"] = 598] = "IsVisibleBorderColorRotationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationX"] = 599] = "IsVisibleCornerRadiusRotationX";
    PropertyName[PropertyName["IsVisibleElevationRotationX"] = 600] = "IsVisibleElevationRotationX";
    PropertyName[PropertyName["IsVisiblePaddingRotationX"] = 601] = "IsVisiblePaddingRotationX";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationX"] = 602] = "IsVisiblePlaceholderRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationX"] = 603] = "IsVisibleSeparatorColorRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationX"] = 604] = "IsVisibleSeparatorWidthRotationX";
    PropertyName[PropertyName["IsVisibleShadowRotationX"] = 605] = "IsVisibleShadowRotationX";
    PropertyName[PropertyName["IsVisibleStrokeRotationX"] = 606] = "IsVisibleStrokeRotationX";
    PropertyName[PropertyName["IsVisibleTextColorRotationX"] = 607] = "IsVisibleTextColorRotationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationX"] = 608] = "IsVisibleTextDecorationsRotationX";
    PropertyName[PropertyName["IsVisibleTranslationXRotationX"] = 609] = "IsVisibleTranslationXRotationX";
    PropertyName[PropertyName["IsVisibleTranslationYRotationX"] = 610] = "IsVisibleTranslationYRotationX";
    PropertyName[PropertyName["IsVisibleRotationRotationX"] = 611] = "IsVisibleRotationRotationX";
    PropertyName[PropertyName["IsVisibleScaleRotationX"] = 612] = "IsVisibleScaleRotationX";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationX"] = 613] = "IsVisibleHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationX"] = 614] = "IsVisibleWidthRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationX"] = 615] = "IsVisibleMinimumHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationX"] = 616] = "IsVisibleMinimumWidthRequestRotationX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationX"] = 617] = "IsVisiblePaddingConstraintsRotationX";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationX"] = 618] = "IsVisibleRowSpacingRotationX";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationX"] = 619] = "IsVisibleColumnSpacingRotationX";
    PropertyName[PropertyName["IsEnabledRotationX"] = 620] = "IsEnabledRotationX";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationY"] = 621] = "IsVisibleBackgroundColorRotationY";
    PropertyName[PropertyName["IsVisibleBorderColorRotationY"] = 622] = "IsVisibleBorderColorRotationY";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationY"] = 623] = "IsVisibleCornerRadiusRotationY";
    PropertyName[PropertyName["IsVisibleElevationRotationY"] = 624] = "IsVisibleElevationRotationY";
    PropertyName[PropertyName["IsVisiblePaddingRotationY"] = 625] = "IsVisiblePaddingRotationY";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationY"] = 626] = "IsVisiblePlaceholderRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationY"] = 627] = "IsVisibleSeparatorColorRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationY"] = 628] = "IsVisibleSeparatorWidthRotationY";
    PropertyName[PropertyName["IsVisibleShadowRotationY"] = 629] = "IsVisibleShadowRotationY";
    PropertyName[PropertyName["IsVisibleStrokeRotationY"] = 630] = "IsVisibleStrokeRotationY";
    PropertyName[PropertyName["IsVisibleTextColorRotationY"] = 631] = "IsVisibleTextColorRotationY";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationY"] = 632] = "IsVisibleTextDecorationsRotationY";
    PropertyName[PropertyName["IsVisibleTranslationXRotationY"] = 633] = "IsVisibleTranslationXRotationY";
    PropertyName[PropertyName["IsVisibleTranslationYRotationY"] = 634] = "IsVisibleTranslationYRotationY";
    PropertyName[PropertyName["IsVisibleRotationRotationY"] = 635] = "IsVisibleRotationRotationY";
    PropertyName[PropertyName["IsVisibleScaleRotationY"] = 636] = "IsVisibleScaleRotationY";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationY"] = 637] = "IsVisibleHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationY"] = 638] = "IsVisibleWidthRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationY"] = 639] = "IsVisibleMinimumHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationY"] = 640] = "IsVisibleMinimumWidthRequestRotationY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationY"] = 641] = "IsVisiblePaddingConstraintsRotationY";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationY"] = 642] = "IsVisibleRowSpacingRotationY";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationY"] = 643] = "IsVisibleColumnSpacingRotationY";
    PropertyName[PropertyName["IsEnabledRotationY"] = 644] = "IsEnabledRotationY";
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
/* harmony import */ var _user_defined_types_translation_collection_2_xaml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-defined-types-translation/collection-2-xaml */ "./src/user-defined-types-translation/collection-2-xaml.ts");
/* harmony import */ var _figma_node_translation_shapes_polygon_2_polygon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./figma-node-translation/shapes/polygon-2-polygon */ "./src/figma-node-translation/shapes/polygon-2-polygon.ts");
















function ParseFigma(nodes) {
    console.log('Parsing Nodes: ', nodes);
    let xamlCode = "";
    let rootnode = nodes[0];
    let contentPage = new _xaml_views_classes_xaml_page__WEBPACK_IMPORTED_MODULE_9__.ContentPage(rootnode.parent.node.name);
    let rootLayout = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(rootnode.parent.node);
    xamlCode += contentPage.getStartTag() + `\n${formatStartTag(rootLayout)}\n`;
    rootnode.children.forEach(c => {
        //Traslate the Nested elements to 
        xamlCode += formatNestedElement(checkNodeType(c));
    });
    xamlCode += `\n${formatEndTag(rootLayout)}\n` + contentPage.getEndTag();
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
            // Create frame element -> becaomes a xaml layout element 
            let frameNode = node;
            let frameElement = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(frameNode);
            let nestedFrame = { parent: frameElement, children: [] };
            nn.children.forEach(n => nestedFrame.children.push(checkNodeType(n)));
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
        case 'POLYGON':
            let polygonNode = node;
            let polygonElement = (0,_figma_node_translation_shapes_polygon_2_polygon__WEBPACK_IMPORTED_MODULE_15__.TranslatePolygonElement)(polygonNode);
            let nestedPolygon = { parent: polygonElement, children: [] };
            return nestedPolygon;
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
    console.log('translating : ', node.utype);
    // Check the node's type using the 'type' property
    switch (node.utype) {
        case 'BUTTON':
            let buttonNode = node.node;
            let buttonElement = (0,_user_defined_types_translation_button_2_xaml__WEBPACK_IMPORTED_MODULE_11__.TranslateButtonElement)(buttonNode);
            let nestedButton = { parent: buttonElement, children: [] };
            if (nn.children.length > 0) {
                nn.children.forEach(n => {
                    let childNode = n.parent.node;
                    if (childNode.type === 'TEXT') {
                        let textElement = (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.TranslateTextElement)(childNode);
                        buttonElement.properties.concat(textElement.properties);
                    }
                    else if (childNode.type === 'VECTOR') {
                        let vectorElement = (0,_figma_node_translation_shapes_vector_2_icon__WEBPACK_IMPORTED_MODULE_10__.TranslateVectorElement)(childNode);
                        buttonElement.properties.concat(vectorElement.properties);
                    }
                    else {
                        nestedButton.children.push(checkNodeType(n));
                    }
                });
            }
            return nestedButton;
        case 'EDITOR':
            let editorNode = node.node;
            let editorElement = (0,_user_defined_types_translation_editor_2_xaml__WEBPACK_IMPORTED_MODULE_12__.TranslateEditorElement)(editorNode);
            let nestedEditor = { parent: editorElement, children: [] };
            if (nn.children.length > 0) {
                nn.children.forEach(n => {
                    let childNode = n.parent.node;
                    if (childNode.type === 'TEXT') {
                        let placeholderProp = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Placeholder, value: childNode.characters };
                        editorElement.properties.push(placeholderProp);
                    }
                    else {
                        nestedEditor.children.push(checkNodeType(n));
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
                        editorElement.properties.push(placeholderProp);
                    }
                    else {
                        nestedEntry.children.push(checkNodeType(n));
                    }
                });
            }
            return nestedEntry;
        case 'LISTVIEW':
            let collectionNode = node.node;
            let collectionElement = (0,_user_defined_types_translation_collection_2_xaml__WEBPACK_IMPORTED_MODULE_14__.TranslateCollectionElement)(collectionNode);
            let nestedCollection = { parent: collectionElement, children: [] };
            if (nn.children.length > 0) {
                nn.children.forEach(n => {
                    nestedCollection.children.push(checkNodeType(n));
                });
            }
            return nestedCollection;
        default:
            let element = { name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.none, properties: [] };
            let nested = { parent: element, children: [] };
            return nested;
    }
}
function formatProperties(properties) {
    const propertyString = properties
        .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
        .map((prop) => `${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join(" ");
    return propertyString;
}
function formatStartTag(element) {
    const propertyString = element.properties
        .filter((prop) => (prop.value !== 'None')) // Exclude properties with value 'None' because then it is set to default value
        .map((prop) => `${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join(" ");
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
function translateFillsToFigma(elementName, node) {
    if ('fills' in node) {
        let xamlString = `.${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.Background}`;
        const fills = node.fills;
        if (fills && fills.length > 0) {
            fills.forEach((fill) => {
                if (fill.type === 'SOLID') {
                    // Handle Solid Paint
                    const solidPaint = fill;
                    const color = `#${solidPaint.color.r}${solidPaint.color.g}${solidPaint.color.b}`;
                    let backgroundProp = { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.Background, value: color };
                    xamlString += `${formatProperties([backgroundProp])}/>`;
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
                        let stopsString = gradProps.forEach(g => formatShortTag(g));
                        xamlString += `>\n${formatStartTag(linearGradientBrushElement)}>${stopsString}${formatEndTag(linearGradientBrushElement)}`;
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
                            gradProps.push({ name: _Element__WEBPACK_IMPORTED_MODULE_1__.ElementName.GradientStop, properties: gradProp });
                        });
                        let stopsString = gradProps.forEach(g => formatShortTag(g));
                        xamlString += `>\n${formatStartTag(radialGradientBrushElement)}>${stopsString}${formatEndTag(radialGradientBrushElement)}`;
                    }
                }
            });
        }
        return xamlString;
    }
    return '';
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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: translateDefaultNumberValue(node.itemSpacing.toString()) },
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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const horizontalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return horizontalStackLayoutElement;
}
function TranslateVerticalStackLayoutElement(node) {
    var _a;
    const verticalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Background, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
    ];
    const vertivalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return vertivalStackLayoutElement;
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
    var _a;
    const ellipseProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Fill, value: node.fills.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeThickness, value: node.strokeWeight.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
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

/***/ "./src/figma-node-translation/shapes/polygon-2-polygon.ts":
/*!****************************************************************!*\
  !*** ./src/figma-node-translation/shapes/polygon-2-polygon.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslatePolygonElement: () => (/* binding */ TranslatePolygonElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslatePolygonElement(node) {
    var _a;
    const polygonProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Fill, value: node.fills.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeThickness, value: node.strokeWeight.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' },
    ];
    const ellipseElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Ellipse, properties: polygonProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.RadiusX, value: node.topLeftRadius.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.RadiusY, value: node.bottomRightRadius.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Fill, value: (_a = translateFillsToFigma(node)) !== null && _a !== void 0 ? _a : 'None' }
    ];
    const rectangleElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Rectangle, properties: rectangleProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return rectangleElement;
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
    return `${node.name.toLowerCase}.png`;
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
/* harmony import */ var _commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonPropertyParser */ "./src/commonPropertyParser.ts");



function TranslateButtonElement(node) {
    if ('children' in node)
        [];
    const buttonProperties = [];
    let frameProperties = [
        //common stuff
        //Frame stuff
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.BorderColor, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.BorderWidth, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.CharacterSpacing, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.ContentLayout, value: node.width.toString() },
        // { name: PropertyName.CornerRadius,      value: node. },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAttributes, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAutoScalingEnabled, value: node.height.toString() },
        //text stuff
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontSize, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.LineBreakMode, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Text, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextColor, value: node.width.toString() },
    ];
    const buttonElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Button, properties: buttonProperties.concat((0,_commonPropertyParser__WEBPACK_IMPORTED_MODULE_2__.TranslateCommonProperties)(node)) };
    return buttonElement;
}


/***/ }),

/***/ "./src/user-defined-types-translation/collection-2-xaml.ts":
/*!*****************************************************************!*\
  !*** ./src/user-defined-types-translation/collection-2-xaml.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateCollectionElement: () => (/* binding */ TranslateCollectionElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateCollectionElement(node) {
    const listviewProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() }
    ];
    const listviewElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.CollectionView, properties: listviewProperties };
    return listviewElement;
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7Ozs7Ozs7Ozs7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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxrQkFBa0Isc0JBQXNCO0FBQ2hILDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsdURBQVU7QUFDdEMsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL1Byb3BlcnR5LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9YYW1sUGFyc2VyLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9jb21tb25Qcm9wZXJ0eVBhcnNlci50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9mcmFtZS0yLWxheW91dC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvZWxsaXBzZS0yLWVsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2xpbmUtMi1saW5lLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9wb2x5Z29uLTItcG9seWdvbi50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy92ZWN0b3ItMi1pY29uLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWFOb2RlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vY29sbGVjdGlvbi0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lZGl0b3ItMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZW50cnktMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC1jdXN0b20tY29udHJvbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMveGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtcGFnZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMveGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtdmlldy50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEVsZW1lbnROYW1lO1xuKGZ1bmN0aW9uIChFbGVtZW50TmFtZSkge1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wibm9uZVwiXSA9IDBdID0gXCJub25lXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDb2xsZWN0aW9uVmlld1wiXSA9IDFdID0gXCJDb2xsZWN0aW9uVmlld1wiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQmFja2dyb3VuZFwiXSA9IDJdID0gXCJCYWNrZ3JvdW5kXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaW5lYXJHcmFkaWVudEJydXNoXCJdID0gM10gPSBcIkxpbmVhckdyYWRpZW50QnJ1c2hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlJhZGlhbEdyYWRpZW50QnJ1c2hcIl0gPSA0XSA9IFwiUmFkaWFsR3JhZGllbnRCcnVzaFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiR3JhZGllbnRTdG9wXCJdID0gNV0gPSBcIkdyYWRpZW50U3RvcFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2hhZG93XCJdID0gNl0gPSBcIlNoYWRvd1wiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGFiZWxcIl0gPSA3XSA9IFwiTGFiZWxcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkJ1dHRvblwiXSA9IDhdID0gXCJCdXR0b25cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVkaXRvclwiXSA9IDldID0gXCJFZGl0b3JcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVudHJ5XCJdID0gMTBdID0gXCJFbnRyeVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU3RhY2tGcmFtZVwiXSA9IDExXSA9IFwiU3RhY2tGcmFtZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGV4dEJsb2NrXCJdID0gMTJdID0gXCJUZXh0QmxvY2tcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlRleHRCb3hcIl0gPSAxM10gPSBcIlRleHRCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbWJvQm94XCJdID0gMTRdID0gXCJDb21ib0JveFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUmFkaW9CdXR0b25cIl0gPSAxNV0gPSBcIlJhZGlvQnV0dG9uXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDaGVja0JveFwiXSA9IDE2XSA9IFwiQ2hlY2tCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkltYWdlXCJdID0gMTddID0gXCJJbWFnZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQm9yZGVyXCJdID0gMThdID0gXCJCb3JkZXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNjcm9sbFZpZXdlclwiXSA9IDE5XSA9IFwiU2Nyb2xsVmlld2VyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQcm9ncmVzc0JhclwiXSA9IDIwXSA9IFwiUHJvZ3Jlc3NCYXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNsaWRlclwiXSA9IDIxXSA9IFwiU2xpZGVyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJDb250cm9sXCJdID0gMjJdID0gXCJUYWJDb250cm9sXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJJdGVtXCJdID0gMjNdID0gXCJUYWJJdGVtXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJNZW51XCJdID0gMjRdID0gXCJNZW51XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJNZW51SXRlbVwiXSA9IDI1XSA9IFwiTWVudUl0ZW1cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbnRleHRNZW51XCJdID0gMjZdID0gXCJDb250ZXh0TWVudVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9wdXBcIl0gPSAyN10gPSBcIlBvcHVwXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJSZWN0YW5nbGVcIl0gPSAyOF0gPSBcIlJlY3RhbmdsZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRWxsaXBzZVwiXSA9IDI5XSA9IFwiRWxsaXBzZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9seWdvblwiXSA9IDMwXSA9IFwiUG9seWdvblwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGluZVwiXSA9IDMxXSA9IFwiTGluZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSG9yaXpvbnRhbFN0YWNrTGF5b3V0XCJdID0gMzJdID0gXCJIb3Jpem9udGFsU3RhY2tMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIl0gPSAzM10gPSBcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZsZXhMYXlvdXRcIl0gPSAzNF0gPSBcIkZsZXhMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZyYW1lXCJdID0gMzVdID0gXCJGcmFtZVwiO1xufSkoRWxlbWVudE5hbWUgfHwgKEVsZW1lbnROYW1lID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUHJvcGVydHlOYW1lO1xuKGZ1bmN0aW9uIChQcm9wZXJ0eU5hbWUpIHtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlRGFzaEFycmF5XCJdID0gMF0gPSBcIlN0cm9rZURhc2hBcnJheVwiO1xuICAgIC8vcmVjdGFuZ2xlXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJhZGl1c1hcIl0gPSAxXSA9IFwiUmFkaXVzWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSYWRpdXNZXCJdID0gMl0gPSBcIlJhZGl1c1lcIjtcbiAgICAvLyB2ZWN0b3I/XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNlbnRlclwiXSA9IDNdID0gXCJDZW50ZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRW5kUG9pbnRcIl0gPSA0XSA9IFwiRW5kUG9pbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sb3JcIl0gPSA1XSA9IFwiQ29sb3JcIjtcbiAgICAvL1NoYWRvd1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCcnVzaFwiXSA9IDZdID0gXCJCcnVzaFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPZmZTZXRcIl0gPSA3XSA9IFwiT2ZmU2V0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJhZGl1c1wiXSA9IDhdID0gXCJSYWRpdXNcIjtcbiAgICAvL0NvbW1vblxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbE9wdGlvbnNcIl0gPSA5XSA9IFwiVmVydGljYWxPcHRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhvcml6b250YWxPcHRpb25zXCJdID0gMTBdID0gXCJIb3Jpem9udGFsT3B0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCYWNrZ3JvdW5kXCJdID0gMTFdID0gXCJCYWNrZ3JvdW5kXCI7XG4gICAgLy9NYXJnaW4gaXMgbm90IHBvc3NpYmxlIHRvIGhhdmUgb24gYSBmaWdtYSBub2RlXG4gICAgLy9CdXR0b25cbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyV2lkdGhcIl0gPSAxMl0gPSBcIkJvcmRlcldpZHRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRMYXlvdXRcIl0gPSAxM10gPSBcIkNvbnRlbnRMYXlvdXRcIjtcbiAgICAvL0xhYmVsXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNoYXJhY3RlclNwYWNpbmdcIl0gPSAxNF0gPSBcIkNoYXJhY3RlclNwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF0dHJpYnV0ZXNcIl0gPSAxNV0gPSBcIkZvbnRBdHRyaWJ1dGVzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRBdXRvU2NhbGluZ0VuYWJsZWRcIl0gPSAxNl0gPSBcIkZvbnRBdXRvU2NhbGluZ0VuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEZhbWlseVwiXSA9IDE3XSA9IFwiRm9udEZhbWlseVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250U2l6ZVwiXSA9IDE4XSA9IFwiRm9udFNpemVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9ybWF0dGVkVGV4dFwiXSA9IDE5XSA9IFwiRm9ybWF0dGVkVGV4dFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsVGV4dEFsaWdubWVudFwiXSA9IDIwXSA9IFwiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGluZUJyZWFrTW9kZVwiXSA9IDIxXSA9IFwiTGluZUJyZWFrTW9kZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMaW5lSGVpZ2h0XCJdID0gMjJdID0gXCJMaW5lSGVpZ2h0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heExpbmVzXCJdID0gMjNdID0gXCJNYXhMaW5lc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQYWRkaW5nXCJdID0gMjRdID0gXCJQYWRkaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRcIl0gPSAyNV0gPSBcIlRleHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dENvbG9yXCJdID0gMjZdID0gXCJUZXh0Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dERlY29yYXRpb25zXCJdID0gMjddID0gXCJUZXh0RGVjb3JhdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dFRyYW5zZm9ybVwiXSA9IDI4XSA9IFwiVGV4dFRyYW5zZm9ybVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0VHlwZVwiXSA9IDI5XSA9IFwiVGV4dFR5cGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxUZXh0QWxpZ25tZW50XCJdID0gMzBdID0gXCJWZXJ0aWNhbFRleHRBbGlnbm1lbnRcIjtcbiAgICAvL0ZyYW1lXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNwYWNpbmdcIl0gPSAzMV0gPSBcIlNwYWNpbmdcIjtcbiAgICAvL0ZsZXhMYXlvdXRcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWxpZ25Db250ZW50XCJdID0gMzJdID0gXCJBbGlnbkNvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWxpZ25JdGVtc1wiXSA9IDMzXSA9IFwiQWxpZ25JdGVtc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJEaXJlY3Rpb25cIl0gPSAzNF0gPSBcIkRpcmVjdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJKdXN0aWZ5Q29udGVudFwiXSA9IDM1XSA9IFwiSnVzdGlmeUNvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUG9zaXRpb25cIl0gPSAzNl0gPSBcIlBvc2l0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIldyYXBcIl0gPSAzN10gPSBcIldyYXBcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWxpZ25TZWxmXCJdID0gMzhdID0gXCJBbGlnblNlbGZcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmFzaXNcIl0gPSAzOV0gPSBcIkJhc2lzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3dcIl0gPSA0MF0gPSBcIkdyb3dcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT3JkZXJcIl0gPSA0MV0gPSBcIk9yZGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNocmlua1wiXSA9IDQyXSA9IFwiU2hyaW5rXCI7XG4gICAgLy9Qb2x5Z29uXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBvaW50c1wiXSA9IDQzXSA9IFwiUG9pbnRzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZpbGxcIl0gPSA0NF0gPSBcIkZpbGxcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRmlsbFJ1bGVcIl0gPSA0NV0gPSBcIkZpbGxSdWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0cm9rZVwiXSA9IDQ2XSA9IFwiU3Ryb2tlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0cm9rZVRoaWNrbmVzc1wiXSA9IDQ3XSA9IFwiU3Ryb2tlVGhpY2tuZXNzXCI7XG4gICAgLy9MaW5lXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlgxXCJdID0gNDhdID0gXCJYMVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJYMlwiXSA9IDQ5XSA9IFwiWDJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiWTFcIl0gPSA1MF0gPSBcIlkxXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlkyXCJdID0gNTFdID0gXCJZMlwiO1xuICAgIC8vQm9yZGVyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0cm9rZVNoYXBlXCJdID0gNTJdID0gXCJTdHJva2VTaGFwZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXR0cmlidXRlXCJdID0gNTNdID0gXCJGb250QXR0cmlidXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcmVncm91bmRDb2xvclwiXSA9IDU0XSA9IFwiRm9yZWdyb3VuZENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJvcmRlckNvbG9yXCJdID0gNTVdID0gXCJCb3JkZXJDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCb3JkZXJUaGlja25lc3NcIl0gPSA1Nl0gPSBcIkJvcmRlclRoaWNrbmVzc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWaXNpYmlsaXR5XCJdID0gNTddID0gXCJWaXNpYmlsaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFwiXSA9IDU4XSA9IFwiSXNFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVhZE9ubHlcIl0gPSA1OV0gPSBcIklzUmVhZE9ubHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFdlaWdodFwiXSA9IDYwXSA9IFwiRm9udFdlaWdodFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250U3R5bGVcIl0gPSA2MV0gPSBcIkZvbnRTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0QWxpZ25tZW50XCJdID0gNjJdID0gXCJUZXh0QWxpZ25tZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkltYWdlU291cmNlXCJdID0gNjNdID0gXCJJbWFnZVNvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3VyY2VcIl0gPSA2NF0gPSBcIlNvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsQWxpZ25tZW50XCJdID0gNjVdID0gXCJIb3Jpem9udGFsQWxpZ25tZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsQWxpZ25tZW50XCJdID0gNjZdID0gXCJWZXJ0aWNhbEFsaWdubWVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPcGFjaXR5XCJdID0gNjddID0gXCJPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbW1hbmRcIl0gPSA2OF0gPSBcIkNvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29tbWFuZFBhcmFtZXRlclwiXSA9IDY5XSA9IFwiQ29tbWFuZFBhcmFtZXRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0NoZWNrZWRcIl0gPSA3MF0gPSBcIklzQ2hlY2tlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50XCJdID0gNzFdID0gXCJDb250ZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclwiXSA9IDcyXSA9IFwiSGVhZGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYWNlaG9sZGVyVGV4dFwiXSA9IDczXSA9IFwiUGxhY2Vob2xkZXJUZXh0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYWNlaG9sZGVyVGV4dENvbG9yXCJdID0gNzRdID0gXCJQbGFjZWhvbGRlclRleHRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVcIl0gPSA3NV0gPSBcIklzVmlzaWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0ZvY3VzZWRcIl0gPSA3Nl0gPSBcIklzRm9jdXNlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1NlbGVjdGVkXCJdID0gNzddID0gXCJJc1NlbGVjdGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1zU291cmNlXCJdID0gNzhdID0gXCJJdGVtc1NvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGVtcGxhdGVcIl0gPSA3OV0gPSBcIkl0ZW1UZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclwiXSA9IDgwXSA9IFwiUGxhY2Vob2xkZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJbmRleFwiXSA9IDgxXSA9IFwiU2VsZWN0ZWRJbmRleFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtXCJdID0gODJdID0gXCJNaW5pbXVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heGltdW1cIl0gPSA4M10gPSBcIk1heGltdW1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmFsdWVcIl0gPSA4NF0gPSBcIlZhbHVlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVG9nZ2xlZFwiXSA9IDg1XSA9IFwiSXNUb2dnbGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvcm5lclJhZGl1c1wiXSA9IDg2XSA9IFwiQ29ybmVyUmFkaXVzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUGFzc3dvcmRcIl0gPSA4N10gPSBcIklzUGFzc3dvcmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNSZWFkT25seUNhcmV0VmlzaWJsZVwiXSA9IDg4XSA9IFwiSXNSZWFkT25seUNhcmV0VmlzaWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtc1wiXSA9IDg5XSA9IFwiSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNPcGVuXCJdID0gOTBdID0gXCJJc09wZW5cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFZGl0YWJsZVwiXSA9IDkxXSA9IFwiSXNFZGl0YWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJEaXNwbGF5TWVtYmVyUGF0aFwiXSA9IDkyXSA9IFwiRGlzcGxheU1lbWJlclBhdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRWYWx1ZVwiXSA9IDkzXSA9IFwiU2VsZWN0ZWRWYWx1ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZFZhbHVlUGF0aFwiXSA9IDk0XSA9IFwiU2VsZWN0ZWRWYWx1ZVBhdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVhZGVyVGVtcGxhdGVcIl0gPSA5NV0gPSBcIkhlYWRlclRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvb3RlclRlbXBsYXRlXCJdID0gOTZdID0gXCJGb290ZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJY29uXCJdID0gOTddID0gXCJJY29uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkljb25Tb3VyY2VcIl0gPSA5OF0gPSBcIkljb25Tb3VyY2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBOYW1lXCJdID0gOTldID0gXCJHcm91cE5hbWVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2FuVXNlclNvcnRcIl0gPSAxMDBdID0gXCJDYW5Vc2VyU29ydFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyRmlsdGVyXCJdID0gMTAxXSA9IFwiQ2FuVXNlckZpbHRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5zXCJdID0gMTAyXSA9IFwiQ29sdW1uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dzXCJdID0gMTAzXSA9IFwiUm93c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5EZWZpbml0aW9uc1wiXSA9IDEwNF0gPSBcIkNvbHVtbkRlZmluaXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0RlZmluaXRpb25zXCJdID0gMTA1XSA9IFwiUm93RGVmaW5pdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2VsbFBhZGRpbmdcIl0gPSAxMDZdID0gXCJDZWxsUGFkZGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dTcGFuXCJdID0gMTA3XSA9IFwiUm93U3BhblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5TcGFuXCJdID0gMTA4XSA9IFwiQ29sdW1uU3BhblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0hlYWRlclZpc2libGVcIl0gPSAxMDldID0gXCJJc0hlYWRlclZpc2libGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNTb3J0YWJsZVwiXSA9IDExMF0gPSBcIklzU29ydGFibGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU29ydERpcmVjdGlvblwiXSA9IDExMV0gPSBcIlNvcnREaXJlY3Rpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBIZWFkZXJUZW1wbGF0ZVwiXSA9IDExMl0gPSBcIkdyb3VwSGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBGb290ZXJUZW1wbGF0ZVwiXSA9IDExM10gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBTdHlsZVwiXSA9IDExNF0gPSBcIkdyb3VwU3R5bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFeHBhbmRlZFwiXSA9IDExNV0gPSBcIklzRXhwYW5kZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNQYW5lbFwiXSA9IDExNl0gPSBcIkl0ZW1zUGFuZWxcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWx0ZXJuYXRpbmdSb3dDb2xvclwiXSA9IDExN10gPSBcIkFsdGVybmF0aW5nUm93Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNvbnRhaW5lclN0eWxlXCJdID0gMTE4XSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Db250YWluZXJTdHlsZVNlbGVjdG9yXCJdID0gMTE5XSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbVRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMjBdID0gXCJJdGVtVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclN0eWxlXCJdID0gMTIxXSA9IFwiR3JvdXBIZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclN0eWxlXCJdID0gMTIyXSA9IFwiR3JvdXBGb290ZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMjNdID0gXCJHcm91cEZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uSGVhZGVyU3R5bGVcIl0gPSAxMjRdID0gXCJDb2x1bW5IZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTI1XSA9IFwiQ29sdW1uSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGcm96ZW5Db2x1bW5Db3VudFwiXSA9IDEyNl0gPSBcIkZyb3plbkNvbHVtbkNvdW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkF1dG9HZW5lcmF0ZUNvbHVtbnNcIl0gPSAxMjddID0gXCJBdXRvR2VuZXJhdGVDb2x1bW5zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNTb3VyY2VcIl0gPSAxMjhdID0gXCJDb2x1bW5zU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNXaWR0aFwiXSA9IDEyOV0gPSBcIkNvbHVtbnNXaWR0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0TWVtYmVyUGF0aFwiXSA9IDEzMF0gPSBcIlNvcnRNZW1iZXJQYXRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclRlbXBsYXRlXCJdID0gMTMxXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyU3R5bGVcIl0gPSAxMzJdID0gXCJSb3dIZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTMzXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGlvbkNvdW50XCJdID0gMTM0XSA9IFwiQWx0ZXJuYXRpb25Db3VudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0FsdGVybmF0aW5nUm93Q29sb3JFbmFibGVkXCJdID0gMTM1XSA9IFwiSXNBbHRlcm5hdGluZ1Jvd0NvbG9yRW5hYmxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0l0ZW1DbGlja0VuYWJsZWRcIl0gPSAxMzZdID0gXCJJc0l0ZW1DbGlja0VuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMzddID0gXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMzhdID0gXCJWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0aW9uTW9kZVwiXSA9IDEzOV0gPSBcIlNlbGVjdGlvbk1vZGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtc1wiXSA9IDE0MF0gPSBcIlNlbGVjdGVkSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtXCJdID0gMTQxXSA9IFwiU2VsZWN0ZWRJdGVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1DbGlja1wiXSA9IDE0Ml0gPSBcIkl0ZW1DbGlja1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1N0aWNreVwiXSA9IDE0M10gPSBcIklzU3RpY2t5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUHVsbFRvUmVmcmVzaEVuYWJsZWRcIl0gPSAxNDRdID0gXCJJc1B1bGxUb1JlZnJlc2hFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJlZnJlc2hDb21tYW5kXCJdID0gMTQ1XSA9IFwiUmVmcmVzaENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiXSA9IDE0Nl0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ0NoYW5nZWRcIl0gPSAxNDddID0gXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nQ2hhbmdlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlRW5hYmxlZFwiXSA9IDE0OF0gPSBcIklzTG9hZE1vcmVFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxvYWRNb3JlQ29tbWFuZFwiXSA9IDE0OV0gPSBcIkxvYWRNb3JlQ29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlTG9hZGluZ1wiXSA9IDE1MF0gPSBcIklzTG9hZE1vcmVMb2FkaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiXSA9IDE1MV0gPSBcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGFwcGVkXCJdID0gMTUyXSA9IFwiSXRlbVRhcHBlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtU2VsZWN0ZWRcIl0gPSAxNTNdID0gXCJJdGVtU2VsZWN0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbURvdWJsZVRhcHBlZFwiXSA9IDE1NF0gPSBcIkl0ZW1Eb3VibGVUYXBwZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVMZWZ0Q29tbWFuZFwiXSA9IDE1NV0gPSBcIlN3aXBlTGVmdENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVSaWdodENvbW1hbmRcIl0gPSAxNTZdID0gXCJTd2lwZVJpZ2h0Q29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVVwQ29tbWFuZFwiXSA9IDE1N10gPSBcIlN3aXBlVXBDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlRG93bkNvbW1hbmRcIl0gPSAxNThdID0gXCJTd2lwZURvd25Db21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlSXRlbXNcIl0gPSAxNTldID0gXCJTd2lwZUl0ZW1zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVmcmVzaGluZ1wiXSA9IDE2MF0gPSBcIklzUmVmcmVzaGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSZWZyZXNoQ29tbWFuZFBhcmFtZXRlclwiXSA9IDE2MV0gPSBcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlaWdodFwiXSA9IDE2Ml0gPSBcIlJvd0hlaWdodFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBdXRvR2VuZXJhdGVJdGVtXCJdID0gMTYzXSA9IFwiQXV0b0dlbmVyYXRlSXRlbVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxNb2RlXCJdID0gMTY0XSA9IFwiU2Nyb2xsTW9kZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxCYXJWaXNpYmlsaXR5XCJdID0gMTY1XSA9IFwiU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1wiXSA9IDE2Nl0gPSBcIlNjcm9sbFRvXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvUm93XCJdID0gMTY3XSA9IFwiU2Nyb2xsVG9Sb3dcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Sb3dJbmRleFwiXSA9IDE2OF0gPSBcIlNjcm9sbFRvUm93SW5kZXhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Db2x1bW5cIl0gPSAxNjldID0gXCJTY3JvbGxUb0NvbHVtblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb0NvbHVtbkluZGV4XCJdID0gMTcwXSA9IFwiU2Nyb2xsVG9Db2x1bW5JbmRleFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTcxXSA9IFwiSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTcyXSA9IFwiRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNzNdID0gXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVpZ2h0UmVzaXplclwiXSA9IDE3NF0gPSBcIlJvd0hlaWdodFJlc2l6ZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsU3RhcnRlZFwiXSA9IDE3NV0gPSBcIk9uUHVsbFN0YXJ0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsRGVsdGFcIl0gPSAxNzZdID0gXCJPblB1bGxEZWx0YVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxDb21wbGV0ZWRcIl0gPSAxNzddID0gXCJPblB1bGxDb21wbGV0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsQ29udGVudFwiXSA9IDE3OF0gPSBcIk9uUHVsbENvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZWxlYXNlQ29udGVudFwiXSA9IDE3OV0gPSBcIk9uUmVsZWFzZUNvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZVN0YXJ0ZWRcIl0gPSAxODBdID0gXCJPblN3aXBlU3RhcnRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRGVsdGFcIl0gPSAxODFdID0gXCJPblN3aXBlRGVsdGFcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZUNvbXBsZXRlZFwiXSA9IDE4Ml0gPSBcIk9uU3dpcGVDb21wbGV0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxpbmdcIl0gPSAxODNdID0gXCJPblJldmVhbGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRW5kZWRcIl0gPSAxODRdID0gXCJPblN3aXBlRW5kZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxlZFwiXSA9IDE4NV0gPSBcIk9uUmV2ZWFsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25FeGVjdXRlXCJdID0gMTg2XSA9IFwiT25FeGVjdXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uSGlkaW5nXCJdID0gMTg3XSA9IFwiT25IaWRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25IaWRkZW5cIl0gPSAxODhdID0gXCJPbkhpZGRlblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN0YXRlQ2hhbmdlXCJdID0gMTg5XSA9IFwiT25TdGF0ZUNoYW5nZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbmltYXRpb25EdXJhdGlvblwiXSA9IDE5MF0gPSBcIkFuaW1hdGlvbkR1cmF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcE9mZnNldFwiXSA9IDE5MV0gPSBcIk1heFRvcE9mZnNldFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5Ub3BPZmZzZXRcIl0gPSAxOTJdID0gXCJNaW5Ub3BPZmZzZXRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluVG9wUmV2ZWFsZWRcIl0gPSAxOTNdID0gXCJNaW5Ub3BSZXZlYWxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhUb3BSZXZlYWxlZFwiXSA9IDE5NF0gPSBcIk1heFRvcFJldmVhbGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRUZW1wbGF0ZVwiXSA9IDE5NV0gPSBcIkNvbnRlbnRUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50VGVtcGxhdGVTZWxlY3RvclwiXSA9IDE5Nl0gPSBcIkNvbnRlbnRUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uXCJdID0gMTk3XSA9IFwiUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVcIl0gPSAxOThdID0gXCJTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmFuc2xhdGlvblhcIl0gPSAxOTldID0gXCJUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJhbnNsYXRpb25ZXCJdID0gMjAwXSA9IFwiVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxheW91dFhcIl0gPSAyMDFdID0gXCJMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxheW91dFlcIl0gPSAyMDJdID0gXCJMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIldpZHRoUmVxdWVzdFwiXSA9IDIwM10gPSBcIldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWlnaHRSZXF1ZXN0XCJdID0gMjA0XSA9IFwiSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gMjA1XSA9IFwiTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDIwNl0gPSBcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuY2hvclhcIl0gPSAyMDddID0gXCJBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuY2hvcllcIl0gPSAyMDhdID0gXCJBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWFwiXSA9IDIwOV0gPSBcIlJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3RhdGlvbllcIl0gPSAyMTBdID0gXCJSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVYXCJdID0gMjExXSA9IFwiU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlWVwiXSA9IDIxMl0gPSBcIlNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGF0Zm9ybUNvbmZpZ3VyYXRpb25cIl0gPSAyMTNdID0gXCJQbGF0Zm9ybUNvbmZpZ3VyYXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR2VzdHVyZVJlY29nbml6ZXJzXCJdID0gMjE0XSA9IFwiR2VzdHVyZVJlY29nbml6ZXJzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJlaGF2aW9yXCJdID0gMjE1XSA9IFwiQmVoYXZpb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJpZ2dlcnNcIl0gPSAyMTZdID0gXCJUcmlnZ2Vyc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDbGFzc0lkXCJdID0gMjE3XSA9IFwiQ2xhc3NJZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHlsZUlkXCJdID0gMjE4XSA9IFwiU3R5bGVJZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGbG93RGlyZWN0aW9uXCJdID0gMjE5XSA9IFwiRmxvd0RpcmVjdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJbnB1dFRyYW5zcGFyZW50XCJdID0gMjIwXSA9IFwiSW5wdXRUcmFuc3BhcmVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JcIl0gPSAyMjFdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JcIl0gPSAyMjJdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNcIl0gPSAyMjNdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uXCJdID0gMjI0XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdcIl0gPSAyMjVdID0gXCJJc1Zpc2libGVQYWRkaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyXCJdID0gMjI2XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JcIl0gPSAyMjddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFwiXSA9IDIyOF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1wiXSA9IDIyOV0gPSBcIklzVmlzaWJsZVNoYWRvd1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VcIl0gPSAyMzBdID0gXCJJc1Zpc2libGVTdHJva2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yXCJdID0gMjMxXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1wiXSA9IDIzMl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhcIl0gPSAyMzNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZXCJdID0gMjM0XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uXCJdID0gMjM1XSA9IFwiSXNWaXNpYmxlUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVcIl0gPSAyMzZdID0gXCJJc1Zpc2libGVTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0XCJdID0gMjM3XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RcIl0gPSAyMzhdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSAyMzldID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gMjQwXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIl0gPSAyNDFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1wiXSA9IDI0Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1wiXSA9IDI0M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yT3BhY2l0eVwiXSA9IDI0NF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCJdID0gMjQ1XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yT3BhY2l0eVwiXSA9IDI0Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dPcGFjaXR5XCJdID0gMjQ3XSA9IFwiSXNWaXNpYmxlU2hhZG93T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCJdID0gMjQ4XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhPcGFjaXR5XCJdID0gMjQ5XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllPcGFjaXR5XCJdID0gMjUwXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIl0gPSAyNTFdID0gXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVPcGFjaXR5XCJdID0gMjUyXSA9IFwiSXNWaXNpYmxlU2NhbGVPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RPcGFjaXR5XCJdID0gMjUzXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1NF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RPcGFjaXR5XCJdID0gMjU1XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RPcGFjaXR5XCJdID0gMjU2XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiXSA9IDI1N10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c09wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ09wYWNpdHlcIl0gPSAyNThdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nT3BhY2l0eVwiXSA9IDI1OV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRWRpdGFibGVMYXlvdXRcIl0gPSAyNjBdID0gXCJJc0VkaXRhYmxlTGF5b3V0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE9wYWNpdHlcIl0gPSAyNjFdID0gXCJJc0VuYWJsZWRPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uXCJdID0gMjYyXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiXSA9IDI2M10gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25cIl0gPSAyNjRdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblwiXSA9IDI2NV0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiXSA9IDI2Nl0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uXCJdID0gMjY3XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uXCJdID0gMjY4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCJdID0gMjY5XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblwiXSA9IDI3MF0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uXCJdID0gMjcxXSA9IFwiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25cIl0gPSAyNzJdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblwiXSA9IDI3M10gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uXCJdID0gMjc0XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25cIl0gPSAyNzVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uXCJdID0gMjc2XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uXCJdID0gMjc3XSA9IFwiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzhdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzldID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uXCJdID0gMjgwXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyODFdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25cIl0gPSAyODJdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25cIl0gPSAyODNdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uXCJdID0gMjg0XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlXCJdID0gMjg1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVwiXSA9IDI4Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVcIl0gPSAyODddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVwiXSA9IDI4OF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVwiXSA9IDI4OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlXCJdID0gMjkwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlXCJdID0gMjkxXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlXCJdID0gMjkyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVwiXSA9IDI5M10gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlXCJdID0gMjk0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVcIl0gPSAyOTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVwiXSA9IDI5Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlXCJdID0gMjk3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVcIl0gPSAyOThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlXCJdID0gMjk5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlXCJdID0gMzAwXSA9IFwiSXNWaXNpYmxlU2NhbGVTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVcIl0gPSAzMDFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVcIl0gPSAzMDJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlXCJdID0gMzAzXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVcIl0gPSAzMDRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVcIl0gPSAzMDVdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVcIl0gPSAzMDZdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlXCJdID0gMzA3XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFNjYWxlXCJdID0gMzA4XSA9IFwiSXNFbmFibGVkU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVYXCJdID0gMzA5XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVYXCJdID0gMzEwXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCJdID0gMzExXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWFwiXSA9IDMxMl0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVYXCJdID0gMzEzXSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWFwiXSA9IDMxNF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVYXCJdID0gMzE1XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVhcIl0gPSAzMTZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIl0gPSAzMTddID0gXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVYXCJdID0gMzE4XSA9IFwiSXNWaXNpYmxlU3Ryb2tlU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWFwiXSA9IDMxOV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIl0gPSAzMjBdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVYXCJdID0gMzIxXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWFwiXSA9IDMyMl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWFwiXSA9IDMyM10gPSBcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVYXCJdID0gMzI0XSA9IFwiSXNWaXNpYmxlU2NhbGVTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWFwiXSA9IDMyNV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCJdID0gMzI2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVYXCJdID0gMzI3XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWFwiXSA9IDMyOF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVYXCJdID0gMzI5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVhcIl0gPSAzMzBdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVhcIl0gPSAzMzFdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFNjYWxlWFwiXSA9IDMzMl0gPSBcIklzRW5hYmxlZFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVlcIl0gPSAzMzNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVlcIl0gPSAzMzRdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVlcIl0gPSAzMzVdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVZXCJdID0gMzM2XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVlcIl0gPSAzMzddID0gXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVZXCJdID0gMzM4XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVlcIl0gPSAzMzldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWVwiXSA9IDM0MF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlWVwiXSA9IDM0MV0gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VTY2FsZVlcIl0gPSAzNDJdID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVZXCJdID0gMzQzXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWVwiXSA9IDM0NF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVlcIl0gPSAzNDVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVZXCJdID0gMzQ2XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVZXCJdID0gMzQ3XSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVTY2FsZVlcIl0gPSAzNDhdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVZXCJdID0gMzQ5XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVlcIl0gPSAzNTBdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVlcIl0gPSAzNTFdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVZXCJdID0gMzUyXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIl0gPSAzNTNdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWVwiXSA9IDM1NF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWVwiXSA9IDM1NV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVZXCJdID0gMzU2XSA9IFwiSXNFbmFibGVkU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM1N10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM1OF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiXSA9IDM1OV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNjBdID0gXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWFwiXSA9IDM2MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvblhcIl0gPSAzNjJdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM2M10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25YXCJdID0gMzY0XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCJdID0gMzY1XSA9IFwiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWFwiXSA9IDM2Nl0gPSBcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNjddID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCJdID0gMzY4XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWFwiXSA9IDM2OV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIl0gPSAzNzBdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNzFdID0gXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWFwiXSA9IDM3Ml0gPSBcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzNdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3NF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3NV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzZdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiXSA9IDM3N10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25YXCJdID0gMzc4XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25YXCJdID0gMzc5XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIl0gPSAzODBdID0gXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzgxXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzgyXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCJdID0gMzgzXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWVwiXSA9IDM4NF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25ZXCJdID0gMzg1XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWVwiXSA9IDM4Nl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzg3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvbllcIl0gPSAzODhdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIl0gPSAzODldID0gXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25ZXCJdID0gMzkwXSA9IFwiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM5MV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIl0gPSAzOTJdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25ZXCJdID0gMzkzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWVwiXSA9IDM5NF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWVwiXSA9IDM5NV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25ZXCJdID0gMzk2XSA9IFwiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5N10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gMzk4XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gMzk5XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDQwMF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25ZXCJdID0gNDAxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvbllcIl0gPSA0MDJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvbllcIl0gPSA0MDNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFRyYW5zbGF0aW9uWVwiXSA9IDQwNF0gPSBcIklzRW5hYmxlZFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRYXCJdID0gNDA1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFhcIl0gPSA0MDZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WFwiXSA9IDQwN10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WFwiXSA9IDQwOF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0xheW91dFhcIl0gPSA0MDldID0gXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFhcIl0gPSA0MTBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JMYXlvdXRYXCJdID0gNDExXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WFwiXSA9IDQxMl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRYXCJdID0gNDEzXSA9IFwiSXNWaXNpYmxlU2hhZG93TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VMYXlvdXRYXCJdID0gNDE0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRYXCJdID0gNDE1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRYXCJdID0gNDE2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRYXCJdID0gNDE3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRYXCJdID0gNDE4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFhcIl0gPSA0MTldID0gXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVMYXlvdXRYXCJdID0gNDIwXSA9IFwiSXNWaXNpYmxlU2NhbGVMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRYXCJdID0gNDIxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyMl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RMYXlvdXRYXCJdID0gNDIzXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRYXCJdID0gNDI0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WFwiXSA9IDQyNV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFhcIl0gPSA0MjZdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WFwiXSA9IDQyN10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZExheW91dFhcIl0gPSA0MjhdID0gXCJJc0VuYWJsZWRMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFlcIl0gPSA0MjldID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WVwiXSA9IDQzMF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRZXCJdID0gNDMxXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRZXCJdID0gNDMyXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WVwiXSA9IDQzM10gPSBcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WVwiXSA9IDQzNF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFlcIl0gPSA0MzVdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRZXCJdID0gNDM2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0xheW91dFlcIl0gPSA0MzddID0gXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUxheW91dFlcIl0gPSA0MzhdID0gXCJJc1Zpc2libGVTdHJva2VMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFlcIl0gPSA0MzldID0gXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFlcIl0gPSA0NDBdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFlcIl0gPSA0NDFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFlcIl0gPSA0NDJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WVwiXSA9IDQ0M10gPSBcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUxheW91dFlcIl0gPSA0NDRdID0gXCJJc1Zpc2libGVTY2FsZUxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFlcIl0gPSA0NDVdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFlcIl0gPSA0NDddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFlcIl0gPSA0NDhdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRZXCJdID0gNDQ5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WVwiXSA9IDQ1MF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRZXCJdID0gNDUxXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTGF5b3V0WVwiXSA9IDQ1Ml0gPSBcIklzRW5hYmxlZExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yV2lkdGhSZXF1ZXN0XCJdID0gNDUzXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yV2lkdGhSZXF1ZXN0XCJdID0gNDU0XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzV2lkdGhSZXF1ZXN0XCJdID0gNDU1XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbldpZHRoUmVxdWVzdFwiXSA9IDQ1Nl0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nV2lkdGhSZXF1ZXN0XCJdID0gNDU3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlcldpZHRoUmVxdWVzdFwiXSA9IDQ1OF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yV2lkdGhSZXF1ZXN0XCJdID0gNDU5XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhXaWR0aFJlcXVlc3RcIl0gPSA0NjBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dXaWR0aFJlcXVlc3RcIl0gPSA0NjFdID0gXCJJc1Zpc2libGVTaGFkb3dXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlV2lkdGhSZXF1ZXN0XCJdID0gNDYyXSA9IFwiSXNWaXNpYmxlU3Ryb2tlV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ2M10gPSBcIklzVmlzaWJsZVRleHRDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNXaWR0aFJlcXVlc3RcIl0gPSA0NjRdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YV2lkdGhSZXF1ZXN0XCJdID0gNDY1XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVdpZHRoUmVxdWVzdFwiXSA9IDQ2Nl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbldpZHRoUmVxdWVzdFwiXSA9IDQ2N10gPSBcIklzVmlzaWJsZVJvdGF0aW9uV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlV2lkdGhSZXF1ZXN0XCJdID0gNDY4XSA9IFwiSXNWaXNpYmxlU2NhbGVXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiXSA9IDQ2OV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDcwXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDcxXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFdpZHRoUmVxdWVzdFwiXSA9IDQ3Ml0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCJdID0gNDczXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NzRdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NzVdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiXSA9IDQ3Nl0gPSBcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDc3XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0NzhdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ3OV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4MF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0hlaWdodFJlcXVlc3RcIl0gPSA0ODFdID0gXCJJc1Zpc2libGVQYWRkaW5nSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIl0gPSA0ODJdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDgzXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4NF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCJdID0gNDg1XSA9IFwiSXNWaXNpYmxlU2hhZG93SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VIZWlnaHRSZXF1ZXN0XCJdID0gNDg2XSA9IFwiSXNWaXNpYmxlU3Ryb2tlSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDg3XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCJdID0gNDg4XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhIZWlnaHRSZXF1ZXN0XCJdID0gNDg5XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllIZWlnaHRSZXF1ZXN0XCJdID0gNDkwXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIl0gPSA0OTFdID0gXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVIZWlnaHRSZXF1ZXN0XCJdID0gNDkyXSA9IFwiSXNWaXNpYmxlU2NhbGVIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDkzXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5NF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk1XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk2XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5N10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0hlaWdodFJlcXVlc3RcIl0gPSA0OThdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5OV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIl0gPSA1MDBdID0gXCJJc0VuYWJsZWRIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTAxXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDNdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNV0gPSBcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA2XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwOV0gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEwXSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTFdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxMl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTRdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE1XSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE2XSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTddID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MThdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE5XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjBdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTIzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTI0XSA9IFwiSXNFbmFibGVkTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUyNV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTI2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MjddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MjhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTI5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzM10gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNF0gPSBcIklzVmlzaWJsZVN0cm9rZU1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNV0gPSBcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzN10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzOF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0MF0gPSBcIklzVmlzaWJsZVNjYWxlTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0MV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0NF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDVdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ2XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDddID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ4XSA9IFwiSXNFbmFibGVkTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JYXCJdID0gNTQ5XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvclhcIl0gPSA1NTBdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWFwiXSA9IDU1MV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWFwiXSA9IDU1Ml0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0FuY2hvclhcIl0gPSA1NTNdID0gXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvclhcIl0gPSA1NTRdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JBbmNob3JYXCJdID0gNTU1XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWFwiXSA9IDU1Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dBbmNob3JYXCJdID0gNTU3XSA9IFwiSXNWaXNpYmxlU2hhZG93QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VBbmNob3JYXCJdID0gNTU4XSA9IFwiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JYXCJdID0gNTU5XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JYXCJdID0gNTYwXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JYXCJdID0gNTYxXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JYXCJdID0gNTYyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvclhcIl0gPSA1NjNdID0gXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVBbmNob3JYXCJdID0gNTY0XSA9IFwiSXNWaXNpYmxlU2NhbGVBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JYXCJdID0gNTY1XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWFwiXSA9IDU2Nl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RBbmNob3JYXCJdID0gNTY3XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JYXCJdID0gNTY4XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWFwiXSA9IDU2OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvclhcIl0gPSA1NzBdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWFwiXSA9IDU3MV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEFuY2hvclhcIl0gPSA1NzJdID0gXCJJc0VuYWJsZWRBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvcllcIl0gPSA1NzNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWVwiXSA9IDU3NF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JZXCJdID0gNTc1XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JZXCJdID0gNTc2XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWVwiXSA9IDU3N10gPSBcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWVwiXSA9IDU3OF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvcllcIl0gPSA1NzldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JZXCJdID0gNTgwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0FuY2hvcllcIl0gPSA1ODFdID0gXCJJc1Zpc2libGVTaGFkb3dBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUFuY2hvcllcIl0gPSA1ODJdID0gXCJJc1Zpc2libGVTdHJva2VBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvcllcIl0gPSA1ODNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvcllcIl0gPSA1ODRdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvcllcIl0gPSA1ODVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvcllcIl0gPSA1ODZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWVwiXSA9IDU4N10gPSBcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUFuY2hvcllcIl0gPSA1ODhdID0gXCJJc1Zpc2libGVTY2FsZUFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvcllcIl0gPSA1ODldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JZXCJdID0gNTkwXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvcllcIl0gPSA1OTFdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvcllcIl0gPSA1OTJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JZXCJdID0gNTkzXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWVwiXSA9IDU5NF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JZXCJdID0gNTk1XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkQW5jaG9yWVwiXSA9IDU5Nl0gPSBcIklzRW5hYmxlZEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25YXCJdID0gNTk3XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25YXCJdID0gNTk4XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25YXCJdID0gNTk5XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uWFwiXSA9IDYwMF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25YXCJdID0gNjAxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uWFwiXSA9IDYwMl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25YXCJdID0gNjAzXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblhcIl0gPSA2MDRdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblhcIl0gPSA2MDVdID0gXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25YXCJdID0gNjA2XSA9IFwiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWFwiXSA9IDYwN10gPSBcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblhcIl0gPSA2MDhdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25YXCJdID0gNjA5XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWFwiXSA9IDYxMF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uWFwiXSA9IDYxMV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlUm90YXRpb25YXCJdID0gNjEyXSA9IFwiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiXSA9IDYxM10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25YXCJdID0gNjE0XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25YXCJdID0gNjE1XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWFwiXSA9IDYxNl0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCJdID0gNjE3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblhcIl0gPSA2MThdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblhcIl0gPSA2MTldID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFJvdGF0aW9uWFwiXSA9IDYyMF0gPSBcIklzRW5hYmxlZFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvbllcIl0gPSA2MjFdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvbllcIl0gPSA2MjJdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIl0gPSA2MjNdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25ZXCJdID0gNjI0XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvbllcIl0gPSA2MjVdID0gXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25ZXCJdID0gNjI2XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvbllcIl0gPSA2MjddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWVwiXSA9IDYyOF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiXSA9IDYyOV0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvbllcIl0gPSA2MzBdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCJdID0gNjMxXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiXSA9IDYzMl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvbllcIl0gPSA2MzNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCJdID0gNjM0XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25ZXCJdID0gNjM1XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvbllcIl0gPSA2MzZdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjM3XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2MzhdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2MzldID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjQwXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIl0gPSA2NDFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWVwiXSA9IDY0Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWVwiXSA9IDY0M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkUm90YXRpb25ZXCJdID0gNjQ0XSA9IFwiSXNFbmFibGVkUm90YXRpb25ZXCI7XG59KShQcm9wZXJ0eU5hbWUgfHwgKFByb3BlcnR5TmFtZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9mcmFtZS0yLWxheW91dFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9lbGxpcHNlLTItZWxsaXBzZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbFwiO1xuaW1wb3J0IHsgQ29udGVudFZpZXcgfSBmcm9tIFwiLi94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC12aWV3XCI7XG5pbXBvcnQgeyBDdXN0b21Db250cm9sIH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtY3VzdG9tLWNvbnRyb2xcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVJlY3RhbmdsZUVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9yZWN0YW5nbGUtMi1yZWN0YW5nbGVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUxpbmVFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvbGluZS0yLWxpbmVcIjtcbmltcG9ydCB7IENvbnRlbnRQYWdlIH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtcGFnZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlVmVjdG9yRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3ZlY3Rvci0yLWljb25cIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vYnV0dG9uLTIteGFtbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRWRpdG9yRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lZGl0b3ItMi14YW1sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVFbnRyeUVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZW50cnktMi14YW1sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb2xsZWN0aW9uRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9jb2xsZWN0aW9uLTIteGFtbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUG9seWdvbkVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9wb2x5Z29uLTItcG9seWdvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmlnbWEobm9kZXMpIHtcbiAgICBjb25zb2xlLmxvZygnUGFyc2luZyBOb2RlczogJywgbm9kZXMpO1xuICAgIGxldCB4YW1sQ29kZSA9IFwiXCI7XG4gICAgbGV0IHJvb3Rub2RlID0gbm9kZXNbMF07XG4gICAgbGV0IGNvbnRlbnRQYWdlID0gbmV3IENvbnRlbnRQYWdlKHJvb3Rub2RlLnBhcmVudC5ub2RlLm5hbWUpO1xuICAgIGxldCByb290TGF5b3V0ID0gVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dChyb290bm9kZS5wYXJlbnQubm9kZSk7XG4gICAgeGFtbENvZGUgKz0gY29udGVudFBhZ2UuZ2V0U3RhcnRUYWcoKSArIGBcXG4ke2Zvcm1hdFN0YXJ0VGFnKHJvb3RMYXlvdXQpfVxcbmA7XG4gICAgcm9vdG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgICAgLy9UcmFzbGF0ZSB0aGUgTmVzdGVkIGVsZW1lbnRzIHRvIFxuICAgICAgICB4YW1sQ29kZSArPSBmb3JtYXROZXN0ZWRFbGVtZW50KGNoZWNrTm9kZVR5cGUoYykpO1xuICAgIH0pO1xuICAgIHhhbWxDb2RlICs9IGBcXG4ke2Zvcm1hdEVuZFRhZyhyb290TGF5b3V0KX1cXG5gICsgY29udGVudFBhZ2UuZ2V0RW5kVGFnKCk7XG4gICAgcmV0dXJuIHhhbWxDb2RlO1xufVxuZnVuY3Rpb24gZm9ybWF0TmVzdGVkRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChlbGVtZW50LnBhcmVudCBpbnN0YW5jZW9mIEN1c3RvbUNvbnRyb2wpIHtcbiAgICAgICAgcmVzdWx0ICs9IGVsZW1lbnQucGFyZW50LmdldFN0YXJ0VGFnKCkgKyBlbGVtZW50LnBhcmVudC5nZXRFbmRUYWcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudC5wYXJlbnQgaW5zdGFuY2VvZiBDb250ZW50Vmlldykge1xuICAgICAgICByZXN1bHQgKz0gZWxlbWVudC5wYXJlbnQuZ2V0U3RhcnRUYWcoKSArIC8qYFxcbiR7bmVzdGVkQ29tcG9uZW50fWAgKyovIGVsZW1lbnQucGFyZW50LmdldEVuZFRhZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Lm5hbWUgPT09IEVsZW1lbnROYW1lLm5vbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBTdGFydCB0YWdcbiAgICAgICAgICAgIHJlc3VsdCArPSBmb3JtYXRTdGFydFRhZyhlbGVtZW50LnBhcmVudCk7XG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgY2hpbGRyZW4gYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgZm9ybWF0TmVzdGVkRWxlbWVudCBvbiBlYWNoIGNoaWxkXG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGZvcm1hdE5lc3RlZEVsZW1lbnQoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc3VsdCArPSBmb3JtYXRFbmRUYWcoZWxlbWVudC5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGZvcm1hdFNob3J0VGFnKGVsZW1lbnQucGFyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2hlY2tOb2RlVHlwZShubikge1xuICAgIC8vQ2hlY2sgaWYgdGhlIG5vZGUgaGFzIGJlZW4gYXNzaWduZWQgYSBjdXN0b20gdmFsdWVcbiAgICBpZiAobm4ucGFyZW50LnV0eXBlICE9PSAnTm9uZScpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlVXR5cGVOb2Rlcyhubik7XG4gICAgfVxuICAgIC8vIHRha2UgdGhlIHRvcCBub2RlXG4gICAgbGV0IG5vZGUgPSBubi5wYXJlbnQubm9kZTtcbiAgICAvLyBDaGVjayB0aGUgbm9kZSdzIHR5cGUgdXNpbmcgdGhlICd0eXBlJyBwcm9wZXJ0eVxuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0ZSQU1FJzpcbiAgICAgICAgICAgIC8vIENyZWF0ZSBmcmFtZSBlbGVtZW50IC0+IGJlY2FvbWVzIGEgeGFtbCBsYXlvdXQgZWxlbWVudCBcbiAgICAgICAgICAgIGxldCBmcmFtZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IGZyYW1lRWxlbWVudCA9IFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQoZnJhbWVOb2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRGcmFtZSA9IHsgcGFyZW50OiBmcmFtZUVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEZyYW1lLmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSkpO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEZyYW1lO1xuICAgICAgICBjYXNlICdHUk9VUCc6XG4gICAgICAgICAgICBsZXQgZ3JvdXBFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5ub25lLCBwcm9wZXJ0aWVzOiBbXSB9O1xuICAgICAgICAgICAgbGV0IG5lc3RlZEdyb3VwID0geyBwYXJlbnQ6IGdyb3VwRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmVzdGVkR3JvdXAuY2hpbGRyZW4ucHVzaChjaGVja05vZGVUeXBlKG4pKSk7XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkR3JvdXA7XG4gICAgICAgIGNhc2UgJ1RFWFQnOlxuICAgICAgICAgICAgbGV0IHRleHROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCB0ZXh0RWxlbWVudCA9IFRyYW5zbGF0ZVRleHRFbGVtZW50KHRleHROb2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRUZXh0ID0geyBwYXJlbnQ6IHRleHRFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRUZXh0O1xuICAgICAgICBjYXNlICdFTExJUFNFJzpcbiAgICAgICAgICAgIGxldCBlbGxpcHNlTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgZWxsaXBzZUVsZW1lbnQgPSBUcmFuc2xhdGVFbGxpcHNlRWxlbWVudChlbGxpcHNlTm9kZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkRWxpcHNlID0geyBwYXJlbnQ6IGVsbGlwc2VFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRFbGlwc2U7XG4gICAgICAgIGNhc2UgJ0xJTkUnOlxuICAgICAgICAgICAgbGV0IGxpbmVOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCBsaW5lRWxlbWVudCA9IFRyYW5zbGF0ZUxpbmVFbGVtZW50KGxpbmVOb2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRMaW5lID0geyBwYXJlbnQ6IGxpbmVFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRMaW5lO1xuICAgICAgICBjYXNlICdSRUNUQU5HTEUnOlxuICAgICAgICAgICAgbGV0IHJlY3RhbmdsZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IHJlY3RhbmdsZUVsZW1lbnQgPSBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KHJlY3RhbmdsZU5vZGUpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZFJlY3RhbmdsZSA9IHsgcGFyZW50OiByZWN0YW5nbGVFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRSZWN0YW5nbGU7XG4gICAgICAgIGNhc2UgJ1BPTFlHT04nOlxuICAgICAgICAgICAgbGV0IHBvbHlnb25Ob2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCBwb2x5Z29uRWxlbWVudCA9IFRyYW5zbGF0ZVBvbHlnb25FbGVtZW50KHBvbHlnb25Ob2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRQb2x5Z29uID0geyBwYXJlbnQ6IHBvbHlnb25FbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRQb2x5Z29uO1xuICAgICAgICBjYXNlICdWRUNUT1InOlxuICAgICAgICAgICAgbGV0IHZlY3Rvck5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IHZlY3RvckVsZW1lbnQgPSBUcmFuc2xhdGVWZWN0b3JFbGVtZW50KHZlY3Rvck5vZGUpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZFZlY3RvciA9IHsgcGFyZW50OiB2ZWN0b3JFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRWZWN0b3I7XG4gICAgICAgIGNhc2UgJ0lOU1RBTkNFJzpcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IGJpbmRpbmdzID0gW107IC8vVE9ETzogY2hpbGRyZW5cbiAgICAgICAgICAgIGxldCBjdXN0b21Db250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woaW5zdGFuY2VOb2RlLm5hbWUsIGJpbmRpbmdzKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRDb250cm9sID0geyBwYXJlbnQ6IGN1c3RvbUNvbnRyb2wsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZENvbnRyb2w7XG4gICAgICAgIGNhc2UgJ0NPTVBPTkVOVCc6XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAvLyBUT0RPOiBNYWtlIG5ldyByZXNvdXJjZSBmaWxlIC8gbmV3IHdpbmRvd1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRWaWV3ID0gbmV3IENvbnRlbnRWaWV3KG5vZGUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkQ29tcG9uZW50ID0geyBwYXJlbnQ6IGNvbnRlbnRWaWV3LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuZXN0ZWRDb21wb25lbnQuY2hpbGRyZW4ucHVzaChjaGVja05vZGVUeXBlKG4pKSk7XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQ29tcG9uZW50O1xuICAgICAgICBjYXNlICdTVEFSJzpcbiAgICAgICAgY2FzZSAnQk9PTEVBTl9PUEVSQVRJT04nOlxuICAgICAgICBjYXNlICdTTElDRSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUubm9uZSwgcHJvcGVydGllczogW10gfTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWQgPSB7IHBhcmVudDogZWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlVXR5cGVOb2Rlcyhubikge1xuICAgIGxldCBub2RlID0gbm4ucGFyZW50O1xuICAgIGNvbnNvbGUubG9nKCd0cmFuc2xhdGluZyA6ICcsIG5vZGUudXR5cGUpO1xuICAgIC8vIENoZWNrIHRoZSBub2RlJ3MgdHlwZSB1c2luZyB0aGUgJ3R5cGUnIHByb3BlcnR5XG4gICAgc3dpdGNoIChub2RlLnV0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0JVVFRPTic6XG4gICAgICAgICAgICBsZXQgYnV0dG9uTm9kZSA9IG5vZGUubm9kZTtcbiAgICAgICAgICAgIGxldCBidXR0b25FbGVtZW50ID0gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChidXR0b25Ob2RlKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRCdXR0b24gPSB7IHBhcmVudDogYnV0dG9uRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgICAgICBpZiAobm4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBuLnBhcmVudC5ub2RlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRFbGVtZW50ID0gVHJhbnNsYXRlVGV4dEVsZW1lbnQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5jb25jYXQodGV4dEVsZW1lbnQucHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROb2RlLnR5cGUgPT09ICdWRUNUT1InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVjdG9yRWxlbWVudCA9IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5jb25jYXQodmVjdG9yRWxlbWVudC5wcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZEJ1dHRvbi5jaGlsZHJlbi5wdXNoKGNoZWNrTm9kZVR5cGUobikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQnV0dG9uO1xuICAgICAgICBjYXNlICdFRElUT1InOlxuICAgICAgICAgICAgbGV0IGVkaXRvck5vZGUgPSBub2RlLm5vZGU7XG4gICAgICAgICAgICBsZXQgZWRpdG9yRWxlbWVudCA9IFRyYW5zbGF0ZUVkaXRvckVsZW1lbnQoZWRpdG9yTm9kZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkRWRpdG9yID0geyBwYXJlbnQ6IGVkaXRvckVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gbi5wYXJlbnQubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlclByb3AgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5QbGFjZWhvbGRlciwgdmFsdWU6IGNoaWxkTm9kZS5jaGFyYWN0ZXJzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JFbGVtZW50LnByb3BlcnRpZXMucHVzaChwbGFjZWhvbGRlclByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkRWRpdG9yLmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRFZGl0b3I7XG4gICAgICAgIGNhc2UgJ0VOVFJZJzpcbiAgICAgICAgICAgIGxldCBlbnRyeU5vZGUgPSBub2RlLm5vZGU7XG4gICAgICAgICAgICBsZXQgZW50cnlFbGVtZW50ID0gVHJhbnNsYXRlRW50cnlFbGVtZW50KGVudHJ5Tm9kZSk7XG4gICAgICAgICAgICBsZXQgbmVzdGVkRW50cnkgPSB7IHBhcmVudDogZW50cnlFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIGlmIChubi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkTm9kZSA9IG4ucGFyZW50Lm5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXJQcm9wID0geyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGxhY2Vob2xkZXIsIHZhbHVlOiBjaGlsZE5vZGUuY2hhcmFjdGVycyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2gocGxhY2Vob2xkZXJQcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZEVudHJ5LmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRFbnRyeTtcbiAgICAgICAgY2FzZSAnTElTVFZJRVcnOlxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb25Ob2RlID0gbm9kZS5ub2RlO1xuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb25FbGVtZW50ID0gVHJhbnNsYXRlQ29sbGVjdGlvbkVsZW1lbnQoY29sbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZENvbGxlY3Rpb24gPSB7IHBhcmVudDogY29sbGVjdGlvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRDb2xsZWN0aW9uLmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQ29sbGVjdGlvbjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5ub25lLCBwcm9wZXJ0aWVzOiBbXSB9O1xuICAgICAgICAgICAgbGV0IG5lc3RlZCA9IHsgcGFyZW50OiBlbGVtZW50LCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBwcm9wZXJ0aWVzXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+IChwcm9wLnZhbHVlICE9PSAnTm9uZScpKSAvLyBFeGNsdWRlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZSAnTm9uZScgYmVjYXVzZSB0aGVuIGl0IGlzIHNldCB0byBkZWZhdWx0IHZhbHVlXG4gICAgICAgIC5tYXAoKHByb3ApID0+IGAke1Byb3BlcnR5TmFtZVtwcm9wLm5hbWVdfT1cIiR7cHJvcC52YWx1ZX1cImApXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59XG5mdW5jdGlvbiBmb3JtYXRTdGFydFRhZyhlbGVtZW50KSB7XG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBlbGVtZW50LnByb3BlcnRpZXNcbiAgICAgICAgLmZpbHRlcigocHJvcCkgPT4gKHByb3AudmFsdWUgIT09ICdOb25lJykpIC8vIEV4Y2x1ZGUgcHJvcGVydGllcyB3aXRoIHZhbHVlICdOb25lJyBiZWNhdXNlIHRoZW4gaXQgaXMgc2V0IHRvIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIHJldHVybiBgPCR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0gJHtwcm9wZXJ0eVN0cmluZ30+XFxuYDtcbn1cbmZ1bmN0aW9uIGZvcm1hdFNob3J0VGFnKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xuICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiBwcm9wLnZhbHVlICE9PSAnTm9uZScpIC8vIEV4Y2x1ZGUgcHJvcGVydGllcyB3aXRoIHZhbHVlICdOb25lJyBiZWNhdXNlIHRoZW4gaXQgaXMgc2V0IHRvIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcbiAgICAgICAgLmpvaW4oXCIgXCIgKyBgXFxuXFx0YCk7XG4gICAgcmV0dXJuIGA8JHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfSAke3Byb3BlcnR5U3RyaW5nfS8+XFxuYDtcbn1cbmZ1bmN0aW9uIGZvcm1hdEVuZFRhZyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGA8LyR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0+XFxuYDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShlbGVtZW50TmFtZSwgbm9kZSkge1xuICAgIGlmICgnZmlsbHMnIGluIG5vZGUpIHtcbiAgICAgICAgbGV0IHhhbWxTdHJpbmcgPSBgLiR7RWxlbWVudE5hbWUuQmFja2dyb3VuZH1gO1xuICAgICAgICBjb25zdCBmaWxscyA9IG5vZGUuZmlsbHM7XG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFja2dyb3VuZFByb3AgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5CYWNrZ3JvdW5kLCB2YWx1ZTogY29sb3IgfTtcbiAgICAgICAgICAgICAgICAgICAgeGFtbFN0cmluZyArPSBgJHtmb3JtYXRQcm9wZXJ0aWVzKFtiYWNrZ3JvdW5kUHJvcF0pfS8+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsbC50eXBlID09PSAnR1JBRElFTlRfTElORUFSJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmFkaWVudFBhaW50ID0gZmlsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVhckdyYWRpZW50QnJ1c2hQcm9wID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRW5kUG9pbnQsIHZhbHVlOiAnMSwwJyB9XG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lYXJHcmFkaWVudEJydXNoRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGluZWFyR3JhZGllbnRCcnVzaCwgcHJvcGVydGllczogbGluZWFyR3JhZGllbnRCcnVzaFByb3AgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyYWRpZW50UGFpbnQuZ3JhZGllbnRTdG9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRQcm9wcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRQYWludC5ncmFkaWVudFN0b3BzLmZvckVhY2goc3RvcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyYWRQcm9wID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5PZmZTZXQsIHZhbHVlOiBgJHtzdG9wLnBvc2l0aW9ufWAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29sb3IsIHZhbHVlOiBgIyR7c3RvcC5jb2xvci5yfSR7c3RvcC5jb2xvci5nfSR7c3RvcC5jb2xvci5ifWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZFByb3BzLnB1c2goeyBuYW1lOiBFbGVtZW50TmFtZS5HcmFkaWVudFN0b3AsIHByb3BlcnRpZXM6IGdyYWRQcm9wIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcHNTdHJpbmcgPSBncmFkUHJvcHMuZm9yRWFjaChnID0+IGZvcm1hdFNob3J0VGFnKGcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhhbWxTdHJpbmcgKz0gYD5cXG4ke2Zvcm1hdFN0YXJ0VGFnKGxpbmVhckdyYWRpZW50QnJ1c2hFbGVtZW50KX0+JHtzdG9wc1N0cmluZ30ke2Zvcm1hdEVuZFRhZyhsaW5lYXJHcmFkaWVudEJydXNoRWxlbWVudCl9YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWxsLnR5cGUgPT09ICdHUkFESUVOVF9SQURJQUwnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBHcmFkaWVudCBQYWludCAoTGluZWFyIG9yIFJhZGlhbClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRQYWludCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpYWxHcmFkaWVudEJydXNoUHJvcCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNlbnRlciwgdmFsdWU6ICcwLjUsIDAuNScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlJhZGl1cywgdmFsdWU6ICcwLjUnIH1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGlhbEdyYWRpZW50QnJ1c2hFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5SYWRpYWxHcmFkaWVudEJydXNoLCBwcm9wZXJ0aWVzOiByYWRpYWxHcmFkaWVudEJydXNoUHJvcCB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhZGllbnRQYWludC5ncmFkaWVudFN0b3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JhZFByb3BzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFBhaW50LmdyYWRpZW50U3RvcHMuZm9yRWFjaChzdG9wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JhZFByb3AgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk9mZlNldCwgdmFsdWU6IGAke3N0b3AucG9zaXRpb259YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db2xvciwgdmFsdWU6IGAjJHtzdG9wLmNvbG9yLnJ9JHtzdG9wLmNvbG9yLmd9JHtzdG9wLmNvbG9yLmJ9YCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkUHJvcHMucHVzaCh7IG5hbWU6IEVsZW1lbnROYW1lLkdyYWRpZW50U3RvcCwgcHJvcGVydGllczogZ3JhZFByb3AgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9wc1N0cmluZyA9IGdyYWRQcm9wcy5mb3JFYWNoKGcgPT4gZm9ybWF0U2hvcnRUYWcoZykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeGFtbFN0cmluZyArPSBgPlxcbiR7Zm9ybWF0U3RhcnRUYWcocmFkaWFsR3JhZGllbnRCcnVzaEVsZW1lbnQpfT4ke3N0b3BzU3RyaW5nfSR7Zm9ybWF0RW5kVGFnKHJhZGlhbEdyYWRpZW50QnJ1c2hFbGVtZW50KX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhhbWxTdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IEZpZ21hTm9kZSB9IGZyb20gXCIuL2ZpZ21hTm9kZVR5cGVzXCI7XG5sZXQgYm9yZGVyRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQm9yZGVyLCBwcm9wZXJ0aWVzOiBbXSB9O1xubGV0IGJhY2tncm91bmQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJhY2tncm91bmQsIHByb3BlcnRpZXM6IFtdIH07XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgY29tbW9uUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk9wYWNpdHksIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVPcGFjaXR5KG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSXNWaXNpYmxlLCB2YWx1ZTogYm9vbFRvRGVmYXVsdChub2RlLnZpc2libGUsIHRydWUpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogKF9iID0gdHJhbnNsYXRlTGF5b3V0QWxpZ24obm9kZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5WZXJ0aWNhbE9wdGlvbnMsIHZhbHVlOiAoX2MgPSB0cmFuc2xhdGVMYXlvdXRBbGlnbihub2RlKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJ05vbmUnIH0sXG4gICAgXTtcbiAgICByZXR1cm4gY29tbW9uUHJvcGVydGllcztcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxheW91dEFsaWduKG5vZGUpIHtcbiAgICBpZiAoJ2xheW91dEFsaWduJyBpbiBub2RlKSB7XG4gICAgICAgIHN3aXRjaCAobm9kZS5sYXlvdXRBbGlnbikge1xuICAgICAgICAgICAgY2FzZSBcIkNFTlRFUlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnQ2VudGVyJztcbiAgICAgICAgICAgIGNhc2UgXCJNQVhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0VuZCc7XG4gICAgICAgICAgICBjYXNlIFwiU1RSRVRDSFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnRmlsbCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnU3RhcnQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlU3Ryb2tlKG5vZGUpIHtcbiAgICAvL2NvbG9yXG4gICAgaWYgKCdzdHJva2VzJyBpbiBub2RlKSB7XG4gICAgICAgIG5vZGUuc3Ryb2tlcy5mb3JFYWNoKHN0cm9rZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlLnR5cGUgPT09ICdTT0xJRCcgJiYgKG5vZGUuc3Ryb2tlV2VpZ2h0ICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBzdHJva2UuY29sb3I7XG4gICAgICAgICAgICAgICAgbGV0IHN0cm9rZUNvbG9yID0geyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlLCB2YWx1ZTogYCMke2NvbC5yfSR7Y29sLmd9JHtjb2wuYn1gIH07XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goc3Ryb2tlQ29sb3IpO1xuICAgICAgICAgICAgICAgIGxldCBzdHJva2VXZWlnaHQgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VUaGlja25lc3MsIHZhbHVlOiBgJHtub2RlLnN0cm9rZVdlaWdodH1gIH07XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goc3Ryb2tlV2VpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYm9vbFRvRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVPcGFjaXR5KG5vZGUpIHtcbiAgICBpZiAoJ29wYWNpdHknIGluIG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUub3BhY2l0eS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUNvcm5lclJhZGl1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSAhPT0gKEZpZ21hTm9kZS5DT01QT05FTlQgfHwgRmlnbWFOb2RlLkNPTVBPTkVOVF9TRVQgfHwgRmlnbWFOb2RlLkZSQU1FIHx8IEZpZ21hTm9kZS5JTlNUQU5DRSB8fCBGaWdtYU5vZGUuUkVDVEFOR0xFKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzdHJva2VTaGFwZSA9IHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZVNoYXBlLCB2YWx1ZTogYFJvdW5kUmVjdGFuZ2xlICAke25vZGUudG9wTGVmdFJhZGl1c30sICR7bm9kZS50b3BSaWdodFJhZGl1c30sICR7bm9kZS5ib3R0b21MZWZ0UmFkaXVzfSwgJHtub2RlLmJvdHRvbVJpZ2h0UmFkaXVzfWAgfTtcbiAgICBib3JkZXJFbGVtZW50LnByb3BlcnRpZXMucHVzaChzdHJva2VTaGFwZSk7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVTaGFkb3cobm9kZSkge1xuICAgIGlmICgnZWZmZWN0cycgaW4gbm9kZSkge1xuICAgICAgICBub2RlLmVmZmVjdHMuZm9yRWFjaChlZmZlY3QgPT4ge1xuICAgICAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSAnRFJPUF9TSEFET1cnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGVmZmVjdC5jb2xvcjtcbiAgICAgICAgICAgICAgICBsZXQgb2ZmID0gZWZmZWN0Lm9mZnNldDtcbiAgICAgICAgICAgICAgICBsZXQgc2hhZG93UHJvcGVydGllcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQnJ1c2gsIHZhbHVlOiBgIyR7Y29sLnJ9JHtjb2wuZ30ke2NvbC5ifWAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuT2ZmU2V0LCB2YWx1ZTogYCR7b2ZmLnh9LCAke29mZi55fWAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuT3BhY2l0eSwgdmFsdWU6IGAke2NvbC5hfWAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzLCB2YWx1ZTogYCR7ZWZmZWN0LnJhZGl1c31gIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiBFbGVtZW50TmFtZS5TaGFkb3csIHByb3BlcnRpZXM6IHNoYWRvd1Byb3BlcnRpZXMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dChub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLmxheW91dE1vZGUpIHtcbiAgICAgICAgY2FzZSBcIkhPUklaT05UQUxcIjpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVIb3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpO1xuICAgICAgICBjYXNlIFwiVkVSVElDQUxcIjpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVWZXJ0aWNhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVGbGV4TGF5b3V0RWxlbWVudChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBUcmFuc2xhdGVGbGV4TGF5b3V0RWxlbWVudChub2RlKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGZsZXhMYXlvdXRQcm9wZXJ0aWVzID0gW1xuICAgICAgICAvKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBsYXllciB1c2VzIGF1dG8tbGF5b3V0IHRvIHBvc2l0aW9uIGl0cyBjaGlsZHJlbi4gRGVmYXVsdHMgdG8gXCJOT05FXCIuICovXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKG5vZGUuaXRlbVNwYWNpbmcudG9TdHJpbmcoKSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnbkNvbnRlbnQsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYUFsaWduQ29udGVudChub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25JdGVtcywgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXMobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldyYXAsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYVdyYXBUb1hhbWxXcmFwKG5vZGUubGF5b3V0V3JhcCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuR3JvdywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLmxheW91dEdyb3cudG9TdHJpbmcoKSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25TZWxmLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyhub2RlLmxheW91dEFsaWduKSB9LFxuICAgIF07XG4gICAgY29uc3QgZmxleExheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkZsZXhMYXlvdXQsIHByb3BlcnRpZXM6IGZsZXhMYXlvdXRQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xuICAgIHJldHVybiBmbGV4TGF5b3V0RWxlbWVudDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJzAnKSB7XG4gICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gVHJhbnNsYXRlSG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcbiAgICBdO1xuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkhvcml6b250YWxTdGFja0xheW91dCwgcHJvcGVydGllczogaG9yaXpvbnRhbFN0YWNrTGF5b3V0UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gaG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudDtcbn1cbmZ1bmN0aW9uIFRyYW5zbGF0ZVZlcnRpY2FsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgdmVydGljYWxTdGFja0xheW91dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcbiAgICBdO1xuICAgIGNvbnN0IHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5WZXJ0aWNhbFN0YWNrTGF5b3V0LCBwcm9wZXJ0aWVzOiB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gdmVydGl2YWxTdGFja0xheW91dEVsZW1lbnQ7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdSaWdodCAmJiBub2RlLnBhZGRpbmdMZWZ0ID09IG5vZGUucGFkZGluZ1RvcCAmJiBub2RlLnBhZGRpbmdMZWZ0ID09IG5vZGUucGFkZGluZ0JvdHRvbSkge1xuICAgICAgICByZXR1cm4gbm9kZS5wYWRkaW5nTGVmdC50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke25vZGUucGFkZGluZ0xlZnR9LCAke25vZGUucGFkZGluZ1RvcH0sICR7bm9kZS5wYWRkaW5nUmlnaHR9LCAke25vZGUucGFkZGluZ0JvdHRvbX0sYDtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYUFsaWduSXRlbXNUb1hhbWxBbGlnbkl0ZW1zKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIFwiTUFYXCI6XG4gICAgICAgICAgICByZXR1cm4gJ0VuZCc7XG4gICAgICAgIGNhc2UgXCJDRU5URVJcIjpcbiAgICAgICAgICAgIHJldHVybiAnQ2VudGVyJztcbiAgICAgICAgY2FzZSBcIk1JTlwiOlxuICAgICAgICAgICAgcmV0dXJuICdTdGFydCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ1N0cmV0Y2gnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hV3JhcFRvWGFtbFdyYXAodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ1dSQVAnOlxuICAgICAgICAgICAgcmV0dXJuICdXcmFwJztcbiAgICAgICAgY2FzZSAnTk9fV1JBUCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hQWxpZ25Db250ZW50KHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlICdTUEFDRV9CRVRXRUVOJzpcbiAgICAgICAgICAgIHJldHVybiAnU3BhY2VCZXR3ZWVuJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnU3RyZXRjaCc7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpIHtcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XG4gICAgICAgIGxldCB4YW1sU3RyaW5nID0gYC4ke0VsZW1lbnROYW1lLkJhY2tncm91bmR9YDtcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsbHMuZm9yRWFjaCgoZmlsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBmaWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQobm9kZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBlbGxpcHNlUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRmlsbCwgdmFsdWU6IG5vZGUuZmlsbHMudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VUaGlja25lc3MsIHZhbHVlOiBub2RlLnN0cm9rZVdlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXG4gICAgXTtcbiAgICBjb25zdCBlbGxpcHNlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWxsaXBzZSwgcHJvcGVydGllczogZWxsaXBzZVByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XG4gICAgcmV0dXJuIGVsbGlwc2VFbGVtZW50O1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpIHtcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XG4gICAgICAgIGxldCB4YW1sU3RyaW5nID0gYC4ke0VsZW1lbnROYW1lLkJhY2tncm91bmR9YDtcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xuICAgICAgICBpZiAoZmlsbHMgJiYgZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsbHMuZm9yRWFjaCgoZmlsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIFNvbGlkIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBmaWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlTGluZUVsZW1lbnQobm9kZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBsaW5lUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWDEsIHZhbHVlOiAnMCcgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTEsIHZhbHVlOiAnMCcgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWDIsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTIsIHZhbHVlOiBnZXRZZm9yWChub2RlKS50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZURhc2hBcnJheSwgdmFsdWU6IHRyYW5zbGF0ZURhc2gobm9kZSkgfSxcbiAgICAgICAgLy8gQWRkIG90aGVyIGxpbmUtcmVsYXRlZCBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxuICAgIF07XG4gICAgY29uc3QgbGluZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxpbmUsIHByb3BlcnRpZXM6IGxpbmVQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGxpbmVFbGVtZW50O1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlRGFzaChub2RlKSB7XG4gICAgcmV0dXJuIGAke25vZGUuZGFzaFBhdHRlcm5bMF19LCR7bm9kZS5kYXNoUGF0dGVyblsxXX1gO1xufVxuZnVuY3Rpb24gZ2V0WWZvclgobm9kZSkge1xuICAgIGxldCBsZW5ndGggPSBub2RlLndpZHRoO1xuICAgIGxldCByb3RhdGlvbiA9IG5vZGUucm90YXRpb247XG4gICAgLy8gQ29udmVydCB0aGUgcm90YXRpb24gYW5nbGUgZnJvbSBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAvLyBDb252ZXJ0IHRoZSByb3RhdGlvbiBhbmdsZSBmcm9tIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIGxldCB0aGV0YSA9IHJvdGF0aW9uICogKE1hdGguUEkgLyAxODApO1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgeS1jaGFuZ2UgdXNpbmcgc2luZSBvZiB0aGUgYW5nbGVcbiAgICBsZXQgaCA9IGxlbmd0aCAqIE1hdGguc2luKHRoZXRhKTtcbiAgICByZXR1cm4gaDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSB7XG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xuICAgICAgICBjb25zdCBmaWxscyA9IG5vZGUuZmlsbHM7XG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgIyR7c29saWRQYWludC5jb2xvci5yfSR7c29saWRQYWludC5jb2xvci5nfSR7c29saWRQYWludC5jb2xvci5ifWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVQb2x5Z29uRWxlbWVudChub2RlKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHBvbHlnb25Qcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5GaWxsLCB2YWx1ZTogbm9kZS5maWxscy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZVRoaWNrbmVzcywgdmFsdWU6IG5vZGUuc3Ryb2tlV2VpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcbiAgICBdO1xuICAgIGNvbnN0IGVsbGlwc2VFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5FbGxpcHNlLCBwcm9wZXJ0aWVzOiBwb2x5Z29uUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gZWxsaXBzZUVsZW1lbnQ7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkge1xuICAgIGlmICgnZmlsbHMnIGluIG5vZGUpIHtcbiAgICAgICAgbGV0IHhhbWxTdHJpbmcgPSBgLiR7RWxlbWVudE5hbWUuQmFja2dyb3VuZH1gO1xuICAgICAgICBjb25zdCBmaWxscyA9IG5vZGUuZmlsbHM7XG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWxscy5mb3JFYWNoKChmaWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29saWRQYWludCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgIyR7c29saWRQYWludC5jb2xvci5yfSR7c29saWRQYWludC5jb2xvci5nfSR7c29saWRQYWludC5jb2xvci5ifWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgcmVjdGFuZ2xlUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzWCwgdmFsdWU6IG5vZGUudG9wTGVmdFJhZGl1cy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlJhZGl1c1ksIHZhbHVlOiBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRmlsbCwgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH1cbiAgICBdO1xuICAgIGNvbnN0IHJlY3RhbmdsZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlJlY3RhbmdsZSwgcHJvcGVydGllczogcmVjdGFuZ2xlUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gcmVjdGFuZ2xlRWxlbWVudDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSB7XG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xuICAgICAgICBsZXQgeGFtbFN0cmluZyA9IGAuJHtFbGVtZW50TmFtZS5CYWNrZ3JvdW5kfWA7XG4gICAgICAgIGNvbnN0IGZpbGxzID0gbm9kZS5maWxscztcbiAgICAgICAgaWYgKGZpbGxzICYmIGZpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpbGxzLmZvckVhY2goKGZpbGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBTb2xpZCBQYWludFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb2xpZFBhaW50ID0gZmlsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi8uLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IHZlY3RvclByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNvdXJjZSwgdmFsdWU6IHRyYW5zbGF0ZVNvdXJjZShub2RlKSB9LFxuICAgIF07XG4gICAgY29uc3QgdmVjdG9yRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuSW1hZ2UsIHByb3BlcnRpZXM6IHZlY3RvclByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XG4gICAgcmV0dXJuIHZlY3RvckVsZW1lbnQ7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVTb3VyY2Uobm9kZSkge1xuICAgIHJldHVybiBgJHtub2RlLm5hbWUudG9Mb3dlckNhc2V9LnBuZ2A7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVUZXh0RWxlbWVudChub2RlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICBjb25zdCB0ZXh0UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ2hhcmFjdGVyU3BhY2luZywgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUxldHRlclNwYWNpbmcobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250QXR0cmlidXRlcywgdmFsdWU6IHRyYW5zbGF0ZUZvbnRXZWlnaHRUb0ZvbnRBdHRyaWJ1dGVzKG5vZGUuZm9udFdlaWdodCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF1dG9TY2FsaW5nRW5hYmxlZCwgdmFsdWU6IHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKG5vZGUudGV4dEF1dG9SZXNpemUpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRTaXplLCB2YWx1ZTogbm9kZS5mb250U2l6ZS50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxUZXh0QWxpZ25tZW50LCB2YWx1ZTogdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChub2RlLnRleHRBbGlnbkhvcml6b250YWwpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVCcmVha01vZGUsIHZhbHVlOiB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZShub2RlLnRleHRUcnVuY2F0aW9uKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lSGVpZ2h0LCB2YWx1ZTogKF9iID0gdHJhbnNsYXRlTGluZUhlaWdodChub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk1heExpbmVzLCB2YWx1ZTogKF9kID0gKF9jID0gbm9kZS5tYXhMaW5lcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0LCB2YWx1ZTogbm9kZS5jaGFyYWN0ZXJzIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHRDb2xvciwgdmFsdWU6IChfZSA9IGdldEhleENvbG9yRnJvbUZpbGwobm9kZSkpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0RGVjb3JhdGlvbnMsIHZhbHVlOiB0cmFuc2xhdGVUZXh0RGVjb3JhdGlvblRvWEFNTChub2RlLnRleHREZWNvcmF0aW9uKSB8fCAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dFRyYW5zZm9ybSwgdmFsdWU6IHRyYW5zbGF0ZVRleHRDYXNlVG9YQU1MKG5vZGUudGV4dENhc2UpIHx8ICdOb25lJyB9LFxuICAgIF07XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxhYmVsLCBwcm9wZXJ0aWVzOiB0ZXh0UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcbiAgICByZXR1cm4gdGV4dEVsZW1lbnQ7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVMaW5lSGVpZ2h0KG5vZGUpIHtcbiAgICBsZXQgbGggPSBub2RlLmxpbmVIZWlnaHQ7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBsaCkge1xuICAgICAgICByZXR1cm4gbGgudmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVMZXR0ZXJTcGFjaW5nKG5vZGUpIHtcbiAgICBsZXQgbHMgPSBub2RlLmxldHRlclNwYWNpbmcudmFsdWU7XG4gICAgaWYgKGxzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBscy50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEhleENvbG9yRnJvbUZpbGwodGV4dE5vZGUpIHtcbiAgICBpZiAoIXRleHROb2RlIHx8ICF0ZXh0Tm9kZS5maWxscyB8fCB0ZXh0Tm9kZS5maWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGZpbGwgPSB0ZXh0Tm9kZS5maWxsc1swXTsgLy8gV2UgYXNzdW1lIHRoZSBmaXJzdCBmaWxsIGlzIHRoZSBvbmUgd2Ugd2FudFxuICAgIGlmIChmaWxsID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgY29uc3Qgc29saWRGaWxsID0gZmlsbDtcbiAgICAgICAgcmV0dXJuIHJnYlRvSGV4KHNvbGlkRmlsbC5jb2xvcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZpbGwudHlwZS5zdGFydHNXaXRoKCdHUkFESUVOVCcpKSB7XG4gICAgICAgIC8vIEhhbmRsZSBncmFkaWVudCBmaWxscyAoaWYgbmVlZGVkKVxuICAgICAgICAvLyBZb3UgY2FuIGFkZCBsb2dpYyBoZXJlIHRvIGhhbmRsZSBncmFkaWVudCBmaWxsc1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcbiAgICBjb25zdCByID0gTWF0aC5yb3VuZChyZ2IuciAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgZyA9IE1hdGgucm91bmQocmdiLmcgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGIgPSBNYXRoLnJvdW5kKHJnYi5iICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBsZXQgY29sb3IgPSBgIyR7cn0ke2d9JHtifWA7XG4gICAgaWYgKGNvbG9yID09PSAnIzAwMDAwMCcpIHtcbiAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dENhc2VUb1hBTUwodGV4dENhc2UpIHtcbiAgICBzd2l0Y2ggKHRleHRDYXNlKSB7XG4gICAgICAgIGNhc2UgXCJVUFBFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiVXBwZXJjYXNlXCI7XG4gICAgICAgIGNhc2UgXCJMT1dFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiTG93ZXJjYXNlXCI7XG4gICAgICAgIGNhc2UgXCJUSVRMRVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiQ2FwaXRhbGl6ZVwiO1xuICAgICAgICAvLyBGaWdtYSBcIk9SSUdJTkFMXCIgY29ycmVzcG9uZHMgdG8gXCJOb25lXCIgaW4gWEFNTCwgd2hpY2ggbGVhdmVzIHRoZSB0ZXh0IGNhc2UgYXMgaXMuXG4gICAgICAgIGNhc2UgXCJPUklHSU5BTFwiOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiOyAvLyBEZWZhdWx0IHRvIG5vIHRyYW5zZm9ybWF0aW9uXG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dERlY29yYXRpb25Ub1hBTUwodGV4dERlY29yYXRpb24pIHtcbiAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJTVFJJS0VUSFJPVUdIXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJTdHJpa2V0aHJvdWdoXCI7XG4gICAgICAgIGNhc2UgXCJVTkRFUkxJTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlVuZGVybGluZVwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUcnVuY2F0aW9uVG9MaW5lQnJlYWtNb2RlKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcbiAgICAvL09CUyAhIERvIG5vdCBmdWxmaWxsIGFsbCBMaW5lQnJlYWtNb2RlcyBvZiBYYW1sLiBTZWUgZm9sbG93aW5nIGxpbmsgZm9yIG1vcmUgaW5mbyBhYm91dCBMaW5lQnJlYWtNb2RlOiBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2FwaS9taWNyb3NvZnQubWF1aS5saW5lYnJlYWttb2RlP3ZpZXc9bmV0LW1hdWktNy4wXG4gICAgc3dpdGNoIChmaWdtYVRleHRUcnVuY2F0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJFTkRJTkdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlRhaWxUcnVuY2F0aW9uXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIERlZmF1bHQgdG8gTm9XcmFwIGlmIHRoZSB2YWx1ZSBpcyBub3QgcmVjb2duaXplZFxuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcbiAgICBzd2l0Y2ggKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcbiAgICAgICAgY2FzZSBcIk5PTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhbHNlXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIHdoZW4gcmV0dXJuaW5nIG5vbmUgaXQgd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHhhbWwgdGV4dCwgc2luY2UgaXQgaXMgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICB9XG59XG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdHJhbnNsYXRlIEZpZ21hIGhvcml6b250YWwgdGV4dCBhbGlnbm1lbnQgdG8gWEFNTFxuZnVuY3Rpb24gdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChhbGlnbikge1xuICAgIC8vVE9ETzogZml4IHRoaXMgdG8gY29ycmVjdCB4YW1sXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJDZW50ZXJcIjtcbiAgICAgICAgY2FzZSBcIlJJR0hUXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJSaWdodFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZvbnRXZWlnaHRUb0ZvbnRBdHRyaWJ1dGVzKGZpZ21hRm9udFdlaWdodCkge1xuICAgIGlmIChmaWdtYUZvbnRXZWlnaHQgPiA0MDApIHtcbiAgICAgICAgcmV0dXJuICdCb2xkJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBGaWdtYU5vZGU7XG4oZnVuY3Rpb24gKEZpZ21hTm9kZSkge1xuICAgIEZpZ21hTm9kZVtcIkNPTVBPTkVOVFwiXSA9IFwiQ09NUE9ORU5UXCI7XG4gICAgRmlnbWFOb2RlW1wiQ09NUE9ORU5UX1NFVFwiXSA9IFwiQ09NUE9ORU5UX1NFVFwiO1xuICAgIEZpZ21hTm9kZVtcIkZSQU1FXCJdID0gXCJGUkFNRVwiO1xuICAgIEZpZ21hTm9kZVtcIklOU1RBTkNFXCJdID0gXCJJTlNUQU5DRVwiO1xuICAgIEZpZ21hTm9kZVtcIlJFQ1RBTkdMRVwiXSA9IFwiUkVDVEFOR0xFXCI7XG59KShGaWdtYU5vZGUgfHwgKEZpZ21hTm9kZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVCdXR0b25FbGVtZW50KG5vZGUpIHtcbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBub2RlKVxuICAgICAgICBbXTtcbiAgICBjb25zdCBidXR0b25Qcm9wZXJ0aWVzID0gW107XG4gICAgbGV0IGZyYW1lUHJvcGVydGllcyA9IFtcbiAgICAgICAgLy9jb21tb24gc3R1ZmZcbiAgICAgICAgLy9GcmFtZSBzdHVmZlxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Cb3JkZXJDb2xvciwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyV2lkdGgsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ2hhcmFjdGVyU3BhY2luZywgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29udGVudExheW91dCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICAvLyB7IG5hbWU6IFByb3BlcnR5TmFtZS5Db3JuZXJSYWRpdXMsICAgICAgdmFsdWU6IG5vZGUuIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdHRyaWJ1dGVzLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdXRvU2NhbGluZ0VuYWJsZWQsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIC8vdGV4dCBzdHVmZlxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250U2l6ZSwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lQnJlYWtNb2RlLCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHQsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHRDb2xvciwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgIF07XG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQnV0dG9uLCBwcm9wZXJ0aWVzOiBidXR0b25Qcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xuICAgIHJldHVybiBidXR0b25FbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQ29sbGVjdGlvbkVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IGxpc3R2aWV3UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IGxpc3R2aWV3RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQ29sbGVjdGlvblZpZXcsIHByb3BlcnRpZXM6IGxpc3R2aWV3UHJvcGVydGllcyB9O1xuICAgIHJldHVybiBsaXN0dmlld0VsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFZGl0b3JFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBlZGl0b3JQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgZWRpdG9yRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWRpdG9yLCBwcm9wZXJ0aWVzOiBlZGl0b3JQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGVkaXRvckVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFbnRyeUVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IGVudHJ5UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IGVudHJ5RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRW50cnksIHByb3BlcnRpZXM6IGVudHJ5UHJvcGVydGllcyB9O1xuICAgIHJldHVybiBlbnRyeUVsZW1lbnQ7XG59XG4iLCJleHBvcnQgY2xhc3MgQ3VzdG9tQ29udHJvbCB7XG4gICAgY29uc3RydWN0b3IoY29udHJvbE5hbWUsIGJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuZW5kVGFnID0gJy8+JztcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IGJpbmRpbmdzO1xuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gdGhpcy5Gb3JtYXRTdGFydFRhZygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb250cm9sTmFtZTtcbiAgICB9XG4gICAgZ2V0U3RhcnRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnO1xuICAgIH1cbiAgICBnZXRFbmRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcbiAgICB9XG4gICAgRm9ybWF0U3RhcnRUYWcoKSB7XG4gICAgICAgIGxldCBzZXRCaW5kaW5ncyA9ICcnO1xuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goYiA9PiBzZXRCaW5kaW5ncyArIGAke2IubmFtZX0gPSAke2IudmFsdWV9XFxuYCk7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGNvbnRyb2w6JHt0aGlzLm5hbWV9ICR7c2V0QmluZGluZ3N9YDtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGVudFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz4nO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnXFxuPC9Db250ZW50UGFnZT4nO1xuICAgICAgICB0aGlzLm5hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGdldFN0YXJ0VGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRhZyArIHRoaXMuc3RhcnRFbmRUYWc7XG4gICAgfVxuICAgIGdldEVuZFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGFnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZENvbnRyb2wocGFnZSkge1xuICAgIHBhZ2Uuc3RhcnRUYWcgPSBgJHtwYWdlLnN0YXJ0VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zOmNvbnRyb2xzPWNsci1uYW1lc3BhY2U6Q3VzdG9tQ29udHJvbHNcXG5gO1xufVxuZnVuY3Rpb24gRm9ybWF0UGFnZVN0YXJ0VGFnKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBgPENvbnRlbnRQYWdlIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9JHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeDpOYW1lPSR7Y2xhc3NOYW1lfVxcbmA7XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGVudFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz4nO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnXFxuPC9Db250ZW50Vmlldz4nO1xuICAgICAgICB0aGlzLm5hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGdldFN0YXJ0VGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRhZyArIHRoaXMuc3RhcnRFbmRUYWc7XG4gICAgfVxuICAgIGdldEVuZFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGFnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gYFxyXG4gICAgLy9DcmVhdGUgYSBmb2xkZXIgdW5kZXIgUmVzb3VyY2VzIGNhbGxlZCBcIkN1c3RvbUNvbnRyb2xzXCIgYW5kIG1ha2UgYSBuZXcgXCJDb250ZW50Vmlld1wiIGluIHRoZXJlIFxyXG4gICAgPENvbnRlbnRWaWV3IHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9Q3VzdG9tQ29udHJvbHMuJHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeDpOYW1lPSR7Y2xhc3NOYW1lfVxcbmA7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFBhcnNlRmlnbWEgfSBmcm9tIFwiLi9YYW1sUGFyc2VyXCI7XG4vLyBzcmMvcGx1Z2luLnRzXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfSk7XG5mdW5jdGlvbiBtYWtlRGlzcGxheU5vZGUoX25vZGUpIHtcbiAgICByZXR1cm4geyBuYW1lOiBfbm9kZS5uYW1lLCB1dHlwZTogJ05vbmUnLCBub2RlOiBfbm9kZSB9O1xufVxuZnVuY3Rpb24gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuKSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGNuLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3Qgbm4gPSB0cmF2ZXJzZShjKTtcbiAgICAgICAgbGlzdC5wdXNoKG5uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbn1cbmZ1bmN0aW9uIHRyYXZlcnNlKGNuKSB7XG4gICAgY29uc3QgZG4gPSBtYWtlRGlzcGxheU5vZGUoY24pO1xuICAgIGNvbnN0IG5uID0ge1xuICAgICAgICBwYXJlbnQ6IGRuLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBjbikge1xuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGNoaWxkcmVuLCB3ZSBtdXN0IGdvIHRocm91Z2ggdGhlbSBhbmQgbWFrZSB0aGVtIGludG8gbmVzdGVkIG5vZGVzXG4gICAgICAgIG5uLmNoaWxkcmVuID0gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5uO1xufVxuY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuaWYgKHNlbGVjdGlvbiAhPT0gdW5kZWZpbmVkIHx8IG51bGwpIHtcbiAgICBjb25zdCByb290Tm9kZSA9IG1ha2VEaXNwbGF5Tm9kZShzZWxlY3Rpb24pO1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgaWYgKCdjaGlsZHJlbicgaW4gc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGlvbi5jaGlsZHJlbi5mb3JFYWNoKGMgPT4gbGlzdC5wdXNoKGMpKTtcbiAgICB9XG4gICAgY29uc3Qgbm9kZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhcmVudDogcm9vdE5vZGUsXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGxpc3QpLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgbGV0IG5vZGVzMlBhcnNlID0gW107XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiAnaW5pdCcsIG5vZGVzIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHRoaXMgZnJvbSB0aGUgVUlcIiwgbWVzc2FnZSk7XG4gICAgICAgIG5vZGVzMlBhcnNlID0gdXBkYXRlRGlzcGxheU5vZGVVVHlwZShub2RlcywgbWVzc2FnZSk7XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlOb2RlVVR5cGUoc2VsZWN0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIEJhc2VOb2RlLmlkIHRvIHNlbGVjdGVkVmFsdWVcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVNYXAgPSB7fTtcbiAgICAgICAgICAgIG1lc3NhZ2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVNYXBbaXRlbS5ub2RlLnBhcmVudC5ub2RlLmlkXSA9IGl0ZW0uc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGFycmF5IHRvIGhvbGQgdGhlIHVwZGF0ZWQgc2VsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkU2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICAvLyBSZWN1cnNpdmUgZnVuY3Rpb24gdG8gdXBkYXRlIG5vZGVzXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbihub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVNYXBbbm9kZS5wYXJlbnQubm9kZS5pZF07XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSB3aXRoIHVwZGF0ZWQgdXR5cGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFBhcmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbm9kZS5wYXJlbnQpLCB7IHV0eXBlOiBzZWxlY3RlZFZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IHVwZGF0ZWRQYXJlbnQsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHVwZGF0ZUNoaWxkcmVuKGNoaWxkKSkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIHVwZGF0ZSBpcyBuZWVkZWQsIHJldHVybiB0aGUgb3JpZ2luYWwgbm9kZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IG5vZGUucGFyZW50LCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB1cGRhdGVDaGlsZHJlbihjaGlsZCkpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5kIHVwZGF0ZSBub2RlcyBiYXNlZCBvbiB0aGUgbWVzc2FnZVxuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKG5lc3RlZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTm9kZSA9IHVwZGF0ZUNoaWxkcmVuKG5lc3RlZE5vZGUpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb24ucHVzaCh1cGRhdGVkTm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkU2VsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gUGFyc2VGaWdtYShub2RlczJQYXJzZSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJmaWxlSW5mb1wiLCB0ZXh0Q29udGVudCB9KTtcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9