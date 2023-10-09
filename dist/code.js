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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQzVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2cEJLO0FBQ0Y7QUFDa0Q7QUFDRTtBQUNmO0FBQ2hCO0FBQ1k7QUFDeUI7QUFDZjtBQUN0QjtBQUMwQjtBQUNDO0FBQ0E7QUFDRjtBQUNNO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUdBQStCO0FBQzlELHVEQUF1RCxpQkFBaUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMEZBQW9CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx5R0FBdUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdHQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0dBQXlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixvQ0FBb0Msa0ZBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0VBQVc7QUFDN0M7QUFDQSw2REFBNkQsaUJBQWlCO0FBQzlFLG9EQUFvRCxnQkFBZ0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRSxnQ0FBZ0MscUdBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsVUFBVTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNHQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0dBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvR0FBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBHQUF3QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsMEJBQTBCLHNFQUFXO0FBQ3JDO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBWSxZQUFZLElBQUksV0FBVztBQUNqRTtBQUNBLGVBQWUsaURBQVcsZ0JBQWdCLEVBQUUsZUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBWSxZQUFZLElBQUksV0FBVztBQUNqRTtBQUNBLGVBQWUsaURBQVcsZ0JBQWdCLEVBQUUsZUFBZTtBQUMzRDtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFXLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEl5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSwyRUFBMkU7QUFDdkcsVUFBVSxNQUFNLG1EQUFZLCtDQUErQztBQUMzRSxVQUFVLE1BQU0sbURBQVksNkNBQTZDO0FBQ3pFLFVBQVUsTUFBTSxtREFBWSx3RkFBd0Y7QUFDcEgsVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksMEZBQTBGO0FBQ3RILFVBQVUsTUFBTSxtREFBWSw2REFBNkQ7QUFDekYsVUFBVSxNQUFNLG1EQUFZLHVFQUF1RTtBQUNuRyxVQUFVLE1BQU0sbURBQVksK0VBQStFO0FBQzNHLFlBQVksc0VBQXNFO0FBQ2xGLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksZ0RBQWdEO0FBQzVELFlBQVksOERBQThEO0FBQzFFLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksb0RBQW9EO0FBQ2hFLFlBQVksd0VBQXdFO0FBQ3BGLFlBQVk7QUFDWjtBQUNBLGdDQUFnQyxNQUFNLGlEQUFXO0FBQ2pELDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BILFlBQVksd0VBQXdFO0FBQ3BGLFlBQVk7QUFDWjtBQUNBLDJDQUEyQyxNQUFNLGlEQUFXO0FBQzVELHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU0sbURBQVksOENBQThDO0FBQzFFLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZLDZDQUE2QztBQUN6RSxVQUFVLE1BQU0sbURBQVksd0ZBQXdGO0FBQ3BILFlBQVksd0VBQXdFO0FBQ3BGLFlBQVk7QUFDWjtBQUNBLHlDQUF5QyxNQUFNLGlEQUFXO0FBQzFELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCLElBQUksZ0JBQWdCLElBQUksa0JBQWtCLElBQUksbUJBQW1CO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHNEM7QUFDRTtBQUN2QztBQUNQO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLHNDQUFzQztBQUNsRSxVQUFVLE1BQU0sbURBQVksd0NBQXdDO0FBQ3BFLFVBQVUsTUFBTSxtREFBWSxxQ0FBcUM7QUFDakUsVUFBVSxNQUFNLG1EQUFZLHVEQUF1RDtBQUNuRixVQUFVLE1BQU0sbURBQVksMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSxpREFBVztBQUM5QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2I0QztBQUNFO0FBQ3ZDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksaUJBQWlCO0FBQzdDLFVBQVUsTUFBTSxtREFBWSxpQkFBaUI7QUFDN0MsVUFBVSxNQUFNLG1EQUFZLGtCQUFrQjtBQUM5QyxVQUFVLE1BQU0sbURBQVksaUJBQWlCO0FBQzdDLFVBQVUsTUFBTSxtREFBWSwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBLDBCQUEwQixNQUFNLGlEQUFXO0FBQzNDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjRDO0FBQ0U7QUFDdkM7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSxzQ0FBc0M7QUFDbEUsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTSxpREFBVztBQUNoRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0QztBQUNFO0FBQ3ZDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksc0NBQXNDO0FBQ2xFLFVBQVUsTUFBTSxtREFBWSx3Q0FBd0M7QUFDcEUsVUFBVSxNQUFNLG1EQUFZLHVDQUF1QztBQUNuRTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0saURBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2R5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQTtBQUNBLFVBQVUsTUFBTSxtREFBWSx1R0FBdUc7QUFDbkksVUFBVSxNQUFNLG1EQUFZLDhFQUE4RTtBQUMxRyxVQUFVLE1BQU0sbURBQVksc0dBQXNHO0FBQ2xJLFVBQVUsTUFBTSxtREFBWSw0Q0FBNEM7QUFDeEUsVUFBVSxNQUFNLG1EQUFZLHlGQUF5RjtBQUNySCxVQUFVLE1BQU0sbURBQVksb0ZBQW9GO0FBQ2hILFVBQVUsTUFBTSxtREFBWSw4RkFBOEY7QUFDMUgsVUFBVSxNQUFNLG1EQUFZLDBJQUEwSTtBQUN0SyxVQUFVLE1BQU0sbURBQVksK0JBQStCO0FBQzNELFVBQVUsTUFBTSxtREFBWSw2RkFBNkY7QUFDekgsVUFBVSxNQUFNLG1EQUFZLHVGQUF1RjtBQUNuSCxVQUFVLE1BQU0sbURBQVkseUVBQXlFO0FBQ3JHLFlBQVksNERBQTREO0FBQ3hFLFlBQVksd0RBQXdEO0FBQ3BFLFlBQVksa0VBQWtFO0FBQzlFLFlBQVksdURBQXVEO0FBQ25FO0FBQ0EsMEJBQTBCLE1BQU0saURBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0h5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDRCQUE0QixNQUFNLGlEQUFXO0FBQzdDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQ0U7QUFDcEM7QUFDUDtBQUNBLFVBQVUsTUFBTSxtREFBWSwrQ0FBK0M7QUFDM0UsVUFBVSxNQUFNLG1EQUFZO0FBQzVCO0FBQ0EsNEJBQTRCLE1BQU0saURBQVc7QUFDN0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeUM7QUFDRTtBQUNwQztBQUNQO0FBQ0EsVUFBVSxNQUFNLG1EQUFZLCtDQUErQztBQUMzRSxVQUFVLE1BQU0sbURBQVk7QUFDNUI7QUFDQSwyQkFBMkIsTUFBTSxpREFBVztBQUM1QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUNFO0FBQ3BDO0FBQ1A7QUFDQSxVQUFVLE1BQU0sbURBQVksK0NBQStDO0FBQzNFLFVBQVUsTUFBTSxtREFBWTtBQUM1QjtBQUNBLDhCQUE4QixNQUFNLGlEQUFXO0FBQy9DO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxRQUFRLElBQUksUUFBUTtBQUN4RTtBQUNBLG1CQUFtQixXQUFXLEVBQUUsWUFBWTtBQUM1QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw2QkFBNkIsVUFBVTtBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsNkJBQTZCLFVBQVU7QUFDdkM7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQztBQUMxQztBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGtCQUFrQixzQkFBc0I7QUFDNUcseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdCQUF3Qix1REFBVTtBQUNsQywyQkFBMkIsK0JBQStCO0FBQzFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL1Byb3BlcnR5LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9YYW1sUGFyc2VyLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL2ZyYW1lLTItbGF5b3V0LnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9lbGxpcHNlLTItZWxsaXBzZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvbGluZS0yLWxpbmUudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3JlY3RhbmdsZS0yLXJlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvdmVjdG9yLTItaWNvbi50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvZmlnbWEtbm9kZS10cmFuc2xhdGlvbi90ZXh0LTItbGFiZWwudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9idXR0b24tMi14YW1sLnRzIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS8uL3NyYy91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZWRpdG9yLTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2VudHJ5LTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMvdXNlci1kZWZpbmVkLXR5cGVzLXRyYW5zbGF0aW9uL2xpc3R2aWV3LTIteGFtbC50cyIsIndlYnBhY2s6Ly9EZXNpZ24tdG8tTkVULU1BVUkvLi9zcmMveGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtY3VzdG9tLWNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL3hhbWwtdmlld3MtY2xhc3Nlcy94YW1sLXZpZXcudHMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Rlc2lnbi10by1ORVQtTUFVSS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRGVzaWduLXRvLU5FVC1NQVVJLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBFbGVtZW50TmFtZTtcbihmdW5jdGlvbiAoRWxlbWVudE5hbWUpIHtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxhYmVsXCJdID0gMF0gPSBcIkxhYmVsXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJCdXR0b25cIl0gPSAxXSA9IFwiQnV0dG9uXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJFZGl0b3JcIl0gPSAyXSA9IFwiRWRpdG9yXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJFbnRyeVwiXSA9IDNdID0gXCJFbnRyeVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU3RhY2tGcmFtZVwiXSA9IDRdID0gXCJTdGFja0ZyYW1lXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUZXh0QmxvY2tcIl0gPSA1XSA9IFwiVGV4dEJsb2NrXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJUZXh0Qm94XCJdID0gNl0gPSBcIlRleHRCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNvbWJvQm94XCJdID0gN10gPSBcIkNvbWJvQm94XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaXN0Qm94XCJdID0gOF0gPSBcIkxpc3RCb3hcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkxpc3RWaWV3XCJdID0gOV0gPSBcIkxpc3RWaWV3XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJSYWRpb0J1dHRvblwiXSA9IDEwXSA9IFwiUmFkaW9CdXR0b25cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIkNoZWNrQm94XCJdID0gMTFdID0gXCJDaGVja0JveFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiSW1hZ2VcIl0gPSAxMl0gPSBcIkltYWdlXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJCb3JkZXJcIl0gPSAxM10gPSBcIkJvcmRlclwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2Nyb2xsVmlld2VyXCJdID0gMTRdID0gXCJTY3JvbGxWaWV3ZXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlByb2dyZXNzQmFyXCJdID0gMTVdID0gXCJQcm9ncmVzc0JhclwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiU2xpZGVyXCJdID0gMTZdID0gXCJTbGlkZXJcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlRhYkNvbnRyb2xcIl0gPSAxN10gPSBcIlRhYkNvbnRyb2xcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlRhYkl0ZW1cIl0gPSAxOF0gPSBcIlRhYkl0ZW1cIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIk1lbnVcIl0gPSAxOV0gPSBcIk1lbnVcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIk1lbnVJdGVtXCJdID0gMjBdID0gXCJNZW51SXRlbVwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiQ29udGV4dE1lbnVcIl0gPSAyMV0gPSBcIkNvbnRleHRNZW51XCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQb3B1cFwiXSA9IDIyXSA9IFwiUG9wdXBcIjtcbiAgICBFbGVtZW50TmFtZVtFbGVtZW50TmFtZVtcIlJlY3RhbmdsZVwiXSA9IDIzXSA9IFwiUmVjdGFuZ2xlXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJFbGxpcHNlXCJdID0gMjRdID0gXCJFbGxpcHNlXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJQb2x5Z29uXCJdID0gMjVdID0gXCJQb2x5Z29uXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJMaW5lXCJdID0gMjZdID0gXCJMaW5lXCI7XG4gICAgRWxlbWVudE5hbWVbRWxlbWVudE5hbWVbXCJIb3Jpem9udGFsU3RhY2tMYXlvdXRcIl0gPSAyN10gPSBcIkhvcml6b250YWxTdGFja0xheW91dFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiVmVydGljYWxTdGFja0xheW91dFwiXSA9IDI4XSA9IFwiVmVydGljYWxTdGFja0xheW91dFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRmxleExheW91dFwiXSA9IDI5XSA9IFwiRmxleExheW91dFwiO1xuICAgIEVsZW1lbnROYW1lW0VsZW1lbnROYW1lW1wiRnJhbWVcIl0gPSAzMF0gPSBcIkZyYW1lXCI7XG59KShFbGVtZW50TmFtZSB8fCAoRWxlbWVudE5hbWUgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQcm9wZXJ0eU5hbWU7XG4oZnVuY3Rpb24gKFByb3BlcnR5TmFtZSkge1xuICAgIC8vQ29tbW9uXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIldpZHRoXCJdID0gMF0gPSBcIldpZHRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlaWdodFwiXSA9IDFdID0gXCJIZWlnaHRcIjtcbiAgICAvL0xhYmVsXG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNoYXJhY3RlclNwYWNpbmdcIl0gPSAyXSA9IFwiQ2hhcmFjdGVyU3BhY2luZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXR0cmlidXRlc1wiXSA9IDNdID0gXCJGb250QXR0cmlidXRlc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb250QXV0b1NjYWxpbmdFbmFibGVkXCJdID0gNF0gPSBcIkZvbnRBdXRvU2NhbGluZ0VuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEZhbWlseVwiXSA9IDVdID0gXCJGb250RmFtaWx5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRTaXplXCJdID0gNl0gPSBcIkZvbnRTaXplXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvcm1hdHRlZFRleHRcIl0gPSA3XSA9IFwiRm9ybWF0dGVkVGV4dFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsVGV4dEFsaWdubWVudFwiXSA9IDhdID0gXCJIb3Jpem9udGFsVGV4dEFsaWdubWVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJMaW5lQnJlYWtNb2RlXCJdID0gOV0gPSBcIkxpbmVCcmVha01vZGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGluZUhlaWdodFwiXSA9IDEwXSA9IFwiTGluZUhlaWdodFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhMaW5lc1wiXSA9IDExXSA9IFwiTWF4TGluZXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGFkZGluZ1wiXSA9IDEyXSA9IFwiUGFkZGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUZXh0XCJdID0gMTNdID0gXCJUZXh0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRDb2xvclwiXSA9IDE0XSA9IFwiVGV4dENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHREZWNvcmF0aW9uc1wiXSA9IDE1XSA9IFwiVGV4dERlY29yYXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRleHRUcmFuc2Zvcm1cIl0gPSAxNl0gPSBcIlRleHRUcmFuc2Zvcm1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dFR5cGVcIl0gPSAxN10gPSBcIlRleHRUeXBlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsVGV4dEFsaWdubWVudFwiXSA9IDE4XSA9IFwiVmVydGljYWxUZXh0QWxpZ25tZW50XCI7XG4gICAgLy9GcmFtZVxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTcGFjaW5nXCJdID0gMTldID0gXCJTcGFjaW5nXCI7XG4gICAgLy9GbGV4TGF5b3V0XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduQ29udGVudFwiXSA9IDIwXSA9IFwiQWxpZ25Db250ZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduSXRlbXNcIl0gPSAyMV0gPSBcIkFsaWduSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRGlyZWN0aW9uXCJdID0gMjJdID0gXCJEaXJlY3Rpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSnVzdGlmeUNvbnRlbnRcIl0gPSAyM10gPSBcIkp1c3RpZnlDb250ZW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBvc2l0aW9uXCJdID0gMjRdID0gXCJQb3NpdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJXcmFwXCJdID0gMjVdID0gXCJXcmFwXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsaWduU2VsZlwiXSA9IDI2XSA9IFwiQWxpZ25TZWxmXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkJhc2lzXCJdID0gMjddID0gXCJCYXNpc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm93XCJdID0gMjhdID0gXCJHcm93XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9yZGVyXCJdID0gMjldID0gXCJPcmRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTaHJpbmtcIl0gPSAzMF0gPSBcIlNocmlua1wiO1xuICAgIC8vUG9seWdvblxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQb2ludHNcIl0gPSAzMV0gPSBcIlBvaW50c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGaWxsXCJdID0gMzJdID0gXCJGaWxsXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZpbGxSdWxlXCJdID0gMzNdID0gXCJGaWxsUnVsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VcIl0gPSAzNF0gPSBcIlN0cm9rZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTdHJva2VUaGlja25lc3NcIl0gPSAzNV0gPSBcIlN0cm9rZVRoaWNrbmVzc1wiO1xuICAgIC8vTGluZVxuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJYMVwiXSA9IDM2XSA9IFwiWDFcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiWDJcIl0gPSAzN10gPSBcIlgyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlkxXCJdID0gMzhdID0gXCJZMVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJZMlwiXSA9IDM5XSA9IFwiWTJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udEF0dHJpYnV0ZVwiXSA9IDQwXSA9IFwiRm9udEF0dHJpYnV0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCYWNrZ3JvdW5kQ29sb3JcIl0gPSA0MV0gPSBcIkJhY2tncm91bmRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb3JlZ3JvdW5kQ29sb3JcIl0gPSA0Ml0gPSBcIkZvcmVncm91bmRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXJnaW5cIl0gPSA0M10gPSBcIk1hcmdpblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCb3JkZXJDb2xvclwiXSA9IDQ0XSA9IFwiQm9yZGVyQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQm9yZGVyVGhpY2tuZXNzXCJdID0gNDVdID0gXCJCb3JkZXJUaGlja25lc3NcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVmlzaWJpbGl0eVwiXSA9IDQ2XSA9IFwiVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRcIl0gPSA0N10gPSBcIklzRW5hYmxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1JlYWRPbmx5XCJdID0gNDhdID0gXCJJc1JlYWRPbmx5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvbnRXZWlnaHRcIl0gPSA0OV0gPSBcIkZvbnRXZWlnaHRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRm9udFN0eWxlXCJdID0gNTBdID0gXCJGb250U3R5bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiVGV4dEFsaWdubWVudFwiXSA9IDUxXSA9IFwiVGV4dEFsaWdubWVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJbWFnZVNvdXJjZVwiXSA9IDUyXSA9IFwiSW1hZ2VTb3VyY2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU291cmNlXCJdID0gNTNdID0gXCJTb3VyY2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbEFsaWdubWVudFwiXSA9IDU0XSA9IFwiSG9yaXpvbnRhbEFsaWdubWVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbEFsaWdubWVudFwiXSA9IDU1XSA9IFwiVmVydGljYWxBbGlnbm1lbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT3BhY2l0eVwiXSA9IDU2XSA9IFwiT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb21tYW5kXCJdID0gNTddID0gXCJDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbW1hbmRQYXJhbWV0ZXJcIl0gPSA1OF0gPSBcIkNvbW1hbmRQYXJhbWV0ZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNDaGVja2VkXCJdID0gNTldID0gXCJJc0NoZWNrZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFwiXSA9IDYwXSA9IFwiQ29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIZWFkZXJcIl0gPSA2MV0gPSBcIkhlYWRlclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclRleHRcIl0gPSA2Ml0gPSBcIlBsYWNlaG9sZGVyVGV4dFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJQbGFjZWhvbGRlclRleHRDb2xvclwiXSA9IDYzXSA9IFwiUGxhY2Vob2xkZXJUZXh0Q29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlXCJdID0gNjRdID0gXCJJc1Zpc2libGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNGb2N1c2VkXCJdID0gNjVdID0gXCJJc0ZvY3VzZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNTZWxlY3RlZFwiXSA9IDY2XSA9IFwiSXNTZWxlY3RlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtc1NvdXJjZVwiXSA9IDY3XSA9IFwiSXRlbXNTb3VyY2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbVRlbXBsYXRlXCJdID0gNjhdID0gXCJJdGVtVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUGxhY2Vob2xkZXJcIl0gPSA2OV0gPSBcIlBsYWNlaG9sZGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGVkSW5kZXhcIl0gPSA3MF0gPSBcIlNlbGVjdGVkSW5kZXhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWluaW11bVwiXSA9IDcxXSA9IFwiTWluaW11bVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXhpbXVtXCJdID0gNzJdID0gXCJNYXhpbXVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZhbHVlXCJdID0gNzNdID0gXCJWYWx1ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1RvZ2dsZWRcIl0gPSA3NF0gPSBcIklzVG9nZ2xlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb3JuZXJSYWRpdXNcIl0gPSA3NV0gPSBcIkNvcm5lclJhZGl1c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Bhc3N3b3JkXCJdID0gNzZdID0gXCJJc1Bhc3N3b3JkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzUmVhZE9ubHlDYXJldFZpc2libGVcIl0gPSA3N10gPSBcIklzUmVhZE9ubHlDYXJldFZpc2libGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbXNcIl0gPSA3OF0gPSBcIkl0ZW1zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzT3BlblwiXSA9IDc5XSA9IFwiSXNPcGVuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRWRpdGFibGVcIl0gPSA4MF0gPSBcIklzRWRpdGFibGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRGlzcGxheU1lbWJlclBhdGhcIl0gPSA4MV0gPSBcIkRpc3BsYXlNZW1iZXJQYXRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNlbGVjdGVkVmFsdWVcIl0gPSA4Ml0gPSBcIlNlbGVjdGVkVmFsdWVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2VsZWN0ZWRWYWx1ZVBhdGhcIl0gPSA4M10gPSBcIlNlbGVjdGVkVmFsdWVQYXRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclRlbXBsYXRlXCJdID0gODRdID0gXCJIZWFkZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJGb290ZXJUZW1wbGF0ZVwiXSA9IDg1XSA9IFwiRm9vdGVyVGVtcGxhdGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSWNvblwiXSA9IDg2XSA9IFwiSWNvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJY29uU291cmNlXCJdID0gODddID0gXCJJY29uU291cmNlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwTmFtZVwiXSA9IDg4XSA9IFwiR3JvdXBOYW1lXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNhblVzZXJTb3J0XCJdID0gODldID0gXCJDYW5Vc2VyU29ydFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDYW5Vc2VyRmlsdGVyXCJdID0gOTBdID0gXCJDYW5Vc2VyRmlsdGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbnNcIl0gPSA5MV0gPSBcIkNvbHVtbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93c1wiXSA9IDkyXSA9IFwiUm93c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5EZWZpbml0aW9uc1wiXSA9IDkzXSA9IFwiQ29sdW1uRGVmaW5pdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93RGVmaW5pdGlvbnNcIl0gPSA5NF0gPSBcIlJvd0RlZmluaXRpb25zXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNlbGxQYWRkaW5nXCJdID0gOTVdID0gXCJDZWxsUGFkZGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dTcGFuXCJdID0gOTZdID0gXCJSb3dTcGFuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtblNwYW5cIl0gPSA5N10gPSBcIkNvbHVtblNwYW5cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNIZWFkZXJWaXNpYmxlXCJdID0gOThdID0gXCJJc0hlYWRlclZpc2libGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNTb3J0YWJsZVwiXSA9IDk5XSA9IFwiSXNTb3J0YWJsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTb3J0RGlyZWN0aW9uXCJdID0gMTAwXSA9IFwiU29ydERpcmVjdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEhlYWRlclRlbXBsYXRlXCJdID0gMTAxXSA9IFwiR3JvdXBIZWFkZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cEZvb3RlclRlbXBsYXRlXCJdID0gMTAyXSA9IFwiR3JvdXBGb290ZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJHcm91cFN0eWxlXCJdID0gMTAzXSA9IFwiR3JvdXBTdHlsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0V4cGFuZGVkXCJdID0gMTA0XSA9IFwiSXNFeHBhbmRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtc1BhbmVsXCJdID0gMTA1XSA9IFwiSXRlbXNQYW5lbFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJBbHRlcm5hdGluZ1Jvd0NvbG9yXCJdID0gMTA2XSA9IFwiQWx0ZXJuYXRpbmdSb3dDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtQ29udGFpbmVyU3R5bGVcIl0gPSAxMDddID0gXCJJdGVtQ29udGFpbmVyU3R5bGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNvbnRhaW5lclN0eWxlU2VsZWN0b3JcIl0gPSAxMDhdID0gXCJJdGVtQ29udGFpbmVyU3R5bGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtVGVtcGxhdGVTZWxlY3RvclwiXSA9IDEwOV0gPSBcIkl0ZW1UZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwSGVhZGVyU3R5bGVcIl0gPSAxMTBdID0gXCJHcm91cEhlYWRlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwRm9vdGVyU3R5bGVcIl0gPSAxMTFdID0gXCJHcm91cEZvb3RlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDExMl0gPSBcIkdyb3VwRm9vdGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJDb2x1bW5IZWFkZXJTdHlsZVwiXSA9IDExM10gPSBcIkNvbHVtbkhlYWRlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbHVtbkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMTRdID0gXCJDb2x1bW5IZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZyb3plbkNvbHVtbkNvdW50XCJdID0gMTE1XSA9IFwiRnJvemVuQ29sdW1uQ291bnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQXV0b0dlbmVyYXRlQ29sdW1uc1wiXSA9IDExNl0gPSBcIkF1dG9HZW5lcmF0ZUNvbHVtbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1NvdXJjZVwiXSA9IDExN10gPSBcIkNvbHVtbnNTb3VyY2VcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29sdW1uc1dpZHRoXCJdID0gMTE4XSA9IFwiQ29sdW1uc1dpZHRoXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNvcnRNZW1iZXJQYXRoXCJdID0gMTE5XSA9IFwiU29ydE1lbWJlclBhdGhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVhZGVyVGVtcGxhdGVcIl0gPSAxMjBdID0gXCJSb3dIZWFkZXJUZW1wbGF0ZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWFkZXJTdHlsZVwiXSA9IDEyMV0gPSBcIlJvd0hlYWRlclN0eWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvd0hlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxMjJdID0gXCJSb3dIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFsdGVybmF0aW9uQ291bnRcIl0gPSAxMjNdID0gXCJBbHRlcm5hdGlvbkNvdW50XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzQWx0ZXJuYXRpbmdSb3dDb2xvckVuYWJsZWRcIl0gPSAxMjRdID0gXCJJc0FsdGVybmF0aW5nUm93Q29sb3JFbmFibGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzSXRlbUNsaWNrRW5hYmxlZFwiXSA9IDEyNV0gPSBcIklzSXRlbUNsaWNrRW5hYmxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJIb3Jpem9udGFsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDEyNl0gPSBcIkhvcml6b250YWxTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiXSA9IDEyN10gPSBcIlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3Rpb25Nb2RlXCJdID0gMTI4XSA9IFwiU2VsZWN0aW9uTW9kZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEl0ZW1zXCJdID0gMTI5XSA9IFwiU2VsZWN0ZWRJdGVtc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTZWxlY3RlZEl0ZW1cIl0gPSAxMzBdID0gXCJTZWxlY3RlZEl0ZW1cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXRlbUNsaWNrXCJdID0gMTMxXSA9IFwiSXRlbUNsaWNrXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzU3RpY2t5XCJdID0gMTMyXSA9IFwiSXNTdGlja3lcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNQdWxsVG9SZWZyZXNoRW5hYmxlZFwiXSA9IDEzM10gPSBcIklzUHVsbFRvUmVmcmVzaEVuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUmVmcmVzaENvbW1hbmRcIl0gPSAxMzRdID0gXCJSZWZyZXNoQ29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nXCJdID0gMTM1XSA9IFwiSXNQdWxsVG9SZWZyZXNoUmVmcmVzaGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1B1bGxUb1JlZnJlc2hSZWZyZXNoaW5nQ2hhbmdlZFwiXSA9IDEzNl0gPSBcIklzUHVsbFRvUmVmcmVzaFJlZnJlc2hpbmdDaGFuZ2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVFbmFibGVkXCJdID0gMTM3XSA9IFwiSXNMb2FkTW9yZUVuYWJsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTG9hZE1vcmVDb21tYW5kXCJdID0gMTM4XSA9IFwiTG9hZE1vcmVDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzTG9hZE1vcmVMb2FkaW5nXCJdID0gMTM5XSA9IFwiSXNMb2FkTW9yZUxvYWRpbmdcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNMb2FkTW9yZUxvYWRpbmdDaGFuZ2VkXCJdID0gMTQwXSA9IFwiSXNMb2FkTW9yZUxvYWRpbmdDaGFuZ2VkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1UYXBwZWRcIl0gPSAxNDFdID0gXCJJdGVtVGFwcGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkl0ZW1TZWxlY3RlZFwiXSA9IDE0Ml0gPSBcIkl0ZW1TZWxlY3RlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJdGVtRG91YmxlVGFwcGVkXCJdID0gMTQzXSA9IFwiSXRlbURvdWJsZVRhcHBlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZUxlZnRDb21tYW5kXCJdID0gMTQ0XSA9IFwiU3dpcGVMZWZ0Q29tbWFuZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTd2lwZVJpZ2h0Q29tbWFuZFwiXSA9IDE0NV0gPSBcIlN3aXBlUmlnaHRDb21tYW5kXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlN3aXBlVXBDb21tYW5kXCJdID0gMTQ2XSA9IFwiU3dpcGVVcENvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVEb3duQ29tbWFuZFwiXSA9IDE0N10gPSBcIlN3aXBlRG93bkNvbW1hbmRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3dpcGVJdGVtc1wiXSA9IDE0OF0gPSBcIlN3aXBlSXRlbXNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNSZWZyZXNoaW5nXCJdID0gMTQ5XSA9IFwiSXNSZWZyZXNoaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJlZnJlc2hDb21tYW5kUGFyYW1ldGVyXCJdID0gMTUwXSA9IFwiUmVmcmVzaENvbW1hbmRQYXJhbWV0ZXJcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm93SGVpZ2h0XCJdID0gMTUxXSA9IFwiUm93SGVpZ2h0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkF1dG9HZW5lcmF0ZUl0ZW1cIl0gPSAxNTJdID0gXCJBdXRvR2VuZXJhdGVJdGVtXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbE1vZGVcIl0gPSAxNTNdID0gXCJTY3JvbGxNb2RlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbEJhclZpc2liaWxpdHlcIl0gPSAxNTRdID0gXCJTY3JvbGxCYXJWaXNpYmlsaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvXCJdID0gMTU1XSA9IFwiU2Nyb2xsVG9cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2Nyb2xsVG9Sb3dcIl0gPSAxNTZdID0gXCJTY3JvbGxUb1Jvd1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb1Jvd0luZGV4XCJdID0gMTU3XSA9IFwiU2Nyb2xsVG9Sb3dJbmRleFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY3JvbGxUb0NvbHVtblwiXSA9IDE1OF0gPSBcIlNjcm9sbFRvQ29sdW1uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlNjcm9sbFRvQ29sdW1uSW5kZXhcIl0gPSAxNTldID0gXCJTY3JvbGxUb0NvbHVtbkluZGV4XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlYWRlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNjBdID0gXCJIZWFkZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkZvb3RlclRlbXBsYXRlU2VsZWN0b3JcIl0gPSAxNjFdID0gXCJGb290ZXJUZW1wbGF0ZVNlbGVjdG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdyb3VwSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiXSA9IDE2Ml0gPSBcIkdyb3VwSGVhZGVyVGVtcGxhdGVTZWxlY3RvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJSb3dIZWlnaHRSZXNpemVyXCJdID0gMTYzXSA9IFwiUm93SGVpZ2h0UmVzaXplclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxTdGFydGVkXCJdID0gMTY0XSA9IFwiT25QdWxsU3RhcnRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxEZWx0YVwiXSA9IDE2NV0gPSBcIk9uUHVsbERlbHRhXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uUHVsbENvbXBsZXRlZFwiXSA9IDE2Nl0gPSBcIk9uUHVsbENvbXBsZXRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblB1bGxDb250ZW50XCJdID0gMTY3XSA9IFwiT25QdWxsQ29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJlbGVhc2VDb250ZW50XCJdID0gMTY4XSA9IFwiT25SZWxlYXNlQ29udGVudFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlU3RhcnRlZFwiXSA9IDE2OV0gPSBcIk9uU3dpcGVTdGFydGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3dpcGVEZWx0YVwiXSA9IDE3MF0gPSBcIk9uU3dpcGVEZWx0YVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblN3aXBlQ29tcGxldGVkXCJdID0gMTcxXSA9IFwiT25Td2lwZUNvbXBsZXRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJldmVhbGluZ1wiXSA9IDE3Ml0gPSBcIk9uUmV2ZWFsaW5nXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3dpcGVFbmRlZFwiXSA9IDE3M10gPSBcIk9uU3dpcGVFbmRlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPblJldmVhbGVkXCJdID0gMTc0XSA9IFwiT25SZXZlYWxlZFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkV4ZWN1dGVcIl0gPSAxNzVdID0gXCJPbkV4ZWN1dGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiT25IaWRpbmdcIl0gPSAxNzZdID0gXCJPbkhpZGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJPbkhpZGRlblwiXSA9IDE3N10gPSBcIk9uSGlkZGVuXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk9uU3RhdGVDaGFuZ2VcIl0gPSAxNzhdID0gXCJPblN0YXRlQ2hhbmdlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkFuaW1hdGlvbkR1cmF0aW9uXCJdID0gMTc5XSA9IFwiQW5pbWF0aW9uRHVyYXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTWF4VG9wT2Zmc2V0XCJdID0gMTgwXSA9IFwiTWF4VG9wT2Zmc2V0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pblRvcE9mZnNldFwiXSA9IDE4MV0gPSBcIk1pblRvcE9mZnNldFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNaW5Ub3BSZXZlYWxlZFwiXSA9IDE4Ml0gPSBcIk1pblRvcFJldmVhbGVkXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1heFRvcFJldmVhbGVkXCJdID0gMTgzXSA9IFwiTWF4VG9wUmV2ZWFsZWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ29udGVudFRlbXBsYXRlXCJdID0gMTg0XSA9IFwiQ29udGVudFRlbXBsYXRlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkNvbnRlbnRUZW1wbGF0ZVNlbGVjdG9yXCJdID0gMTg1XSA9IFwiQ29udGVudFRlbXBsYXRlU2VsZWN0b3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSG9yaXpvbnRhbE9wdGlvbnNcIl0gPSAxODZdID0gXCJIb3Jpem9udGFsT3B0aW9uc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJWZXJ0aWNhbE9wdGlvbnNcIl0gPSAxODddID0gXCJWZXJ0aWNhbE9wdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm90YXRpb25cIl0gPSAxODhdID0gXCJSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY2FsZVwiXSA9IDE4OV0gPSBcIlNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRyYW5zbGF0aW9uWFwiXSA9IDE5MF0gPSBcIlRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJUcmFuc2xhdGlvbllcIl0gPSAxOTFdID0gXCJUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGF5b3V0WFwiXSA9IDE5Ml0gPSBcIkxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiTGF5b3V0WVwiXSA9IDE5M10gPSBcIkxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiV2lkdGhSZXF1ZXN0XCJdID0gMTk0XSA9IFwiV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkhlaWdodFJlcXVlc3RcIl0gPSAxOTVdID0gXCJIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSAxOTZdID0gXCJNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gMTk3XSA9IFwiTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5jaG9yWFwiXSA9IDE5OF0gPSBcIkFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQW5jaG9yWVwiXSA9IDE5OV0gPSBcIkFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiUm90YXRpb25YXCJdID0gMjAwXSA9IFwiUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlJvdGF0aW9uWVwiXSA9IDIwMV0gPSBcIlJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJTY2FsZVhcIl0gPSAyMDJdID0gXCJTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU2NhbGVZXCJdID0gMjAzXSA9IFwiU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiXSA9IDIwNF0gPSBcIlBsYXRmb3JtQ29uZmlndXJhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJNYXJnaW5Db25zdHJhaW50c1wiXSA9IDIwNV0gPSBcIk1hcmdpbkNvbnN0cmFpbnRzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIkdlc3R1cmVSZWNvZ25pemVyc1wiXSA9IDIwNl0gPSBcIkdlc3R1cmVSZWNvZ25pemVyc1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJCZWhhdmlvclwiXSA9IDIwN10gPSBcIkJlaGF2aW9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIlRyaWdnZXJzXCJdID0gMjA4XSA9IFwiVHJpZ2dlcnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiQ2xhc3NJZFwiXSA9IDIwOV0gPSBcIkNsYXNzSWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiU3R5bGVJZFwiXSA9IDIxMF0gPSBcIlN0eWxlSWRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiRmxvd0RpcmVjdGlvblwiXSA9IDIxMV0gPSBcIkZsb3dEaXJlY3Rpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSW5wdXRUcmFuc3BhcmVudFwiXSA9IDIxMl0gPSBcIklucHV0VHJhbnNwYXJlbnRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yXCJdID0gMjEzXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yXCJdID0gMjE0XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzXCJdID0gMjE1XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblwiXSA9IDIxNl0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nXCJdID0gMjE3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclwiXSA9IDIxOF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yXCJdID0gMjE5XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhcIl0gPSAyMjBdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dcIl0gPSAyMjFdID0gXCJJc1Zpc2libGVTaGFkb3dcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlXCJdID0gMjIyXSA9IFwiSXNWaXNpYmxlU3Ryb2tlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclwiXSA9IDIyM10gPSBcIklzVmlzaWJsZVRleHRDb2xvclwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNcIl0gPSAyMjRdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YXCJdID0gMjI1XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVwiXSA9IDIyNl0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblwiXSA9IDIyN10gPSBcIklzVmlzaWJsZVJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlXCJdID0gMjI4XSA9IFwiSXNWaXNpYmxlU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFwiXSA9IDIyOV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0XCJdID0gMjMwXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gMjMxXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDIzMl0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luXCJdID0gMjMzXSA9IFwiSXNWaXNpYmxlTWFyZ2luXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1wiXSA9IDIzNF0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nXCJdID0gMjM1XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nXCJdID0gMjM2XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1wiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JPcGFjaXR5XCJdID0gMjM3XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck9wYWNpdHlcIl0gPSAyMzhdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvck9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCJdID0gMjM5XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd09wYWNpdHlcIl0gPSAyNDBdID0gXCJJc1Zpc2libGVTaGFkb3dPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck9wYWNpdHlcIl0gPSAyNDFdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE9wYWNpdHlcIl0gPSAyNDJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU9wYWNpdHlcIl0gPSAyNDNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uT3BhY2l0eVwiXSA9IDI0NF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIl0gPSAyNDVdID0gXCJJc1Zpc2libGVTY2FsZU9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIl0gPSAyNDZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RPcGFjaXR5XCJdID0gMjQ3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIl0gPSAyNDhdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE9wYWNpdHlcIl0gPSAyNDldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0T3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5PcGFjaXR5XCJdID0gMjUwXSA9IFwiSXNWaXNpYmxlTWFyZ2luT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNPcGFjaXR5XCJdID0gMjUxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzT3BhY2l0eVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nT3BhY2l0eVwiXSA9IDI1Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdPcGFjaXR5XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdPcGFjaXR5XCJdID0gMjUzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ09wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFZGl0YWJsZUxheW91dFwiXSA9IDI1NF0gPSBcIklzRWRpdGFibGVMYXlvdXRcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkT3BhY2l0eVwiXSA9IDI1NV0gPSBcIklzRW5hYmxlZE9wYWNpdHlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yUm90YXRpb25cIl0gPSAyNTZdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uXCJdID0gMjU3XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNSb3RhdGlvblwiXSA9IDI1OF0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblJvdGF0aW9uXCJdID0gMjU5XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uXCJdID0gMjYwXSA9IFwiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyUm90YXRpb25cIl0gPSAyNjFdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25cIl0gPSAyNjJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25cIl0gPSAyNjNdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd1JvdGF0aW9uXCJdID0gMjY0XSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlUm90YXRpb25cIl0gPSAyNjVdID0gXCJJc1Zpc2libGVTdHJva2VSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblwiXSA9IDI2Nl0gPSBcIklzVmlzaWJsZVRleHRDb2xvclJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc1JvdGF0aW9uXCJdID0gMjY3XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YUm90YXRpb25cIl0gPSAyNjhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblwiXSA9IDI2OV0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uUm90YXRpb25cIl0gPSAyNzBdID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlUm90YXRpb25cIl0gPSAyNzFdID0gXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblwiXSA9IDI3Ml0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RSb3RhdGlvblwiXSA9IDI3M10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25cIl0gPSAyNzRdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblwiXSA9IDI3NV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5Sb3RhdGlvblwiXSA9IDI3Nl0gPSBcIklzVmlzaWJsZU1hcmdpblJvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1JvdGF0aW9uXCJdID0gMjc3XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzUm90YXRpb25cIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uXCJdID0gMjc4XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblwiXSA9IDI3OV0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JTY2FsZVwiXSA9IDI4MF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVcIl0gPSAyODFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvclNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1NjYWxlXCJdID0gMjgyXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uU2NhbGVcIl0gPSAyODNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25TY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVcIl0gPSAyODRdID0gXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJTY2FsZVwiXSA9IDI4NV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVwiXSA9IDI4Nl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVwiXSA9IDI4N10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93U2NhbGVcIl0gPSAyODhdID0gXCJJc1Zpc2libGVTaGFkb3dTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VTY2FsZVwiXSA9IDI4OV0gPSBcIklzVmlzaWJsZVN0cm9rZVNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlXCJdID0gMjkwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zU2NhbGVcIl0gPSAyOTFdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhTY2FsZVwiXSA9IDI5Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlXCJdID0gMjkzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25TY2FsZVwiXSA9IDI5NF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVTY2FsZVwiXSA9IDI5NV0gPSBcIklzVmlzaWJsZVNjYWxlU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlXCJdID0gMjk2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFNjYWxlXCJdID0gMjk3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVwiXSA9IDI5OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlXCJdID0gMjk5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblNjYWxlXCJdID0gMzAwXSA9IFwiSXNWaXNpYmxlTWFyZ2luU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzU2NhbGVcIl0gPSAzMDFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNTY2FsZVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVcIl0gPSAzMDJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlXCJdID0gMzAzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZFNjYWxlXCJdID0gMzA0XSA9IFwiSXNFbmFibGVkU2NhbGVcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVYXCJdID0gMzA1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVYXCJdID0gMzA2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCJdID0gMzA3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWFwiXSA9IDMwOF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVYXCJdID0gMzA5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWFwiXSA9IDMxMF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVYXCJdID0gMzExXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVhcIl0gPSAzMTJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIl0gPSAzMTNdID0gXCJJc1Zpc2libGVTaGFkb3dTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVYXCJdID0gMzE0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWFwiXSA9IDMxNV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIl0gPSAzMTZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVYXCJdID0gMzE3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWFwiXSA9IDMxOF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWFwiXSA9IDMxOV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVYXCJdID0gMzIwXSA9IFwiSXNWaXNpYmxlU2NhbGVTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWFwiXSA9IDMyMV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCJdID0gMzIyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVYXCJdID0gMzIzXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWFwiXSA9IDMyNF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luU2NhbGVYXCJdID0gMzI1XSA9IFwiSXNWaXNpYmxlTWFyZ2luU2NhbGVYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWFwiXSA9IDMyNl0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVYXCJdID0gMzI3XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVYXCJdID0gMzI4XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRTY2FsZVhcIl0gPSAzMjldID0gXCJJc0VuYWJsZWRTY2FsZVhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVZXCJdID0gMzMwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yU2NhbGVZXCJdID0gMzMxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVZXCJdID0gMzMyXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWVwiXSA9IDMzM10gPSBcIklzVmlzaWJsZUVsZXZhdGlvblNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nU2NhbGVZXCJdID0gMzM0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclNjYWxlWVwiXSA9IDMzNV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yU2NhbGVZXCJdID0gMzM2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhTY2FsZVlcIl0gPSAzMzddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dTY2FsZVlcIl0gPSAzMzhdID0gXCJJc1Zpc2libGVTaGFkb3dTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlU2NhbGVZXCJdID0gMzM5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWVwiXSA9IDM0MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvclNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVlcIl0gPSAzNDFdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVZXCJdID0gMzQyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWVwiXSA9IDM0M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVNjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblNjYWxlWVwiXSA9IDM0NF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlU2NhbGVZXCJdID0gMzQ1XSA9IFwiSXNWaXNpYmxlU2NhbGVTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFNjYWxlWVwiXSA9IDM0Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVZXCJdID0gMzQ3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0U2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0U2NhbGVZXCJdID0gMzQ4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFNjYWxlWVwiXSA9IDM0OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luU2NhbGVZXCJdID0gMzUwXSA9IFwiSXNWaXNpYmxlTWFyZ2luU2NhbGVZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWVwiXSA9IDM1MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nU2NhbGVZXCJdID0gMzUyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nU2NhbGVZXCJdID0gMzUzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1NjYWxlWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRTY2FsZVlcIl0gPSAzNTRdID0gXCJJc0VuYWJsZWRTY2FsZVlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCJdID0gMzU1XSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25YXCJdID0gMzU2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25YXCJdID0gMzU3XSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiXSA9IDM1OF0gPSBcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25YXCJdID0gMzU5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWFwiXSA9IDM2MF0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25YXCJdID0gMzYxXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvblhcIl0gPSAzNjJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvblhcIl0gPSAzNjNdID0gXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCJdID0gMzY0XSA9IFwiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWFwiXSA9IDM2NV0gPSBcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvblhcIl0gPSAzNjZdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCJdID0gMzY3XSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWFwiXSA9IDM2OF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWFwiXSA9IDM2OV0gPSBcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25YXCJdID0gMzcwXSA9IFwiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3MV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzcyXSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25YXCJdID0gMzczXSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWFwiXSA9IDM3NF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luVHJhbnNsYXRpb25YXCJdID0gMzc1XSA9IFwiSXNWaXNpYmxlTWFyZ2luVHJhbnNsYXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiXSA9IDM3Nl0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25YXCJdID0gMzc3XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25YXCJdID0gMzc4XSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIl0gPSAzNzldID0gXCJJc0VuYWJsZWRUcmFuc2xhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzgwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzgxXSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCJdID0gMzgyXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWVwiXSA9IDM4M10gPSBcIklzVmlzaWJsZUVsZXZhdGlvblRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nVHJhbnNsYXRpb25ZXCJdID0gMzg0XSA9IFwiSXNWaXNpYmxlUGFkZGluZ1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlclRyYW5zbGF0aW9uWVwiXSA9IDM4NV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yVHJhbnNsYXRpb25ZXCJdID0gMzg2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhUcmFuc2xhdGlvbllcIl0gPSAzODddID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aFRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIl0gPSAzODhdID0gXCJJc1Zpc2libGVTaGFkb3dUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25ZXCJdID0gMzg5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWVwiXSA9IDM5MF0gPSBcIklzVmlzaWJsZVRleHRDb2xvclRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIl0gPSAzOTFdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25ZXCJdID0gMzkyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWVwiXSA9IDM5M10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWVRyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvblRyYW5zbGF0aW9uWVwiXSA9IDM5NF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlVHJhbnNsYXRpb25ZXCJdID0gMzk1XSA9IFwiSXNWaXNpYmxlU2NhbGVUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5Nl0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gMzk3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0VHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0VHJhbnNsYXRpb25ZXCJdID0gMzk4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdFRyYW5zbGF0aW9uWVwiXSA9IDM5OV0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luVHJhbnNsYXRpb25ZXCJdID0gNDAwXSA9IFwiSXNWaXNpYmxlTWFyZ2luVHJhbnNsYXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWVwiXSA9IDQwMV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nVHJhbnNsYXRpb25ZXCJdID0gNDAyXSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nVHJhbnNsYXRpb25ZXCJdID0gNDAzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1RyYW5zbGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRUcmFuc2xhdGlvbllcIl0gPSA0MDRdID0gXCJJc0VuYWJsZWRUcmFuc2xhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WFwiXSA9IDQwNV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRYXCJdID0gNDA2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFhcIl0gPSA0MDddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFhcIl0gPSA0MDhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25MYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdMYXlvdXRYXCJdID0gNDA5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRYXCJdID0gNDEwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WFwiXSA9IDQxMV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFhcIl0gPSA0MTJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93TGF5b3V0WFwiXSA9IDQxM10gPSBcIklzVmlzaWJsZVNoYWRvd0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WFwiXSA9IDQxNF0gPSBcIklzVmlzaWJsZVN0cm9rZUxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WFwiXSA9IDQxNV0gPSBcIklzVmlzaWJsZVRleHRDb2xvckxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WFwiXSA9IDQxNl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WFwiXSA9IDQxN10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWExheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WFwiXSA9IDQxOF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUxheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRYXCJdID0gNDE5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25MYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTGF5b3V0WFwiXSA9IDQyMF0gPSBcIklzVmlzaWJsZVNjYWxlTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyMV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFhcIl0gPSA0MjJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyM10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TGF5b3V0WFwiXSA9IDQyNF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpbkxheW91dFhcIl0gPSA0MjVdID0gXCJJc1Zpc2libGVNYXJnaW5MYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFhcIl0gPSA0MjZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNMYXlvdXRYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdMYXlvdXRYXCJdID0gNDI3XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0xheW91dFhcIl0gPSA0MjhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRMYXlvdXRYXCJdID0gNDI5XSA9IFwiSXNFbmFibGVkTGF5b3V0WFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JMYXlvdXRZXCJdID0gNDMwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFlcIl0gPSA0MzFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTGF5b3V0WVwiXSA9IDQzMl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uTGF5b3V0WVwiXSA9IDQzM10gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0xheW91dFlcIl0gPSA0MzRdID0gXCJJc1Zpc2libGVQYWRkaW5nTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFlcIl0gPSA0MzVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JMYXlvdXRZXCJdID0gNDM2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WVwiXSA9IDQzN10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dMYXlvdXRZXCJdID0gNDM4XSA9IFwiSXNWaXNpYmxlU2hhZG93TGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VMYXlvdXRZXCJdID0gNDM5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JMYXlvdXRZXCJdID0gNDQwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNMYXlvdXRZXCJdID0gNDQxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhMYXlvdXRZXCJdID0gNDQyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllMYXlvdXRZXCJdID0gNDQzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFlcIl0gPSA0NDRdID0gXCJJc1Zpc2libGVSb3RhdGlvbkxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVMYXlvdXRZXCJdID0gNDQ1XSA9IFwiSXNWaXNpYmxlU2NhbGVMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TGF5b3V0WVwiXSA9IDQ0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RMYXlvdXRZXCJdID0gNDQ5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdExheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luTGF5b3V0WVwiXSA9IDQ1MF0gPSBcIklzVmlzaWJsZU1hcmdpbkxheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTGF5b3V0WVwiXSA9IDQ1MV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0xheW91dFlcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0xheW91dFlcIl0gPSA0NTJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nTGF5b3V0WVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nTGF5b3V0WVwiXSA9IDQ1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZExheW91dFlcIl0gPSA0NTRdID0gXCJJc0VuYWJsZWRMYXlvdXRZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ1NV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ1Nl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1dpZHRoUmVxdWVzdFwiXSA9IDQ1N10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1dpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25XaWR0aFJlcXVlc3RcIl0gPSA0NThdID0gXCJJc1Zpc2libGVFbGV2YXRpb25XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1dpZHRoUmVxdWVzdFwiXSA9IDQ1OV0gPSBcIklzVmlzaWJsZVBhZGRpbmdXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJXaWR0aFJlcXVlc3RcIl0gPSA0NjBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlcldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvcldpZHRoUmVxdWVzdFwiXSA9IDQ2MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoV2lkdGhSZXF1ZXN0XCJdID0gNDYyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93V2lkdGhSZXF1ZXN0XCJdID0gNDYzXSA9IFwiSXNWaXNpYmxlU2hhZG93V2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVdpZHRoUmVxdWVzdFwiXSA9IDQ2NF0gPSBcIklzVmlzaWJsZVN0cm9rZVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JXaWR0aFJlcXVlc3RcIl0gPSA0NjVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zV2lkdGhSZXF1ZXN0XCJdID0gNDY2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFdpZHRoUmVxdWVzdFwiXSA9IDQ2N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllXaWR0aFJlcXVlc3RcIl0gPSA0NjhdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25XaWR0aFJlcXVlc3RcIl0gPSA0NjldID0gXCJJc1Zpc2libGVSb3RhdGlvbldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVdpZHRoUmVxdWVzdFwiXSA9IDQ3MF0gPSBcIklzVmlzaWJsZVNjYWxlV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFdpZHRoUmVxdWVzdFwiXSA9IDQ3Ml0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFdpZHRoUmVxdWVzdFwiXSA9IDQ3M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RXaWR0aFJlcXVlc3RcIl0gPSA0NzRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0V2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpbldpZHRoUmVxdWVzdFwiXSA9IDQ3NV0gPSBcIklzVmlzaWJsZU1hcmdpbldpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNXaWR0aFJlcXVlc3RcIl0gPSA0NzZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1dpZHRoUmVxdWVzdFwiXSA9IDQ3N10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1dpZHRoUmVxdWVzdFwiXSA9IDQ3OF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdXaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkV2lkdGhSZXF1ZXN0XCJdID0gNDc5XSA9IFwiSXNFbmFibGVkV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9ySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4MV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9ySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNIZWlnaHRSZXF1ZXN0XCJdID0gNDgyXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25IZWlnaHRSZXF1ZXN0XCJdID0gNDgzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDQ4NF0gPSBcIklzVmlzaWJsZVBhZGRpbmdIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVySGVpZ2h0UmVxdWVzdFwiXSA9IDQ4NV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVySGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0ODZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvckhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhIZWlnaHRSZXF1ZXN0XCJdID0gNDg3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd0hlaWdodFJlcXVlc3RcIl0gPSA0ODhdID0gXCJJc1Zpc2libGVTaGFkb3dIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZUhlaWdodFJlcXVlc3RcIl0gPSA0ODldID0gXCJJc1Zpc2libGVTdHJva2VIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvckhlaWdodFJlcXVlc3RcIl0gPSA0OTBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0hlaWdodFJlcXVlc3RcIl0gPSA0OTFdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEhlaWdodFJlcXVlc3RcIl0gPSA0OTJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUhlaWdodFJlcXVlc3RcIl0gPSA0OTNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uSGVpZ2h0UmVxdWVzdFwiXSA9IDQ5NF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIl0gPSA0OTVdID0gXCJJc1Zpc2libGVTY2FsZUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OTZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RIZWlnaHRSZXF1ZXN0XCJdID0gNDk3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OThdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEhlaWdodFJlcXVlc3RcIl0gPSA0OTldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0SGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5IZWlnaHRSZXF1ZXN0XCJdID0gNTAwXSA9IFwiSXNWaXNpYmxlTWFyZ2luSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNIZWlnaHRSZXF1ZXN0XCJdID0gNTAxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nSGVpZ2h0UmVxdWVzdFwiXSA9IDUwMl0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdIZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdIZWlnaHRSZXF1ZXN0XCJdID0gNTAzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0hlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkSGVpZ2h0UmVxdWVzdFwiXSA9IDUwNF0gPSBcIklzRW5hYmxlZEhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MDVdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUwN10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA4XSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTA5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTFdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTEzXSA9IFwiSXNWaXNpYmxlU2hhZG93TWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTRdID0gXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxNV0gPSBcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTE2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTddID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUxOF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MTldID0gXCJJc1Zpc2libGVSb3RhdGlvbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlTWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjBdID0gXCJJc1Zpc2libGVTY2FsZU1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyMl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0TWluaW11bUhlaWdodFJlcXVlc3RcIl0gPSA1MjNdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyNF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5NaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyNV0gPSBcIklzVmlzaWJsZU1hcmdpbk1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTI2XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bUhlaWdodFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCJdID0gNTI3XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ01pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyOF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRNaW5pbXVtSGVpZ2h0UmVxdWVzdFwiXSA9IDUyOV0gPSBcIklzRW5hYmxlZE1pbmltdW1IZWlnaHRSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzBdID0gXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzMV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMyXSA9IFwiSXNWaXNpYmxlQ29ybmVyUmFkaXVzTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25NaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTMzXSA9IFwiSXNWaXNpYmxlRWxldmF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNF0gPSBcIklzVmlzaWJsZVBhZGRpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBsYWNlaG9sZGVyTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDUzNV0gPSBcIklzVmlzaWJsZVBsYWNlaG9sZGVyTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzZdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTM3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNoYWRvd01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzhdID0gXCJJc1Zpc2libGVTaGFkb3dNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1MzldID0gXCJJc1Zpc2libGVTdHJva2VNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHRDb2xvck1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc01pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDFdID0gXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDJdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvblhNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvdGF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU0NF0gPSBcIklzVmlzaWJsZVJvdGF0aW9uTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZU1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDVdID0gXCJJc1Zpc2libGVTY2FsZU1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTQ3XSA9IFwiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDhdID0gXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdE1pbmltdW1XaWR0aFJlcXVlc3RcIl0gPSA1NDldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0TWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNYXJnaW5NaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTUwXSA9IFwiSXNWaXNpYmxlTWFyZ2luTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTUxXSA9IFwiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzTWluaW11bVdpZHRoUmVxdWVzdFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3dTcGFjaW5nTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdNaW5pbXVtV2lkdGhSZXF1ZXN0XCJdID0gNTUzXSA9IFwiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ01pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkTWluaW11bVdpZHRoUmVxdWVzdFwiXSA9IDU1NF0gPSBcIklzRW5hYmxlZE1pbmltdW1XaWR0aFJlcXVlc3RcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWFwiXSA9IDU1NV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvckFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JYXCJdID0gNTU2XSA9IFwiSXNWaXNpYmxlQm9yZGVyQ29sb3JBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvclhcIl0gPSA1NTddID0gXCJJc1Zpc2libGVDb3JuZXJSYWRpdXNBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvclhcIl0gPSA1NThdID0gXCJJc1Zpc2libGVFbGV2YXRpb25BbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdBbmNob3JYXCJdID0gNTU5XSA9IFwiSXNWaXNpYmxlUGFkZGluZ0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JYXCJdID0gNTYwXSA9IFwiSXNWaXNpYmxlUGxhY2Vob2xkZXJBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWFwiXSA9IDU2MV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvclhcIl0gPSA1NjJdID0gXCJJc1Zpc2libGVTZXBhcmF0b3JXaWR0aEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93QW5jaG9yWFwiXSA9IDU2M10gPSBcIklzVmlzaWJsZVNoYWRvd0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWFwiXSA9IDU2NF0gPSBcIklzVmlzaWJsZVN0cm9rZUFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWFwiXSA9IDU2NV0gPSBcIklzVmlzaWJsZVRleHRDb2xvckFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWFwiXSA9IDU2Nl0gPSBcIklzVmlzaWJsZVRleHREZWNvcmF0aW9uc0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWFwiXSA9IDU2N10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWEFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWFwiXSA9IDU2OF0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWUFuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25BbmNob3JYXCJdID0gNTY5XSA9IFwiSXNWaXNpYmxlUm90YXRpb25BbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNjYWxlQW5jaG9yWFwiXSA9IDU3MF0gPSBcIklzVmlzaWJsZVNjYWxlQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0QW5jaG9yWFwiXSA9IDU3MV0gPSBcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvclhcIl0gPSA1NzJdID0gXCJJc1Zpc2libGVXaWR0aFJlcXVlc3RBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWFwiXSA9IDU3M10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0QW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0QW5jaG9yWFwiXSA9IDU3NF0gPSBcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpbkFuY2hvclhcIl0gPSA1NzVdID0gXCJJc1Zpc2libGVNYXJnaW5BbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvclhcIl0gPSA1NzZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNBbmNob3JYXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVJvd1NwYWNpbmdBbmNob3JYXCJdID0gNTc3XSA9IFwiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvclhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ0FuY2hvclhcIl0gPSA1NzhdID0gXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc0VuYWJsZWRBbmNob3JYXCJdID0gNTc5XSA9IFwiSXNFbmFibGVkQW5jaG9yWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCYWNrZ3JvdW5kQ29sb3JBbmNob3JZXCJdID0gNTgwXSA9IFwiSXNWaXNpYmxlQmFja2dyb3VuZENvbG9yQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvcllcIl0gPSA1ODFdID0gXCJJc1Zpc2libGVCb3JkZXJDb2xvckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29ybmVyUmFkaXVzQW5jaG9yWVwiXSA9IDU4Ml0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlRWxldmF0aW9uQW5jaG9yWVwiXSA9IDU4M10gPSBcIklzVmlzaWJsZUVsZXZhdGlvbkFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0FuY2hvcllcIl0gPSA1ODRdID0gXCJJc1Zpc2libGVQYWRkaW5nQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvcllcIl0gPSA1ODVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlckFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JBbmNob3JZXCJdID0gNTg2XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yQ29sb3JBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWVwiXSA9IDU4N10gPSBcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTaGFkb3dBbmNob3JZXCJdID0gNTg4XSA9IFwiSXNWaXNpYmxlU2hhZG93QW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTdHJva2VBbmNob3JZXCJdID0gNTg5XSA9IFwiSXNWaXNpYmxlU3Ryb2tlQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JBbmNob3JZXCJdID0gNTkwXSA9IFwiSXNWaXNpYmxlVGV4dENvbG9yQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0RGVjb3JhdGlvbnNBbmNob3JZXCJdID0gNTkxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvblhBbmNob3JZXCJdID0gNTkyXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25YQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllBbmNob3JZXCJdID0gNTkzXSA9IFwiSXNWaXNpYmxlVHJhbnNsYXRpb25ZQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvcllcIl0gPSA1OTRdID0gXCJJc1Zpc2libGVSb3RhdGlvbkFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2NhbGVBbmNob3JZXCJdID0gNTk1XSA9IFwiSXNWaXNpYmxlU2NhbGVBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RBbmNob3JZXCJdID0gNTk2XSA9IFwiSXNWaXNpYmxlSGVpZ2h0UmVxdWVzdEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlV2lkdGhSZXF1ZXN0QW5jaG9yWVwiXSA9IDU5N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RBbmNob3JZXCJdID0gNTk4XSA9IFwiSXNWaXNpYmxlTWluaW11bUhlaWdodFJlcXVlc3RBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RBbmNob3JZXCJdID0gNTk5XSA9IFwiSXNWaXNpYmxlTWluaW11bVdpZHRoUmVxdWVzdEFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlTWFyZ2luQW5jaG9yWVwiXSA9IDYwMF0gPSBcIklzVmlzaWJsZU1hcmdpbkFuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ0NvbnN0cmFpbnRzQW5jaG9yWVwiXSA9IDYwMV0gPSBcIklzVmlzaWJsZVBhZGRpbmdDb25zdHJhaW50c0FuY2hvcllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ0FuY2hvcllcIl0gPSA2MDJdID0gXCJJc1Zpc2libGVSb3dTcGFjaW5nQW5jaG9yWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVDb2x1bW5TcGFjaW5nQW5jaG9yWVwiXSA9IDYwM10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzRW5hYmxlZEFuY2hvcllcIl0gPSA2MDRdID0gXCJJc0VuYWJsZWRBbmNob3JZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWFwiXSA9IDYwNV0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWFwiXSA9IDYwNl0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWFwiXSA9IDYwN10gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblhcIl0gPSA2MDhdID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWFwiXSA9IDYwOV0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvblhcIl0gPSA2MTBdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWFwiXSA9IDYxMV0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25YXCJdID0gNjEyXSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93Um90YXRpb25YXCJdID0gNjEzXSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWFwiXSA9IDYxNF0gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblhcIl0gPSA2MTVdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25YXCJdID0gNjE2XSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWFwiXSA9IDYxN10gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblhcIl0gPSA2MThdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvblhcIl0gPSA2MTldID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWFwiXSA9IDYyMF0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MjFdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWFwiXSA9IDYyMl0gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWFwiXSA9IDYyM10gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvblhcIl0gPSA2MjRdID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblJvdGF0aW9uWFwiXSA9IDYyNV0gPSBcIklzVmlzaWJsZU1hcmdpblJvdGF0aW9uWFwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblhcIl0gPSA2MjZdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWFwiXSA9IDYyN10gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWFwiXSA9IDYyOF0gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvblhcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkUm90YXRpb25YXCJdID0gNjI5XSA9IFwiSXNFbmFibGVkUm90YXRpb25YXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiXSA9IDYzMF0gPSBcIklzVmlzaWJsZUJhY2tncm91bmRDb2xvclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVCb3JkZXJDb2xvclJvdGF0aW9uWVwiXSA9IDYzMV0gPSBcIklzVmlzaWJsZUJvcmRlckNvbG9yUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWVwiXSA9IDYzMl0gPSBcIklzVmlzaWJsZUNvcm5lclJhZGl1c1JvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIl0gPSA2MzNdID0gXCJJc1Zpc2libGVFbGV2YXRpb25Sb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGFkZGluZ1JvdGF0aW9uWVwiXSA9IDYzNF0gPSBcIklzVmlzaWJsZVBhZGRpbmdSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUGxhY2Vob2xkZXJSb3RhdGlvbllcIl0gPSA2MzVdID0gXCJJc1Zpc2libGVQbGFjZWhvbGRlclJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTZXBhcmF0b3JDb2xvclJvdGF0aW9uWVwiXSA9IDYzNl0gPSBcIklzVmlzaWJsZVNlcGFyYXRvckNvbG9yUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVNlcGFyYXRvcldpZHRoUm90YXRpb25ZXCJdID0gNjM3XSA9IFwiSXNWaXNpYmxlU2VwYXJhdG9yV2lkdGhSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlU2hhZG93Um90YXRpb25ZXCJdID0gNjM4XSA9IFwiSXNWaXNpYmxlU2hhZG93Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiXSA9IDYzOV0gPSBcIklzVmlzaWJsZVN0cm9rZVJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvbllcIl0gPSA2NDBdID0gXCJJc1Zpc2libGVUZXh0Q29sb3JSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25ZXCJdID0gNjQxXSA9IFwiSXNWaXNpYmxlVGV4dERlY29yYXRpb25zUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiXSA9IDY0Ml0gPSBcIklzVmlzaWJsZVRyYW5zbGF0aW9uWFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvbllcIl0gPSA2NDNdID0gXCJJc1Zpc2libGVUcmFuc2xhdGlvbllSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm90YXRpb25Sb3RhdGlvbllcIl0gPSA2NDRdID0gXCJJc1Zpc2libGVSb3RhdGlvblJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVTY2FsZVJvdGF0aW9uWVwiXSA9IDY0NV0gPSBcIklzVmlzaWJsZVNjYWxlUm90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZUhlaWdodFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDZdID0gXCJJc1Zpc2libGVIZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiXSA9IDY0N10gPSBcIklzVmlzaWJsZVdpZHRoUmVxdWVzdFJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVNaW5pbXVtSGVpZ2h0UmVxdWVzdFJvdGF0aW9uWVwiXSA9IDY0OF0gPSBcIklzVmlzaWJsZU1pbmltdW1IZWlnaHRSZXF1ZXN0Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1pbmltdW1XaWR0aFJlcXVlc3RSb3RhdGlvbllcIl0gPSA2NDldID0gXCJJc1Zpc2libGVNaW5pbXVtV2lkdGhSZXF1ZXN0Um90YXRpb25ZXCI7XG4gICAgUHJvcGVydHlOYW1lW1Byb3BlcnR5TmFtZVtcIklzVmlzaWJsZU1hcmdpblJvdGF0aW9uWVwiXSA9IDY1MF0gPSBcIklzVmlzaWJsZU1hcmdpblJvdGF0aW9uWVwiO1xuICAgIFByb3BlcnR5TmFtZVtQcm9wZXJ0eU5hbWVbXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIl0gPSA2NTFdID0gXCJJc1Zpc2libGVQYWRkaW5nQ29uc3RyYWludHNSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlUm93U3BhY2luZ1JvdGF0aW9uWVwiXSA9IDY1Ml0gPSBcIklzVmlzaWJsZVJvd1NwYWNpbmdSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNWaXNpYmxlQ29sdW1uU3BhY2luZ1JvdGF0aW9uWVwiXSA9IDY1M10gPSBcIklzVmlzaWJsZUNvbHVtblNwYWNpbmdSb3RhdGlvbllcIjtcbiAgICBQcm9wZXJ0eU5hbWVbUHJvcGVydHlOYW1lW1wiSXNFbmFibGVkUm90YXRpb25ZXCJdID0gNjU0XSA9IFwiSXNFbmFibGVkUm90YXRpb25ZXCI7XG59KShQcm9wZXJ0eU5hbWUgfHwgKFByb3BlcnR5TmFtZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi9Qcm9wZXJ0eVwiO1xuaW1wb3J0IHsgRWxlbWVudE5hbWUgfSBmcm9tIFwiLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9mcmFtZS0yLWxheW91dFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRWxsaXBzZUVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9lbGxpcHNlLTItZWxsaXBzZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3RleHQtMi1sYWJlbFwiO1xuaW1wb3J0IHsgQ29udGVudFZpZXcgfSBmcm9tIFwiLi94YW1sLXZpZXdzLWNsYXNzZXMveGFtbC12aWV3XCI7XG5pbXBvcnQgeyBDdXN0b21Db250cm9sIH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtY3VzdG9tLWNvbnRyb2xcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVJlY3RhbmdsZUVsZW1lbnQgfSBmcm9tIFwiLi9maWdtYS1ub2RlLXRyYW5zbGF0aW9uL3NoYXBlcy9yZWN0YW5nbGUtMi1yZWN0YW5nbGVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUxpbmVFbGVtZW50IH0gZnJvbSBcIi4vZmlnbWEtbm9kZS10cmFuc2xhdGlvbi9zaGFwZXMvbGluZS0yLWxpbmVcIjtcbmltcG9ydCB7IENvbnRlbnRQYWdlIH0gZnJvbSBcIi4veGFtbC12aWV3cy1jbGFzc2VzL3hhbWwtcGFnZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlVmVjdG9yRWxlbWVudCB9IGZyb20gXCIuL2ZpZ21hLW5vZGUtdHJhbnNsYXRpb24vc2hhcGVzL3ZlY3Rvci0yLWljb25cIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vYnV0dG9uLTIteGFtbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlRWRpdG9yRWxlbWVudCB9IGZyb20gXCIuL3VzZXItZGVmaW5lZC10eXBlcy10cmFuc2xhdGlvbi9lZGl0b3ItMi14YW1sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVFbnRyeUVsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vZW50cnktMi14YW1sXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVMaXN0Vmlld0VsZW1lbnQgfSBmcm9tIFwiLi91c2VyLWRlZmluZWQtdHlwZXMtdHJhbnNsYXRpb24vbGlzdHZpZXctMi14YW1sXCI7XG5mdW5jdGlvbiBjaGVja05vZGVUeXBlKG5uKSB7XG4gICAgaWYgKG5uLnBhcmVudC51dHlwZSAhPT0gJ05vbmUnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVV0eXBlTm9kZXMobm4pO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5uLnBhcmVudC5ub2RlO1xuICAgIC8vIENoZWNrIHRoZSBub2RlJ3MgdHlwZSB1c2luZyB0aGUgJ3R5cGUnIHByb3BlcnR5XG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRlJBTUUnOlxuICAgICAgICAgICAgbGV0IGZyYW1lTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgbmVzdGVkRnJhbWVOb2RlcyA9ICcnO1xuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZEZyYW1lTm9kZXMgKz0gY2hlY2tOb2RlVHlwZShuKSArIGBcXG5gKTtcbiAgICAgICAgICAgIGxldCBmcmFtZUVsZW1lbnQgPSBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0KGZyYW1lTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U3RhcnRUYWcoZnJhbWVFbGVtZW50KSArIGBcXHQke25lc3RlZEZyYW1lTm9kZXN9YCArIGZvcm1hdEVuZFRhZyhmcmFtZUVsZW1lbnQpO1xuICAgICAgICBjYXNlICdHUk9VUCc6XG4gICAgICAgICAgICBsZXQgZ3JvdXBOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCBuZXN0ZWRHcm91cE5vZGVzID0gJyc7XG4gICAgICAgICAgICBubi5jaGlsZHJlbi5mb3JFYWNoKG4gPT4gbmVzdGVkR3JvdXBOb2RlcyArPSBjaGVja05vZGVUeXBlKG4pICsgYFxcbmApO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEdyb3VwTm9kZXM7XG4gICAgICAgIGNhc2UgJ1RFWFQnOlxuICAgICAgICAgICAgbGV0IHRleHROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCB0ZXh0RWxlbWVudCA9IFRyYW5zbGF0ZVRleHRFbGVtZW50KHRleHROb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyh0ZXh0RWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ0VMTElQU0UnOlxuICAgICAgICAgICAgbGV0IGVsbGlwc2VOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCBlbGxpcHNlRWxlbWVudCA9IFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50KGVsbGlwc2VOb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhlbGxpcHNlRWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ0xJTkUnOlxuICAgICAgICAgICAgbGV0IGxpbmVOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGxldCBsaW5lRWxlbWVudCA9IFRyYW5zbGF0ZUxpbmVFbGVtZW50KGxpbmVOb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhsaW5lRWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ1JFQ1RBTkdMRSc6XG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgcmVjdGFuZ2xlRWxlbWVudCA9IFRyYW5zbGF0ZVJlY3RhbmdsZUVsZW1lbnQocmVjdGFuZ2xlTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcocmVjdGFuZ2xlRWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ1BPTFlHT04nOlxuICAgICAgICAgICAgbGV0IHBvbHlnb25Ob2RlID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiAnUG9seWdvbic7XG4gICAgICAgIGNhc2UgJ0lOU1RBTkNFJzpcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgbGV0IGJpbmRpbmdzID0gW107IC8vVE9ETzogY2hpbGRyZW5cbiAgICAgICAgICAgIGxldCBjdXN0b21Db250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woaW5zdGFuY2VOb2RlLm5hbWUsIGJpbmRpbmdzKTtcbiAgICAgICAgICAgIHJldHVybiBjdXN0b21Db250cm9sLmdldFN0YXJ0VGFnKCkgKyBjdXN0b21Db250cm9sLmdldEVuZFRhZygpO1xuICAgICAgICBjYXNlICdDT01QT05FTlQnOlxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudE5vZGUgPSBub2RlO1xuICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBuZXcgcmVzb3VyY2UgZmlsZSAvIG5ldyB3aW5kb3dcbiAgICAgICAgICAgIGxldCBjb250ZW50VmlldyA9IG5ldyBDb250ZW50Vmlldyhub2RlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IG5lc3RlZENvbXBvbmVudCA9ICcnO1xuICAgICAgICAgICAgbm4uY2hpbGRyZW4uZm9yRWFjaChuID0+IG5lc3RlZENvbXBvbmVudCArPSBgXFx0JHtjaGVja05vZGVUeXBlKG4pfVxcbmApO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRWaWV3LmdldFN0YXJ0VGFnKCkgKyBgXFxuJHtuZXN0ZWRDb21wb25lbnR9YCArIGNvbnRlbnRWaWV3LmdldEVuZFRhZygpO1xuICAgICAgICAvL0FyZSBub3QgZ2V0dGluZyBjYXN0ZXQgXG4gICAgICAgIGNhc2UgJ1ZFQ1RPUic6XG4gICAgICAgICAgICBsZXQgdmVjdG9yTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBsZXQgdmVjdG9yTm90ZSA9IGAvLyBQbGVhc2UgZXhwb3J0ICR7dmVjdG9yTm9kZS5uYW1lfSBhcyBhIC5wbmctIG9yIC5zdmcgZmlsZSBhbmQgcGxhY2UgaW4gdGhlIFJlc291cmNlL0ltYWdlcy8gZm9sZGVyXFxuYDtcbiAgICAgICAgICAgIGxldCB2ZWN0b3JFbGVtZW50ID0gVHJhbnNsYXRlVmVjdG9yRWxlbWVudCh2ZWN0b3JOb2RlKTtcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3JOb3RlICsgZm9ybWF0U2hvcnRUYWcodmVjdG9yRWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ1NUQVInOlxuICAgICAgICAgICAgbGV0IHN0YXJOb2RlID0gbm9kZTtcbiAgICAgICAgY2FzZSAnQk9PTEVBTl9PUEVSQVRJT04nOlxuICAgICAgICAgICAgbGV0IGJvb2xlYW5PcGVyYXRpb25Ob2RlID0gbm9kZTtcbiAgICAgICAgY2FzZSAnU0xJQ0UnOlxuICAgICAgICAgICAgbGV0IHNsaWNlTm9kZSA9IG5vZGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYDwhLS0gVGhpcyBwbHVnaW4gaXMgdW5mb3J0dWFuYXRlbHkgdW5hYmxlIHRvIGNhc3QgJHtub2RlLnR5cGV9cyBhcyBNQVVJIGVsZW1lbnRzLiAtLT5gO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlVXR5cGVOb2Rlcyhubikge1xuICAgIGxldCBub2RlID0gbm4ucGFyZW50O1xuICAgIC8vIENoZWNrIHRoZSBub2RlJ3MgdHlwZSB1c2luZyB0aGUgJ3R5cGUnIHByb3BlcnR5XG4gICAgc3dpdGNoIChub2RlLnV0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0JVVFRPTic6XG4gICAgICAgICAgICBsZXQgYnV0dG9uTm9kZSA9IG5vZGUubm9kZTtcbiAgICAgICAgICAgIGxldCBidXR0b25FbGVtZW50ID0gVHJhbnNsYXRlQnV0dG9uRWxlbWVudChidXR0b25Ob2RlKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRTaG9ydFRhZyhidXR0b25FbGVtZW50KTtcbiAgICAgICAgY2FzZSAnRURJVE9SJzpcbiAgICAgICAgICAgIGxldCBlZGl0b3JOb2RlID0gbm9kZS5ub2RlO1xuICAgICAgICAgICAgbGV0IGVkaXRvckVsZW1lbnQgPSBUcmFuc2xhdGVFZGl0b3JFbGVtZW50KGVkaXRvck5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFNob3J0VGFnKGVkaXRvckVsZW1lbnQpO1xuICAgICAgICBjYXNlICdFTlRSWSc6XG4gICAgICAgICAgICBsZXQgZW50cnlOb2RlID0gbm9kZS5ub2RlO1xuICAgICAgICAgICAgbGV0IGVudHJ5RWxlbWVudCA9IFRyYW5zbGF0ZUVudHJ5RWxlbWVudChlbnRyeU5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFNob3J0VGFnKGVudHJ5RWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ0xJU1RWSUVXJzpcbiAgICAgICAgICAgIGxldCBsaXN0Vmlld05vZGUgPSBub2RlLm5vZGU7XG4gICAgICAgICAgICBsZXQgbGlzdFZpZXdFbGVtZW50ID0gVHJhbnNsYXRlTGlzdFZpZXdFbGVtZW50KGxpc3RWaWV3Tm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0U2hvcnRUYWcobGlzdFZpZXdFbGVtZW50KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gUGFyc2VGaWdtYShub2Rlcykge1xuICAgIGxldCB4YW1sQ29kZSA9IFwiXCI7XG4gICAgbGV0IHJvb3Rub2RlID0gbm9kZXNbMF07XG4gICAgbGV0IGNvbnRlbnRQYWdlID0gbmV3IENvbnRlbnRQYWdlKHJvb3Rub2RlLnBhcmVudC5ub2RlLm5hbWUpO1xuICAgIHhhbWxDb2RlICs9IGNvbnRlbnRQYWdlLmdldFN0YXJ0VGFnKCkgKyBuZXdsaW5lKCk7XG4gICAgcm9vdG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgICAgeGFtbENvZGUgKz0gY2hlY2tOb2RlVHlwZShjKTsgLy9jaGVjayBpZiBpdCBpcyBhIHVzZXIgZGVmaW5lZCBub2RlIG9yIG5vdFxuICAgIH0pO1xuICAgIHhhbWxDb2RlICs9IGNvbnRlbnRQYWdlLmdldEVuZFRhZygpO1xuICAgIHJldHVybiB4YW1sQ29kZTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFN0YXJ0VGFnKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IGVsZW1lbnQucHJvcGVydGllc1xuICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiAocHJvcC52YWx1ZSAhPT0gJ05vbmUnKSkgLy8gRXhjbHVkZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWUgJ05vbmUnIGJlY2F1c2UgdGhlbiBpdCBpcyBzZXQgdG8gZGVmYXVsdCB2YWx1ZVxuICAgICAgICAubWFwKChwcm9wKSA9PiBgJHtQcm9wZXJ0eU5hbWVbcHJvcC5uYW1lXX09XCIke3Byb3AudmFsdWV9XCJgKVxuICAgICAgICAuam9pbihcIiBcIik7XG4gICAgcmV0dXJuIGA8JHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfSAke3Byb3BlcnR5U3RyaW5nfT5gICsgbmV3bGluZSgpO1xufVxuZnVuY3Rpb24gZm9ybWF0U2hvcnRUYWcoZWxlbWVudCkge1xuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gZWxlbWVudC5wcm9wZXJ0aWVzXG4gICAgICAgIC5maWx0ZXIoKHByb3ApID0+IHByb3AudmFsdWUgIT09ICdOb25lJykgLy8gRXhjbHVkZSBwcm9wZXJ0aWVzIHdpdGggdmFsdWUgJ05vbmUnIGJlY2F1c2UgdGhlbiBpdCBpcyBzZXQgdG8gZGVmYXVsdCB2YWx1ZVxuICAgICAgICAubWFwKChwcm9wKSA9PiBgJHtQcm9wZXJ0eU5hbWVbcHJvcC5uYW1lXX09XCIke3Byb3AudmFsdWV9XCJgKVxuICAgICAgICAuam9pbihcIiBcIiArIG5ld2xpbmUoKSArIGBcXHRgKTtcbiAgICByZXR1cm4gYDwke0VsZW1lbnROYW1lW2VsZW1lbnQubmFtZV19ICR7cHJvcGVydHlTdHJpbmd9Lz5gICsgbmV3bGluZSgpO1xufVxuZnVuY3Rpb24gZm9ybWF0RW5kVGFnKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gYDwvJHtFbGVtZW50TmFtZVtlbGVtZW50Lm5hbWVdfT5gO1xufVxuZnVuY3Rpb24gbmV3bGluZSgpIHtcbiAgICByZXR1cm4gYFxcbmA7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVGaWdtYUZyYW1lVG9YYW1sTGF5b3V0KG5vZGUpIHtcbiAgICBzd2l0Y2ggKG5vZGUubGF5b3V0TW9kZSkge1xuICAgICAgICBjYXNlIFwiSE9SSVpPTlRBTFwiOlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQobm9kZSk7XG4gICAgICAgIGNhc2UgXCJWRVJUSUNBTFwiOlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZVZlcnRpY2FsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0ZUZsZXhMYXlvdXRFbGVtZW50KG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFRyYW5zbGF0ZUZsZXhMYXlvdXRFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBmbGV4TGF5b3V0UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3BhY2luZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZShub2RlLml0ZW1TcGFjaW5nLnRvU3RyaW5nKCkpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodFJlcXVlc3QsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoUmVxdWVzdCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5QYWRkaW5nLCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKHRyYW5zbGF0ZUZpZ21hUGFkZGluZ1RvWEFNTFBhZGRpbmcobm9kZSkpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkFsaWduQ29udGVudCwgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hQWxpZ25Db250ZW50KG5vZGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnbkl0ZW1zLCB2YWx1ZTogdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyhub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtcykgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV3JhcCwgdmFsdWU6IHRyYW5zbGF0ZUZpZ21hV3JhcFRvWGFtbFdyYXAobm9kZS5sYXlvdXRXcmFwKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Hcm93LCB2YWx1ZTogdHJhbnNsYXRlRGVmYXVsdE51bWJlclZhbHVlKG5vZGUubGF5b3V0R3Jvdy50b1N0cmluZygpKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5BbGlnblNlbGYsIHZhbHVlOiB0cmFuc2xhdGVGaWdtYUFsaWduSXRlbXNUb1hhbWxBbGlnbkl0ZW1zKG5vZGUubGF5b3V0QWxpZ24pIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuU2hyaW5rLCAgICAgICAgICAgIHZhbHVlOiBub2RlLnJlc2NhbGUudG9TdHJpbmcoKSB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLk9yZGVyLCAgICAgICAgICAgICB2YWx1ZTogbm9kZS4gfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5CYXNpcywgICAgICAgICAgICAgdmFsdWU6ICAgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5EaXJlY3Rpb24sICAgICAgICAgdmFsdWU6IG5vZGUubGF5b3V0TW9kZSB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkp1c3RpZnlDb250ZW50LCAgICB2YWx1ZTogbm9kZS4gfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5Qb3NpdGlvbiwgICAgICAgICAgdmFsdWU6IG5vZGUuIH0sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuVmVydGljYWxPcHRpb25zLCAgIHZhbHVlOiBub2RlLnByaW1hcnlBeGlzQWxpZ25JdGVtc30sXG4gICAgICAgIC8veyBuYW1lOiBQcm9wZXJ0eU5hbWUuSG9yaXpvbnRhbE9wdGlvbnMsIHZhbHVlOiBub2RlLmxldHRlclNwYWNpbmcudG9TdHJpbmcoKSB9XG4gICAgXTtcbiAgICBjb25zdCBmbGV4TGF5b3V0RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRmxleExheW91dCwgcHJvcGVydGllczogZmxleExheW91dFByb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gZmxleExheW91dEVsZW1lbnQ7IC8vZm9ybWF0U3RhcnRUYWcoZmxleExheW91dEVsZW1lbnQpICArIGZvcm1hdEVuZFRhZyhmbGV4TGF5b3V0RWxlbWVudCk7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcwJykge1xuICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIFRyYW5zbGF0ZUhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dFByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlNwYWNpbmcsIHZhbHVlOiBub2RlLml0ZW1TcGFjaW5nLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsIHZhbHVlOiB0cmFuc2xhdGVEZWZhdWx0TnVtYmVyVmFsdWUodHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSkgfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5WZXJ0aWNhbE9wdGlvbnMsICAgdmFsdWU6IG5vZGUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zfSxcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5Ib3Jpem9udGFsT3B0aW9ucywgdmFsdWU6IG5vZGUubGV0dGVyU3BhY2luZy50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkhvcml6b250YWxTdGFja0xheW91dCwgcHJvcGVydGllczogaG9yaXpvbnRhbFN0YWNrTGF5b3V0UHJvcGVydGllcyB9O1xuICAgIHJldHVybiBob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50OyAvL2Zvcm1hdFN0YXJ0VGFnKGhvcml6b250YWxTdGFja0xheW91dEVsZW1lbnQpICArIGZvcm1hdEVuZFRhZyhob3Jpem9udGFsU3RhY2tMYXlvdXRFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIFRyYW5zbGF0ZVZlcnRpY2FsU3RhY2tMYXlvdXRFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbFN0YWNrTGF5b3V0UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3BhY2luZywgdmFsdWU6IG5vZGUuaXRlbVNwYWNpbmcudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuUGFkZGluZywgdmFsdWU6IHRyYW5zbGF0ZURlZmF1bHROdW1iZXJWYWx1ZSh0cmFuc2xhdGVGaWdtYVBhZGRpbmdUb1hBTUxQYWRkaW5nKG5vZGUpKSB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlZlcnRpY2FsT3B0aW9ucywgICB2YWx1ZTogbm9kZS5wcmltYXJ5QXhpc0FsaWduSXRlbXN9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxPcHRpb25zLCB2YWx1ZTogbm9kZS5sZXR0ZXJTcGFjaW5nLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgdmVydGl2YWxTdGFja0xheW91dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLlZlcnRpY2FsU3RhY2tMYXlvdXQsIHByb3BlcnRpZXM6IHZlcnRpY2FsU3RhY2tMYXlvdXRQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50OyAvL2Zvcm1hdFN0YXJ0VGFnKHZlcnRpdmFsU3RhY2tMYXlvdXRFbGVtZW50KSAgKyBmb3JtYXRFbmRUYWcodmVydGl2YWxTdGFja0xheW91dEVsZW1lbnQpO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFQYWRkaW5nVG9YQU1MUGFkZGluZyhub2RlKSB7XG4gICAgaWYgKG5vZGUucGFkZGluZ0xlZnQgPT0gbm9kZS5wYWRkaW5nUmlnaHQgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdUb3AgJiYgbm9kZS5wYWRkaW5nTGVmdCA9PSBub2RlLnBhZGRpbmdCb3R0b20pIHtcbiAgICAgICAgcmV0dXJuIG5vZGUucGFkZGluZ0xlZnQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBgJHtub2RlLnBhZGRpbmdMZWZ0fSwgJHtub2RlLnBhZGRpbmdUb3B9LCAke25vZGUucGFkZGluZ1JpZ2h0fSwgJHtub2RlLnBhZGRpbmdCb3R0b219LGA7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRmlnbWFBbGlnbkl0ZW1zVG9YYW1sQWxpZ25JdGVtcyh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSBcIk1BWFwiOlxuICAgICAgICAgICAgcmV0dXJuICdFbmQnO1xuICAgICAgICBjYXNlIFwiQ0VOVEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gJ0NlbnRlcic7XG4gICAgICAgIGNhc2UgXCJNSU5cIjpcbiAgICAgICAgICAgIHJldHVybiAnU3RhcnQnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdTdHJldGNoJztcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYVdyYXBUb1hhbWxXcmFwKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlICdXUkFQJzpcbiAgICAgICAgICAgIHJldHVybiAnV3JhcCc7XG4gICAgICAgIGNhc2UgJ05PX1dSQVAnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVGaWdtYUFsaWduQ29udGVudCh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSAnU1BBQ0VfQkVUV0VFTic6XG4gICAgICAgICAgICByZXR1cm4gJ1NwYWNlQmV0d2Vlbic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ1N0cmV0Y2gnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUVsbGlwc2VFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBlbGxpcHNlUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGgsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5GaWxsLCB2YWx1ZTogbm9kZS5maWxscy50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZVRoaWNrbmVzcywgdmFsdWU6IG5vZGUuc3Ryb2tlV2VpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU3Ryb2tlLCB2YWx1ZTogJyMwMDAwMDAnIH0sXG4gICAgICAgIC8vIEFkZCBvdGhlciBlbGxpcHNlLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcbiAgICBdO1xuICAgIGNvbnN0IGVsbGlwc2VFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5FbGxpcHNlLCBwcm9wZXJ0aWVzOiBlbGxpcHNlUHJvcGVydGllcyB9O1xuICAgIHJldHVybiBlbGxpcHNlRWxlbWVudDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZUxpbmVFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBsaW5lUHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWDEsIHZhbHVlOiAnMCcgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWTEsIHZhbHVlOiAnMCcgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuWDIsIHZhbHVlOiAnNTAnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlkyLCB2YWx1ZTogJzAnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlN0cm9rZSwgdmFsdWU6ICcjMDAwMDAwJyB9LFxuICAgICAgICAvLyBBZGQgb3RoZXIgbGluZS1yZWxhdGVkIHByb3BlcnRpZXMgYXMgbmVlZGVkXG4gICAgXTtcbiAgICBjb25zdCBsaW5lRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGluZSwgcHJvcGVydGllczogbGluZVByb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gbGluZUVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVSZWN0YW5nbGVFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCByZWN0YW5nbGVQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aCwgdmFsdWU6IG5vZGUud2lkdGgudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHQsIHZhbHVlOiBub2RlLmhlaWdodC50b1N0cmluZygpIH1cbiAgICAgICAgLy8gQWRkIG90aGVyIHJlY3RhbmdsZS1yZWxhdGVkIHByb3BlcnRpZXMgYXMgbmVlZGVkXG4gICAgXTtcbiAgICBjb25zdCByZWN0YW5nbGVFbGVtZW50ID0geyBuYW1lOiBFbGVtZW50TmFtZS5SZWN0YW5nbGUsIHByb3BlcnRpZXM6IHJlY3RhbmdsZVByb3BlcnRpZXMgfTtcbiAgICByZXR1cm4gcmVjdGFuZ2xlRWxlbWVudDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnROYW1lIH0gZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcbmltcG9ydCB7IFByb3BlcnR5TmFtZSB9IGZyb20gXCIuLi8uLi9Qcm9wZXJ0eVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zbGF0ZVZlY3RvckVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IHZlY3RvclByb3BlcnRpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLldpZHRoLCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhlaWdodCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuU291cmNlLCB2YWx1ZTogdHJhbnNsYXRlU291cmNlKG5vZGUpIH0sXG4gICAgICAgIC8vIEFkZCBvdGhlciBlbGxpcHNlLXJlbGF0ZWQgcHJvcGVydGllcyBhcyBuZWVkZWRcbiAgICBdO1xuICAgIGNvbnN0IHZlY3RvckVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkltYWdlLCBwcm9wZXJ0aWVzOiB2ZWN0b3JQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIHZlY3RvckVsZW1lbnQ7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVTb3VyY2Uobm9kZSkge1xuICAgIHJldHVybiBgJHtub2RlLm5hbWV9LnBuZ2A7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVUZXh0RWxlbWVudChub2RlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICBjb25zdCB0ZXh0UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuQ2hhcmFjdGVyU3BhY2luZywgdmFsdWU6IChfYSA9IHRyYW5zbGF0ZUxldHRlclNwYWNpbmcobm9kZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250QXR0cmlidXRlcywgdmFsdWU6IHRyYW5zbGF0ZUZvbnRXZWlnaHRUb0ZvbnRBdHRyaWJ1dGVzKG5vZGUuZm9udFdlaWdodCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuRm9udEF1dG9TY2FsaW5nRW5hYmxlZCwgdmFsdWU6IHRyYW5zbGF0ZVRleHRBdXRvUmVzaXplVG9Gb250QXV0b1NjYWxpbmdFbmFibGVkKG5vZGUudGV4dEF1dG9SZXNpemUpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkZvbnRTaXplLCB2YWx1ZTogbm9kZS5mb250U2l6ZS50b1N0cmluZygpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkhvcml6b250YWxUZXh0QWxpZ25tZW50LCB2YWx1ZTogdHJhbnNsYXRlSG9yaXpvbnRhbEFsaWdubWVudChub2RlLnRleHRBbGlnbkhvcml6b250YWwpIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLkxpbmVCcmVha01vZGUsIHZhbHVlOiB0cmFuc2xhdGVUZXh0VHJ1bmNhdGlvblRvTGluZUJyZWFrTW9kZShub2RlLnRleHRUcnVuY2F0aW9uKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5MaW5lSGVpZ2h0LCB2YWx1ZTogKF9iID0gdHJhbnNsYXRlTGluZUhlaWdodChub2RlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJ05vbmUnIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLk1heExpbmVzLCB2YWx1ZTogKF9kID0gKF9jID0gbm9kZS5tYXhMaW5lcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0LCB2YWx1ZTogbm9kZS5jaGFyYWN0ZXJzIH0sXG4gICAgICAgIHsgbmFtZTogUHJvcGVydHlOYW1lLlRleHRDb2xvciwgdmFsdWU6IChfZSA9IGdldEhleENvbG9yRnJvbUZpbGwobm9kZSkpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6ICdOb25lJyB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5UZXh0RGVjb3JhdGlvbnMsIHZhbHVlOiB0cmFuc2xhdGVUZXh0RGVjb3JhdGlvblRvWEFNTChub2RlLnRleHREZWNvcmF0aW9uKSB8fCAnTm9uZScgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuVGV4dFRyYW5zZm9ybSwgdmFsdWU6IHRyYW5zbGF0ZVRleHRDYXNlVG9YQU1MKG5vZGUudGV4dENhc2UpIHx8ICdOb25lJyB9LFxuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlRleHRUeXBlLCAgICAgICAgICAgICAgICB2YWx1ZTogJ1RleHQnIH0gLy8gU2V0IGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gRmlnbWEgcHJvcGVydGllc1xuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLlBhZGRpbmcsICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnIH0sIC8vIFNldCBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIEZpZ21hIHByb3BlcnRpZXNcbiAgICAgICAgLy97IG5hbWU6IFByb3BlcnR5TmFtZS5Gb250RmFtaWx5LCAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZm9udE5hbWUgfSwgLy8gU2V0IGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gRmlnbWEgcHJvcGVydGllc1xuICAgICAgICAvL3sgbmFtZTogUHJvcGVydHlOYW1lLkZvcm1hdHRlZFRleHQsICAgICAgICAgICB2YWx1ZTogJycgfSwgLy8gU2V0IGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gRmlnbWEgcHJvcGVydGllc1xuICAgIF07XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSB7IG5hbWU6IEVsZW1lbnROYW1lLkxhYmVsLCBwcm9wZXJ0aWVzOiB0ZXh0UHJvcGVydGllcyB9O1xuICAgIHJldHVybiB0ZXh0RWxlbWVudDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxpbmVIZWlnaHQobm9kZSkge1xuICAgIGxldCBsaCA9IG5vZGUubGluZUhlaWdodDtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGxoKSB7XG4gICAgICAgIHJldHVybiBsaC52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldHRlclNwYWNpbmcobm9kZSkge1xuICAgIGxldCBscyA9IG5vZGUubGV0dGVyU3BhY2luZy52YWx1ZTtcbiAgICBpZiAobHMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxzLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0SGV4Q29sb3JGcm9tRmlsbCh0ZXh0Tm9kZSkge1xuICAgIGlmICghdGV4dE5vZGUgfHwgIXRleHROb2RlLmZpbGxzIHx8IHRleHROb2RlLmZpbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZmlsbCA9IHRleHROb2RlLmZpbGxzWzBdOyAvLyBXZSBhc3N1bWUgdGhlIGZpcnN0IGZpbGwgaXMgdGhlIG9uZSB3ZSB3YW50XG4gICAgaWYgKGZpbGwgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICBjb25zdCBzb2xpZEZpbGwgPSBmaWxsO1xuICAgICAgICByZXR1cm4gcmdiVG9IZXgoc29saWRGaWxsLmNvbG9yKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmlsbC50eXBlLnN0YXJ0c1dpdGgoJ0dSQURJRU5UJykpIHtcbiAgICAgICAgLy8gSGFuZGxlIGdyYWRpZW50IGZpbGxzIChpZiBuZWVkZWQpXG4gICAgICAgIC8vIFlvdSBjYW4gYWRkIGxvZ2ljIGhlcmUgdG8gaGFuZGxlIGdyYWRpZW50IGZpbGxzXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuICAgIGNvbnN0IHIgPSBNYXRoLnJvdW5kKHJnYi5yICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBnID0gTWF0aC5yb3VuZChyZ2IuZyAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgYiA9IE1hdGgucm91bmQocmdiLmIgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGxldCBjb2xvciA9IGAjJHtyfSR7Z30ke2J9YDtcbiAgICBpZiAoY29sb3IgPT09ICcjMDAwMDAwJykge1xuICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVUZXh0Q2FzZVRvWEFNTCh0ZXh0Q2FzZSkge1xuICAgIHN3aXRjaCAodGV4dENhc2UpIHtcbiAgICAgICAgY2FzZSBcIlVQUEVSXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJVcHBlcmNhc2VcIjtcbiAgICAgICAgY2FzZSBcIkxPV0VSXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJMb3dlcmNhc2VcIjtcbiAgICAgICAgY2FzZSBcIlRJVExFXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJDYXBpdGFsaXplXCI7XG4gICAgICAgIC8vIEZpZ21hIFwiT1JJR0lOQUxcIiBjb3JyZXNwb25kcyB0byBcIk5vbmVcIiBpbiBYQU1MLCB3aGljaCBsZWF2ZXMgdGhlIHRleHQgY2FzZSBhcyBpcy5cbiAgICAgICAgY2FzZSBcIk9SSUdJTkFMXCI6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7IC8vIERlZmF1bHQgdG8gbm8gdHJhbnNmb3JtYXRpb25cbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVUZXh0RGVjb3JhdGlvblRvWEFNTCh0ZXh0RGVjb3JhdGlvbikge1xuICAgIHN3aXRjaCAodGV4dERlY29yYXRpb24pIHtcbiAgICAgICAgY2FzZSBcIlNUUklLRVRIUk9VR0hcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlN0cmlrZXRocm91Z2hcIjtcbiAgICAgICAgY2FzZSBcIlVOREVSTElORVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiVW5kZXJsaW5lXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dFRydW5jYXRpb25Ub0xpbmVCcmVha01vZGUoZmlnbWFUZXh0VHJ1bmNhdGlvbikge1xuICAgIC8vT0JTICEgRG8gbm90IGZ1bGZpbGwgYWxsIExpbmVCcmVha01vZGVzIG9mIFhhbWwuIFNlZSBmb2xsb3dpbmcgbGluayBmb3IgbW9yZSBpbmZvIGFib3V0IExpbmVCcmVha01vZGU6IGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvYXBpL21pY3Jvc29mdC5tYXVpLmxpbmVicmVha21vZGU/dmlldz1uZXQtbWF1aS03LjBcbiAgICBzd2l0Y2ggKGZpZ21hVGV4dFRydW5jYXRpb24pIHtcbiAgICAgICAgY2FzZSBcIkVORElOR1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiVGFpbFRydW5jYXRpb25cIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjsgLy8gRGVmYXVsdCB0byBOb1dyYXAgaWYgdGhlIHZhbHVlIGlzIG5vdCByZWNvZ25pemVkXG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dEF1dG9SZXNpemVUb0ZvbnRBdXRvU2NhbGluZ0VuYWJsZWQoZmlnbWFUZXh0QXV0b1Jlc2l6ZSkge1xuICAgIHN3aXRjaCAoZmlnbWFUZXh0QXV0b1Jlc2l6ZSkge1xuICAgICAgICBjYXNlIFwiTk9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmFsc2VcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIk5vbmVcIjsgLy8gd2hlbiByZXR1cm5pbmcgbm9uZSBpdCB3aWxsIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgeGFtbCB0ZXh0LCBzaW5jZSBpdCBpcyB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgIH1cbn1cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB0cmFuc2xhdGUgRmlnbWEgaG9yaXpvbnRhbCB0ZXh0IGFsaWdubWVudCB0byBYQU1MXG5mdW5jdGlvbiB0cmFuc2xhdGVIb3Jpem9udGFsQWxpZ25tZW50KGFsaWduKSB7XG4gICAgLy9UT0RPOiBmaXggdGhpcyB0byBjb3JyZWN0IHhhbWxcbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgXCJDRU5URVJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIkNlbnRlclwiO1xuICAgICAgICBjYXNlIFwiUklHSFRcIjpcbiAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0XCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJOb25lXCI7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlRm9udFdlaWdodFRvRm9udEF0dHJpYnV0ZXMoZmlnbWFGb250V2VpZ2h0KSB7XG4gICAgaWYgKGZpZ21hRm9udFdlaWdodCA+IDQwMCkge1xuICAgICAgICByZXR1cm4gJ0JvbGQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVCdXR0b25FbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBidXR0b25Qcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuQnV0dG9uLCBwcm9wZXJ0aWVzOiBidXR0b25Qcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFZGl0b3JFbGVtZW50KG5vZGUpIHtcbiAgICBjb25zdCBlZGl0b3JQcm9wZXJ0aWVzID0gW1xuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5IZWlnaHRSZXF1ZXN0LCB2YWx1ZTogbm9kZS5oZWlnaHQudG9TdHJpbmcoKSB9LFxuICAgICAgICB7IG5hbWU6IFByb3BlcnR5TmFtZS5XaWR0aFJlcXVlc3QsIHZhbHVlOiBub2RlLndpZHRoLnRvU3RyaW5nKCkgfVxuICAgIF07XG4gICAgY29uc3QgZWRpdG9yRWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRWRpdG9yLCBwcm9wZXJ0aWVzOiBlZGl0b3JQcm9wZXJ0aWVzIH07XG4gICAgcmV0dXJuIGVkaXRvckVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVFbnRyeUVsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IGVudHJ5UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IGVudHJ5RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuRW50cnksIHByb3BlcnRpZXM6IGVudHJ5UHJvcGVydGllcyB9O1xuICAgIHJldHVybiBlbnRyeUVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50TmFtZSB9IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eU5hbWUgfSBmcm9tIFwiLi4vUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVMaXN0Vmlld0VsZW1lbnQobm9kZSkge1xuICAgIGNvbnN0IGxpc3R2aWV3UHJvcGVydGllcyA9IFtcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuSGVpZ2h0UmVxdWVzdCwgdmFsdWU6IG5vZGUuaGVpZ2h0LnRvU3RyaW5nKCkgfSxcbiAgICAgICAgeyBuYW1lOiBQcm9wZXJ0eU5hbWUuV2lkdGhSZXF1ZXN0LCB2YWx1ZTogbm9kZS53aWR0aC50b1N0cmluZygpIH1cbiAgICBdO1xuICAgIGNvbnN0IGxpc3R2aWV3RWxlbWVudCA9IHsgbmFtZTogRWxlbWVudE5hbWUuTGlzdFZpZXcsIHByb3BlcnRpZXM6IGxpc3R2aWV3UHJvcGVydGllcyB9O1xuICAgIHJldHVybiBsaXN0dmlld0VsZW1lbnQ7XG59XG4iLCJleHBvcnQgY2xhc3MgQ3VzdG9tQ29udHJvbCB7XG4gICAgY29uc3RydWN0b3IoY29udHJvbE5hbWUsIGJpbmRpbmdzKSB7XG4gICAgICAgIHRoaXMuZW5kVGFnID0gJy8+JztcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IGJpbmRpbmdzO1xuICAgICAgICB0aGlzLnN0YXJ0VGFnID0gdGhpcy5Gb3JtYXRTdGFydFRhZygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb250cm9sTmFtZTtcbiAgICB9XG4gICAgZ2V0U3RhcnRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGFnO1xuICAgIH1cbiAgICBnZXRFbmRUYWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRhZztcbiAgICB9XG4gICAgRm9ybWF0U3RhcnRUYWcoKSB7XG4gICAgICAgIGxldCBzZXRCaW5kaW5ncyA9ICcnO1xuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goYiA9PiBzZXRCaW5kaW5ncyArIGAke2IubmFtZX0gPSAke2IudmFsdWV9XFxuYCk7XG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGNvbnRyb2w6JHt0aGlzLm5hbWV9ICR7c2V0QmluZGluZ3N9YDtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGVudFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz4nO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnXFxuPC9Db250ZW50UGFnZT4nO1xuICAgICAgICB0aGlzLm5hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGdldFN0YXJ0VGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRhZyArIHRoaXMuc3RhcnRFbmRUYWc7XG4gICAgfVxuICAgIGdldEVuZFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGFnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZENvbnRyb2wocGFnZSkge1xuICAgIHBhZ2Uuc3RhcnRUYWcgPSBgJHtwYWdlLnN0YXJ0VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zOmNvbnRyb2xzPWNsci1uYW1lc3BhY2U6Q3VzdG9tQ29udHJvbHNcXG5gO1xufVxuZnVuY3Rpb24gRm9ybWF0UGFnZVN0YXJ0VGFnKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBgPENvbnRlbnRQYWdlIHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9JHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeDpOYW1lPSR7Y2xhc3NOYW1lfVxcbmA7XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGVudFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLnN0YXJ0RW5kVGFnID0gJz4nO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnRUYWcgPSBGb3JtYXRQYWdlU3RhcnRUYWcoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5lbmRUYWcgPSAnXFxuPC9Db250ZW50Vmlldz4nO1xuICAgICAgICB0aGlzLm5hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGdldFN0YXJ0VGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRhZyArIHRoaXMuc3RhcnRFbmRUYWc7XG4gICAgfVxuICAgIGdldEVuZFRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGFnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEZvcm1hdFBhZ2VTdGFydFRhZyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gYFxyXG4gICAgLy9DcmVhdGUgYSBmb2xkZXIgdW5kZXIgUmVzb3VyY2VzIGNhbGxlZCBcIkN1c3RvbUNvbnRyb2xzXCIgYW5kIG1ha2UgYSBuZXcgXCJDb250ZW50Vmlld1wiIGluIHRoZXJlIFxyXG4gICAgPENvbnRlbnRWaWV3IHhtbG5zPVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9kb3RuZXQvMjAyMS9tYXVpXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxuczp4PVwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93aW5meC8yMDA5L3hhbWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg6Q2xhc3M9Q3VzdG9tQ29udHJvbHMuJHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgeDpOYW1lPSR7Y2xhc3NOYW1lfVxcbmA7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFBhcnNlRmlnbWEgfSBmcm9tIFwiLi9YYW1sUGFyc2VyXCI7XG4vLyBzcmMvcGx1Z2luLnRzXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA0MDAgfSk7XG5mdW5jdGlvbiBtYWtlRGlzcGxheU5vZGUoX25vZGUpIHtcbiAgICByZXR1cm4geyBuYW1lOiBfbm9kZS5uYW1lLCB1dHlwZTogJ05vbmUnLCBub2RlOiBfbm9kZSB9O1xufVxuZnVuY3Rpb24gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuKSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGNuLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3Qgbm4gPSB0cmF2ZXJzZShjKTtcbiAgICAgICAgbGlzdC5wdXNoKG5uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbn1cbmZ1bmN0aW9uIHRyYXZlcnNlKGNuKSB7XG4gICAgY29uc3QgZG4gPSBtYWtlRGlzcGxheU5vZGUoY24pO1xuICAgIGNvbnN0IG5uID0ge1xuICAgICAgICBwYXJlbnQ6IGRuLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgfTtcbiAgICBpZiAoJ2NoaWxkcmVuJyBpbiBjbikge1xuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGNoaWxkcmVuLCB3ZSBtdXN0IGdvIHRocm91Z2ggdGhlbSBhbmQgbWFrZSB0aGVtIGludG8gbmVzdGVkIG5vZGVzXG4gICAgICAgIG5uLmNoaWxkcmVuID0gY2hpbGRyZW5Ub05lc3RlZE5vZGVzKGNuLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5uO1xufVxuY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuY29uc3Qgcm9vdE5vZGUgPSBtYWtlRGlzcGxheU5vZGUoc2VsZWN0aW9uKTtcbmxldCBsaXN0ID0gW107XG5pZiAoJ2NoaWxkcmVuJyBpbiBzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uY2hpbGRyZW4uZm9yRWFjaChjID0+IGxpc3QucHVzaChjKSk7XG59XG5jb25zdCBub2RlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhcmVudDogcm9vdE5vZGUsXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblRvTmVzdGVkTm9kZXMobGlzdCksXG4gICAgfSxcbl07XG5sZXQgbm9kZXMyUGFyc2UgPSBbXTtcbmZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogJ2luaXQnLCBub2RlcyB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJnb3QgdGhpcyBmcm9tIHRoZSBVSVwiLCBtZXNzYWdlKTtcbiAgICBub2RlczJQYXJzZSA9IHVwZGF0ZURpc3BsYXlOb2RlVVR5cGUobm9kZXMsIG1lc3NhZ2UpO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlOb2RlVVR5cGUoc2VsZWN0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG1hcHBpbmcgb2YgQmFzZU5vZGUuaWQgdG8gc2VsZWN0ZWRWYWx1ZVxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlTWFwID0ge307XG4gICAgICAgIG1lc3NhZ2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZU1hcFtpdGVtLm5vZGUucGFyZW50Lm5vZGUuaWRdID0gaXRlbS5zZWxlY3RlZFZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGFycmF5IHRvIGhvbGQgdGhlIHVwZGF0ZWQgc2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgLy8gUmVjdXJzaXZlIGZ1bmN0aW9uIHRvIHVwZGF0ZSBub2Rlc1xuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbihub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZU1hcFtub2RlLnBhcmVudC5ub2RlLmlkXTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSB3aXRoIHVwZGF0ZWQgdXR5cGVcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkUGFyZW50ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBub2RlLnBhcmVudCksIHsgdXR5cGU6IHNlbGVjdGVkVmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFyZW50OiB1cGRhdGVkUGFyZW50LCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB1cGRhdGVDaGlsZHJlbihjaGlsZCkpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyB1cGRhdGUgaXMgbmVlZGVkLCByZXR1cm4gdGhlIG9yaWdpbmFsIG5vZGVcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwYXJlbnQ6IG5vZGUucGFyZW50LCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB1cGRhdGVDaGlsZHJlbihjaGlsZCkpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBzZWxlY3Rpb24gYW5kIHVwZGF0ZSBub2RlcyBiYXNlZCBvbiB0aGUgbWVzc2FnZVxuICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgobmVzdGVkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZE5vZGUgPSB1cGRhdGVDaGlsZHJlbihuZXN0ZWROb2RlKTtcbiAgICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb24ucHVzaCh1cGRhdGVkTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXBkYXRlZFNlbGVjdGlvbjtcbiAgICB9XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBQYXJzZUZpZ21hKG5vZGVzMlBhcnNlKTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiZmlsZUluZm9cIiwgdGV4dENvbnRlbnQgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9