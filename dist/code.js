/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Element.ts":
/*!************************!*\
  !*** ./src/Element.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementName: () => (/* binding */ ElementName)
/* harmony export */ });
var ElementName;
(function (ElementName) {
    ElementName[ElementName["Label"] = 0] = "Label";
    ElementName[ElementName["Button"] = 1] = "Button";
    ElementName[ElementName["Editor"] = 2] = "Editor";
    ElementName[ElementName["Entry"] = 3] = "Entry";
    ElementName[ElementName["StackFrame"] = 4] = "StackFrame";
    ElementName[ElementName["TextBlock"] = 5] = "TextBlock";
    ElementName[ElementName["TextBox"] = 6] = "TextBox";
    ElementName[ElementName["ComboBox"] = 7] = "ComboBox";
    ElementName[ElementName["ListBox"] = 8] = "ListBox";
    ElementName[ElementName["ListView"] = 9] = "ListView";
    ElementName[ElementName["RadioButton"] = 10] = "RadioButton";
    ElementName[ElementName["CheckBox"] = 11] = "CheckBox";
    ElementName[ElementName["Image"] = 12] = "Image";
    ElementName[ElementName["Border"] = 13] = "Border";
    ElementName[ElementName["ScrollViewer"] = 14] = "ScrollViewer";
    ElementName[ElementName["ProgressBar"] = 15] = "ProgressBar";
    ElementName[ElementName["Slider"] = 16] = "Slider";
    ElementName[ElementName["TabControl"] = 17] = "TabControl";
    ElementName[ElementName["TabItem"] = 18] = "TabItem";
    ElementName[ElementName["Menu"] = 19] = "Menu";
    ElementName[ElementName["MenuItem"] = 20] = "MenuItem";
    ElementName[ElementName["ContextMenu"] = 21] = "ContextMenu";
    ElementName[ElementName["Popup"] = 22] = "Popup";
    ElementName[ElementName["Rectangle"] = 23] = "Rectangle";
    ElementName[ElementName["Ellipse"] = 24] = "Ellipse";
    ElementName[ElementName["Polygon"] = 25] = "Polygon";
    ElementName[ElementName["Line"] = 26] = "Line";
    ElementName[ElementName["HorizontalStackLayout"] = 27] = "HorizontalStackLayout";
    ElementName[ElementName["VerticalStackLayout"] = 28] = "VerticalStackLayout";
    ElementName[ElementName["FlexLayout"] = 29] = "FlexLayout";
    ElementName[ElementName["Frame"] = 30] = "Frame";
})(ElementName || (ElementName = {}));


/***/ }),

/***/ "./src/Property.ts":
/*!*************************!*\
  !*** ./src/Property.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyName: () => (/* binding */ PropertyName)
