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
    ElementName[ElementName["Label"] = 0] = "Label";
    ElementName[ElementName["Button"] = 1] = "Button";
    ElementName[ElementName["StackFrame"] = 2] = "StackFrame";
    ElementName[ElementName["TextBlock"] = 3] = "TextBlock";
    ElementName[ElementName["TextBox"] = 4] = "TextBox";
    ElementName[ElementName["ComboBox"] = 5] = "ComboBox";
    ElementName[ElementName["ListBox"] = 6] = "ListBox";
    ElementName[ElementName["ListView"] = 7] = "ListView";
    ElementName[ElementName["RadioButton"] = 8] = "RadioButton";
    ElementName[ElementName["CheckBox"] = 9] = "CheckBox";
    ElementName[ElementName["Image"] = 10] = "Image";
    ElementName[ElementName["Border"] = 11] = "Border";
    ElementName[ElementName["ScrollViewer"] = 12] = "ScrollViewer";
    ElementName[ElementName["ProgressBar"] = 13] = "ProgressBar";
    ElementName[ElementName["Slider"] = 14] = "Slider";
    ElementName[ElementName["TabControl"] = 15] = "TabControl";
    ElementName[ElementName["TabItem"] = 16] = "TabItem";
    ElementName[ElementName["Menu"] = 17] = "Menu";
    ElementName[ElementName["MenuItem"] = 18] = "MenuItem";
    ElementName[ElementName["ContextMenu"] = 19] = "ContextMenu";
    ElementName[ElementName["Popup"] = 20] = "Popup";
    ElementName[ElementName["Rectangle"] = 21] = "Rectangle";
    ElementName[ElementName["Ellipse"] = 22] = "Ellipse";
    ElementName[ElementName["Polygon"] = 23] = "Polygon";
    ElementName[ElementName["Line"] = 24] = "Line";
    ElementName[ElementName["HorizontalStackLayout"] = 25] = "HorizontalStackLayout";
    ElementName[ElementName["VerticalStackLayout"] = 26] = "VerticalStackLayout";
    ElementName[ElementName["FlexLayout"] = 27] = "FlexLayout";
    ElementName[ElementName["Frame"] = 28] = "Frame";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParseFigma: () => (/* binding */ ParseFigma),
/* harmony export */   formatEndTag: () => (/* binding */ formatEndTag),
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









function checkNodeType(node) {
    // Check the node's type using the 'type' property
    switch (node.type) {
        case 'FRAME':
            let frameNode = node;
            //TODO: Translate Children
            return (0,_figma_node_translation_frame_2_layout__WEBPACK_IMPORTED_MODULE_2__.TranslateFigmaFrameToXamlLayout)(node);
        case 'GROUP':
            let groupNode = node;
            //TODO: Translate Children
            return 'Group';
        case 'TEXT':
            let textNode = node;
            return (0,_figma_node_translation_text_2_label__WEBPACK_IMPORTED_MODULE_4__.TranslateTextElement)(textNode);
        case 'ELLIPSE':
            let ellipseNode = node;
            return (0,_figma_node_translation_shapes_ellipse_2_ellipse__WEBPACK_IMPORTED_MODULE_3__.TranslateEllipseElement)(ellipseNode);
        case 'LINE':
            let lineNode = node;
            return (0,_figma_node_translation_shapes_line_2_line__WEBPACK_IMPORTED_MODULE_8__.TranslateLineElement)(lineNode);
        case 'RECTANGLE':
            let rectangleNode = node;
            return (0,_figma_node_translation_shapes_rectangle_2_rectangle__WEBPACK_IMPORTED_MODULE_7__.TranslateRectangleElement)(rectangleNode);
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
            // TODO: Translate children and append to contentview
            return contentView.getStartTag() + 'parsleXaml(children)' + contentView.getEndTag();
        //Are not getting castet 
        case 'VECTOR':
            let vectorNode = node;
        case 'STAR':
            let starNode = node;
        case 'BOOLEAN_OPERATION':
            let booleanOperationNode = node;
        case 'SLICE':
            let sliceNode = node;
        default:
            return `This plugin is unfortuanately unable to cast ${node.type}s as MAUI elements.`;
    }
}
function ParseFigma(nodes) {
    let xamlCode = "";
    nodes.forEach((node) => {
        xamlCode += checkNodeType(node.parent.node);
    });
    return xamlCode;
}
function formatStartTag(element) {
    const propertyString = element.properties
        .map((prop) => `${_Property__WEBPACK_IMPORTED_MODULE_0__.PropertyName[prop.name]}="${prop.value}"`)
        .join(" ");
    return `<${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]} ${propertyString}>`;
}
function formatEndTag(element) {
    return `</${_Element__WEBPACK_IMPORTED_MODULE_1__.ElementName[element.name]}>`;
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
/* harmony import */ var _XamlParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../XamlParser */ "./src/XamlParser.ts");



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
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateFigmaPaddingToXAMLPadding(node) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignContent, value: translateFigmaAlignContent(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignItems, value: translateFigmaAlignItemsToXamlAlignItems(node.primaryAxisAlignItems) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Wrap, value: translateFigmaWrapToXamlWrap(node.layoutWrap) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Grow, value: node.layoutGrow.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Shrink, value: node.rescale.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.AlignSelf, value: translateFigmaAlignItemsToXamlAlignItems(node.layoutAlign) },
        //{ name: PropertyName.Order,             value: node. },
        //{ name: PropertyName.Basis,             value:   },
        //{ name: PropertyName.Direction,         value: node.layoutMode },
        //{ name: PropertyName.JustifyContent,    value: node. },
        //{ name: PropertyName.Position,          value: node. },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ];
    const flexLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.FlexLayout, properties: flexLayoutProperties };
    return (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatStartTag)(flexLayoutElement) + (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatEndTag)(flexLayoutElement);
}
function TranslateHorizontalStackLayoutElement(node) {
    const horizontalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateFigmaPaddingToXAMLPadding(node) },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ];
    const horizontalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.HorizontalStackLayout, properties: horizontalStackLayoutProperties };
    return (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatStartTag)(horizontalStackLayoutElement) + (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatEndTag)(horizontalStackLayoutElement);
}
function TranslateVerticalStackLayoutElement(node) {
    const verticalStackLayoutProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Spacing, value: node.itemSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HeightRequest, value: node.height.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.WidthRequest, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Padding, value: translateFigmaPaddingToXAMLPadding(node) },
        //{ name: PropertyName.VerticalOptions,   value: node.primaryAxisAlignItems},
        //{ name: PropertyName.HorizontalOptions, value: node.letterSpacing.toString() }
    ];
    const vertivalStackLayoutElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.VerticalStackLayout, properties: verticalStackLayoutProperties };
    return (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatStartTag)(vertivalStackLayoutElement) + (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatEndTag)(vertivalStackLayoutElement);
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
            return 'NoWrap';
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateEllipseElement: () => (/* binding */ TranslateEllipseElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/Element.ts");
/* harmony import */ var _Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Property */ "./src/Property.ts");
/* harmony import */ var _XamlParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../XamlParser */ "./src/XamlParser.ts");



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
    return (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatStartTag)(ellipseElement) + (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatEndTag)(ellipseElement);
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
/* harmony import */ var _XamlParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../XamlParser */ "./src/XamlParser.ts");



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
    return (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatStartTag)(lineElement) + (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatEndTag)(lineElement);
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
/* harmony import */ var _XamlParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../XamlParser */ "./src/XamlParser.ts");



function TranslateRectangleElement(node) {
    const rectangleProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Width, value: node.width.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Height, value: node.height.toString() }
        // Add other rectangle-related properties as needed
    ];
    const rectangleElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Rectangle, properties: rectangleProperties };
    return (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatStartTag)(rectangleElement) + (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatEndTag)(rectangleElement);
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
/* harmony import */ var _XamlParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../XamlParser */ "./src/XamlParser.ts");



