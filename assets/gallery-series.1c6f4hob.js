import { _ as __unplugin_components_1 } from './gallery-lazy.BVsJ3eWf.js';
import { a as __unplugin_components_0 } from './gallery-search.DkKiNGb9.js';
import { f as findSubPageSource } from './gallery-findSubPageSource.CB10VwdW.js';
import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createVNode, a as createBaseVNode, F as Fragment, i as renderList, n as normalizeStyle, d as createCommentVNode, e as resolveComponent, r as resolveDirective, h as createBlock, j as withCtx, t as toDisplayString, w as withDirectives } from './lodash.Cy6RZ5mX.js';
import './gallery.CzMMdZ_k.js';
import './gallery-makeCoverUrl.BnX14Pi7.js';
import './jquery.3Hs3vqLI.js';
import './index.9Z32wZYy.js';
import './content-script-helpers.DZxzr4Lc.js';
import './jszip.BBGmtqMN.js';
import './howler.B9zQKWVB.js';
import './tippy.D2CvuMJV.js';
import './gallery-page-title.Bom0rECk.js';

/* unplugin-vue-components disabled */

const _sfc_main = {
  name: "aleSeries",
  mixins: [findSubPageSource],
  data: function () {
    return {
      collectionSource: 'pageCollection',
      pageTitle: 'Series',
      pageSubTitle: null,
      listReady: false,
    };
  },

  computed: {
    optionsOpenMargin: function () {

      if (this.$store.state.searchOptOpenHeight) {

        return {
          marginBottom: 0
        };

      } else {
        return false;
      }

    },
    galleryStyle: function () {

      if (this.$store.state.searchOptOpenHeight) {

        return {
          overflow: 'hidden',
          height: this.$store.state.searchOptOpenHeight - (this.$refs.wrapper.offsetTop * 2) + 'px',
        };

      } else {
        return false;
      }

    },
  },

  methods: {

    makeCollection: function () {
      const vue = this;
      const seriesCollection = [];
      let addedCounter = 1;

      // LOOP BOOKS
      // Processed in reverse order so that the "added" order is based on the first book added to the library of each series.
      _.eachRight(vue.subPageSource.collection, (book) => {
        // LOOP SERIES
        _.each(_.get(book, 'series'), (series) => {
          
          // Find an existing entry in our series collection
          const seriesAdded = _.find(seriesCollection, {asin: series.asin});
          // Find the series in our library
          const librarySeries = _.find(this.$store.state.library.series, {asin: series.asin});

          // If we have an existing series in our series collection (which we're building over time), use it...
          // Otherwise, create a new series to add and increment our counter
          const currentObj = seriesAdded ?? {
            books     : [],
            added     : addedCounter++,
            name      : series.name,
            asin      : series.asin,
            authors   : book.authors,
            narrators : book.narrators,
            publishers: book.publishers,
            minRating : _.toNumber(book.myRating),
          };
          
          // If we this series in our library, we can add some extra goodies to the series
          if (librarySeries) {
            // The assumption is that in most situations you won't be buying multiple versions of a book, so duplicates are removed,
            // because multiple versions of books make it so that some series will always be considered incomplete...
            // I was thinking this could be cool in the "My books in the series list" too, but it's too unreliable for that purpose.

            function parseBookNumbers(bookNumbers) {
              return (bookNumbers||'').split("-").map(_.toNumber).filter(_.isFinite);
            }
            function getBookNumbers(books) {
              return _.flatMap(books.map(b => parseBookNumbers(b.bookNumbers)))
            }
            function getMaxBookNumber(books) {
              return _.max(getBookNumbers(books));
            }

            // Show all books for now
            librarySeries.allBooksMinusDupes = vue.removeDuplicates(librarySeries.allBooks);
            // librarySeries.allBooksMinusDupes = librarySeries.allBooks;
            
            const ownedBooks = _.filter( librarySeries.allBooksMinusDupes, ( book ) => {
              return _.includes(librarySeries.books, book.asin);
            });
            
            currentObj.allBooks = librarySeries.allBooks || [];
            currentObj.allBooksMinusDupes = librarySeries.allBooksMinusDupes;
            currentObj.myMaxBookNumber = getMaxBookNumber(ownedBooks);
            currentObj.maxBookNumber = getMaxBookNumber(librarySeries.allBooksMinusDupes);
            currentObj.missingLatest = currentObj.myMaxBookNumber < currentObj.maxBookNumber;
            currentObj.minRating = this.calcMinRating(currentObj, book);
          }

          // Add the book we're processing to the series book list
          currentObj.books.push(book.title || book.shortTitle);

          // If this is a new series, add it to the series collection
          if (!seriesAdded) {
            seriesCollection.push(currentObj);
          }
        });
      });
      
      _.reverse(seriesCollection);

      this.$store.commit("prop", {key: "pageCollection", value: seriesCollection});
      this.updateListRenderingOptions();
      this.listReady = true;
    },

    updateListRenderingOptions: function () {
      let vue = this;
      let list = {
        scope: [
          { active: true, key: 'name',            tippy: 'Search series by name',        weight: 5 },
          { active: true, key: 'books',           tippy: 'Search series by book titles', weight: 1 },
          { active: true, key: 'authors.name',    tippy: 'Search series by authors',     weight: 1 },
          { active: true, key: 'narrators.name',  tippy: 'Search series by narrators',   weight: 1 },
          { active: true, key: 'publishers.name', tippy: 'Search series by publishers',  weight: 1 },
        ],
        filter: [
          {
            active: false,
            type: 'filterExtras',
            label: 'Number of owned books',
            key: 'inSeries',
            range: [1, (function () {
              let series = _.get(vue.$store.state, vue.collectionSource);
              let max = _.maxBy(series, function (series) {
                if (series.books) return series.books.length;
              });
              return max ? max.books.length : 1;
            }())],
            rangeMinDist: 0,
            rangeSuffix: '',
            rangeMin: function () {
              return 1;
            },
            rangeMax: function () {
              let series = _.get(vue.$store.state, vue.collectionSource);
              let max = _.maxBy(series, function (series) {
                if (series.books) return series.books.length;
              });
              return max ? max.books.length : 1;
            },
            condition: function (series) {
              if (series.books) {
                let min = this.range[0];
                let max = this.range[1];
                return series.books.length >= min && series.books.length <= max;
              }
            }
          },
          {
            excludeFromWishlist: true,
            type: 'divider',
            key: 'divider1.0'
          },
          {
            excludeFromWishlist: true,
            active: false,
            type: 'filterExtras',
            label: 'Rating (min)',
            tippy: 'Based on the book you rated lowest in the series',
            key: 'min-rating',
            condition: function (series) {
              return (series.minRating || 0) >= this.range[0];
            },
            range: true,
            rangeMin: () => 1,
            rangeMax: () => 5,
            rangeMinDist: 0,
            rangeSuffix: '',
            tooltipFormatter: function (val) {
              switch (val) {
                case 1:
                  return val + ' (Not for me)';
                case 2:
                  return val + ' (It’s okay)';
                case 3:
                  return val + ' (Pretty good)';
                case 4:
                  return val + ' (It’s great)';
                case 5:
                  return val + ' (I love it)';
                default: 
                  return 0;
              }
            },
          },
          {
            excludeFromWishlist: true,
            type: 'divider',
            key: 'divider1.1'
          },
          {
            excludeFromWishlist: true,
            active: false,
            type: 'filterExtras',
            label: 'Incomplete series',
            key: 'series-incomplete',
            tippy: "Series in which I don't own all the books",
            condition: function (series) {
              return series.allBooksMinusDupes.length > series.books.length;
            }
          },
          {
            excludeFromWishlist: true,
            type: 'divider',
            key: 'divider1.2'
          },
          {
            excludeFromWishlist: true,
            active: false,
            type: 'filterExtras',
            label: 'Missing latest book',
            key: 'missing-latest',
            condition: (series) => series?.missingLatest,
          },
        ],
        sort: [
          {
            active: false,
            key: 'randomize',
            label: 'Randomize',
            type: 'sortExtras',
            tippy: "Ignores sorting and randomizes instead unless there's an active search."
          },
          {type: 'divider', key: 'divider1'},
          // active: true = arrow down / descending
          {
            active: true,
            current: true,
            key: 'added',
            label: 'Added',
            type: 'sort',
            tippy: '<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'
          },
          {active: true, current: false, key: 'name', label: 'Name', type: 'sort', tippy: "Sort by series name"},
          {
            active: false,
            current: false,
            key: 'amount',
            label: 'Number of owned books',
            type: 'sort',
          },
          {
            excludeFromWishlist: true,
            active: false,
            current: false,
            key: 'amountTotal',
            label: 'Total number of books',
            type: 'sort',
          },
          {
            excludeFromWishlist: true,
            active: false,
            current: false,
            key: 'missing',
            label: 'Missing',
            tippy: 'Number of missing books',
            type: 'sort',
          },
        ],
      };

      if (this.subPageSource.wishlist) {
        list.filter = _.filter(list.filter, function (o) {
          return !o.excludeFromWishlist;
        });
        list.sort = _.filter(list.sort, function (o) {
          return !o.excludeFromWishlist;
        });
      }

      this.$setListRenderingOpts(list);

    },

    // Basically drops out all other versions of books you already own (tries to anyways)
    removeDuplicates: function (books) {
      // Logic - Remove duplicate books from series:
      // - Compare book numbers and remove duplicates prioritizing books in the library
      // - Needs to be an exact match: "0.3, 0.5, 1" !== "1"
      // - Any kind of bundles will be ignored, even if you have separate book copies from the bundle.
      // - Of course identical bundle numbers are considered duplicates
      // Simply put:
      // 1. Book in library: always keep
      // 2. Not in Library: remove if it exists in the library and if there are multiple books (not in library) make sure only one is kept

      let dollybooks = _.clone(books);
      // const inLibrary = _.filter( dollybooks, function( book ) { return !book.notInLibrary;  });
      // const notInLibrary = _.filter( dollybooks, function( book ) { return book.notInLibrary;  });

      var n = 0;
      _.each(dollybooks, function (book) {
        book.order = ++n;
      });

      dollybooks = _.groupBy(dollybooks, 'bookNumbers');

      _.each(dollybooks, function (chunk, i) {

        if (chunk.length === 1) {
          dollybooks[i] = [chunk[0]];
        } else {
          var inLibrary = _.filter(chunk, function (o) {
            return !o.notInLibrary
          });
          if (inLibrary.length > 0) {
            dollybooks[i] = inLibrary;
          } else {
            dollybooks[i] = [chunk[0]];
          }
        }

      });

      dollybooks = _.map(dollybooks, function (o) {
        return o;
      });
      dollybooks = _.flatten(dollybooks);
      dollybooks = _.orderBy(dollybooks, 'order', 'asc');

      return dollybooks;

    },
    
    calcMinRating( obj, book ) {
      
      let ratings = [obj.minRating, book.myRating];
          ratings = _.map(ratings, _.toNumber);
          ratings = _.filter(ratings, _.isFinite);
          
      return _.min( ratings );
      
    },
  },

};

