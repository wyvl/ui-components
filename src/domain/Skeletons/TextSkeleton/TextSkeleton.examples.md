#### Text Skeleton

```jsx
<TextSkeleton
  showSkeleton={true}
/>
```

#### Multi-Line Text Skeleton

```jsx
<TextSkeleton
  showSkeleton={true}
  numLines={5}
/>
```

#### Text Skeleton with Width Option

```jsx
<TextSkeleton
  showSkeleton={true}
  width={250}
/>
```

#### Text Skeleton for Different Text Types

```jsx
<React.Fragment>
  <div>
    <Text type='xsmall' isInline={false}>
      TextSkeleton for X-Small Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='xsmall'
    />
  </div>
  <div>
    <Text type='small' isInline={false}>
      TextSkeleton for Small Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='small'
    />
  </div>
  <div>
    <Text isInline={false}>
      TextSkeleton for Body Text (default)
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='body'
    />
  </div>
  <div>
    <Text type='heading' isInline={false}>
      TextSkeleton for Heading Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='heading'
    />
  </div>
  <div>
    <Text type='display' isInline={false}>
      TextSkeleton for Display Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='display'
    />
  </div>
  <div>
    <Text type='display-large' isInline={false}>
      TextSkeleton for Display Large Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='display-large'
    />
  </div>
</React.Fragment>
```