/* harmony export */ });
var PropertyName;
(function (PropertyName) {
    //Common
    PropertyName[PropertyName["Width"] = 0] = "Width";
    PropertyName[PropertyName["Height"] = 1] = "Height";
    //Label
    PropertyName[PropertyName["CharacterSpacing"] = 2] = "CharacterSpacing";
    PropertyName[PropertyName["FontAttributes"] = 3] = "FontAttributes";
    PropertyName[PropertyName["FontAutoScalingEnabled"] = 4] = "FontAutoScalingEnabled";
    PropertyName[PropertyName["FontFamily"] = 5] = "FontFamily";
    PropertyName[PropertyName["FontSize"] = 6] = "FontSize";
    PropertyName[PropertyName["FormattedText"] = 7] = "FormattedText";
    PropertyName[PropertyName["HorizontalTextAlignment"] = 8] = "HorizontalTextAlignment";
    PropertyName[PropertyName["LineBreakMode"] = 9] = "LineBreakMode";
    PropertyName[PropertyName["LineHeight"] = 10] = "LineHeight";
    PropertyName[PropertyName["MaxLines"] = 11] = "MaxLines";
    PropertyName[PropertyName["Padding"] = 12] = "Padding";
    PropertyName[PropertyName["Text"] = 13] = "Text";
    PropertyName[PropertyName["TextColor"] = 14] = "TextColor";
    PropertyName[PropertyName["TextDecorations"] = 15] = "TextDecorations";
    PropertyName[PropertyName["TextTransform"] = 16] = "TextTransform";
    PropertyName[PropertyName["TextType"] = 17] = "TextType";
    PropertyName[PropertyName["VerticalTextAlignment"] = 18] = "VerticalTextAlignment";
    //Frame
    PropertyName[PropertyName["Spacing"] = 19] = "Spacing";
    //FlexLayout
    PropertyName[PropertyName["AlignContent"] = 20] = "AlignContent";
    PropertyName[PropertyName["AlignItems"] = 21] = "AlignItems";
    PropertyName[PropertyName["Direction"] = 22] = "Direction";
    PropertyName[PropertyName["JustifyContent"] = 23] = "JustifyContent";
    PropertyName[PropertyName["Position"] = 24] = "Position";
    PropertyName[PropertyName["Wrap"] = 25] = "Wrap";
    PropertyName[PropertyName["AlignSelf"] = 26] = "AlignSelf";
    PropertyName[PropertyName["Basis"] = 27] = "Basis";
    PropertyName[PropertyName["Grow"] = 28] = "Grow";
    PropertyName[PropertyName["Order"] = 29] = "Order";
    PropertyName[PropertyName["Shrink"] = 30] = "Shrink";
    //Polygon
    PropertyName[PropertyName["Points"] = 31] = "Points";
    PropertyName[PropertyName["Fill"] = 32] = "Fill";
    PropertyName[PropertyName["FillRule"] = 33] = "FillRule";
    PropertyName[PropertyName["Stroke"] = 34] = "Stroke";
    PropertyName[PropertyName["StrokeThickness"] = 35] = "StrokeThickness";
    //Line
    PropertyName[PropertyName["X1"] = 36] = "X1";
    PropertyName[PropertyName["X2"] = 37] = "X2";
    PropertyName[PropertyName["Y1"] = 38] = "Y1";
    PropertyName[PropertyName["Y2"] = 39] = "Y2";
    PropertyName[PropertyName["FontAttribute"] = 40] = "FontAttribute";
    PropertyName[PropertyName["BackgroundColor"] = 41] = "BackgroundColor";
    PropertyName[PropertyName["ForegroundColor"] = 42] = "ForegroundColor";
    PropertyName[PropertyName["Margin"] = 43] = "Margin";
    PropertyName[PropertyName["BorderColor"] = 44] = "BorderColor";
    PropertyName[PropertyName["BorderThickness"] = 45] = "BorderThickness";
    PropertyName[PropertyName["Visibility"] = 46] = "Visibility";
    PropertyName[PropertyName["IsEnabled"] = 47] = "IsEnabled";
    PropertyName[PropertyName["IsReadOnly"] = 48] = "IsReadOnly";
    PropertyName[PropertyName["FontWeight"] = 49] = "FontWeight";
    PropertyName[PropertyName["FontStyle"] = 50] = "FontStyle";
    PropertyName[PropertyName["TextAlignment"] = 51] = "TextAlignment";
    PropertyName[PropertyName["ImageSource"] = 52] = "ImageSource";
    PropertyName[PropertyName["Source"] = 53] = "Source";
    PropertyName[PropertyName["HorizontalAlignment"] = 54] = "HorizontalAlignment";
    PropertyName[PropertyName["VerticalAlignment"] = 55] = "VerticalAlignment";
    PropertyName[PropertyName["Opacity"] = 56] = "Opacity";
    PropertyName[PropertyName["Command"] = 57] = "Command";
    PropertyName[PropertyName["CommandParameter"] = 58] = "CommandParameter";
    PropertyName[PropertyName["IsChecked"] = 59] = "IsChecked";
    PropertyName[PropertyName["Content"] = 60] = "Content";
    PropertyName[PropertyName["Header"] = 61] = "Header";
    PropertyName[PropertyName["PlaceholderText"] = 62] = "PlaceholderText";
    PropertyName[PropertyName["PlaceholderTextColor"] = 63] = "PlaceholderTextColor";
    PropertyName[PropertyName["IsVisible"] = 64] = "IsVisible";
    PropertyName[PropertyName["IsFocused"] = 65] = "IsFocused";
    PropertyName[PropertyName["IsSelected"] = 66] = "IsSelected";
    PropertyName[PropertyName["ItemsSource"] = 67] = "ItemsSource";
    PropertyName[PropertyName["ItemTemplate"] = 68] = "ItemTemplate";
    PropertyName[PropertyName["Placeholder"] = 69] = "Placeholder";
    PropertyName[PropertyName["SelectedIndex"] = 70] = "SelectedIndex";
    PropertyName[PropertyName["Minimum"] = 71] = "Minimum";
    PropertyName[PropertyName["Maximum"] = 72] = "Maximum";
    PropertyName[PropertyName["Value"] = 73] = "Value";
    PropertyName[PropertyName["IsToggled"] = 74] = "IsToggled";
    PropertyName[PropertyName["CornerRadius"] = 75] = "CornerRadius";
    PropertyName[PropertyName["IsPassword"] = 76] = "IsPassword";
    PropertyName[PropertyName["IsReadOnlyCaretVisible"] = 77] = "IsReadOnlyCaretVisible";
    PropertyName[PropertyName["Items"] = 78] = "Items";
    PropertyName[PropertyName["IsOpen"] = 79] = "IsOpen";
    PropertyName[PropertyName["IsEditable"] = 80] = "IsEditable";
    PropertyName[PropertyName["DisplayMemberPath"] = 81] = "DisplayMemberPath";
    PropertyName[PropertyName["SelectedValue"] = 82] = "SelectedValue";
    PropertyName[PropertyName["SelectedValuePath"] = 83] = "SelectedValuePath";
    PropertyName[PropertyName["HeaderTemplate"] = 84] = "HeaderTemplate";
    PropertyName[PropertyName["FooterTemplate"] = 85] = "FooterTemplate";
    PropertyName[PropertyName["Icon"] = 86] = "Icon";
    PropertyName[PropertyName["IconSource"] = 87] = "IconSource";
    PropertyName[PropertyName["GroupName"] = 88] = "GroupName";
    PropertyName[PropertyName["CanUserSort"] = 89] = "CanUserSort";
    PropertyName[PropertyName["CanUserFilter"] = 90] = "CanUserFilter";
    PropertyName[PropertyName["Columns"] = 91] = "Columns";
    PropertyName[PropertyName["Rows"] = 92] = "Rows";
    PropertyName[PropertyName["ColumnDefinitions"] = 93] = "ColumnDefinitions";
    PropertyName[PropertyName["RowDefinitions"] = 94] = "RowDefinitions";
    PropertyName[PropertyName["CellPadding"] = 95] = "CellPadding";
    PropertyName[PropertyName["RowSpan"] = 96] = "RowSpan";
    PropertyName[PropertyName["ColumnSpan"] = 97] = "ColumnSpan";
    PropertyName[PropertyName["IsHeaderVisible"] = 98] = "IsHeaderVisible";
    PropertyName[PropertyName["IsSortable"] = 99] = "IsSortable";
    PropertyName[PropertyName["SortDirection"] = 100] = "SortDirection";
    PropertyName[PropertyName["GroupHeaderTemplate"] = 101] = "GroupHeaderTemplate";
    PropertyName[PropertyName["GroupFooterTemplate"] = 102] = "GroupFooterTemplate";
    PropertyName[PropertyName["GroupStyle"] = 103] = "GroupStyle";
    PropertyName[PropertyName["IsExpanded"] = 104] = "IsExpanded";
    PropertyName[PropertyName["ItemsPanel"] = 105] = "ItemsPanel";
    PropertyName[PropertyName["AlternatingRowColor"] = 106] = "AlternatingRowColor";
    PropertyName[PropertyName["ItemContainerStyle"] = 107] = "ItemContainerStyle";
    PropertyName[PropertyName["ItemContainerStyleSelector"] = 108] = "ItemContainerStyleSelector";
    PropertyName[PropertyName["ItemTemplateSelector"] = 109] = "ItemTemplateSelector";
    PropertyName[PropertyName["GroupHeaderStyle"] = 110] = "GroupHeaderStyle";
    PropertyName[PropertyName["GroupFooterStyle"] = 111] = "GroupFooterStyle";
    PropertyName[PropertyName["GroupFooterTemplateSelector"] = 112] = "GroupFooterTemplateSelector";
    PropertyName[PropertyName["ColumnHeaderStyle"] = 113] = "ColumnHeaderStyle";
    PropertyName[PropertyName["ColumnHeaderTemplateSelector"] = 114] = "ColumnHeaderTemplateSelector";
    PropertyName[PropertyName["FrozenColumnCount"] = 115] = "FrozenColumnCount";
    PropertyName[PropertyName["AutoGenerateColumns"] = 116] = "AutoGenerateColumns";
    PropertyName[PropertyName["ColumnsSource"] = 117] = "ColumnsSource";
    PropertyName[PropertyName["ColumnsWidth"] = 118] = "ColumnsWidth";
    PropertyName[PropertyName["SortMemberPath"] = 119] = "SortMemberPath";
    PropertyName[PropertyName["RowHeaderTemplate"] = 120] = "RowHeaderTemplate";
    PropertyName[PropertyName["RowHeaderStyle"] = 121] = "RowHeaderStyle";
    PropertyName[PropertyName["RowHeaderTemplateSelector"] = 122] = "RowHeaderTemplateSelector";
    PropertyName[PropertyName["AlternationCount"] = 123] = "AlternationCount";
    PropertyName[PropertyName["IsAlternatingRowColorEnabled"] = 124] = "IsAlternatingRowColorEnabled";
    PropertyName[PropertyName["IsItemClickEnabled"] = 125] = "IsItemClickEnabled";
    PropertyName[PropertyName["HorizontalScrollBarVisibility"] = 126] = "HorizontalScrollBarVisibility";
    PropertyName[PropertyName["VerticalScrollBarVisibility"] = 127] = "VerticalScrollBarVisibility";
    PropertyName[PropertyName["SelectionMode"] = 128] = "SelectionMode";
    PropertyName[PropertyName["SelectedItems"] = 129] = "SelectedItems";
    PropertyName[PropertyName["SelectedItem"] = 130] = "SelectedItem";
    PropertyName[PropertyName["ItemClick"] = 131] = "ItemClick";
    PropertyName[PropertyName["IsSticky"] = 132] = "IsSticky";
    PropertyName[PropertyName["IsPullToRefreshEnabled"] = 133] = "IsPullToRefreshEnabled";
    PropertyName[PropertyName["RefreshCommand"] = 134] = "RefreshCommand";
    PropertyName[PropertyName["IsPullToRefreshRefreshing"] = 135] = "IsPullToRefreshRefreshing";
    PropertyName[PropertyName["IsPullToRefreshRefreshingChanged"] = 136] = "IsPullToRefreshRefreshingChanged";
    PropertyName[PropertyName["IsLoadMoreEnabled"] = 137] = "IsLoadMoreEnabled";
    PropertyName[PropertyName["LoadMoreCommand"] = 138] = "LoadMoreCommand";
    PropertyName[PropertyName["IsLoadMoreLoading"] = 139] = "IsLoadMoreLoading";
    PropertyName[PropertyName["IsLoadMoreLoadingChanged"] = 140] = "IsLoadMoreLoadingChanged";
    PropertyName[PropertyName["ItemTapped"] = 141] = "ItemTapped";
    PropertyName[PropertyName["ItemSelected"] = 142] = "ItemSelected";
    PropertyName[PropertyName["ItemDoubleTapped"] = 143] = "ItemDoubleTapped";
    PropertyName[PropertyName["SwipeLeftCommand"] = 144] = "SwipeLeftCommand";
    PropertyName[PropertyName["SwipeRightCommand"] = 145] = "SwipeRightCommand";
    PropertyName[PropertyName["SwipeUpCommand"] = 146] = "SwipeUpCommand";
    PropertyName[PropertyName["SwipeDownCommand"] = 147] = "SwipeDownCommand";
    PropertyName[PropertyName["SwipeItems"] = 148] = "SwipeItems";
    PropertyName[PropertyName["IsRefreshing"] = 149] = "IsRefreshing";
    PropertyName[PropertyName["RefreshCommandParameter"] = 150] = "RefreshCommandParameter";
    PropertyName[PropertyName["RowHeight"] = 151] = "RowHeight";
    PropertyName[PropertyName["AutoGenerateItem"] = 152] = "AutoGenerateItem";
    PropertyName[PropertyName["ScrollMode"] = 153] = "ScrollMode";
    PropertyName[PropertyName["ScrollBarVisibility"] = 154] = "ScrollBarVisibility";
    PropertyName[PropertyName["ScrollTo"] = 155] = "ScrollTo";
    PropertyName[PropertyName["ScrollToRow"] = 156] = "ScrollToRow";
    PropertyName[PropertyName["ScrollToRowIndex"] = 157] = "ScrollToRowIndex";
    PropertyName[PropertyName["ScrollToColumn"] = 158] = "ScrollToColumn";
    PropertyName[PropertyName["ScrollToColumnIndex"] = 159] = "ScrollToColumnIndex";
    PropertyName[PropertyName["HeaderTemplateSelector"] = 160] = "HeaderTemplateSelector";
    PropertyName[PropertyName["FooterTemplateSelector"] = 161] = "FooterTemplateSelector";
    PropertyName[PropertyName["GroupHeaderTemplateSelector"] = 162] = "GroupHeaderTemplateSelector";
    PropertyName[PropertyName["RowHeightResizer"] = 163] = "RowHeightResizer";
    PropertyName[PropertyName["OnPullStarted"] = 164] = "OnPullStarted";
    PropertyName[PropertyName["OnPullDelta"] = 165] = "OnPullDelta";
    PropertyName[PropertyName["OnPullCompleted"] = 166] = "OnPullCompleted";
    PropertyName[PropertyName["OnPullContent"] = 167] = "OnPullContent";
    PropertyName[PropertyName["OnReleaseContent"] = 168] = "OnReleaseContent";
    PropertyName[PropertyName["OnSwipeStarted"] = 169] = "OnSwipeStarted";
    PropertyName[PropertyName["OnSwipeDelta"] = 170] = "OnSwipeDelta";
    PropertyName[PropertyName["OnSwipeCompleted"] = 171] = "OnSwipeCompleted";
    PropertyName[PropertyName["OnRevealing"] = 172] = "OnRevealing";
    PropertyName[PropertyName["OnSwipeEnded"] = 173] = "OnSwipeEnded";
    PropertyName[PropertyName["OnRevealed"] = 174] = "OnRevealed";
    PropertyName[PropertyName["OnExecute"] = 175] = "OnExecute";
    PropertyName[PropertyName["OnHiding"] = 176] = "OnHiding";
    PropertyName[PropertyName["OnHidden"] = 177] = "OnHidden";
    PropertyName[PropertyName["OnStateChange"] = 178] = "OnStateChange";
    PropertyName[PropertyName["AnimationDuration"] = 179] = "AnimationDuration";
    PropertyName[PropertyName["MaxTopOffset"] = 180] = "MaxTopOffset";
    PropertyName[PropertyName["MinTopOffset"] = 181] = "MinTopOffset";
    PropertyName[PropertyName["MinTopRevealed"] = 182] = "MinTopRevealed";
    PropertyName[PropertyName["MaxTopRevealed"] = 183] = "MaxTopRevealed";
    PropertyName[PropertyName["ContentTemplate"] = 184] = "ContentTemplate";
    PropertyName[PropertyName["ContentTemplateSelector"] = 185] = "ContentTemplateSelector";
    PropertyName[PropertyName["HorizontalOptions"] = 186] = "HorizontalOptions";
    PropertyName[PropertyName["VerticalOptions"] = 187] = "VerticalOptions";
    PropertyName[PropertyName["Rotation"] = 188] = "Rotation";
    PropertyName[PropertyName["Scale"] = 189] = "Scale";
    PropertyName[PropertyName["TranslationX"] = 190] = "TranslationX";
    PropertyName[PropertyName["TranslationY"] = 191] = "TranslationY";
    PropertyName[PropertyName["LayoutX"] = 192] = "LayoutX";
    PropertyName[PropertyName["LayoutY"] = 193] = "LayoutY";
    PropertyName[PropertyName["WidthRequest"] = 194] = "WidthRequest";
    PropertyName[PropertyName["HeightRequest"] = 195] = "HeightRequest";
    PropertyName[PropertyName["MinimumWidthRequest"] = 196] = "MinimumWidthRequest";
    PropertyName[PropertyName["MinimumHeightRequest"] = 197] = "MinimumHeightRequest";
    PropertyName[PropertyName["AnchorX"] = 198] = "AnchorX";
    PropertyName[PropertyName["AnchorY"] = 199] = "AnchorY";
    PropertyName[PropertyName["RotationX"] = 200] = "RotationX";
    PropertyName[PropertyName["RotationY"] = 201] = "RotationY";
    PropertyName[PropertyName["ScaleX"] = 202] = "ScaleX";
    PropertyName[PropertyName["ScaleY"] = 203] = "ScaleY";
    PropertyName[PropertyName["PlatformConfiguration"] = 204] = "PlatformConfiguration";
    PropertyName[PropertyName["MarginConstraints"] = 205] = "MarginConstraints";
    PropertyName[PropertyName["GestureRecognizers"] = 206] = "GestureRecognizers";
    PropertyName[PropertyName["Behavior"] = 207] = "Behavior";
    PropertyName[PropertyName["Triggers"] = 208] = "Triggers";
    PropertyName[PropertyName["ClassId"] = 209] = "ClassId";
    PropertyName[PropertyName["StyleId"] = 210] = "StyleId";
    PropertyName[PropertyName["FlowDirection"] = 211] = "FlowDirection";
    PropertyName[PropertyName["InputTransparent"] = 212] = "InputTransparent";
    PropertyName[PropertyName["IsVisibleBackgroundColor"] = 213] = "IsVisibleBackgroundColor";
    PropertyName[PropertyName["IsVisibleBorderColor"] = 214] = "IsVisibleBorderColor";
    PropertyName[PropertyName["IsVisibleCornerRadius"] = 215] = "IsVisibleCornerRadius";
    PropertyName[PropertyName["IsVisibleElevation"] = 216] = "IsVisibleElevation";
    PropertyName[PropertyName["IsVisiblePadding"] = 217] = "IsVisiblePadding";
    PropertyName[PropertyName["IsVisiblePlaceholder"] = 218] = "IsVisiblePlaceholder";
    PropertyName[PropertyName["IsVisibleSeparatorColor"] = 219] = "IsVisibleSeparatorColor";
    PropertyName[PropertyName["IsVisibleSeparatorWidth"] = 220] = "IsVisibleSeparatorWidth";
    PropertyName[PropertyName["IsVisibleShadow"] = 221] = "IsVisibleShadow";
    PropertyName[PropertyName["IsVisibleStroke"] = 222] = "IsVisibleStroke";
    PropertyName[PropertyName["IsVisibleTextColor"] = 223] = "IsVisibleTextColor";
    PropertyName[PropertyName["IsVisibleTextDecorations"] = 224] = "IsVisibleTextDecorations";
    PropertyName[PropertyName["IsVisibleTranslationX"] = 225] = "IsVisibleTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationY"] = 226] = "IsVisibleTranslationY";
    PropertyName[PropertyName["IsVisibleRotation"] = 227] = "IsVisibleRotation";
    PropertyName[PropertyName["IsVisibleScale"] = 228] = "IsVisibleScale";
    PropertyName[PropertyName["IsVisibleHeightRequest"] = 229] = "IsVisibleHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequest"] = 230] = "IsVisibleWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequest"] = 231] = "IsVisibleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequest"] = 232] = "IsVisibleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMargin"] = 233] = "IsVisibleMargin";
    PropertyName[PropertyName["IsVisiblePaddingConstraints"] = 234] = "IsVisiblePaddingConstraints";
    PropertyName[PropertyName["IsVisibleRowSpacing"] = 235] = "IsVisibleRowSpacing";
    PropertyName[PropertyName["IsVisibleColumnSpacing"] = 236] = "IsVisibleColumnSpacing";
    PropertyName[PropertyName["IsVisibleBackgroundColorOpacity"] = 237] = "IsVisibleBackgroundColorOpacity";
    PropertyName[PropertyName["IsVisibleBorderColorOpacity"] = 238] = "IsVisibleBorderColorOpacity";
    PropertyName[PropertyName["IsVisibleSeparatorColorOpacity"] = 239] = "IsVisibleSeparatorColorOpacity";
    PropertyName[PropertyName["IsVisibleShadowOpacity"] = 240] = "IsVisibleShadowOpacity";
    PropertyName[PropertyName["IsVisibleTextColorOpacity"] = 241] = "IsVisibleTextColorOpacity";
    PropertyName[PropertyName["IsVisibleTranslationXOpacity"] = 242] = "IsVisibleTranslationXOpacity";
    PropertyName[PropertyName["IsVisibleTranslationYOpacity"] = 243] = "IsVisibleTranslationYOpacity";
    PropertyName[PropertyName["IsVisibleRotationOpacity"] = 244] = "IsVisibleRotationOpacity";
    PropertyName[PropertyName["IsVisibleScaleOpacity"] = 245] = "IsVisibleScaleOpacity";
    PropertyName[PropertyName["IsVisibleHeightRequestOpacity"] = 246] = "IsVisibleHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleWidthRequestOpacity"] = 247] = "IsVisibleWidthRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestOpacity"] = 248] = "IsVisibleMinimumHeightRequestOpacity";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestOpacity"] = 249] = "IsVisibleMinimumWidthRequestOpacity";
    PropertyName[PropertyName["IsVisibleMarginOpacity"] = 250] = "IsVisibleMarginOpacity";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsOpacity"] = 251] = "IsVisiblePaddingConstraintsOpacity";
    PropertyName[PropertyName["IsVisibleRowSpacingOpacity"] = 252] = "IsVisibleRowSpacingOpacity";
    PropertyName[PropertyName["IsVisibleColumnSpacingOpacity"] = 253] = "IsVisibleColumnSpacingOpacity";
    PropertyName[PropertyName["IsEditableLayout"] = 254] = "IsEditableLayout";
    PropertyName[PropertyName["IsEnabledOpacity"] = 255] = "IsEnabledOpacity";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotation"] = 256] = "IsVisibleBackgroundColorRotation";
    PropertyName[PropertyName["IsVisibleBorderColorRotation"] = 257] = "IsVisibleBorderColorRotation";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotation"] = 258] = "IsVisibleCornerRadiusRotation";
    PropertyName[PropertyName["IsVisibleElevationRotation"] = 259] = "IsVisibleElevationRotation";
    PropertyName[PropertyName["IsVisiblePaddingRotation"] = 260] = "IsVisiblePaddingRotation";
    PropertyName[PropertyName["IsVisiblePlaceholderRotation"] = 261] = "IsVisiblePlaceholderRotation";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotation"] = 262] = "IsVisibleSeparatorColorRotation";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotation"] = 263] = "IsVisibleSeparatorWidthRotation";
    PropertyName[PropertyName["IsVisibleShadowRotation"] = 264] = "IsVisibleShadowRotation";
    PropertyName[PropertyName["IsVisibleStrokeRotation"] = 265] = "IsVisibleStrokeRotation";
    PropertyName[PropertyName["IsVisibleTextColorRotation"] = 266] = "IsVisibleTextColorRotation";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotation"] = 267] = "IsVisibleTextDecorationsRotation";
    PropertyName[PropertyName["IsVisibleTranslationXRotation"] = 268] = "IsVisibleTranslationXRotation";
    PropertyName[PropertyName["IsVisibleTranslationYRotation"] = 269] = "IsVisibleTranslationYRotation";
    PropertyName[PropertyName["IsVisibleRotationRotation"] = 270] = "IsVisibleRotationRotation";
    PropertyName[PropertyName["IsVisibleScaleRotation"] = 271] = "IsVisibleScaleRotation";
    PropertyName[PropertyName["IsVisibleHeightRequestRotation"] = 272] = "IsVisibleHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleWidthRequestRotation"] = 273] = "IsVisibleWidthRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotation"] = 274] = "IsVisibleMinimumHeightRequestRotation";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotation"] = 275] = "IsVisibleMinimumWidthRequestRotation";
    PropertyName[PropertyName["IsVisibleMarginRotation"] = 276] = "IsVisibleMarginRotation";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotation"] = 277] = "IsVisiblePaddingConstraintsRotation";
    PropertyName[PropertyName["IsVisibleRowSpacingRotation"] = 278] = "IsVisibleRowSpacingRotation";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotation"] = 279] = "IsVisibleColumnSpacingRotation";
    PropertyName[PropertyName["IsVisibleBackgroundColorScale"] = 280] = "IsVisibleBackgroundColorScale";
    PropertyName[PropertyName["IsVisibleBorderColorScale"] = 281] = "IsVisibleBorderColorScale";
    PropertyName[PropertyName["IsVisibleCornerRadiusScale"] = 282] = "IsVisibleCornerRadiusScale";
    PropertyName[PropertyName["IsVisibleElevationScale"] = 283] = "IsVisibleElevationScale";
    PropertyName[PropertyName["IsVisiblePaddingScale"] = 284] = "IsVisiblePaddingScale";
    PropertyName[PropertyName["IsVisiblePlaceholderScale"] = 285] = "IsVisiblePlaceholderScale";
    PropertyName[PropertyName["IsVisibleSeparatorColorScale"] = 286] = "IsVisibleSeparatorColorScale";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScale"] = 287] = "IsVisibleSeparatorWidthScale";
    PropertyName[PropertyName["IsVisibleShadowScale"] = 288] = "IsVisibleShadowScale";
    PropertyName[PropertyName["IsVisibleStrokeScale"] = 289] = "IsVisibleStrokeScale";
    PropertyName[PropertyName["IsVisibleTextColorScale"] = 290] = "IsVisibleTextColorScale";
    PropertyName[PropertyName["IsVisibleTextDecorationsScale"] = 291] = "IsVisibleTextDecorationsScale";
    PropertyName[PropertyName["IsVisibleTranslationXScale"] = 292] = "IsVisibleTranslationXScale";
    PropertyName[PropertyName["IsVisibleTranslationYScale"] = 293] = "IsVisibleTranslationYScale";
    PropertyName[PropertyName["IsVisibleRotationScale"] = 294] = "IsVisibleRotationScale";
    PropertyName[PropertyName["IsVisibleScaleScale"] = 295] = "IsVisibleScaleScale";
    PropertyName[PropertyName["IsVisibleHeightRequestScale"] = 296] = "IsVisibleHeightRequestScale";
    PropertyName[PropertyName["IsVisibleWidthRequestScale"] = 297] = "IsVisibleWidthRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScale"] = 298] = "IsVisibleMinimumHeightRequestScale";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScale"] = 299] = "IsVisibleMinimumWidthRequestScale";
    PropertyName[PropertyName["IsVisibleMarginScale"] = 300] = "IsVisibleMarginScale";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScale"] = 301] = "IsVisiblePaddingConstraintsScale";
    PropertyName[PropertyName["IsVisibleRowSpacingScale"] = 302] = "IsVisibleRowSpacingScale";
    PropertyName[PropertyName["IsVisibleColumnSpacingScale"] = 303] = "IsVisibleColumnSpacingScale";
    PropertyName[PropertyName["IsEnabledScale"] = 304] = "IsEnabledScale";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleX"] = 305] = "IsVisibleBackgroundColorScaleX";
    PropertyName[PropertyName["IsVisibleBorderColorScaleX"] = 306] = "IsVisibleBorderColorScaleX";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleX"] = 307] = "IsVisibleCornerRadiusScaleX";
    PropertyName[PropertyName["IsVisibleElevationScaleX"] = 308] = "IsVisibleElevationScaleX";
    PropertyName[PropertyName["IsVisiblePaddingScaleX"] = 309] = "IsVisiblePaddingScaleX";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleX"] = 310] = "IsVisiblePlaceholderScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleX"] = 311] = "IsVisibleSeparatorColorScaleX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleX"] = 312] = "IsVisibleSeparatorWidthScaleX";
    PropertyName[PropertyName["IsVisibleShadowScaleX"] = 313] = "IsVisibleShadowScaleX";
    PropertyName[PropertyName["IsVisibleStrokeScaleX"] = 314] = "IsVisibleStrokeScaleX";
    PropertyName[PropertyName["IsVisibleTextColorScaleX"] = 315] = "IsVisibleTextColorScaleX";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleX"] = 316] = "IsVisibleTextDecorationsScaleX";
    PropertyName[PropertyName["IsVisibleTranslationXScaleX"] = 317] = "IsVisibleTranslationXScaleX";
    PropertyName[PropertyName["IsVisibleTranslationYScaleX"] = 318] = "IsVisibleTranslationYScaleX";
    PropertyName[PropertyName["IsVisibleRotationScaleX"] = 319] = "IsVisibleRotationScaleX";
    PropertyName[PropertyName["IsVisibleScaleScaleX"] = 320] = "IsVisibleScaleScaleX";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleX"] = 321] = "IsVisibleHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleX"] = 322] = "IsVisibleWidthRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleX"] = 323] = "IsVisibleMinimumHeightRequestScaleX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleX"] = 324] = "IsVisibleMinimumWidthRequestScaleX";
    PropertyName[PropertyName["IsVisibleMarginScaleX"] = 325] = "IsVisibleMarginScaleX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleX"] = 326] = "IsVisiblePaddingConstraintsScaleX";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleX"] = 327] = "IsVisibleRowSpacingScaleX";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleX"] = 328] = "IsVisibleColumnSpacingScaleX";
    PropertyName[PropertyName["IsEnabledScaleX"] = 329] = "IsEnabledScaleX";
    PropertyName[PropertyName["IsVisibleBackgroundColorScaleY"] = 330] = "IsVisibleBackgroundColorScaleY";
    PropertyName[PropertyName["IsVisibleBorderColorScaleY"] = 331] = "IsVisibleBorderColorScaleY";
    PropertyName[PropertyName["IsVisibleCornerRadiusScaleY"] = 332] = "IsVisibleCornerRadiusScaleY";
    PropertyName[PropertyName["IsVisibleElevationScaleY"] = 333] = "IsVisibleElevationScaleY";
    PropertyName[PropertyName["IsVisiblePaddingScaleY"] = 334] = "IsVisiblePaddingScaleY";
    PropertyName[PropertyName["IsVisiblePlaceholderScaleY"] = 335] = "IsVisiblePlaceholderScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorColorScaleY"] = 336] = "IsVisibleSeparatorColorScaleY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthScaleY"] = 337] = "IsVisibleSeparatorWidthScaleY";
    PropertyName[PropertyName["IsVisibleShadowScaleY"] = 338] = "IsVisibleShadowScaleY";
    PropertyName[PropertyName["IsVisibleStrokeScaleY"] = 339] = "IsVisibleStrokeScaleY";
    PropertyName[PropertyName["IsVisibleTextColorScaleY"] = 340] = "IsVisibleTextColorScaleY";
    PropertyName[PropertyName["IsVisibleTextDecorationsScaleY"] = 341] = "IsVisibleTextDecorationsScaleY";
    PropertyName[PropertyName["IsVisibleTranslationXScaleY"] = 342] = "IsVisibleTranslationXScaleY";
    PropertyName[PropertyName["IsVisibleTranslationYScaleY"] = 343] = "IsVisibleTranslationYScaleY";
    PropertyName[PropertyName["IsVisibleRotationScaleY"] = 344] = "IsVisibleRotationScaleY";
    PropertyName[PropertyName["IsVisibleScaleScaleY"] = 345] = "IsVisibleScaleScaleY";
    PropertyName[PropertyName["IsVisibleHeightRequestScaleY"] = 346] = "IsVisibleHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleWidthRequestScaleY"] = 347] = "IsVisibleWidthRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestScaleY"] = 348] = "IsVisibleMinimumHeightRequestScaleY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestScaleY"] = 349] = "IsVisibleMinimumWidthRequestScaleY";
    PropertyName[PropertyName["IsVisibleMarginScaleY"] = 350] = "IsVisibleMarginScaleY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsScaleY"] = 351] = "IsVisiblePaddingConstraintsScaleY";
    PropertyName[PropertyName["IsVisibleRowSpacingScaleY"] = 352] = "IsVisibleRowSpacingScaleY";
    PropertyName[PropertyName["IsVisibleColumnSpacingScaleY"] = 353] = "IsVisibleColumnSpacingScaleY";
    PropertyName[PropertyName["IsEnabledScaleY"] = 354] = "IsEnabledScaleY";
    PropertyName[PropertyName["IsVisibleBackgroundColorTranslationX"] = 355] = "IsVisibleBackgroundColorTranslationX";
    PropertyName[PropertyName["IsVisibleBorderColorTranslationX"] = 356] = "IsVisibleBorderColorTranslationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusTranslationX"] = 357] = "IsVisibleCornerRadiusTranslationX";
    PropertyName[PropertyName["IsVisibleElevationTranslationX"] = 358] = "IsVisibleElevationTranslationX";
    PropertyName[PropertyName["IsVisiblePaddingTranslationX"] = 359] = "IsVisiblePaddingTranslationX";
    PropertyName[PropertyName["IsVisiblePlaceholderTranslationX"] = 360] = "IsVisiblePlaceholderTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorTranslationX"] = 361] = "IsVisibleSeparatorColorTranslationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthTranslationX"] = 362] = "IsVisibleSeparatorWidthTranslationX";
    PropertyName[PropertyName["IsVisibleShadowTranslationX"] = 363] = "IsVisibleShadowTranslationX";
    PropertyName[PropertyName["IsVisibleStrokeTranslationX"] = 364] = "IsVisibleStrokeTranslationX";
    PropertyName[PropertyName["IsVisibleTextColorTranslationX"] = 365] = "IsVisibleTextColorTranslationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsTranslationX"] = 366] = "IsVisibleTextDecorationsTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationXTranslationX"] = 367] = "IsVisibleTranslationXTranslationX";
    PropertyName[PropertyName["IsVisibleTranslationYTranslationX"] = 368] = "IsVisibleTranslationYTranslationX";
    PropertyName[PropertyName["IsVisibleRotationTranslationX"] = 369] = "IsVisibleRotationTranslationX";
    PropertyName[PropertyName["IsVisibleScaleTranslationX"] = 370] = "IsVisibleScaleTranslationX";
    PropertyName[PropertyName["IsVisibleHeightRequestTranslationX"] = 371] = "IsVisibleHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleWidthRequestTranslationX"] = 372] = "IsVisibleWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestTranslationX"] = 373] = "IsVisibleMinimumHeightRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestTranslationX"] = 374] = "IsVisibleMinimumWidthRequestTranslationX";
    PropertyName[PropertyName["IsVisibleMarginTranslationX"] = 375] = "IsVisibleMarginTranslationX";
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
    PropertyName[PropertyName["IsVisibleMarginTranslationY"] = 400] = "IsVisibleMarginTranslationY";
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
    PropertyName[PropertyName["IsVisibleMarginLayoutX"] = 425] = "IsVisibleMarginLayoutX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsLayoutX"] = 426] = "IsVisiblePaddingConstraintsLayoutX";
    PropertyName[PropertyName["IsVisibleRowSpacingLayoutX"] = 427] = "IsVisibleRowSpacingLayoutX";
    PropertyName[PropertyName["IsVisibleColumnSpacingLayoutX"] = 428] = "IsVisibleColumnSpacingLayoutX";
    PropertyName[PropertyName["IsEnabledLayoutX"] = 429] = "IsEnabledLayoutX";
    PropertyName[PropertyName["IsVisibleBackgroundColorLayoutY"] = 430] = "IsVisibleBackgroundColorLayoutY";
    PropertyName[PropertyName["IsVisibleBorderColorLayoutY"] = 431] = "IsVisibleBorderColorLayoutY";
    PropertyName[PropertyName["IsVisibleCornerRadiusLayoutY"] = 432] = "IsVisibleCornerRadiusLayoutY";
    PropertyName[PropertyName["IsVisibleElevationLayoutY"] = 433] = "IsVisibleElevationLayoutY";
    PropertyName[PropertyName["IsVisiblePaddingLayoutY"] = 434] = "IsVisiblePaddingLayoutY";
    PropertyName[PropertyName["IsVisiblePlaceholderLayoutY"] = 435] = "IsVisiblePlaceholderLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorColorLayoutY"] = 436] = "IsVisibleSeparatorColorLayoutY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthLayoutY"] = 437] = "IsVisibleSeparatorWidthLayoutY";
    PropertyName[PropertyName["IsVisibleShadowLayoutY"] = 438] = "IsVisibleShadowLayoutY";
    PropertyName[PropertyName["IsVisibleStrokeLayoutY"] = 439] = "IsVisibleStrokeLayoutY";
    PropertyName[PropertyName["IsVisibleTextColorLayoutY"] = 440] = "IsVisibleTextColorLayoutY";
    PropertyName[PropertyName["IsVisibleTextDecorationsLayoutY"] = 441] = "IsVisibleTextDecorationsLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationXLayoutY"] = 442] = "IsVisibleTranslationXLayoutY";
    PropertyName[PropertyName["IsVisibleTranslationYLayoutY"] = 443] = "IsVisibleTranslationYLayoutY";
    PropertyName[PropertyName["IsVisibleRotationLayoutY"] = 444] = "IsVisibleRotationLayoutY";
    PropertyName[PropertyName["IsVisibleScaleLayoutY"] = 445] = "IsVisibleScaleLayoutY";
    PropertyName[PropertyName["IsVisibleHeightRequestLayoutY"] = 446] = "IsVisibleHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleWidthRequestLayoutY"] = 447] = "IsVisibleWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestLayoutY"] = 448] = "IsVisibleMinimumHeightRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestLayoutY"] = 449] = "IsVisibleMinimumWidthRequestLayoutY";
    PropertyName[PropertyName["IsVisibleMarginLayoutY"] = 450] = "IsVisibleMarginLayoutY";
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
    PropertyName[PropertyName["IsVisibleMarginWidthRequest"] = 475] = "IsVisibleMarginWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsWidthRequest"] = 476] = "IsVisiblePaddingConstraintsWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingWidthRequest"] = 477] = "IsVisibleRowSpacingWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingWidthRequest"] = 478] = "IsVisibleColumnSpacingWidthRequest";
    PropertyName[PropertyName["IsEnabledWidthRequest"] = 479] = "IsEnabledWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorHeightRequest"] = 480] = "IsVisibleBackgroundColorHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorHeightRequest"] = 481] = "IsVisibleBorderColorHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusHeightRequest"] = 482] = "IsVisibleCornerRadiusHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationHeightRequest"] = 483] = "IsVisibleElevationHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingHeightRequest"] = 484] = "IsVisiblePaddingHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderHeightRequest"] = 485] = "IsVisiblePlaceholderHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorHeightRequest"] = 486] = "IsVisibleSeparatorColorHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthHeightRequest"] = 487] = "IsVisibleSeparatorWidthHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowHeightRequest"] = 488] = "IsVisibleShadowHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeHeightRequest"] = 489] = "IsVisibleStrokeHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorHeightRequest"] = 490] = "IsVisibleTextColorHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsHeightRequest"] = 491] = "IsVisibleTextDecorationsHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXHeightRequest"] = 492] = "IsVisibleTranslationXHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYHeightRequest"] = 493] = "IsVisibleTranslationYHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationHeightRequest"] = 494] = "IsVisibleRotationHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleHeightRequest"] = 495] = "IsVisibleScaleHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestHeightRequest"] = 496] = "IsVisibleHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestHeightRequest"] = 497] = "IsVisibleWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestHeightRequest"] = 498] = "IsVisibleMinimumHeightRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestHeightRequest"] = 499] = "IsVisibleMinimumWidthRequestHeightRequest";
    PropertyName[PropertyName["IsVisibleMarginHeightRequest"] = 500] = "IsVisibleMarginHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsHeightRequest"] = 501] = "IsVisiblePaddingConstraintsHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingHeightRequest"] = 502] = "IsVisibleRowSpacingHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingHeightRequest"] = 503] = "IsVisibleColumnSpacingHeightRequest";
    PropertyName[PropertyName["IsEnabledHeightRequest"] = 504] = "IsEnabledHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumHeightRequest"] = 505] = "IsVisibleBackgroundColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumHeightRequest"] = 506] = "IsVisibleBorderColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumHeightRequest"] = 507] = "IsVisibleCornerRadiusMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumHeightRequest"] = 508] = "IsVisibleElevationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumHeightRequest"] = 509] = "IsVisiblePaddingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumHeightRequest"] = 510] = "IsVisiblePlaceholderMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumHeightRequest"] = 511] = "IsVisibleSeparatorColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumHeightRequest"] = 512] = "IsVisibleSeparatorWidthMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumHeightRequest"] = 513] = "IsVisibleShadowMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumHeightRequest"] = 514] = "IsVisibleStrokeMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumHeightRequest"] = 515] = "IsVisibleTextColorMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumHeightRequest"] = 516] = "IsVisibleTextDecorationsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumHeightRequest"] = 517] = "IsVisibleTranslationXMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumHeightRequest"] = 518] = "IsVisibleTranslationYMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumHeightRequest"] = 519] = "IsVisibleRotationMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumHeightRequest"] = 520] = "IsVisibleScaleMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumHeightRequest"] = 521] = "IsVisibleHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumHeightRequest"] = 522] = "IsVisibleWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumHeightRequest"] = 523] = "IsVisibleMinimumHeightRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumHeightRequest"] = 524] = "IsVisibleMinimumWidthRequestMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleMarginMinimumHeightRequest"] = 525] = "IsVisibleMarginMinimumHeightRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumHeightRequest"] = 526] = "IsVisiblePaddingConstraintsMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumHeightRequest"] = 527] = "IsVisibleRowSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumHeightRequest"] = 528] = "IsVisibleColumnSpacingMinimumHeightRequest";
    PropertyName[PropertyName["IsEnabledMinimumHeightRequest"] = 529] = "IsEnabledMinimumHeightRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorMinimumWidthRequest"] = 530] = "IsVisibleBackgroundColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBorderColorMinimumWidthRequest"] = 531] = "IsVisibleBorderColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleCornerRadiusMinimumWidthRequest"] = 532] = "IsVisibleCornerRadiusMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleElevationMinimumWidthRequest"] = 533] = "IsVisibleElevationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingMinimumWidthRequest"] = 534] = "IsVisiblePaddingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePlaceholderMinimumWidthRequest"] = 535] = "IsVisiblePlaceholderMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorColorMinimumWidthRequest"] = 536] = "IsVisibleSeparatorColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleSeparatorWidthMinimumWidthRequest"] = 537] = "IsVisibleSeparatorWidthMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleShadowMinimumWidthRequest"] = 538] = "IsVisibleShadowMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleStrokeMinimumWidthRequest"] = 539] = "IsVisibleStrokeMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextColorMinimumWidthRequest"] = 540] = "IsVisibleTextColorMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTextDecorationsMinimumWidthRequest"] = 541] = "IsVisibleTextDecorationsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationXMinimumWidthRequest"] = 542] = "IsVisibleTranslationXMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleTranslationYMinimumWidthRequest"] = 543] = "IsVisibleTranslationYMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRotationMinimumWidthRequest"] = 544] = "IsVisibleRotationMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleScaleMinimumWidthRequest"] = 545] = "IsVisibleScaleMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleHeightRequestMinimumWidthRequest"] = 546] = "IsVisibleHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleWidthRequestMinimumWidthRequest"] = 547] = "IsVisibleWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestMinimumWidthRequest"] = 548] = "IsVisibleMinimumHeightRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestMinimumWidthRequest"] = 549] = "IsVisibleMinimumWidthRequestMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleMarginMinimumWidthRequest"] = 550] = "IsVisibleMarginMinimumWidthRequest";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsMinimumWidthRequest"] = 551] = "IsVisiblePaddingConstraintsMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleRowSpacingMinimumWidthRequest"] = 552] = "IsVisibleRowSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleColumnSpacingMinimumWidthRequest"] = 553] = "IsVisibleColumnSpacingMinimumWidthRequest";
    PropertyName[PropertyName["IsEnabledMinimumWidthRequest"] = 554] = "IsEnabledMinimumWidthRequest";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorX"] = 555] = "IsVisibleBackgroundColorAnchorX";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorX"] = 556] = "IsVisibleBorderColorAnchorX";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorX"] = 557] = "IsVisibleCornerRadiusAnchorX";
    PropertyName[PropertyName["IsVisibleElevationAnchorX"] = 558] = "IsVisibleElevationAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingAnchorX"] = 559] = "IsVisiblePaddingAnchorX";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorX"] = 560] = "IsVisiblePlaceholderAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorX"] = 561] = "IsVisibleSeparatorColorAnchorX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorX"] = 562] = "IsVisibleSeparatorWidthAnchorX";
    PropertyName[PropertyName["IsVisibleShadowAnchorX"] = 563] = "IsVisibleShadowAnchorX";
    PropertyName[PropertyName["IsVisibleStrokeAnchorX"] = 564] = "IsVisibleStrokeAnchorX";
    PropertyName[PropertyName["IsVisibleTextColorAnchorX"] = 565] = "IsVisibleTextColorAnchorX";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorX"] = 566] = "IsVisibleTextDecorationsAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorX"] = 567] = "IsVisibleTranslationXAnchorX";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorX"] = 568] = "IsVisibleTranslationYAnchorX";
    PropertyName[PropertyName["IsVisibleRotationAnchorX"] = 569] = "IsVisibleRotationAnchorX";
    PropertyName[PropertyName["IsVisibleScaleAnchorX"] = 570] = "IsVisibleScaleAnchorX";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorX"] = 571] = "IsVisibleHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorX"] = 572] = "IsVisibleWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorX"] = 573] = "IsVisibleMinimumHeightRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorX"] = 574] = "IsVisibleMinimumWidthRequestAnchorX";
    PropertyName[PropertyName["IsVisibleMarginAnchorX"] = 575] = "IsVisibleMarginAnchorX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorX"] = 576] = "IsVisiblePaddingConstraintsAnchorX";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorX"] = 577] = "IsVisibleRowSpacingAnchorX";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorX"] = 578] = "IsVisibleColumnSpacingAnchorX";
    PropertyName[PropertyName["IsEnabledAnchorX"] = 579] = "IsEnabledAnchorX";
    PropertyName[PropertyName["IsVisibleBackgroundColorAnchorY"] = 580] = "IsVisibleBackgroundColorAnchorY";
    PropertyName[PropertyName["IsVisibleBorderColorAnchorY"] = 581] = "IsVisibleBorderColorAnchorY";
    PropertyName[PropertyName["IsVisibleCornerRadiusAnchorY"] = 582] = "IsVisibleCornerRadiusAnchorY";
    PropertyName[PropertyName["IsVisibleElevationAnchorY"] = 583] = "IsVisibleElevationAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingAnchorY"] = 584] = "IsVisiblePaddingAnchorY";
    PropertyName[PropertyName["IsVisiblePlaceholderAnchorY"] = 585] = "IsVisiblePlaceholderAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorColorAnchorY"] = 586] = "IsVisibleSeparatorColorAnchorY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthAnchorY"] = 587] = "IsVisibleSeparatorWidthAnchorY";
    PropertyName[PropertyName["IsVisibleShadowAnchorY"] = 588] = "IsVisibleShadowAnchorY";
    PropertyName[PropertyName["IsVisibleStrokeAnchorY"] = 589] = "IsVisibleStrokeAnchorY";
    PropertyName[PropertyName["IsVisibleTextColorAnchorY"] = 590] = "IsVisibleTextColorAnchorY";
    PropertyName[PropertyName["IsVisibleTextDecorationsAnchorY"] = 591] = "IsVisibleTextDecorationsAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationXAnchorY"] = 592] = "IsVisibleTranslationXAnchorY";
    PropertyName[PropertyName["IsVisibleTranslationYAnchorY"] = 593] = "IsVisibleTranslationYAnchorY";
    PropertyName[PropertyName["IsVisibleRotationAnchorY"] = 594] = "IsVisibleRotationAnchorY";
    PropertyName[PropertyName["IsVisibleScaleAnchorY"] = 595] = "IsVisibleScaleAnchorY";
    PropertyName[PropertyName["IsVisibleHeightRequestAnchorY"] = 596] = "IsVisibleHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleWidthRequestAnchorY"] = 597] = "IsVisibleWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestAnchorY"] = 598] = "IsVisibleMinimumHeightRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestAnchorY"] = 599] = "IsVisibleMinimumWidthRequestAnchorY";
    PropertyName[PropertyName["IsVisibleMarginAnchorY"] = 600] = "IsVisibleMarginAnchorY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsAnchorY"] = 601] = "IsVisiblePaddingConstraintsAnchorY";
    PropertyName[PropertyName["IsVisibleRowSpacingAnchorY"] = 602] = "IsVisibleRowSpacingAnchorY";
    PropertyName[PropertyName["IsVisibleColumnSpacingAnchorY"] = 603] = "IsVisibleColumnSpacingAnchorY";
    PropertyName[PropertyName["IsEnabledAnchorY"] = 604] = "IsEnabledAnchorY";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationX"] = 605] = "IsVisibleBackgroundColorRotationX";
    PropertyName[PropertyName["IsVisibleBorderColorRotationX"] = 606] = "IsVisibleBorderColorRotationX";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationX"] = 607] = "IsVisibleCornerRadiusRotationX";
    PropertyName[PropertyName["IsVisibleElevationRotationX"] = 608] = "IsVisibleElevationRotationX";
    PropertyName[PropertyName["IsVisiblePaddingRotationX"] = 609] = "IsVisiblePaddingRotationX";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationX"] = 610] = "IsVisiblePlaceholderRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationX"] = 611] = "IsVisibleSeparatorColorRotationX";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationX"] = 612] = "IsVisibleSeparatorWidthRotationX";
    PropertyName[PropertyName["IsVisibleShadowRotationX"] = 613] = "IsVisibleShadowRotationX";
    PropertyName[PropertyName["IsVisibleStrokeRotationX"] = 614] = "IsVisibleStrokeRotationX";
    PropertyName[PropertyName["IsVisibleTextColorRotationX"] = 615] = "IsVisibleTextColorRotationX";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationX"] = 616] = "IsVisibleTextDecorationsRotationX";
    PropertyName[PropertyName["IsVisibleTranslationXRotationX"] = 617] = "IsVisibleTranslationXRotationX";
    PropertyName[PropertyName["IsVisibleTranslationYRotationX"] = 618] = "IsVisibleTranslationYRotationX";
    PropertyName[PropertyName["IsVisibleRotationRotationX"] = 619] = "IsVisibleRotationRotationX";
    PropertyName[PropertyName["IsVisibleScaleRotationX"] = 620] = "IsVisibleScaleRotationX";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationX"] = 621] = "IsVisibleHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationX"] = 622] = "IsVisibleWidthRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationX"] = 623] = "IsVisibleMinimumHeightRequestRotationX";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationX"] = 624] = "IsVisibleMinimumWidthRequestRotationX";
    PropertyName[PropertyName["IsVisibleMarginRotationX"] = 625] = "IsVisibleMarginRotationX";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationX"] = 626] = "IsVisiblePaddingConstraintsRotationX";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationX"] = 627] = "IsVisibleRowSpacingRotationX";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationX"] = 628] = "IsVisibleColumnSpacingRotationX";
    PropertyName[PropertyName["IsEnabledRotationX"] = 629] = "IsEnabledRotationX";
    PropertyName[PropertyName["IsVisibleBackgroundColorRotationY"] = 630] = "IsVisibleBackgroundColorRotationY";
    PropertyName[PropertyName["IsVisibleBorderColorRotationY"] = 631] = "IsVisibleBorderColorRotationY";
    PropertyName[PropertyName["IsVisibleCornerRadiusRotationY"] = 632] = "IsVisibleCornerRadiusRotationY";
    PropertyName[PropertyName["IsVisibleElevationRotationY"] = 633] = "IsVisibleElevationRotationY";
    PropertyName[PropertyName["IsVisiblePaddingRotationY"] = 634] = "IsVisiblePaddingRotationY";
    PropertyName[PropertyName["IsVisiblePlaceholderRotationY"] = 635] = "IsVisiblePlaceholderRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorColorRotationY"] = 636] = "IsVisibleSeparatorColorRotationY";
    PropertyName[PropertyName["IsVisibleSeparatorWidthRotationY"] = 637] = "IsVisibleSeparatorWidthRotationY";
    PropertyName[PropertyName["IsVisibleShadowRotationY"] = 638] = "IsVisibleShadowRotationY";
    PropertyName[PropertyName["IsVisibleStrokeRotationY"] = 639] = "IsVisibleStrokeRotationY";
    PropertyName[PropertyName["IsVisibleTextColorRotationY"] = 640] = "IsVisibleTextColorRotationY";
    PropertyName[PropertyName["IsVisibleTextDecorationsRotationY"] = 641] = "IsVisibleTextDecorationsRotationY";
    PropertyName[PropertyName["IsVisibleTranslationXRotationY"] = 642] = "IsVisibleTranslationXRotationY";
    PropertyName[PropertyName["IsVisibleTranslationYRotationY"] = 643] = "IsVisibleTranslationYRotationY";
    PropertyName[PropertyName["IsVisibleRotationRotationY"] = 644] = "IsVisibleRotationRotationY";
    PropertyName[PropertyName["IsVisibleScaleRotationY"] = 645] = "IsVisibleScaleRotationY";
    PropertyName[PropertyName["IsVisibleHeightRequestRotationY"] = 646] = "IsVisibleHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleWidthRequestRotationY"] = 647] = "IsVisibleWidthRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumHeightRequestRotationY"] = 648] = "IsVisibleMinimumHeightRequestRotationY";
    PropertyName[PropertyName["IsVisibleMinimumWidthRequestRotationY"] = 649] = "IsVisibleMinimumWidthRequestRotationY";
    PropertyName[PropertyName["IsVisibleMarginRotationY"] = 650] = "IsVisibleMarginRotationY";
    PropertyName[PropertyName["IsVisiblePaddingConstraintsRotationY"] = 651] = "IsVisiblePaddingConstraintsRotationY";
    PropertyName[PropertyName["IsVisibleRowSpacingRotationY"] = 652] = "IsVisibleRowSpacingRotationY";
    PropertyName[PropertyName["IsVisibleColumnSpacingRotationY"] = 653] = "IsVisibleColumnSpacingRotationY";
    PropertyName[PropertyName["IsEnabledRotationY"] = 654] = "IsEnabledRotationY";
})(PropertyName || (PropertyName = {}));


