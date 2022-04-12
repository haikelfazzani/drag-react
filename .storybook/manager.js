import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  brandTitle: 'Drag React'
});

addons.setConfig({
  theme,
})