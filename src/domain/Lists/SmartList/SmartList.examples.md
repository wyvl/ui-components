#### Basic Smart List

```jsx
const { ListColumn } = require('./ListColumn');

<SmartList
  data={[
    {
      name: 'Blue Card',
      issuingOrganisation: 'Queensland Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired'
    },
    {
      name: 'Green Card',
      issuingOrganisation: 'Western Australia Gov.',
      expiryDate: '05 Feb 2017',
      status: 'Current'
    }
  ]}
>
  <ListColumn
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    tooltipText='This is a test tooltip'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```

#### Smart List with limit

```jsx
const { ListColumn } = require('./ListColumn');

<SmartList
  data={[
    {
      name: 'Blue Card',
      issuingOrganisation: 'Queensland Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired'
    },
    {
      name: 'Green Card',
      issuingOrganisation: 'Western Australia Gov.',
      expiryDate: '05 Feb 2017',
      status: 'Current'
    },
    {
      name: 'Yellow Card',
      issuingOrganisation: 'South Australia Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired'
    },
    {
      name: 'Pink Card',
      issuingOrganisation: 'Victoria Gov.',
      expiryDate: '08 April 2017',
      status: 'Current'
    }
  ]}
  limit={2}
>
  <ListColumn
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```

#### Empty Smart List

```jsx
const { ListColumn } = require('./ListColumn');

<SmartList
  data={[]}
>
  <ListColumn
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```

#### Skeleton Smart List

```jsx
const { ListColumn } = require('./ListColumn');

<SmartList
  skeletonOptions={{
    showSkeleton: true,
    numberOfRows: 5
  }}
>
  <ListColumn
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
  />
</SmartList>
```

#### Loading Smart List

```jsx
const { ListColumn } = require('./ListColumn');

<SmartList
  data={[]}
  loading
>
  <ListColumn
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```