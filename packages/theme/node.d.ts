import { DefaultTheme, UserConfig } from 'vitepress';
import { ElButton } from 'element-plus';
export { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

declare namespace BlogPopover {
    interface Title {
        type: 'title';
        content: string;
        style?: string;
    }
    interface Text {
        type: 'text';
        content: string;
        style?: string;
    }
    interface Image {
        type: 'image';
        src: string;
        style?: string;
    }
    interface Button {
        type: 'button';
        link: string;
        content: string;
        style?: string;
        props?: InstanceType<typeof ElButton>['$props'];
    }
    type Value = Title | Text | Image | Button;
}
declare namespace Theme {
    interface PageMeta {
        title: string;
        date: string;
        tag?: string[];
        description?: string;
        cover?: string;
        hiddenCover?: boolean;
        readingTime?: boolean;
        sticky?: number;
        author?: string;
        hidden?: boolean;
        layout?: string;
        categories: string[];
        tags: string[];
        /**
         * 文章首页置顶
         */
        top?: number;
        /**
         * 手动控制相关文章列表的顺序
         */
        recommend?: number | false;
        /**
         * 时间线
         */
        timeline: string;
        /**
         * 专栏&合集
         */
        album: string;
    }
    interface PageData {
        route: string;
        meta: PageMeta;
    }
    interface activeTag {
        label: string;
        type: string;
    }
    interface GiscusConfig {
        repo: string;
        repoId: string;
        category: string;
        categoryId: string;
        mapping?: string;
        inputPosition?: 'top' | 'bottom';
        lang?: string;
        loading?: 'lazy' | 'auto' | 'eager';
    }
    interface HotArticle {
        title?: string;
        pageSize?: number;
        nextText?: string;
        empty?: string | boolean;
    }
    interface RecommendArticle {
        title?: string;
        pageSize?: number;
        nextText?: string;
        /**
         * 是否展示当前正在浏览的文章在左侧
         * @default false
         */
        showSelf?: boolean;
        filter?: (page: Theme.PageData) => boolean;
        empty?: string | boolean;
    }
    interface HomeBlog {
        name?: string;
        motto?: string;
        inspiring?: string;
        pageSize?: number;
    }
    interface ArticleConfig {
        readingTime?: boolean;
        hiddenCover?: boolean;
    }
    interface Alert {
        type: 'success' | 'warning' | 'info' | 'error';
        /**
         * 细粒度的时间控制
         * 默认展示时间，-1 只展示1次，其它数字为每次都展示，一定时间后自动消失，0为不自动消失
         * 配置改变时，会重新触发展示
         */
        duration: number;
        title?: string;
        description?: string;
        closable?: boolean;
        center?: boolean;
        closeText?: string;
        showIcon?: boolean;
        html?: string;
    }
    interface Popover {
        title: string;
        /**
         * 细粒度的时间控制
         * 默认展示时间，-1 只展示1次，其它数字为每次都展示，一定时间后自动消失，0为不自动消失
         * 配置改变时，会重新触发展示
         */
        duration: number;
        body?: BlogPopover.Value[];
        footer?: BlogPopover.Value[];
        /**
         * 手动重新打开
         */
        reopen?: boolean;
    }
    interface FriendLink {
        nickname: string;
        des: string;
        url: string;
        avatar: string;
    }
    type SearchConfig = boolean | 'pagefind' | {
        btnPlaceholder?: string;
        placeholder?: string;
        emptyText?: string;
        /**
         * @example
         * 'Total: {{searchResult}} search results.'
         */
        heading?: string;
        mode?: boolean | 'pagefind';
    };
    interface BlogConfig {
        blog?: false;
        pagesData: PageData[];
        srcDir?: string;
        author?: string;
        hotArticle?: HotArticle;
        home?: HomeBlog;
        /**
         * 本地全文搜索定制
         * 内置pagefind 实现，
         * VitePress 官方提供 minisearch 实现，
         * 社区提供 flexsearch 实现
         */
        search?: SearchConfig;
        /**
         * 配置评论
         * power by https://giscus.app/zh-CN
         */
        comment?: GiscusConfig | false;
        recommend?: RecommendArticle;
        article?: ArticleConfig;
        /**
         * el-alert
         */
        alert?: Alert;
        popover?: Popover;
        friend?: FriendLink[];
        authorList?: Omit<FriendLink, 'avatar'>[];
        /**
         * 启用 [vitepress-plugin-tabs](https://www.npmjs.com/package/vitepress-plugin-tabs)
         * @default false
         */
        tabs: boolean;
    }
    interface Config extends DefaultTheme.Config {
        blog?: BlogConfig;
    }
    interface HomeConfig {
        handleChangeSlogan?: (oldSlogan: string) => string | Promise<string>;
    }
}

declare function getThemeConfig(cfg?: Partial<Theme.BlogConfig>): any;
declare function getDefaultTitle(content: string): string;
declare function clearMatterContent(content: string): string;
declare function getFileBirthTime(url: string): string;
declare function getGitTimestamp(file: string): Promise<unknown>;
declare function defineConfig(config: UserConfig<Theme.Config>): UserConfig<Theme.Config>;

export { clearMatterContent, defineConfig, getDefaultTitle, getFileBirthTime, getGitTimestamp, getThemeConfig };
