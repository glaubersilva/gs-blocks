import './style.scss';

type PriceProps = {
    props: {
        currency?: string;
        originalPrice?: number;
        integerPart?: number;
        fractionalPart?: number;
        period?: string;
        notice?: string;
        backgroundColor?: string;
        primaryColor?: string;
        secondaryColor?: string;
        highlightColor?: string;
    }
};

export default function Price({
                                  props: {
                                      currency = '$',
                                      originalPrice = 14.90,
                                      integerPart = 9,
                                      fractionalPart = 90,
                                      period = 'month',
                                      notice = 'billed annually',
                                      backgroundColor,
                                      primaryColor,
                                      secondaryColor,
                                      highlightColor
                                  }
                              }: PriceProps) {

    return (
        <div
            className="gs-blocks-price"
            style={backgroundColor && {backgroundColor: backgroundColor}}
        >
            <div
                className="gs-blocks-price-original-price gs-blocks-price-typo-excluded"
                style={highlightColor && {color: highlightColor}}
            >
                {currency + originalPrice}{' '}
            </div>

            <span className="gs-blocks-price-currency" style={primaryColor && {color: primaryColor}}>
				{currency}{' '}
			</span>

            <span className="gs-blocks-price-integer-part" style={primaryColor && {color: primaryColor}}>
				{integerPart}{' '}
			</span>

            <div
                className="gs-blocks-price-after-integer-part"
                style={primaryColor && {color: primaryColor}}
            >
				<span className="gs-blocks-price-fractional-part">
					{fractionalPart}{' '}
				</span>
                <span
                    className="gs-blocks-price-period gs-blocks-price-typo-excluded gs-blocks-price-period-position-beside">
					{period}{' '}
				</span>
                <span className="gs-blocks-price-notice" style={secondaryColor && {color: secondaryColor}}>
					<span
                        className="gs-blocks-price-asterisk"
                        style={highlightColor && {color: highlightColor}}
                    >
						{notice ? '* ' : ''}
					</span>
                    {notice}
				</span>{' '}
            </div>
        </div>
    );
}