function TranslateTextElement(node) {
    var _a, _b, _c, _d;
    const textProperties = [
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.CharacterSpacing, value: node.letterSpacing.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAttributes, value: translateFontWeightToFontAttributes(node.fontWeight) || 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontAutoScalingEnabled, value: translateTextAutoResizeToFontAutoScalingEnabled(node.textAutoResize) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.FontSize, value: node.fontSize.toString() },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.HorizontalTextAlignment, value: translateHorizontalAlignment(node.textAlignHorizontal) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.LineBreakMode, value: translateTextTruncationToLineBreakMode(node.textTruncation) },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.LineHeight, value: (_b = (_a = node.lineHeight) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.MaxLines, value: (_d = (_c = node.maxLines) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.Text, value: node.characters },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextColor, value: translateFillsToTextColor(node.fills) || '#000000' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextDecorations, value: translateTextDecorationToXAML(node.textDecoration) || 'None' },
        { name: _Property__WEBPACK_IMPORTED_MODULE_1__.PropertyName.TextTransform, value: translateTextCaseToXAML(node.textCase) || 'None' },
        //{ name: PropertyName.TextType,                value: 'Text' } // Set appropriately based on Figma properties
        //{ name: PropertyName.Padding,                 value: '0' }, // Set appropriately based on Figma properties
        //{ name: PropertyName.FontFamily,              value: node.fontName }, // Set appropriately based on Figma properties
        //{ name: PropertyName.FormattedText,           value: '' }, // Set appropriately based on Figma properties
    ];
    const textElement = { name: _Element__WEBPACK_IMPORTED_MODULE_0__.ElementName.Label, properties: textProperties };
    return (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatStartTag)(textElement) + (0,_XamlParser__WEBPACK_IMPORTED_MODULE_2__.formatEndTag)(textElement);
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
function translateFillsToTextColor(fills) {
    if (!fills || fills.length === 0) {
        // If no fills are defined or the fills array is empty, return a default color (e.g., black).
        return "#000000"; // Default to black
    }
    // Figma's `fills` property typically contains a list of paint objects.
    // We'll assume the first paint object in the list represents the text color.
    const fill = fills[0];
    if (fill.type === "SOLID" && fill.visible) {
        // If it's a solid paint and it's visible, convert its color to a valid XAML color code.
        const r = Math.round(fill.color.r * 255).toString(16);
        const g = Math.round(fill.color.g * 255).toString(16);
        const b = Math.round(fill.color.b * 255).toString(16);
        return `#${(r.length < 2 ? "0" : "")}${r}${(g.length < 2 ? "0" : "")}${g}${(b.length < 2 ? "0" : "")}${b}`;
    }
    // Default to black if the fill is not a solid visible color.
    return "#000000"; // Default to black
}
function translateTextTruncationToLineBreakMode(figmaTextTruncation) {
    //OBS ! Do not fulfill all LineBreakModes of Xaml. See following link for more info about LineBreakMode: https://learn.microsoft.com/en-us/dotnet/api/microsoft.maui.linebreakmode?view=net-maui-7.0
    switch (figmaTextTruncation) {
        case "DISABLED":
            return "NoWrap";
        case "ENDING":
            return "TailTruncation";
        default:
            return "NoWrap"; // Default to NoWrap if the value is not recognized
    }
}
function translateTextAutoResizeToFontAutoScalingEnabled(figmaTextAutoResize) {
    switch (figmaTextAutoResize) {
        case "NONE":
            return "false";
        default:
            return "true";
    }
}
// Helper function to translate Figma horizontal text alignment to XAML
function translateHorizontalAlignment(align) {
    //TODO: fix this to correct xaml
    switch (align) {
        case "LEFT":
            return "Left";
        case "CENTER":
            return "Center";
        case "RIGHT":
            return "Right";
        default:
            return "Left"; // Default to Left alignment
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
    return { name: _node.name, type: _node.type, node: _node };
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
const currentPage = figma.currentPage;
const selection = currentPage.selection[0];
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
figma.ui.postMessage(nodes);
console.log((0,_XamlParser__WEBPACK_IMPORTED_MODULE_0__.ParseFigma)(nodes));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7Ozs7Ozs7Ozs7Ozs7OztBQy9CNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdnBCSztBQUNGO0FBQ2tEO0FBQ0U7QUFDZjtBQUNoQjtBQUNZO0FBQ3lCO0FBQ2Y7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVHQUErQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEZBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxtQkFBbUIseUdBQXVCO0FBQzFDO0FBQ0E7QUFDQSxtQkFBbUIsZ0dBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxtQkFBbUIsK0dBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0Isb0NBQW9DLGtGQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNFQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxVQUFVO0FBQzdFO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBLDBCQUEwQixtREFBWSxZQUFZLElBQUksV0FBVztBQUNqRTtBQUNBLGVBQWUsaURBQVcsZ0JBQWdCLEVBQUUsZUFBZTtBQUMzRDtBQUNPO0FBQ1AsZ0JBQWdCLGlEQUFXLGVBQWU7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFeUM7QUFDRTtBQUNrQjtBQUN0RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksMkRBQTJEO0FBQ3ZGLFVBQVUsTUFBTSxtREFBWSw4RUFBOEU7QUFDMUcsVUFBVSxNQUFNLG1EQUFZLDBGQUEwRjtBQUN0SCxVQUFVLE1BQU0sbURBQVksNkRBQTZEO0FBQ3pGLFVBQVUsTUFBTSxtREFBWSwwQ0FBMEM7QUFDdEUsVUFBVSxNQUFNLG1EQUFZLHlDQUF5QztBQUNyRSxVQUFVLE1BQU0sbURBQVksK0VBQStFO0FBQzNHLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksZ0RBQWdEO0FBQzVELFlBQVksOERBQThEO0FBQzFFLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksd0VBQXdFO0FBQ3BGLFlBQVk7QUFDWjtBQUNBLGdDQUFnQyxNQUFNLGlEQUFXO0FBQ2pELFdBQVcsMkRBQWMsc0JBQXNCLHlEQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSw4Q0FBOEM7QUFDMUUsVUFBVSxNQUFNLG1EQUFZLCtDQUErQztBQUMzRSxVQUFVLE1BQU0sbURBQVksNkNBQTZDO0FBQ3pFLFVBQVUsTUFBTSxtREFBWSwyREFBMkQ7QUFDdkYsWUFBWSx3RUFBd0U7QUFDcEYsWUFBWTtBQUNaO0FBQ0EsMkNBQTJDLE1BQU0saURBQVc7QUFDNUQsV0FBVywyREFBYyxpQ0FBaUMseURBQVk7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLDhDQUE4QztBQUMxRSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWSw2Q0FBNkM7QUFDekUsVUFBVSxNQUFNLG1EQUFZLDJEQUEyRDtBQUN2RixZQUFZLHdFQUF3RTtBQUNwRixZQUFZO0FBQ1o7QUFDQSx5Q0FBeUMsTUFBTSxpREFBVztBQUMxRCxXQUFXLDJEQUFjLCtCQUErQix5REFBWTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCLElBQUksZ0JBQWdCLElBQUksa0JBQWtCLElBQUksbUJBQW1CO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzRDO0FBQ0U7QUFDa0I7QUFDekQ7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSxzQ0FBc0M7QUFDbEUsVUFBVSxNQUFNLG1EQUFZLHdDQUF3QztBQUNwRSxVQUFVLE1BQU0sbURBQVkscUNBQXFDO0FBQ2pFLFVBQVUsTUFBTSxtREFBWSx1REFBdUQ7QUFDbkYsVUFBVSxNQUFNLG1EQUFZLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0EsNkJBQTZCLE1BQU0saURBQVc7QUFDOUMsV0FBVywyREFBYyxtQkFBbUIseURBQVk7QUFDeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q0QztBQUNFO0FBQ2tCO0FBQ3pEO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksaUJBQWlCO0FBQzdDLFVBQVUsTUFBTSxtREFBWSxpQkFBaUI7QUFDN0MsVUFBVSxNQUFNLG1EQUFZLGtCQUFrQjtBQUM5QyxVQUFVLE1BQU0sbURBQVksaUJBQWlCO0FBQzdDLFVBQVUsTUFBTSxtREFBWSwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBLDBCQUEwQixNQUFNLGlEQUFXO0FBQzNDLFdBQVcsMkRBQWMsZ0JBQWdCLHlEQUFZO0FBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNEM7QUFDRTtBQUNrQjtBQUN6RDtBQUNQO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLHNDQUFzQztBQUNsRSxVQUFVLE1BQU0sbURBQVk7QUFDNUI7QUFDQTtBQUNBLCtCQUErQixNQUFNLGlEQUFXO0FBQ2hELFdBQVcsMkRBQWMscUJBQXFCLHlEQUFZO0FBQzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeUM7QUFDRTtBQUNrQjtBQUN0RDtBQUNQO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVkseURBQXlEO0FBQ3JGLFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEgsVUFBVSxNQUFNLG1EQUFZLHNHQUFzRztBQUNsSSxVQUFVLE1BQU0sbURBQVksNENBQTRDO0FBQ3hFLFVBQVUsTUFBTSxtREFBWSx5RkFBeUY7QUFDckgsVUFBVSxNQUFNLG1EQUFZLG9GQUFvRjtBQUNoSCxVQUFVLE1BQU0sbURBQVksMElBQTBJO0FBQ3RLLFVBQVUsTUFBTSxtREFBWSxzSUFBc0k7QUFDbEssVUFBVSxNQUFNLG1EQUFZLCtCQUErQjtBQUMzRCxVQUFVLE1BQU0sbURBQVksdUVBQXVFO0FBQ25HLFVBQVUsTUFBTSxtREFBWSx1RkFBdUY7QUFDbkgsVUFBVSxNQUFNLG1EQUFZLHlFQUF5RTtBQUNyRyxZQUFZLDREQUE0RDtBQUN4RSxZQUFZLHdEQUF3RDtBQUNwRSxZQUFZLGtFQUFrRTtBQUM5RSxZQUFZLHVEQUF1RDtBQUNuRTtBQUNBLDBCQUEwQixNQUFNLGlEQUFXO0FBQzNDLFdBQVcsMkRBQWMsZ0JBQWdCLHlEQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQixFQUFFLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsRUFBRTtBQUNqSDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsUUFBUSxJQUFJLFFBQVE7QUFDeEU7QUFDQSxtQkFBbUIsV0FBVyxFQUFFLFlBQVk7QUFDNUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsNkJBQTZCLFVBQVU7QUFDdkM7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQztBQUMxQztBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLHVEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL1Byb3BlcnR5LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9YYW1sUGFyc2VyLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL2ZyYW1lLTItbGF5b3V0LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9lbGxpcHNlLTItZWxsaXBzZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvbGluZS0yLWxpbmUudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3JlY3RhbmdsZS0yLXJlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLWN1c3RvbS1jb250cm9sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC12aWV3LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRWxlbWVudE5hbWU7XG4oZnVuY3Rpb24gKEVsZW1lbnROYW1lKSB7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMYWJlbFwiXSA9IDBdID0gXCJMYWJlbFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQnV0dG9uXCJdID0gMV0gPSBcIkJ1dHRvblwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU3RhY2tGcmFtZVwiXSA9IDJdID0gXCJTdGFja0ZyYW1lXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUZXh0QmxvY2tcIl0gPSAzXSA9IFwiVGV4dEJsb2NrXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUZXh0Qm94XCJdID0gNF0gPSBcIlRleHRCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbWJvQm94XCJdID0gNV0gPSBcIkNvbWJvQm94XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaXN0Qm94XCJdID0gNl0gPSBcIkxpc3RCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxpc3RWaWV3XCJdID0gN10gPSBcIkxpc3RWaWV3XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJSYWRpb0J1dHRvblwiXSA9IDhdID0gXCJSYWRpb0J1dHRvblwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQ2hlY2tCb3hcIl0gPSA5XSA9IFwiQ2hlY2tCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkltYWdlXCJdID0gMTBdID0gXCJJbWFnZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQm9yZGVyXCJdID0gMTFdID0gXCJCb3JkZXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNjcm9sbFZpZXdlclwiXSA9IDEyXSA9IFwiU2Nyb2xsVmlld2VyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQcm9ncmVzc0JhclwiXSA9IDEzXSA9IFwiUHJvZ3Jlc3NCYXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlNsaWRlclwiXSA9IDE0XSA9IFwiU2xpZGVyXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJDb250cm9sXCJdID0gMTVdID0gXCJUYWJDb250cm9sXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUYWJJdGVtXCJdID0gMTZdID0gXCJUYWJJdGVtXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJNZW51XCJdID0gMTddID0gXCJNZW51XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJNZW51SXRlbVwiXSA9IDE4XSA9IFwiTWVudUl0ZW1cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbnRleHRNZW51XCJdID0gMTldID0gXCJDb250ZXh0TWVudVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9wdXBcIl0gPSAyMF0gPSBcIlBvcHVwXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJSZWN0YW5nbGVcIl0gPSAyMV0gPSBcIlJlY3RhbmdsZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRWxsaXBzZVwiXSA9IDIyXSA9IFwiRWxsaXBzZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiUG9seWdvblwiXSA9IDIzXSA9IFwiUG9seWdvblwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiTGluZVwiXSA9IDI0XSA9IFwiTGluZVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSG9yaXpvbnRhbFN0YWNrTGF5b3V0XCJdID0gMjVdID0gXCJIb3Jpem9udGFsU3RhY2tMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIl0gPSAyNl0gPSBcIlZlcnRpY2FsU3RhY2tMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZsZXhMYXlvdXRcIl0gPSAyN10gPSBcIkZsZXhMYXlvdXRcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkZyYW1lXCJdID0gMjhdID0gXCJGcmFtZVwiO1xufSkoRWxlbWVudE5hbWUgfHwgKEVsZW1lbnROYW1lID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUHJvcGVydHlOYW1lO1xuKGZ1bmN0aW9uIChQcm9wZXJ0eU5hbWUpIHtcbiAgICAvL0NvbW1vblxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJXaWR0aFwiXSA9IDBdID0gXCJXaWR0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWlnaHRcIl0gPSAxXSA9IFwiSGVpZ2h0XCI7XG4gICAgLy9MYWJlbFxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDaGFyYWN0ZXJTcGFjaW5nXCJdID0gMl0gPSBcIkNoYXJhY3RlclNwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF0dHJpYnV0ZXNcIl0gPSAzXSA9IFwiRm9udEF0dHJpYnV0ZXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF1dG9TY2FsaW5nRW5hYmxlZFwiXSA9IDRdID0gXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRGYW1pbHlcIl0gPSA1XSA9IFwiRm9udEZhbWlseVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250U2l6ZVwiXSA9IDZdID0gXCJGb250U2l6ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb3JtYXR0ZWRUZXh0XCJdID0gN10gPSBcIkZvcm1hdHRlZFRleHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIl0gPSA4XSA9IFwiSG9yaXpvbnRhbFRleHRBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGluZUJyZWFrTW9kZVwiXSA9IDldID0gXCJMaW5lQnJlYWtNb2RlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxpbmVIZWlnaHRcIl0gPSAxMF0gPSBcIkxpbmVIZWlnaHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4TGluZXNcIl0gPSAxMV0gPSBcIk1heExpbmVzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBhZGRpbmdcIl0gPSAxMl0gPSBcIlBhZGRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dFwiXSA9IDEzXSA9IFwiVGV4dFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0Q29sb3JcIl0gPSAxNF0gPSBcIlRleHRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0RGVjb3JhdGlvbnNcIl0gPSAxNV0gPSBcIlRleHREZWNvcmF0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0VHJhbnNmb3JtXCJdID0gMTZdID0gXCJUZXh0VHJhbnNmb3JtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRUeXBlXCJdID0gMTddID0gXCJUZXh0VHlwZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbFRleHRBbGlnbm1lbnRcIl0gPSAxOF0gPSBcIlZlcnRpY2FsVGV4dEFsaWdubWVudFwiO1xuICAgIC8vRnJhbWVcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3BhY2luZ1wiXSA9IDE5XSA9IFwiU3BhY2luZ1wiO1xuICAgIC8vRmxleExheW91dFxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbGlnbkNvbnRlbnRcIl0gPSAyMF0gPSBcIkFsaWduQ29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbGlnbkl0ZW1zXCJdID0gMjFdID0gXCJBbGlnbkl0ZW1zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkRpcmVjdGlvblwiXSA9IDIyXSA9IFwiRGlyZWN0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkp1c3RpZnlDb250ZW50XCJdID0gMjNdID0gXCJKdXN0aWZ5Q29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQb3NpdGlvblwiXSA9IDI0XSA9IFwiUG9zaXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiV3JhcFwiXSA9IDI1XSA9IFwiV3JhcFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbGlnblNlbGZcIl0gPSAyNl0gPSBcIkFsaWduU2VsZlwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCYXNpc1wiXSA9IDI3XSA9IFwiQmFzaXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3Jvd1wiXSA9IDI4XSA9IFwiR3Jvd1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPcmRlclwiXSA9IDI5XSA9IFwiT3JkZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2hyaW5rXCJdID0gMzBdID0gXCJTaHJpbmtcIjtcbiAgICAvL1BvbHlnb25cbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUG9pbnRzXCJdID0gMzFdID0gXCJQb2ludHNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRmlsbFwiXSA9IDMyXSA9IFwiRmlsbFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGaWxsUnVsZVwiXSA9IDMzXSA9IFwiRmlsbFJ1bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlXCJdID0gMzRdID0gXCJTdHJva2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3Ryb2tlVGhpY2tuZXNzXCJdID0gMzVdID0gXCJTdHJva2VUaGlja25lc3NcIjtcbiAgICAvL0xpbmVcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiWDFcIl0gPSAzNl0gPSBcIlgxXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlgyXCJdID0gMzddID0gXCJYMlwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMVwiXSA9IDM4XSA9IFwiWTFcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiWTJcIl0gPSAzOV0gPSBcIlkyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRBdHRyaWJ1dGVcIl0gPSA0MF0gPSBcIkZvbnRBdHRyaWJ1dGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmFja2dyb3VuZENvbG9yXCJdID0gNDFdID0gXCJCYWNrZ3JvdW5kQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9yZWdyb3VuZENvbG9yXCJdID0gNDJdID0gXCJGb3JlZ3JvdW5kQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWFyZ2luXCJdID0gNDNdID0gXCJNYXJnaW5cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyQ29sb3JcIl0gPSA0NF0gPSBcIkJvcmRlckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJvcmRlclRoaWNrbmVzc1wiXSA9IDQ1XSA9IFwiQm9yZGVyVGhpY2tuZXNzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZpc2liaWxpdHlcIl0gPSA0Nl0gPSBcIlZpc2liaWxpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkXCJdID0gNDddID0gXCJJc0VuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNSZWFkT25seVwiXSA9IDQ4XSA9IFwiSXNSZWFkT25seVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250V2VpZ2h0XCJdID0gNDldID0gXCJGb250V2VpZ2h0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRTdHlsZVwiXSA9IDUwXSA9IFwiRm9udFN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRBbGlnbm1lbnRcIl0gPSA1MV0gPSBcIlRleHRBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSW1hZ2VTb3VyY2VcIl0gPSA1Ml0gPSBcIkltYWdlU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNvdXJjZVwiXSA9IDUzXSA9IFwiU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhvcml6b250YWxBbGlnbm1lbnRcIl0gPSA1NF0gPSBcIkhvcml6b250YWxBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxBbGlnbm1lbnRcIl0gPSA1NV0gPSBcIlZlcnRpY2FsQWxpZ25tZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9wYWNpdHlcIl0gPSA1Nl0gPSBcIk9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29tbWFuZFwiXSA9IDU3XSA9IFwiQ29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb21tYW5kUGFyYW1ldGVyXCJdID0gNThdID0gXCJDb21tYW5kUGFyYW1ldGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQ2hlY2tlZFwiXSA9IDU5XSA9IFwiSXNDaGVja2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRcIl0gPSA2MF0gPSBcIkNvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSGVhZGVyXCJdID0gNjFdID0gXCJIZWFkZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJUZXh0XCJdID0gNjJdID0gXCJQbGFjZWhvbGRlclRleHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJUZXh0Q29sb3JcIl0gPSA2M10gPSBcIlBsYWNlaG9sZGVyVGV4dENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVwiXSA9IDY0XSA9IFwiSXNWaXNpYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRm9jdXNlZFwiXSA9IDY1XSA9IFwiSXNGb2N1c2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzU2VsZWN0ZWRcIl0gPSA2Nl0gPSBcIklzU2VsZWN0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNTb3VyY2VcIl0gPSA2N10gPSBcIkl0ZW1zU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UZW1wbGF0ZVwiXSA9IDY4XSA9IFwiSXRlbVRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYWNlaG9sZGVyXCJdID0gNjldID0gXCJQbGFjZWhvbGRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEluZGV4XCJdID0gNzBdID0gXCJTZWxlY3RlZEluZGV4XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1cIl0gPSA3MV0gPSBcIk1pbmltdW1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4aW11bVwiXSA9IDcyXSA9IFwiTWF4aW11bVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWYWx1ZVwiXSA9IDczXSA9IFwiVmFsdWVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNUb2dnbGVkXCJdID0gNzRdID0gXCJJc1RvZ2dsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29ybmVyUmFkaXVzXCJdID0gNzVdID0gXCJDb3JuZXJSYWRpdXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQYXNzd29yZFwiXSA9IDc2XSA9IFwiSXNQYXNzd29yZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCJdID0gNzddID0gXCJJc1JlYWRPbmx5Q2FyZXRWaXNpYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1zXCJdID0gNzhdID0gXCJJdGVtc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc09wZW5cIl0gPSA3OV0gPSBcIklzT3BlblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VkaXRhYmxlXCJdID0gODBdID0gXCJJc0VkaXRhYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkRpc3BsYXlNZW1iZXJQYXRoXCJdID0gODFdID0gXCJEaXNwbGF5TWVtYmVyUGF0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZFZhbHVlXCJdID0gODJdID0gXCJTZWxlY3RlZFZhbHVlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGVkVmFsdWVQYXRoXCJdID0gODNdID0gXCJTZWxlY3RlZFZhbHVlUGF0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWFkZXJUZW1wbGF0ZVwiXSA9IDg0XSA9IFwiSGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9vdGVyVGVtcGxhdGVcIl0gPSA4NV0gPSBcIkZvb3RlclRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkljb25cIl0gPSA4Nl0gPSBcIkljb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSWNvblNvdXJjZVwiXSA9IDg3XSA9IFwiSWNvblNvdXJjZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cE5hbWVcIl0gPSA4OF0gPSBcIkdyb3VwTmFtZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyU29ydFwiXSA9IDg5XSA9IFwiQ2FuVXNlclNvcnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2FuVXNlckZpbHRlclwiXSA9IDkwXSA9IFwiQ2FuVXNlckZpbHRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5zXCJdID0gOTFdID0gXCJDb2x1bW5zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd3NcIl0gPSA5Ml0gPSBcIlJvd3NcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uRGVmaW5pdGlvbnNcIl0gPSA5M10gPSBcIkNvbHVtbkRlZmluaXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0RlZmluaXRpb25zXCJdID0gOTRdID0gXCJSb3dEZWZpbml0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDZWxsUGFkZGluZ1wiXSA9IDk1XSA9IFwiQ2VsbFBhZGRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93U3BhblwiXSA9IDk2XSA9IFwiUm93U3BhblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5TcGFuXCJdID0gOTddID0gXCJDb2x1bW5TcGFuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzSGVhZGVyVmlzaWJsZVwiXSA9IDk4XSA9IFwiSXNIZWFkZXJWaXNpYmxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzU29ydGFibGVcIl0gPSA5OV0gPSBcIklzU29ydGFibGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU29ydERpcmVjdGlvblwiXSA9IDEwMF0gPSBcIlNvcnREaXJlY3Rpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBIZWFkZXJUZW1wbGF0ZVwiXSA9IDEwMV0gPSBcIkdyb3VwSGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBGb290ZXJUZW1wbGF0ZVwiXSA9IDEwMl0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiR3JvdXBTdHlsZVwiXSA9IDEwM10gPSBcIkdyb3VwU3R5bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFeHBhbmRlZFwiXSA9IDEwNF0gPSBcIklzRXhwYW5kZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNQYW5lbFwiXSA9IDEwNV0gPSBcIkl0ZW1zUGFuZWxcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQWx0ZXJuYXRpbmdSb3dDb2xvclwiXSA9IDEwNl0gPSBcIkFsdGVybmF0aW5nUm93Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNvbnRhaW5lclN0eWxlXCJdID0gMTA3XSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1Db250YWluZXJTdHlsZVNlbGVjdG9yXCJdID0gMTA4XSA9IFwiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbVRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMDldID0gXCJJdGVtVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclN0eWxlXCJdID0gMTEwXSA9IFwiR3JvdXBIZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclN0eWxlXCJdID0gMTExXSA9IFwiR3JvdXBGb290ZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMTJdID0gXCJHcm91cEZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uSGVhZGVyU3R5bGVcIl0gPSAxMTNdID0gXCJDb2x1bW5IZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTE0XSA9IFwiQ29sdW1uSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGcm96ZW5Db2x1bW5Db3VudFwiXSA9IDExNV0gPSBcIkZyb3plbkNvbHVtbkNvdW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkF1dG9HZW5lcmF0ZUNvbHVtbnNcIl0gPSAxMTZdID0gXCJBdXRvR2VuZXJhdGVDb2x1bW5zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNTb3VyY2VcIl0gPSAxMTddID0gXCJDb2x1bW5zU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNXaWR0aFwiXSA9IDExOF0gPSBcIkNvbHVtbnNXaWR0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0TWVtYmVyUGF0aFwiXSA9IDExOV0gPSBcIlNvcnRNZW1iZXJQYXRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclRlbXBsYXRlXCJdID0gMTIwXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyU3R5bGVcIl0gPSAxMjFdID0gXCJSb3dIZWFkZXJTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTIyXSA9IFwiUm93SGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGlvbkNvdW50XCJdID0gMTIzXSA9IFwiQWx0ZXJuYXRpb25Db3VudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0FsdGVybmF0aW5nUm93Q29sb3JFbmFibGVkXCJdID0gMTI0XSA9IFwiSXNBbHRlcm5hdGluZ1Jvd0NvbG9yRW5hYmxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0l0ZW1DbGlja0VuYWJsZWRcIl0gPSAxMjVdID0gXCJJc0l0ZW1DbGlja0VuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMjZdID0gXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxMjddID0gXCJWZXJ0aWNhbFNjcm9sbEJhclZpc2liaWxpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0aW9uTW9kZVwiXSA9IDEyOF0gPSBcIlNlbGVjdGlvbk1vZGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtc1wiXSA9IDEyOV0gPSBcIlNlbGVjdGVkSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRJdGVtXCJdID0gMTMwXSA9IFwiU2VsZWN0ZWRJdGVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1DbGlja1wiXSA9IDEzMV0gPSBcIkl0ZW1DbGlja1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1N0aWNreVwiXSA9IDEzMl0gPSBcIklzU3RpY2t5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUHVsbFRvUmVmcmVzaEVuYWJsZWRcIl0gPSAxMzNdID0gXCJJc1B1bGxUb1JlZnJlc2hFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJlZnJlc2hDb21tYW5kXCJdID0gMTM0XSA9IFwiUmVmcmVzaENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiXSA9IDEzNV0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ0NoYW5nZWRcIl0gPSAxMzZdID0gXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nQ2hhbmdlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlRW5hYmxlZFwiXSA9IDEzN10gPSBcIklzTG9hZE1vcmVFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxvYWRNb3JlQ29tbWFuZFwiXSA9IDEzOF0gPSBcIkxvYWRNb3JlQ29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0xvYWRNb3JlTG9hZGluZ1wiXSA9IDEzOV0gPSBcIklzTG9hZE1vcmVMb2FkaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiXSA9IDE0MF0gPSBcIklzTG9hZE1vcmVMb2FkaW5nQ2hhbmdlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGFwcGVkXCJdID0gMTQxXSA9IFwiSXRlbVRhcHBlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtU2VsZWN0ZWRcIl0gPSAxNDJdID0gXCJJdGVtU2VsZWN0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbURvdWJsZVRhcHBlZFwiXSA9IDE0M10gPSBcIkl0ZW1Eb3VibGVUYXBwZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVMZWZ0Q29tbWFuZFwiXSA9IDE0NF0gPSBcIlN3aXBlTGVmdENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVSaWdodENvbW1hbmRcIl0gPSAxNDVdID0gXCJTd2lwZVJpZ2h0Q29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVVwQ29tbWFuZFwiXSA9IDE0Nl0gPSBcIlN3aXBlVXBDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlRG93bkNvbW1hbmRcIl0gPSAxNDddID0gXCJTd2lwZURvd25Db21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlSXRlbXNcIl0gPSAxNDhdID0gXCJTd2lwZUl0ZW1zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVmcmVzaGluZ1wiXSA9IDE0OV0gPSBcIklzUmVmcmVzaGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSZWZyZXNoQ29tbWFuZFBhcmFtZXRlclwiXSA9IDE1MF0gPSBcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlaWdodFwiXSA9IDE1MV0gPSBcIlJvd0hlaWdodFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBdXRvR2VuZXJhdGVJdGVtXCJdID0gMTUyXSA9IFwiQXV0b0dlbmVyYXRlSXRlbVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxNb2RlXCJdID0gMTUzXSA9IFwiU2Nyb2xsTW9kZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxCYXJWaXNpYmlsaXR5XCJdID0gMTU0XSA9IFwiU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1wiXSA9IDE1NV0gPSBcIlNjcm9sbFRvXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvUm93XCJdID0gMTU2XSA9IFwiU2Nyb2xsVG9Sb3dcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Sb3dJbmRleFwiXSA9IDE1N10gPSBcIlNjcm9sbFRvUm93SW5kZXhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Db2x1bW5cIl0gPSAxNThdID0gXCJTY3JvbGxUb0NvbHVtblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb0NvbHVtbkluZGV4XCJdID0gMTU5XSA9IFwiU2Nyb2xsVG9Db2x1bW5JbmRleFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTYwXSA9IFwiSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTYxXSA9IFwiRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNjJdID0gXCJHcm91cEhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVpZ2h0UmVzaXplclwiXSA9IDE2M10gPSBcIlJvd0hlaWdodFJlc2l6ZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsU3RhcnRlZFwiXSA9IDE2NF0gPSBcIk9uUHVsbFN0YXJ0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsRGVsdGFcIl0gPSAxNjVdID0gXCJPblB1bGxEZWx0YVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxDb21wbGV0ZWRcIl0gPSAxNjZdID0gXCJPblB1bGxDb21wbGV0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25QdWxsQ29udGVudFwiXSA9IDE2N10gPSBcIk9uUHVsbENvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZWxlYXNlQ29udGVudFwiXSA9IDE2OF0gPSBcIk9uUmVsZWFzZUNvbnRlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZVN0YXJ0ZWRcIl0gPSAxNjldID0gXCJPblN3aXBlU3RhcnRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRGVsdGFcIl0gPSAxNzBdID0gXCJPblN3aXBlRGVsdGFcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25Td2lwZUNvbXBsZXRlZFwiXSA9IDE3MV0gPSBcIk9uU3dpcGVDb21wbGV0ZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxpbmdcIl0gPSAxNzJdID0gXCJPblJldmVhbGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlRW5kZWRcIl0gPSAxNzNdID0gXCJPblN3aXBlRW5kZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25SZXZlYWxlZFwiXSA9IDE3NF0gPSBcIk9uUmV2ZWFsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25FeGVjdXRlXCJdID0gMTc1XSA9IFwiT25FeGVjdXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uSGlkaW5nXCJdID0gMTc2XSA9IFwiT25IaWRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25IaWRkZW5cIl0gPSAxNzddID0gXCJPbkhpZGRlblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN0YXRlQ2hhbmdlXCJdID0gMTc4XSA9IFwiT25TdGF0ZUNoYW5nZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbmltYXRpb25EdXJhdGlvblwiXSA9IDE3OV0gPSBcIkFuaW1hdGlvbkR1cmF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcE9mZnNldFwiXSA9IDE4MF0gPSBcIk1heFRvcE9mZnNldFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5Ub3BPZmZzZXRcIl0gPSAxODFdID0gXCJNaW5Ub3BPZmZzZXRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluVG9wUmV2ZWFsZWRcIl0gPSAxODJdID0gXCJNaW5Ub3BSZXZlYWxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhUb3BSZXZlYWxlZFwiXSA9IDE4M10gPSBcIk1heFRvcFJldmVhbGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRUZW1wbGF0ZVwiXSA9IDE4NF0gPSBcIkNvbnRlbnRUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb250ZW50VGVtcGxhdGVTZWxlY3RvclwiXSA9IDE4NV0gPSBcIkNvbnRlbnRUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhvcml6b250YWxPcHRpb25zXCJdID0gMTg2XSA9IFwiSG9yaXpvbnRhbE9wdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmVydGljYWxPcHRpb25zXCJdID0gMTg3XSA9IFwiVmVydGljYWxPcHRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uXCJdID0gMTg4XSA9IFwiUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVcIl0gPSAxODldID0gXCJTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmFuc2xhdGlvblhcIl0gPSAxOTBdID0gXCJUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVHJhbnNsYXRpb25ZXCJdID0gMTkxXSA9IFwiVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxheW91dFhcIl0gPSAxOTJdID0gXCJMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkxheW91dFlcIl0gPSAxOTNdID0gXCJMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIldpZHRoUmVxdWVzdFwiXSA9IDE5NF0gPSBcIldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWlnaHRSZXF1ZXN0XCJdID0gMTk1XSA9IFwiSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gMTk2XSA9IFwiTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDE5N10gPSBcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuY2hvclhcIl0gPSAxOThdID0gXCJBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuY2hvcllcIl0gPSAxOTldID0gXCJBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWFwiXSA9IDIwMF0gPSBcIlJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3RhdGlvbllcIl0gPSAyMDFdID0gXCJSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVYXCJdID0gMjAyXSA9IFwiU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjYWxlWVwiXSA9IDIwM10gPSBcIlNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGF0Zm9ybUNvbmZpZ3VyYXRpb25cIl0gPSAyMDRdID0gXCJQbGF0Zm9ybUNvbmZpZ3VyYXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWFyZ2luQ29uc3RyYWludHNcIl0gPSAyMDVdID0gXCJNYXJnaW5Db25zdHJhaW50c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHZXN0dXJlUmVjb2duaXplcnNcIl0gPSAyMDZdID0gXCJHZXN0dXJlUmVjb2duaXplcnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQmVoYXZpb3JcIl0gPSAyMDddID0gXCJCZWhhdmlvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmlnZ2Vyc1wiXSA9IDIwOF0gPSBcIlRyaWdnZXJzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNsYXNzSWRcIl0gPSAyMDldID0gXCJDbGFzc0lkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN0eWxlSWRcIl0gPSAyMTBdID0gXCJTdHlsZUlkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZsb3dEaXJlY3Rpb25cIl0gPSAyMTFdID0gXCJGbG93RGlyZWN0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklucHV0VHJhbnNwYXJlbnRcIl0gPSAyMTJdID0gXCJJbnB1dFRyYW5zcGFyZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiXSA9IDIxM10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclwiXSA9IDIxNF0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1wiXSA9IDIxNV0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25cIl0gPSAyMTZdID0gXCJJc1Zpc2libGVFbGV2YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1wiXSA9IDIxN10gPSBcIklzVmlzaWJsZVBhZGRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJcIl0gPSAyMThdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclwiXSA9IDIxOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoXCJdID0gMjIwXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93XCJdID0gMjIxXSA9IFwiSXNWaXNpYmxlU2hhZG93XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVwiXSA9IDIyMl0gPSBcIklzVmlzaWJsZVN0cm9rZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JcIl0gPSAyMjNdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zXCJdID0gMjI0XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiXSA9IDIyNV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIl0gPSAyMjZdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25cIl0gPSAyMjddID0gXCJJc1Zpc2libGVSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVwiXSA9IDIyOF0gPSBcIklzVmlzaWJsZVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RcIl0gPSAyMjldID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFwiXSA9IDIzMF0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDIzMV0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSAyMzJdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblwiXSA9IDIzM10gPSBcIklzVmlzaWJsZU1hcmdpblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIl0gPSAyMzRdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1wiXSA9IDIzNV0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1wiXSA9IDIzNl0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yT3BhY2l0eVwiXSA9IDIzN10gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCJdID0gMjM4XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yT3BhY2l0eVwiXSA9IDIzOV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dPcGFjaXR5XCJdID0gMjQwXSA9IFwiSXNWaXNpYmxlU2hhZG93T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCJdID0gMjQxXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhPcGFjaXR5XCJdID0gMjQyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllPcGFjaXR5XCJdID0gMjQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIl0gPSAyNDRdID0gXCJJc1Zpc2libGVSb3RhdGlvbk9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVPcGFjaXR5XCJdID0gMjQ1XSA9IFwiSXNWaXNpYmxlU2NhbGVPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RPcGFjaXR5XCJdID0gMjQ2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiXSA9IDI0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RPcGFjaXR5XCJdID0gMjQ4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RPcGFjaXR5XCJdID0gMjQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luT3BhY2l0eVwiXSA9IDI1MF0gPSBcIklzVmlzaWJsZU1hcmdpbk9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiXSA9IDI1MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c09wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ09wYWNpdHlcIl0gPSAyNTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nT3BhY2l0eVwiXSA9IDI1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRWRpdGFibGVMYXlvdXRcIl0gPSAyNTRdID0gXCJJc0VkaXRhYmxlTGF5b3V0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE9wYWNpdHlcIl0gPSAyNTVdID0gXCJJc0VuYWJsZWRPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uXCJdID0gMjU2XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiXSA9IDI1N10gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzUm90YXRpb25cIl0gPSAyNThdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblwiXSA9IDI1OV0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiXSA9IDI2MF0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uXCJdID0gMjYxXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uXCJdID0gMjYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCJdID0gMjYzXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dSb3RhdGlvblwiXSA9IDI2NF0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uXCJdID0gMjY1XSA9IFwiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25cIl0gPSAyNjZdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNSb3RhdGlvblwiXSA9IDI2N10gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uXCJdID0gMjY4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25cIl0gPSAyNjldID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uXCJdID0gMjcwXSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uXCJdID0gMjcxXSA9IFwiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzJdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzNdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uXCJdID0gMjc0XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzVdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luUm90YXRpb25cIl0gPSAyNzZdID0gXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblwiXSA9IDI3N10gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblwiXSA9IDI3OF0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIl0gPSAyNzldID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVcIl0gPSAyODBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlXCJdID0gMjgxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNTY2FsZVwiXSA9IDI4Ml0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlXCJdID0gMjgzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlXCJdID0gMjg0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVcIl0gPSAyODVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVcIl0gPSAyODZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVcIl0gPSAyODddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1NjYWxlXCJdID0gMjg4XSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVcIl0gPSAyODldID0gXCJJc1Zpc2libGVTdHJva2VTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVwiXSA9IDI5MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1NjYWxlXCJdID0gMjkxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVcIl0gPSAyOTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVwiXSA9IDI5M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVcIl0gPSAyOTRdID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVcIl0gPSAyOTVdID0gXCJJc1Zpc2libGVTY2FsZVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVwiXSA9IDI5Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RTY2FsZVwiXSA9IDI5N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVcIl0gPSAyOThdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVwiXSA9IDI5OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5TY2FsZVwiXSA9IDMwMF0gPSBcIklzVmlzaWJsZU1hcmdpblNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlXCJdID0gMzAxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlXCJdID0gMzAyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiXSA9IDMwM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRTY2FsZVwiXSA9IDMwNF0gPSBcIklzRW5hYmxlZFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWFwiXSA9IDMwNV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWFwiXSA9IDMwNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWFwiXSA9IDMwN10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVhcIl0gPSAzMDhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWFwiXSA9IDMwOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVhcIl0gPSAzMTBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWFwiXSA9IDMxMV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVYXCJdID0gMzEyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93U2NhbGVYXCJdID0gMzEzXSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWFwiXSA9IDMxNF0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIl0gPSAzMTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVYXCJdID0gMzE2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWFwiXSA9IDMxN10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIl0gPSAzMThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25TY2FsZVhcIl0gPSAzMTldID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWFwiXSA9IDMyMF0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVhcIl0gPSAzMjFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWFwiXSA9IDMyMl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWFwiXSA9IDMyM10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVhcIl0gPSAzMjRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblNjYWxlWFwiXSA9IDMyNV0gPSBcIklzVmlzaWJsZU1hcmdpblNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIl0gPSAzMjZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWFwiXSA9IDMyN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWFwiXSA9IDMyOF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVYXCJdID0gMzI5XSA9IFwiSXNFbmFibGVkU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiXSA9IDMzMF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlWVwiXSA9IDMzMV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiXSA9IDMzMl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIl0gPSAzMzNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWVwiXSA9IDMzNF0gPSBcIklzVmlzaWJsZVBhZGRpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVlcIl0gPSAzMzVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclNjYWxlWVwiXSA9IDMzNl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVZXCJdID0gMzM3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCJdID0gMzM4XSA9IFwiSXNWaXNpYmxlU2hhZG93U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiXSA9IDMzOV0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVlcIl0gPSAzNDBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCJdID0gMzQxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiXSA9IDM0Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVlcIl0gPSAzNDNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25TY2FsZVlcIl0gPSAzNDRdID0gXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVNjYWxlWVwiXSA9IDM0NV0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVlcIl0gPSAzNDZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiXSA9IDM0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM0OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVlcIl0gPSAzNDldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblNjYWxlWVwiXSA9IDM1MF0gPSBcIklzVmlzaWJsZU1hcmdpblNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIl0gPSAzNTFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWVwiXSA9IDM1Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWVwiXSA9IDM1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkU2NhbGVZXCJdID0gMzU0XSA9IFwiSXNFbmFibGVkU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM1NV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM1Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiXSA9IDM1N10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNThdID0gXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWFwiXSA9IDM1OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvblhcIl0gPSAzNjBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM2MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25YXCJdID0gMzYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCJdID0gMzYzXSA9IFwiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWFwiXSA9IDM2NF0gPSBcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIl0gPSAzNjVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCJdID0gMzY2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWFwiXSA9IDM2N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIl0gPSAzNjhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvblhcIl0gPSAzNjldID0gXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWFwiXSA9IDM3MF0gPSBcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3Ml0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvblhcIl0gPSAzNzRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWFwiXSA9IDM3NV0gPSBcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvblhcIl0gPSAzNzZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWFwiXSA9IDM3N10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWFwiXSA9IDM3OF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkVHJhbnNsYXRpb25YXCJdID0gMzc5XSA9IFwiSXNFbmFibGVkVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4MF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4MV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWVwiXSA9IDM4Ml0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvbllcIl0gPSAzODNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25UcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWVwiXSA9IDM4NF0gPSBcIklzVmlzaWJsZVBhZGRpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJUcmFuc2xhdGlvbllcIl0gPSAzODVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM4Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoVHJhbnNsYXRpb25ZXCJdID0gMzg3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25ZXCJdID0gMzg4XSA9IFwiSXNWaXNpYmxlU2hhZG93VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWVwiXSA9IDM4OV0gPSBcIklzVmlzaWJsZVN0cm9rZVRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIl0gPSAzOTBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25ZXCJdID0gMzkxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWVwiXSA9IDM5Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIl0gPSAzOTNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25UcmFuc2xhdGlvbllcIl0gPSAzOTRdID0gXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVRyYW5zbGF0aW9uWVwiXSA9IDM5NV0gPSBcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOTZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIl0gPSAzOTldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWVwiXSA9IDQwMF0gPSBcIklzVmlzaWJsZU1hcmdpblRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIl0gPSA0MDFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwMl0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWVwiXSA9IDQwM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCJdID0gNDA0XSA9IFwiSXNFbmFibGVkVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFhcIl0gPSA0MDVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WFwiXSA9IDQwNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRYXCJdID0gNDA3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRYXCJdID0gNDA4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WFwiXSA9IDQwOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiXSA9IDQxMF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIl0gPSA0MTFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRYXCJdID0gNDEyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0xheW91dFhcIl0gPSA0MTNdID0gXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUxheW91dFhcIl0gPSA0MTRdID0gXCJJc1Zpc2libGVTdHJva2VMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFhcIl0gPSA0MTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFhcIl0gPSA0MTZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFhcIl0gPSA0MTddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFhcIl0gPSA0MThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiXSA9IDQxOV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIl0gPSA0MjBdID0gXCJJc1Zpc2libGVTY2FsZUxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRYXCJdID0gNDIyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIl0gPSA0MjNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFhcIl0gPSA0MjRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5MYXlvdXRYXCJdID0gNDI1XSA9IFwiSXNWaXNpYmxlTWFyZ2luTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRYXCJdID0gNDI2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WFwiXSA9IDQyN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRYXCJdID0gNDI4XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTGF5b3V0WFwiXSA9IDQyOV0gPSBcIklzRW5hYmxlZExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WVwiXSA9IDQzMF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRZXCJdID0gNDMxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFlcIl0gPSA0MzJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFlcIl0gPSA0MzNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRZXCJdID0gNDM0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCJdID0gNDM1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiXSA9IDQzNl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFlcIl0gPSA0MzddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TGF5b3V0WVwiXSA9IDQzOF0gPSBcIklzVmlzaWJsZVNoYWRvd0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WVwiXSA9IDQzOV0gPSBcIklzVmlzaWJsZVN0cm9rZUxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WVwiXSA9IDQ0MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WVwiXSA9IDQ0MV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WVwiXSA9IDQ0Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WVwiXSA9IDQ0M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCJdID0gNDQ0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiXSA9IDQ0NV0gPSBcIklzVmlzaWJsZVNjYWxlTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFlcIl0gPSA0NDddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpbkxheW91dFlcIl0gPSA0NTBdID0gXCJJc1Zpc2libGVNYXJnaW5MYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFlcIl0gPSA0NTFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRZXCJdID0gNDUyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFlcIl0gPSA0NTNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRMYXlvdXRZXCJdID0gNDU0XSA9IFwiSXNFbmFibGVkTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NTZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIl0gPSA0NTddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDU4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NTldID0gXCJJc1Zpc2libGVQYWRkaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyV2lkdGhSZXF1ZXN0XCJdID0gNDYwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NjFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFdpZHRoUmVxdWVzdFwiXSA9IDQ2Ml0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiXSA9IDQ2M10gPSBcIklzVmlzaWJsZVNoYWRvd1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIl0gPSA0NjRdID0gXCJJc1Zpc2libGVTdHJva2VXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yV2lkdGhSZXF1ZXN0XCJdID0gNDY1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiXSA9IDQ2Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIl0gPSA0NjddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZV2lkdGhSZXF1ZXN0XCJdID0gNDY4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uV2lkdGhSZXF1ZXN0XCJdID0gNDY5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVXaWR0aFJlcXVlc3RcIl0gPSA0NzBdID0gXCJJc1Zpc2libGVTY2FsZVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDcxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCJdID0gNDc0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5XaWR0aFJlcXVlc3RcIl0gPSA0NzVdID0gXCJJc1Zpc2libGVNYXJnaW5XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCJdID0gNDc2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NzddID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdXaWR0aFJlcXVlc3RcIl0gPSA0NzhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiXSA9IDQ3OV0gPSBcIklzRW5hYmxlZFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDgwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4Ml0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4M10gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0hlaWdodFJlcXVlc3RcIl0gPSA0ODRdID0gXCJJc1Zpc2libGVQYWRkaW5nSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIl0gPSA0ODVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDg2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4N10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCJdID0gNDg4XSA9IFwiSXNWaXNpYmxlU2hhZG93SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VIZWlnaHRSZXF1ZXN0XCJdID0gNDg5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JIZWlnaHRSZXF1ZXN0XCJdID0gNDkwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCJdID0gNDkxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhIZWlnaHRSZXF1ZXN0XCJdID0gNDkyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllIZWlnaHRSZXF1ZXN0XCJdID0gNDkzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIl0gPSA0OTRdID0gXCJJc1Zpc2libGVSb3RhdGlvbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVIZWlnaHRSZXF1ZXN0XCJdID0gNDk1XSA9IFwiSXNWaXNpYmxlU2NhbGVIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiXSA9IDQ5N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMF0gPSBcIklzVmlzaWJsZU1hcmdpbkhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0hlaWdodFJlcXVlc3RcIl0gPSA1MDJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDUwM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIl0gPSA1MDRdID0gXCJJc0VuYWJsZWRIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwOF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTExXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxM10gPSBcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxNl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTIwXSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTIzXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjVdID0gXCJJc1Zpc2libGVNYXJnaW5NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyNl0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjldID0gXCJJc0VuYWJsZWRNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzM10gPSBcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzRdID0gXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM4XSA9IFwiSXNWaXNpYmxlU2hhZG93TWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDRdID0gXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ1XSA9IFwiSXNWaXNpYmxlU2NhbGVNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1MF0gPSBcIklzVmlzaWJsZU1hcmdpbk1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NTRdID0gXCJJc0VuYWJsZWRNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvclhcIl0gPSA1NTVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWFwiXSA9IDU1Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JYXCJdID0gNTU3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JYXCJdID0gNTU4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWFwiXSA9IDU1OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiXSA9IDU2MF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIl0gPSA1NjFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JYXCJdID0gNTYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0FuY2hvclhcIl0gPSA1NjNdID0gXCJJc1Zpc2libGVTaGFkb3dBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUFuY2hvclhcIl0gPSA1NjRdID0gXCJJc1Zpc2libGVTdHJva2VBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvclhcIl0gPSA1NjVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvclhcIl0gPSA1NjZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvclhcIl0gPSA1NjddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvclhcIl0gPSA1NjhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiXSA9IDU2OV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIl0gPSA1NzBdID0gXCJJc1Zpc2libGVTY2FsZUFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NzFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JYXCJdID0gNTcyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIl0gPSA1NzNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvclhcIl0gPSA1NzRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5BbmNob3JYXCJdID0gNTc1XSA9IFwiSXNWaXNpYmxlTWFyZ2luQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JYXCJdID0gNTc2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWFwiXSA9IDU3N10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JYXCJdID0gNTc4XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkQW5jaG9yWFwiXSA9IDU3OV0gPSBcIklzRW5hYmxlZEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWVwiXSA9IDU4MF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JZXCJdID0gNTgxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvcllcIl0gPSA1ODJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvcllcIl0gPSA1ODNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JZXCJdID0gNTg0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCJdID0gNTg1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiXSA9IDU4Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvcllcIl0gPSA1ODddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93QW5jaG9yWVwiXSA9IDU4OF0gPSBcIklzVmlzaWJsZVNoYWRvd0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWVwiXSA9IDU4OV0gPSBcIklzVmlzaWJsZVN0cm9rZUFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWVwiXSA9IDU5MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWVwiXSA9IDU5MV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWVwiXSA9IDU5Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWVwiXSA9IDU5M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCJdID0gNTk0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiXSA9IDU5NV0gPSBcIklzVmlzaWJsZVNjYWxlQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvcllcIl0gPSA1OTddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpbkFuY2hvcllcIl0gPSA2MDBdID0gXCJJc1Zpc2libGVNYXJnaW5BbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvcllcIl0gPSA2MDFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JZXCJdID0gNjAyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvcllcIl0gPSA2MDNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRBbmNob3JZXCJdID0gNjA0XSA9IFwiSXNFbmFibGVkQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIl0gPSA2MDVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblhcIl0gPSA2MDZdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIl0gPSA2MDddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCJdID0gNjA4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblhcIl0gPSA2MDldID0gXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25YXCJdID0gNjEwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvblhcIl0gPSA2MTFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWFwiXSA9IDYxMl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiXSA9IDYxM10gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIl0gPSA2MTRdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25YXCJdID0gNjE1XSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiXSA9IDYxNl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIl0gPSA2MTddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25YXCJdID0gNjE4XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25YXCJdID0gNjE5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvblhcIl0gPSA2MjBdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25YXCJdID0gNjIxXSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MjJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MjNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25YXCJdID0gNjI0XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvblhcIl0gPSA2MjVdID0gXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCJdID0gNjI2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblhcIl0gPSA2MjddID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblhcIl0gPSA2MjhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFJvdGF0aW9uWFwiXSA9IDYyOV0gPSBcIklzRW5hYmxlZFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvbllcIl0gPSA2MzBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvbllcIl0gPSA2MzFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIl0gPSA2MzJdID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25ZXCJdID0gNjMzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvbllcIl0gPSA2MzRdID0gXCJJc1Zpc2libGVQYWRkaW5nUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25ZXCJdID0gNjM1XSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JSb3RhdGlvbllcIl0gPSA2MzZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uWVwiXSA9IDYzN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiXSA9IDYzOF0gPSBcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvbllcIl0gPSA2MzldID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCJdID0gNjQwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiXSA9IDY0MV0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvbllcIl0gPSA2NDJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCJdID0gNjQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25ZXCJdID0gNjQ0XSA9IFwiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVSb3RhdGlvbllcIl0gPSA2NDVdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjQ2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDddID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDhdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25ZXCJdID0gNjQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvbllcIl0gPSA2NTBdID0gXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25ZXCJdID0gNjUxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvbllcIl0gPSA2NTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvbllcIl0gPSA2NTNdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFJvdGF0aW9uWVwiXSA9IDY1NF0gPSBcIklzRW5hYmxlZFJvdGF0aW9uWVwiO1xufSkoUHJvcGVydHlOYW1lIHx8IChQcm9wZXJ0eU5hbWUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRmlnbWFGcmFtZVRvWGFtbExheW91dCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vZnJhbWUtMi1sYXlvdXRcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvZWxsaXBzZS0yLWVsbGlwc2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVRleHRFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWxcIjtcbmltcG9ydCB7IENvbnRlbnRWaWV3IH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtdmlld1wiO1xuaW1wb3J0IHsgQ3VzdG9tQ29udHJvbCB9IGZyb20gXCIuL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLWN1c3RvbS1jb250cm9sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvcmVjdGFuZ2xlLTItcmVjdGFuZ2xlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVMaW5lRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL2xpbmUtMi1saW5lXCI7XG5mdW5jdGlvbiBjaGVja05vZGVUeXBlKG5vZGUpIHtcbiAgICAvLyBDaGVjayB0aGUgbm9kZSdzIHR5cGUgdXNpbmcgdGhlICd0eXBlJyBwcm9wZXJ0eVxuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0ZSQU1FJzpcbiAgICAgICAgICAgIGxldCBmcmFtZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgLy9UT0RPOiBUcmFuc2xhdGUgQ2hpbGRyZW5cbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0KG5vZGUpO1xuICAgICAgICBjYXNlICdHUk9VUCc6XG4gICAgICAgICAgICBsZXQgZ3JvdXBOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIC8vVE9ETzogVHJhbnNsYXRlIENoaWxkcmVuXG4gICAgICAgICAgICByZXR1cm4gJ0dyb3VwJztcbiAgICAgICAgY2FzZSAnVEVYVCc6XG4gICAgICAgICAgICBsZXQgdGV4dE5vZGUgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZVRleHRFbGVtZW50KHRleHROb2RlKTtcbiAgICAgICAgY2FzZSAnRUxMSVBTRSc6XG4gICAgICAgICAgICBsZXQgZWxsaXBzZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50KGVsbGlwc2VOb2RlKTtcbiAgICAgICAgY2FzZSAnTElORSc6XG4gICAgICAgICAgICBsZXQgbGluZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUxpbmVFbGVtZW50KGxpbmVOb2RlKTtcbiAgICAgICAgY2FzZSAnUkVDVEFOR0xFJzpcbiAgICAgICAgICAgIGxldCByZWN0YW5nbGVOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KHJlY3RhbmdsZU5vZGUpO1xuICAgICAgICBjYXNlICdQT0xZR09OJzpcbiAgICAgICAgICAgIGxldCBwb2x5Z29uTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gJ1BvbHlnb24nO1xuICAgICAgICBjYXNlICdJTlNUQU5DRSc6XG4gICAgICAgICAgICBsZXQgaW5zdGFuY2VOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCBiaW5kaW5ncyA9IFtdOyAvL1RPRE86IGNoaWxkcmVuXG4gICAgICAgICAgICBsZXQgY3VzdG9tQ29udHJvbCA9IG5ldyBDdXN0b21Db250cm9sKGluc3RhbmNlTm9kZS5uYW1lLCBiaW5kaW5ncyk7XG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tQ29udHJvbC5nZXRTdGFydFRhZygpICsgY3VzdG9tQ29udHJvbC5nZXRFbmRUYWcoKTtcbiAgICAgICAgY2FzZSAnQ09NUE9ORU5UJzpcbiAgICAgICAgICAgIGxldCBjb21wb25lbnROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgbmV3IHJlc291cmNlIGZpbGUgLyBuZXcgd2luZG93XG4gICAgICAgICAgICBsZXQgY29udGVudFZpZXcgPSBuZXcgQ29udGVudFZpZXcobm9kZS5uYW1lKTtcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYW5zbGF0ZSBjaGlsZHJlbiBhbmQgYXBwZW5kIHRvIGNvbnRlbnR2aWV3XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFZpZXcuZ2V0U3RhcnRUYWcoKSArICdwYXJzbGVYYW1sKGNoaWxkcmVuKScgKyBjb250ZW50Vmlldy5nZXRFbmRUYWcoKTtcbiAgICAgICAgLy9BcmUgbm90IGdldHRpbmcgY2FzdGV0IFxuICAgICAgICBjYXNlICdWRUNUT1InOlxuICAgICAgICAgICAgbGV0IHZlY3Rvck5vZGUgPSBub2RlO1xuICAgICAgICBjYXNlICdTVEFSJzpcbiAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5vZGU7XG4gICAgICAgIGNhc2UgJ0JPT0xFQU5fT1BFUkFUSU9OJzpcbiAgICAgICAgICAgIGxldCBib29sZWFuT3BlcmF0aW9uTm9kZSA9IG5vZGU7XG4gICAgICAgIGNhc2UgJ1NMSUNFJzpcbiAgICAgICAgICAgIGxldCBzbGljZU5vZGUgPSBub2RlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGBUaGlzIHBsdWdpbiBpcyB1bmZvcnR1YW5hdGVseSB1bmFibGUgdG8gY2FzdCAke25vZGUudHlwZX1zIGFzIE1BVUkgZWxlbWVudHMuYDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gUGFyc2VGaWdtYShub2Rlcykge1xuICAgIGxldCB4YW1sQ29kZSA9IFwiXCI7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICB4YW1sQ29kZSArPSBjaGVja05vZGVUeXBlKG5vZGUucGFyZW50Lm5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB4YW1sQ29kZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTdGFydFRhZyhlbGVtZW50KSB7XG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSBlbGVtZW50LnByb3BlcnRpZXNcbiAgICAgICAgLm1hcCgocHJvcCkgPT4gYCR7UHJvcGVydHlOYW1lW3Byb3AubmFtZV19PVwiJHtwcm9wLnZhbHVlfVwiYClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIHJldHVybiBgPCR7RWxlbWVudE5hbWVbZWxlbWVudC5uYW1lXX0gJHtwcm9wZXJ0eVN0cmluZ30+YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFbmRUYWcoZWxlbWVudCkge1xuICAgIHJldHVybiBgPC8ke0VsZW1lbnROYW1lW2VsZW1lbnQubmFtZV19PmA7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IGZvcm1hdEVuZFRhZywgZm9ybWF0U3RhcnRUYWcgfSBmcm9tIFwiLi4vWGFtbFBhcnNlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUZpZ21hRnJhbWVUb1hhbWxMYXlvdXQobm9kZSkge1xuICAgIHN3aXRjaCAobm9kZS5sYXlvdXRNb2RlKSB7XG4gICAgICAgIGNhc2UgXCJIT1JJWk9OVEFMXCI6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRlSG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudChub2RlKTtcbiAgICAgICAgY2FzZSBcIlZFUlRJQ0FMXCI6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRlVmVydGljYWxTdGFja0xheW91dEVsZW1lbnQobm9kZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRlRmxleExheW91dEVsZW1lbnQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gVHJhbnNsYXRlRmxleExheW91dEVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IGZsZXhMYXlvdXRQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnbkNvbnRlbnQsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYUFsaWduQ29udGVudChub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQWxpZ25JdGVtcywgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXMobm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldyYXAsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYVdyYXBUb1hhbWxXcmFwKG5vZGUubGF5b3V0V3JhcCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuR3JvdywgdmFsdWU6IG5vZGUubGF5b3V0R3Jvdy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNocmluaywgdmFsdWU6IG5vZGUucmVzY2FsZS50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkFsaWduU2VsZiwgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25JdGVtc1RvWGFtbEFsaWduSXRlbXMobm9kZS5sYXlvdXRBbGlnbikgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5PcmRlciwgICAgICAgICAgICAgdmFsdWU6IG5vZGUuIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuQmFzaXMsICAgICAgICAgICAgIHZhbHVlOiAgIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuRGlyZWN0aW9uLCAgICAgICAgIHZhbHVlOiBub2RlLmxheW91dE1vZGUgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5KdXN0aWZ5Q29udGVudCwgICAgdmFsdWU6IG5vZGUuIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuUG9zaXRpb24sICAgICAgICAgIHZhbHVlOiBub2RlLiB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlZlcnRpY2FsT3B0aW9ucywgICB2YWx1ZTogbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXN9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogbm9kZS5sZXR0ZXJTcGFjaW5nLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgZmxleExheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkZsZXhMYXlvdXQsIHByb3BlcnRpZXM6IGZsZXhMYXlvdXRQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGZvcm1hdFN0YXJ0VGFnKGZsZXhMYXlvdXRFbGVtZW50KSArIGZvcm1hdEVuZFRhZyhmbGV4TGF5b3V0RWxlbWVudCk7XG59XG5mdW5jdGlvbiBUcmFuc2xhdGVIb3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBob3Jpem9udGFsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlZlcnRpY2FsT3B0aW9ucywgICB2YWx1ZTogbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXN9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogbm9kZS5sZXR0ZXJTcGFjaW5nLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgaG9yaXpvbnRhbFN0YWNrTGF5b3V0RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuSG9yaXpvbnRhbFN0YWNrTGF5b3V0LCBwcm9wZXJ0aWVzOiBob3Jpem9udGFsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGZvcm1hdFN0YXJ0VGFnKGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQpICsgZm9ybWF0RW5kVGFnKGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQpO1xufVxuZnVuY3Rpb24gVHJhbnNsYXRlVmVydGljYWxTdGFja0xheW91dEVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IHZlcnRpY2FsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TcGFjaW5nLCB2YWx1ZTogbm9kZS5pdGVtU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlZlcnRpY2FsT3B0aW9ucywgICB2YWx1ZTogbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXN9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogbm9kZS5sZXR0ZXJTcGFjaW5nLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgdmVydGl2YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlZlcnRpY2FsU3RhY2tMYXlvdXQsIHByb3BlcnRpZXM6IHZlcnRpY2FsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGZvcm1hdFN0YXJ0VGFnKHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50KSArIGZvcm1hdEVuZFRhZyh2ZXJ0aXZhbFN0YWNrTGF5b3V0RWxlbWVudCk7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpIHtcbiAgICBpZiAobm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdSaWdodCAmJiBub2RlLnBhZGRpbmdMZWZ0ID09IG5vZGUucGFkZGluZ1RvcCAmJiBub2RlLnBhZGRpbmdMZWZ0ID09IG5vZGUucGFkZGluZ0JvdHRvbSkge1xuICAgICAgICByZXR1cm4gbm9kZS5wYWRkaW5nTGVmdC50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke25vZGUucGFkZGluZ0xlZnR9LCAke25vZGUucGFkZGluZ1RvcH0sICR7bm9kZS5wYWRkaW5nUmlnaHR9LCAke25vZGUucGFkZGluZ0JvdHRvbX0sYDtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYUFsaWduSXRlbXNUb1hhbWxBbGlnbkl0ZW1zKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIFwiTUFYXCI6XG4gICAgICAgICAgICByZXR1cm4gJ0VuZCc7XG4gICAgICAgIGNhc2UgXCJDRU5URVJcIjpcbiAgICAgICAgICAgIHJldHVybiAnQ2VudGVyJztcbiAgICAgICAgY2FzZSBcIk1JTlwiOlxuICAgICAgICAgICAgcmV0dXJuICdTdGFydCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ1N0cmV0Y2gnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpZ21hV3JhcFRvWGFtbFdyYXAodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ1dSQVAnOlxuICAgICAgICAgICAgcmV0dXJuICdXcmFwJztcbiAgICAgICAgY2FzZSAnTk9fV1JBUCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ05vV3JhcCc7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFBbGlnbkNvbnRlbnQodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ1NQQUNFX0JFVFdFRU4nOlxuICAgICAgICAgICAgcmV0dXJuICdTcGFjZUJldHdlZW4nO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdTdHJldGNoJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IGZvcm1hdEVuZFRhZywgZm9ybWF0U3RhcnRUYWcgfSBmcm9tIFwiLi4vLi4vWGFtbFBhcnNlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBlbGxpcHNlUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGgsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5GaWxsLCB2YWx1ZTogbm9kZS5maWxscy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZVRoaWNrbmVzcywgdmFsdWU6IG5vZGUuc3Ryb2tlV2VpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlLCB2YWx1ZTogJyMwMDAwMDAnIH0sXG4gICAgICAgIC8vIEFkZCBvdGhlciBlbGxpcHNlLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcbiAgICBdO1xuICAgIGNvbnN0IGVsbGlwc2VFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5FbGxpcHNlLCBwcm9wZXJ0aWVzOiBlbGxpcHNlUHJvcGVydGllcyB9O1xuICAgIHJldHVybiBmb3JtYXRTdGFydFRhZyhlbGxpcHNlRWxlbWVudCkgKyBmb3JtYXRFbmRUYWcoZWxsaXBzZUVsZW1lbnQpO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IHsgUHJvcGVydHlOYW1lIH0gZnJvbSBcIi4uLy4uL1Byb3BlcnR5XCI7XG5pbXBvcnQgeyBmb3JtYXRFbmRUYWcsIGZvcm1hdFN0YXJ0VGFnIH0gZnJvbSBcIi4uLy4uL1hhbWxQYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVMaW5lRWxlbWVudChub2RlKSB7XG4gICAgY29uc3QgbGluZVByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlgxLCB2YWx1ZTogJzAnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlkxLCB2YWx1ZTogJzAnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlgyLCB2YWx1ZTogJzUwJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5ZMiwgdmFsdWU6ICcwJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5TdHJva2UsIHZhbHVlOiAnIzAwMDAwMCcgfSxcbiAgICAgICAgLy8gQWRkIG90aGVyIGxpbmUtcmVsYXRlZCBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxuICAgIF07XG4gICAgY29uc3QgbGluZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxpbmUsIHByb3BlcnRpZXM6IGxpbmVQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGZvcm1hdFN0YXJ0VGFnKGxpbmVFbGVtZW50KSArIGZvcm1hdEVuZFRhZyhsaW5lRWxlbWVudCk7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmltcG9ydCB7IGZvcm1hdEVuZFRhZywgZm9ybWF0U3RhcnRUYWcgfSBmcm9tIFwiLi4vLi4vWGFtbFBhcnNlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVJlY3RhbmdsZUVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IHJlY3RhbmdsZVByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfVxuICAgICAgICAvLyBBZGQgb3RoZXIgcmVjdGFuZ2xlLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcbiAgICBdO1xuICAgIGNvbnN0IHJlY3RhbmdsZUVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlJlY3RhbmdsZSwgcHJvcGVydGllczogcmVjdGFuZ2xlUHJvcGVydGllcyB9O1xuICAgIHJldHVybiBmb3JtYXRTdGFydFRhZyhyZWN0YW5nbGVFbGVtZW50KSArIGZvcm1hdEVuZFRhZyhyZWN0YW5nbGVFbGVtZW50KTtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgZm9ybWF0RW5kVGFnLCBmb3JtYXRTdGFydFRhZyB9IGZyb20gXCIuLi9YYW1sUGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gVHJhbnNsYXRlVGV4dEVsZW1lbnQobm9kZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBjb25zdCB0ZXh0UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ2hhcmFjdGVyU3BhY2luZywgdmFsdWU6IG5vZGUubGV0dGVyU3BhY2luZy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRBdHRyaWJ1dGVzLCB2YWx1ZTogdHJhbnNsYXRlRm9udFdlaWdodFRvRm9udEF0dHJpYnV0ZXMobm9kZS5mb250V2VpZ2h0KSB8fCAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF1dG9TY2FsaW5nRW5hYmxlZCwgdmFsdWU6IHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKG5vZGUudGV4dEF1dG9SZXNpemUpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRTaXplLCB2YWx1ZTogbm9kZS5mb250U2l6ZS50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxUZXh0QWxpZ25tZW50LCB2YWx1ZTogdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChub2RlLnRleHRBbGlnbkhvcml6b250YWwpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVCcmVha01vZGUsIHZhbHVlOiB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZShub2RlLnRleHRUcnVuY2F0aW9uKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lSGVpZ2h0LCB2YWx1ZTogKF9iID0gKF9hID0gbm9kZS5saW5lSGVpZ2h0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuTWF4TGluZXMsIHZhbHVlOiAoX2QgPSAoX2MgPSBub2RlLm1heExpbmVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJycgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dCwgdmFsdWU6IG5vZGUuY2hhcmFjdGVycyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0Q29sb3IsIHZhbHVlOiB0cmFuc2xhdGVGaWxsc1RvVGV4dENvbG9yKG5vZGUuZmlsbHMpIHx8ICcjMDAwMDAwJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0RGVjb3JhdGlvbnMsIHZhbHVlOiB0cmFuc2xhdGVUZXh0RGVjb3JhdGlvblRvWEFNTChub2RlLnRleHREZWNvcmF0aW9uKSB8fCAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dFRyYW5zZm9ybSwgdmFsdWU6IHRyYW5zbGF0ZVRleHRDYXNlVG9YQU1MKG5vZGUudGV4dENhc2UpIHx8ICdOb25lJyB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlRleHRUeXBlLCAgICAgICAgICAgICAgICB2YWx1ZTogJ1RleHQnIH0gLy8gU2V0IGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gRmlnbWEgcHJvcGVydGllc1xuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnIH0sIC8vIFNldCBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIEZpZ21hIHByb3BlcnRpZXNcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250RmFtaWx5LCAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZm9udE5hbWUgfSwgLy8gU2V0IGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gRmlnbWEgcHJvcGVydGllc1xuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkZvcm1hdHRlZFRleHQsICAgICAgICAgICB2YWx1ZTogJycgfSwgLy8gU2V0IGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gRmlnbWEgcHJvcGVydGllc1xuICAgIF07XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxhYmVsLCBwcm9wZXJ0aWVzOiB0ZXh0UHJvcGVydGllcyB9O1xuICAgIHJldHVybiBmb3JtYXRTdGFydFRhZyh0ZXh0RWxlbWVudCkgKyBmb3JtYXRFbmRUYWcodGV4dEVsZW1lbnQpO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dENhc2VUb1hBTUwodGV4dENhc2UpIHtcbiAgICBzd2l0Y2ggKHRleHRDYXNlKSB7XG4gICAgICAgIGNhc2UgXCJVUFBFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiVXBwZXJjYXNlXCI7XG4gICAgICAgIGNhc2UgXCJMT1dFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiTG93ZXJjYXNlXCI7XG4gICAgICAgIGNhc2UgXCJUSVRMRVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiQ2FwaXRhbGl6ZVwiO1xuICAgICAgICAvLyBGaWdtYSBcIk9SSUdJTkFMXCIgY29ycmVzcG9uZHMgdG8gXCJOb25lXCIgaW4gWEFNTCwgd2hpY2ggbGVhdmVzIHRoZSB0ZXh0IGNhc2UgYXMgaXMuXG4gICAgICAgIGNhc2UgXCJPUklHSU5BTFwiOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiOyAvLyBEZWZhdWx0IHRvIG5vIHRyYW5zZm9ybWF0aW9uXG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dERlY29yYXRpb25Ub1hBTUwodGV4dERlY29yYXRpb24pIHtcbiAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJTVFJJS0VUSFJPVUdIXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJTdHJpa2V0aHJvdWdoXCI7XG4gICAgICAgIGNhc2UgXCJVTkRFUkxJTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlVuZGVybGluZVwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9uZVwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUZpbGxzVG9UZXh0Q29sb3IoZmlsbHMpIHtcbiAgICBpZiAoIWZpbGxzIHx8IGZpbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiBubyBmaWxscyBhcmUgZGVmaW5lZCBvciB0aGUgZmlsbHMgYXJyYXkgaXMgZW1wdHksIHJldHVybiBhIGRlZmF1bHQgY29sb3IgKGUuZy4sIGJsYWNrKS5cbiAgICAgICAgcmV0dXJuIFwiIzAwMDAwMFwiOyAvLyBEZWZhdWx0IHRvIGJsYWNrXG4gICAgfVxuICAgIC8vIEZpZ21hJ3MgYGZpbGxzYCBwcm9wZXJ0eSB0eXBpY2FsbHkgY29udGFpbnMgYSBsaXN0IG9mIHBhaW50IG9iamVjdHMuXG4gICAgLy8gV2UnbGwgYXNzdW1lIHRoZSBmaXJzdCBwYWludCBvYmplY3QgaW4gdGhlIGxpc3QgcmVwcmVzZW50cyB0aGUgdGV4dCBjb2xvci5cbiAgICBjb25zdCBmaWxsID0gZmlsbHNbMF07XG4gICAgaWYgKGZpbGwudHlwZSA9PT0gXCJTT0xJRFwiICYmIGZpbGwudmlzaWJsZSkge1xuICAgICAgICAvLyBJZiBpdCdzIGEgc29saWQgcGFpbnQgYW5kIGl0J3MgdmlzaWJsZSwgY29udmVydCBpdHMgY29sb3IgdG8gYSB2YWxpZCBYQU1MIGNvbG9yIGNvZGUuXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnJvdW5kKGZpbGwuY29sb3IuciAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBjb25zdCBnID0gTWF0aC5yb3VuZChmaWxsLmNvbG9yLmcgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY29uc3QgYiA9IE1hdGgucm91bmQoZmlsbC5jb2xvci5iICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBgIyR7KHIubGVuZ3RoIDwgMiA/IFwiMFwiIDogXCJcIil9JHtyfSR7KGcubGVuZ3RoIDwgMiA/IFwiMFwiIDogXCJcIil9JHtnfSR7KGIubGVuZ3RoIDwgMiA/IFwiMFwiIDogXCJcIil9JHtifWA7XG4gICAgfVxuICAgIC8vIERlZmF1bHQgdG8gYmxhY2sgaWYgdGhlIGZpbGwgaXMgbm90IGEgc29saWQgdmlzaWJsZSBjb2xvci5cbiAgICByZXR1cm4gXCIjMDAwMDAwXCI7IC8vIERlZmF1bHQgdG8gYmxhY2tcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRleHRUcnVuY2F0aW9uVG9MaW5lQnJlYWtNb2RlKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcbiAgICAvL09CUyAhIERvIG5vdCBmdWxmaWxsIGFsbCBMaW5lQnJlYWtNb2RlcyBvZiBYYW1sLiBTZWUgZm9sbG93aW5nIGxpbmsgZm9yIG1vcmUgaW5mbyBhYm91dCBMaW5lQnJlYWtNb2RlOiBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2FwaS9taWNyb3NvZnQubWF1aS5saW5lYnJlYWttb2RlP3ZpZXc9bmV0LW1hdWktNy4wXG4gICAgc3dpdGNoIChmaWdtYVRleHRUcnVuY2F0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJESVNBQkxFRFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiTm9XcmFwXCI7XG4gICAgICAgIGNhc2UgXCJFTkRJTkdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlRhaWxUcnVuY2F0aW9uXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb1dyYXBcIjsgLy8gRGVmYXVsdCB0byBOb1dyYXAgaWYgdGhlIHZhbHVlIGlzIG5vdCByZWNvZ25pemVkXG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dEF1dG9SZXNpemVUb0ZvbnRBdXRvU2NhbGluZ0VuYWJsZWQoZmlnbWFUZXh0QXV0b1Jlc2l6ZSkge1xuICAgIHN3aXRjaCAoZmlnbWFUZXh0QXV0b1Jlc2l6ZSkge1xuICAgICAgICBjYXNlIFwiTk9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmFsc2VcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcInRydWVcIjtcbiAgICB9XG59XG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdHJhbnNsYXRlIEZpZ21hIGhvcml6b250YWwgdGV4dCBhbGlnbm1lbnQgdG8gWEFNTFxuZnVuY3Rpb24gdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChhbGlnbikge1xuICAgIC8vVE9ETzogZml4IHRoaXMgdG8gY29ycmVjdCB4YW1sXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiTEVGVFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiTGVmdFwiO1xuICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJDZW50ZXJcIjtcbiAgICAgICAgY2FzZSBcIlJJR0hUXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJSaWdodFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiTGVmdFwiOyAvLyBEZWZhdWx0IHRvIExlZnQgYWxpZ25tZW50XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRm9udFdlaWdodFRvRm9udEF0dHJpYnV0ZXMoZmlnbWFGb250V2VpZ2h0KSB7XG4gICAgaWYgKGZpZ21hRm9udFdlaWdodCA+IDQwMCkge1xuICAgICAgICByZXR1cm4gJ0JvbGQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ3VzdG9tQ29udHJvbCB7XG4gICAgY29uc3RydWN0b3IoY29udHJvbE5hbWUsIGJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuZW5kVGFnID0gJy8+JztcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IGJpbmRpbmdzO1xuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gdGhpcy5Gb3JtYXRTdGFydFRhZygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb250cm9sTmFtZTtcbiAgICB9XG4gICAgZ2V0U3RhcnRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnO1xuICAgIH1cbiAgICBnZXRFbmRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcbiAgICB9XG4gICAgRm9ybWF0U3RhcnRUYWcoKSB7XG4gICAgICAgIGxldCBzZXRCaW5kaW5ncyA9ICcnO1xuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goYiA9PiBzZXRCaW5kaW5ncyArIGAke2IubmFtZX0gPSAke2IudmFsdWV9XFxuYCk7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGNvbnRyb2w6JHt0aGlzLm5hbWV9ICR7c2V0QmluZGluZ3N9YDtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGVudFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz4nO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnXFxuPC9Db250ZW50Vmlldz4nO1xuICAgICAgICB0aGlzLm5hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGdldFN0YXJ0VGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRhZyArIHRoaXMuc3RhcnRFbmRUYWc7XG4gICAgfVxuICAgIGdldEVuZFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGFnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gYFxyXG4gICAgLy9DcmVhdGUgYSBmb2xkZXIgdW5kZXIgUmVzb3VyY2VzIGNhbGxlZCBcIkN1c3RvbUNvbnRyb2xzXCIgYW5kIG1ha2UgYSBuZXcgXCJDb250ZW50Vmlld1wiIGluIHRoZXJlIFxyXG4gICAgPENvbnRlbnRWaWV3IHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9Q3VzdG9tQ29udHJvbHMuJHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeDpOYW1lPSR7Y2xhc3NOYW1lfVxcbmA7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFBhcnNlRmlnbWEgfSBmcm9tIFwiLi9YYW1sUGFyc2VyXCI7XG4vLyBzcmMvcGx1Z2luLnRzXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfSk7XG5mdW5jdGlvbiBtYWtlRGlzcGxheU5vZGUoX25vZGUpIHtcbiAgICByZXR1cm4geyBuYW1lOiBfbm9kZS5uYW1lLCB0eXBlOiBfbm9kZS50eXBlLCBub2RlOiBfbm9kZSB9O1xufVxuZnVuY3Rpb24gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuKSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGNuLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3Qgbm4gPSB0cmF2ZXJzZShjKTtcbiAgICAgICAgbGlzdC5wdXNoKG5uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbn1cbmZ1bmN0aW9uIHRyYXZlcnNlKGNuKSB7XG4gICAgY29uc3QgZG4gPSBtYWtlRGlzcGxheU5vZGUoY24pO1xuICAgIGNvbnN0IG5uID0ge1xuICAgICAgICBwYXJlbnQ6IGRuLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBjbikge1xuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGNoaWxkcmVuLCB3ZSBtdXN0IGdvIHRocm91Z2ggdGhlbSBhbmQgbWFrZSB0aGVtIGludG8gbmVzdGVkIG5vZGVzXG4gICAgICAgIG5uLmNoaWxkcmVuID0gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5uO1xufVxuY29uc3QgY3VycmVudFBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZTtcbmNvbnN0IHNlbGVjdGlvbiA9IGN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbmNvbnN0IHJvb3ROb2RlID0gbWFrZURpc3BsYXlOb2RlKHNlbGVjdGlvbik7XG5sZXQgbGlzdCA9IFtdO1xuaWYgKCdjaGlsZHJlbicgaW4gc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uLmNoaWxkcmVuLmZvckVhY2goYyA9PiBsaXN0LnB1c2goYykpO1xufVxuY29uc3Qgbm9kZXMgPSBbXG4gICAge1xuICAgICAgICBwYXJlbnQ6IHJvb3ROb2RlLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGxpc3QpLFxuICAgIH0sXG5dO1xuZmlnbWEudWkucG9zdE1lc3NhZ2Uobm9kZXMpO1xuY29uc29sZS5sb2coUGFyc2VGaWdtYShub2RlcykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9