import React from 'react';
import Giscus from "@giscus/react";
import {useColorMode} from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const {colorMode} = useColorMode();

    return (
        <Giscus
            repo="tidvn2/cardano-comment"
            repoId="R_kgDOLgIHqg"
            category="General"
            categoryId="DIC_kwDOLgIHqs4Cd9ao"
            mapping="pathname"
            term="Leave a Comment"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="vi"
            loading="lazy"
        />
    );
}