import { Builder, builder } from '@builder.io/react';

// Be sure to import all of your components where you use <BuilderComponent /> so they are
// bundled and accessible
import './components/ProductsList/ProductsList.builder';
import './components/Hero/Hero.builder';
import './components/TripleColumns/TripleColumns.builder';
import './components/DoubleColumns/DoubleColumns.builder';
import './components/Review/Review.builder';
import './components/Button/Button.builder';
import './components/Heading/Heading.builder';
import './components/HeroWithChildren/HeroWithChildren.builder';
import './components/DynamicColumns/DynamicColumns.builder';
import './components/ProductsListWithServerSideData/ProductsListWithServerSideData.builder';
import './components/CustomColumns/CustomColumns.builder';
import './components/Calendar/Calendar.builder';
import './components/ContentForm/ContentForm.builder';
import './components/HeadBar/Headbar.builder';
import './components/LandingBlock/LandingBlock.builder';
import './components/ContentTable/ContentTable.builder';
import './components/UserAdmin/AccountTable.builder';

// Add your public apiKey here
const YOUR_KEY = 'cb0ca5f113c44bcf8c74c16bf0e7a4f9';
builder.init(YOUR_KEY);

// Remove this to allow all built-in components to be used too
const OVERRIDE_INSERT_MENU = true;

if (!OVERRIDE_INSERT_MENU) {
  // (optionally) use this to hide all default built-in components and fully manage
  // the insert menu components and sections yourself
  Builder.set({ customInsertMenu: true });
}

// (optionally) set these to add your own sections of components arranged as you choose.
// this can be used with or without `customInsertMenu` above

Builder.register('insertMenu', {
  name: 'Simple components',
  items: [
    { name: 'Hero' },
    { name: 'Double Columns' },
    { name: 'Triple Columns' },
    { name: 'Dynamic Columns' },
    { name: 'Landing Block'}
  ],
});

//Builder.register('insertMenu', {
  //name: 'Custom UI components',
  //items: [
    //{ name: 'Headbar' },
    //{ name: 'Carousel' },
  //],
//});

Builder.register('insertMenu', {
  name: 'Dynamic components',
  items: [
    { name: 'Hero With Children' },
    { name: 'Products List' },
    { name: 'Products List SSR' },
    { name: 'Calendar Widget' },
    { name: 'Content Form' },
    { name: 'Head Bar' },
    { name: 'Content Table'},
    { name: 'Account Table'},

    // More advanced
    {
      name: 'Hero With Children Alt',
      item: {
        component: {
          name: 'Hero With Children',
          options: {
            image:
              'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F349738e6805b481ab6c50bda7e24445e',
            height: 400,
          },
        },
        children: [
          // Supply alternate children
          {
            '@type': '@builder.io/sdk:Element',
            component: {
              name: 'Heading',
              options: {
                text: 'You can edit the contents of this example!',
                type: 'h4',
              },
            },
          },
        ],
      },
    },
  ],
});

Builder.register('insertMenu', {
  name: 'Blocks',
  items: [
    { name: 'Button' },
    { item: 'Heading', name: 'Heading 1' },

    // More advanced
    {
      name: 'Heading 2',
      // heading alt
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Heading',
          options: {
            text: 'I am an h2',
            type: 'h2',
          },
        },
      },
    },
    {
      name: 'Heading 3',
      // heading alt 2
      item: {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Heading',
          options: {
            text: 'I am am h3',
            type: 'h3',
          },
        },
      },
    },
  ],
});
