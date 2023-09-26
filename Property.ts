export type Property = {
    name : PropertyName,
    value : string
}

export enum PropertyName {
    //Label
    CharacterSpacing,
    FontAttributes,
    FontAutoScalingEnabled,
    FontFamily,
    FontSize,
    FormattedText,
    HorizontalTextAlignment,
    LineBreakMode,
    LineHeight,
    MaxLines,
    Padding,
    Text,
    TextColor,
    TextDecorations,
    TextTransform,
    TextType,
    VerticalTextAlignment,

    //Frame
    Spacing,

    //Polygon
    Points,
    Fill,
    FillRule,
    Stroke,
    StrokeThickness,

    FontAttribute,
    Width,
    Height,
    BackgroundColor,
    ForegroundColor,
    Margin,
    BorderColor,
    BorderThickness,
    Visibility,
    IsEnabled,
    IsReadOnly,
    FontWeight,
    FontStyle,
    TextAlignment,
    ImageSource,
    Source,
    HorizontalAlignment,
    VerticalAlignment,
    Opacity,
    Command,
    CommandParameter,
    IsChecked,
    Content,
    Header,
    PlaceholderText,
    PlaceholderTextColor,
    IsVisible,
    IsFocused,
    IsSelected,
    ItemsSource,
    ItemTemplate,
    Placeholder,
    SelectedIndex,
    Minimum,
    Maximum,
    Value,
    IsToggled,
    CornerRadius,
    IsPassword,
    IsReadOnlyCaretVisible,
    Items,
    IsOpen,
    IsEditable,
    DisplayMemberPath,
    SelectedValue,
    SelectedValuePath,
    HeaderTemplate,
    FooterTemplate,
    Icon,
    IconSource,
    GroupName,
    CanUserSort,
    CanUserFilter,
    Columns,
    Rows,
    ColumnDefinitions,
    RowDefinitions,
    CellPadding,
    RowSpan,
    ColumnSpan,
    IsHeaderVisible,
    IsSortable,
    SortDirection,
    GroupHeaderTemplate,
    GroupFooterTemplate,
    GroupStyle,
    IsExpanded,
    ItemsPanel,
    AlternatingRowColor,
    ItemContainerStyle,
    ItemContainerStyleSelector,
    ItemTemplateSelector,
    GroupHeaderStyle,
    GroupFooterStyle,
    GroupFooterTemplateSelector,
    ColumnHeaderStyle,
    ColumnHeaderTemplateSelector,
    FrozenColumnCount,
    AutoGenerateColumns,
    ColumnsSource,
    ColumnsWidth,
    SortMemberPath,
    RowHeaderTemplate,
    RowHeaderStyle,
    RowHeaderTemplateSelector,
    AlternationCount,
    IsAlternatingRowColorEnabled,
    IsItemClickEnabled,
    HorizontalScrollBarVisibility,
    VerticalScrollBarVisibility,
    SelectionMode,
    SelectedItems,
    SelectedItem,
    ItemClick,
    IsSticky,
    IsPullToRefreshEnabled,
    RefreshCommand,
    IsPullToRefreshRefreshing,
    IsPullToRefreshRefreshingChanged,
    IsLoadMoreEnabled,
    LoadMoreCommand,
    IsLoadMoreLoading,
    IsLoadMoreLoadingChanged,
    ItemTapped,
    ItemSelected,
    ItemDoubleTapped,
    SwipeLeftCommand,
    SwipeRightCommand,
    SwipeUpCommand,
    SwipeDownCommand,
    SwipeItems,
    IsRefreshing,
    RefreshCommandParameter,
    RowHeight,
    AutoGenerateItem,
    ScrollMode,
    ScrollBarVisibility,
    ScrollTo,
    ScrollToRow,
    ScrollToRowIndex,
    ScrollToColumn,
    ScrollToColumnIndex,
    HeaderTemplateSelector,
    FooterTemplateSelector,
    GroupHeaderTemplateSelector,
    RowHeightResizer,
    OnPullStarted,
    OnPullDelta,
    OnPullCompleted,
    OnPullContent,
    OnReleaseContent,
    OnSwipeStarted,
    OnSwipeDelta,
    OnSwipeCompleted,
    OnRevealing,
    OnSwipeEnded,
    OnRevealed,
    OnExecute,
    OnHiding,
    OnHidden,
    OnStateChange,
    AnimationDuration,
    MaxTopOffset,
    MinTopOffset,
    MinTopRevealed,
    MaxTopRevealed,
    ContentTemplate,
    ContentTemplateSelector,
    HorizontalOptions,
    VerticalOptions,
    Rotation,
    Scale,
    TranslationX,
    TranslationY,
    LayoutX,
    LayoutY,
    WidthRequest,
    HeightRequest,
    MinimumWidthRequest,
    MinimumHeightRequest,
    AnchorX,
    AnchorY,
    RotationX,
    RotationY,
    ScaleX,
    ScaleY,
    PlatformConfiguration,
    MarginConstraints,
    GestureRecognizers,
    Behavior,
    Triggers,
    ClassId,
    StyleId,
    FlowDirection,
    InputTransparent,
    IsVisibleBackgroundColor,
    IsVisibleBorderColor,
    IsVisibleCornerRadius,
    IsVisibleElevation,
    IsVisiblePadding,
    IsVisiblePlaceholder,
    IsVisibleSeparatorColor,
    IsVisibleSeparatorWidth,
    IsVisibleShadow,
    IsVisibleStroke,
    IsVisibleTextColor,
    IsVisibleTextDecorations,
    IsVisibleTranslationX,
    IsVisibleTranslationY,
    IsVisibleRotation,
    IsVisibleScale,
    IsVisibleHeightRequest,
    IsVisibleWidthRequest,
    IsVisibleMinimumHeightRequest,
    IsVisibleMinimumWidthRequest,
    IsVisibleMargin,
    IsVisiblePaddingConstraints,
    IsVisibleRowSpacing,
    IsVisibleColumnSpacing,
    IsVisibleBackgroundColorOpacity,
    IsVisibleBorderColorOpacity,
    IsVisibleSeparatorColorOpacity,
    IsVisibleShadowOpacity,
    IsVisibleTextColorOpacity,
    IsVisibleTranslationXOpacity,
    IsVisibleTranslationYOpacity,
    IsVisibleRotationOpacity,
    IsVisibleScaleOpacity,
    IsVisibleHeightRequestOpacity,
    IsVisibleWidthRequestOpacity,
    IsVisibleMinimumHeightRequestOpacity,
    IsVisibleMinimumWidthRequestOpacity,
    IsVisibleMarginOpacity,
    IsVisiblePaddingConstraintsOpacity,
    IsVisibleRowSpacingOpacity,
    IsVisibleColumnSpacingOpacity,
    IsEditableLayout,
    IsEnabledOpacity,
    IsVisibleBackgroundColorRotation,
    IsVisibleBorderColorRotation,
    IsVisibleCornerRadiusRotation,
    IsVisibleElevationRotation,
    IsVisiblePaddingRotation,
    IsVisiblePlaceholderRotation,
    IsVisibleSeparatorColorRotation,
    IsVisibleSeparatorWidthRotation,
    IsVisibleShadowRotation,
    IsVisibleStrokeRotation,
    IsVisibleTextColorRotation,
    IsVisibleTextDecorationsRotation,
    IsVisibleTranslationXRotation,
    IsVisibleTranslationYRotation,
    IsVisibleRotationRotation,
    IsVisibleScaleRotation,
    IsVisibleHeightRequestRotation,
    IsVisibleWidthRequestRotation,
    IsVisibleMinimumHeightRequestRotation,
    IsVisibleMinimumWidthRequestRotation,
    IsVisibleMarginRotation,
    IsVisiblePaddingConstraintsRotation,
    IsVisibleRowSpacingRotation,
    IsVisibleColumnSpacingRotation,
    IsVisibleBackgroundColorScale,
    IsVisibleBorderColorScale,
    IsVisibleCornerRadiusScale,
    IsVisibleElevationScale,
    IsVisiblePaddingScale,
    IsVisiblePlaceholderScale,
    IsVisibleSeparatorColorScale,
    IsVisibleSeparatorWidthScale,
    IsVisibleShadowScale,
    IsVisibleStrokeScale,
    IsVisibleTextColorScale,
    IsVisibleTextDecorationsScale,
    IsVisibleTranslationXScale,
    IsVisibleTranslationYScale,
    IsVisibleRotationScale,
    IsVisibleScaleScale,
    IsVisibleHeightRequestScale,
    IsVisibleWidthRequestScale,
    IsVisibleMinimumHeightRequestScale,
    IsVisibleMinimumWidthRequestScale,
    IsVisibleMarginScale,
    IsVisiblePaddingConstraintsScale,
    IsVisibleRowSpacingScale,
    IsVisibleColumnSpacingScale,
    IsEnabledScale,
    IsVisibleBackgroundColorScaleX,
    IsVisibleBorderColorScaleX,
    IsVisibleCornerRadiusScaleX,
    IsVisibleElevationScaleX,
    IsVisiblePaddingScaleX,
    IsVisiblePlaceholderScaleX,
    IsVisibleSeparatorColorScaleX,
    IsVisibleSeparatorWidthScaleX,
    IsVisibleShadowScaleX,
    IsVisibleStrokeScaleX,
    IsVisibleTextColorScaleX,
    IsVisibleTextDecorationsScaleX,
    IsVisibleTranslationXScaleX,
    IsVisibleTranslationYScaleX,
    IsVisibleRotationScaleX,
    IsVisibleScaleScaleX,
    IsVisibleHeightRequestScaleX,
    IsVisibleWidthRequestScaleX,
    IsVisibleMinimumHeightRequestScaleX,
    IsVisibleMinimumWidthRequestScaleX,
    IsVisibleMarginScaleX,
    IsVisiblePaddingConstraintsScaleX,
    IsVisibleRowSpacingScaleX,
    IsVisibleColumnSpacingScaleX,
    IsEnabledScaleX,
    IsVisibleBackgroundColorScaleY,
    IsVisibleBorderColorScaleY,
    IsVisibleCornerRadiusScaleY,
    IsVisibleElevationScaleY,
    IsVisiblePaddingScaleY,
    IsVisiblePlaceholderScaleY,
    IsVisibleSeparatorColorScaleY,
    IsVisibleSeparatorWidthScaleY,
    IsVisibleShadowScaleY,
    IsVisibleStrokeScaleY,
    IsVisibleTextColorScaleY,
    IsVisibleTextDecorationsScaleY,
    IsVisibleTranslationXScaleY,
    IsVisibleTranslationYScaleY,
    IsVisibleRotationScaleY,
    IsVisibleScaleScaleY,
    IsVisibleHeightRequestScaleY,
    IsVisibleWidthRequestScaleY,
    IsVisibleMinimumHeightRequestScaleY,
    IsVisibleMinimumWidthRequestScaleY,
    IsVisibleMarginScaleY,
    IsVisiblePaddingConstraintsScaleY,
    IsVisibleRowSpacingScaleY,
    IsVisibleColumnSpacingScaleY,
    IsEnabledScaleY,
    IsVisibleBackgroundColorTranslationX,
    IsVisibleBorderColorTranslationX,
    IsVisibleCornerRadiusTranslationX,
    IsVisibleElevationTranslationX,
    IsVisiblePaddingTranslationX,
    IsVisiblePlaceholderTranslationX,
    IsVisibleSeparatorColorTranslationX,
    IsVisibleSeparatorWidthTranslationX,
    IsVisibleShadowTranslationX,
    IsVisibleStrokeTranslationX,
    IsVisibleTextColorTranslationX,
    IsVisibleTextDecorationsTranslationX,
    IsVisibleTranslationXTranslationX,
    IsVisibleTranslationYTranslationX,
    IsVisibleRotationTranslationX,
    IsVisibleScaleTranslationX,
    IsVisibleHeightRequestTranslationX,
    IsVisibleWidthRequestTranslationX,
    IsVisibleMinimumHeightRequestTranslationX,
    IsVisibleMinimumWidthRequestTranslationX,
    IsVisibleMarginTranslationX,
    IsVisiblePaddingConstraintsTranslationX,
    IsVisibleRowSpacingTranslationX,
    IsVisibleColumnSpacingTranslationX,
    IsEnabledTranslationX,
    IsVisibleBackgroundColorTranslationY,
    IsVisibleBorderColorTranslationY,
    IsVisibleCornerRadiusTranslationY,
    IsVisibleElevationTranslationY,
    IsVisiblePaddingTranslationY,
    IsVisiblePlaceholderTranslationY,
    IsVisibleSeparatorColorTranslationY,
    IsVisibleSeparatorWidthTranslationY,
    IsVisibleShadowTranslationY,
    IsVisibleStrokeTranslationY,
    IsVisibleTextColorTranslationY,
    IsVisibleTextDecorationsTranslationY,
    IsVisibleTranslationXTranslationY,
    IsVisibleTranslationYTranslationY,
    IsVisibleRotationTranslationY,
    IsVisibleScaleTranslationY,
    IsVisibleHeightRequestTranslationY,
    IsVisibleWidthRequestTranslationY,
    IsVisibleMinimumHeightRequestTranslationY,
    IsVisibleMinimumWidthRequestTranslationY,
    IsVisibleMarginTranslationY,
    IsVisiblePaddingConstraintsTranslationY,
    IsVisibleRowSpacingTranslationY,
    IsVisibleColumnSpacingTranslationY,
    IsEnabledTranslationY,
    IsVisibleBackgroundColorLayoutX,
    IsVisibleBorderColorLayoutX,
    IsVisibleCornerRadiusLayoutX,
    IsVisibleElevationLayoutX,
    IsVisiblePaddingLayoutX,
    IsVisiblePlaceholderLayoutX,
    IsVisibleSeparatorColorLayoutX,
    IsVisibleSeparatorWidthLayoutX,
    IsVisibleShadowLayoutX,
    IsVisibleStrokeLayoutX,
    IsVisibleTextColorLayoutX,
    IsVisibleTextDecorationsLayoutX,
    IsVisibleTranslationXLayoutX,
    IsVisibleTranslationYLayoutX,
    IsVisibleRotationLayoutX,
    IsVisibleScaleLayoutX,
    IsVisibleHeightRequestLayoutX,
    IsVisibleWidthRequestLayoutX,
    IsVisibleMinimumHeightRequestLayoutX,
    IsVisibleMinimumWidthRequestLayoutX,
    IsVisibleMarginLayoutX,
    IsVisiblePaddingConstraintsLayoutX,
    IsVisibleRowSpacingLayoutX,
    IsVisibleColumnSpacingLayoutX,
    IsEnabledLayoutX,
    IsVisibleBackgroundColorLayoutY,
    IsVisibleBorderColorLayoutY,
    IsVisibleCornerRadiusLayoutY,
    IsVisibleElevationLayoutY,
    IsVisiblePaddingLayoutY,
    IsVisiblePlaceholderLayoutY,
    IsVisibleSeparatorColorLayoutY,
    IsVisibleSeparatorWidthLayoutY,
    IsVisibleShadowLayoutY,
    IsVisibleStrokeLayoutY,
    IsVisibleTextColorLayoutY,
    IsVisibleTextDecorationsLayoutY,
    IsVisibleTranslationXLayoutY,
    IsVisibleTranslationYLayoutY,
    IsVisibleRotationLayoutY,
    IsVisibleScaleLayoutY,
    IsVisibleHeightRequestLayoutY,
    IsVisibleWidthRequestLayoutY,
    IsVisibleMinimumHeightRequestLayoutY,
    IsVisibleMinimumWidthRequestLayoutY,
    IsVisibleMarginLayoutY,
    IsVisiblePaddingConstraintsLayoutY,
    IsVisibleRowSpacingLayoutY,
    IsVisibleColumnSpacingLayoutY,
    IsEnabledLayoutY,
    IsVisibleBackgroundColorWidthRequest,
    IsVisibleBorderColorWidthRequest,
    IsVisibleCornerRadiusWidthRequest,
    IsVisibleElevationWidthRequest,
    IsVisiblePaddingWidthRequest,
    IsVisiblePlaceholderWidthRequest,
    IsVisibleSeparatorColorWidthRequest,
    IsVisibleSeparatorWidthWidthRequest,
    IsVisibleShadowWidthRequest,
    IsVisibleStrokeWidthRequest,
    IsVisibleTextColorWidthRequest,
    IsVisibleTextDecorationsWidthRequest,
    IsVisibleTranslationXWidthRequest,
    IsVisibleTranslationYWidthRequest,
    IsVisibleRotationWidthRequest,
    IsVisibleScaleWidthRequest,
    IsVisibleHeightRequestWidthRequest,
    IsVisibleWidthRequestWidthRequest,
    IsVisibleMinimumHeightRequestWidthRequest,
    IsVisibleMinimumWidthRequestWidthRequest,
    IsVisibleMarginWidthRequest,
    IsVisiblePaddingConstraintsWidthRequest,
    IsVisibleRowSpacingWidthRequest,
    IsVisibleColumnSpacingWidthRequest,
    IsEnabledWidthRequest,
    IsVisibleBackgroundColorHeightRequest,
    IsVisibleBorderColorHeightRequest,
    IsVisibleCornerRadiusHeightRequest,
    IsVisibleElevationHeightRequest,
    IsVisiblePaddingHeightRequest,
    IsVisiblePlaceholderHeightRequest,
    IsVisibleSeparatorColorHeightRequest,
    IsVisibleSeparatorWidthHeightRequest,
    IsVisibleShadowHeightRequest,
    IsVisibleStrokeHeightRequest,
    IsVisibleTextColorHeightRequest,
    IsVisibleTextDecorationsHeightRequest,
    IsVisibleTranslationXHeightRequest,
    IsVisibleTranslationYHeightRequest,
    IsVisibleRotationHeightRequest,
    IsVisibleScaleHeightRequest,
    IsVisibleHeightRequestHeightRequest,
    IsVisibleWidthRequestHeightRequest,
    IsVisibleMinimumHeightRequestHeightRequest,
    IsVisibleMinimumWidthRequestHeightRequest,
    IsVisibleMarginHeightRequest,
    IsVisiblePaddingConstraintsHeightRequest,
    IsVisibleRowSpacingHeightRequest,
    IsVisibleColumnSpacingHeightRequest,
    IsEnabledHeightRequest,
    IsVisibleBackgroundColorMinimumHeightRequest,
    IsVisibleBorderColorMinimumHeightRequest,
    IsVisibleCornerRadiusMinimumHeightRequest,
    IsVisibleElevationMinimumHeightRequest,
    IsVisiblePaddingMinimumHeightRequest,
    IsVisiblePlaceholderMinimumHeightRequest,
    IsVisibleSeparatorColorMinimumHeightRequest,
    IsVisibleSeparatorWidthMinimumHeightRequest,
    IsVisibleShadowMinimumHeightRequest,
    IsVisibleStrokeMinimumHeightRequest,
    IsVisibleTextColorMinimumHeightRequest,
    IsVisibleTextDecorationsMinimumHeightRequest,
    IsVisibleTranslationXMinimumHeightRequest,
    IsVisibleTranslationYMinimumHeightRequest,
    IsVisibleRotationMinimumHeightRequest,
    IsVisibleScaleMinimumHeightRequest,
    IsVisibleHeightRequestMinimumHeightRequest,
    IsVisibleWidthRequestMinimumHeightRequest,
    IsVisibleMinimumHeightRequestMinimumHeightRequest,
    IsVisibleMinimumWidthRequestMinimumHeightRequest,
    IsVisibleMarginMinimumHeightRequest,
    IsVisiblePaddingConstraintsMinimumHeightRequest,
    IsVisibleRowSpacingMinimumHeightRequest,
    IsVisibleColumnSpacingMinimumHeightRequest,
    IsEnabledMinimumHeightRequest,
    IsVisibleBackgroundColorMinimumWidthRequest,
    IsVisibleBorderColorMinimumWidthRequest,
    IsVisibleCornerRadiusMinimumWidthRequest,
    IsVisibleElevationMinimumWidthRequest,
    IsVisiblePaddingMinimumWidthRequest,
    IsVisiblePlaceholderMinimumWidthRequest,
    IsVisibleSeparatorColorMinimumWidthRequest,
    IsVisibleSeparatorWidthMinimumWidthRequest,
    IsVisibleShadowMinimumWidthRequest,
    IsVisibleStrokeMinimumWidthRequest,
    IsVisibleTextColorMinimumWidthRequest,
    IsVisibleTextDecorationsMinimumWidthRequest,
    IsVisibleTranslationXMinimumWidthRequest,
    IsVisibleTranslationYMinimumWidthRequest,
    IsVisibleRotationMinimumWidthRequest,
    IsVisibleScaleMinimumWidthRequest,
    IsVisibleHeightRequestMinimumWidthRequest,
    IsVisibleWidthRequestMinimumWidthRequest,
    IsVisibleMinimumHeightRequestMinimumWidthRequest,
    IsVisibleMinimumWidthRequestMinimumWidthRequest,
    IsVisibleMarginMinimumWidthRequest,
    IsVisiblePaddingConstraintsMinimumWidthRequest,
    IsVisibleRowSpacingMinimumWidthRequest,
    IsVisibleColumnSpacingMinimumWidthRequest,
    IsEnabledMinimumWidthRequest,
    IsVisibleBackgroundColorAnchorX,
    IsVisibleBorderColorAnchorX,
    IsVisibleCornerRadiusAnchorX,
    IsVisibleElevationAnchorX,
    IsVisiblePaddingAnchorX,
    IsVisiblePlaceholderAnchorX,
    IsVisibleSeparatorColorAnchorX,
    IsVisibleSeparatorWidthAnchorX,
    IsVisibleShadowAnchorX,
    IsVisibleStrokeAnchorX,
    IsVisibleTextColorAnchorX,
    IsVisibleTextDecorationsAnchorX,
    IsVisibleTranslationXAnchorX,
    IsVisibleTranslationYAnchorX,
    IsVisibleRotationAnchorX,
    IsVisibleScaleAnchorX,
    IsVisibleHeightRequestAnchorX,
    IsVisibleWidthRequestAnchorX,
    IsVisibleMinimumHeightRequestAnchorX,
    IsVisibleMinimumWidthRequestAnchorX,
    IsVisibleMarginAnchorX,
    IsVisiblePaddingConstraintsAnchorX,
    IsVisibleRowSpacingAnchorX,
    IsVisibleColumnSpacingAnchorX,
    IsEnabledAnchorX,
    IsVisibleBackgroundColorAnchorY,
    IsVisibleBorderColorAnchorY,
    IsVisibleCornerRadiusAnchorY,
    IsVisibleElevationAnchorY,
    IsVisiblePaddingAnchorY,
    IsVisiblePlaceholderAnchorY,
    IsVisibleSeparatorColorAnchorY,
    IsVisibleSeparatorWidthAnchorY,
    IsVisibleShadowAnchorY,
    IsVisibleStrokeAnchorY,
    IsVisibleTextColorAnchorY,
    IsVisibleTextDecorationsAnchorY,
    IsVisibleTranslationXAnchorY,
    IsVisibleTranslationYAnchorY,
    IsVisibleRotationAnchorY,
    IsVisibleScaleAnchorY,
    IsVisibleHeightRequestAnchorY,
    IsVisibleWidthRequestAnchorY,
    IsVisibleMinimumHeightRequestAnchorY,
    IsVisibleMinimumWidthRequestAnchorY,
    IsVisibleMarginAnchorY,
    IsVisiblePaddingConstraintsAnchorY,
    IsVisibleRowSpacingAnchorY,
    IsVisibleColumnSpacingAnchorY,
    IsEnabledAnchorY,
    IsVisibleBackgroundColorRotationX,
    IsVisibleBorderColorRotationX,
    IsVisibleCornerRadiusRotationX,
    IsVisibleElevationRotationX,
    IsVisiblePaddingRotationX,
    IsVisiblePlaceholderRotationX,
    IsVisibleSeparatorColorRotationX,
    IsVisibleSeparatorWidthRotationX,
    IsVisibleShadowRotationX,
    IsVisibleStrokeRotationX,
    IsVisibleTextColorRotationX,
    IsVisibleTextDecorationsRotationX,
    IsVisibleTranslationXRotationX,
    IsVisibleTranslationYRotationX,
    IsVisibleRotationRotationX,
    IsVisibleScaleRotationX,
    IsVisibleHeightRequestRotationX,
    IsVisibleWidthRequestRotationX,
    IsVisibleMinimumHeightRequestRotationX,
    IsVisibleMinimumWidthRequestRotationX,
    IsVisibleMarginRotationX,
    IsVisiblePaddingConstraintsRotationX,
    IsVisibleRowSpacingRotationX,
    IsVisibleColumnSpacingRotationX,
    IsEnabledRotationX,
    IsVisibleBackgroundColorRotationY,
    IsVisibleBorderColorRotationY,
    IsVisibleCornerRadiusRotationY,
    IsVisibleElevationRotationY,
    IsVisiblePaddingRotationY,
    IsVisiblePlaceholderRotationY,
    IsVisibleSeparatorColorRotationY,
    IsVisibleSeparatorWidthRotationY,
    IsVisibleShadowRotationY,
    IsVisibleStrokeRotationY,
    IsVisibleTextColorRotationY,
    IsVisibleTextDecorationsRotationY,
    IsVisibleTranslationXRotationY,
    IsVisibleTranslationYRotationY,
    IsVisibleRotationRotationY,
    IsVisibleScaleRotationY,
    IsVisibleHeightRequestRotationY,
    IsVisibleWidthRequestRotationY,
    IsVisibleMinimumHeightRequestRotationY,
    IsVisibleMinimumWidthRequestRotationY,
    IsVisibleMarginRotationY,
    IsVisiblePaddingConstraintsRotationY,
    IsVisibleRowSpacingRotationY,
    IsVisibleColumnSpacingRotationY,
    IsEnabledRotationY,
}