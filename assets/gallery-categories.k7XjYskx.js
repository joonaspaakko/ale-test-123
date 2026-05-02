import { m as markRaw, o as openBlock, c as createElementBlock, a as createBaseVNode, _ as _export_sfc, e as resolveComponent, s as createTextVNode, t as toDisplayString, h as createBlock, F as Fragment, i as renderList, b as createVNode, j as withCtx, d as createCommentVNode, g as normalizeClass, r as resolveDirective, w as withDirectives } from './lodash.Cy6RZ5mX.js';
import { c as slugify } from './gallery._3hyr5ng.js';
import { m as makeCoverUrl } from './gallery-makeCoverUrl.BnX14Pi7.js';
import { f as findSubPageSource, _ as __unplugin_components_1$1 } from './gallery-findSubPageSource.CB10VwdW.js';
import { _ as __unplugin_components_0$1 } from './gallery-page-title.BjxZ-yuP.js';
import './jquery.3Hs3vqLI.js';
import './index.9Z32wZYy.js';
import './content-script-helpers.D7-AExPd.js';
import './jszip.HPtxegej.js';
import './howler.B9zQKWVB.js';
import './tippy.D2CvuMJV.js';

const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$4, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_1 = markRaw({ name: 'mdi-chevron-down', render: render$1 });
/* vite-plugin-components disabled */

const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$3, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0 = markRaw({ name: 'mdi-chevron-right', render });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$2 = {
	props: ['parent','books', 'subPageSource', 'parentCategoryIndex'],
	data() {
		return {
			showTags: false,
			tagGroups: [],
		}
	},
	
	watch: {
		showTags( open ) {
			
			let currentlyOpen = this.getOpenTags();
			
			// Remove
			_.remove(currentlyOpen, tag => tag == this.parentCategoryIndex);
			// Add			
			if ( open )  {
				currentlyOpen = currentlyOpen.concat([ this.parentCategoryIndex ]);
			}
			
      this.$updateQueries({ tagsOpen: currentlyOpen.join(',') });
			
		},
	},
	
	created() {
		
		// Reopen previously open tags on page load
		let currentlyOpen = this.getOpenTags();
		this.showTags = _.includes( currentlyOpen, _.toString(this.parentCategoryIndex) );
		
		// Compile tag groups from all books → book.tags
		this.getTagGroups();
		
	},
	
	methods: {
		
		getOpenTags() {
			
			let currentlyOpen = this.$route.query.tagsOpen || '';
					currentlyOpen = currentlyOpen.split(',');
					currentlyOpen = _.compact(currentlyOpen);
					
			return currentlyOpen;
			
		},
		
		getTagGroups() {
			
			let tags = [];
			
			// Combine tags from all books (in this main category) into a single mega array with duplicate tags
			// [ { name: action }, { name: action }, { name: fiction } ]
			const taggedBooks = this.books.filter( book => _.first(book.tags) );
			taggedBooks.forEach(book => {
				tags = tags.concat( book.tags );
			});
			
			// Group the array with duplicate tags by the tag name
			// { action: [ { name: action }, { name: action } ], fiction: [ { name: fiction } ] }
			let groups = _.groupBy( tags, 'name' );
					// Mutate the group value from an array to an object with name and length/number of books with the tag.
					// { action: { name: action, length: 2 }, fiction: { name: fiction, length: 1 } }
					groups = _.map( groups, (group) => {
						return {
							name: _.get(group, '0.name'),
							length: group.length,
						};
					});
					
					// Convert back into array (for simpler rendering)
					// [ { name: action, length: 2 }, { name: fiction, length: 1 } ]
					groups = _.map( groups, (group) => {
						return {
							name: group.name,
							length: group.length,
						}
					});
					
					// Sort by name
					groups = _.sortBy( groups, 'name' );
					
			// [ { name: action, length: 2 }, { name: fiction, length: 1 } ]
			this.tagGroups = groups;
			
		}
	},
};

