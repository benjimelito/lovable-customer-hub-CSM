# Swag Redemption PRD

## Overview

The Swag Redemption page (`/swag`) allows prospects to browse and redeem swag items using points earned through engagement. It gamifies the customer hub experience and provides tangible rewards.

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Existing CTA section styles
- Card component styles
- Form component styles
- Animation configurations
- Color scheme and design tokens

## Features

### 1. Swag Catalog Display

Grid of available swag items:

```typescript
interface SwagItem {
  id: string;
  name: string;
  description: string;
  image: string;
  pointsCost: number;
  category: 'apparel' | 'accessories' | 'tech' | 'limited';
  available: boolean;
  stock?: number;
}
```

Categories:
- Apparel (t-shirts, hoodies)
- Accessories (stickers, mugs)
- Tech (cables, chargers)
- Limited Edition (exclusive items)

### 2. Swag Card Component

Each card shows:
- Product image
- Product name
- Points cost badge
- "Limited" badge (if applicable)
- Availability status
- "Redeem" button
- Lock icon if insufficient points

### 3. Points Balance Display

Prominent display showing:
- Current points balance
- Points needed for next item
- Progress bar to next tier

### 4. Redemption Form

Modal/drawer with shipping form:

```typescript
interface RedemptionForm {
  itemId: string;
  shipping: {
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'; // for apparel
}
```

Form fields:
- Full name
- Address line 1
- Address line 2 (optional)
- City
- State/Province
- ZIP/Postal code
- Country (dropdown)
- Size (if apparel)

### 5. Confirmation Flow

After submission:
1. Loading state
2. Success confirmation
3. Order summary
4. Estimated delivery
5. Continue browsing CTA

### 6. Rewards Integration

- Check points balance before allowing redemption
- Deduct points on successful redemption
- Track redeemed items in RewardsContext
- Prevent duplicate redemptions (if limited)

## Component Structure

```
src/pages/SwagRedemption.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title: "Swag Shop"
│   │   └── Subtitle: "Redeem your rewards"
│   ├── Points Balance Section
│   │   ├── Current Points
│   │   ├── Progress Bar
│   │   └── Points History Link
│   ├── Category Filters
│   │   └── FilterChip (x4)
│   ├── Swag Grid
│   │   └── SwagCard (xN)
│   └── Redemption Modal
│       ├── Item Preview
│       ├── Shipping Form
│       └── Confirmation
```

## Mock Data

```typescript
// src/data/swag.ts
export const mockSwagItems: SwagItem[] = [
  {
    id: '1',
    name: 'Lovable T-Shirt',
    description: 'Premium cotton tee with Lovable logo',
    image: '/swag/tshirt.png',
    pointsCost: 100,
    category: 'apparel',
    available: true
  },
  {
    id: '2',
    name: 'Sticker Pack',
    description: 'Set of 5 holographic stickers',
    image: '/swag/stickers.png',
    pointsCost: 25,
    category: 'accessories',
    available: true
  },
  {
    id: '3',
    name: 'Lovable Mug',
    description: 'Ceramic mug with gradient design',
    image: '/swag/mug.png',
    pointsCost: 50,
    category: 'accessories',
    available: true
  },
  {
    id: '4',
    name: 'USB-C Hub',
    description: '4-port USB-C hub with Lovable branding',
    image: '/swag/hub.png',
    pointsCost: 200,
    category: 'tech',
    available: true
  },
  {
    id: '5',
    name: 'Limited Edition Hoodie',
    description: 'Exclusive hoodie, limited to 100 pieces',
    image: '/swag/hoodie.png',
    pointsCost: 250,
    category: 'limited',
    available: true,
    stock: 47
  },
  // ... more items
];
```

## Form Validation

- Required fields: name, address1, city, state, zip, country
- ZIP code format validation
- Size required for apparel items
- Confirm sufficient points before submit

## UI States

### Browse State
- Grid of available items
- Filters active
- Points balance visible

### Redemption State
- Modal open
- Form visible
- Points deduction preview

### Confirmation State
- Success animation
- Order details
- Expected delivery date
- Close/continue buttons

### Insufficient Points
- Item shows lock icon
- "X more points needed"
- Ways to earn points link

## Animations

1. **Page entry:** BlurFade on sections
2. **Card hover:** Subtle lift effect
3. **Modal open:** Scale + fade
4. **Form submit:** Loading spinner
5. **Confirmation:** Confetti or success animation

## Integration

- RewardsContext for points and redemptions
- CustomerContext for pre-filling shipping info
- ProgressContext for tracking page visit

## Responsive Behavior

- Desktop: 4-column grid, side modal
- Tablet: 3-column grid
- Mobile: 2-column grid, full-screen modal

## Future Enhancements

- Order history page
- Wishlist functionality
- Points earning activities
- Referral bonuses
