import React, {ForwardedRef, forwardRef} from 'react';
import {View} from 'react-native';
import MenuItem, {MenuItemProps} from './MenuItem';

function MenuItemWithTopDescription(props: MenuItemProps, ref: ForwardedRef<View>) {
    return (
        <MenuItem
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            ref={ref}
            shouldShowBasicTitle
            shouldShowDescriptionOnTop
        />
    );
}

MenuItemWithTopDescription.displayName = 'MenuItemWithTopDescription';

export default forwardRef(MenuItemWithTopDescription);
