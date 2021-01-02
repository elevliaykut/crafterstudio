import React from "react";
import {
    SectionTitle,
    SectionDate,
    StackList,
    Item
} from "../../components/SectionCard/SectionCard.styles";
import CustomEmoji from "../../components/CustomEmoji/CustomEmoji";
import CustomLink from "../../components/CustomLink/CustomLink.component";
const ProductStackCardComponent = () => {
    return(
        <>
            <SectionDate>November 25, 2020</SectionDate>
            <SectionTitle>What Are The Products Mades So Far ?</SectionTitle>
            <StackList>
                <Item>
                    <CustomEmoji label="meoji" emoji="😷"/><CustomLink targetUrl='https://trusting-bhaskara-8ee19a.netlify.app/'>COVID19</CustomLink>, a web app that helps you to follow increases, decrease, suggestions and filter as countries.
                </Item>
            </StackList>
        </>
    )
}

export default ProductStackCardComponent