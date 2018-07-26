#### Generic Menu

```jsx
const { MenuItem } = require('./MenuItem');
const { SubMenu } = require('./SubMenu');
const { FontAwesomeIcon } = require('@Domain/Icons');

<Menu
  id='example-menu'
  isAccordion
  className='ihr-nav'
>
  <MenuItem
    label='Item 1'
  >
    <SubMenu>
      <MenuItem
        url='#'
        label='Item 1A'
      />
      <MenuItem
        url='#'
        label='Item 1A'
      />
    </SubMenu>
  </MenuItem>
  <MenuItem
    isActive={true}
    url='#'
    label='Item 2'
  />
  <MenuItem
    label='Item 3'
    icon={<FontAwesomeIcon type='star'/>}
  >
    <SubMenu
      isAccordion
    >
      <MenuItem
        label='Item 3A'
      >
        <SubMenu>
          <MenuItem
            url='#'
            label='Item 3Aa'
          />
          <MenuItem
            url='#'
            label='Item 3Ab'
          />
        </SubMenu>
      </MenuItem>
      <MenuItem
        url='#'
        label='Item 3B'
      />
    </SubMenu>
  </MenuItem>
</Menu>
```

#### Menu with loading menu item

```jsx
const { MenuItem } = require('./MenuItem');
const { SubMenu } = require('./SubMenu');
const { FontAwesomeIcon } = require('@Domain/Icons');

<Menu
  id='example-loading-menu'
  isAccordion
  className='ihr-nav'
>
  <MenuItem
    label='Item 1'
  >
    <SubMenu>
      <MenuItem
        url='#'
        label='Item 1A'
      />
      <MenuItem
        url='#'
        label='Item 1A'
      />
    </SubMenu>
  </MenuItem>
  <MenuItem
    isLoading={true}
    url='#'
    label='Item 2'
  />
</Menu>
```