const _hoisted_1$2 = {
  key: 0,
  class: "category-tags"
};
const _hoisted_2$2 = {
  key: 0,
  class: "number-of-books"
};

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mdi_chevron_right = __unplugin_components_0;
  const _component_mdi_chevron_down = __unplugin_components_1;
  const _component_router_link = resolveComponent("router-link");

  return ($data.tagGroups.length)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["category-tags-wrapper", { 'tags-open': $data.showTags, 'tags-closed': !$data.showTags }])
      }, [
        createBaseVNode("div", {
          class: "tags-toggle-btn",
          onClick: _cache[0] || (_cache[0] = $event => ($data.showTags = !$data.showTags))
        }, [
          createTextVNode(" Tags (" + toDisplayString($data.tagGroups.length) + ") ", 1),
          (!$data.showTags)
            ? (openBlock(), createBlock(_component_mdi_chevron_right, { key: 0 }))
            : (openBlock(), createBlock(_component_mdi_chevron_down, { key: 1 }))
        ]),
        ($data.showTags)
          ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.tagGroups, (tag) => {
                return (openBlock(), createElementBlock("div", {
                  class: "category-tag",
                  key: tag.name
                }, [
                  createVNode(_component_router_link, {
                    to: { 
						name: 'category', 
						params: { 
							parent: $props.parent.slug, 
						}, 
						query: { 
							subPageSource: $props.subPageSource.name,
							filterExtras: encodeURIComponent(`tags:${tag.name}`),
							tagTitle: tag.name,
						}, 
					}
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]),
                  (tag.length)
                    ? (openBlock(), createElementBlock("span", _hoisted_2$2, " (" + toDisplayString(tag.length) + ")", 1))
                    : createCommentVNode("", true)
                ]))
              }), 128))
            ]))
          : createCommentVNode("", true)
      ], 2))
    : createCommentVNode("", true)
}
const __unplugin_components_3 = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2],['__scopeId',"data-v-7aa5605d"]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */


const _sfc_main$1 = {
	mixins: [slugify, makeCoverUrl],
	props: ['parent', 'book', 'subPageSource'],
	
	data() {
		return {
			coversMax: 5
		}
	},
	
	computed: {
    randomBooks() {
      
      // Filter out books that can't be used a thumbnail
      let booksWithCategories = _.filter(this.parent.books, function( book ) { 
        return _.first(book.categories) && book.cover 
      });
      
      // Return a small number of random books to display from each parent category.
      return _.sampleSize(booksWithCategories, this.coversMax);
      
    },
	},
};

const _hoisted_1$1 = {
  key: 0,
  class: "sample-covers"
};
const _hoisted_2$1 = ["src"];

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return ($props.parent && $props.parent.books)
    ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.randomBooks, (book, index) => {
          return (openBlock(), createElementBlock("div", {
            class: "sample-cover",
            key: book.asin
          }, [
            createVNode(_component_router_link, {
              to: { 
				name: 'category', 
				params: { 
					parent: book.categories[0] ? _ctx.slugify(book.categories[0].name) : null, 
					child:  book.categories[1] ? _ctx.slugify(book.categories[1].name) : null 
				}, 
				query: { book: book.asin, subPageSource: $props.subPageSource.name }
			}
            }, {
              default: withCtx(() => [
                createBaseVNode("img", {
                  crossorigin: "anonymous",
                  src: _ctx.makeCoverUrl(book.cover),
                  alt: ""
                }, null, 8, _hoisted_2$1)
              ]),
              _: 2
            }, 1032, ["to"])
          ]))
        }), 128))
      ]))
    : createCommentVNode("", true)
}
const __unplugin_components_2 = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-8d33429a"]]);

/* unplugin-vue-components disabled */

const _sfc_main = {
  name: "aleCategories",
  mixins: [slugify, findSubPageSource],  
  data: function() {
    return {
      categories: null,
      listReady: false,
      pageTitle: 'Categories',
      pageSubTitle: null,
    };
  },
  
  methods: {
    
    makeCollection: function() {
      
      const vue = this;
      let categories = {};
      // Make category arrays
      categories.parent = [];
      _.each( vue.subPageSource.collection, function(book, index) {
        
        if ( book.categories ) {
          // Parent categories...
          const parentCategory = _.get( book, 'categories[0].name');
          // If parent category object doesn't exist, make it
          let parentObj = _.find(categories.parent, ["name", parentCategory]);
          if (!parentObj) {
            parentObj = categories.parent.push({
              name: parentCategory,
              slug: vue.slugify(parentCategory),
              books: []
            });
          }
          parentObj = _.find(categories.parent, ["name", parentCategory]);
          // Push books to array
          parentObj.books.push(book);

          // Child categories...
          const childCategory = _.get( book, 'categories[1].name');
          if ( childCategory ) {
            
            if ( !parentObj.sub ) parentObj.sub = [];
            
            // If child category object doesn't exist, make it
            let childObj = _.find(parentObj.sub, ["name", childCategory]);
            if (!childObj) {
              childObj = parentObj.sub.push({
                name: childCategory,
                slug: vue.slugify(childCategory),
                books: []
              });
            }
            childObj = _.find(parentObj.sub, ["name", childCategory]);
            // Push books to array
            childObj.books.push(book);
            
          }
        }
      });

      // Sort all category arrays
      categories.parent = _.orderBy(categories.parent, "name", "asc");
      _.each(categories.parent, function(category, index) {
        category.sub = _.orderBy(category.sub, "name", "asc");
      });
      
      this.categories = categories.parent;
      this.$store.commit("prop", { key: "pageCollection", value: [] });
      this.$store.commit("prop", { key: "mutatingCollection", value: [] });
      
      this.listReady = true;
      
    },
    
  }
};