/***/ }),

/***/ "./src/XamlParser.ts":
/*!***************************!*\
  !*** ./src/XamlParser.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./src/figma-node-translation/frame-2-layout.ts":
/*!******************************************************!*\
  !*** ./src/figma-node-translation/frame-2-layout.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: translateDefaultNumberValue(node.itemSpacing.toString()) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateDefaultNumberValue(translateFigmaPaddingToXAMLPadding(node)) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignContent, value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignItems, value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Wrap, value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Grow, value: translateDefaultNumberValue(node.layoutGrow.toString()) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignSelf, value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
        //{ name: PropertyName.Shrink,            value: node.rescale.toString() },
        //{ name: PropertyName.Order,             value: node. },
        //{ name: PropertyName.Basis,             value:   },
        //{ name: PropertyName.Direction,         value: node.layoutMode },
        //{ name: PropertyName.JustifyContent,    value: node. },
        //{ name: PropertyName.Position,          value: node. },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
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
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
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

/***/ "./src/figma-node-translation/shapes/ellipse-2-ellipse.ts":
/*!****************************************************************!*\
  !*** ./src/figma-node-translation/shapes/ellipse-2-ellipse.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateEllipseElement: () => (/* binding */ TranslateEllipseElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");


function TranslateEllipseElement(node) {
    const ellipseProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Width, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Height, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Fill, value: node.fills.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.StrokeThickness, value: node.strokeWeight.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Stroke, value: '#000000' },
        // Add other ellipse-related properties as needed
    ];
    const ellipseElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Ellipse, properties: ellipseProperties };
    return ellipseElement;
}


