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
    let rootLayout = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(rootnode.parent.node);
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
            // Create frame element -> becaomes a xaml layout element 
            let frameNode = node;
            let frameElement = (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(frameNode);
            frameElement.properties.push(TranslateFillsToFigma(node, false));
            let nestedFrame = { parent: frameElement, children: [] };
            nn.children.forEach(n => nestedFrame.children.push(checkNodeType(n)));
            let frameStroke = translateStroke(frameNode);
            if (frameStroke !== null) {
                nestedFrame.children.push({ parent: frameStroke, children: [] });
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
            }
        });
    }
    return borderElement;
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
        { name: _Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName.CornerRadius, value: translateCornerRadius(node) }
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
function translateCornerRadius(node) {
    if ('cornerRadius' in node && 'topLeftRadius' in node) {
        if (node.cornerRadius !== figma.mixed) {
            return `${node.cornerRadius}`;
        }
        else {
            return `${node.topLeftRadius} ${node.topRightRadius} ${node.bottomLeftRadius} ${node.bottomRightRadius}`;
        }
    }
    return 'None';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnBCSztBQUNGO0FBQ3lFO0FBQ3JCO0FBQ2Y7QUFDaEI7QUFDWTtBQUN5QjtBQUNmO0FBQ3RCO0FBQzBCO0FBQ29FO0FBQ25FO0FBQ0Y7QUFDRTtBQUNBO0FBQ0k7QUFDUTtBQUM3RjtBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzRUFBVztBQUNyQyxxQkFBcUIsTUFBTSxpREFBVztBQUN0QyxxQkFBcUIsdUdBQStCO0FBQ3BELGlEQUFpRCx5QkFBeUIsV0FBVywyQkFBMkI7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQix5QkFBeUIsV0FBVyx1QkFBdUI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0ZBQWE7QUFDL0M7QUFDQTtBQUNBLHVDQUF1QyxzRUFBVztBQUNsRCx3REFBd0QsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQSxvQ0FBb0MsaURBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVHQUErQjtBQUM5RDtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbUNBQW1DO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFNLGlEQUFXO0FBQ2xELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwRkFBb0I7QUFDbEQsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx5R0FBdUI7QUFDeEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnR0FBb0I7QUFDbEQsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrR0FBeUI7QUFDNUQsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixvQ0FBb0Msa0ZBQWE7QUFDakQsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNFQUFXO0FBQzdDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxpREFBVztBQUM3QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQ7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywwRkFBb0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFHQUFzQjtBQUNsRSxpREFBaUQsa0hBQTJCO0FBQzVFO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxNQUFNLG1EQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLE1BQU0sbURBQVksMEJBQTBCLDZGQUFxQixzREFBc0Q7QUFDckosOEJBQThCLE1BQU0sbURBQVksMkJBQTJCLHVHQUF1QixzREFBc0Q7QUFDeEosOEJBQThCLE1BQU0sbURBQVkscUJBQXFCLHFHQUFxQixhQUFhO0FBQ3ZHLDhCQUE4QixNQUFNLG1EQUFZLHNCQUFzQixpR0FBaUIsYUFBYTtBQUNwRztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0dBQXNCO0FBQ3REO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU0sbURBQVk7QUFDbEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvR0FBcUI7QUFDcEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU0sbURBQVk7QUFDbEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwR0FBd0I7QUFDMUQsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxpREFBVztBQUM3QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFZLFlBQVksSUFBSSxXQUFXO0FBQ2pFO0FBQ0EsZUFBZSxpREFBVyxnQkFBZ0IsRUFBRSxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFZLFlBQVksSUFBSSxXQUFXO0FBQ2pFO0FBQ0EsZUFBZSxpREFBVyxnQkFBZ0IsRUFBRSxlQUFlO0FBQzNEO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVcsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQ25HO0FBQ0EsaUNBQWlDLE1BQU0sbURBQVk7QUFDbkQ7QUFDQSw2QkFBNkIsTUFBTSxtREFBWTtBQUMvQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYSxNQUFNLG1EQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNLGlEQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU0sbURBQVksb0JBQW9CLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtBQUNoRztBQUNBLHFDQUFxQyxNQUFNLG1EQUFZLDRCQUE0QixrQkFBa0I7QUFDckc7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVIwQztBQUNuQztBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksMkNBQTJDO0FBQ3ZFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BILFVBQVUsTUFBTSxtREFBWSxzREFBc0Q7QUFDbEYsVUFBVSxNQUFNLG1EQUFZLHNHQUFzRztBQUNsSSxVQUFVLE1BQU0sbURBQVksb0dBQW9HO0FBQ2hJLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUI7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFeUM7QUFDRTtBQUN5QjtBQUM3RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLGdHQUFnRztBQUM1SCxVQUFVLE1BQU0sbURBQVksMkVBQTJFO0FBQ3ZHLFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEgsVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksMEZBQTBGO0FBQ3RILFVBQVUsTUFBTSxtREFBWSw2REFBNkQ7QUFDekYsVUFBVSxNQUFNLG1EQUFZLHVFQUF1RTtBQUNuRyxVQUFVLE1BQU0sbURBQVksK0VBQStFO0FBQzNHO0FBQ0EsZ0NBQWdDLE1BQU0saURBQVcscURBQXFELGdGQUF5QjtBQUMvSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLGdHQUFnRztBQUM1SCxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFLFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEg7QUFDQSwyQ0FBMkMsTUFBTSxpREFBVywyRUFBMkUsZ0ZBQXlCO0FBQ2hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksZ0dBQWdHO0FBQzVILFVBQVUsTUFBTSxtREFBWSw4Q0FBOEM7QUFDMUUsVUFBVSxNQUFNLG1EQUFZLHdGQUF3RjtBQUNwSDtBQUNBLHlDQUF5QyxNQUFNLGlEQUFXLHVFQUF1RSxnRkFBeUI7QUFDMUo7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUIsSUFBSSxnQkFBZ0IsSUFBSSxrQkFBa0IsSUFBSSxtQkFBbUI7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsNkJBQTZCLGlEQUFXLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUM1RjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUc0QztBQUNFO0FBQ3lCO0FBQ2hFO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSwwRkFBMEY7QUFDdEgsVUFBVSxNQUFNLG1EQUFZLHVEQUF1RDtBQUNuRixVQUFVLE1BQU0sbURBQVksNEZBQTRGO0FBQ3hIO0FBQ0EsNkJBQTZCLE1BQU0saURBQVcsK0NBQStDLGdGQUF5QjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBVyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDNUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUI0QztBQUNFO0FBQ3ZDO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSxpQkFBaUI7QUFDN0MsVUFBVSxNQUFNLG1EQUFZLGlCQUFpQjtBQUM3QyxVQUFVLE1BQU0sbURBQVksbUNBQW1DO0FBQy9ELFVBQVUsTUFBTSxtREFBWSx1Q0FBdUM7QUFDbkUsVUFBVSxNQUFNLG1EQUFZLDRGQUE0RjtBQUN4SCxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxpREFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQixHQUFHLG9CQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUI7QUFDNUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDNEM7QUFDRTtBQUN5QjtBQUNoRTtBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksa0VBQWtFO0FBQzlGLFVBQVUsTUFBTSxtREFBWSxzRUFBc0U7QUFDbEcsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsK0JBQStCLE1BQU0saURBQVcsbURBQW1ELGdGQUF5QjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQVcsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0FBQzVGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzRDO0FBQ0U7QUFDeUI7QUFDaEU7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSx1Q0FBdUM7QUFDbkU7QUFDQSw0QkFBNEIsTUFBTSxpREFBVyw0Q0FBNEMsZ0ZBQXlCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J5QztBQUNFO0FBQ3lCO0FBQzdEO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSx1R0FBdUc7QUFDbkksVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksc0dBQXNHO0FBQ2xJLFVBQVUsTUFBTSxtREFBWSw0Q0FBNEM7QUFDeEUsVUFBVSxNQUFNLG1EQUFZLHlGQUF5RjtBQUNySCxVQUFVLE1BQU0sbURBQVksb0ZBQW9GO0FBQ2hILFVBQVUsTUFBTSxtREFBWSw4RkFBOEY7QUFDMUgsVUFBVSxNQUFNLG1EQUFZLDBJQUEwSTtBQUN0SyxVQUFVLE1BQU0sbURBQVksK0JBQStCO0FBQzNELFVBQVUsTUFBTSxtREFBWSw2RkFBNkY7QUFDekgsVUFBVSxNQUFNLG1EQUFZLHVGQUF1RjtBQUNuSCxVQUFVLE1BQU0sbURBQVkseUVBQXlFO0FBQ3JHO0FBQ0EsMEJBQTBCLE1BQU0saURBQVcsMENBQTBDLGdGQUF5QjtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUh5QztBQUNFO0FBQ2M7QUFDbEQ7QUFDUCx3QkFBd0Isc0VBQXNCO0FBQzlDO0FBQ0EsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsK0JBQStCLE1BQU0saURBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3QkFBd0I7QUFDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDO0FBQ0U7QUFDeUI7QUFDOEU7QUFDaUY7QUFDNU47QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSwwQkFBMEIsNkZBQXFCLGlEQUFpRDtBQUM1SCxVQUFVLE1BQU0sbURBQVksbUdBQW1HO0FBQy9ILFVBQVUsTUFBTSxtREFBWSxrREFBa0Q7QUFDOUUsVUFBVSxNQUFNLG1EQUFZLCtDQUErQztBQUMzRSxVQUFVLE1BQU0sbURBQVksaUJBQWlCLG1HQUEyQixDQUFDLDBHQUFrQyxTQUFTO0FBQ3BIO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTSxpREFBVyw2Q0FBNkMsZ0ZBQXlCO0FBQzdHO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUM1RjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksZ0NBQWdDLDRGQUFzQixpREFBaUQ7QUFDbkksVUFBVSxNQUFNLG1EQUFZLDRDQUE0QztBQUN4RSxVQUFVLE1BQU0sbURBQVksK0JBQStCO0FBQzNELFVBQVUsTUFBTSxtREFBWSx5QkFBeUIseUZBQW1CLGlEQUFpRDtBQUN6SCxVQUFVLE1BQU0sbURBQVksd0JBQXdCLHlHQUFtQyxtQkFBbUI7QUFDMUcsVUFBVSxNQUFNLG1EQUFZLGdDQUFnQyxxSEFBK0MsdUJBQXVCO0FBQ2xJLFVBQVUsTUFBTSxtREFBWSx1QkFBdUIsNEdBQXNDLHVCQUF1QjtBQUNoSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFeUM7QUFDRTtBQUN5QjtBQUM3RDtBQUNQO0FBQ0EsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsOEJBQThCLE1BQU0saURBQVcsaURBQWlELGdGQUF5QjtBQUN6SDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUMyQjtBQUM3RDtBQUNQO0FBQ0EsNEJBQTRCLE1BQU0saURBQVcsNkNBQTZDLGdGQUF5QjtBQUNuSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUMyQjtBQUM3RDtBQUNQO0FBQ0EsMkJBQTJCLE1BQU0saURBQVcsMkNBQTJDLGdGQUF5QjtBQUNoSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDRTtBQUN5QjtBQUM3RDtBQUNQO0FBQ0EsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsNEJBQTRCLE1BQU0saURBQVcsNkNBQTZDLGdGQUF5QjtBQUNuSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeUM7QUFDRTtBQUN5QjtBQUM3RDtBQUNQO0FBQ0EsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsNEJBQTRCLE1BQU0saURBQVcsNkNBQTZDLGdGQUF5QjtBQUNuSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVHNEO0FBQy9DO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQixrRUFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFFBQVEsSUFBSSxRQUFRO0FBQ3hFO0FBQ0EsbUJBQW1CLFdBQVcsRUFBRSxZQUFZO0FBQzVDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnNEO0FBQy9DO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtFQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw2QkFBNkIsVUFBVTtBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCc0Q7QUFDL0M7QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0VBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLDZCQUE2QixVQUFVO0FBQ3ZDOzs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDMUM7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLGtCQUFrQixzQkFBc0I7QUFDaEgsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0Qix1REFBVTtBQUN0QywrQkFBK0IsK0JBQStCO0FBQzlEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvRWxlbWVudC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvUHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL1hhbWxQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2NvbW1vblByb3BlcnR5UGFyc2VyLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL2ZyYW1lLTItbGF5b3V0LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9lbGxpcHNlLTItZWxsaXBzZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvbGluZS0yLWxpbmUudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3JlY3RhbmdsZS0yLXJlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvdmVjdG9yLTItaWNvbi50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi1pbWFnZWJ1dHRvbi50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2J1dHRvbi0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9jaGVja0JveC0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lZGl0b3ItMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZW50cnktMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vc2xpZGVyLTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL3N3aXRjaC0yLXhhbWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLWN1c3RvbS1jb250cm9sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC1wYWdlLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC12aWV3LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRWxlbWVudE5hbWU7XHJcbihmdW5jdGlvbiAoRWxlbWVudE5hbWUpIHtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wibm9uZVwiXSA9IDBdID0gXCJub25lXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkltYWdlQnV0dG9uXCJdID0gMV0gPSBcIkltYWdlQnV0dG9uXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbGxlY3Rpb25WaWV3XCJdID0gMl0gPSBcIkNvbGxlY3Rpb25WaWV3XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkJhY2tncm91bmRcIl0gPSAzXSA9IFwiQmFja2dyb3VuZFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaW5lYXJHcmFkaWVudEJydXNoXCJdID0gNF0gPSBcIkxpbmVhckdyYWRpZW50QnJ1c2hcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUmFkaWFsR3JhZGllbnRCcnVzaFwiXSA9IDVdID0gXCJSYWRpYWxHcmFkaWVudEJydXNoXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkdyYWRpZW50U3RvcFwiXSA9IDZdID0gXCJHcmFkaWVudFN0b3BcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2hhZG93XCJdID0gN10gPSBcIlNoYWRvd1wiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMYWJlbFwiXSA9IDhdID0gXCJMYWJlbFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJCdXR0b25cIl0gPSA5XSA9IFwiQnV0dG9uXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVkaXRvclwiXSA9IDEwXSA9IFwiRWRpdG9yXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVudHJ5XCJdID0gMTFdID0gXCJFbnRyeVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJTdGFja0ZyYW1lXCJdID0gMTJdID0gXCJTdGFja0ZyYW1lXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlRleHRCbG9ja1wiXSA9IDEzXSA9IFwiVGV4dEJsb2NrXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlRleHRCb3hcIl0gPSAxNF0gPSBcIlRleHRCb3hcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQ29tYm9Cb3hcIl0gPSAxNV0gPSBcIkNvbWJvQm94XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlJhZGlvQnV0dG9uXCJdID0gMTZdID0gXCJSYWRpb0J1dHRvblwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDaGVja0JveFwiXSA9IDE3XSA9IFwiQ2hlY2tCb3hcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSW1hZ2VcIl0gPSAxOF0gPSBcIkltYWdlXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkJvcmRlclwiXSA9IDE5XSA9IFwiQm9yZGVyXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNjcm9sbFZpZXdcIl0gPSAyMF0gPSBcIlNjcm9sbFZpZXdcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUHJvZ3Jlc3NCYXJcIl0gPSAyMV0gPSBcIlByb2dyZXNzQmFyXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNsaWRlclwiXSA9IDIyXSA9IFwiU2xpZGVyXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlN3aXRjaFwiXSA9IDIzXSA9IFwiU3dpdGNoXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlRhYkNvbnRyb2xcIl0gPSAyNF0gPSBcIlRhYkNvbnRyb2xcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGFiSXRlbVwiXSA9IDI1XSA9IFwiVGFiSXRlbVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJNZW51XCJdID0gMjZdID0gXCJNZW51XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIk1lbnVJdGVtXCJdID0gMjddID0gXCJNZW51SXRlbVwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDb250ZXh0TWVudVwiXSA9IDI4XSA9IFwiQ29udGV4dE1lbnVcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9wdXBcIl0gPSAyOV0gPSBcIlBvcHVwXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlJlY3RhbmdsZVwiXSA9IDMwXSA9IFwiUmVjdGFuZ2xlXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkVsbGlwc2VcIl0gPSAzMV0gPSBcIkVsbGlwc2VcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9seWdvblwiXSA9IDMyXSA9IFwiUG9seWdvblwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaW5lXCJdID0gMzNdID0gXCJMaW5lXCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkhvcml6b250YWxTdGFja0xheW91dFwiXSA9IDM0XSA9IFwiSG9yaXpvbnRhbFN0YWNrTGF5b3V0XCI7XHJcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIl0gPSAzNV0gPSBcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIjtcclxuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRmxleExheW91dFwiXSA9IDM2XSA9IFwiRmxleExheW91dFwiO1xyXG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJGcmFtZVwiXSA9IDM3XSA9IFwiRnJhbWVcIjtcclxufSkoRWxlbWVudE5hbWUgfHwgKEVsZW1lbnROYW1lID0ge30pKTtcclxuIiwiZXhwb3J0IHZhciBQcm9wZXJ0eU5hbWU7XHJcbihmdW5jdGlvbiAoUHJvcGVydHlOYW1lKSB7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlRGFzaEFycmF5XCJdID0gMF0gPSBcIlN0cm9rZURhc2hBcnJheVwiO1xyXG4gICAgLy9yZWN0YW5nbGVcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSYWRpdXNYXCJdID0gMV0gPSBcIlJhZGl1c1hcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSYWRpdXNZXCJdID0gMl0gPSBcIlJhZGl1c1lcIjtcclxuICAgIC8vIHZlY3Rvcj9cclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDZW50ZXJcIl0gPSAzXSA9IFwiQ2VudGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRW5kUG9pbnRcIl0gPSA0XSA9IFwiRW5kUG9pbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2xvclwiXSA9IDVdID0gXCJDb2xvclwiO1xyXG4gICAgLy9TaGFkb3dcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCcnVzaFwiXSA9IDZdID0gXCJCcnVzaFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9mZlNldFwiXSA9IDddID0gXCJPZmZTZXRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSYWRpdXNcIl0gPSA4XSA9IFwiUmFkaXVzXCI7XHJcbiAgICAvL0NvbW1vblxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsT3B0aW9uc1wiXSA9IDldID0gXCJWZXJ0aWNhbE9wdGlvbnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsT3B0aW9uc1wiXSA9IDEwXSA9IFwiSG9yaXpvbnRhbE9wdGlvbnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCYWNrZ3JvdW5kXCJdID0gMTFdID0gXCJCYWNrZ3JvdW5kXCI7XHJcbiAgICAvL01hcmdpbiBpcyBub3QgcG9zc2libGUgdG8gaGF2ZSBvbiBhIGZpZ21hIG5vZGVcclxuICAgIC8vQnV0dG9uXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyV2lkdGhcIl0gPSAxMl0gPSBcIkJvcmRlcldpZHRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudExheW91dFwiXSA9IDEzXSA9IFwiQ29udGVudExheW91dFwiO1xyXG4gICAgLy9MYWJlbFxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNoYXJhY3RlclNwYWNpbmdcIl0gPSAxNF0gPSBcIkNoYXJhY3RlclNwYWNpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXR0cmlidXRlc1wiXSA9IDE1XSA9IFwiRm9udEF0dHJpYnV0ZXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCJdID0gMTZdID0gXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEZhbWlseVwiXSA9IDE3XSA9IFwiRm9udEZhbWlseVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRTaXplXCJdID0gMThdID0gXCJGb250U2l6ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcm1hdHRlZFRleHRcIl0gPSAxOV0gPSBcIkZvcm1hdHRlZFRleHRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsVGV4dEFsaWdubWVudFwiXSA9IDIwXSA9IFwiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMaW5lQnJlYWtNb2RlXCJdID0gMjFdID0gXCJMaW5lQnJlYWtNb2RlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGluZUhlaWdodFwiXSA9IDIyXSA9IFwiTGluZUhlaWdodFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heExpbmVzXCJdID0gMjNdID0gXCJNYXhMaW5lc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBhZGRpbmdcIl0gPSAyNF0gPSBcIlBhZGRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0XCJdID0gMjVdID0gXCJUZXh0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dENvbG9yXCJdID0gMjZdID0gXCJUZXh0Q29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0RGVjb3JhdGlvbnNcIl0gPSAyN10gPSBcIlRleHREZWNvcmF0aW9uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRUcmFuc2Zvcm1cIl0gPSAyOF0gPSBcIlRleHRUcmFuc2Zvcm1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0VHlwZVwiXSA9IDI5XSA9IFwiVGV4dFR5cGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbFRleHRBbGlnbm1lbnRcIl0gPSAzMF0gPSBcIlZlcnRpY2FsVGV4dEFsaWdubWVudFwiO1xyXG4gICAgLy9GcmFtZVxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNwYWNpbmdcIl0gPSAzMV0gPSBcIlNwYWNpbmdcIjtcclxuICAgIC8vRmxleExheW91dFxyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduQ29udGVudFwiXSA9IDMyXSA9IFwiQWxpZ25Db250ZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWxpZ25JdGVtc1wiXSA9IDMzXSA9IFwiQWxpZ25JdGVtc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkRpcmVjdGlvblwiXSA9IDM0XSA9IFwiRGlyZWN0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSnVzdGlmeUNvbnRlbnRcIl0gPSAzNV0gPSBcIkp1c3RpZnlDb250ZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUG9zaXRpb25cIl0gPSAzNl0gPSBcIlBvc2l0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiV3JhcFwiXSA9IDM3XSA9IFwiV3JhcFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduU2VsZlwiXSA9IDM4XSA9IFwiQWxpZ25TZWxmXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmFzaXNcIl0gPSAzOV0gPSBcIkJhc2lzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3Jvd1wiXSA9IDQwXSA9IFwiR3Jvd1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9yZGVyXCJdID0gNDFdID0gXCJPcmRlclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNocmlua1wiXSA9IDQyXSA9IFwiU2hyaW5rXCI7XHJcbiAgICAvL1BvbHlnb25cclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQb2ludHNcIl0gPSA0M10gPSBcIlBvaW50c1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZpbGxcIl0gPSA0NF0gPSBcIkZpbGxcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGaWxsUnVsZVwiXSA9IDQ1XSA9IFwiRmlsbFJ1bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VcIl0gPSA0Nl0gPSBcIlN0cm9rZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0cm9rZVRoaWNrbmVzc1wiXSA9IDQ3XSA9IFwiU3Ryb2tlVGhpY2tuZXNzXCI7XHJcbiAgICAvL0xpbmVcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJYMVwiXSA9IDQ4XSA9IFwiWDFcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJYMlwiXSA9IDQ5XSA9IFwiWDJcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMVwiXSA9IDUwXSA9IFwiWTFcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMlwiXSA9IDUxXSA9IFwiWTJcIjtcclxuICAgIC8vQm9yZGVyXHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlU2hhcGVcIl0gPSA1Ml0gPSBcIlN0cm9rZVNoYXBlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF0dHJpYnV0ZVwiXSA9IDUzXSA9IFwiRm9udEF0dHJpYnV0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIm5vbmVcIl0gPSA1NF0gPSBcIm5vbmVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJ4Ok5hbWVcIl0gPSA1NV0gPSBcIng6TmFtZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcmVncm91bmRDb2xvclwiXSA9IDU2XSA9IFwiRm9yZWdyb3VuZENvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyQ29sb3JcIl0gPSA1N10gPSBcIkJvcmRlckNvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyVGhpY2tuZXNzXCJdID0gNThdID0gXCJCb3JkZXJUaGlja25lc3NcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWaXNpYmlsaXR5XCJdID0gNTldID0gXCJWaXNpYmlsaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkXCJdID0gNjBdID0gXCJJc0VuYWJsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlYWRPbmx5XCJdID0gNjFdID0gXCJJc1JlYWRPbmx5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFdlaWdodFwiXSA9IDYyXSA9IFwiRm9udFdlaWdodFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRTdHlsZVwiXSA9IDYzXSA9IFwiRm9udFN0eWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dEFsaWdubWVudFwiXSA9IDY0XSA9IFwiVGV4dEFsaWdubWVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkltYWdlU291cmNlXCJdID0gNjVdID0gXCJJbWFnZVNvdXJjZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNvdXJjZVwiXSA9IDY2XSA9IFwiU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbEFsaWdubWVudFwiXSA9IDY3XSA9IFwiSG9yaXpvbnRhbEFsaWdubWVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsQWxpZ25tZW50XCJdID0gNjhdID0gXCJWZXJ0aWNhbEFsaWdubWVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9wYWNpdHlcIl0gPSA2OV0gPSBcIk9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb21tYW5kXCJdID0gNzBdID0gXCJDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29tbWFuZFBhcmFtZXRlclwiXSA9IDcxXSA9IFwiQ29tbWFuZFBhcmFtZXRlclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQ2hlY2tlZFwiXSA9IDcyXSA9IFwiSXNDaGVja2VkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFwiXSA9IDczXSA9IFwiQ29udGVudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclwiXSA9IDc0XSA9IFwiSGVhZGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJUZXh0XCJdID0gNzVdID0gXCJQbGFjZWhvbGRlclRleHRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclRleHRDb2xvclwiXSA9IDc2XSA9IFwiUGxhY2Vob2xkZXJUZXh0Q29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVcIl0gPSA3N10gPSBcIklzVmlzaWJsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRm9jdXNlZFwiXSA9IDc4XSA9IFwiSXNGb2N1c2VkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNTZWxlY3RlZFwiXSA9IDc5XSA9IFwiSXNTZWxlY3RlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1zU291cmNlXCJdID0gODBdID0gXCJJdGVtc1NvdXJjZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UZW1wbGF0ZVwiXSA9IDgxXSA9IFwiSXRlbVRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJcIl0gPSA4Ml0gPSBcIlBsYWNlaG9sZGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJbmRleFwiXSA9IDgzXSA9IFwiU2VsZWN0ZWRJbmRleFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1cIl0gPSA4NF0gPSBcIk1pbmltdW1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhpbXVtXCJdID0gODVdID0gXCJNYXhpbXVtXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmFsdWVcIl0gPSA4Nl0gPSBcIlZhbHVlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNUb2dnbGVkXCJdID0gODddID0gXCJJc1RvZ2dsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb3JuZXJSYWRpdXNcIl0gPSA4OF0gPSBcIkNvcm5lclJhZGl1c1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUGFzc3dvcmRcIl0gPSA4OV0gPSBcIklzUGFzc3dvcmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCJdID0gOTBdID0gXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNcIl0gPSA5MV0gPSBcIkl0ZW1zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNPcGVuXCJdID0gOTJdID0gXCJJc09wZW5cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VkaXRhYmxlXCJdID0gOTNdID0gXCJJc0VkaXRhYmxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRGlzcGxheU1lbWJlclBhdGhcIl0gPSA5NF0gPSBcIkRpc3BsYXlNZW1iZXJQYXRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRWYWx1ZVwiXSA9IDk1XSA9IFwiU2VsZWN0ZWRWYWx1ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGVkVmFsdWVQYXRoXCJdID0gOTZdID0gXCJTZWxlY3RlZFZhbHVlUGF0aFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclRlbXBsYXRlXCJdID0gOTddID0gXCJIZWFkZXJUZW1wbGF0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvb3RlclRlbXBsYXRlXCJdID0gOThdID0gXCJGb290ZXJUZW1wbGF0ZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkljb25cIl0gPSA5OV0gPSBcIkljb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJY29uU291cmNlXCJdID0gMTAwXSA9IFwiSWNvblNvdXJjZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwTmFtZVwiXSA9IDEwMV0gPSBcIkdyb3VwTmFtZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNhblVzZXJTb3J0XCJdID0gMTAyXSA9IFwiQ2FuVXNlclNvcnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyRmlsdGVyXCJdID0gMTAzXSA9IFwiQ2FuVXNlckZpbHRlclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNcIl0gPSAxMDRdID0gXCJDb2x1bW5zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93c1wiXSA9IDEwNV0gPSBcIlJvd3NcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5EZWZpbml0aW9uc1wiXSA9IDEwNl0gPSBcIkNvbHVtbkRlZmluaXRpb25zXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93RGVmaW5pdGlvbnNcIl0gPSAxMDddID0gXCJSb3dEZWZpbml0aW9uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNlbGxQYWRkaW5nXCJdID0gMTA4XSA9IFwiQ2VsbFBhZGRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dTcGFuXCJdID0gMTA5XSA9IFwiUm93U3BhblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtblNwYW5cIl0gPSAxMTBdID0gXCJDb2x1bW5TcGFuXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNIZWFkZXJWaXNpYmxlXCJdID0gMTExXSA9IFwiSXNIZWFkZXJWaXNpYmxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNTb3J0YWJsZVwiXSA9IDExMl0gPSBcIklzU29ydGFibGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0RGlyZWN0aW9uXCJdID0gMTEzXSA9IFwiU29ydERpcmVjdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwSGVhZGVyVGVtcGxhdGVcIl0gPSAxMTRdID0gXCJHcm91cEhlYWRlclRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBGb290ZXJUZW1wbGF0ZVwiXSA9IDExNV0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cFN0eWxlXCJdID0gMTE2XSA9IFwiR3JvdXBTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRXhwYW5kZWRcIl0gPSAxMTddID0gXCJJc0V4cGFuZGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNQYW5lbFwiXSA9IDExOF0gPSBcIkl0ZW1zUGFuZWxcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGluZ1Jvd0NvbG9yXCJdID0gMTE5XSA9IFwiQWx0ZXJuYXRpbmdSb3dDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Db250YWluZXJTdHlsZVwiXSA9IDEyMF0gPSBcIkl0ZW1Db250YWluZXJTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Db250YWluZXJTdHlsZVNlbGVjdG9yXCJdID0gMTIxXSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEyMl0gPSBcIkl0ZW1UZW1wbGF0ZVNlbGVjdG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBIZWFkZXJTdHlsZVwiXSA9IDEyM10gPSBcIkdyb3VwSGVhZGVyU3R5bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclN0eWxlXCJdID0gMTI0XSA9IFwiR3JvdXBGb290ZXJTdHlsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEyNV0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbkhlYWRlclN0eWxlXCJdID0gMTI2XSA9IFwiQ29sdW1uSGVhZGVyU3R5bGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTI3XSA9IFwiQ29sdW1uSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZyb3plbkNvbHVtbkNvdW50XCJdID0gMTI4XSA9IFwiRnJvemVuQ29sdW1uQ291bnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBdXRvR2VuZXJhdGVDb2x1bW5zXCJdID0gMTI5XSA9IFwiQXV0b0dlbmVyYXRlQ29sdW1uc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNTb3VyY2VcIl0gPSAxMzBdID0gXCJDb2x1bW5zU291cmNlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1dpZHRoXCJdID0gMTMxXSA9IFwiQ29sdW1uc1dpZHRoXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU29ydE1lbWJlclBhdGhcIl0gPSAxMzJdID0gXCJTb3J0TWVtYmVyUGF0aFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclRlbXBsYXRlXCJdID0gMTMzXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJTdHlsZVwiXSA9IDEzNF0gPSBcIlJvd0hlYWRlclN0eWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEzNV0gPSBcIlJvd0hlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGlvbkNvdW50XCJdID0gMTM2XSA9IFwiQWx0ZXJuYXRpb25Db3VudFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQWx0ZXJuYXRpbmdSb3dDb2xvckVuYWJsZWRcIl0gPSAxMzddID0gXCJJc0FsdGVybmF0aW5nUm93Q29sb3JFbmFibGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNJdGVtQ2xpY2tFbmFibGVkXCJdID0gMTM4XSA9IFwiSXNJdGVtQ2xpY2tFbmFibGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMzldID0gXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDE0MF0gPSBcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGlvbk1vZGVcIl0gPSAxNDFdID0gXCJTZWxlY3Rpb25Nb2RlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtc1wiXSA9IDE0Ml0gPSBcIlNlbGVjdGVkSXRlbXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEl0ZW1cIl0gPSAxNDNdID0gXCJTZWxlY3RlZEl0ZW1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtQ2xpY2tcIl0gPSAxNDRdID0gXCJJdGVtQ2xpY2tcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1N0aWNreVwiXSA9IDE0NV0gPSBcIklzU3RpY2t5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoRW5hYmxlZFwiXSA9IDE0Nl0gPSBcIklzUHVsbFRvUmVmcmVzaEVuYWJsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSZWZyZXNoQ29tbWFuZFwiXSA9IDE0N10gPSBcIlJlZnJlc2hDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiXSA9IDE0OF0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nQ2hhbmdlZFwiXSA9IDE0OV0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdDaGFuZ2VkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNMb2FkTW9yZUVuYWJsZWRcIl0gPSAxNTBdID0gXCJJc0xvYWRNb3JlRW5hYmxlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxvYWRNb3JlQ29tbWFuZFwiXSA9IDE1MV0gPSBcIkxvYWRNb3JlQ29tbWFuZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nXCJdID0gMTUyXSA9IFwiSXNMb2FkTW9yZUxvYWRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlTG9hZGluZ0NoYW5nZWRcIl0gPSAxNTNdID0gXCJJc0xvYWRNb3JlTG9hZGluZ0NoYW5nZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGFwcGVkXCJdID0gMTU0XSA9IFwiSXRlbVRhcHBlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1TZWxlY3RlZFwiXSA9IDE1NV0gPSBcIkl0ZW1TZWxlY3RlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Eb3VibGVUYXBwZWRcIl0gPSAxNTZdID0gXCJJdGVtRG91YmxlVGFwcGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVMZWZ0Q29tbWFuZFwiXSA9IDE1N10gPSBcIlN3aXBlTGVmdENvbW1hbmRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVJpZ2h0Q29tbWFuZFwiXSA9IDE1OF0gPSBcIlN3aXBlUmlnaHRDb21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVVcENvbW1hbmRcIl0gPSAxNTldID0gXCJTd2lwZVVwQ29tbWFuZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlRG93bkNvbW1hbmRcIl0gPSAxNjBdID0gXCJTd2lwZURvd25Db21tYW5kXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVJdGVtc1wiXSA9IDE2MV0gPSBcIlN3aXBlSXRlbXNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlZnJlc2hpbmdcIl0gPSAxNjJdID0gXCJJc1JlZnJlc2hpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSZWZyZXNoQ29tbWFuZFBhcmFtZXRlclwiXSA9IDE2M10gPSBcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVpZ2h0XCJdID0gMTY0XSA9IFwiUm93SGVpZ2h0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQXV0b0dlbmVyYXRlSXRlbVwiXSA9IDE2NV0gPSBcIkF1dG9HZW5lcmF0ZUl0ZW1cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxNb2RlXCJdID0gMTY2XSA9IFwiU2Nyb2xsTW9kZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxNjddID0gXCJTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9cIl0gPSAxNjhdID0gXCJTY3JvbGxUb1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvUm93XCJdID0gMTY5XSA9IFwiU2Nyb2xsVG9Sb3dcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1Jvd0luZGV4XCJdID0gMTcwXSA9IFwiU2Nyb2xsVG9Sb3dJbmRleFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvQ29sdW1uXCJdID0gMTcxXSA9IFwiU2Nyb2xsVG9Db2x1bW5cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb0NvbHVtbkluZGV4XCJdID0gMTcyXSA9IFwiU2Nyb2xsVG9Db2x1bW5JbmRleFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNzNdID0gXCJIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDE3NF0gPSBcIkZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNzVdID0gXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWlnaHRSZXNpemVyXCJdID0gMTc2XSA9IFwiUm93SGVpZ2h0UmVzaXplclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbFN0YXJ0ZWRcIl0gPSAxNzddID0gXCJPblB1bGxTdGFydGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsRGVsdGFcIl0gPSAxNzhdID0gXCJPblB1bGxEZWx0YVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbENvbXBsZXRlZFwiXSA9IDE3OV0gPSBcIk9uUHVsbENvbXBsZXRlZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbENvbnRlbnRcIl0gPSAxODBdID0gXCJPblB1bGxDb250ZW50XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZWxlYXNlQ29udGVudFwiXSA9IDE4MV0gPSBcIk9uUmVsZWFzZUNvbnRlbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlU3RhcnRlZFwiXSA9IDE4Ml0gPSBcIk9uU3dpcGVTdGFydGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZURlbHRhXCJdID0gMTgzXSA9IFwiT25Td2lwZURlbHRhXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZUNvbXBsZXRlZFwiXSA9IDE4NF0gPSBcIk9uU3dpcGVDb21wbGV0ZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJldmVhbGluZ1wiXSA9IDE4NV0gPSBcIk9uUmV2ZWFsaW5nXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZUVuZGVkXCJdID0gMTg2XSA9IFwiT25Td2lwZUVuZGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxlZFwiXSA9IDE4N10gPSBcIk9uUmV2ZWFsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkV4ZWN1dGVcIl0gPSAxODhdID0gXCJPbkV4ZWN1dGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkhpZGluZ1wiXSA9IDE4OV0gPSBcIk9uSGlkaW5nXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25IaWRkZW5cIl0gPSAxOTBdID0gXCJPbkhpZGRlblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3RhdGVDaGFuZ2VcIl0gPSAxOTFdID0gXCJPblN0YXRlQ2hhbmdlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5pbWF0aW9uRHVyYXRpb25cIl0gPSAxOTJdID0gXCJBbmltYXRpb25EdXJhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcE9mZnNldFwiXSA9IDE5M10gPSBcIk1heFRvcE9mZnNldFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pblRvcE9mZnNldFwiXSA9IDE5NF0gPSBcIk1pblRvcE9mZnNldFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pblRvcFJldmVhbGVkXCJdID0gMTk1XSA9IFwiTWluVG9wUmV2ZWFsZWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhUb3BSZXZlYWxlZFwiXSA9IDE5Nl0gPSBcIk1heFRvcFJldmVhbGVkXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFRlbXBsYXRlXCJdID0gMTk3XSA9IFwiQ29udGVudFRlbXBsYXRlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxOThdID0gXCJDb250ZW50VGVtcGxhdGVTZWxlY3RvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uXCJdID0gMTk5XSA9IFwiUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY2FsZVwiXSA9IDIwMF0gPSBcIlNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJhbnNsYXRpb25YXCJdID0gMjAxXSA9IFwiVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJhbnNsYXRpb25ZXCJdID0gMjAyXSA9IFwiVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGF5b3V0WFwiXSA9IDIwM10gPSBcIkxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMYXlvdXRZXCJdID0gMjA0XSA9IFwiTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIldpZHRoUmVxdWVzdFwiXSA9IDIwNV0gPSBcIldpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlaWdodFJlcXVlc3RcIl0gPSAyMDZdID0gXCJIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDIwN10gPSBcIk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDIwOF0gPSBcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5jaG9yWFwiXSA9IDIwOV0gPSBcIkFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbmNob3JZXCJdID0gMjEwXSA9IFwiQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWFwiXSA9IDIxMV0gPSBcIlJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWVwiXSA9IDIxMl0gPSBcIlJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlWFwiXSA9IDIxM10gPSBcIlNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlWVwiXSA9IDIxNF0gPSBcIlNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiXSA9IDIxNV0gPSBcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdlc3R1cmVSZWNvZ25pemVyc1wiXSA9IDIxNl0gPSBcIkdlc3R1cmVSZWNvZ25pemVyc1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJlaGF2aW9yXCJdID0gMjE3XSA9IFwiQmVoYXZpb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmlnZ2Vyc1wiXSA9IDIxOF0gPSBcIlRyaWdnZXJzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2xhc3NJZFwiXSA9IDIxOV0gPSBcIkNsYXNzSWRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHlsZUlkXCJdID0gMjIwXSA9IFwiU3R5bGVJZFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZsb3dEaXJlY3Rpb25cIl0gPSAyMjFdID0gXCJGbG93RGlyZWN0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSW5wdXRUcmFuc3BhcmVudFwiXSA9IDIyMl0gPSBcIklucHV0VHJhbnNwYXJlbnRcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JcIl0gPSAyMjNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclwiXSA9IDIyNF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzXCJdID0gMjI1XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uXCJdID0gMjI2XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1wiXSA9IDIyN10gPSBcIklzVmlzaWJsZVBhZGRpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclwiXSA9IDIyOF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JcIl0gPSAyMjldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoXCJdID0gMjMwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dcIl0gPSAyMzFdID0gXCJJc1Zpc2libGVTaGFkb3dcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VcIl0gPSAyMzJdID0gXCJJc1Zpc2libGVTdHJva2VcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JcIl0gPSAyMzNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNcIl0gPSAyMzRdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhcIl0gPSAyMzVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIl0gPSAyMzZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblwiXSA9IDIzN10gPSBcIklzVmlzaWJsZVJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVcIl0gPSAyMzhdID0gXCJJc1Zpc2libGVTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RcIl0gPSAyMzldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0XCJdID0gMjQwXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSAyNDFdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSAyNDJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzXCJdID0gMjQzXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1wiXSA9IDI0NF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nXCJdID0gMjQ1XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1wiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck9wYWNpdHlcIl0gPSAyNDZdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCJdID0gMjQ3XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCJdID0gMjQ4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93T3BhY2l0eVwiXSA9IDI0OV0gPSBcIklzVmlzaWJsZVNoYWRvd09wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCJdID0gMjUwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE9wYWNpdHlcIl0gPSAyNTFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZT3BhY2l0eVwiXSA9IDI1Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIl0gPSAyNTNdID0gXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIl0gPSAyNTRdID0gXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1NV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1Nl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIl0gPSAyNTddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0T3BhY2l0eVwiXSA9IDI1OF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiXSA9IDI1OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c09wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nT3BhY2l0eVwiXSA9IDI2MF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdPcGFjaXR5XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ09wYWNpdHlcIl0gPSAyNjFdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nT3BhY2l0eVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRWRpdGFibGVMYXlvdXRcIl0gPSAyNjJdID0gXCJJc0VkaXRhYmxlTGF5b3V0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkT3BhY2l0eVwiXSA9IDI2M10gPSBcIklzRW5hYmxlZE9wYWNpdHlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblwiXSA9IDI2NF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiXSA9IDI2NV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblwiXSA9IDI2Nl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25cIl0gPSAyNjddID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiXSA9IDI2OF0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25cIl0gPSAyNjldID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblwiXSA9IDI3MF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCJdID0gMjcxXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uXCJdID0gMjcyXSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblwiXSA9IDI3M10gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25cIl0gPSAyNzRdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uXCJdID0gMjc1XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblwiXSA9IDI3Nl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25cIl0gPSAyNzddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25cIl0gPSAyNzhdID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblwiXSA9IDI3OV0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIl0gPSAyODBdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblwiXSA9IDI4MV0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblwiXSA9IDI4Ml0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyODNdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblwiXSA9IDI4NF0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uXCJdID0gMjg1XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uXCJdID0gMjg2XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVcIl0gPSAyODddID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVcIl0gPSAyODhdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVcIl0gPSAyODldID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlXCJdID0gMjkwXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVcIl0gPSAyOTFdID0gXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlXCJdID0gMjkyXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVcIl0gPSAyOTNdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVwiXSA9IDI5NF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVwiXSA9IDI5NV0gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVcIl0gPSAyOTZdID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlXCJdID0gMjk3XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVwiXSA9IDI5OF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVcIl0gPSAyOTldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlXCJdID0gMzAwXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlXCJdID0gMzAxXSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVcIl0gPSAzMDJdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlXCJdID0gMzAzXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVcIl0gPSAzMDRdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVcIl0gPSAzMDVdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlXCJdID0gMzA2XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVcIl0gPSAzMDddID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVwiXSA9IDMwOF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiXSA9IDMwOV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFNjYWxlXCJdID0gMzEwXSA9IFwiSXNFbmFibGVkU2NhbGVcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVhcIl0gPSAzMTFdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWFwiXSA9IDMxMl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCJdID0gMzEzXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVYXCJdID0gMzE0XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWFwiXSA9IDMxNV0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWFwiXSA9IDMxNl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVhcIl0gPSAzMTddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVYXCJdID0gMzE4XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIl0gPSAzMTldID0gXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VTY2FsZVhcIl0gPSAzMjBdID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIl0gPSAzMjFdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIl0gPSAzMjJdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVhcIl0gPSAzMjNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIl0gPSAzMjRdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWFwiXSA9IDMyNV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVTY2FsZVhcIl0gPSAzMjZdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVhcIl0gPSAzMjddID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCJdID0gMzI4XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVhcIl0gPSAzMjldID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVhcIl0gPSAzMzBdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVYXCJdID0gMzMxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWFwiXSA9IDMzMl0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVYXCJdID0gMzMzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFNjYWxlWFwiXSA9IDMzNF0gPSBcIklzRW5hYmxlZFNjYWxlWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiXSA9IDMzNV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVZXCJdID0gMzM2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVlcIl0gPSAzMzddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIl0gPSAzMzhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVZXCJdID0gMzM5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVZXCJdID0gMzQwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWVwiXSA9IDM0MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVlcIl0gPSAzNDJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlWVwiXSA9IDM0M10gPSBcIklzVmlzaWJsZVNoYWRvd1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiXSA9IDM0NF0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWVwiXSA9IDM0NV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWVwiXSA9IDM0Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiXSA9IDM0N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWVwiXSA9IDM0OF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVZXCJdID0gMzQ5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25TY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWVwiXSA9IDM1MF0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM1MV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVlcIl0gPSAzNTJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM1M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWVwiXSA9IDM1NF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIl0gPSAzNTVdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVZXCJdID0gMzU2XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVlcIl0gPSAzNTddID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVZXCJdID0gMzU4XSA9IFwiSXNFbmFibGVkU2NhbGVZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCJdID0gMzU5XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNjBdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiXSA9IDM2MV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiXSA9IDM2Ml0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvblhcIl0gPSAzNjNdID0gXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvblhcIl0gPSAzNjRdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25YXCJdID0gMzY1XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWFwiXSA9IDM2Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCJdID0gMzY3XSA9IFwiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCJdID0gMzY4XSA9IFwiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yVHJhbnNsYXRpb25YXCJdID0gMzY5XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCJdID0gMzcwXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCJdID0gMzcxXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZVHJhbnNsYXRpb25YXCJdID0gMzcyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNzNdID0gXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25YXCJdID0gMzc0XSA9IFwiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc1XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3Nl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc3XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzc4XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiXSA9IDM3OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvblhcIl0gPSAzODBdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWFwiXSA9IDM4MV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIl0gPSAzODJdID0gXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvbllcIl0gPSAzODNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4NF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCJdID0gMzg1XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25ZXCJdID0gMzg2XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWVwiXSA9IDM4N10gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWVwiXSA9IDM4OF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvbllcIl0gPSAzODldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25ZXCJdID0gMzkwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIl0gPSAzOTFdID0gXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvbllcIl0gPSAzOTJdID0gXCJJc1Zpc2libGVTdHJva2VUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIl0gPSAzOTNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIl0gPSAzOTRdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvbllcIl0gPSAzOTVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIl0gPSAzOTZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWVwiXSA9IDM5N10gPSBcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvbllcIl0gPSAzOThdID0gXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOTldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gNDAwXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSA0MDFdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSA0MDJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25ZXCJdID0gNDAzXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzVHJhbnNsYXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwNF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25ZXCJdID0gNDA1XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFRyYW5zbGF0aW9uWVwiXSA9IDQwNl0gPSBcIklzRW5hYmxlZFRyYW5zbGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFhcIl0gPSA0MDddID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRYXCJdID0gNDA4XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WFwiXSA9IDQwOV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRYXCJdID0gNDEwXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRYXCJdID0gNDExXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0xheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFhcIl0gPSA0MTJdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIl0gPSA0MTNdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFhcIl0gPSA0MTRdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRYXCJdID0gNDE1XSA9IFwiSXNWaXNpYmxlU2hhZG93TGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUxheW91dFhcIl0gPSA0MTZdID0gXCJJc1Zpc2libGVTdHJva2VMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WFwiXSA9IDQxN10gPSBcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRYXCJdID0gNDE4XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFhcIl0gPSA0MTldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WFwiXSA9IDQyMF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFhcIl0gPSA0MjFdID0gXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIl0gPSA0MjJdID0gXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyM10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyNF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjVdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyNl0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WFwiXSA9IDQyN10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WFwiXSA9IDQyOF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFhcIl0gPSA0MjldID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZExheW91dFhcIl0gPSA0MzBdID0gXCJJc0VuYWJsZWRMYXlvdXRYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WVwiXSA9IDQzMV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFlcIl0gPSA0MzJdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRZXCJdID0gNDMzXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFlcIl0gPSA0MzRdID0gXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0xheW91dFlcIl0gPSA0MzVdID0gXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WVwiXSA9IDQzNl0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiXSA9IDQzN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WVwiXSA9IDQzOF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0xheW91dFlcIl0gPSA0MzldID0gXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WVwiXSA9IDQ0MF0gPSBcIklzVmlzaWJsZVN0cm9rZUxheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRZXCJdID0gNDQxXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFlcIl0gPSA0NDJdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WVwiXSA9IDQ0M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRZXCJdID0gNDQ0XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WVwiXSA9IDQ0NV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiXSA9IDQ0Nl0gPSBcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ3XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ4XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0OV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRZXCJdID0gNDUwXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRZXCJdID0gNDUxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRZXCJdID0gNDUyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WVwiXSA9IDQ1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTGF5b3V0WVwiXSA9IDQ1NF0gPSBcIklzRW5hYmxlZExheW91dFlcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ1Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzV2lkdGhSZXF1ZXN0XCJdID0gNDU3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDU4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1dpZHRoUmVxdWVzdFwiXSA9IDQ1OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlcldpZHRoUmVxdWVzdFwiXSA9IDQ2MF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NjFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvcldpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoV2lkdGhSZXF1ZXN0XCJdID0gNDYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dXaWR0aFJlcXVlc3RcIl0gPSA0NjNdID0gXCJJc1Zpc2libGVTaGFkb3dXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIl0gPSA0NjRdID0gXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NjVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNXaWR0aFJlcXVlc3RcIl0gPSA0NjZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIl0gPSA0NjddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllXaWR0aFJlcXVlc3RcIl0gPSA0NjhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbldpZHRoUmVxdWVzdFwiXSA9IDQ2OV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVXaWR0aFJlcXVlc3RcIl0gPSA0NzBdID0gXCJJc1Zpc2libGVTY2FsZVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDcyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCJdID0gNDc1XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1dpZHRoUmVxdWVzdFwiXSA9IDQ3Nl0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdXaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nV2lkdGhSZXF1ZXN0XCJdID0gNDc3XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1dpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiXSA9IDQ3OF0gPSBcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0NzldID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDgwXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4MV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0hlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25IZWlnaHRSZXF1ZXN0XCJdID0gNDgyXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdIZWlnaHRSZXF1ZXN0XCJdID0gNDgzXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0hlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIl0gPSA0ODRdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODVdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEhlaWdodFJlcXVlc3RcIl0gPSA0ODZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCJdID0gNDg3XSA9IFwiSXNWaXNpYmxlU2hhZG93SGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUhlaWdodFJlcXVlc3RcIl0gPSA0ODhdID0gXCJJc1Zpc2libGVTdHJva2VIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9ySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4OV0gPSBcIklzVmlzaWJsZVRleHRDb2xvckhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCJdID0gNDkwXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEhlaWdodFJlcXVlc3RcIl0gPSA0OTFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIl0gPSA0OTNdID0gXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIl0gPSA0OTRdID0gXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5NV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5Nl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OTddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5OF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0hlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0hlaWdodFJlcXVlc3RcIl0gPSA1MDFdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIl0gPSA1MDJdID0gXCJJc0VuYWJsZWRIZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDNdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDRdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDVdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA2XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDddID0gXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA4XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDldID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxMF0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxMV0gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTJdID0gXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEzXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxNF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTVdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE2XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE3XSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MThdID0gXCJJc1Zpc2libGVTY2FsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE5XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjBdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjFdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTIyXSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjNdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyNF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyNV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTI2XSA9IFwiSXNFbmFibGVkTWluaW11bUhlaWdodFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTI3XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUyOF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MjldID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMV0gPSBcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMyXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMzXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM0XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNV0gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM2XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzddID0gXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzOF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM5XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDBdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQxXSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQyXSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDNdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDRdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ1XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDZdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDddID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDhdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ5XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTUwXSA9IFwiSXNFbmFibGVkTWluaW11bVdpZHRoUmVxdWVzdFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvclhcIl0gPSA1NTFdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JYXCJdID0gNTUyXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWFwiXSA9IDU1M10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JYXCJdID0gNTU0XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JYXCJdID0gNTU1XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0FuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvclhcIl0gPSA1NTZdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIl0gPSA1NTddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvclhcIl0gPSA1NThdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dBbmNob3JYXCJdID0gNTU5XSA9IFwiSXNWaXNpYmxlU2hhZG93QW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUFuY2hvclhcIl0gPSA1NjBdID0gXCJJc1Zpc2libGVTdHJva2VBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWFwiXSA9IDU2MV0gPSBcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JYXCJdID0gNTYyXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvclhcIl0gPSA1NjNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWFwiXSA9IDU2NF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvclhcIl0gPSA1NjVdID0gXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIl0gPSA1NjZdID0gXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWFwiXSA9IDU2N10gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWFwiXSA9IDU2OF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NjldID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWFwiXSA9IDU3MF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWFwiXSA9IDU3MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvclhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWFwiXSA9IDU3Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvclhcIl0gPSA1NzNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEFuY2hvclhcIl0gPSA1NzRdID0gXCJJc0VuYWJsZWRBbmNob3JYXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWVwiXSA9IDU3NV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvcllcIl0gPSA1NzZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JZXCJdID0gNTc3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvcllcIl0gPSA1NzhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0FuY2hvcllcIl0gPSA1NzldID0gXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWVwiXSA9IDU4MF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiXSA9IDU4MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWVwiXSA9IDU4Ml0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0FuY2hvcllcIl0gPSA1ODNdID0gXCJJc1Zpc2libGVTaGFkb3dBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWVwiXSA9IDU4NF0gPSBcIklzVmlzaWJsZVN0cm9rZUFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JZXCJdID0gNTg1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvcllcIl0gPSA1ODZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWVwiXSA9IDU4N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JZXCJdID0gNTg4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWVwiXSA9IDU4OV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiXSA9IDU5MF0gPSBcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JZXCJdID0gNTkxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JZXCJdID0gNTkyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JZXCJdID0gNTk0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JZXCJdID0gNTk1XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JZXCJdID0gNTk2XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWVwiXSA9IDU5N10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkQW5jaG9yWVwiXSA9IDU5OF0gPSBcIklzRW5hYmxlZEFuY2hvcllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIl0gPSA1OTldID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWFwiXSA9IDYwMF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25YXCJdID0gNjAxXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCJdID0gNjAyXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWFwiXSA9IDYwM10gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uWFwiXSA9IDYwNF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblhcIl0gPSA2MDVdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25YXCJdID0gNjA2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblhcIl0gPSA2MDddID0gXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIl0gPSA2MDhdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblhcIl0gPSA2MDldID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblhcIl0gPSA2MTBdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIl0gPSA2MTFdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblhcIl0gPSA2MTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uWFwiXSA9IDYxM10gPSBcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblhcIl0gPSA2MTRdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTVdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25YXCJdID0gNjE2XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MTddID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MThdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCJdID0gNjE5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWFwiXSA9IDYyMF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblhcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25YXCJdID0gNjIxXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFJvdGF0aW9uWFwiXSA9IDYyMl0gPSBcIklzRW5hYmxlZFJvdGF0aW9uWFwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiXSA9IDYyM10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25ZXCJdID0gNjI0XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIl0gPSA2MjVdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIl0gPSA2MjZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25ZXCJdID0gNjI3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25ZXCJdID0gNjI4XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWVwiXSA9IDYyOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvbllcIl0gPSA2MzBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiXSA9IDYzMV0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiXSA9IDYzMl0gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWVwiXSA9IDYzM10gPSBcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiXSA9IDYzNF0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiXSA9IDYzNV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWVwiXSA9IDYzNl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25ZXCJdID0gNjM3XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWVwiXSA9IDYzOF0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiXSA9IDYzOV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDBdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiXSA9IDY0MV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiXSA9IDY0Ml0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIl0gPSA2NDNdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIjtcclxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25ZXCJdID0gNjQ0XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWVwiO1xyXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvbllcIl0gPSA2NDVdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25ZXCI7XHJcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkUm90YXRpb25ZXCJdID0gNjQ2XSA9IFwiSXNFbmFibGVkUm90YXRpb25ZXCI7XHJcbn0pKFByb3BlcnR5TmFtZSB8fCAoUHJvcGVydHlOYW1lID0ge30pKTtcclxuIiwiaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQsIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYSB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9lbGxpcHNlLTItZWxsaXBzZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVUZXh0RWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vdGV4dC0yLWxhYmVsXCI7XHJcbmltcG9ydCB7IENvbnRlbnRWaWV3IH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtdmlld1wiO1xyXG5pbXBvcnQgeyBDdXN0b21Db250cm9sIH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtY3VzdG9tLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlUmVjdGFuZ2xlRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3JlY3RhbmdsZS0yLXJlY3RhbmdsZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVMaW5lRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2xpbmUtMi1saW5lXCI7XHJcbmltcG9ydCB7IENvbnRlbnRQYWdlIH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtcGFnZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVWZWN0b3JFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvdmVjdG9yLTItaWNvblwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVCdXR0b25FbGVtZW50LCBjaGVja0Nvcm5lclJhZGl1cywgdHJhbnNsYXRlU3Ryb2tlV2VpZ2h0LCB0cmFuc2xhdGVTdHJva2VzVG9GaWdtYSB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi14YW1sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUVkaXRvckVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZWRpdG9yLTIteGFtbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVFbnRyeUVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZW50cnktMi14YW1sXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNsaWRlckVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vc2xpZGVyLTIteGFtbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTd2l0Y2hFbGVtZW50IH0gZnJvbSBcIi4vdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL3N3aXRjaC0yLXhhbWxcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQ2hlY2tCb3hFbGVtZW50IH0gZnJvbSBcIi4vdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2NoZWNrQm94LTIteGFtbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVJbWFnZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vYnV0dG9uLTItaW1hZ2VidXR0b25cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmlnbWEobm9kZXMpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ1BhcnNpbmcgTm9kZXM6ICcsIG5vZGVzKTtcclxuICAgIGxldCB4YW1sQ29kZSA9IFwiXCI7XHJcbiAgICBsZXQgcm9vdG5vZGUgPSBub2Rlc1swXTtcclxuICAgIGxldCBjb250ZW50UGFnZSA9IG5ldyBDb250ZW50UGFnZShyb290bm9kZS5wYXJlbnQubm9kZS5uYW1lKTtcclxuICAgIGxldCByb290VmlldyA9IHsgbmFtZTogRWxlbWVudE5hbWUuU2Nyb2xsVmlldywgcHJvcGVydGllczogW10gfTtcclxuICAgIGxldCByb290TGF5b3V0ID0gVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dChyb290bm9kZS5wYXJlbnQubm9kZSk7XHJcbiAgICB4YW1sQ29kZSArPSBjb250ZW50UGFnZS5nZXRTdGFydFRhZygpICsgYFxcbiR7Zm9ybWF0U3RhcnRUYWcocm9vdFZpZXcpfVxcbmAgKyBgXFxuJHtmb3JtYXRTdGFydFRhZyhyb290TGF5b3V0KX1cXG5gO1xyXG4gICAgcm9vdG5vZGUuY2hpbGRyZW4ucmV2ZXJzZSgpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgLy9UcmFzbGF0ZSB0aGUgTmVzdGVkIGVsZW1lbnRzIHRvIFxyXG4gICAgICAgIHhhbWxDb2RlICs9IGZvcm1hdE5lc3RlZEVsZW1lbnQoY2hlY2tOb2RlVHlwZShjKSk7XHJcbiAgICB9KTtcclxuICAgIHhhbWxDb2RlICs9IGBcXG4ke2Zvcm1hdEVuZFRhZyhyb290TGF5b3V0KX1cXG5gICsgYFxcbiR7Zm9ybWF0RW5kVGFnKHJvb3RWaWV3KX1cXG5gICsgY29udGVudFBhZ2UuZ2V0RW5kVGFnKCk7XHJcbiAgICByZXR1cm4geGFtbENvZGU7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0TmVzdGVkRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBpZiAoZWxlbWVudC5wYXJlbnQgaW5zdGFuY2VvZiBDdXN0b21Db250cm9sKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGVsZW1lbnQucGFyZW50LmdldFN0YXJ0VGFnKCkgKyBlbGVtZW50LnBhcmVudC5nZXRFbmRUYWcoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGVsZW1lbnQucGFyZW50IGluc3RhbmNlb2YgQ29udGVudFZpZXcpIHtcclxuICAgICAgICByZXN1bHQgKz0gZWxlbWVudC5wYXJlbnQuZ2V0U3RhcnRUYWcoKSArIC8qYFxcbiR7bmVzdGVkQ29tcG9uZW50fWAgKyovIGVsZW1lbnQucGFyZW50LmdldEVuZFRhZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Lm5hbWUgPT09IEVsZW1lbnROYW1lLm5vbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRhZ1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gZm9ybWF0U3RhcnRUYWcoZWxlbWVudC5wYXJlbnQpO1xyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgY2hpbGRyZW4gYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgZm9ybWF0TmVzdGVkRWxlbWVudCBvbiBlYWNoIGNoaWxkXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBmb3JtYXROZXN0ZWRFbGVtZW50KGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IGZvcm1hdEVuZFRhZyhlbGVtZW50LnBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gZm9ybWF0U2hvcnRUYWcoZWxlbWVudC5wYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tOb2RlVHlwZShubikge1xyXG4gICAgLy9DaGVjayBpZiB0aGUgbm9kZSBoYXMgYmVlbiBhc3NpZ25lZCBhIGN1c3RvbSB2YWx1ZVxyXG4gICAgaWYgKG5uLnBhcmVudC51dHlwZSAhPT0gJ05vbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVXR5cGVOb2Rlcyhubik7XHJcbiAgICB9XHJcbiAgICAvLyB0YWtlIHRoZSB0b3Agbm9kZVxyXG4gICAgbGV0IG5vZGUgPSBubi5wYXJlbnQubm9kZTtcclxuICAgIC8vIENoZWNrIHRoZSBub2RlJ3MgdHlwZSB1c2luZyB0aGUgJ3R5cGUnIHByb3BlcnR5XHJcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0ZSQU1FJzpcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGZyYW1lIGVsZW1lbnQgLT4gYmVjYW9tZXMgYSB4YW1sIGxheW91dCBlbGVtZW50IFxyXG4gICAgICAgICAgICBsZXQgZnJhbWVOb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lRWxlbWVudCA9IFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQoZnJhbWVOb2RlKTtcclxuICAgICAgICAgICAgZnJhbWVFbGVtZW50LnByb3BlcnRpZXMucHVzaChUcmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSwgZmFsc2UpKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZEZyYW1lID0geyBwYXJlbnQ6IGZyYW1lRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuZXN0ZWRGcmFtZS5jaGlsZHJlbi5wdXNoKGNoZWNrTm9kZVR5cGUobikpKTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lU3Ryb2tlID0gdHJhbnNsYXRlU3Ryb2tlKGZyYW1lTm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZVN0cm9rZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmVzdGVkRnJhbWUuY2hpbGRyZW4ucHVzaCh7IHBhcmVudDogZnJhbWVTdHJva2UsIGNoaWxkcmVuOiBbXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkRnJhbWU7XHJcbiAgICAgICAgY2FzZSAnR1JPVVAnOlxyXG4gICAgICAgICAgICBsZXQgZ3JvdXBFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5ub25lLCBwcm9wZXJ0aWVzOiBbXSB9O1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkR3JvdXAgPSB7IHBhcmVudDogZ3JvdXBFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEdyb3VwLmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkR3JvdXA7XHJcbiAgICAgICAgY2FzZSAnVEVYVCc6XHJcbiAgICAgICAgICAgIGxldCB0ZXh0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0RWxlbWVudCA9IFRyYW5zbGF0ZVRleHRFbGVtZW50KHRleHROb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZFRleHQgPSB7IHBhcmVudDogdGV4dEVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkVGV4dDtcclxuICAgICAgICBjYXNlICdFTExJUFNFJzpcclxuICAgICAgICAgICAgbGV0IGVsbGlwc2VOb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IGVsbGlwc2VFbGVtZW50ID0gVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQoZWxsaXBzZU5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkRWxpcHNlID0geyBwYXJlbnQ6IGVsbGlwc2VFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEVsaXBzZTtcclxuICAgICAgICBjYXNlICdMSU5FJzpcclxuICAgICAgICAgICAgbGV0IGxpbmVOb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IGxpbmVFbGVtZW50ID0gVHJhbnNsYXRlTGluZUVsZW1lbnQobGluZU5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkTGluZSA9IHsgcGFyZW50OiBsaW5lRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRMaW5lO1xyXG4gICAgICAgIGNhc2UgJ1JFQ1RBTkdMRSc6XHJcbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVOb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IHJlY3RhbmdsZUVsZW1lbnQgPSBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KHJlY3RhbmdsZU5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkUmVjdGFuZ2xlID0geyBwYXJlbnQ6IHJlY3RhbmdsZUVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkUmVjdGFuZ2xlO1xyXG4gICAgICAgIGNhc2UgJ1ZFQ1RPUic6XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3JOb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IHZlY3RvckVsZW1lbnQgPSBUcmFuc2xhdGVWZWN0b3JFbGVtZW50KHZlY3Rvck5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkVmVjdG9yID0geyBwYXJlbnQ6IHZlY3RvckVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkVmVjdG9yO1xyXG4gICAgICAgIGNhc2UgJ0lOU1RBTkNFJzpcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5ncyA9IFtdOyAvL1RPRE86IGNoaWxkcmVuXHJcbiAgICAgICAgICAgIGxldCBjdXN0b21Db250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woaW5zdGFuY2VOb2RlLm5hbWUsIGJpbmRpbmdzKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZENvbnRyb2wgPSB7IHBhcmVudDogY3VzdG9tQ29udHJvbCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRDb250cm9sO1xyXG4gICAgICAgIGNhc2UgJ0NPTVBPTkVOVCc6XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnROb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBuZXcgcmVzb3VyY2UgZmlsZSAvIG5ldyB3aW5kb3dcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRWaWV3ID0gbmV3IENvbnRlbnRWaWV3KG5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRDb21wb25lbnQgPSB7IHBhcmVudDogY29udGVudFZpZXcsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmVzdGVkQ29tcG9uZW50LmNoaWxkcmVuLnB1c2goY2hlY2tOb2RlVHlwZShuKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQ29tcG9uZW50O1xyXG4gICAgICAgIGNhc2UgJ1NUQVInOlxyXG4gICAgICAgIGNhc2UgJ0JPT0xFQU5fT1BFUkFUSU9OJzpcclxuICAgICAgICBjYXNlICdTTElDRSc6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLm5vbmUsIHByb3BlcnRpZXM6IFtdIH07XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWQgPSB7IHBhcmVudDogZWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VVdHlwZU5vZGVzKG5uKSB7XHJcbiAgICBsZXQgbm9kZSA9IG5uLnBhcmVudDtcclxuICAgIC8vY29uc29sZS5sb2coJ3RyYW5zbGF0aW5nIDogJywgbm9kZS51dHlwZSk7XHJcbiAgICAvLyBDaGVjayB0aGUgbm9kZSdzIHR5cGUgdXNpbmcgdGhlICd0eXBlJyBwcm9wZXJ0eVxyXG4gICAgc3dpdGNoIChub2RlLnV0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQlVUVE9OJzpcclxuICAgICAgICAgICAgaWYgKG5vZGUubm9kZS50eXBlID09PSAnSU5TVEFOQ0UnKSB7XHJcbiAgICAgICAgICAgICAgICBubi5wYXJlbnQudXR5cGUgPSAnTm9uZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tOb2RlVHlwZShubik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbk5vZGUgPSBub2RlLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25FbGVtZW50ID0gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChidXR0b25Ob2RlKTtcclxuICAgICAgICAgICAgYnV0dG9uRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goVHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUubm9kZSwgZmFsc2UpKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZEJ1dHRvbiA9IHsgcGFyZW50OiBidXR0b25FbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgaWYgKG5uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlID0gbi5wYXJlbnQubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlLnR5cGUgPT09ICdURVhUJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dEVsZW1lbnQgPSBUcmFuc2xhdGVUZXh0RWxlbWVudChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LnByb3BlcnRpZXMuY29uY2F0KHRleHRFbGVtZW50LnByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoY2hpbGROb2RlLnR5cGUgPT09ICdWRUNUT1InKSB8fCAobi5wYXJlbnQudXR5cGUgPT09ICdJTUFHRScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZWN0b3JFbGVtZW50ID0gVHJhbnNsYXRlVmVjdG9yRWxlbWVudChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VCdXR0b25FbGVtZW50ID0gVHJhbnNsYXRlSW1hZ2VCdXR0b25FbGVtZW50KGJ1dHRvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUJ1dHRvbkVsZW1lbnQucHJvcGVydGllcy5jb25jYXQodmVjdG9yRWxlbWVudC5wcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFyZW50OiBpbWFnZUJ1dHRvbkVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ0VMTElQU0UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IGNoaWxkTm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvcm5lclJhZGl1cyA9IHsgbmFtZTogUHJvcGVydHlOYW1lLkNvcm5lclJhZGl1cywgdmFsdWU6ICh3aWR0aCAvIDIpLnRvU3RyaW5nKCkgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uRWxlbWVudC5wcm9wZXJ0aWVzLnB1c2goY29ybmVyUmFkaXVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROb2RlLnR5cGUgPT09ICdSRUNUQU5HTEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjcCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEoY2hpbGROb2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Cb3JkZXJDb2xvciwgdmFsdWU6IChfYiA9IHRyYW5zbGF0ZVN0cm9rZXNUb0ZpZ21hKGNoaWxkTm9kZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdOb25lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQm9yZGVyV2lkdGgsIHZhbHVlOiB0cmFuc2xhdGVTdHJva2VXZWlnaHQoY2hpbGROb2RlKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29ybmVyUmFkaXVzLCB2YWx1ZTogY2hlY2tDb3JuZXJSYWRpdXMoY2hpbGROb2RlKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LnByb3BlcnRpZXMuY29uY2F0KGNwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkQnV0dG9uO1xyXG4gICAgICAgIGNhc2UgJ0VESVRPUic6XHJcbiAgICAgICAgICAgIGxldCBlZGl0b3JOb2RlID0gbm9kZS5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgZWRpdG9yRWxlbWVudCA9IFRyYW5zbGF0ZUVkaXRvckVsZW1lbnQoZWRpdG9yTm9kZSk7XHJcbiAgICAgICAgICAgIGVkaXRvckVsZW1lbnQucHJvcGVydGllcy5wdXNoKFRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlLm5vZGUsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRFZGl0b3IgPSB7IHBhcmVudDogZWRpdG9yRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIGlmIChubi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBuLnBhcmVudC5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlclByb3AgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5QbGFjZWhvbGRlciwgdmFsdWU6IGNoaWxkTm9kZS5jaGFyYWN0ZXJzIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvckVsZW1lbnQucHJvcGVydGllcy5wdXNoKHBsYWNlaG9sZGVyUHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEVkaXRvcjtcclxuICAgICAgICBjYXNlICdFTlRSWSc6XHJcbiAgICAgICAgICAgIGxldCBlbnRyeU5vZGUgPSBub2RlLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBlbnRyeUVsZW1lbnQgPSBUcmFuc2xhdGVFbnRyeUVsZW1lbnQoZW50cnlOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZEVudHJ5ID0geyBwYXJlbnQ6IGVudHJ5RWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIGlmIChubi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGUgPSBuLnBhcmVudC5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlclByb3AgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5QbGFjZWhvbGRlciwgdmFsdWU6IGNoaWxkTm9kZS5jaGFyYWN0ZXJzIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5RWxlbWVudC5wcm9wZXJ0aWVzLnB1c2gocGxhY2Vob2xkZXJQcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkRW50cnk7XHJcbiAgICAgICAgY2FzZSAnSU1BR0UnOlxyXG4gICAgICAgICAgICBsZXQgdmVjdG9yTm9kZSA9IG5vZGUubm9kZTtcclxuICAgICAgICAgICAgbGV0IHZlY3RvckVsZW1lbnQgPSBUcmFuc2xhdGVWZWN0b3JFbGVtZW50KHZlY3Rvck5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkVmVjdG9yID0geyBwYXJlbnQ6IHZlY3RvckVsZW1lbnQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkVmVjdG9yO1xyXG4gICAgICAgIGNhc2UgJ0NIRUNLQk9YJzpcclxuICAgICAgICAgICAgbGV0IGNoZWNrQm94Tm9kZSA9IG5vZGUubm9kZTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrQm94RWxlbWVudCA9IFRyYW5zbGF0ZUNoZWNrQm94RWxlbWVudChjaGVja0JveE5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbmVzdGVkQ2hlY2tCb3ggPSB7IHBhcmVudDogY2hlY2tCb3hFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZENoZWNrQm94O1xyXG4gICAgICAgIGNhc2UgJ1NXSVRDSCc6XHJcbiAgICAgICAgICAgIGxldCBzd2l0Y2hOb2RlID0gbm9kZS5ub2RlO1xyXG4gICAgICAgICAgICBsZXQgc3dpdGNoRWxlbWVudCA9IFRyYW5zbGF0ZVN3aXRjaEVsZW1lbnQoc3dpdGNoTm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXN0ZWRTd2l0Y2ggPSB7IHBhcmVudDogc3dpdGNoRWxlbWVudCwgY2hpbGRyZW46IFtdIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRTd2l0Y2g7XHJcbiAgICAgICAgY2FzZSAnU0xJREVSJzpcclxuICAgICAgICAgICAgbGV0IHNsaWRlck5vZGUgPSBub2RlLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBzbGlkZXJFbGVtZW50ID0gVHJhbnNsYXRlU2xpZGVyRWxlbWVudChzbGlkZXJOb2RlKTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZFNsaWRlciA9IHsgcGFyZW50OiBzbGlkZXJFbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFNsaWRlcjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUubm9uZSwgcHJvcGVydGllczogW10gfTtcclxuICAgICAgICAgICAgbGV0IG5lc3RlZCA9IHsgcGFyZW50OiBlbGVtZW50LCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb3JtYXRTdGFydFRhZyhlbGVtZW50KSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xyXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+IChwcm9wLnZhbHVlICE9PSAnTm9uZScpKSAvLyBFeGNsdWRlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZSAnTm9uZScgYmVjYXVzZSB0aGVuIGl0IGlzIHNldCB0byBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcclxuICAgICAgICAuam9pbihgIFxcblxcdGApO1xyXG4gICAgcmV0dXJuIGA8JHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfSAke3Byb3BlcnR5U3RyaW5nfT5cXG5gO1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1hdFNob3J0VGFnKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gZWxlbWVudC5wcm9wZXJ0aWVzXHJcbiAgICAgICAgLmZpbHRlcigocHJvcCkgPT4gcHJvcC52YWx1ZSAhPT0gJ05vbmUnKSAvLyBFeGNsdWRlIHByb3BlcnRpZXMgd2l0aCB2YWx1ZSAnTm9uZScgYmVjYXVzZSB0aGVuIGl0IGlzIHNldCB0byBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcclxuICAgICAgICAuam9pbihcIiBcIiArIGBcXG5cXHRgKTtcclxuICAgIHJldHVybiBgPCR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0gJHtwcm9wZXJ0eVN0cmluZ30vPlxcbmA7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0RW5kVGFnKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBgPC8ke0VsZW1lbnROYW1lW2VsZW1lbnQubmFtZV19PlxcbmA7XHJcbn1cclxuZnVuY3Rpb24gVHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUsIGZpbGwpIHtcclxuICAgIGlmICgnZmlsbHMnIGluIG5vZGUpIHtcclxuICAgICAgICBjb25zdCBmaWxscyA9IG5vZGUuZmlsbHM7XHJcbiAgICAgICAgaWYgKGZpbGxzICYmIGZpbGxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZmlsbHMuZm9yRWFjaCgoZmlsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBTb2xpZCBQYWludFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBmaWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFByb3BlcnR5TmFtZS5GaWxsLCB2YWx1ZTogY29sb3IgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiBjb2xvciB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBuYW1lOiBQcm9wZXJ0eU5hbWUubm9uZSwgdmFsdWU6ICdOb25lJyB9O1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVN0cm9rZShub2RlKSB7XHJcbiAgICAvL2NvbG9yXHJcbiAgICBsZXQgYm9yZGVyRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQm9yZGVyLCBwcm9wZXJ0aWVzOiBbXSB9O1xyXG4gICAgaWYgKCdzdHJva2VzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgbm9kZS5zdHJva2VzLmZvckVhY2goc3Ryb2tlID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0cm9rZS50eXBlID09PSAnU09MSUQnICYmIChub2RlLnN0cm9rZVdlaWdodCAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBzdHJva2UuY29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3Ryb2tlQ29sb3IgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2UsIHZhbHVlOiBgIyR7Y29sLnJ9JHtjb2wuZ30ke2NvbC5ifWAgfTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQucHJvcGVydGllcy5wdXNoKHN0cm9rZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGxldCBzdHJva2VXZWlnaHQgPSB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VUaGlja25lc3MsIHZhbHVlOiBgJHtub2RlLnN0cm9rZVdlaWdodH1gIH07XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnByb3BlcnRpZXMucHVzaChzdHJva2VXZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm9yZGVyRWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIGNvbnN0IGNvbW1vblByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWVbXCJ4Ok5hbWVcIl0sIHZhbHVlOiB0b0NhbWVsQ2FzZShub2RlLm5hbWUpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5PcGFjaXR5LCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlT3BhY2l0eShub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSXNWaXNpYmxlLCB2YWx1ZTogYm9vbFRvRGVmYXVsdChub2RlLnZpc2libGUsIHRydWUpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSG9yaXpvbnRhbE9wdGlvbnMsIHZhbHVlOiAoX2IgPSB0cmFuc2xhdGVMYXlvdXRBbGlnbihub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVmVydGljYWxPcHRpb25zLCB2YWx1ZTogKF9jID0gdHJhbnNsYXRlTGF5b3V0QWxpZ24obm9kZSkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNvcm5lclJhZGl1cywgdmFsdWU6IHRyYW5zbGF0ZUNvcm5lclJhZGl1cyhub2RlKSB9XHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNvbW1vblByb3BlcnRpZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnICcpIC8vIFNwbGl0IHRoZSBzdHJpbmcgYnkgc3BhY2VzXHJcbiAgICAgICAgLm1hcCgod29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBmaXJzdCB3b3JkIHRvIGxvd2VyY2FzZSBhbmQgb3RoZXJzIHRvIGNhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlclxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd29yZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIH0pXHJcbiAgICAgICAgLmpvaW4oJycpOyAvLyBKb2luIGFsbCBwYXJ0cyB0b2dldGhlclxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUxheW91dEFsaWduKG5vZGUpIHtcclxuICAgIGlmICgnbGF5b3V0QWxpZ24nIGluIG5vZGUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5vZGUubGF5b3V0QWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNFTlRFUlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdDZW50ZXInO1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFYXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0VuZCc7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTVFJFVENIXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0ZpbGwnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBib29sVG9EZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZU9wYWNpdHkobm9kZSkge1xyXG4gICAgaWYgKCdvcGFjaXR5JyBpbiBub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUub3BhY2l0eSA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZS5vcGFjaXR5LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVDb3JuZXJSYWRpdXMobm9kZSkge1xyXG4gICAgaWYgKCdjb3JuZXJSYWRpdXMnIGluIG5vZGUgJiYgJ3RvcExlZnRSYWRpdXMnIGluIG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZS5jb3JuZXJSYWRpdXMgIT09IGZpZ21hLm1peGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtub2RlLmNvcm5lclJhZGl1c31gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke25vZGUudG9wTGVmdFJhZGl1c30gJHtub2RlLnRvcFJpZ2h0UmFkaXVzfSAke25vZGUuYm90dG9tTGVmdFJhZGl1c30gJHtub2RlLmJvdHRvbVJpZ2h0UmFkaXVzfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICdOb25lJztcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0KG5vZGUpIHtcclxuICAgIHN3aXRjaCAobm9kZS5sYXlvdXRNb2RlKSB7XHJcbiAgICAgICAgY2FzZSBcIkhPUklaT05UQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQobm9kZSk7XHJcbiAgICAgICAgY2FzZSBcIlZFUlRJQ0FMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVWZXJ0aWNhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRlRmxleExheW91dEVsZW1lbnQobm9kZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gVHJhbnNsYXRlRmxleExheW91dEVsZW1lbnQobm9kZSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgZmxleExheW91dFByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgLyogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgbGF5ZXIgdXNlcyBhdXRvLWxheW91dCB0byBwb3NpdGlvbiBpdHMgY2hpbGRyZW4uIERlZmF1bHRzIHRvIFwiTk9ORVwiLiAqL1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNwYWNpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUobm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnbkNvbnRlbnQsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYUFsaWduQ29udGVudChub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnbkl0ZW1zLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyhub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XcmFwLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFXcmFwVG9YYW1sV3JhcChub2RlLmxheW91dFdyYXApIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuR3JvdywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLmxheW91dEdyb3cudG9TdHJpbmcoKSkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnblNlbGYsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYUFsaWduSXRlbXNUb1hhbWxBbGlnbkl0ZW1zKG5vZGUubGF5b3V0QWxpZ24pIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgZmxleExheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkZsZXhMYXlvdXQsIHByb3BlcnRpZXM6IGZsZXhMYXlvdXRQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIGZsZXhMYXlvdXRFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gJzAnKSB7XHJcbiAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG59XHJcbmZ1bmN0aW9uIFRyYW5zbGF0ZUhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQobm9kZSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgaG9yaXpvbnRhbFN0YWNrTGF5b3V0UHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5CYWNrZ3JvdW5kLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkhvcml6b250YWxTdGFja0xheW91dCwgcHJvcGVydGllczogaG9yaXpvbnRhbFN0YWNrTGF5b3V0UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcclxuICAgIHJldHVybiBob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50O1xyXG59XHJcbmZ1bmN0aW9uIFRyYW5zbGF0ZVZlcnRpY2FsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IHZlcnRpY2FsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNwYWNpbmcsIHZhbHVlOiBub2RlLml0ZW1TcGFjaW5nLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkpIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgdmVydGl2YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlZlcnRpY2FsU3RhY2tMYXlvdXQsIHByb3BlcnRpZXM6IHZlcnRpY2FsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpIHtcclxuICAgIGlmICgncGFkZGluZ0xlZnQnIGluIG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdSaWdodCAmJiBub2RlLnBhZGRpbmdMZWZ0ID09IG5vZGUucGFkZGluZ1RvcCAmJiBub2RlLnBhZGRpbmdMZWZ0ID09IG5vZGUucGFkZGluZ0JvdHRvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5wYWRkaW5nTGVmdC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke25vZGUucGFkZGluZ0xlZnR9LCAke25vZGUucGFkZGluZ1RvcH0sICR7bm9kZS5wYWRkaW5nUmlnaHR9LCAke25vZGUucGFkZGluZ0JvdHRvbX0sYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ05vbmUnO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXModmFsdWUpIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlIFwiTUFYXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAnRW5kJztcclxuICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAnQ2VudGVyJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hV3JhcFRvWGFtbFdyYXAodmFsdWUpIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlICdXUkFQJzpcclxuICAgICAgICAgICAgcmV0dXJuICdXcmFwJztcclxuICAgICAgICBjYXNlICdOT19XUkFQJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hQWxpZ25Db250ZW50KHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSAnU1BBQ0VfQkVUV0VFTic6XHJcbiAgICAgICAgICAgIHJldHVybiAnU3BhY2VCZXR3ZWVuJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkge1xyXG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xyXG4gICAgICAgIGxldCB4YW1sU3RyaW5nID0gYC4ke0VsZW1lbnROYW1lLkJhY2tncm91bmR9YDtcclxuICAgICAgICBjb25zdCBmaWxscyA9IG5vZGUuZmlsbHM7XHJcbiAgICAgICAgaWYgKGZpbGxzICYmIGZpbGxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZmlsbHMuZm9yRWFjaCgoZmlsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBTb2xpZCBQYWludFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBmaWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgIyR7c29saWRQYWludC5jb2xvci5yfSR7c29saWRQYWludC5jb2xvci5nfSR7c29saWRQYWludC5jb2xvci5ifWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBjb25zdCBlbGxpcHNlUHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5GaWxsLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VUaGlja25lc3MsIHZhbHVlOiBub2RlLnN0cm9rZVdlaWdodC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlLCB2YWx1ZTogKF9iID0gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBlbGxpcHNlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWxsaXBzZSwgcHJvcGVydGllczogZWxsaXBzZVByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gZWxsaXBzZUVsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpIHtcclxuICAgIGlmICgnZmlsbHMnIGluIG5vZGUpIHtcclxuICAgICAgICBsZXQgeGFtbFN0cmluZyA9IGAuJHtFbGVtZW50TmFtZS5CYWNrZ3JvdW5kfWA7XHJcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xyXG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbGxzLmZvckVhY2goKGZpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb2xpZFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlTGluZUVsZW1lbnQobm9kZSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgbGluZVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWDEsIHZhbHVlOiAnMCcgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5ZMSwgdmFsdWU6ICcwJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlgyLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTIsIHZhbHVlOiBnZXRZZm9yWChub2RlKS50b1N0cmluZygpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VEYXNoQXJyYXksIHZhbHVlOiB0cmFuc2xhdGVEYXNoKG5vZGUpIH0sXHJcbiAgICAgICAgLy8gQWRkIG90aGVyIGxpbmUtcmVsYXRlZCBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGxpbmVFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5MaW5lLCBwcm9wZXJ0aWVzOiBsaW5lUHJvcGVydGllcyB9O1xyXG4gICAgcmV0dXJuIGxpbmVFbGVtZW50O1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZURhc2gobm9kZSkge1xyXG4gICAgcmV0dXJuIGAke25vZGUuZGFzaFBhdHRlcm5bMF19LCR7bm9kZS5kYXNoUGF0dGVyblsxXX1gO1xyXG59XHJcbmZ1bmN0aW9uIGdldFlmb3JYKG5vZGUpIHtcclxuICAgIGxldCBsZW5ndGggPSBub2RlLndpZHRoO1xyXG4gICAgbGV0IHJvdGF0aW9uID0gbm9kZS5yb3RhdGlvbjtcclxuICAgIC8vIENvbnZlcnQgdGhlIHJvdGF0aW9uIGFuZ2xlIGZyb20gZGVncmVlcyB0byByYWRpYW5zXHJcbiAgICAvLyBDb252ZXJ0IHRoZSByb3RhdGlvbiBhbmdsZSBmcm9tIGRlZ3JlZXMgdG8gcmFkaWFuc1xyXG4gICAgbGV0IHRoZXRhID0gcm90YXRpb24gKiAoTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHktY2hhbmdlIHVzaW5nIHNpbmUgb2YgdGhlIGFuZ2xlXHJcbiAgICBsZXQgaCA9IGxlbmd0aCAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgIHJldHVybiBoO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9GaWdtYShub2RlKSB7XHJcbiAgICBpZiAoJ2ZpbGxzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xyXG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbGxzLmZvckVhY2goKGZpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb2xpZFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IHJlY3RhbmdsZVByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzWCwgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLnRvcExlZnRSYWRpdXMpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUmFkaXVzWSwgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLmJvdHRvbVJpZ2h0UmFkaXVzKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZpbGwsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgcmVjdGFuZ2xlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuUmVjdGFuZ2xlLCBwcm9wZXJ0aWVzOiByZWN0YW5nbGVQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIHJlY3RhbmdsZUVsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKG4pIHtcclxuICAgIGlmIChuID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlRmlsbHNUb0ZpZ21hKG5vZGUpIHtcclxuICAgIGlmICgnZmlsbHMnIGluIG5vZGUpIHtcclxuICAgICAgICBsZXQgeGFtbFN0cmluZyA9IGAuJHtFbGVtZW50TmFtZS5CYWNrZ3JvdW5kfWA7XHJcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xyXG4gICAgICAgIGlmIChmaWxscyAmJiBmaWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbGxzLmZvckVhY2goKGZpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgU29saWQgUGFpbnRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb2xpZFBhaW50ID0gZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCMke3NvbGlkUGFpbnQuY29sb3Iucn0ke3NvbGlkUGFpbnQuY29sb3IuZ30ke3NvbGlkUGFpbnQuY29sb3IuYn1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVWZWN0b3JFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHZlY3RvclByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU291cmNlLCB2YWx1ZTogdHJhbnNsYXRlU291cmNlKG5vZGUpIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgdmVjdG9yRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuSW1hZ2UsIHByb3BlcnRpZXM6IHZlY3RvclByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gdmVjdG9yRWxlbWVudDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVTb3VyY2Uobm9kZSkge1xyXG4gICAgbGV0IHNvdXJjZW5hbWUgPSBub2RlLm5hbWUuc3BsaXQoJyAnKS5qb2luKCdfJykudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBgJHtzb3VyY2VuYW1lfS5wbmdgO1xyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVRleHRFbGVtZW50KG5vZGUpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XHJcbiAgICBjb25zdCB0ZXh0UHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5DaGFyYWN0ZXJTcGFjaW5nLCB2YWx1ZTogKF9hID0gdHJhbnNsYXRlTGV0dGVyU3BhY2luZyhub2RlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF0dHJpYnV0ZXMsIHZhbHVlOiB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcyhub2RlLmZvbnRXZWlnaHQpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF1dG9TY2FsaW5nRW5hYmxlZCwgdmFsdWU6IHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKG5vZGUudGV4dEF1dG9SZXNpemUpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udFNpemUsIHZhbHVlOiBub2RlLmZvbnRTaXplLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Ib3Jpem9udGFsVGV4dEFsaWdubWVudCwgdmFsdWU6IHRyYW5zbGF0ZUhvcml6b250YWxBbGlnbm1lbnQobm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVCcmVha01vZGUsIHZhbHVlOiB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZShub2RlLnRleHRUcnVuY2F0aW9uKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVIZWlnaHQsIHZhbHVlOiAoX2IgPSB0cmFuc2xhdGVMaW5lSGVpZ2h0KG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5NYXhMaW5lcywgdmFsdWU6IChfZCA9IChfYyA9IG5vZGUubWF4TGluZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0LCB2YWx1ZTogbm9kZS5jaGFyYWN0ZXJzIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dENvbG9yLCB2YWx1ZTogKF9lID0gZ2V0SGV4Q29sb3JGcm9tRmlsbChub2RlKSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dERlY29yYXRpb25zLCB2YWx1ZTogdHJhbnNsYXRlVGV4dERlY29yYXRpb25Ub1hBTUwobm9kZS50ZXh0RGVjb3JhdGlvbikgfHwgJ05vbmUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dFRyYW5zZm9ybSwgdmFsdWU6IHRyYW5zbGF0ZVRleHRDYXNlVG9YQU1MKG5vZGUudGV4dENhc2UpIHx8ICdOb25lJyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHRleHRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5MYWJlbCwgcHJvcGVydGllczogdGV4dFByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gdGV4dEVsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlTGluZUhlaWdodChub2RlKSB7XHJcbiAgICBsZXQgbGggPSBub2RlLmxpbmVIZWlnaHQ7XHJcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGxoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxoLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlTGV0dGVyU3BhY2luZyhub2RlKSB7XHJcbiAgICBsZXQgbHMgPSBub2RlLmxldHRlclNwYWNpbmcudmFsdWU7XHJcbiAgICBpZiAobHMgIT09IDApIHtcclxuICAgICAgICByZXR1cm4gbHMudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIZXhDb2xvckZyb21GaWxsKHRleHROb2RlKSB7XHJcbiAgICBpZiAoIXRleHROb2RlIHx8ICF0ZXh0Tm9kZS5maWxscyB8fCB0ZXh0Tm9kZS5maWxscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbGwgPSB0ZXh0Tm9kZS5maWxsc1swXTsgLy8gV2UgYXNzdW1lIHRoZSBmaXJzdCBmaWxsIGlzIHRoZSBvbmUgd2Ugd2FudFxyXG4gICAgaWYgKGZpbGwgPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcclxuICAgICAgICBjb25zdCBzb2xpZEZpbGwgPSBmaWxsO1xyXG4gICAgICAgIHJldHVybiByZ2JUb0hleChzb2xpZEZpbGwuY29sb3IpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZmlsbC50eXBlLnN0YXJ0c1dpdGgoJ0dSQURJRU5UJykpIHtcclxuICAgICAgICAvLyBIYW5kbGUgZ3JhZGllbnQgZmlsbHMgKGlmIG5lZWRlZClcclxuICAgICAgICAvLyBZb3UgY2FuIGFkZCBsb2dpYyBoZXJlIHRvIGhhbmRsZSBncmFkaWVudCBmaWxsc1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZnVuY3Rpb24gcmdiVG9IZXgocmdiKSB7XHJcbiAgICBjb25zdCByID0gTWF0aC5yb3VuZChyZ2IuciAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCBnID0gTWF0aC5yb3VuZChyZ2IuZyAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCBiID0gTWF0aC5yb3VuZChyZ2IuYiAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBsZXQgY29sb3IgPSBgIyR7cn0ke2d9JHtifWA7XHJcbiAgICBpZiAoY29sb3IgPT09ICcjMDAwMDAwJykge1xyXG4gICAgICAgIHJldHVybiAnTm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dENhc2VUb1hBTUwodGV4dENhc2UpIHtcclxuICAgIHN3aXRjaCAodGV4dENhc2UpIHtcclxuICAgICAgICBjYXNlIFwiVVBQRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVXBwZXJjYXNlXCI7XHJcbiAgICAgICAgY2FzZSBcIkxPV0VSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkxvd2VyY2FzZVwiO1xyXG4gICAgICAgIGNhc2UgXCJUSVRMRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXBpdGFsaXplXCI7XHJcbiAgICAgICAgLy8gRmlnbWEgXCJPUklHSU5BTFwiIGNvcnJlc3BvbmRzIHRvIFwiTm9uZVwiIGluIFhBTUwsIHdoaWNoIGxlYXZlcyB0aGUgdGV4dCBjYXNlIGFzIGlzLlxyXG4gICAgICAgIGNhc2UgXCJPUklHSU5BTFwiOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjsgLy8gRGVmYXVsdCB0byBubyB0cmFuc2Zvcm1hdGlvblxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHREZWNvcmF0aW9uVG9YQU1MKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcIlNUUklLRVRIUk9VR0hcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiU3RyaWtldGhyb3VnaFwiO1xyXG4gICAgICAgIGNhc2UgXCJVTkRFUkxJTkVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVW5kZXJsaW5lXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZShmaWdtYVRleHRUcnVuY2F0aW9uKSB7XHJcbiAgICAvL09CUyAhIERvIG5vdCBmdWxmaWxsIGFsbCBMaW5lQnJlYWtNb2RlcyBvZiBYYW1sLiBTZWUgZm9sbG93aW5nIGxpbmsgZm9yIG1vcmUgaW5mbyBhYm91dCBMaW5lQnJlYWtNb2RlOiBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2FwaS9taWNyb3NvZnQubWF1aS5saW5lYnJlYWttb2RlP3ZpZXc9bmV0LW1hdWktNy4wXHJcbiAgICBzd2l0Y2ggKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcclxuICAgICAgICBjYXNlIFwiRU5ESU5HXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRhaWxUcnVuY2F0aW9uXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiOyAvLyBEZWZhdWx0IHRvIE5vV3JhcCBpZiB0aGUgdmFsdWUgaXMgbm90IHJlY29nbml6ZWRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlVGV4dEF1dG9SZXNpemVUb0ZvbnRBdXRvU2NhbGluZ0VuYWJsZWQoZmlnbWFUZXh0QXV0b1Jlc2l6ZSkge1xyXG4gICAgc3dpdGNoIChmaWdtYVRleHRBdXRvUmVzaXplKSB7XHJcbiAgICAgICAgY2FzZSBcIk5PTkVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZmFsc2VcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIHdoZW4gcmV0dXJuaW5nIG5vbmUgaXQgd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHhhbWwgdGV4dCwgc2luY2UgaXQgaXMgdGhlIGRlZmF1bHQgdmFsdWVcclxuICAgIH1cclxufVxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdHJhbnNsYXRlIEZpZ21hIGhvcml6b250YWwgdGV4dCBhbGlnbm1lbnQgdG8gWEFNTFxyXG5mdW5jdGlvbiB0cmFuc2xhdGVIb3Jpem9udGFsQWxpZ25tZW50KGFsaWduKSB7XHJcbiAgICAvL1RPRE86IGZpeCB0aGlzIHRvIGNvcnJlY3QgeGFtbFxyXG4gICAgc3dpdGNoIChhbGlnbikge1xyXG4gICAgICAgIGNhc2UgXCJDRU5URVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2VudGVyXCI7XHJcbiAgICAgICAgY2FzZSBcIlJJR0hUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0XCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcyhmaWdtYUZvbnRXZWlnaHQpIHtcclxuICAgIGlmIChmaWdtYUZvbnRXZWlnaHQgPiA0MDApIHtcclxuICAgICAgICByZXR1cm4gJ0JvbGQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdOb25lJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVCdXR0b25FbGVtZW50IH0gZnJvbSBcIi4vYnV0dG9uLTIteGFtbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlSW1hZ2VCdXR0b25FbGVtZW50KG5vZGUpIHtcclxuICAgIGxldCBidXR0b25FbGVtZW50ID0gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChub2RlKTtcclxuICAgIGxldCBpbWFnZUJ1dHRvblByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSW1hZ2VTb3VyY2UsIHZhbHVlOiB0cmFuc2xhdGVTb3VyY2Uobm9kZSkgfVxyXG4gICAgXTtcclxuICAgIGxldCBpbWFnZUJ1dHRvbkVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkltYWdlQnV0dG9uLCBwcm9wZXJ0aWVzOiBidXR0b25FbGVtZW50LnByb3BlcnRpZXMuY29uY2F0KGltYWdlQnV0dG9uUHJvcGVydGllcykgfTtcclxuICAgIHJldHVybiBpbWFnZUJ1dHRvbkVsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlU291cmNlKG5vZGUpIHtcclxuICAgIHJldHVybiBgJHtub2RlLm5hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSwgdHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZywgdHJhbnNsYXRlRmlsbHNUb0ZpZ21hIH0gZnJvbSBcIi4uL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2V0SGV4Q29sb3JGcm9tRmlsbCwgdHJhbnNsYXRlRm9udFdlaWdodFRvRm9udEF0dHJpYnV0ZXMsIHRyYW5zbGF0ZUxldHRlclNwYWNpbmcsIHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkLCB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZSB9IGZyb20gXCIuLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChub2RlKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgbGV0IGJ1dHRvblByb3BlcnRpZXMgPSBbXTtcclxuICAgIGxldCBidXR0b25FbGVtZW50O1xyXG4gICAgaWYgKCdjaGlsZHJlbicgaW4gbm9kZSkge1xyXG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChjLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RFWFQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblByb3BlcnRpZXMgPSBidXR0b25Qcm9wZXJ0aWVzLmNvbmNhdCh0ZXh0UHJvcHMoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJhY2tncm91bmQsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVGaWxsc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJvcmRlckNvbG9yLCB2YWx1ZTogKF9iID0gdHJhbnNsYXRlU3Ryb2tlc1RvRmlnbWEobm9kZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdOb25lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkJvcmRlcldpZHRoLCB2YWx1ZTogdHJhbnNsYXRlU3Ryb2tlV2VpZ2h0KG5vZGUpIH0sXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ29ybmVyUmFkaXVzLCB2YWx1ZTogY2hlY2tDb3JuZXJSYWRpdXMobm9kZSkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkpIH0sXHJcbiAgICBdO1xyXG4gICAgYnV0dG9uUHJvcGVydGllcyA9IGJ1dHRvblByb3BlcnRpZXMuY29uY2F0KGZyYW1lUHJvcGVydGllcyk7XHJcbiAgICBidXR0b25FbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5CdXR0b24sIHByb3BlcnRpZXM6IGJ1dHRvblByb3BlcnRpZXMuY29uY2F0KFRyYW5zbGF0ZUNvbW1vblByb3BlcnRpZXMobm9kZSkpIH07XHJcbiAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlU3Ryb2tlc1RvRmlnbWEobm9kZSkge1xyXG4gICAgaWYgKCdzdHJva2VzJyBpbiBub2RlKSB7XHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlcyA9IG5vZGUuc3Ryb2tlcztcclxuICAgICAgICBpZiAoc3Ryb2tlcyAmJiBzdHJva2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3Ryb2tlcy5mb3JFYWNoKChzdHJva2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PT0gJ1NPTElEJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBTb2xpZCBQYWludFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkUGFpbnQgPSBzdHJva2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAjJHtzb2xpZFBhaW50LmNvbG9yLnJ9JHtzb2xpZFBhaW50LmNvbG9yLmd9JHtzb2xpZFBhaW50LmNvbG9yLmJ9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVN0cm9rZVdlaWdodChub2RlKSB7XHJcbiAgICBpZiAoJ3N0cm9rZVdlaWdodCcgaW4gbm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnN0cm9rZVdlaWdodC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdOb25lJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb3JuZXJSYWRpdXMobm9kZSkge1xyXG4gICAgaWYgKCdjb3JuZXJSYWRpdXMnIGluIG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZS5jb3JuZXJSYWRpdXMgIT09IHVuZGVmaW5lZCAmJiBub2RlLmNvcm5lclJhZGl1cyAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb3JuZXJSYWRpdXMudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ05vbmUnO1xyXG59XHJcbmZ1bmN0aW9uIHRleHRQcm9wcyhub2RlKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgbGV0IHRleHRQcm9wID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNoYXJhY3RlclNwYWNpbmcsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVMZXR0ZXJTcGFjaW5nKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250U2l6ZSwgdmFsdWU6IG5vZGUuZm9udFNpemUudG9TdHJpbmcoKSB9LFxyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHQsIHZhbHVlOiBub2RlLmNoYXJhY3RlcnMgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0Q29sb3IsIHZhbHVlOiAoX2IgPSBnZXRIZXhDb2xvckZyb21GaWxsKG5vZGUpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnTm9uZScgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250QXR0cmlidXRlcywgdmFsdWU6IHRyYW5zbGF0ZUZvbnRXZWlnaHRUb0ZvbnRBdHRyaWJ1dGVzKG5vZGUuZm9udFdlaWdodCkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250QXV0b1NjYWxpbmdFbmFibGVkLCB2YWx1ZTogdHJhbnNsYXRlVGV4dEF1dG9SZXNpemVUb0ZvbnRBdXRvU2NhbGluZ0VuYWJsZWQobm9kZS50ZXh0QXV0b1Jlc2l6ZSkgfSxcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lQnJlYWtNb2RlLCB2YWx1ZTogdHJhbnNsYXRlVGV4dFRydW5jYXRpb25Ub0xpbmVCcmVha01vZGUobm9kZS50ZXh0VHJ1bmNhdGlvbikgfSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gdGV4dFByb3A7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQ2hlY2tCb3hFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IGNoZWNrQm94UHJvcGVydGllcyA9IFtcclxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Jc0NoZWNrZWQsIHZhbHVlOiBcImZhbHNlXCIgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNoZWNrQm94RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQ2hlY2tCb3gsIHByb3BlcnRpZXM6IGNoZWNrQm94UHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcclxuICAgIHJldHVybiBjaGVja0JveEVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFZGl0b3JFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IGVkaXRvclByb3BlcnRpZXMgPSBbXTtcclxuICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkVkaXRvciwgcHJvcGVydGllczogZWRpdG9yUHJvcGVydGllcy5jb25jYXQoVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyhub2RlKSkgfTtcclxuICAgIHJldHVybiBlZGl0b3JFbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRW50cnlFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IGVudHJ5UHJvcGVydGllcyA9IFtdO1xyXG4gICAgY29uc3QgZW50cnlFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5FbnRyeSwgcHJvcGVydGllczogZW50cnlQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIGVudHJ5RWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XHJcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVTbGlkZXJFbGVtZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHNsaWRlclByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTWF4aW11bSwgdmFsdWU6IFwiMTBcIiB9XHJcbiAgICBdO1xyXG4gICAgY29uc3Qgc2xpZGVyRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuU2xpZGVyLCBwcm9wZXJ0aWVzOiBzbGlkZXJQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIHNsaWRlckVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlQ29tbW9uUHJvcGVydGllcyB9IGZyb20gXCIuLi9jb21tb25Qcm9wZXJ0eVBhcnNlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlU3dpdGNoRWxlbWVudChub2RlKSB7XHJcbiAgICBjb25zdCBzd2l0Y2hQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLklzVG9nZ2xlZCwgdmFsdWU6IFwiZmFsc2VcIiB9XHJcbiAgICBdO1xyXG4gICAgY29uc3Qgc3dpdGNoRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuU3dpdGNoLCBwcm9wZXJ0aWVzOiBzd2l0Y2hQcm9wZXJ0aWVzLmNvbmNhdChUcmFuc2xhdGVDb21tb25Qcm9wZXJ0aWVzKG5vZGUpKSB9O1xyXG4gICAgcmV0dXJuIHN3aXRjaEVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcclxuZXhwb3J0IGNsYXNzIEN1c3RvbUNvbnRyb2wge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbE5hbWUsIGJpbmRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnLz5cXG4nO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRvQ2FtZWxDYXNlKGNvbnRyb2xOYW1lKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0gYmluZGluZ3M7XHJcbiAgICAgICAgdGhpcy5zdGFydFRhZyA9IHRoaXMuRm9ybWF0U3RhcnRUYWcoKTtcclxuICAgIH1cclxuICAgIGdldFN0YXJ0VGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnICsgdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kVGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcclxuICAgIH1cclxuICAgIEZvcm1hdFN0YXJ0VGFnKCkge1xyXG4gICAgICAgIGxldCBzZXRCaW5kaW5ncyA9ICcnO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChiID0+IHNldEJpbmRpbmdzICsgYCR7Yi5uYW1lfSA9ICR7Yi52YWx1ZX1cXG5gKTtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxjb250cm9sOiR7dGhpcy5uYW1lfSAke3NldEJpbmRpbmdzfWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tIFwiLi4vY29tbW9uUHJvcGVydHlQYXJzZXJcIjtcclxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRFbmRUYWcgPSAnPic7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9ICcnO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRvQ2FtZWxDYXNlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydFRhZyA9IEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZW5kVGFnID0gJ1xcbjwvQ29udGVudFBhZ2U+JztcclxuICAgIH1cclxuICAgIGdldFN0YXJ0VGFnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnICsgdGhpcy5zdGFydEVuZFRhZztcclxuICAgIH1cclxuICAgIGdldEVuZFRhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmRUYWc7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQ29udHJvbChwYWdlKSB7XHJcbiAgICBwYWdlLnN0YXJ0VGFnID0gYCR7cGFnZS5zdGFydFRhZ31cclxuICAgICAgICAgICAgICAgICAgICB4bWxuczpjb250cm9scz1jbHItbmFtZXNwYWNlOkN1c3RvbUNvbnRyb2xzXFxuYDtcclxufVxyXG5mdW5jdGlvbiBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKSB7XHJcbiAgICByZXR1cm4gYDxDb250ZW50UGFnZSB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vZG90bmV0LzIwMjEvbWF1aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM6eD1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd2luZngvMjAwOS94YW1sXCJcclxuICAgICAgICAgICAgICAgICAgICB4OkNsYXNzPSR7Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHg6TmFtZT0ke2NsYXNzTmFtZX1cXG5gO1xyXG59XHJcbiIsImltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSBcIi4uL2NvbW1vblByb3BlcnR5UGFyc2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBDb250ZW50VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz4nO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSAnJztcclxuICAgICAgICB0aGlzLm5hbWUgPSB0b0NhbWVsQ2FzZShjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmVuZFRhZyA9ICdcXG48L0NvbnRlbnRWaWV3Pic7XHJcbiAgICB9XHJcbiAgICBnZXRTdGFydFRhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRhZyArIHRoaXMuc3RhcnRFbmRUYWc7XHJcbiAgICB9XHJcbiAgICBnZXRFbmRUYWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGFnO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAvL0NyZWF0ZSBhIGZvbGRlciB1bmRlciBSZXNvdXJjZXMgY2FsbGVkIFwiQ3VzdG9tQ29udHJvbHNcIiBhbmQgbWFrZSBhIG5ldyBcIkNvbnRlbnRWaWV3XCIgaW4gdGhlcmUgXHJcbiAgICA8Q29udGVudFZpZXcgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2RvdG5ldC8yMDIxL21hdWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zOng9XCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dpbmZ4LzIwMDkveGFtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeDpDbGFzcz1DdXN0b21Db250cm9scy4ke2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB4Ok5hbWU9JHtjbGFzc05hbWV9XFxuYDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFBhcnNlRmlnbWEgfSBmcm9tIFwiLi9YYW1sUGFyc2VyXCI7XHJcbi8vIHNyYy9wbHVnaW4udHNcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA2MDAsIGhlaWdodDogNDAwIH0pO1xyXG5mdW5jdGlvbiBtYWtlRGlzcGxheU5vZGUoX25vZGUpIHtcclxuICAgIHJldHVybiB7IG5hbWU6IF9ub2RlLm5hbWUsIHV0eXBlOiAnTm9uZScsIG5vZGU6IF9ub2RlIH07XHJcbn1cclxuZnVuY3Rpb24gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gW107XHJcbiAgICBjbi5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm4gPSB0cmF2ZXJzZShjKTtcclxuICAgICAgICBsaXN0LnB1c2gobm4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5mdW5jdGlvbiB0cmF2ZXJzZShjbikge1xyXG4gICAgY29uc3QgZG4gPSBtYWtlRGlzcGxheU5vZGUoY24pO1xyXG4gICAgY29uc3Qgbm4gPSB7XHJcbiAgICAgICAgcGFyZW50OiBkbixcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9O1xyXG4gICAgaWYgKCdjaGlsZHJlbicgaW4gY24pIHtcclxuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGNoaWxkcmVuLCB3ZSBtdXN0IGdvIHRocm91Z2ggdGhlbSBhbmQgbWFrZSB0aGVtIGludG8gbmVzdGVkIG5vZGVzXHJcbiAgICAgICAgbm4uY2hpbGRyZW4gPSBjaGlsZHJlblRvTmVzdGVkTm9kZXMoY24uY2hpbGRyZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5uO1xyXG59XHJcbmNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcclxuaWYgKHNlbGVjdGlvbiAhPT0gdW5kZWZpbmVkIHx8IG51bGwpIHtcclxuICAgIGNvbnN0IHJvb3ROb2RlID0gbWFrZURpc3BsYXlOb2RlKHNlbGVjdGlvbik7XHJcbiAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgaWYgKCdjaGlsZHJlbicgaW4gc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgc2VsZWN0aW9uLmNoaWxkcmVuLmZvckVhY2goYyA9PiBsaXN0LnB1c2goYykpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9kZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IHJvb3ROb2RlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGxpc3QpLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgbGV0IG5vZGVzMlBhcnNlID0gW107XHJcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6ICdpbml0Jywgbm9kZXMgfSk7XHJcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnb3QgdGhpcyBmcm9tIHRoZSBVSVwiLCBtZXNzYWdlKTtcclxuICAgICAgICBub2RlczJQYXJzZSA9IHVwZGF0ZURpc3BsYXlOb2RlVVR5cGUobm9kZXMsIG1lc3NhZ2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlOb2RlVVR5cGUoc2VsZWN0aW9uLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG1hcHBpbmcgb2YgQmFzZU5vZGUuaWQgdG8gc2VsZWN0ZWRWYWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlTWFwID0ge307XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZU1hcFtpdGVtLm5vZGUucGFyZW50Lm5vZGUuaWRdID0gaXRlbS5zZWxlY3RlZFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGFycmF5IHRvIGhvbGQgdGhlIHVwZGF0ZWQgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTZWxlY3Rpb24gPSBbXTtcclxuICAgICAgICAgICAgLy8gUmVjdXJzaXZlIGZ1bmN0aW9uIHRvIHVwZGF0ZSBub2Rlc1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZU1hcFtub2RlLnBhcmVudC5ub2RlLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSB3aXRoIHVwZGF0ZWQgdXR5cGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkUGFyZW50ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBub2RlLnBhcmVudCksIHsgdXR5cGU6IHNlbGVjdGVkVmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFyZW50OiB1cGRhdGVkUGFyZW50LCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB1cGRhdGVDaGlsZHJlbihjaGlsZCkpIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyB1cGRhdGUgaXMgbmVlZGVkLCByZXR1cm4gdGhlIG9yaWdpbmFsIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IG5vZGUucGFyZW50LCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB1cGRhdGVDaGlsZHJlbihjaGlsZCkpIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5kIHVwZGF0ZSBub2RlcyBiYXNlZCBvbiB0aGUgbWVzc2FnZVxyXG4gICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgobmVzdGVkTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZE5vZGUgPSB1cGRhdGVDaGlsZHJlbihuZXN0ZWROb2RlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb24ucHVzaCh1cGRhdGVkTm9kZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZFNlbGVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBQYXJzZUZpZ21hKG5vZGVzMlBhcnNlKTtcclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiZmlsZUluZm9cIiwgdGV4dENvbnRlbnQgfSk7XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==