const _hoisted_1 = {
  key: 0,
  id: "ale-categories",
  class: "box-layout-wrapper"
};
const _hoisted_2 = ["data-category"];
const _hoisted_3 = { key: 1 };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = {
  key: 2,
  class: "child-categories"
};
const _hoisted_7 = { key: 1 };
const _hoisted_8 = {
  key: 2,
  class: "number-of-books"
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_page_title = __unplugin_components_0$1;
  const _component_gallery_library_wishlist_switcher = __unplugin_components_1$1;
  const _component_router_link = resolveComponent("router-link");
  const _component_gallery_categories_page_random_thumbnails = __unplugin_components_2;
  const _component_gallery_categories_page_tags = __unplugin_components_3;
  const _directive_tippy = resolveDirective("tippy");

  return (_ctx.listReady)
    ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_gallery_page_title),
        createVNode(_component_gallery_library_wishlist_switcher),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.categories, (parent, parentCategoryIndex) => {
          return (openBlock(), createElementBlock("div", {
            class: "single-box",
            "data-category": parent.name,
            key: parent.name
          }, [
            createBaseVNode("h2", null, [
              (parent.slug)
                ? (openBlock(), createBlock(_component_router_link, {
                    key: 0,
                    to: { name: 'category', params: { parent: parent.slug, child: undefined }, query: { subPageSource: _ctx.subPageSource.name } }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(parent.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]))
                : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(parent.name), 1))
            ]),
            (parent.slug)
              ? (openBlock(), createBlock(_component_router_link, {
                  key: 0,
                  class: "books-total",
                  to: { name: 'category', params: { parent: parent.slug, child: undefined }, query: { subPageSource: _ctx.subPageSource.name } }
                }, {
                  default: withCtx(() => [
                    (parent.books)
                      ? withDirectives((openBlock(), createElementBlock("div", {
                          key: 0,
                          innerHTML: parent.books.length,
                          content: "Total number of books in this category."
                        }, null, 8, _hoisted_4)), [
                          [_directive_tippy, { placement: 'right' }]
                        ])
                      : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              : (parent.books)
                ? withDirectives((openBlock(), createElementBlock("div", {
                    key: 1,
                    innerHTML: parent.books.length,
                    content: "Total number of books in this category."
                  }, null, 8, _hoisted_5)), [
                    [_directive_tippy, { placement: 'right' }]
                  ])
                : createCommentVNode("", true),
            (parent.sub)
              ? (openBlock(), createElementBlock("div", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(parent.sub, (child, index) => {
                    return (openBlock(), createElementBlock("div", {
                      key: child.name
                    }, [
                      ((parent && parent.slug) && (child && child.slug))
                        ? (openBlock(), createBlock(_component_router_link, {
                            key: 0,
                            to: { name: 'category', params: { parent: parent.slug, child: child.slug }, query: { subPageSource: _ctx.subPageSource.name } }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(child.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"]))
                        : (openBlock(), createElementBlock("span", _hoisted_7)),
                      (child.books)
                        ? (openBlock(), createElementBlock("span", _hoisted_8, " (" + toDisplayString(child.books.length) + ")", 1))
                        : createCommentVNode("", true)
                    ]))
                  }), 128))
                ]))
              : createCommentVNode("", true),
            (parent && parent.books)
              ? (openBlock(), createBlock(_component_gallery_categories_page_random_thumbnails, {
                  key: 3,
                  parent: parent,
                  books: parent.books,
                  subPageSource: _ctx.subPageSource
                }, null, 8, ["parent", "books", "subPageSource"]))
              : createCommentVNode("", true),
            (parent.books)
              ? (openBlock(), createBlock(_component_gallery_categories_page_tags, {
                  key: 4,
                  parent: parent,
                  books: parent.books,
                  subPageSource: _ctx.subPageSource,
                  parentCategoryIndex: parentCategoryIndex
                }, null, 8, ["parent", "books", "subPageSource", "parentCategoryIndex"]))
              : createCommentVNode("", true)
          ], 8, _hoisted_2))
        }), 128))
      ]))
    : createCommentVNode("", true)
}
const galleryCategories = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-0f088f81"]]);

export { galleryCategories as default };