/***/ }),

/***/ "./src/figma-node-translation/shapes/line-2-line.ts":
/*!**********************************************************!*\
  !*** ./src/figma-node-translation/shapes/line-2-line.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateRectangleElement: () => (/* binding */ TranslateRectangleElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");


function TranslateRectangleElement(node) {
    const rectangleProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Width, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Height, value: node.height.toString() }
        // Add other rectangle-related properties as needed
    ];
    const rectangleElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Rectangle, properties: rectangleProperties };
    return rectangleElement;
}


/***/ }),

/***/ "./src/figma-node-translation/shapes/vector-2-icon.ts":
/*!************************************************************!*\
  !*** ./src/figma-node-translation/shapes/vector-2-icon.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateVectorElement: () => (/* binding */ TranslateVectorElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");


function TranslateVectorElement(node) {
    const vectorProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Width, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Height, value: node.height.toString() },
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

"use strict";
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
        //{ name: PropertyName.TextType,                value: 'Text' } // Set appropriately based on Figma properties
        //{ name: PropertyName.Padding,                 value: '0' }, // Set appropriately based on Figma properties
        //{ name: PropertyName.FontFamily,              value: node.fontName }, // Set appropriately based on Figma properties
        //{ name: PropertyName.FormattedText,           value: '' }, // Set appropriately based on Figma properties
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

/***/ "./src/user-defined-types-translation/button-2-xaml.ts":
/*!*************************************************************!*\
  !*** ./src/user-defined-types-translation/button-2-xaml.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateButtonElement: () => (/* binding */ TranslateButtonElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Property */ "./src/Property.ts");


function TranslateButtonElement(node) {
    const buttonProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() }
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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


/***/ }),