const _hoisted_1 = {
  key: 0,
  class: "books-total",
  content: "Total number of books in this series."
};
const _hoisted_2 = { key: 0 };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_search = __unplugin_components_0;
  const _component_router_link = resolveComponent("router-link");
  const _component_gallery_lazy = __unplugin_components_1;
  const _directive_tippy = resolveDirective("tippy");

  return (_ctx.listReady)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: "ale-series",
        class: "box-layout-wrapper",
        style: normalizeStyle($options.optionsOpenMargin),
        ref: "wrapper"
      }, [
        createVNode(_component_gallery_search, { collectionSource: _ctx.collectionSource }, null, 8, ["collectionSource"]),
        createBaseVNode("div", {
          style: normalizeStyle($options.galleryStyle),
          class: "page-content"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$store.getters.collection, (item, index) => {
            return (openBlock(), createBlock(_component_gallery_lazy, {
              class: "single-box",
              "data-asin": item.asin,
              key: 'series:'+item.asin
            }, {
              default: withCtx(() => [
                createVNode(_component_router_link, {
                  to: { name: 'series', params: { series: item.asin }, query: { subPageSource: _ctx.subPageSource.name } }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("h2", null, toDisplayString(item.name), 1),
                    (item.books && item.books.length)
                      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
                          createBaseVNode("span", null, toDisplayString(item.books.length), 1),
                          (_ctx.allBooks && _ctx.allBooks.length)
                            ? (openBlock(), createElementBlock("span", _hoisted_2, " of " + toDisplayString(item.allBooks.length), 1))
                            : createCommentVNode("", true)
                        ])), [
                          [_directive_tippy, { placement: 'right' }]
                        ])
                      : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1032, ["data-asin"]))
          }), 128))
        ], 4)
      ], 4))
    : createCommentVNode("", true)
}
const gallerySeries = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-c4c10036"]]);

export { gallerySeries as default };
