import PropTypes from 'prop-types';
import React from 'react';
import Text from '@components/Text';
import useThemeStyles from '@hooks/useThemeStyles';

const propTypes = {
    tnode: PropTypes.shape({
        data: PropTypes.string.isRequired,
    }).isRequired,
};

function NextStepsEmailRenderer({tnode}) {
    const styles = useThemeStyles();

    return <Text style={[styles.breakWord, styles.textLabelSupporting, styles.textStrong]}>{tnode.data}</Text>;
}

NextStepsEmailRenderer.propTypes = propTypes;
NextStepsEmailRenderer.displayName = 'NextStepsEmailRenderer';

export default NextStepsEmailRenderer;