/***/ "?569f":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _XamlParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XamlParser */ "./src/XamlParser.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "?569f");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


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
figma.ui.postMessage(nodes);
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
    const fileName = 'textfile.txt';
    (() => __awaiter(void 0, void 0, void 0, function* () {
        yield fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile(fileName, textContent, 'utf8');
    }))();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZwQks7QUFDRjtBQUNrRDtBQUNFO0FBQ2Y7QUFDaEI7QUFDWTtBQUN5QjtBQUNmO0FBQ3RCO0FBQzBCO0FBQ0M7QUFDQTtBQUNGO0FBQ007QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1R0FBK0I7QUFDOUQsdURBQXVELGlCQUFpQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwRkFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlHQUF1QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0dBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrR0FBeUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLG9DQUFvQyxrRkFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzRUFBVztBQUM3QztBQUNBLDZEQUE2RCxpQkFBaUI7QUFDOUUsb0RBQW9ELGdCQUFnQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFLGdDQUFnQyxxR0FBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxVQUFVO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0dBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzR0FBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9HQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMEdBQXdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwwQkFBMEIsc0VBQVc7QUFDckM7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFZLFlBQVksSUFBSSxXQUFXO0FBQ2pFO0FBQ0EsZUFBZSxpREFBVyxnQkFBZ0IsRUFBRSxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFZLFlBQVksSUFBSSxXQUFXO0FBQ2pFO0FBQ0EsZUFBZSxpREFBVyxnQkFBZ0IsRUFBRSxlQUFlO0FBQzNEO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVcsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEl5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSwyRUFBMkU7QUFDdkcsVUFBVSxNQUFNLG1EQUFZLCtDQUErQztBQUMzRSxVQUFVLE1BQU0sbURBQVksNkNBQTZDO0FBQ3pFLFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEgsVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksMEZBQTBGO0FBQ3RILFVBQVUsTUFBTSxtREFBWSw2REFBNkQ7QUFDekYsVUFBVSxNQUFNLG1EQUFZLHVFQUF1RTtBQUNuRyxVQUFVLE1BQU0sbURBQVksK0VBQStFO0FBQzNHLFlBQVksc0VBQXNFO0FBQ2xGLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksZ0RBQWdEO0FBQzVELFlBQVksOERBQThEO0FBQzFFLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksd0VBQXdFO0FBQ3BGLFlBQVk7QUFDWjtBQUNBLGdDQUFnQyxNQUFNLGlEQUFXO0FBQ2pELDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BILFlBQVksd0VBQXdFO0FBQ3BGLFlBQVk7QUFDWjtBQUNBLDJDQUEyQyxNQUFNLGlEQUFXO0FBQzVELHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BILFlBQVksd0VBQXdFO0FBQ3BGLFlBQVk7QUFDWjtBQUNBLHlDQUF5QyxNQUFNLGlEQUFXO0FBQzFELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCLElBQUksZ0JBQWdCLElBQUksa0JBQWtCLElBQUksbUJBQW1CO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRzRDO0FBQ0U7QUFDdkM7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSxzQ0FBc0M7QUFDbEUsVUFBVSxNQUFNLG1EQUFZLHdDQUF3QztBQUNwRSxVQUFVLE1BQU0sbURBQVkscUNBQXFDO0FBQ2pFLFVBQVUsTUFBTSxtREFBWSx1REFBdUQ7QUFDbkYsVUFBVSxNQUFNLG1EQUFZLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0EsNkJBQTZCLE1BQU0saURBQVc7QUFDOUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjRDO0FBQ0U7QUFDdkM7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSxpQkFBaUI7QUFDN0MsVUFBVSxNQUFNLG1EQUFZLGlCQUFpQjtBQUM3QyxVQUFVLE1BQU0sbURBQVksa0JBQWtCO0FBQzlDLFVBQVUsTUFBTSxtREFBWSxpQkFBaUI7QUFDN0MsVUFBVSxNQUFNLG1EQUFZLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0EsMEJBQTBCLE1BQU0saURBQVc7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjRDO0FBQ0U7QUFDdkM7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSxzQ0FBc0M7QUFDbEUsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTSxpREFBVztBQUNoRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEM7QUFDRTtBQUN2QztBQUNQO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLHNDQUFzQztBQUNsRSxVQUFVLE1BQU0sbURBQVksd0NBQXdDO0FBQ3BFLFVBQVUsTUFBTSxtREFBWSx1Q0FBdUM7QUFDbkU7QUFDQTtBQUNBLDRCQUE0QixNQUFNLGlEQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHlDO0FBQ0U7QUFDcEM7QUFDUDtBQUNBO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLHVHQUF1RztBQUNuSSxVQUFVLE1BQU0sbURBQVksOEVBQThFO0FBQzFHLFVBQVUsTUFBTSxtREFBWSxzR0FBc0c7QUFDbEksVUFBVSxNQUFNLG1EQUFZLDRDQUE0QztBQUN4RSxVQUFVLE1BQU0sbURBQVkseUZBQXlGO0FBQ3JILFVBQVUsTUFBTSxtREFBWSxvRkFBb0Y7QUFDaEgsVUFBVSxNQUFNLG1EQUFZLDhGQUE4RjtBQUMxSCxVQUFVLE1BQU0sbURBQVksMElBQTBJO0FBQ3RLLFVBQVUsTUFBTSxtREFBWSwrQkFBK0I7QUFDM0QsVUFBVSxNQUFNLG1EQUFZLDZGQUE2RjtBQUN6SCxVQUFVLE1BQU0sbURBQVksdUZBQXVGO0FBQ25ILFVBQVUsTUFBTSxtREFBWSx5RUFBeUU7QUFDckcsWUFBWSw0REFBNEQ7QUFDeEUsWUFBWSx3REFBd0Q7QUFDcEUsWUFBWSxrRUFBa0U7QUFDOUUsWUFBWSx1REFBdUQ7QUFDbkU7QUFDQSwwQkFBMEIsTUFBTSxpREFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0h5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDRCQUE0QixNQUFNLGlEQUFXO0FBQzdDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDRCQUE0QixNQUFNLGlEQUFXO0FBQzdDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDJCQUEyQixNQUFNLGlEQUFXO0FBQzVDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDhCQUE4QixNQUFNLGlEQUFXO0FBQy9DO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsUUFBUSxJQUFJLFFBQVE7QUFDeEU7QUFDQSxtQkFBbUIsV0FBVyxFQUFFLFlBQVk7QUFDNUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDZCQUE2QixVQUFVO0FBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsNkJBQTZCLFVBQVU7QUFDdkM7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQzBDO0FBQ047QUFDcEM7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxrQkFBa0Isc0JBQXNCO0FBQzVHLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVU7QUFDbEM7QUFDQTtBQUNBLGNBQWMsd0NBQUU7QUFDaEIsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL1Byb3BlcnR5LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9YYW1sUGFyc2VyLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL2ZyYW1lLTItbGF5b3V0LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9lbGxpcHNlLTItZWxsaXBzZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvbGluZS0yLWxpbmUudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3JlY3RhbmdsZS0yLXJlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvdmVjdG9yLTItaWNvbi50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZWRpdG9yLTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2VudHJ5LTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2xpc3R2aWV3LTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMveGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtY3VzdG9tLWNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXZpZXcudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL2lnbm9yZWR8QzpcXFVzZXJzXFxCYWJldFxcRGVza3RvcFxcRmlnbWEgRGVzaWduIHRvIC5ORVQgTUFVSVxcRmlnbWEtUGx1Z2luLU1BVUktQ29kZS1HZW5lcmF0aW9uXFxzcmN8ZnMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRWxlbWVudE5hbWU7XG4oZnVuY3Rpb24gKEVsZW1lbnROYW1lKSB7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMYWJlbFwiXSA9IDBdID0gXCJMYWJlbFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQnV0dG9uXCJdID0gMV0gPSBcIkJ1dHRvblwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRWRpdG9yXCJdID0gMl0gPSBcIkVkaXRvclwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRW50cnlcIl0gPSAzXSA9IFwiRW50cnlcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlN0YWNrRnJhbWVcIl0gPSA0XSA9IFwiU3RhY2tGcmFtZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGV4dEJsb2NrXCJdID0gNV0gPSBcIlRleHRCbG9ja1wiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVGV4dEJveFwiXSA9IDZdID0gXCJUZXh0Qm94XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDb21ib0JveFwiXSA9IDddID0gXCJDb21ib0JveFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGlzdEJveFwiXSA9IDhdID0gXCJMaXN0Qm94XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaXN0Vmlld1wiXSA9IDldID0gXCJMaXN0Vmlld1wiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUmFkaW9CdXR0b25cIl0gPSAxMF0gPSBcIlJhZGlvQnV0dG9uXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJDaGVja0JveFwiXSA9IDExXSA9IFwiQ2hlY2tCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkltYWdlXCJdID0gMTJdID0gXCJJbWFnZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQm9yZGVyXCJdID0gMTNdID0gXCJCb3JkZXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNjcm9sbFZpZXdlclwiXSA9IDE0XSA9IFwiU2Nyb2xsVmlld2VyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQcm9ncmVzc0JhclwiXSA9IDE1XSA9IFwiUHJvZ3Jlc3NCYXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNsaWRlclwiXSA9IDE2XSA9IFwiU2xpZGVyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJDb250cm9sXCJdID0gMTddID0gXCJUYWJDb250cm9sXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJJdGVtXCJdID0gMThdID0gXCJUYWJJdGVtXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJNZW51XCJdID0gMTldID0gXCJNZW51XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJNZW51SXRlbVwiXSA9IDIwXSA9IFwiTWVudUl0ZW1cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbnRleHRNZW51XCJdID0gMjFdID0gXCJDb250ZXh0TWVudVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9wdXBcIl0gPSAyMl0gPSBcIlBvcHVwXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJSZWN0YW5nbGVcIl0gPSAyM10gPSBcIlJlY3RhbmdsZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRWxsaXBzZVwiXSA9IDI0XSA9IFwiRWxsaXBzZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9seWdvblwiXSA9IDI1XSA9IFwiUG9seWdvblwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGluZVwiXSA9IDI2XSA9IFwiTGluZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSG9yaXpvbnRhbFN0YWNrTGF5b3V0XCJdID0gMjddID0gXCJIb3Jpem9udGFsU3RhY2tMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIl0gPSAyOF0gPSBcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZsZXhMYXlvdXRcIl0gPSAyOV0gPSBcIkZsZXhMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZyYW1lXCJdID0gMzBdID0gXCJGcmFtZVwiO1xufSkoRWxlbWVudE5hbWUgfHwgKEVsZW1lbnROYW1lID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUHJvcGVydHlOYW1lO1xuKGZ1bmN0aW9uIChQcm9wZXJ0eU5hbWUpIHtcbiAgICAvL0NvbW1vblxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJXaWR0aFwiXSA9IDBdID0gXCJXaWR0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWlnaHRcIl0gPSAxXSA9IFwiSGVpZ2h0XCI7XG4gICAgLy9MYWJlbFxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDaGFyYWN0ZXJTcGFjaW5nXCJdID0gMl0gPSBcIkNoYXJhY3RlclNwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF0dHJpYnV0ZXNcIl0gPSAzXSA9IFwiRm9udEF0dHJpYnV0ZXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF1dG9TY2FsaW5nRW5hYmxlZFwiXSA9IDRdID0gXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRGYW1pbHlcIl0gPSA1XSA9IFwiRm9udEZhbWlseVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250U2l6ZVwiXSA9IDZdID0gXCJGb250U2l6ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb3JtYXR0ZWRUZXh0XCJdID0gN10gPSBcIkZvcm1hdHRlZFRleHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIl0gPSA4XSA9IFwiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGluZUJyZWFrTW9kZVwiXSA9IDldID0gXCJMaW5lQnJlYWtNb2RlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxpbmVIZWlnaHRcIl0gPSAxMF0gPSBcIkxpbmVIZWlnaHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4TGluZXNcIl0gPSAxMV0gPSBcIk1heExpbmVzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBhZGRpbmdcIl0gPSAxMl0gPSBcIlBhZGRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dFwiXSA9IDEzXSA9IFwiVGV4dFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0Q29sb3JcIl0gPSAxNF0gPSBcIlRleHRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0RGVjb3JhdGlvbnNcIl0gPSAxNV0gPSBcIlRleHREZWNvcmF0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0VHJhbnNmb3JtXCJdID0gMTZdID0gXCJUZXh0VHJhbnNmb3JtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRUeXBlXCJdID0gMTddID0gXCJUZXh0VHlwZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbFRleHRBbGlnbm1lbnRcIl0gPSAxOF0gPSBcIlZlcnRpY2FsVGV4dEFsaWdubWVudFwiO1xuICAgIC8vRnJhbWVcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3BhY2luZ1wiXSA9IDE5XSA9IFwiU3BhY2luZ1wiO1xuICAgIC8vRmxleExheW91dFxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbGlnbkNvbnRlbnRcIl0gPSAyMF0gPSBcIkFsaWduQ29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbGlnbkl0ZW1zXCJdID0gMjFdID0gXCJBbGlnbkl0ZW1zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkRpcmVjdGlvblwiXSA9IDIyXSA9IFwiRGlyZWN0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkp1c3RpZnlDb250ZW50XCJdID0gMjNdID0gXCJKdXN0aWZ5Q29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQb3NpdGlvblwiXSA9IDI0XSA9IFwiUG9zaXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiV3JhcFwiXSA9IDI1XSA9IFwiV3JhcFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbGlnblNlbGZcIl0gPSAyNl0gPSBcIkFsaWduU2VsZlwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCYXNpc1wiXSA9IDI3XSA9IFwiQmFzaXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3Jvd1wiXSA9IDI4XSA9IFwiR3Jvd1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPcmRlclwiXSA9IDI5XSA9IFwiT3JkZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2hyaW5rXCJdID0gMzBdID0gXCJTaHJpbmtcIjtcbiAgICAvL1BvbHlnb25cbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUG9pbnRzXCJdID0gMzFdID0gXCJQb2ludHNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRmlsbFwiXSA9IDMyXSA9IFwiRmlsbFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGaWxsUnVsZVwiXSA9IDMzXSA9IFwiRmlsbFJ1bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlXCJdID0gMzRdID0gXCJTdHJva2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlVGhpY2tuZXNzXCJdID0gMzVdID0gXCJTdHJva2VUaGlja25lc3NcIjtcbiAgICAvL0xpbmVcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiWDFcIl0gPSAzNl0gPSBcIlgxXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlgyXCJdID0gMzddID0gXCJYMlwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMVwiXSA9IDM4XSA9IFwiWTFcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiWTJcIl0gPSAzOV0gPSBcIlkyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRBdHRyaWJ1dGVcIl0gPSA0MF0gPSBcIkZvbnRBdHRyaWJ1dGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmFja2dyb3VuZENvbG9yXCJdID0gNDFdID0gXCJCYWNrZ3JvdW5kQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9yZWdyb3VuZENvbG9yXCJdID0gNDJdID0gXCJGb3JlZ3JvdW5kQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWFyZ2luXCJdID0gNDNdID0gXCJNYXJnaW5cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyQ29sb3JcIl0gPSA0NF0gPSBcIkJvcmRlckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJvcmRlclRoaWNrbmVzc1wiXSA9IDQ1XSA9IFwiQm9yZGVyVGhpY2tuZXNzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZpc2liaWxpdHlcIl0gPSA0Nl0gPSBcIlZpc2liaWxpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkXCJdID0gNDddID0gXCJJc0VuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNSZWFkT25seVwiXSA9IDQ4XSA9IFwiSXNSZWFkT25seVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250V2VpZ2h0XCJdID0gNDldID0gXCJGb250V2VpZ2h0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRTdHlsZVwiXSA9IDUwXSA9IFwiRm9udFN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRBbGlnbm1lbnRcIl0gPSA1MV0gPSBcIlRleHRBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSW1hZ2VTb3VyY2VcIl0gPSA1Ml0gPSBcIkltYWdlU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNvdXJjZVwiXSA9IDUzXSA9IFwiU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhvcml6b250YWxBbGlnbm1lbnRcIl0gPSA1NF0gPSBcIkhvcml6b250YWxBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxBbGlnbm1lbnRcIl0gPSA1NV0gPSBcIlZlcnRpY2FsQWxpZ25tZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9wYWNpdHlcIl0gPSA1Nl0gPSBcIk9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29tbWFuZFwiXSA9IDU3XSA9IFwiQ29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb21tYW5kUGFyYW1ldGVyXCJdID0gNThdID0gXCJDb21tYW5kUGFyYW1ldGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQ2hlY2tlZFwiXSA9IDU5XSA9IFwiSXNDaGVja2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRcIl0gPSA2MF0gPSBcIkNvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVhZGVyXCJdID0gNjFdID0gXCJIZWFkZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJUZXh0XCJdID0gNjJdID0gXCJQbGFjZWhvbGRlclRleHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJUZXh0Q29sb3JcIl0gPSA2M10gPSBcIlBsYWNlaG9sZGVyVGV4dENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVwiXSA9IDY0XSA9IFwiSXNWaXNpYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRm9jdXNlZFwiXSA9IDY1XSA9IFwiSXNGb2N1c2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzU2VsZWN0ZWRcIl0gPSA2Nl0gPSBcIklzU2VsZWN0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNTb3VyY2VcIl0gPSA2N10gPSBcIkl0ZW1zU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UZW1wbGF0ZVwiXSA9IDY4XSA9IFwiSXRlbVRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYWNlaG9sZGVyXCJdID0gNjldID0gXCJQbGFjZWhvbGRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEluZGV4XCJdID0gNzBdID0gXCJTZWxlY3RlZEluZGV4XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1cIl0gPSA3MV0gPSBcIk1pbmltdW1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4aW11bVwiXSA9IDcyXSA9IFwiTWF4aW11bVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWYWx1ZVwiXSA9IDczXSA9IFwiVmFsdWVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNUb2dnbGVkXCJdID0gNzRdID0gXCJJc1RvZ2dsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29ybmVyUmFkaXVzXCJdID0gNzVdID0gXCJDb3JuZXJSYWRpdXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQYXNzd29yZFwiXSA9IDc2XSA9IFwiSXNQYXNzd29yZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCJdID0gNzddID0gXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1zXCJdID0gNzhdID0gXCJJdGVtc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc09wZW5cIl0gPSA3OV0gPSBcIklzT3BlblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VkaXRhYmxlXCJdID0gODBdID0gXCJJc0VkaXRhYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkRpc3BsYXlNZW1iZXJQYXRoXCJdID0gODFdID0gXCJEaXNwbGF5TWVtYmVyUGF0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZFZhbHVlXCJdID0gODJdID0gXCJTZWxlY3RlZFZhbHVlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGVkVmFsdWVQYXRoXCJdID0gODNdID0gXCJTZWxlY3RlZFZhbHVlUGF0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWFkZXJUZW1wbGF0ZVwiXSA9IDg0XSA9IFwiSGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9vdGVyVGVtcGxhdGVcIl0gPSA4NV0gPSBcIkZvb3RlclRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkljb25cIl0gPSA4Nl0gPSBcIkljb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSWNvblNvdXJjZVwiXSA9IDg3XSA9IFwiSWNvblNvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cE5hbWVcIl0gPSA4OF0gPSBcIkdyb3VwTmFtZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyU29ydFwiXSA9IDg5XSA9IFwiQ2FuVXNlclNvcnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2FuVXNlckZpbHRlclwiXSA9IDkwXSA9IFwiQ2FuVXNlckZpbHRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5zXCJdID0gOTFdID0gXCJDb2x1bW5zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd3NcIl0gPSA5Ml0gPSBcIlJvd3NcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uRGVmaW5pdGlvbnNcIl0gPSA5M10gPSBcIkNvbHVtbkRlZmluaXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0RlZmluaXRpb25zXCJdID0gOTRdID0gXCJSb3dEZWZpbml0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDZWxsUGFkZGluZ1wiXSA9IDk1XSA9IFwiQ2VsbFBhZGRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93U3BhblwiXSA9IDk2XSA9IFwiUm93U3BhblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5TcGFuXCJdID0gOTddID0gXCJDb2x1bW5TcGFuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzSGVhZGVyVmlzaWJsZVwiXSA9IDk4XSA9IFwiSXNIZWFkZXJWaXNpYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzU29ydGFibGVcIl0gPSA5OV0gPSBcIklzU29ydGFibGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU29ydERpcmVjdGlvblwiXSA9IDEwMF0gPSBcIlNvcnREaXJlY3Rpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBIZWFkZXJUZW1wbGF0ZVwiXSA9IDEwMV0gPSBcIkdyb3VwSGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBGb290ZXJUZW1wbGF0ZVwiXSA9IDEwMl0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBTdHlsZVwiXSA9IDEwM10gPSBcIkdyb3VwU3R5bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFeHBhbmRlZFwiXSA9IDEwNF0gPSBcIklzRXhwYW5kZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNQYW5lbFwiXSA9IDEwNV0gPSBcIkl0ZW1zUGFuZWxcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWx0ZXJuYXRpbmdSb3dDb2xvclwiXSA9IDEwNl0gPSBcIkFsdGVybmF0aW5nUm93Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNvbnRhaW5lclN0eWxlXCJdID0gMTA3XSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Db250YWluZXJTdHlsZVNlbGVjdG9yXCJdID0gMTA4XSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbVRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMDldID0gXCJJdGVtVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclN0eWxlXCJdID0gMTEwXSA9IFwiR3JvdXBIZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclN0eWxlXCJdID0gMTExXSA9IFwiR3JvdXBGb290ZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMTJdID0gXCJHcm91cEZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uSGVhZGVyU3R5bGVcIl0gPSAxMTNdID0gXCJDb2x1bW5IZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTE0XSA9IFwiQ29sdW1uSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGcm96ZW5Db2x1bW5Db3VudFwiXSA9IDExNV0gPSBcIkZyb3plbkNvbHVtbkNvdW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkF1dG9HZW5lcmF0ZUNvbHVtbnNcIl0gPSAxMTZdID0gXCJBdXRvR2VuZXJhdGVDb2x1bW5zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNTb3VyY2VcIl0gPSAxMTddID0gXCJDb2x1bW5zU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNXaWR0aFwiXSA9IDExOF0gPSBcIkNvbHVtbnNXaWR0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0TWVtYmVyUGF0aFwiXSA9IDExOV0gPSBcIlNvcnRNZW1iZXJQYXRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclRlbXBsYXRlXCJdID0gMTIwXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyU3R5bGVcIl0gPSAxMjFdID0gXCJSb3dIZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTIyXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGlvbkNvdW50XCJdID0gMTIzXSA9IFwiQWx0ZXJuYXRpb25Db3VudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0FsdGVybmF0aW5nUm93Q29sb3JFbmFibGVkXCJdID0gMTI0XSA9IFwiSXNBbHRlcm5hdGluZ1Jvd0NvbG9yRW5hYmxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0l0ZW1DbGlja0VuYWJsZWRcIl0gPSAxMjVdID0gXCJJc0l0ZW1DbGlja0VuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMjZdID0gXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMjddID0gXCJWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0aW9uTW9kZVwiXSA9IDEyOF0gPSBcIlNlbGVjdGlvbk1vZGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtc1wiXSA9IDEyOV0gPSBcIlNlbGVjdGVkSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtXCJdID0gMTMwXSA9IFwiU2VsZWN0ZWRJdGVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1DbGlja1wiXSA9IDEzMV0gPSBcIkl0ZW1DbGlja1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1N0aWNreVwiXSA9IDEzMl0gPSBcIklzU3RpY2t5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUHVsbFRvUmVmcmVzaEVuYWJsZWRcIl0gPSAxMzNdID0gXCJJc1B1bGxUb1JlZnJlc2hFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJlZnJlc2hDb21tYW5kXCJdID0gMTM0XSA9IFwiUmVmcmVzaENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiXSA9IDEzNV0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ0NoYW5nZWRcIl0gPSAxMzZdID0gXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nQ2hhbmdlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlRW5hYmxlZFwiXSA9IDEzN10gPSBcIklzTG9hZE1vcmVFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxvYWRNb3JlQ29tbWFuZFwiXSA9IDEzOF0gPSBcIkxvYWRNb3JlQ29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlTG9hZGluZ1wiXSA9IDEzOV0gPSBcIklzTG9hZE1vcmVMb2FkaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiXSA9IDE0MF0gPSBcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGFwcGVkXCJdID0gMTQxXSA9IFwiSXRlbVRhcHBlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtU2VsZWN0ZWRcIl0gPSAxNDJdID0gXCJJdGVtU2VsZWN0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbURvdWJsZVRhcHBlZFwiXSA9IDE0M10gPSBcIkl0ZW1Eb3VibGVUYXBwZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVMZWZ0Q29tbWFuZFwiXSA9IDE0NF0gPSBcIlN3aXBlTGVmdENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVSaWdodENvbW1hbmRcIl0gPSAxNDVdID0gXCJTd2lwZVJpZ2h0Q29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVVwQ29tbWFuZFwiXSA9IDE0Nl0gPSBcIlN3aXBlVXBDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlRG93bkNvbW1hbmRcIl0gPSAxNDddID0gXCJTd2lwZURvd25Db21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlSXRlbXNcIl0gPSAxNDhdID0gXCJTd2lwZUl0ZW1zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVmcmVzaGluZ1wiXSA9IDE0OV0gPSBcIklzUmVmcmVzaGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSZWZyZXNoQ29tbWFuZFBhcmFtZXRlclwiXSA9IDE1MF0gPSBcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlaWdodFwiXSA9IDE1MV0gPSBcIlJvd0hlaWdodFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBdXRvR2VuZXJhdGVJdGVtXCJdID0gMTUyXSA9IFwiQXV0b0dlbmVyYXRlSXRlbVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxNb2RlXCJdID0gMTUzXSA9IFwiU2Nyb2xsTW9kZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxCYXJWaXNpYmlsaXR5XCJdID0gMTU0XSA9IFwiU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1wiXSA9IDE1NV0gPSBcIlNjcm9sbFRvXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvUm93XCJdID0gMTU2XSA9IFwiU2Nyb2xsVG9Sb3dcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Sb3dJbmRleFwiXSA9IDE1N10gPSBcIlNjcm9sbFRvUm93SW5kZXhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Db2x1bW5cIl0gPSAxNThdID0gXCJTY3JvbGxUb0NvbHVtblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb0NvbHVtbkluZGV4XCJdID0gMTU5XSA9IFwiU2Nyb2xsVG9Db2x1bW5JbmRleFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTYwXSA9IFwiSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTYxXSA9IFwiRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNjJdID0gXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVpZ2h0UmVzaXplclwiXSA9IDE2M10gPSBcIlJvd0hlaWdodFJlc2l6ZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsU3RhcnRlZFwiXSA9IDE2NF0gPSBcIk9uUHVsbFN0YXJ0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsRGVsdGFcIl0gPSAxNjVdID0gXCJPblB1bGxEZWx0YVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxDb21wbGV0ZWRcIl0gPSAxNjZdID0gXCJPblB1bGxDb21wbGV0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsQ29udGVudFwiXSA9IDE2N10gPSBcIk9uUHVsbENvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZWxlYXNlQ29udGVudFwiXSA9IDE2OF0gPSBcIk9uUmVsZWFzZUNvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZVN0YXJ0ZWRcIl0gPSAxNjldID0gXCJPblN3aXBlU3RhcnRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRGVsdGFcIl0gPSAxNzBdID0gXCJPblN3aXBlRGVsdGFcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZUNvbXBsZXRlZFwiXSA9IDE3MV0gPSBcIk9uU3dpcGVDb21wbGV0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxpbmdcIl0gPSAxNzJdID0gXCJPblJldmVhbGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRW5kZWRcIl0gPSAxNzNdID0gXCJPblN3aXBlRW5kZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxlZFwiXSA9IDE3NF0gPSBcIk9uUmV2ZWFsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25FeGVjdXRlXCJdID0gMTc1XSA9IFwiT25FeGVjdXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uSGlkaW5nXCJdID0gMTc2XSA9IFwiT25IaWRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25IaWRkZW5cIl0gPSAxNzddID0gXCJPbkhpZGRlblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN0YXRlQ2hhbmdlXCJdID0gMTc4XSA9IFwiT25TdGF0ZUNoYW5nZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbmltYXRpb25EdXJhdGlvblwiXSA9IDE3OV0gPSBcIkFuaW1hdGlvbkR1cmF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcE9mZnNldFwiXSA9IDE4MF0gPSBcIk1heFRvcE9mZnNldFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5Ub3BPZmZzZXRcIl0gPSAxODFdID0gXCJNaW5Ub3BPZmZzZXRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluVG9wUmV2ZWFsZWRcIl0gPSAxODJdID0gXCJNaW5Ub3BSZXZlYWxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhUb3BSZXZlYWxlZFwiXSA9IDE4M10gPSBcIk1heFRvcFJldmVhbGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRUZW1wbGF0ZVwiXSA9IDE4NF0gPSBcIkNvbnRlbnRUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50VGVtcGxhdGVTZWxlY3RvclwiXSA9IDE4NV0gPSBcIkNvbnRlbnRUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhvcml6b250YWxPcHRpb25zXCJdID0gMTg2XSA9IFwiSG9yaXpvbnRhbE9wdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxPcHRpb25zXCJdID0gMTg3XSA9IFwiVmVydGljYWxPcHRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uXCJdID0gMTg4XSA9IFwiUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVcIl0gPSAxODldID0gXCJTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmFuc2xhdGlvblhcIl0gPSAxOTBdID0gXCJUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJhbnNsYXRpb25ZXCJdID0gMTkxXSA9IFwiVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxheW91dFhcIl0gPSAxOTJdID0gXCJMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxheW91dFlcIl0gPSAxOTNdID0gXCJMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIldpZHRoUmVxdWVzdFwiXSA9IDE5NF0gPSBcIldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWlnaHRSZXF1ZXN0XCJdID0gMTk1XSA9IFwiSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gMTk2XSA9IFwiTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDE5N10gPSBcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuY2hvclhcIl0gPSAxOThdID0gXCJBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuY2hvcllcIl0gPSAxOTldID0gXCJBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWFwiXSA9IDIwMF0gPSBcIlJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3RhdGlvbllcIl0gPSAyMDFdID0gXCJSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVYXCJdID0gMjAyXSA9IFwiU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlWVwiXSA9IDIwM10gPSBcIlNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGF0Zm9ybUNvbmZpZ3VyYXRpb25cIl0gPSAyMDRdID0gXCJQbGF0Zm9ybUNvbmZpZ3VyYXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWFyZ2luQ29uc3RyYWludHNcIl0gPSAyMDVdID0gXCJNYXJnaW5Db25zdHJhaW50c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHZXN0dXJlUmVjb2duaXplcnNcIl0gPSAyMDZdID0gXCJHZXN0dXJlUmVjb2duaXplcnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmVoYXZpb3JcIl0gPSAyMDddID0gXCJCZWhhdmlvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmlnZ2Vyc1wiXSA9IDIwOF0gPSBcIlRyaWdnZXJzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNsYXNzSWRcIl0gPSAyMDldID0gXCJDbGFzc0lkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0eWxlSWRcIl0gPSAyMTBdID0gXCJTdHlsZUlkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZsb3dEaXJlY3Rpb25cIl0gPSAyMTFdID0gXCJGbG93RGlyZWN0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklucHV0VHJhbnNwYXJlbnRcIl0gPSAyMTJdID0gXCJJbnB1dFRyYW5zcGFyZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiXSA9IDIxM10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclwiXSA9IDIxNF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1wiXSA9IDIxNV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25cIl0gPSAyMTZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1wiXSA9IDIxN10gPSBcIklzVmlzaWJsZVBhZGRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJcIl0gPSAyMThdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclwiXSA9IDIxOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoXCJdID0gMjIwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93XCJdID0gMjIxXSA9IFwiSXNWaXNpYmxlU2hhZG93XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVwiXSA9IDIyMl0gPSBcIklzVmlzaWJsZVN0cm9rZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JcIl0gPSAyMjNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zXCJdID0gMjI0XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiXSA9IDIyNV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIl0gPSAyMjZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25cIl0gPSAyMjddID0gXCJJc1Zpc2libGVSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVwiXSA9IDIyOF0gPSBcIklzVmlzaWJsZVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RcIl0gPSAyMjldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFwiXSA9IDIzMF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDIzMV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSAyMzJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblwiXSA9IDIzM10gPSBcIklzVmlzaWJsZU1hcmdpblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIl0gPSAyMzRdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1wiXSA9IDIzNV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1wiXSA9IDIzNl0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yT3BhY2l0eVwiXSA9IDIzN10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCJdID0gMjM4XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yT3BhY2l0eVwiXSA9IDIzOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dPcGFjaXR5XCJdID0gMjQwXSA9IFwiSXNWaXNpYmxlU2hhZG93T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCJdID0gMjQxXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhPcGFjaXR5XCJdID0gMjQyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllPcGFjaXR5XCJdID0gMjQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIl0gPSAyNDRdID0gXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVPcGFjaXR5XCJdID0gMjQ1XSA9IFwiSXNWaXNpYmxlU2NhbGVPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RPcGFjaXR5XCJdID0gMjQ2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiXSA9IDI0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RPcGFjaXR5XCJdID0gMjQ4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RPcGFjaXR5XCJdID0gMjQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luT3BhY2l0eVwiXSA9IDI1MF0gPSBcIklzVmlzaWJsZU1hcmdpbk9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiXSA9IDI1MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c09wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ09wYWNpdHlcIl0gPSAyNTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nT3BhY2l0eVwiXSA9IDI1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRWRpdGFibGVMYXlvdXRcIl0gPSAyNTRdID0gXCJJc0VkaXRhYmxlTGF5b3V0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE9wYWNpdHlcIl0gPSAyNTVdID0gXCJJc0VuYWJsZWRPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uXCJdID0gMjU2XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiXSA9IDI1N10gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25cIl0gPSAyNThdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblwiXSA9IDI1OV0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiXSA9IDI2MF0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uXCJdID0gMjYxXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uXCJdID0gMjYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCJdID0gMjYzXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblwiXSA9IDI2NF0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uXCJdID0gMjY1XSA9IFwiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25cIl0gPSAyNjZdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblwiXSA9IDI2N10gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uXCJdID0gMjY4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25cIl0gPSAyNjldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uXCJdID0gMjcwXSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uXCJdID0gMjcxXSA9IFwiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzJdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzNdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uXCJdID0gMjc0XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzVdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luUm90YXRpb25cIl0gPSAyNzZdID0gXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblwiXSA9IDI3N10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblwiXSA9IDI3OF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIl0gPSAyNzldID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVcIl0gPSAyODBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlXCJdID0gMjgxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVwiXSA9IDI4Ml0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlXCJdID0gMjgzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlXCJdID0gMjg0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVcIl0gPSAyODVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVcIl0gPSAyODZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVcIl0gPSAyODddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlXCJdID0gMjg4XSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVcIl0gPSAyODldID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVwiXSA9IDI5MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlXCJdID0gMjkxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVcIl0gPSAyOTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVwiXSA9IDI5M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVcIl0gPSAyOTRdID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVcIl0gPSAyOTVdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVwiXSA9IDI5Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVwiXSA9IDI5N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVcIl0gPSAyOThdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVwiXSA9IDI5OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5TY2FsZVwiXSA9IDMwMF0gPSBcIklzVmlzaWJsZU1hcmdpblNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlXCJdID0gMzAxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlXCJdID0gMzAyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiXSA9IDMwM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRTY2FsZVwiXSA9IDMwNF0gPSBcIklzRW5hYmxlZFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWFwiXSA9IDMwNV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWFwiXSA9IDMwNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWFwiXSA9IDMwN10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVhcIl0gPSAzMDhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWFwiXSA9IDMwOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVhcIl0gPSAzMTBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWFwiXSA9IDMxMV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVYXCJdID0gMzEyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93U2NhbGVYXCJdID0gMzEzXSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWFwiXSA9IDMxNF0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIl0gPSAzMTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVYXCJdID0gMzE2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWFwiXSA9IDMxN10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIl0gPSAzMThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25TY2FsZVhcIl0gPSAzMTldID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWFwiXSA9IDMyMF0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVhcIl0gPSAzMjFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWFwiXSA9IDMyMl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWFwiXSA9IDMyM10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVhcIl0gPSAzMjRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblNjYWxlWFwiXSA9IDMyNV0gPSBcIklzVmlzaWJsZU1hcmdpblNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIl0gPSAzMjZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWFwiXSA9IDMyN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWFwiXSA9IDMyOF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVYXCJdID0gMzI5XSA9IFwiSXNFbmFibGVkU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiXSA9IDMzMF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWVwiXSA9IDMzMV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiXSA9IDMzMl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIl0gPSAzMzNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWVwiXSA9IDMzNF0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVlcIl0gPSAzMzVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWVwiXSA9IDMzNl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVZXCJdID0gMzM3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCJdID0gMzM4XSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiXSA9IDMzOV0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVlcIl0gPSAzNDBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCJdID0gMzQxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiXSA9IDM0Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVlcIl0gPSAzNDNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25TY2FsZVlcIl0gPSAzNDRdID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWVwiXSA9IDM0NV0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVlcIl0gPSAzNDZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiXSA9IDM0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM0OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVlcIl0gPSAzNDldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblNjYWxlWVwiXSA9IDM1MF0gPSBcIklzVmlzaWJsZU1hcmdpblNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIl0gPSAzNTFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWVwiXSA9IDM1Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWVwiXSA9IDM1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVZXCJdID0gMzU0XSA9IFwiSXNFbmFibGVkU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM1NV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM1Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiXSA9IDM1N10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNThdID0gXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWFwiXSA9IDM1OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvblhcIl0gPSAzNjBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM2MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25YXCJdID0gMzYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCJdID0gMzYzXSA9IFwiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWFwiXSA9IDM2NF0gPSBcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNjVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCJdID0gMzY2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWFwiXSA9IDM2N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIl0gPSAzNjhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNjldID0gXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWFwiXSA9IDM3MF0gPSBcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3Ml0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWFwiXSA9IDM3NV0gPSBcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvblhcIl0gPSAzNzZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWFwiXSA9IDM3N10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWFwiXSA9IDM3OF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkVHJhbnNsYXRpb25YXCJdID0gMzc5XSA9IFwiSXNFbmFibGVkVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4MF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4MV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWVwiXSA9IDM4Ml0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvbllcIl0gPSAzODNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWVwiXSA9IDM4NF0gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvbllcIl0gPSAzODVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25ZXCJdID0gMzg3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25ZXCJdID0gMzg4XSA9IFwiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWVwiXSA9IDM4OV0gPSBcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIl0gPSAzOTBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25ZXCJdID0gMzkxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWVwiXSA9IDM5Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIl0gPSAzOTNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvbllcIl0gPSAzOTRdID0gXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWVwiXSA9IDM5NV0gPSBcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOTZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOTldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWVwiXSA9IDQwMF0gPSBcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIl0gPSA0MDFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwMl0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCJdID0gNDA0XSA9IFwiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFhcIl0gPSA0MDVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WFwiXSA9IDQwNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRYXCJdID0gNDA3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRYXCJdID0gNDA4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WFwiXSA9IDQwOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiXSA9IDQxMF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIl0gPSA0MTFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRYXCJdID0gNDEyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0xheW91dFhcIl0gPSA0MTNdID0gXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUxheW91dFhcIl0gPSA0MTRdID0gXCJJc1Zpc2libGVTdHJva2VMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFhcIl0gPSA0MTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFhcIl0gPSA0MTZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFhcIl0gPSA0MTddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFhcIl0gPSA0MThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiXSA9IDQxOV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIl0gPSA0MjBdID0gXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRYXCJdID0gNDIyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFhcIl0gPSA0MjRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5MYXlvdXRYXCJdID0gNDI1XSA9IFwiSXNWaXNpYmxlTWFyZ2luTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRYXCJdID0gNDI2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WFwiXSA9IDQyN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRYXCJdID0gNDI4XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTGF5b3V0WFwiXSA9IDQyOV0gPSBcIklzRW5hYmxlZExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WVwiXSA9IDQzMF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRZXCJdID0gNDMxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFlcIl0gPSA0MzJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFlcIl0gPSA0MzNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRZXCJdID0gNDM0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCJdID0gNDM1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiXSA9IDQzNl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFlcIl0gPSA0MzddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TGF5b3V0WVwiXSA9IDQzOF0gPSBcIklzVmlzaWJsZVNoYWRvd0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WVwiXSA9IDQzOV0gPSBcIklzVmlzaWJsZVN0cm9rZUxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WVwiXSA9IDQ0MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WVwiXSA9IDQ0MV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WVwiXSA9IDQ0Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WVwiXSA9IDQ0M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCJdID0gNDQ0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiXSA9IDQ0NV0gPSBcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFlcIl0gPSA0NDddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpbkxheW91dFlcIl0gPSA0NTBdID0gXCJJc1Zpc2libGVNYXJnaW5MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFlcIl0gPSA0NTFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRZXCJdID0gNDUyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFlcIl0gPSA0NTNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRMYXlvdXRZXCJdID0gNDU0XSA9IFwiSXNFbmFibGVkTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIl0gPSA0NTddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDU4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NTldID0gXCJJc1Zpc2libGVQYWRkaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyV2lkdGhSZXF1ZXN0XCJdID0gNDYwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NjFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFdpZHRoUmVxdWVzdFwiXSA9IDQ2Ml0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiXSA9IDQ2M10gPSBcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIl0gPSA0NjRdID0gXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yV2lkdGhSZXF1ZXN0XCJdID0gNDY1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiXSA9IDQ2Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIl0gPSA0NjddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZV2lkdGhSZXF1ZXN0XCJdID0gNDY4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDY5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVXaWR0aFJlcXVlc3RcIl0gPSA0NzBdID0gXCJJc1Zpc2libGVTY2FsZVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDcxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDc0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5XaWR0aFJlcXVlc3RcIl0gPSA0NzVdID0gXCJJc1Zpc2libGVNYXJnaW5XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCJdID0gNDc2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NzddID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NzhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiXSA9IDQ3OV0gPSBcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDgwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4Ml0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4M10gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0hlaWdodFJlcXVlc3RcIl0gPSA0ODRdID0gXCJJc1Zpc2libGVQYWRkaW5nSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIl0gPSA0ODVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDg2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4N10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCJdID0gNDg4XSA9IFwiSXNWaXNpYmxlU2hhZG93SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VIZWlnaHRSZXF1ZXN0XCJdID0gNDg5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDkwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCJdID0gNDkxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhIZWlnaHRSZXF1ZXN0XCJdID0gNDkyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllIZWlnaHRSZXF1ZXN0XCJdID0gNDkzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIl0gPSA0OTRdID0gXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVIZWlnaHRSZXF1ZXN0XCJdID0gNDk1XSA9IFwiSXNWaXNpYmxlU2NhbGVIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMF0gPSBcIklzVmlzaWJsZU1hcmdpbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0hlaWdodFJlcXVlc3RcIl0gPSA1MDJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDUwM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIl0gPSA1MDRdID0gXCJJc0VuYWJsZWRIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwOF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTExXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxM10gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxNl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTIwXSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTIzXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjVdID0gXCJJc1Zpc2libGVNYXJnaW5NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyNl0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjldID0gXCJJc0VuYWJsZWRNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzM10gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzRdID0gXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM4XSA9IFwiSXNWaXNpYmxlU2hhZG93TWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDRdID0gXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ1XSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1MF0gPSBcIklzVmlzaWJsZU1hcmdpbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NTRdID0gXCJJc0VuYWJsZWRNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvclhcIl0gPSA1NTVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWFwiXSA9IDU1Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JYXCJdID0gNTU3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JYXCJdID0gNTU4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWFwiXSA9IDU1OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiXSA9IDU2MF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIl0gPSA1NjFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JYXCJdID0gNTYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0FuY2hvclhcIl0gPSA1NjNdID0gXCJJc1Zpc2libGVTaGFkb3dBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUFuY2hvclhcIl0gPSA1NjRdID0gXCJJc1Zpc2libGVTdHJva2VBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvclhcIl0gPSA1NjVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvclhcIl0gPSA1NjZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvclhcIl0gPSA1NjddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvclhcIl0gPSA1NjhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiXSA9IDU2OV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIl0gPSA1NzBdID0gXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NzFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JYXCJdID0gNTcyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NzNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvclhcIl0gPSA1NzRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5BbmNob3JYXCJdID0gNTc1XSA9IFwiSXNWaXNpYmxlTWFyZ2luQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JYXCJdID0gNTc2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWFwiXSA9IDU3N10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JYXCJdID0gNTc4XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkQW5jaG9yWFwiXSA9IDU3OV0gPSBcIklzRW5hYmxlZEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWVwiXSA9IDU4MF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JZXCJdID0gNTgxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvcllcIl0gPSA1ODJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvcllcIl0gPSA1ODNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JZXCJdID0gNTg0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCJdID0gNTg1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiXSA9IDU4Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvcllcIl0gPSA1ODddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93QW5jaG9yWVwiXSA9IDU4OF0gPSBcIklzVmlzaWJsZVNoYWRvd0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWVwiXSA9IDU4OV0gPSBcIklzVmlzaWJsZVN0cm9rZUFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWVwiXSA9IDU5MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWVwiXSA9IDU5MV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWVwiXSA9IDU5Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWVwiXSA9IDU5M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCJdID0gNTk0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiXSA9IDU5NV0gPSBcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvcllcIl0gPSA1OTddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpbkFuY2hvcllcIl0gPSA2MDBdID0gXCJJc1Zpc2libGVNYXJnaW5BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvcllcIl0gPSA2MDFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JZXCJdID0gNjAyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvcllcIl0gPSA2MDNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRBbmNob3JZXCJdID0gNjA0XSA9IFwiSXNFbmFibGVkQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIl0gPSA2MDVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblhcIl0gPSA2MDZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIl0gPSA2MDddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCJdID0gNjA4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblhcIl0gPSA2MDldID0gXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25YXCJdID0gNjEwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblhcIl0gPSA2MTFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWFwiXSA9IDYxMl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiXSA9IDYxM10gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIl0gPSA2MTRdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25YXCJdID0gNjE1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiXSA9IDYxNl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIl0gPSA2MTddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25YXCJdID0gNjE4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25YXCJdID0gNjE5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblhcIl0gPSA2MjBdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25YXCJdID0gNjIxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MjJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MjNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25YXCJdID0gNjI0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvblhcIl0gPSA2MjVdID0gXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCJdID0gNjI2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblhcIl0gPSA2MjddID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblhcIl0gPSA2MjhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFJvdGF0aW9uWFwiXSA9IDYyOV0gPSBcIklzRW5hYmxlZFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvbllcIl0gPSA2MzBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvbllcIl0gPSA2MzFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIl0gPSA2MzJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25ZXCJdID0gNjMzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvbllcIl0gPSA2MzRdID0gXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25ZXCJdID0gNjM1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvbllcIl0gPSA2MzZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWVwiXSA9IDYzN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiXSA9IDYzOF0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvbllcIl0gPSA2MzldID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCJdID0gNjQwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiXSA9IDY0MV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvbllcIl0gPSA2NDJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCJdID0gNjQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25ZXCJdID0gNjQ0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvbllcIl0gPSA2NDVdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjQ2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDhdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvbllcIl0gPSA2NTBdID0gXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25ZXCJdID0gNjUxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvbllcIl0gPSA2NTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvbllcIl0gPSA2NTNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFJvdGF0aW9uWVwiXSA9IDY1NF0gPSBcIklzRW5hYmxlZFJvdGF0aW9uWVwiO1xufSkoUHJvcGVydHlOYW1lIHx8IChQcm9wZXJ0eU5hbWUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXRcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvZWxsaXBzZS0yLWVsbGlwc2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVRleHRFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWxcIjtcbmltcG9ydCB7IENvbnRlbnRWaWV3IH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtdmlld1wiO1xuaW1wb3J0IHsgQ3VzdG9tQ29udHJvbCB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLWN1c3RvbS1jb250cm9sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVMaW5lRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2xpbmUtMi1saW5lXCI7XG5pbXBvcnQgeyBDb250ZW50UGFnZSB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXBhZ2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy92ZWN0b3ItMi1pY29uXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVCdXR0b25FbGVtZW50IH0gZnJvbSBcIi4vdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2J1dHRvbi0yLXhhbWxcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUVkaXRvckVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZWRpdG9yLTIteGFtbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRW50cnlFbGVtZW50IH0gZnJvbSBcIi4vdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2VudHJ5LTIteGFtbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlTGlzdFZpZXdFbGVtZW50IH0gZnJvbSBcIi4vdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2xpc3R2aWV3LTIteGFtbFwiO1xuZnVuY3Rpb24gY2hlY2tOb2RlVHlwZShubikge1xuICAgIGlmIChubi5wYXJlbnQudXR5cGUgIT09ICdOb25lJykge1xuICAgICAgICByZXR1cm4gcGFyc2VVdHlwZU5vZGVzKG5uKTtcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBubi5wYXJlbnQubm9kZTtcbiAgICAvLyBDaGVjayB0aGUgbm9kZSdzIHR5cGUgdXNpbmcgdGhlICd0eXBlJyBwcm9wZXJ0eVxuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0ZSQU1FJzpcbiAgICAgICAgICAgIGxldCBmcmFtZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IG5lc3RlZEZyYW1lTm9kZXMgPSAnJztcbiAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuZXN0ZWRGcmFtZU5vZGVzICs9IGNoZWNrTm9kZVR5cGUobikgKyBgXFxuYCk7XG4gICAgICAgICAgICBsZXQgZnJhbWVFbGVtZW50ID0gVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dChmcmFtZU5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFN0YXJ0VGFnKGZyYW1lRWxlbWVudCkgKyBgXFx0JHtuZXN0ZWRGcmFtZU5vZGVzfWAgKyBmb3JtYXRFbmRUYWcoZnJhbWVFbGVtZW50KTtcbiAgICAgICAgY2FzZSAnR1JPVVAnOlxuICAgICAgICAgICAgbGV0IGdyb3VwTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgbmVzdGVkR3JvdXBOb2RlcyA9ICcnO1xuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEdyb3VwTm9kZXMgKz0gY2hlY2tOb2RlVHlwZShuKSArIGBcXG5gKTtcbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRHcm91cE5vZGVzO1xuICAgICAgICBjYXNlICdURVhUJzpcbiAgICAgICAgICAgIGxldCB0ZXh0Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgdGV4dEVsZW1lbnQgPSBUcmFuc2xhdGVUZXh0RWxlbWVudCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcodGV4dEVsZW1lbnQpO1xuICAgICAgICBjYXNlICdFTExJUFNFJzpcbiAgICAgICAgICAgIGxldCBlbGxpcHNlTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgZWxsaXBzZUVsZW1lbnQgPSBUcmFuc2xhdGVFbGxpcHNlRWxlbWVudChlbGxpcHNlTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcoZWxsaXBzZUVsZW1lbnQpO1xuICAgICAgICBjYXNlICdMSU5FJzpcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgbGluZUVsZW1lbnQgPSBUcmFuc2xhdGVMaW5lRWxlbWVudChsaW5lTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcobGluZUVsZW1lbnQpO1xuICAgICAgICBjYXNlICdSRUNUQU5HTEUnOlxuICAgICAgICAgICAgbGV0IHJlY3RhbmdsZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IHJlY3RhbmdsZUVsZW1lbnQgPSBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KHJlY3RhbmdsZU5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFNob3J0VGFnKHJlY3RhbmdsZUVsZW1lbnQpO1xuICAgICAgICBjYXNlICdQT0xZR09OJzpcbiAgICAgICAgICAgIGxldCBwb2x5Z29uTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gJ1BvbHlnb24nO1xuICAgICAgICBjYXNlICdJTlNUQU5DRSc6XG4gICAgICAgICAgICBsZXQgaW5zdGFuY2VOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCBiaW5kaW5ncyA9IFtdOyAvL1RPRE86IGNoaWxkcmVuXG4gICAgICAgICAgICBsZXQgY3VzdG9tQ29udHJvbCA9IG5ldyBDdXN0b21Db250cm9sKGluc3RhbmNlTm9kZS5uYW1lLCBiaW5kaW5ncyk7XG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tQ29udHJvbC5nZXRTdGFydFRhZygpICsgY3VzdG9tQ29udHJvbC5nZXRFbmRUYWcoKTtcbiAgICAgICAgY2FzZSAnQ09NUE9ORU5UJzpcbiAgICAgICAgICAgIGxldCBjb21wb25lbnROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgbmV3IHJlc291cmNlIGZpbGUgLyBuZXcgd2luZG93XG4gICAgICAgICAgICBsZXQgY29udGVudFZpZXcgPSBuZXcgQ29udGVudFZpZXcobm9kZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRDb21wb25lbnQgPSAnJztcbiAgICAgICAgICAgIG5uLmNoaWxkcmVuLmZvckVhY2gobiA9PiBuZXN0ZWRDb21wb25lbnQgKz0gYFxcdCR7Y2hlY2tOb2RlVHlwZShuKX1cXG5gKTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50Vmlldy5nZXRTdGFydFRhZygpICsgYFxcbiR7bmVzdGVkQ29tcG9uZW50fWAgKyBjb250ZW50Vmlldy5nZXRFbmRUYWcoKTtcbiAgICAgICAgLy9BcmUgbm90IGdldHRpbmcgY2FzdGV0IFxuICAgICAgICBjYXNlICdWRUNUT1InOlxuICAgICAgICAgICAgbGV0IHZlY3Rvck5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IHZlY3Rvck5vdGUgPSBgLy8gUGxlYXNlIGV4cG9ydCAke3ZlY3Rvck5vZGUubmFtZX0gYXMgYSAucG5nLSBvciAuc3ZnIGZpbGUgYW5kIHBsYWNlIGluIHRoZSBSZXNvdXJjZS9JbWFnZXMvIGZvbGRlclxcbmA7XG4gICAgICAgICAgICBsZXQgdmVjdG9yRWxlbWVudCA9IFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQodmVjdG9yTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yTm90ZSArIGZvcm1hdFNob3J0VGFnKHZlY3RvckVsZW1lbnQpO1xuICAgICAgICBjYXNlICdTVEFSJzpcbiAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5vZGU7XG4gICAgICAgIGNhc2UgJ0JPT0xFQU5fT1BFUkFUSU9OJzpcbiAgICAgICAgICAgIGxldCBib29sZWFuT3BlcmF0aW9uTm9kZSA9IG5vZGU7XG4gICAgICAgIGNhc2UgJ1NMSUNFJzpcbiAgICAgICAgICAgIGxldCBzbGljZU5vZGUgPSBub2RlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGA8IS0tIFRoaXMgcGx1Z2luIGlzIHVuZm9ydHVhbmF0ZWx5IHVuYWJsZSB0byBjYXN0ICR7bm9kZS50eXBlfXMgYXMgTUFVSSBlbGVtZW50cy4gLS0+YDtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJzZVV0eXBlTm9kZXMobm4pIHtcbiAgICBsZXQgbm9kZSA9IG5uLnBhcmVudDtcbiAgICAvLyBDaGVjayB0aGUgbm9kZSdzIHR5cGUgdXNpbmcgdGhlICd0eXBlJyBwcm9wZXJ0eVxuICAgIHN3aXRjaCAobm9kZS51dHlwZSkge1xuICAgICAgICBjYXNlICdCVVRUT04nOlxuICAgICAgICAgICAgbGV0IGJ1dHRvbk5vZGUgPSBub2RlLm5vZGU7XG4gICAgICAgICAgICBsZXQgYnV0dG9uRWxlbWVudCA9IFRyYW5zbGF0ZUJ1dHRvbkVsZW1lbnQoYnV0dG9uTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcoYnV0dG9uRWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ0VESVRPUic6XG4gICAgICAgICAgICBsZXQgZWRpdG9yTm9kZSA9IG5vZGUubm9kZTtcbiAgICAgICAgICAgIGxldCBlZGl0b3JFbGVtZW50ID0gVHJhbnNsYXRlRWRpdG9yRWxlbWVudChlZGl0b3JOb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhlZGl0b3JFbGVtZW50KTtcbiAgICAgICAgY2FzZSAnRU5UUlknOlxuICAgICAgICAgICAgbGV0IGVudHJ5Tm9kZSA9IG5vZGUubm9kZTtcbiAgICAgICAgICAgIGxldCBlbnRyeUVsZW1lbnQgPSBUcmFuc2xhdGVFbnRyeUVsZW1lbnQoZW50cnlOb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhlbnRyeUVsZW1lbnQpO1xuICAgICAgICBjYXNlICdMSVNUVklFVyc6XG4gICAgICAgICAgICBsZXQgbGlzdFZpZXdOb2RlID0gbm9kZS5ub2RlO1xuICAgICAgICAgICAgbGV0IGxpc3RWaWV3RWxlbWVudCA9IFRyYW5zbGF0ZUxpc3RWaWV3RWxlbWVudChsaXN0Vmlld05vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFNob3J0VGFnKGxpc3RWaWV3RWxlbWVudCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmlnbWEobm9kZXMpIHtcbiAgICBsZXQgeGFtbENvZGUgPSBcIlwiO1xuICAgIGxldCByb290bm9kZSA9IG5vZGVzWzBdO1xuICAgIGxldCBjb250ZW50UGFnZSA9IG5ldyBDb250ZW50UGFnZShyb290bm9kZS5wYXJlbnQubm9kZS5uYW1lKTtcbiAgICB4YW1sQ29kZSArPSBjb250ZW50UGFnZS5nZXRTdGFydFRhZygpICsgbmV3bGluZSgpO1xuICAgIHJvb3Rub2RlLmNoaWxkcmVuLmZvckVhY2goYyA9PiB7XG4gICAgICAgIHhhbWxDb2RlICs9IGNoZWNrTm9kZVR5cGUoYyk7IC8vY2hlY2sgaWYgaXQgaXMgYSB1c2VyIGRlZmluZWQgbm9kZSBvciBub3RcbiAgICB9KTtcbiAgICB4YW1sQ29kZSArPSBjb250ZW50UGFnZS5nZXRFbmRUYWcoKTtcbiAgICByZXR1cm4geGFtbENvZGU7XG59XG5mdW5jdGlvbiBmb3JtYXRTdGFydFRhZyhlbGVtZW50KSB7XG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBlbGVtZW50LnByb3BlcnRpZXNcbiAgICAgICAgLmZpbHRlcigocHJvcCkgPT4gKHByb3AudmFsdWUgIT09ICdOb25lJykpIC8vIEV4Y2x1ZGUgcHJvcGVydGllcyB3aXRoIHZhbHVlICdOb25lJyBiZWNhdXNlIHRoZW4gaXQgaXMgc2V0IHRvIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIHJldHVybiBgPCR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0gJHtwcm9wZXJ0eVN0cmluZ30+YCArIG5ld2xpbmUoKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFNob3J0VGFnKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xuICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiBwcm9wLnZhbHVlICE9PSAnTm9uZScpIC8vIEV4Y2x1ZGUgcHJvcGVydGllcyB3aXRoIHZhbHVlICdOb25lJyBiZWNhdXNlIHRoZW4gaXQgaXMgc2V0IHRvIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcbiAgICAgICAgLmpvaW4oXCIgXCIgKyBuZXdsaW5lKCkgKyBgXFx0YCk7XG4gICAgcmV0dXJuIGA8JHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfSAke3Byb3BlcnR5U3RyaW5nfS8+YCArIG5ld2xpbmUoKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdEVuZFRhZyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGA8LyR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0+YDtcbn1cbmZ1bmN0aW9uIG5ld2xpbmUoKSB7XG4gICAgcmV0dXJuIGBcXG5gO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dChub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLmxheW91dE1vZGUpIHtcbiAgICAgICAgY2FzZSBcIkhPUklaT05UQUxcIjpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVIb3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpO1xuICAgICAgICBjYXNlIFwiVkVSVElDQUxcIjpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVWZXJ0aWNhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVGbGV4TGF5b3V0RWxlbWVudChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBUcmFuc2xhdGVGbGV4TGF5b3V0RWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgZmxleExheW91dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNwYWNpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUobm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnbkNvbnRlbnQsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYUFsaWduQ29udGVudChub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25JdGVtcywgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXMobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldyYXAsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYVdyYXBUb1hhbWxXcmFwKG5vZGUubGF5b3V0V3JhcCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuR3JvdywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLmxheW91dEdyb3cudG9TdHJpbmcoKSkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25TZWxmLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyhub2RlLmxheW91dEFsaWduKSB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlNocmluaywgICAgICAgICAgICB2YWx1ZTogbm9kZS5yZXNjYWxlLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5PcmRlciwgICAgICAgICAgICAgdmFsdWU6IG5vZGUuIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuQmFzaXMsICAgICAgICAgICAgIHZhbHVlOiAgIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuRGlyZWN0aW9uLCAgICAgICAgIHZhbHVlOiBub2RlLmxheW91dE1vZGUgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5KdXN0aWZ5Q29udGVudCwgICAgdmFsdWU6IG5vZGUuIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuUG9zaXRpb24sICAgICAgICAgIHZhbHVlOiBub2RlLiB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlZlcnRpY2FsT3B0aW9ucywgICB2YWx1ZTogbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXN9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogbm9kZS5sZXR0ZXJTcGFjaW5nLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgZmxleExheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkZsZXhMYXlvdXQsIHByb3BlcnRpZXM6IGZsZXhMYXlvdXRQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGZsZXhMYXlvdXRFbGVtZW50OyAvL2Zvcm1hdFN0YXJ0VGFnKGZsZXhMYXlvdXRFbGVtZW50KSAgKyBmb3JtYXRFbmRUYWcoZmxleExheW91dEVsZW1lbnQpO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAnMCcpIHtcbiAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBUcmFuc2xhdGVIb3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBob3Jpem9udGFsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkpIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuVmVydGljYWxPcHRpb25zLCAgIHZhbHVlOiBub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtc30sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuSG9yaXpvbnRhbE9wdGlvbnMsIHZhbHVlOiBub2RlLmxldHRlclNwYWNpbmcudG9TdHJpbmcoKSB9XG4gICAgXTtcbiAgICBjb25zdCBob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5Ib3Jpem9udGFsU3RhY2tMYXlvdXQsIHByb3BlcnRpZXM6IGhvcml6b250YWxTdGFja0xheW91dFByb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gaG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudDsgLy9mb3JtYXRTdGFydFRhZyhob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KSAgKyBmb3JtYXRFbmRUYWcoaG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudCk7XG59XG5mdW5jdGlvbiBUcmFuc2xhdGVWZXJ0aWNhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgdmVydGljYWxTdGFja0xheW91dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNwYWNpbmcsIHZhbHVlOiBub2RlLml0ZW1TcGFjaW5nLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5WZXJ0aWNhbE9wdGlvbnMsICAgdmFsdWU6IG5vZGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5Ib3Jpem9udGFsT3B0aW9ucywgdmFsdWU6IG5vZGUubGV0dGVyU3BhY2luZy50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5WZXJ0aWNhbFN0YWNrTGF5b3V0LCBwcm9wZXJ0aWVzOiB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcyB9O1xuICAgIHJldHVybiB2ZXJ0aXZhbFN0YWNrTGF5b3V0RWxlbWVudDsgLy9mb3JtYXRTdGFydFRhZyh2ZXJ0aXZhbFN0YWNrTGF5b3V0RWxlbWVudCkgICsgZm9ybWF0RW5kVGFnKHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkge1xuICAgIGlmIChub2RlLnBhZGRpbmdMZWZ0ID09IG5vZGUucGFkZGluZ1JpZ2h0ICYmIG5vZGUucGFkZGluZ0xlZnQgPT0gbm9kZS5wYWRkaW5nVG9wICYmIG5vZGUucGFkZGluZ0xlZnQgPT0gbm9kZS5wYWRkaW5nQm90dG9tKSB7XG4gICAgICAgIHJldHVybiBub2RlLnBhZGRpbmdMZWZ0LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7bm9kZS5wYWRkaW5nTGVmdH0sICR7bm9kZS5wYWRkaW5nVG9wfSwgJHtub2RlLnBhZGRpbmdSaWdodH0sICR7bm9kZS5wYWRkaW5nQm90dG9tfSxgO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXModmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgXCJNQVhcIjpcbiAgICAgICAgICAgIHJldHVybiAnRW5kJztcbiAgICAgICAgY2FzZSBcIkNFTlRFUlwiOlxuICAgICAgICAgICAgcmV0dXJuICdDZW50ZXInO1xuICAgICAgICBjYXNlIFwiTUlOXCI6XG4gICAgICAgICAgICByZXR1cm4gJ1N0YXJ0JztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnU3RyZXRjaCc7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFXcmFwVG9YYW1sV3JhcCh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSAnV1JBUCc6XG4gICAgICAgICAgICByZXR1cm4gJ1dyYXAnO1xuICAgICAgICBjYXNlICdOT19XUkFQJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFBbGlnbkNvbnRlbnQodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ1NQQUNFX0JFVFdFRU4nOlxuICAgICAgICAgICAgcmV0dXJuICdTcGFjZUJldHdlZW4nO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdTdHJldGNoJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFbGxpcHNlRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgZWxsaXBzZVByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRmlsbCwgdmFsdWU6IG5vZGUuZmlsbHMudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2VUaGlja25lc3MsIHZhbHVlOiBub2RlLnN0cm9rZVdlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6ICcjMDAwMDAwJyB9LFxuICAgICAgICAvLyBBZGQgb3RoZXIgZWxsaXBzZS1yZWxhdGVkIHByb3BlcnRpZXMgYXMgbmVlZGVkXG4gICAgXTtcbiAgICBjb25zdCBlbGxpcHNlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWxsaXBzZSwgcHJvcGVydGllczogZWxsaXBzZVByb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gZWxsaXBzZUVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVMaW5lRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgbGluZVByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlgxLCB2YWx1ZTogJzAnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlkxLCB2YWx1ZTogJzAnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlgyLCB2YWx1ZTogJzUwJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5ZMiwgdmFsdWU6ICcwJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2UsIHZhbHVlOiAnIzAwMDAwMCcgfSxcbiAgICAgICAgLy8gQWRkIG90aGVyIGxpbmUtcmVsYXRlZCBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxuICAgIF07XG4gICAgY29uc3QgbGluZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxpbmUsIHByb3BlcnRpZXM6IGxpbmVQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGxpbmVFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlUmVjdGFuZ2xlRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGgsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9XG4gICAgICAgIC8vIEFkZCBvdGhlciByZWN0YW5nbGUtcmVsYXRlZCBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxuICAgIF07XG4gICAgY29uc3QgcmVjdGFuZ2xlRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuUmVjdGFuZ2xlLCBwcm9wZXJ0aWVzOiByZWN0YW5nbGVQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIHJlY3RhbmdsZUVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVWZWN0b3JFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCB2ZWN0b3JQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHQsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNvdXJjZSwgdmFsdWU6IHRyYW5zbGF0ZVNvdXJjZShub2RlKSB9LFxuICAgICAgICAvLyBBZGQgb3RoZXIgZWxsaXBzZS1yZWxhdGVkIHByb3BlcnRpZXMgYXMgbmVlZGVkXG4gICAgXTtcbiAgICBjb25zdCB2ZWN0b3JFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5JbWFnZSwgcHJvcGVydGllczogdmVjdG9yUHJvcGVydGllcyB9O1xuICAgIHJldHVybiB2ZWN0b3JFbGVtZW50O1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlU291cmNlKG5vZGUpIHtcbiAgICByZXR1cm4gYCR7bm9kZS5uYW1lfS5wbmdgO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlVGV4dEVsZW1lbnQobm9kZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgY29uc3QgdGV4dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkNoYXJhY3RlclNwYWNpbmcsIHZhbHVlOiAoX2EgPSB0cmFuc2xhdGVMZXR0ZXJTcGFjaW5nKG5vZGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF0dHJpYnV0ZXMsIHZhbHVlOiB0cmFuc2xhdGVGb250V2VpZ2h0VG9Gb250QXR0cmlidXRlcyhub2RlLmZvbnRXZWlnaHQpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdXRvU2NhbGluZ0VuYWJsZWQsIHZhbHVlOiB0cmFuc2xhdGVUZXh0QXV0b1Jlc2l6ZVRvRm9udEF1dG9TY2FsaW5nRW5hYmxlZChub2RlLnRleHRBdXRvUmVzaXplKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250U2l6ZSwgdmFsdWU6IG5vZGUuZm9udFNpemUudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Ib3Jpem9udGFsVGV4dEFsaWdubWVudCwgdmFsdWU6IHRyYW5zbGF0ZUhvcml6b250YWxBbGlnbm1lbnQobm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lQnJlYWtNb2RlLCB2YWx1ZTogdHJhbnNsYXRlVGV4dFRydW5jYXRpb25Ub0xpbmVCcmVha01vZGUobm9kZS50ZXh0VHJ1bmNhdGlvbikgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTGluZUhlaWdodCwgdmFsdWU6IChfYiA9IHRyYW5zbGF0ZUxpbmVIZWlnaHQobm9kZSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5NYXhMaW5lcywgdmFsdWU6IChfZCA9IChfYyA9IG5vZGUubWF4TGluZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dCwgdmFsdWU6IG5vZGUuY2hhcmFjdGVycyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0Q29sb3IsIHZhbHVlOiAoX2UgPSBnZXRIZXhDb2xvckZyb21GaWxsKG5vZGUpKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dERlY29yYXRpb25zLCB2YWx1ZTogdHJhbnNsYXRlVGV4dERlY29yYXRpb25Ub1hBTUwobm9kZS50ZXh0RGVjb3JhdGlvbikgfHwgJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHRUcmFuc2Zvcm0sIHZhbHVlOiB0cmFuc2xhdGVUZXh0Q2FzZVRvWEFNTChub2RlLnRleHRDYXNlKSB8fCAnTm9uZScgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0VHlwZSwgICAgICAgICAgICAgICAgdmFsdWU6ICdUZXh0JyB9IC8vIFNldCBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIEZpZ21hIHByb3BlcnRpZXNcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCAgICAgICAgICAgICAgICAgdmFsdWU6ICcwJyB9LCAvLyBTZXQgYXBwcm9wcmlhdGVseSBiYXNlZCBvbiBGaWdtYSBwcm9wZXJ0aWVzXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEZhbWlseSwgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmZvbnROYW1lIH0sIC8vIFNldCBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIEZpZ21hIHByb3BlcnRpZXNcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5Gb3JtYXR0ZWRUZXh0LCAgICAgICAgICAgdmFsdWU6ICcnIH0sIC8vIFNldCBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIEZpZ21hIHByb3BlcnRpZXNcbiAgICBdO1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5MYWJlbCwgcHJvcGVydGllczogdGV4dFByb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gdGV4dEVsZW1lbnQ7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVMaW5lSGVpZ2h0KG5vZGUpIHtcbiAgICBsZXQgbGggPSBub2RlLmxpbmVIZWlnaHQ7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBsaCkge1xuICAgICAgICByZXR1cm4gbGgudmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVMZXR0ZXJTcGFjaW5nKG5vZGUpIHtcbiAgICBsZXQgbHMgPSBub2RlLmxldHRlclNwYWNpbmcudmFsdWU7XG4gICAgaWYgKGxzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBscy50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldEhleENvbG9yRnJvbUZpbGwodGV4dE5vZGUpIHtcbiAgICBpZiAoIXRleHROb2RlIHx8ICF0ZXh0Tm9kZS5maWxscyB8fCB0ZXh0Tm9kZS5maWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGZpbGwgPSB0ZXh0Tm9kZS5maWxsc1swXTsgLy8gV2UgYXNzdW1lIHRoZSBmaXJzdCBmaWxsIGlzIHRoZSBvbmUgd2Ugd2FudFxuICAgIGlmIChmaWxsID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgY29uc3Qgc29saWRGaWxsID0gZmlsbDtcbiAgICAgICAgcmV0dXJuIHJnYlRvSGV4KHNvbGlkRmlsbC5jb2xvcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZpbGwudHlwZS5zdGFydHNXaXRoKCdHUkFESUVOVCcpKSB7XG4gICAgICAgIC8vIEhhbmRsZSBncmFkaWVudCBmaWxscyAoaWYgbmVlZGVkKVxuICAgICAgICAvLyBZb3UgY2FuIGFkZCBsb2dpYyBoZXJlIHRvIGhhbmRsZSBncmFkaWVudCBmaWxsc1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcbiAgICBjb25zdCByID0gTWF0aC5yb3VuZChyZ2IuciAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgZyA9IE1hdGgucm91bmQocmdiLmcgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGIgPSBNYXRoLnJvdW5kKHJnYi5iICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBsZXQgY29sb3IgPSBgIyR7cn0ke2d9JHtifWA7XG4gICAgaWYgKGNvbG9yID09PSAnIzAwMDAwMCcpIHtcbiAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dENhc2VUb1hBTUwodGV4dENhc2UpIHtcbiAgICBzd2l0Y2ggKHRleHRDYXNlKSB7XG4gICAgICAgIGNhc2UgXCJVUFBFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiVXBwZXJjYXNlXCI7XG4gICAgICAgIGNhc2UgXCJMT1dFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiTG93ZXJjYXNlXCI7XG4gICAgICAgIGNhc2UgXCJUSVRMRVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiQ2FwaXRhbGl6ZVwiO1xuICAgICAgICAvLyBGaWdtYSBcIk9SSUdJTkFMXCIgY29ycmVzcG9uZHMgdG8gXCJOb25lXCIgaW4gWEFNTCwgd2hpY2ggbGVhdmVzIHRoZSB0ZXh0IGNhc2UgYXMgaXMuXG4gICAgICAgIGNhc2UgXCJPUklHSU5BTFwiOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiOyAvLyBEZWZhdWx0IHRvIG5vIHRyYW5zZm9ybWF0aW9uXG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dERlY29yYXRpb25Ub1hBTUwodGV4dERlY29yYXRpb24pIHtcbiAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJTVFJJS0VUSFJPVUdIXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJTdHJpa2V0aHJvdWdoXCI7XG4gICAgICAgIGNhc2UgXCJVTkRFUkxJTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlVuZGVybGluZVwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUcnVuY2F0aW9uVG9MaW5lQnJlYWtNb2RlKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcbiAgICAvL09CUyAhIERvIG5vdCBmdWxmaWxsIGFsbCBMaW5lQnJlYWtNb2RlcyBvZiBYYW1sLiBTZWUgZm9sbG93aW5nIGxpbmsgZm9yIG1vcmUgaW5mbyBhYm91dCBMaW5lQnJlYWtNb2RlOiBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2FwaS9taWNyb3NvZnQubWF1aS5saW5lYnJlYWttb2RlP3ZpZXc9bmV0LW1hdWktNy4wXG4gICAgc3dpdGNoIChmaWdtYVRleHRUcnVuY2F0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJFTkRJTkdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlRhaWxUcnVuY2F0aW9uXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIERlZmF1bHQgdG8gTm9XcmFwIGlmIHRoZSB2YWx1ZSBpcyBub3QgcmVjb2duaXplZFxuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcbiAgICBzd2l0Y2ggKGZpZ21hVGV4dEF1dG9SZXNpemUpIHtcbiAgICAgICAgY2FzZSBcIk5PTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBcImZhbHNlXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIHdoZW4gcmV0dXJuaW5nIG5vbmUgaXQgd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHhhbWwgdGV4dCwgc2luY2UgaXQgaXMgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICB9XG59XG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdHJhbnNsYXRlIEZpZ21hIGhvcml6b250YWwgdGV4dCBhbGlnbm1lbnQgdG8gWEFNTFxuZnVuY3Rpb24gdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChhbGlnbikge1xuICAgIC8vVE9ETzogZml4IHRoaXMgdG8gY29ycmVjdCB4YW1sXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJDZW50ZXJcIjtcbiAgICAgICAgY2FzZSBcIlJJR0hUXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJSaWdodFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZvbnRXZWlnaHRUb0ZvbnRBdHRyaWJ1dGVzKGZpZ21hRm9udFdlaWdodCkge1xuICAgIGlmIChmaWdtYUZvbnRXZWlnaHQgPiA0MDApIHtcbiAgICAgICAgcmV0dXJuICdCb2xkJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnTm9uZSc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgYnV0dG9uUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkJ1dHRvbiwgcHJvcGVydGllczogYnV0dG9uUHJvcGVydGllcyB9O1xuICAgIHJldHVybiBidXR0b25FbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRWRpdG9yRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgZWRpdG9yUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkVkaXRvciwgcHJvcGVydGllczogZWRpdG9yUHJvcGVydGllcyB9O1xuICAgIHJldHVybiBlZGl0b3JFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlRW50cnlFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBlbnRyeVByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9XG4gICAgXTtcbiAgICBjb25zdCBlbnRyeUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkVudHJ5LCBwcm9wZXJ0aWVzOiBlbnRyeVByb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gZW50cnlFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uL1Byb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlTGlzdFZpZXdFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBsaXN0dmlld1Byb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9XG4gICAgXTtcbiAgICBjb25zdCBsaXN0dmlld0VsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxpc3RWaWV3LCBwcm9wZXJ0aWVzOiBsaXN0dmlld1Byb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gbGlzdHZpZXdFbGVtZW50O1xufVxuIiwiZXhwb3J0IGNsYXNzIEN1c3RvbUNvbnRyb2wge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xOYW1lLCBiaW5kaW5ncykge1xuICAgICAgICB0aGlzLmVuZFRhZyA9ICcvPic7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSBiaW5kaW5ncztcbiAgICAgICAgdGhpcy5zdGFydFRhZyA9IHRoaXMuRm9ybWF0U3RhcnRUYWcoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gY29udHJvbE5hbWU7XG4gICAgfVxuICAgIGdldFN0YXJ0VGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRhZztcbiAgICB9XG4gICAgZ2V0RW5kVGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmRUYWc7XG4gICAgfVxuICAgIEZvcm1hdFN0YXJ0VGFnKCkge1xuICAgICAgICBsZXQgc2V0QmluZGluZ3MgPSAnJztcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKGIgPT4gc2V0QmluZGluZ3MgKyBgJHtiLm5hbWV9ID0gJHtiLnZhbHVlfVxcbmApO1xuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxjb250cm9sOiR7dGhpcy5uYW1lfSAke3NldEJpbmRpbmdzfWA7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5zdGFydEVuZFRhZyA9ICc+JztcbiAgICAgICAgdGhpcy5jb250cm9scyA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gRm9ybWF0UGFnZVN0YXJ0VGFnKGNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuZW5kVGFnID0gJ1xcbjwvQ29udGVudFBhZ2U+JztcbiAgICAgICAgdGhpcy5uYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBnZXRTdGFydFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUYWcgKyB0aGlzLnN0YXJ0RW5kVGFnO1xuICAgIH1cbiAgICBnZXRFbmRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRDb250cm9sKHBhZ2UpIHtcbiAgICBwYWdlLnN0YXJ0VGFnID0gYCR7cGFnZS5zdGFydFRhZ31cclxuICAgICAgICAgICAgICAgICAgICB4bWxuczpjb250cm9scz1jbHItbmFtZXNwYWNlOkN1c3RvbUNvbnRyb2xzXFxuYDtcbn1cbmZ1bmN0aW9uIEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gYDxDb250ZW50UGFnZSB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vZG90bmV0LzIwMjEvbWF1aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM6eD1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd2luZngvMjAwOS94YW1sXCJcclxuICAgICAgICAgICAgICAgICAgICB4OkNsYXNzPSR7Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHg6TmFtZT0ke2NsYXNzTmFtZX1cXG5gO1xufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRlbnRWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5zdGFydEVuZFRhZyA9ICc+JztcbiAgICAgICAgdGhpcy5jb250cm9scyA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gRm9ybWF0UGFnZVN0YXJ0VGFnKGNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuZW5kVGFnID0gJ1xcbjwvQ29udGVudFZpZXc+JztcbiAgICAgICAgdGhpcy5uYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBnZXRTdGFydFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUYWcgKyB0aGlzLnN0YXJ0RW5kVGFnO1xuICAgIH1cbiAgICBnZXRFbmRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcbiAgICB9XG59XG5mdW5jdGlvbiBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGBcclxuICAgIC8vQ3JlYXRlIGEgZm9sZGVyIHVuZGVyIFJlc291cmNlcyBjYWxsZWQgXCJDdXN0b21Db250cm9sc1wiIGFuZCBtYWtlIGEgbmV3IFwiQ29udGVudFZpZXdcIiBpbiB0aGVyZSBcclxuICAgIDxDb250ZW50VmlldyB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vZG90bmV0LzIwMjEvbWF1aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM6eD1cImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd2luZngvMjAwOS94YW1sXCJcclxuICAgICAgICAgICAgICAgICAgICB4OkNsYXNzPUN1c3RvbUNvbnRyb2xzLiR7Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHg6TmFtZT0ke2NsYXNzTmFtZX1cXG5gO1xufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgUGFyc2VGaWdtYSB9IGZyb20gXCIuL1hhbWxQYXJzZXJcIjtcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuLy8gc3JjL3BsdWdpbi50c1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA2MDAsIGhlaWdodDogNDAwIH0pO1xuZnVuY3Rpb24gbWFrZURpc3BsYXlOb2RlKF9ub2RlKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogX25vZGUubmFtZSwgdXR5cGU6ICdOb25lJywgbm9kZTogX25vZGUgfTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuVG9OZXN0ZWROb2Rlcyhjbikge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBjbi5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IG5uID0gdHJhdmVyc2UoYyk7XG4gICAgICAgIGxpc3QucHVzaChubik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG59XG5mdW5jdGlvbiB0cmF2ZXJzZShjbikge1xuICAgIGNvbnN0IGRuID0gbWFrZURpc3BsYXlOb2RlKGNuKTtcbiAgICBjb25zdCBubiA9IHtcbiAgICAgICAgcGFyZW50OiBkbixcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgaWYgKCdjaGlsZHJlbicgaW4gY24pIHtcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGhhcyBjaGlsZHJlbiwgd2UgbXVzdCBnbyB0aHJvdWdoIHRoZW0gYW5kIG1ha2UgdGhlbSBpbnRvIG5lc3RlZCBub2Rlc1xuICAgICAgICBubi5jaGlsZHJlbiA9IGNoaWxkcmVuVG9OZXN0ZWROb2Rlcyhjbi5jaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBubjtcbn1cbmNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbmNvbnN0IHJvb3ROb2RlID0gbWFrZURpc3BsYXlOb2RlKHNlbGVjdGlvbik7XG5sZXQgbGlzdCA9IFtdO1xuaWYgKCdjaGlsZHJlbicgaW4gc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uLmNoaWxkcmVuLmZvckVhY2goYyA9PiBsaXN0LnB1c2goYykpO1xufVxuY29uc3Qgbm9kZXMgPSBbXG4gICAge1xuICAgICAgICBwYXJlbnQ6IHJvb3ROb2RlLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGxpc3QpLFxuICAgIH0sXG5dO1xubGV0IG5vZGVzMlBhcnNlID0gW107XG5maWdtYS51aS5wb3N0TWVzc2FnZShub2Rlcyk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZ290IHRoaXMgZnJvbSB0aGUgVUlcIiwgbWVzc2FnZSk7XG4gICAgbm9kZXMyUGFyc2UgPSB1cGRhdGVEaXNwbGF5Tm9kZVVUeXBlKG5vZGVzLCBtZXNzYWdlKTtcbiAgICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5Tm9kZVVUeXBlKHNlbGVjdGlvbiwgbWVzc2FnZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBtYXBwaW5nIG9mIEJhc2VOb2RlLmlkIHRvIHNlbGVjdGVkVmFsdWVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZU1hcCA9IHt9O1xuICAgICAgICBtZXNzYWdlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVNYXBbaXRlbS5ub2RlLnBhcmVudC5ub2RlLmlkXSA9IGl0ZW0uc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBhcnJheSB0byBob2xkIHRoZSB1cGRhdGVkIHNlbGVjdGlvblxuICAgICAgICBjb25zdCB1cGRhdGVkU2VsZWN0aW9uID0gW107XG4gICAgICAgIC8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0byB1cGRhdGUgbm9kZXNcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRyZW4obm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVNYXBbbm9kZS5wYXJlbnQubm9kZS5pZF07XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgd2l0aCB1cGRhdGVkIHV0eXBlXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFBhcmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbm9kZS5wYXJlbnQpLCB7IHV0eXBlOiBzZWxlY3RlZFZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHBhcmVudDogdXBkYXRlZFBhcmVudCwgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gdXBkYXRlQ2hpbGRyZW4oY2hpbGQpKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gdXBkYXRlIGlzIG5lZWRlZCwgcmV0dXJuIHRoZSBvcmlnaW5hbCBub2RlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFyZW50OiBub2RlLnBhcmVudCwgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gdXBkYXRlQ2hpbGRyZW4oY2hpbGQpKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgc2VsZWN0aW9uIGFuZCB1cGRhdGUgbm9kZXMgYmFzZWQgb24gdGhlIG1lc3NhZ2VcbiAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKG5lc3RlZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWROb2RlID0gdXBkYXRlQ2hpbGRyZW4obmVzdGVkTm9kZSk7XG4gICAgICAgICAgICB1cGRhdGVkU2VsZWN0aW9uLnB1c2godXBkYXRlZE5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRTZWxlY3Rpb247XG4gICAgfVxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gUGFyc2VGaWdtYShub2RlczJQYXJzZSk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSAndGV4dGZpbGUudHh0JztcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZzLndyaXRlRmlsZShmaWxlTmFtZSwgdGV4dENvbnRlbnQsICd1dGY4Jyk7XG4gICAgfSkpKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9