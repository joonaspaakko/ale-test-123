import { V as VueSlider, c as slugify, f as __unplugin_components_5, g as __unplugin_components_4$1 } from './gallery.CzMMdZ_k.js';
import { m as markRaw, o as openBlock, c as createElementBlock, a as createBaseVNode, a8 as toRefs, L as ref, R as getCurrentInstance, S as onMounted, U as onBeforeUnmount, K as watch, d as createCommentVNode, a0 as mergeProps, f as withModifiers, g as normalizeClass, F as Fragment, i as renderList, p as renderSlot, u as withKeys, t as toDisplayString, h as createBlock, Z as Teleport, D as shallowRef, a9 as customRef, J as computed, M as nextTick, _ as _export_sfc, w as withDirectives, y as vModelCheckbox, b as createVNode, s as createTextVNode, r as resolveDirective, e as resolveComponent, n as normalizeStyle, v as vShow } from './lodash.Cy6RZ5mX.js';
import { _ as __unplugin_components_1$2 } from './gallery-findSubPageSource.CB10VwdW.js';
import { _ as __unplugin_components_0$3 } from './gallery-page-title.Bom0rECk.js';
import { e as timeStringToSeconds, F as Fuse } from './content-script-helpers.DZxzr4Lc.js';

const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};

function render$6(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$a, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2"
    }, null, -1)
  ]))]))
}

const __unplugin_components_4 = markRaw({ name: 'ic-round-square', render: render$6 });
/* vite-plugin-components disabled */

const _hoisted_1$9 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$5(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$9, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M256 56c110.532 0 200 89.451 200 200c0 110.532-89.451 200-200 200c-110.532 0-200-89.451-200-200c0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80s80-35.817 80-80s-35.817-80-80-80"
    }, null, -1)
  ]))]))
}

const __unplugin_components_3$1 = markRaw({ name: 'fa-regular-dot-circle', render: render$5 });
/* vite-plugin-components disabled */

const _hoisted_1$8 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$4(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$8, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200"
    }, null, -1)
  ]))]))
}

const __unplugin_components_2$1 = markRaw({ name: 'fa-regular-circle', render: render$4 });
/* vite-plugin-components disabled */

const _hoisted_1$7 = {
  viewBox: "0 0 320 512",
  width: "0.76em",
  height: "1.2em"
};

function render$3(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$7, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 224.1 32 224.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_1$1 = markRaw({ name: 'fa6-solid-sort-up', render: render$3 });
/* vite-plugin-components disabled */

const _hoisted_1$6 = {
  viewBox: "0 0 320 512",
  width: "0.76em",
  height: "1.2em"
};

function render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$6, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$2 = markRaw({ name: 'fa6-solid-sort-down', render: render$2 });
/* vite-plugin-components disabled */

function isNullish (val) {
  return val === null || val === undefined
}

function useData (props, context, dep)
{
  const { object, valueProp, mode } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;

  // =============== METHODS ==============

  const update = (val, triggerInput = true) => {
    // Setting object(s) as internal value
    iv.value = makeInternal(val);

    // Setting object(s) or plain value as external 
    // value based on `option` setting
    const externalVal = makeExternal(val);

    context.emit('change', externalVal, $this);

    if (triggerInput) {
      context.emit('input', externalVal);
      context.emit('update:modelValue', externalVal);
    }
  }; 

  // no export
  const makeExternal = (val) => {
    // If external value should be object
    // no transformation is required
    if (object.value) {
      return val
    }

    // No need to transform if empty value
    if (isNullish(val)) {
      return val
    }

    // If external should be plain transform
    // value object to plain values
    return !Array.isArray(val) ? val[valueProp.value] : val.map(v => v[valueProp.value])
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === 'single' ? {} : []
    }

    return val
  };

  return {
    update,
  }
}

// Polyfill for Vue <3.3 for getters only
// https://vuejs.org/api/reactivity-utilities.html#toref
function toRef (get) {
    return customRef(() => ({ get, set: /* istanbul ignore next */ () => { } }))
}

function useValue (props, context)
{
  const { value, modelValue, mode, valueProp } = toRefs(props);

  // ================ DATA ================

  // internalValue
  const iv = ref(mode.value !== 'single' ? [] : {});

  // ============== COMPUTED ==============

  /* istanbul ignore next */
  // externalValue
  const ev = toRef(() => {
    return modelValue.value !== undefined ? modelValue.value : value.value
  });

  const plainValue = computed(() => {
    return mode.value === 'single' ? iv.value[valueProp.value] : iv.value.map(v=>v[valueProp.value])
  });

  const textValue = toRef(() => {
    return mode.value !== 'single' ? iv.value.map(v=>v[valueProp.value]).join(',') : iv.value[valueProp.value]
  });

  return {
    iv,
    internalValue: iv,
    ev,
    externalValue: ev,
    textValue,
    plainValue,
  }
}

function useSearch (props, context, dep)
{
  const { regex } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const open = dep.open;

  // ================ DATA ================

  const search = ref(null);

  // =============== METHODS ==============

  const clearSearch = () => {
    search.value = '';
  };

  const handleSearchInput = (e) => {
    search.value = e.target.value;
  };

  const handleKeypress = (e) => {
    if (regex.value) {
      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }

      if (!e.key.match(regexp)) {
        e.preventDefault();
      }
    }
  };

  const handlePaste = (e) => {
    if (regex.value) {
      let clipboardData = e.clipboardData || /* istanbul ignore next */ window.clipboardData;
      let pastedData = clipboardData.getData('Text');

      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }
      
      if (!pastedData.split('').every(c => !!c.match(regexp))) {
        e.preventDefault();
      }
    }

    context.emit('paste', e, $this);
  };

  // ============== WATCHERS ==============

  watch(search, (val) => {
    if (!isOpen.value && val) {
      open();
    }

    context.emit('search-change', val, $this);
  });

  return {
    search,
    clearSearch,
    handleSearchInput,
    handleKeypress,
    handlePaste,
  }
}

function usePointer$1 (props, context, dep)
{
  const { groupSelect, mode, groups, disabledProp } = toRefs(props);

  // ================ DATA ================

  const pointer = ref(null);

  // =============== METHODS ==============

  const setPointer = (option) => {
    if (option === undefined || (option !== null && option[disabledProp.value])) {
      return
    }

    if (groups.value && option && option.group && (mode.value === 'single' || !groupSelect.value)) {
      return
    }

    pointer.value = option;
  };

  const clearPointer = () => {
    setPointer(null);
  };

  return {
    pointer,
    setPointer,
    clearPointer,
  }
}

function normalize (str, strict = true) {
  return strict
    ? String(str).toLowerCase().trim()
    : String(str).toLowerCase()
                 .normalize('NFD')
                 .trim()
                 .replace(/æ/g, 'ae')
                 .replace(/œ/g, 'oe')
                 .replace(/ø/g, 'o')
                 .replace(/\p{Diacritic}/gu, '')
}

function isObject (variable) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

function arraysEqual (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  const array2Sorted = array2.slice().sort();

  return array1.slice().sort().every(function(value, index) {
      return value === array2Sorted[index];
  })
}

/* istanbul ignore next */
const objectsEqual = (obj1, obj2) => {
  // If both are strictly equal, return true
  if (obj1 === obj2) {
    return true
  }

  // If either is not an object or is null, return false (handles primitive types and null)
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If they have a different number of keys, they're not equal
  if (keys1.length !== keys2.length) {
    return false
  }

  // Compare each key-value pair recursively
  for (let key of keys1) {
    // Check if both objects have the same key
    if (!keys2.includes(key)) {
      return false
    }

    // Recursively compare the values
    if (!objectsEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
};

function useOptions (props, context, dep)
{
  const { 
    options, mode, trackBy: trackBy_, limit, hideSelected, createTag, createOption: createOption_, label,
    appendNewTag, appendNewOption: appendNewOption_, multipleLabel, object, loading, delay, resolveOnLoad,
    minChars, filterResults, clearOnSearch, clearOnSelect, valueProp, allowAbsent, groupLabel,
    canDeselect, max, strict, closeOnSelect, closeOnDeselect, groups: groupped, reverse, infinite,
    groupOptions, groupHideEmpty, groupSelect, onCreate, disabledProp, searchStart, searchFilter,
  } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const ev = dep.ev;
  const search = dep.search;
  const clearSearch = dep.clearSearch;
  const update = dep.update;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const focus = dep.focus;
  const deactivate = dep.deactivate;
  const close = dep.close;
  const localize = dep.localize;

  // ================ DATA ================

  // no export
  // appendedOptions
  const ap = ref([]);

  // no export
  // resolvedOptions
  const ro = ref([]);

  const resolving = ref(false);

  // no export
  const searchWatcher = ref(null);

  const offset = ref(infinite.value && limit.value === -1 ? 10 : limit.value);

  // ============== COMPUTED ==============

  const resolvedOptions = computed({
    get: () => ro.value,
    set: (v) => ro.value = v
  });

  // no export
  const createOption = toRef(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const appendNewOption = toRef(() => {
    if (appendNewTag.value !== undefined) {
      return appendNewTag.value
    } else if (appendNewOption_.value !== undefined) {
      return appendNewOption_.value
    }

    return true
  });

  // no export
  // extendedOptions
  const eo = computed(() => {
    if (groupped.value) {
      let groups = eg.value || /* istanbul ignore next */ [];

      let eo = [];

      groups.forEach((group) => {
        optionsToArray(group[groupOptions.value]).forEach((option) => {
          eo.push(Object.assign({}, option, group[disabledProp.value] ? { [disabledProp.value]: true } : {}));
        });
      });

      return eo
    } else {
      let eo = optionsToArray(ro.value || /* istanbul ignore next */ []);

      if (ap.value.length) {
        eo = eo.concat(ap.value);
      }

      return eo
    }
  });

  // preFilteredOptions
  const pfo = computed(() => {
    let options = eo.value;

    if (reverse.value) {
      options = options.reverse();
    }

    if (createdOption.value.length) {
      options = createdOption.value.concat(options);
    }

    return filterOptions(options)
  });

  // filteredOptions
  const fo = computed(() => {
    let options = pfo.value;

    if (offset.value > 0) {
      options = options.slice(0, offset.value);
    }

    return options
  });

  // no export
  // extendedGroups
  const eg = computed(() => {
    if (!groupped.value) {
      return []
    }

    let eg = [];
    let groups = ro.value || /* istanbul ignore next */ [];

    if (ap.value.length) {
      eg.push({
        [groupLabel.value]: ' ',
        [groupOptions.value]: [...ap.value],
        __CREATE__: true
      });
    }

    return eg.concat(groups)
  });

  // preFilteredGroups
  const pfg = computed(() => {
    let groups = [...eg.value].map(g => ({...g}));

    if (createdOption.value.length) {
      if (groups[0] && groups[0].__CREATE__) {
        groups[0][groupOptions.value] = [...createdOption.value, ...groups[0][groupOptions.value]];
      } else {
        groups = [{
          [groupLabel.value]: ' ',
          [groupOptions.value]: [...createdOption.value],
          __CREATE__: true
        }].concat(groups);
      }
    }

    return groups
  });

  // filteredGroups
  const fg = computed(() => {
    if (!groupped.value) {
      return []
    }

    let options = pfg.value;

    return filterGroups((options || /* istanbul ignore next */ []).map((group, index) => {
      const arrayOptions = optionsToArray(group[groupOptions.value]);

      return {
        ...group,
        index,
        group: true,
        [groupOptions.value]: filterOptions(arrayOptions, false).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
        __VISIBLE__: filterOptions(arrayOptions).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
      }
      // Difference between __VISIBLE__ and {groupOptions}: visible does not contain selected options when hideSelected=true
    }))
  });

  const hasSelected = computed(() => {
    switch (mode.value) {
      case 'single':
        return !isNullish(iv.value[valueProp.value])

      case 'multiple':
      case 'tags':
        return !isNullish(iv.value) && iv.value.length > 0
    }
  });

  const multipleLabelText = computed(() => {
    return multipleLabel.value !== undefined
      ? multipleLabel.value(iv.value, $this)
      : (iv.value && iv.value.length > 1 ? `${iv.value.length} options selected` : `1 option selected`)
  });

  const noOptions = toRef(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length
  });


  const noResults = toRef(() => {
    return eo.value.length > 0 && fo.value.length == 0 && ((search.value && groupped.value) || !groupped.value)
  });

  // no export
  const createdOption = computed(() => {
    if (createOption.value === false || !search.value) {
      return []
    }

    if (getOptionByTrackBy(search.value) !== -1) {
      return []
    }

    return [{
      [valueProp.value]: search.value,
      [trackBy.value[0]]: search.value,
      [label.value]: search.value,
      __CREATE__: true,
    }]
  });

  const trackBy = computed(() => {
    return trackBy_.value ? (Array.isArray(trackBy_.value) ? trackBy_.value : [trackBy_.value]) : [label.value]
  });

  // no export
  const nullValue = toRef(() => {
    switch (mode.value) {
      case 'single':
        return null

      case 'multiple':
      case 'tags':
        return []
    }
  });

  const busy = toRef(() => {
    return loading.value || resolving.value
  });

  // =============== METHODS ==============

  /**
   * @param {array|object|string|number} option 
   */
  const select = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        update(option);
        break

      case 'multiple':
      case 'tags':
        update((iv.value).concat(option));
        break
    }

    context.emit('select', finalValue(option), option, $this);
  };

  const deselect = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        clear();
        break

      case 'tags':
      case 'multiple':
        update(Array.isArray(option)
          ? iv.value.filter(v => option.map(o => o[valueProp.value]).indexOf(v[valueProp.value]) === -1)
          : iv.value.filter(v => v[valueProp.value] != option[valueProp.value]));
        break
    }

    context.emit('deselect', finalValue(option), option, $this);
  };

  // no export
  const finalValue = (option) => {
    return object.value ? option : option[valueProp.value]
  };

  const remove = (option) => {
    deselect(option);
  };

  const handleTagRemove = (option, e) => {
    if (e.button !== 0) {
      e.preventDefault();
      return
    }

    remove(option);
  };

  const clear = () => {
    update(nullValue.value);
    context.emit('clear', $this);
  };

  const isSelected = (option) => {
    if (option.group !== undefined) {
      return mode.value === 'single' ? false : areAllSelected(option[groupOptions.value]) && option[groupOptions.value].length
    }

    switch (mode.value) {
      case 'single':
        return !isNullish(iv.value) && (
          iv.value[valueProp.value] == option[valueProp.value] ||
          (typeof iv.value[valueProp.value] === 'object' && typeof option[valueProp.value] === 'object' && objectsEqual(iv.value[valueProp.value], option[valueProp.value]))
        )

      case 'tags':
      case 'multiple':
        return !isNullish(iv.value) && iv.value.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    }
  };

  const isDisabled = (option) => {
    return option[disabledProp.value] === true
  };

  const isMax = () => {
    if (max === undefined || max.value === -1 || (!hasSelected.value && max.value > 0)) {
      return false
    }
    
    return iv.value.length >= max.value
  };

  const handleOptionClick = (option) => {
    if (isDisabled(option)) {
      return
    }

    if (onCreate.value && !isSelected(option) && option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;

      option = onCreate.value(option, $this);
      
      if (option instanceof Promise) {
        resolving.value = true;
        option.then((result) => {
          resolving.value = false;
          handleOptionSelect(result);
        });

        return
      } 
    }

    handleOptionSelect(option);
  };

  const handleOptionSelect = (option) => {
    if (option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
    }
    
    switch (mode.value) {
      case 'single':
        if (option && isSelected(option)) {
          if (canDeselect.value) {
            deselect(option);
          }

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        /* istanbul ignore else */
        if (clearOnSelect.value) {
          clearSearch();
        }

        if (closeOnSelect.value) {
          clearPointer();
          close();
        }

        if (option) {
          select(option);
        }
        break

      case 'multiple':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
          select(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break

      case 'tags':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (option) {
          select(option);
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break
    }

    if (!closeOnSelect.value) {
      focus();
    }
  };

  const handleGroupClick = (group) => {
    if (isDisabled(group) || mode.value === 'single' || !groupSelect.value) {
      return
    }

    switch (mode.value) {
      case 'multiple':
      case 'tags':
        if (areAllEnabledSelected(group[groupOptions.value])) {
          deselect(group[groupOptions.value]);
        } else {
          select(group[groupOptions.value]
            .filter(o => iv.value.map(v => v[valueProp.value]).indexOf(o[valueProp.value]) === -1)
            .filter(o => !o[disabledProp.value])
            .filter((o, k) => iv.value.length + 1 + k <= max.value || max.value === -1)
          );
        }

        if (hideSelected.value && pointer.value) {
          // Refresh pointer because pointer.__VISIBLE__ are not reactive #354
          setPointer(fg.value.filter(g => !g[disabledProp.value])[pointer.value.index]);
        }
        break
    }

    if (closeOnSelect.value) {
      deactivate();
    }
  };

  const handleOptionAppend = (option) => {
    if (getOption(option[valueProp.value]) === undefined && createOption.value) {
      context.emit('tag', option[valueProp.value], $this);
      context.emit('option', option[valueProp.value], $this);
      context.emit('create', option[valueProp.value], $this);

      if (appendNewOption.value) {
        appendOption(option);
      }

      clearSearch();
    }
  };

  const selectAll = () => {
    if (mode.value === 'single') {
      return
    }

    select(fo.value.filter(o => !o.disabled && !isSelected(o)));
  };

  // no export
  const areAllEnabledSelected = (options) => {
    return options.find(o => !isSelected(o) && !o[disabledProp.value]) === undefined
  };

  // no export
  const areAllSelected = (options) => {
    return options.find(o => !isSelected(o)) === undefined
  };

  const getOption = (val) => {
    return eo.value[eo.value.map(o => String(o[valueProp.value])).indexOf(String(val))]
  };

  // no export
  const getOptionByTrackBy = (val) => {
    return eo.value.findIndex((o) => {
      return trackBy.value.some((track) => {
        return (parseInt(o[track]) == o[track] ? parseInt(o[track]) : o[track]) === (parseInt(val) == val ? parseInt(val) : val)
      })
    })
  };

  // no export
  const shouldHideOption = (option) => {
    return ['tags', 'multiple'].indexOf(mode.value) !== -1 && hideSelected.value && isSelected(option)
  };

  // no export
  const appendOption = (option) => {
    ap.value.push(option);
  };

  // no export
  const filterGroups = (groups) => {
    // If the search has value we need to filter among 
    // the ones that are visible to the user to avoid
    // displaying groups which technically have options
    // based on search but that option is already selected.
    return groupHideEmpty.value
      ? groups.filter(g => search.value
          ? g.__VISIBLE__.length
          : g[groupOptions.value].length
        )
      : groups.filter(g => search.value ? g.__VISIBLE__.length : true)
  };

  // no export
  const filterOptions = (options, excludeHideSelected = true) => {
    let fo = options;
    
    if (search.value && filterResults.value) {
      let filter = searchFilter.value;

      if (!filter) {
        filter = (option, query, $this) => {
          return trackBy.value.some(track => {
            let target = normalize(localize(option[track]), strict.value);

            return searchStart.value
                ? target.startsWith(normalize(query, strict.value))
                : target.indexOf(normalize(query, strict.value)) !== -1;
          })
        };
      }

      fo = fo.filter((o) => {
        return filter(o, search.value, $this)
      });
    }

    if (hideSelected.value && excludeHideSelected) {
      fo = fo.filter((option) => !shouldHideOption(option));
    }

    return fo
  };

  // no export
  const optionsToArray = (options) => {
    let uo = options;
    
    // Transforming an object to an array of objects
    if (isObject(uo)) {
      uo = Object.keys(uo).map((key) => {
        let val = uo[key];

        return { [valueProp.value]: key, [trackBy.value[0]]: val, [label.value]: val}
      });
    }

    // Transforming an plain arrays to an array of objects
    /* istanbul ignore else */
    if (uo && Array.isArray(uo)) {
      uo = uo.map((val) => {
        return typeof val === 'object' ? val : { [valueProp.value]: val, [trackBy.value[0]]: val, [label.value]: val}
      });
    } else {
      uo = [];
    }

    return uo
  };

  // no export
  const initInternalValue = () => {
    if (!isNullish(ev.value)) {
      iv.value = makeInternal(ev.value);
    }
  };

  const resolveOptions = (callback) => {
    resolving.value = true;

    return new Promise((resolve, reject) => {
      options.value(search.value, $this).then((response) => {
        ro.value = response || [];

        if (typeof callback == 'function') {
          callback(response);
        }

        resolving.value = false;
      }).catch((e) => {
        console.error(e);

        ro.value = [];

        resolving.value = false;
      }).finally(() => {
        resolve();
      });
    })
  };

  // no export
  const refreshLabels = () => {
    if (!hasSelected.value) {
      return
    }

    if (mode.value === 'single') {
      let option = getOption(iv.value[valueProp.value]);

      /* istanbul ignore else */
      if (option !== undefined) {
        let newLabel = option[label.value];

        iv.value[label.value] = newLabel;

        if (object.value) {
          ev.value[label.value] = newLabel;
        }
      }
    } else {
      iv.value.forEach((val, i) => {
        let option = getOption(iv.value[i][valueProp.value]);

        /* istanbul ignore else */
        if (option !== undefined) {
          let newLabel = option[label.value];

          iv.value[i][label.value] = newLabel;

          if (object.value) {
            ev.value[i][label.value] = newLabel;
          }
        }
      });
    }
  };

  const refreshOptions = (callback) => {
    resolveOptions(callback);
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === 'single' ? {} : []
    }

    if (object.value) {
      return val
    }

    // If external should be plain transform value object to plain values
    return mode.value === 'single' ? getOption(val) || (allowAbsent.value ? {
      [label.value]: val,
      [valueProp.value]: val,
      [trackBy.value[0]]: val,
    } : {}) : val.filter(v => !!getOption(v) || allowAbsent.value).map(v => getOption(v) || {
      [label.value]: v,
      [valueProp.value]: v,
      [trackBy.value[0]]: v,
    })
  };

  // no export
  const initSearchWatcher = () => {
    searchWatcher.value = watch(search, (query) => {
      if (query.length < minChars.value || (!query && minChars.value !== 0)) {
        return
      }

      resolving.value = true;

      if (clearOnSearch.value) {
        ro.value = [];
      }
      setTimeout(() => {
        if (query != search.value) {
          return
        }

        options.value(search.value, $this).then((response) => {
          if (query == search.value || !search.value) {
            ro.value = response;
            pointer.value = fo.value.filter(o => o[disabledProp.value] !== true)[0] || null;
            resolving.value = false;
          }
        }).catch( /* istanbul ignore next */ (e) => {
          console.error(e);
        });
      }, delay.value);

    }, { flush: 'sync' });
  };

  // ================ HOOKS ===============

  if (mode.value !== 'single' && !isNullish(ev.value) && !Array.isArray(ev.value)) {
    throw new Error(`v-model must be an array when using "${mode.value}" mode`)
  }

  if (options && typeof options.value == 'function') {
    if (resolveOnLoad.value) {
      resolveOptions(initInternalValue);
    } else if (object.value == true) {
      initInternalValue();
    }
  }
  else {
    ro.value = options.value;

    initInternalValue();
  }
  
  // ============== WATCHERS ==============

  if (delay.value > -1) {
    initSearchWatcher();
  }

  watch(delay, (value, old) => {
    /* istanbul ignore else */
    if (searchWatcher.value) {
      searchWatcher.value();
    }

    if (value >= 0) {
      initSearchWatcher();
    }
  });

  watch(ev, (newValue) => {
    if (isNullish(newValue)) {
      update(makeInternal(newValue), false);
      return
    }

    switch (mode.value) {
      case 'single':
        if (object.value ? newValue[valueProp.value] != iv.value[valueProp.value] : newValue != iv.value[valueProp.value]) {
          update(makeInternal(newValue), false);
        }
        break

      case 'multiple':
      case 'tags':
        if (!arraysEqual(object.value ? newValue.map(o => o[valueProp.value]) : newValue, iv.value.map(o => o[valueProp.value]))) {
          update(makeInternal(newValue), false);
        }
        break
    }
  }, { deep: true });

  watch(options, (n, o) => {
    if (typeof props.options === 'function') {
      if (resolveOnLoad.value && (!o || (n && n.toString() !== o.toString()))) {
        resolveOptions();
      }
    } else {
      ro.value = props.options;

      if (!Object.keys(iv.value).length) {
        initInternalValue();
      }

      refreshLabels();
    }
  });

  watch(label, refreshLabels);

  watch(limit, (n,o) => {
    offset.value = infinite.value && n === -1 ? 10 : n;
  });

  return {
    resolvedOptions,
    pfo,
    fo,
    filteredOptions: fo,
    hasSelected,
    multipleLabelText,
    eo,
    extendedOptions: eo,
    eg,
    extendedGroups: eg,
    fg,
    filteredGroups: fg,
    noOptions,
    noResults,
    resolving,
    busy,
    offset,
    select,
    deselect,
    remove,
    selectAll,
    clear,
    isSelected,
    isDisabled,
    isMax,
    getOption,
    handleOptionClick,
    handleGroupClick,
    handleTagRemove,
    refreshOptions,
    resolveOptions,
    refreshLabels,
  }
}

function usePointer (props, context, dep)
{
  const {
    valueProp, showOptions, searchable, groupLabel,
    groups: groupped, mode, groupSelect, disabledProp,
    groupOptions,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const fo = dep.fo;
  const fg = dep.fg;
  const handleOptionClick = dep.handleOptionClick;
  const handleGroupClick = dep.handleGroupClick;
  const search = dep.search;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const multiselect = dep.multiselect;
  const isOpen = dep.isOpen;

  // ============== COMPUTED ==============

  // no export
  const options = computed(() => {
    return fo.value.filter(o => !o[disabledProp.value])
  });

  const groups = computed(() => {
    return fg.value.filter(g => !g[disabledProp.value])
  });

  const canPointGroups = toRef(() => {
    return mode.value !== 'single' && groupSelect.value
  });

  const isPointerGroup = toRef(() => {
    return pointer.value && pointer.value.group
  });

  const currentGroup = computed(() => {
    return getParentGroup(pointer.value)
  });

  const prevGroup = computed(() => {
    const group = isPointerGroup.value ? pointer.value : /* istanbul ignore next */ getParentGroup(pointer.value);
    const groupIndex = groups.value.map(g => g[groupLabel.value]).indexOf(group[groupLabel.value]);
    let prevGroup = groups.value[groupIndex - 1];

    if (prevGroup === undefined) {
      prevGroup = lastGroup.value;
    }

    return prevGroup
  });
  
  const nextGroup = computed(() => {
    let nextIndex = groups.value.map(g => g.label).indexOf(isPointerGroup.value
      ? pointer.value[groupLabel.value]
      : getParentGroup(pointer.value)[groupLabel.value]) + 1;

    if (groups.value.length <= nextIndex) {
      nextIndex = 0;
    }

    return groups.value[nextIndex]
  });

  const lastGroup = computed(() => {
    return [...groups.value].slice(-1)[0]
  });
  
  const currentGroupFirstEnabledOption = computed(() => {
    return pointer.value.__VISIBLE__.filter(o => !o[disabledProp.value])[0]
  });

  const currentGroupPrevEnabledOption = computed(() => {
    const options = currentGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1]
  });
  
  const currentGroupNextEnabledOption = computed(() => {
    const options = getParentGroup(pointer.value).__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1]
  });

  const prevGroupLastEnabledOption = computed(() => {
    return [...prevGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  const lastGroupLastEnabledOption = computed(() => {
    return [...lastGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  // =============== METHODS ==============

  const isPointed = (option) => {
    return (!!pointer.value && (
      (!option.group && pointer.value[valueProp.value] === option[valueProp.value]) ||
      (option.group !== undefined && pointer.value[groupLabel.value] === option[groupLabel.value])
    )) ? true : undefined
  };

  const setPointerFirst = () => {
    setPointer(options.value[0] || null);
  };

  const selectPointer = () => {
    if (!pointer.value || pointer.value[disabledProp.value] === true) {
      return
    }

    if (isPointerGroup.value) {
      handleGroupClick(pointer.value);
    } else {
      handleOptionClick(pointer.value);
    }
  };

  const forwardPointer = () => {
    if (pointer.value === null) {
      setPointer((groupped.value && canPointGroups.value ? (!groups.value[0].__CREATE__ ? groups.value[0] : options.value[0]) : options.value[0]) || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let nextPointer = isPointerGroup.value ? currentGroupFirstEnabledOption.value : currentGroupNextEnabledOption.value;

      if (nextPointer === undefined) {
        nextPointer = nextGroup.value;

        if (nextPointer.__CREATE__) {
          nextPointer = nextPointer[groupOptions.value][0];
        }
      }

      setPointer(nextPointer || /* istanbul ignore next */ null);
    } else {
      let next = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1;

      if (options.value.length <= next) {
        next = 0;
      }

      setPointer(options.value[next] || null);
    }

    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const backwardPointer = () => {
    if (pointer.value === null) {
      let prevPointer = options.value[options.value.length - 1];

      if (groupped.value && canPointGroups.value) {
        prevPointer = lastGroupLastEnabledOption.value;

        if (prevPointer === undefined) {
          prevPointer = lastGroup.value;
        }
      }

      setPointer(prevPointer  || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let prevPointer = isPointerGroup.value ? prevGroupLastEnabledOption.value : currentGroupPrevEnabledOption.value;

      if (prevPointer === undefined) {
        prevPointer = isPointerGroup.value ? prevGroup.value : currentGroup.value;

        if (prevPointer.__CREATE__) {
          prevPointer = prevGroupLastEnabledOption.value;

          if (prevPointer === undefined) {
            prevPointer = prevGroup.value;
          }
        }
      }

      setPointer(prevPointer || /* istanbul ignore next */ null);
    } else {
      let prevIndex = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1;

      if (prevIndex < 0) {
        prevIndex = options.value.length - 1;
      }

      setPointer(options.value[prevIndex] || null);
    }

    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const getParentGroup = (option) => {
    return groups.value.find((group) => {
      return group.__VISIBLE__.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    })
  };

  // no export
  /* istanbul ignore next */
  const adjustWrapperScrollToPointer = () => {
    let pointedOption = multiselect.value.querySelector(`[data-pointed]`);

    if (!pointedOption) {
      return
    }

    let wrapper = pointedOption.parentElement.parentElement;

    if (groupped.value) {
      wrapper = isPointerGroup.value
        ? pointedOption.parentElement.parentElement.parentElement
        : pointedOption.parentElement.parentElement.parentElement.parentElement;
    }

    if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight;
    }
    
    if (pointedOption.offsetTop < wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop;
    }
  };

  // ============== WATCHERS ==============

  watch(search, (val) => {
    if (searchable.value) {
      if (val.length && showOptions.value) {
        setPointerFirst();
      } else {
        clearPointer();
      }
    }
  });

  watch(isOpen, (val) => {
    if (val && multiselect && multiselect.value) {
      let firstSelected = multiselect.value.querySelectorAll(`[data-selected]`)[0];

      if (!firstSelected) {
        return
      }

      let wrapper = firstSelected.parentElement.parentElement;
      
      nextTick(() => {
        // Removed because of #406
        /* istanbul ignore next */
        // if (wrapper.scrollTop > 0) {
        //   return
        // }

        wrapper.scrollTop = firstSelected.offsetTop;
      });
    }
  });

  return {
    pointer,
    canPointGroups,
    isPointed,
    setPointerFirst,
    selectPointer,
    forwardPointer,
    backwardPointer,
  }
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var passive = {
  passive: true
};

function effect$1(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$1,
  data: {}
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function useDropdown (props, context, dep)
{
  const { disabled, appendTo, appendToBody, openDirection } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const multiselect = dep.multiselect;
  const dropdown = dep.dropdown;

  // ================ DATA ================

  const isOpen = ref(false);
  const popper = ref(null);
  const forcedPlacement = ref(null);
  
  // ============== COMPUTED ==============

  const appended = toRef(() => {
    return appendTo.value || appendToBody.value
  });

  const placement = toRef(() => {
    return (openDirection.value === 'top' && forcedPlacement.value === 'bottom') ||
           (openDirection.value === 'bottom' && forcedPlacement.value !== 'top')
            ? 'bottom'
            : 'top'
  });

  // =============== METHODS ==============

  const open = () => {
    if (isOpen.value || disabled.value) {
      return
    }

    isOpen.value = true;
    context.emit('open', $this);


    if (appended.value) {
      nextTick(() => {
        updatePopper();
      });
    }
  };

  const close = () => {
    if (!isOpen.value) {
      return
    }

    isOpen.value = false;
    context.emit('close', $this);
  };

  const updatePopper = () => {
    if (!popper.value) {
      return
    }

    let borderTopWidth = parseInt(window.getComputedStyle(dropdown.value).borderTopWidth.replace('px', ''));
    let borderBottomWidth = parseInt(window.getComputedStyle(dropdown.value).borderBottomWidth.replace('px', ''));
    
    popper.value.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        {
          name: 'offset',
          options: {
            offset: [0, (placement.value === 'top' ? borderTopWidth : borderBottomWidth) * -1],
          },
        },
      ]
    }));

    popper.value.update();
  };

  /* istanbul ignore next: UI feature */
  const hasFixedParent = (element) => {
    while (element && element !== document.body) {
      const style = getComputedStyle(element);

      if (style.position === 'fixed') {
          return true
      }

      element = element.parentElement;
    }
    
    return false
  };

  onMounted(() => {
    if (!appended.value) {
      return
    }

    /* istanbul ignore next: popper mock */
    popper.value = createPopper(multiselect.value, dropdown.value, {
      strategy: hasFixedParent(multiselect.value) ? /* istanbul ignore next: UI feature */ 'fixed' : undefined,
      placement: openDirection.value,
      modifiers: [
        preventOverflow$1,
        flip$1,
        {
          name: 'sameWidth',
          enabled: true,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`;
          },
          effect: ({ state }) => {
            state.elements.popper.style.width = `${
              state.elements.reference.offsetWidth
            }px`;
          }
        },
        {
          name: 'toggleClass',
          enabled: true,
          phase: 'write',
          fn({ state }) {
            forcedPlacement.value = state.placement;
          },
        },
      ]
    });
  });

  onBeforeUnmount(() => {
    if (!appended.value || !popper.value) {
      return
    }

    popper.value.destroy();
    popper.value = null;
  });

  return {
    popper,
    isOpen,
    open,
    close,
    placement,
    updatePopper,
  }
}

function useMultiselect (props, context, dep)
{
  const { searchable, disabled, clearOnBlur } = toRefs(props);

  // ============ DEPENDENCIES ============

  const input = dep.input;
  const open = dep.open;
  const close = dep.close;
  const clearSearch = dep.clearSearch;
  const isOpen = dep.isOpen;
  const wrapper = dep.wrapper;
  const tags = dep.tags;

  // ================ DATA ================

  const isActive = ref(false);

  const mouseClicked = ref(false);

  // ============== COMPUTED ==============

  const tabindex = toRef(() => {
    return searchable.value || disabled.value ? -1 : 0
  });

  // =============== METHODS ==============

  const blur = () => {
    if (searchable.value) {
      input.value.blur();
    }

    wrapper.value.blur();
  };

  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus();
    }
  };

  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return
    }

    isActive.value = true;

    if (shouldOpen) {
      open();
    }
  };

  const deactivate = () => {
    isActive.value = false;

    setTimeout(() => {
      if (!isActive.value) {
        close();

        if (clearOnBlur.value) {
          clearSearch();
        }
      }
    }, 1);
  };

  const handleFocusIn = (e) => {
    if ((e.target.closest('[data-tags]') && e.target.nodeName !== 'INPUT') || e.target.closest('[data-clear]')) {
      return
    }

    activate(mouseClicked.value);
  };

  const handleFocusOut = () => {
    deactivate();
  };

  const handleCaretClick = () => {
    deactivate();
    blur();
  };

  /* istanbul ignore next */
  const handleMousedown = (e) => {
    mouseClicked.value = true;

    if (isOpen.value && (e.target.isEqualNode(wrapper.value) || e.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate();
      }, 0);
    } else if (!isOpen.value 
      && (document.activeElement.isEqualNode(wrapper.value)
        || document.activeElement.isEqualNode(input.value))) {
      activate();    
    }

    setTimeout(() => {
      mouseClicked.value = false;
    }, 0);
  };

  return {
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown,
  }
}

function useKeyboard (props, context, dep)
{
  const {
    mode, addTagOn, openDirection, searchable,
    showOptions, valueProp, groups: groupped,
    addOptionOn: addOptionOn_, createTag, createOption: createOption_,
    reverse,
  } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const update = dep.update;
  const deselect = dep.deselect;
  const search = dep.search;
  const setPointer = dep.setPointer;
  const selectPointer = dep.selectPointer;
  const backwardPointer = dep.backwardPointer;
  const forwardPointer = dep.forwardPointer;
  const multiselect = dep.multiselect;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const blur = dep.blur;
  const fo = dep.fo;

  // ============== COMPUTED ==============

  // no export
  const createOption = toRef(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const addOptionOn = toRef(() => {
    if (addTagOn.value !== undefined) {
      return addTagOn.value
    }
    else if (addOptionOn_.value !== undefined) {
      return addOptionOn_.value
    }

    return ['enter']
  });

  // =============== METHODS ==============

  // no export
  const preparePointer = () => {
    // When options are hidden and creating tags is allowed
    // no pointer will be set (because options are hidden).
    // In such case we need to set the pointer manually to the 
    // first option, which equals to the option created from
    // the search value.
    if (mode.value === 'tags' && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map(o => o[valueProp.value]).indexOf(search.value)]);
    }
  };

  const handleKeydown = (e) => {
    context.emit('keydown', e, $this);

    let tagList;
    let activeIndex;

    if (['ArrowLeft', 'ArrowRight', 'Enter'].indexOf(e.key) !== -1 && mode.value === 'tags') {
      tagList = [...(multiselect.value.querySelectorAll(`[data-tags] > *`))].filter(e => e !== tags.value);
      activeIndex = tagList.findIndex(e => e === document.activeElement);
    }

    switch (e.key) {
      case 'Backspace':
        if (mode.value === 'single') {
          return
        }

        if (searchable.value && [null, ''].indexOf(search.value) === -1) {
          return
        }

        if (iv.value.length === 0) {
          return
        }

        let deselectables = iv.value.filter(v=>!v.disabled && v.remove !== false);

        if (deselectables.length) {
          deselect(deselectables[deselectables.length - 1]);
        }
        break

      case 'Enter':
        e.preventDefault();

        if (e.keyCode === 229) {
          // ignore IME confirmation
          return
        }

        if (activeIndex !== -1 && activeIndex !== undefined) {
          update([...iv.value].filter((v, k) => k !== activeIndex));

          if (activeIndex === tagList.length - 1) {
            if (tagList.length - 1) {
              tagList[tagList.length - 2].focus();
            } else if (searchable.value) {
              tags.value.querySelector('input').focus();
            } else {
              wrapper.value.focus();
            }
          }
          return
        }

        if (addOptionOn.value.indexOf('enter') === -1 && createOption.value) {
          return
        }
        
        preparePointer();
        selectPointer();
        break

      case ' ':
        if (!createOption.value && !searchable.value) {
          e.preventDefault();
          
          preparePointer();
          selectPointer();
          return
        }

        if (!createOption.value) {
          return false
        } 

        if (addOptionOn.value.indexOf('space') === -1 && createOption.value) {
          return
        }

        e.preventDefault();
        
        preparePointer();
        selectPointer();
        break
      
      case 'Tab':
      case ';':
      case ',':
        if (addOptionOn.value.indexOf(e.key.toLowerCase()) === -1 || !createOption.value) {
          return
        }

        preparePointer();
        selectPointer();
        e.preventDefault();
        break

      case 'Escape':
        blur();
        break

      case 'ArrowUp':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }
        
        backwardPointer();
        break

      case 'ArrowDown':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }

        forwardPointer();
        break

      case 'ArrowLeft':
        if (
          (searchable.value && tags.value && tags.value.querySelector('input').selectionStart)
          || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length
        ) {
          return
        }

        e.preventDefault();

        if (activeIndex === -1) {
          tagList[tagList.length-1].focus();
        }
        else if (activeIndex > 0) {
          tagList[activeIndex-1].focus();
        }
        break

      case 'ArrowRight':
        if (activeIndex === -1 || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length) {
          return
        }

        e.preventDefault();
        
        /* istanbul ignore else */
        if (tagList.length > activeIndex + 1) {
          tagList[activeIndex+1].focus();
        }
        else if (searchable.value) {
          tags.value.querySelector('input').focus();
        }
        else if (!searchable.value) {
          wrapper.value.focus();
        }
        
        break
    }
  };

  const handleKeyup = (e) => {
    context.emit('keyup', e, $this);
  };

  return {
    handleKeydown,
    handleKeyup,
    preparePointer,
  }
}

function useClasses (props, context, dependencies)
{const { 
    classes: classes_, disabled, showOptions, breakTags
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const isOpen = dependencies.isOpen;
  const isPointed = dependencies.isPointed;
  const isSelected = dependencies.isSelected;
  const isDisabled = dependencies.isDisabled;
  const isActive = dependencies.isActive;
  const canPointGroups = dependencies.canPointGroups;
  const resolving = dependencies.resolving;
  const fo = dependencies.fo;
  const placement = dependencies.placement;

  // ============== COMPUTED ==============

  const classes = toRef(() => ({
    container: 'multiselect',
    containerDisabled: 'is-disabled',
    containerOpen: 'is-open',
    containerOpenTop: 'is-open-top',
    containerActive: 'is-active',
    wrapper: 'multiselect-wrapper',
    singleLabel: 'multiselect-single-label',
    singleLabelText: 'multiselect-single-label-text',
    multipleLabel: 'multiselect-multiple-label',
    search: 'multiselect-search',
    tags: 'multiselect-tags',
    tag: 'multiselect-tag',
    tagWrapper: 'multiselect-tag-wrapper',
    tagWrapperBreak: 'multiselect-tag-wrapper-break',
    tagDisabled: 'is-disabled',
    tagRemove: 'multiselect-tag-remove',
    tagRemoveIcon: 'multiselect-tag-remove-icon',
    tagsSearchWrapper: 'multiselect-tags-search-wrapper',
    tagsSearch: 'multiselect-tags-search',
    tagsSearchCopy: 'multiselect-tags-search-copy',
    placeholder: 'multiselect-placeholder',
    caret: 'multiselect-caret',
    caretOpen: 'is-open',
    clear: 'multiselect-clear',
    clearIcon: 'multiselect-clear-icon',
    spinner: 'multiselect-spinner',
    inifinite: 'multiselect-inifite',
    inifiniteSpinner: 'multiselect-inifite-spinner',
    dropdown: 'multiselect-dropdown',
    dropdownTop: 'is-top',
    dropdownHidden: 'is-hidden',
    options: 'multiselect-options',
    optionsTop: 'is-top',
    group: 'multiselect-group',
    groupLabel: 'multiselect-group-label',
    groupLabelPointable: 'is-pointable',
    groupLabelPointed: 'is-pointed',
    groupLabelSelected: 'is-selected',
    groupLabelDisabled: 'is-disabled',
    groupLabelSelectedPointed: 'is-selected is-pointed',
    groupLabelSelectedDisabled: 'is-selected is-disabled',
    groupOptions: 'multiselect-group-options',
    option: 'multiselect-option',
    optionPointed: 'is-pointed',
    optionSelected: 'is-selected',
    optionDisabled: 'is-disabled',
    optionSelectedPointed: 'is-selected is-pointed',
    optionSelectedDisabled: 'is-selected is-disabled',
    noOptions: 'multiselect-no-options',
    noResults: 'multiselect-no-results',
    fakeInput: 'multiselect-fake-input',
    assist: 'multiselect-assistive-text',
    spacer: 'multiselect-spacer',
    ...classes_.value,
  }));

  const showDropdown = toRef(() => {
    return !!(isOpen.value && showOptions.value && (!resolving.value || (resolving.value && fo.value.length)))
  });

  const classList = computed(() => {
    const c = classes.value;

    return {
      container: [c.container]
        .concat(disabled.value ? c.containerDisabled : [])
        .concat(showDropdown.value && placement.value === 'top'  ? c.containerOpenTop : [])
        .concat(showDropdown.value && placement.value !== 'top' ? c.containerOpen : [])
        .concat(isActive.value ? c.containerActive : []),
      wrapper: c.wrapper,
      spacer: c.spacer,
      singleLabel: c.singleLabel,
      singleLabelText: c.singleLabelText,
      multipleLabel: c.multipleLabel,
      search: c.search,
      tags: c.tags,
      tag: [c.tag]
        .concat(disabled.value ? c.tagDisabled : []),
      tagWrapper: [c.tagWrapper, breakTags.value ? c.tagWrapperBreak : null],
      tagDisabled: c.tagDisabled,
      tagRemove: c.tagRemove,
      tagRemoveIcon: c.tagRemoveIcon,
      tagsSearchWrapper: c.tagsSearchWrapper,
      tagsSearch: c.tagsSearch,
      tagsSearchCopy: c.tagsSearchCopy,
      placeholder: c.placeholder,
      caret: [c.caret]
        .concat(isOpen.value ? c.caretOpen : []),
      clear: c.clear,
      clearIcon: c.clearIcon,
      spinner: c.spinner,
      inifinite: c.inifinite,
      inifiniteSpinner: c.inifiniteSpinner,
      dropdown: [c.dropdown]
        .concat(placement.value === 'top' ? c.dropdownTop : [])
        .concat(!isOpen.value || !showOptions.value || !showDropdown.value ? c.dropdownHidden : []),
      options: [c.options]
        .concat(placement.value === 'top' ? c.optionsTop : []),
      group: c.group,
      groupLabel: (g) => {
        let groupLabel = [c.groupLabel];

        if (isPointed(g)) {
          groupLabel.push(isSelected(g) ? c.groupLabelSelectedPointed : c.groupLabelPointed);
        } else if (isSelected(g) && canPointGroups.value) {
          groupLabel.push(isDisabled(g) ? c.groupLabelSelectedDisabled : c.groupLabelSelected);
        } else if (isDisabled(g)) {
          groupLabel.push(c.groupLabelDisabled);
        }

        if (canPointGroups.value) {
          groupLabel.push(c.groupLabelPointable);
        }

        return groupLabel
      },
      groupOptions: c.groupOptions,
      option: (o, g) => {
        let option = [c.option];

        if (isPointed(o)) {
          option.push(isSelected(o) ? c.optionSelectedPointed : c.optionPointed);
        } else if (isSelected(o)) {
          option.push(isDisabled(o) ? c.optionSelectedDisabled : c.optionSelected);
        } else if (isDisabled(o) || (g && isDisabled(g))) {
          option.push(c.optionDisabled);
        }

        return option
      },
      noOptions: c.noOptions,
      noResults: c.noResults,
      assist: c.assist,
      fakeInput: c.fakeInput,
    }
  });

  return {
    classList,
    showDropdown,
  }
}

function useScroll (props, context, dep)
{
  const {
    limit, infinite,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const offset = dep.offset;
  const search = dep.search;
  const pfo = dep.pfo;
  const eo = dep.eo;

  // ================ DATA ================

  // no export
  const observer = ref(null);

  const infiniteLoader = shallowRef(null);

  // ============== COMPUTED ==============

  const hasMore = toRef(() => {
    return offset.value < pfo.value.length
  });

  // =============== METHODS ==============

  // no export
  /* istanbul ignore next */
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0];

    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;

      offset.value += limit.value == -1 ? 10 : limit.value;

      nextTick(() => {
        parent.scrollTop = scrollTop;
      });
    }
  };

  const observe = () => {
    /* istanbul ignore else */
    if (isOpen.value && offset.value < pfo.value.length) {
      observer.value.observe(infiniteLoader.value);
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect();
    }
  };

  // ============== WATCHERS ==============

  watch(isOpen, () => {
    if (!infinite.value) {
      return
    }

    observe();
  });

  watch(search, () => {
    if (!infinite.value) {
      return
    }

    offset.value = limit.value;

    observe();
  }, { flush: 'post' });

  watch(eo, () => {
    if (!infinite.value) {
      return
    }

    observe();
  }, { immediate: false, flush: 'post' });

  // ================ HOOKS ===============

  onMounted(() => {
    /* istanbul ignore else */
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver);
    }
  });

  return {
    hasMore,
    infiniteLoader,
  }
}

function useA11y (props, context, dep)
{
  const {
    placeholder, id, valueProp, label: labelProp, mode, groupLabel, aria, searchable ,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const pointer = dep.pointer;
  const iv = dep.iv;
  const hasSelected = dep.hasSelected;
  const multipleLabelText = dep.multipleLabelText;

  // ================ DATA ================

  const label = ref(null);

  // ============== COMPUTED ==============

  const ariaAssist = toRef(() => (
    `${id.value ? id.value + '-' : ''}assist`
  ));

  const ariaControls = toRef(() => (
    `${id.value ? id.value + '-' : ''}multiselect-options`
  ));

  const ariaActiveDescendant = toRef(() => {
    if (pointer.value) {
      let texts = id.value
        ? `${id.value}-`
        : '';

      texts += `${pointer.value.group ? 'multiselect-group' : 'multiselect-option'}-`;

      texts += pointer.value.group ? pointer.value.index : pointer.value[valueProp.value];

      return texts
    }
  });

  const ariaPlaceholder = toRef(() => {
    return placeholder.value
  });

  const ariaMultiselectable = toRef(() => {
    return mode.value !== 'single'
  });

  const ariaLabel = computed(() => {
    if (mode.value === 'single' && hasSelected.value) {
      return iv.value[labelProp.value]
    }

    if (mode.value === 'multiple' && hasSelected.value) {
      return multipleLabelText.value
    }

    if (mode.value === 'tags' && hasSelected.value) {
      return iv.value.map(v => v[labelProp.value]).join(', ')
    }

    return ''
  });

  const arias = computed(() => {
    let arias = { ...aria.value };
    
    // Need to add manually because focusing
    // the input won't read the selected value
    if (searchable.value) {
      arias['aria-labelledby'] = arias['aria-labelledby']
        ? `${ariaAssist.value} ${arias['aria-labelledby']}`
        : ariaAssist.value;
      
      if (ariaLabel.value && arias['aria-label']) {
        arias['aria-label'] = `${ariaLabel.value}, ${arias['aria-label']}`;
      }
    }

    return arias
  });

  // =============== METHODS ==============

  const ariaOptionId = (option) => (
    `${id.value ? id.value + '-' : ''}multiselect-option-${option[valueProp.value]}`
  );

  const ariaGroupId = (option) => (
    `${id.value ? id.value + '-' : ''}multiselect-group-${option.index}`
  );

  const ariaOptionLabel = (label) => `${label}`;

  const ariaGroupLabel = (label) => `${label}`;

  const ariaTagLabel = (label) => `${label} ❎`;

  // =============== HOOKS ================

  onMounted(() => {
    /* istanbul ignore next */
    if (id.value && document && document.querySelector) {
      let forTag = document.querySelector(`[for="${id.value}"]`);
      label.value = forTag ? forTag.innerText : null;
    }
  });

  return {
    arias,
    ariaLabel,
    ariaAssist,
    ariaControls,
    ariaPlaceholder,
    ariaMultiselectable,
    ariaActiveDescendant,
    ariaOptionId,
    ariaOptionLabel,
    ariaGroupId,
    ariaGroupLabel,
    ariaTagLabel,
  }
}

function useI18n (props, context, dep)
{
  const {
    locale, fallbackLocale,
  } = toRefs(props);

  // =============== METHODS ==============

  const localize = (target) => {
    if (!target || typeof target !== 'object') {
      return target
    }

    if (target && target[locale.value]) {
      return target[locale.value]
    } else if (target && locale.value && target[locale.value.toUpperCase()]) {
      return target[locale.value.toUpperCase()]
    } else if (target && target[fallbackLocale.value]) {
      return target[fallbackLocale.value]
    } else if (target && fallbackLocale.value && target[fallbackLocale.value.toUpperCase()]) {
      return target[fallbackLocale.value.toUpperCase()]
    } else if (target && Object.keys(target)[0]) {
      return target[Object.keys(target)[0]]
    } else {
      return ''
    }
  };

  return {
    localize,
  }
}

function useRefs (props, context, dep)
{
  // ================ DATA ================

  const multiselect = shallowRef(null);
  
  const wrapper = shallowRef(null);

  const tags = shallowRef(null);

  const input = shallowRef(null);

  const dropdown = shallowRef(null);

  return {
    multiselect,
    wrapper,
    tags,
    input,
    dropdown,
  }
}

function resolveDeps (props, context, features, deps = {}) {
  features.forEach((composable) => {
    deps = {
      ...deps,
      ...composable(props, context, deps)
    };
  });
  
  return deps
}

var script = {
    name: 'Multiselect',
    emits: [
      'paste', 'open', 'close', 'select', 'deselect', 
      'input', 'search-change', 'tag', 'option', 'update:modelValue',
      'change', 'clear', 'keydown', 'keyup', 'max', 'create',
    ],
    props: {
      value: {
        required: false,
      },
      modelValue: {
        required: false,
      },
      options: {
        type: [Array, Object, Function],
        required: false,
        default: () => ([])
      },
      id: {
        type: [String, Number],
        required: false,
        default: undefined,
      },
      name: {
        type: [String, Number],
        required: false,
        default: 'multiselect',
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      label: {
        type: String,
        required: false,
        default: 'label',
      },
      trackBy: {
        type: [String, Array],
        required: false,
        default: undefined,
      },
      valueProp: {
        type: String,
        required: false,
        default: 'value',
      },
      placeholder: {
        type: String,
        required: false,
        default: null,
      },
      mode: {
        type: String,
        required: false,
        default: 'single', // single|multiple|tags
      },
      searchable: {
        type: Boolean,
        required: false,
        default: false,
      },
      limit: {
        type: Number,
        required: false,
        default: -1,
      },
      hideSelected: {
        type: Boolean,
        required: false,
        default: true,
      },
      createTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      createOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      addTagOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      addOptionOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      caret: {
        type: Boolean,
        required: false,
        default: true,
      },
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      noOptionsText: {
        type: [String, Object],
        required: false,
        default: 'The list is empty',
      },
      noResultsText: {
        type: [String, Object],
        required: false,
        default: 'No results found',
      },
      multipleLabel: {
        type: Function,
        required: false,
        default: undefined,
      },
      object: {
        type: Boolean,
        required: false,
        default: false,
      },
      delay: {
        type: Number,
        required: false,
        default: -1,
      },
      minChars: {
        type: Number,
        required: false,
        default: 0,
      },
      resolveOnLoad: {
        type: Boolean,
        required: false,
        default: true,
      },
      filterResults: {
        type: Boolean,
        required: false,
        default: true,
      },
      clearOnSearch: {
        type: Boolean,
        required: false,
        default: false,
      },
      clearOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canDeselect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canClear: {
        type: Boolean,
        required: false,
        default: true,
      },
      max: {
        type: Number,
        required: false,
        default: -1,
      },
      showOptions: {
        type: Boolean,
        required: false,
        default: true,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      openDirection: {
        type: String,
        required: false,
        default: 'bottom',
      },
      nativeSupport: {
        type: Boolean,
        required: false,
        default: false,
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      strict: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnDeselect: {
        type: Boolean,
        required: false,
        default: false,
      },
      autocomplete: {
        type: String,
        required: false,
        default: undefined,
      },
      groups: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupLabel: {
        type: String,
        required: false,
        default: 'label',
      },
      groupOptions: {
        type: String,
        required: false,
        default: 'options',
      },
      groupHideEmpty: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      inputType: {
        type: String,
        required: false,
        default: 'text',
      },
      attrs: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      onCreate: {
        required: false,
        type: Function,
        default: undefined,
      },
      disabledProp: {
        type: String,
        required: false,
        default: 'disabled',
      },
      searchStart: {
        type: Boolean,
        required: false,
        default: false,
      },
      reverse: {
        type: Boolean,
        required: false,
        default: false,
      },
      regex: {
        type: [Object, String, RegExp],
        required: false,
        default: undefined,
      },
      rtl: {
        type: Boolean,
        required: false,
        default: false,
      },
      infinite: {
        type: Boolean,
        required: false,
        default: false,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      clearOnBlur: {
        required: false,
        type: Boolean,
        default: true,
      },
      locale: {
        required: false,
        type: String,
        default: null,
      },
      fallbackLocale: {
        required: false,
        type: String,
        default: 'en',
      },
      searchFilter: {
        required: false,
        type: Function,
        default: null,
      },
      allowAbsent: {
        required: false,
        type: Boolean,
        default: false,
      },
      appendToBody: {
        required: false,
        type: Boolean,
        default: false,
      },
      closeOnScroll: {
        required: false,
        type: Boolean,
        default: false,
      },
      breakTags: {
        required: false,
        type: Boolean,
        default: false,
      },
      appendTo: {
        required: false,
        type: String,
        default: undefined,
      },
    },
    setup(props, context)
    { 
      return resolveDeps(props, context, [
        useRefs,
        useI18n,
        useValue,
        usePointer$1,
        useDropdown,
        useSearch,
        useData,
        useMultiselect,
        useOptions,
        useScroll,
        usePointer,
        useKeyboard,
        useClasses,
        useA11y,
      ])
    },
    beforeMount() {
      if ((this.$root.constructor && this.$root.constructor.version && this.$root.constructor.version.match(/^2\./)) || this.vueVersionMs === 2) {
        if (!this.$options.components.Teleport) {
          this.$options.components.Teleport = {
            render() {
              return this.$slots.default ? this.$slots.default[0] : null
            }
          };
        }
      }
    }
  };

const _hoisted_1$5 = ["id", "dir"];
const _hoisted_2$4 = ["tabindex", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable", "role"];
const _hoisted_3$4 = ["type", "modelValue", "value", "autocomplete", "id", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_4$3 = ["onKeyup", "aria-label"];
const _hoisted_5$3 = ["onClick"];
const _hoisted_6$3 = ["type", "modelValue", "value", "id", "autocomplete", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_7$2 = ["innerHTML"];
const _hoisted_8$1 = ["id"];
const _hoisted_9$1 = ["id"];
const _hoisted_10$1 = ["id", "aria-label", "aria-selected"];
const _hoisted_11$1 = ["data-pointed", "onMouseenter", "onClick"];
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = ["aria-label"];
const _hoisted_14 = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"];
const _hoisted_15 = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"];
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["value"];
const _hoisted_19 = ["name", "value"];
const _hoisted_20 = ["name", "value"];
const _hoisted_21 = ["id"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    ref: "multiselect",
    class: normalizeClass(_ctx.classList.container),
    id: $props.searchable ? undefined : $props.id,
    dir: $props.rtl ? 'rtl' : undefined,
    onFocusin: _cache[12] || (_cache[12] = (...args) => (_ctx.handleFocusIn && _ctx.handleFocusIn(...args))),
    onFocusout: _cache[13] || (_cache[13] = (...args) => (_ctx.handleFocusOut && _ctx.handleFocusOut(...args))),
    onKeyup: _cache[14] || (_cache[14] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args))),
    onKeydown: _cache[15] || (_cache[15] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args)))
  }, [
    createBaseVNode("div", mergeProps({
      class: _ctx.classList.wrapper,
      onMousedown: _cache[9] || (_cache[9] = (...args) => (_ctx.handleMousedown && _ctx.handleMousedown(...args))),
      ref: "wrapper",
      tabindex: _ctx.tabindex,
      "aria-controls": !$props.searchable ? _ctx.ariaControls : undefined,
      "aria-placeholder": !$props.searchable ? _ctx.ariaPlaceholder : undefined,
      "aria-expanded": !$props.searchable ? _ctx.isOpen : undefined,
      "aria-activedescendant": !$props.searchable ? _ctx.ariaActiveDescendant : undefined,
      "aria-multiselectable": !$props.searchable ? _ctx.ariaMultiselectable : undefined,
      role: !$props.searchable ? 'combobox' : undefined
    }, !$props.searchable ? _ctx.arias : {}), [
      createCommentVNode(" Search "),
      ($props.mode !== 'tags' && $props.searchable && !$props.disabled)
        ? (openBlock(), createElementBlock("input", mergeProps({
            key: 0,
            type: $props.inputType,
            modelValue: _ctx.search,
            value: _ctx.search,
            class: _ctx.classList.search,
            autocomplete: $props.autocomplete,
            id: $props.searchable ? $props.id : undefined,
            onInput: _cache[0] || (_cache[0] = (...args) => (_ctx.handleSearchInput && _ctx.handleSearchInput(...args))),
            onKeypress: _cache[1] || (_cache[1] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
            onPaste: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.handlePaste && _ctx.handlePaste(...args)), ["stop"])),
            ref: "input",
            "aria-controls": _ctx.ariaControls,
            "aria-placeholder": _ctx.ariaPlaceholder,
            "aria-expanded": _ctx.isOpen,
            "aria-activedescendant": _ctx.ariaActiveDescendant,
            "aria-multiselectable": _ctx.ariaMultiselectable,
            role: "combobox"
          }, {
            ...$props.attrs,
            ..._ctx.arias,
          }), null, 16 /* FULL_PROPS */, _hoisted_3$4))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Tags (with search) "),
      ($props.mode == 'tags')
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.classList.tags),
            "data-tags": ""
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.iv, (option, i, key) => {
              return renderSlot(_ctx.$slots, "tag", {
                option: option,
                handleTagRemove: _ctx.handleTagRemove,
                disabled: $props.disabled
              }, () => [
                (openBlock(), createElementBlock("span", {
                  class: normalizeClass([
                _ctx.classList.tag,
                option.disabled ? _ctx.classList.tagDisabled : null,
              ]),
                  tabindex: "-1",
                  onKeyup: withKeys($event => (_ctx.handleTagRemove(option, $event)), ["enter"]),
                  key: key,
                  "aria-label": _ctx.ariaTagLabel(_ctx.localize(option[$props.label]))
                }, [
                  createBaseVNode("span", {
                    class: normalizeClass(_ctx.classList.tagWrapper)
                  }, toDisplayString(_ctx.localize(option[$props.label])), 3 /* TEXT, CLASS */),
                  (!$props.disabled && !option.disabled)
                    ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass(_ctx.classList.tagRemove),
                        onClick: withModifiers($event => (_ctx.handleTagRemove(option, $event)), ["stop"])
                      }, [
                        createBaseVNode("span", {
                          class: normalizeClass(_ctx.classList.tagRemoveIcon)
                        }, null, 2 /* CLASS */)
                      ], 10 /* CLASS, PROPS */, _hoisted_5$3))
                    : createCommentVNode("v-if", true)
                ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_4$3))
              ])
            }), 256 /* UNKEYED_FRAGMENT */)),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.classList.tagsSearchWrapper),
              ref: "tags"
            }, [
              createCommentVNode(" Used for measuring search width "),
              createBaseVNode("span", {
                class: normalizeClass(_ctx.classList.tagsSearchCopy)
              }, toDisplayString(_ctx.search), 3 /* TEXT, CLASS */),
              createCommentVNode(" Actual search input "),
              ($props.searchable && !$props.disabled)
                ? (openBlock(), createElementBlock("input", mergeProps({
                    key: 0,
                    type: $props.inputType,
                    modelValue: _ctx.search,
                    value: _ctx.search,
                    class: _ctx.classList.tagsSearch,
                    id: $props.searchable ? $props.id : undefined,
                    autocomplete: $props.autocomplete,
                    onInput: _cache[3] || (_cache[3] = (...args) => (_ctx.handleSearchInput && _ctx.handleSearchInput(...args))),
                    onKeypress: _cache[4] || (_cache[4] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
                    onPaste: _cache[5] || (_cache[5] = withModifiers((...args) => (_ctx.handlePaste && _ctx.handlePaste(...args)), ["stop"])),
                    ref: "input",
                    "aria-controls": _ctx.ariaControls,
                    "aria-placeholder": _ctx.ariaPlaceholder,
                    "aria-expanded": _ctx.isOpen,
                    "aria-activedescendant": _ctx.ariaActiveDescendant,
                    "aria-multiselectable": _ctx.ariaMultiselectable,
                    role: "combobox"
                  }, {
                ...$props.attrs,
                ..._ctx.arias,
              }), null, 16 /* FULL_PROPS */, _hoisted_6$3))
                : createCommentVNode("v-if", true)
            ], 2 /* CLASS */)
          ], 2 /* CLASS */))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Single label "),
      ($props.mode == 'single' && _ctx.hasSelected && !_ctx.search && _ctx.iv)
        ? renderSlot(_ctx.$slots, "singlelabel", {
            key: 2,
            value: _ctx.iv
          }, () => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.classList.singleLabel)
            }, [
              createBaseVNode("span", {
                class: normalizeClass(_ctx.classList.singleLabelText)
              }, toDisplayString(_ctx.localize(_ctx.iv[$props.label])), 3 /* TEXT, CLASS */)
            ], 2 /* CLASS */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Multiple label "),
      ($props.mode == 'multiple' && _ctx.hasSelected && !_ctx.search)
        ? renderSlot(_ctx.$slots, "multiplelabel", {
            key: 3,
            values: _ctx.iv
          }, () => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.classList.multipleLabel),
              innerHTML: _ctx.multipleLabelText
            }, null, 10 /* CLASS, PROPS */, _hoisted_7$2)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Placeholder "),
      ($props.placeholder && !_ctx.hasSelected && !_ctx.search)
        ? renderSlot(_ctx.$slots, "placeholder", { key: 4 }, () => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.classList.placeholder),
              "aria-hidden": "true"
            }, toDisplayString($props.placeholder), 3 /* TEXT, CLASS */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Spinner "),
      ($props.loading || _ctx.resolving)
        ? renderSlot(_ctx.$slots, "spinner", { key: 5 }, () => [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.classList.spinner),
              "aria-hidden": "true"
            }, null, 2 /* CLASS */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Clear "),
      (_ctx.hasSelected && !$props.disabled && $props.canClear && !_ctx.busy)
        ? renderSlot(_ctx.$slots, "clear", {
            key: 6,
            clear: _ctx.clear
          }, () => [
            createBaseVNode("span", {
              "aria-hidden": "true",
              tabindex: "0",
              role: "button",
              "data-clear": "",
              "aria-roledescription": "❎",
              class: normalizeClass(_ctx.classList.clear),
              onClick: _cache[6] || (_cache[6] = (...args) => (_ctx.clear && _ctx.clear(...args))),
              onKeyup: _cache[7] || (_cache[7] = withKeys((...args) => (_ctx.clear && _ctx.clear(...args)), ["enter"]))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(_ctx.classList.clearIcon)
              }, null, 2 /* CLASS */)
            ], 34 /* CLASS, NEED_HYDRATION */)
          ])
        : createCommentVNode("v-if", true),
      createCommentVNode(" Caret "),
      ($props.caret && $props.showOptions)
        ? renderSlot(_ctx.$slots, "caret", {
            key: 7,
            handleCaretClick: _ctx.handleCaretClick,
            isOpen: _ctx.isOpen
          }, () => [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.classList.caret),
              onClick: _cache[8] || (_cache[8] = (...args) => (_ctx.handleCaretClick && _ctx.handleCaretClick(...args))),
              "aria-hidden": "true"
            }, null, 2 /* CLASS */)
          ])
        : createCommentVNode("v-if", true)
    ], 16 /* FULL_PROPS */, _hoisted_2$4),
    createCommentVNode(" Options "),
    (openBlock(), createBlock(Teleport, {
      to: $props.appendTo || 'body',
      disabled: !$props.appendToBody && !$props.appendTo
    }, [
      createBaseVNode("div", {
        id: $props.id ? `${$props.id}-dropdown` : undefined,
        class: normalizeClass(_ctx.classList.dropdown),
        tabindex: "-1",
        ref: "dropdown",
        onFocusin: _cache[10] || (_cache[10] = (...args) => (_ctx.handleFocusIn && _ctx.handleFocusIn(...args))),
        onFocusout: _cache[11] || (_cache[11] = (...args) => (_ctx.handleFocusOut && _ctx.handleFocusOut(...args)))
      }, [
        renderSlot(_ctx.$slots, "beforelist", { options: _ctx.fo }),
        createBaseVNode("ul", {
          class: normalizeClass(_ctx.classList.options),
          id: _ctx.ariaControls,
          role: "listbox"
        }, [
          ($props.groups)
            ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.fg, (group, i, key) => {
                return (openBlock(), createElementBlock("li", {
                  class: normalizeClass(_ctx.classList.group),
                  key: key,
                  id: _ctx.ariaGroupId(group),
                  "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                  "aria-selected": _ctx.isSelected(group),
                  role: "option"
                }, [
                  (!group.__CREATE__)
                    ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(_ctx.classList.groupLabel(group)),
                        "data-pointed": _ctx.isPointed(group),
                        onMouseenter: $event => (_ctx.setPointer(group, i)),
                        onClick: $event => (_ctx.handleGroupClick(group))
                      }, [
                        renderSlot(_ctx.$slots, "grouplabel", {
                          group: group,
                          isSelected: _ctx.isSelected,
                          isPointed: _ctx.isPointed
                        }, () => [
                          createBaseVNode("span", {
                            innerHTML: _ctx.localize(group[$props.groupLabel])
                          }, null, 8 /* PROPS */, _hoisted_12)
                        ])
                      ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_11$1))
                    : createCommentVNode("v-if", true),
                  createBaseVNode("ul", {
                    class: normalizeClass(_ctx.classList.groupOptions),
                    "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                    role: "group"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(group.__VISIBLE__, (option, i, key) => {
                      return (openBlock(), createElementBlock("li", {
                        class: normalizeClass(_ctx.classList.option(option, group)),
                        "data-pointed": _ctx.isPointed(option),
                        "data-selected": _ctx.isSelected(option) || undefined,
                        key: key,
                        onMouseenter: $event => (_ctx.setPointer(option)),
                        onClick: $event => (_ctx.handleOptionClick(option)),
                        id: _ctx.ariaOptionId(option),
                        "aria-selected": _ctx.isSelected(option),
                        "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                        role: "option"
                      }, [
                        renderSlot(_ctx.$slots, "option", {
                          option: option,
                          isSelected: _ctx.isSelected,
                          isPointed: _ctx.isPointed,
                          search: _ctx.search
                        }, () => [
                          createBaseVNode("span", null, toDisplayString(_ctx.localize(option[$props.label])), 1 /* TEXT */)
                        ])
                      ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_14))
                    }), 128 /* KEYED_FRAGMENT */))
                  ], 10 /* CLASS, PROPS */, _hoisted_13)
                ], 10 /* CLASS, PROPS */, _hoisted_10$1))
              }), 128 /* KEYED_FRAGMENT */))
            : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.fo, (option, i, key) => {
                return (openBlock(), createElementBlock("li", {
                  class: normalizeClass(_ctx.classList.option(option)),
                  "data-pointed": _ctx.isPointed(option),
                  "data-selected": _ctx.isSelected(option) || undefined,
                  key: key,
                  onMouseenter: $event => (_ctx.setPointer(option)),
                  onClick: $event => (_ctx.handleOptionClick(option)),
                  id: _ctx.ariaOptionId(option),
                  "aria-selected": _ctx.isSelected(option),
                  "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                  role: "option"
                }, [
                  renderSlot(_ctx.$slots, "option", {
                    option: option,
                    isSelected: _ctx.isSelected,
                    isPointed: _ctx.isPointed,
                    search: _ctx.search
                  }, () => [
                    createBaseVNode("span", null, toDisplayString(_ctx.localize(option[$props.label])), 1 /* TEXT */)
                  ])
                ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_15))
              }), 128 /* KEYED_FRAGMENT */))
        ], 10 /* CLASS, PROPS */, _hoisted_9$1),
        (_ctx.noOptions)
          ? renderSlot(_ctx.$slots, "nooptions", { key: 0 }, () => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.classList.noOptions),
                innerHTML: _ctx.localize($props.noOptionsText)
              }, null, 10 /* CLASS, PROPS */, _hoisted_16)
            ])
          : createCommentVNode("v-if", true),
        (_ctx.noResults)
          ? renderSlot(_ctx.$slots, "noresults", { key: 1 }, () => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.classList.noResults),
                innerHTML: _ctx.localize($props.noResultsText)
              }, null, 10 /* CLASS, PROPS */, _hoisted_17)
            ])
          : createCommentVNode("v-if", true),
        ($props.infinite && _ctx.hasMore)
          ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.classList.inifinite),
              ref: "infiniteLoader"
            }, [
              renderSlot(_ctx.$slots, "infinite", {}, () => [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.classList.inifiniteSpinner)
                }, null, 2 /* CLASS */)
              ])
            ], 2 /* CLASS */))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "afterlist", { options: _ctx.fo })
      ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_8$1)
    ], 8 /* PROPS */, ["to", "disabled"])),
    createCommentVNode(" Hacky input element to show HTML5 required warning "),
    ($props.required)
      ? (openBlock(), createElementBlock("input", {
          key: 0,
          class: normalizeClass(_ctx.classList.fakeInput),
          tabindex: "-1",
          value: _ctx.textValue,
          required: ""
        }, null, 10 /* CLASS, PROPS */, _hoisted_18))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Native input support "),
    ($props.nativeSupport)
      ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          ($props.mode == 'single')
            ? (openBlock(), createElementBlock("input", {
                key: 0,
                type: "hidden",
                name: $props.name,
                value: _ctx.plainValue !== undefined ? _ctx.plainValue : ''
              }, null, 8 /* PROPS */, _hoisted_19))
            : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.plainValue, (v, i) => {
                return (openBlock(), createElementBlock("input", {
                  type: "hidden",
                  name: `${$props.name}[]`,
                  value: v,
                  key: i
                }, null, 8 /* PROPS */, _hoisted_20))
              }), 128 /* KEYED_FRAGMENT */))
        ], 64 /* STABLE_FRAGMENT */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Screen reader assistive text "),
    ($props.searchable && _ctx.hasSelected)
      ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.classList.assist),
          id: _ctx.ariaAssist,
          "aria-hidden": "true"
        }, toDisplayString(_ctx.ariaLabel), 11 /* TEXT, CLASS, PROPS */, _hoisted_21))
      : createCommentVNode("v-if", true),
    createCommentVNode(" Create height for empty input "),
    createBaseVNode("div", {
      class: normalizeClass(_ctx.classList.spacer)
    }, null, 2 /* CLASS */)
  ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1$5))
}

script.render = render$1;
script.__file = "src/Multiselect.vue";

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

// import timeStringToSeconds from "@output-mixins/gallery-timeStringToSeconds.js";
// import secondsToTimeString from "@output-mixins/gallery-secondsToTimeString.js";

const _sfc_main$3 = {
  name: "sorter",
  props: [ "label", "currentList", "listName", "item", "index", "tippyTop" ],
  mixins: [slugify/*, timeStringToSeconds, secondsToTimeString*/],
  components: {
    VueSlider,
    Multiselect: script,
  },
  data: function() {
    return {
      range: null,
      dropdownOptions: null,
    };
  },

  created: function() {
    if ( this.item.range ) {

      var range = {
        min: this.item.rangeMin(),
        max: this.item.rangeMax(),
      };

      // Sorta crude failsafe to make sure the calculated rangeMax() is never smaller than rangeMin()
      if ( range.min < 0 ) range.min = 0;
      if ( range.max < 0 ) range.max = 0;
      if ( range.min > range.max ) range.min = range.max;

      // So basically if the user has changed the range, use that and otherwise min max...
      // ...unless user set range goes past the current min or max.
      let rangeIsSetByUser = _.isArray(this.item.range);
      if ( rangeIsSetByUser ) {
        range.value = _.clone(this.item.range);
        if ( range.value[0] < range.min || range.value[0] > range.max ) range.value[0] = range.min;
        if ( range.value[1] < range.min || range.value[1] > range.max ) range.value[1] = range.max;
      }
      else {
        range.value = [range.min, range.max];
      }

      // If all values are equal disable the slinger since it won't be very useful...
      // const noRange = (range.min === range.value[0] && range.value[0] === range.value[1] && range.value[1] === range.max);
      // if (  noRange ) range.disabled = true;
      // else range.disabled = false;
      
      if ( this.item.rangeMarks ) range.marks = this.item.rangeMarks( range );
      
      this.range = range; 
      
    }
    else if ( this.$store.getters.filterExtrasKeys.match( this.item.key ) ) {
      // Compiles dropdown data (options) on create it it's active
      // Otherwise the data is compiled when the dropdown is first opened on click in the "dropdownOpened" method
      if ( !this.dropdownOptions && !!this.item.dropdownOpts ) this.dropdownOptions = this.item.dropdownOpts();
    }

  },

  computed: {
    filterBooks: function( ) {
      
      this.$compEmitter.emit('repositionSearchOpts'); // potentially changes the width of the container...
      
      let isRegularFilter = !(this.item.range || this.item.dropdownOpts); 
      let specialFilterIsActive = (!isRegularFilter && this.item.active === true);
      if ( isRegularFilter || specialFilterIsActive ) {

        const vue = this;
        const filterExtraRules = _.filter( this.$store.state.listRenderingOpts.filter, { type: 'filterExtras', active: true });

        let conditionCheck = function( book ) {

          let filterExtrasConditions = _.map( filterExtraRules, function( filter ) {
            return !!filter.condition( book, filter );
          });

          return !_.includes( filterExtrasConditions, false );

        };

        // I could just do "this.$store.getters.collection", but it would've shown 0 for unchecked regular filters.
        // So with this change even unchecked regular filters show a number... So you kinda know what you're missing.
        let collection = this.item.type === 'filter' ?
            (this.$store.getters.searchIsActive ? this.$store.state.searchCollection : this.$store.getters.collectionSource ) :
            this.$store.getters.collection;

        return _.filter( collection, function(book) {
          return vue.item.condition(book) && conditionCheck( book );
        });

      }
      else {
        return [];
      }

    },
    filterAmounts: function( ) {
      
      return this.filterBooks.length;

    },
    
    // filterHours: function( ) {
      
    //   const result = _.sumBy( this.filterBooks, ( book ) => {
    //     const length = book.length ? this.timeStringToSeconds(book.length) : 0;
    //     return length;
    //   });
      
    //   return this.secondsToTimeString(result, true);

    // },

    rangeVal: function() {
      // let itemRange = _.get( this.item, 'range' );
      // return _.isArray(itemRange) ? itemRange : this.range.value;
      return this.range.value;
    },

    inputVmodel: {
      get: function() {
        return this.item.active;
      },
      set: function(value) {

        let changes = {
          listName: this.listName,
          key: this.item.key,
          active: value,
        };

        if ( this.item.range ) {
          changes.range = value ? _.clone( this.range.value ) : true;
        }

        if ( this.item.group ) changes.group = true;
        this.$store.commit("updateListRenderingOpts", changes);
        this.doTheThings( value );

      }
    },

  },

  methods: {

    

    isActiveSortItem: function( item ) {
      
      if ( this.listName === "sort" ) {
        if ( item.current ) {
          const searching = this.$store.getters.searchIsActive;
          if ( !searching || (searching && this.$route.query.sort) ) {
            return true;
          }
        }
      }
      
      return false;
      
    },
    
    tooltipFormatter: function( val ) {
      return val + this.item.rangeSuffix;
    },

    dropdownChanged: function( value ) {

      let changes = {
        listName: this.listName,
        key: this.item.key,
        active: value.length > 0,
        value: value,
      };

      if ( this.item.group ) changes.group = true;
      this.$store.commit("updateListRenderingOpts", changes);
      this.doTheThings( value, true );

    },

    dropdownOpened: function( e ) {

      const createDropdownDataOnFirstOpen = !this.dropdownOptions && !!this.item.dropdownOpts;
      if ( createDropdownDataOnFirstOpen ) this.dropdownOptions = this.item.dropdownOpts();

    },

    rangeChanged: function( value ) {

      this.range.value = value;

      let changes = {
        listName: this.listName,
        key: this.item.key,
        range: value,
        active: true,
      };

      if ( this.item.group ) changes.group = true;
      this.$store.commit("updateListRenderingOpts", changes);
      this.doTheThings( value, true);

    },

    adjustRange: function( direction ) {

      let changes = {
        listName: this.listName,
        key: this.item.key,
        active: true,
        range: [0,0],
      };

      if ( direction === 'left' ) {
        const min = this.range.min;
        changes.range[0]    = min;
        this.range.value = [min, this.range.value[1]];
      }
      else {
        const max = this.range.max;
        changes.range[1]    = max;
        this.range.value = [this.range.value[0], max];
      }

      if ( this.item.group ) changes.group = true;
      this.$store.commit("updateListRenderingOpts", changes);
      this.doTheThings( changes.range, true);
    },

    doTheThings: function( value, specialBoy ) {
      
      // if ( this.item.key === "sortValues" ) this.$compEmitter.emit("book-clicked", null);
    
      const action = {
        change: {
          scope : this.listName === "scope",
          sort  : this.listName === "sort",
          filter: this.listName === "filter",
        },
        randomize   : this.item.key === "randomize" && !this.$store.getters.searchIsActive,
        noSortvalues: this.item.key !== "sortValues",
        start: '',
      };
      
      
      if ( action.change.scope ) {
        action.start = 'start-scope';
      }
      else if ( ( action.change.sort || action.randomize ) && action.noSortvalues ) {
        this.$store.commit("prop", { 'key': 'searchSort', value: false });
        action.start = 'start-sort';
      } else if ( action.change.filter ) {
        action.start = 'start-filter';
      } 
      
      this.saveOptions( value, specialBoy);
      this.$compEmitter.emit( action.start );
      
        
    },

    saveOptions: function( value, specialBoy ) {
      const sortKey = this.item.key;
      const sortType = this.item.type;
      const queryObj = {};
      
      if ( sortKey === "sortValues" ) {
        queryObj[ sortKey ] = value;
      }
      else if ( sortType === "sort" ) { 
        
        queryObj[ sortType ] = sortKey;
        queryObj.sortDir = value ? "desc" : "asc";
        
      }
      else if ( this.listName === "filter" ) {
        if ( sortType === 'filter') {
          
          queryObj[ sortType ] = encodeURIComponent(this.$store.getters.filterKeys);
          
        }
        if ( sortType === 'filterExtras' ) {
          
          if ( this.$route.name === 'series' ) {
            if ( sortKey.match(/inLibrary|notInLibrary/) ) {
              this.$store.commit('prop', { key: 'sticky.seriesFilters.' + sortKey, value: value });
            }
          }
          
          let vue = this;
          const filterExtrasKeys = vue.$store.getters.filterExtrasKeys;
          const queryKeysArray = !filterExtrasKeys ? false : _.map( filterExtrasKeys.split(','), function( key ) {
            const keyItem = _.find( vue.$store.state.listRenderingOpts.filter, { key: key });
            let range = _.get(vue.range, 'value');
            if ( !range ) range = _.get(keyItem, 'range');
            if ( range && _.isArray(range) ) {
              return encodeURIComponent( key + ':' + range[0] +'-'+ (range[1]||range[0]) );
            }
            else if ( _.get(keyItem, 'value.0') ) {
              return encodeURIComponent(key + ':') + encodeURIComponent(_.map( keyItem.value, function( val ) { return val; }).join('|'));
            }
            else if ( key ) { 
              return encodeURIComponent(key); 
            }
          });
          
          queryObj[ sortType ] = _.isArray(queryKeysArray) ? queryKeysArray.join(', ') : null;
          
        }
      }
      else if ( this.listName === "scope" ) {
        
        queryObj[ this.listName ] = encodeURIComponent(this.$store.getters.scopeKeys);
        
      }
      
      queryObj.book = null;
      this.$store.commit('prop', { key: 'bookClicked', value: true });
      
      this.$updateQueries( queryObj, { src: 'saveOptions' });
      
    },

  },
};

const _hoisted_1$4 = { class: "sorter-button-wrapper" };
const _hoisted_2$3 = ["content"];
const _hoisted_3$3 = ["value"];
const _hoisted_4$2 = {
  key: 2,
  class: "radiobutton"
};
const _hoisted_5$2 = {
  key: 3,
  class: "checkbox"
};
const _hoisted_6$2 = {
  key: 0,
  class: "dropdown-label-suffix"
};
const _hoisted_7$1 = {
  key: 0,
  class: "label-exclude"
};
const _hoisted_8 = {
  key: 1,
  class: "label-include"
};
const _hoisted_9 = {
  key: 5,
  class: "books-in-filter"
};
const _hoisted_10 = {
  key: 0,
  class: "range-slider"
};
const _hoisted_11 = { key: 1 };

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa6_solid_sort_down = __unplugin_components_0$2;
  const _component_fa6_solid_sort_up = __unplugin_components_1$1;
  const _component_fa_regular_circle = __unplugin_components_2$1;
  const _component_fa_regular_dot_circle = __unplugin_components_3$1;
  const _component_ic_round_square = __unplugin_components_4;
  const _component_fa_solid_check = __unplugin_components_5;
  const _component_vue_slider = resolveComponent("vue-slider");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("span", _hoisted_1$4, [
    ($props.item)
      ? withDirectives((openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass($props.item.key),
          content: $props.item.tippy ? $props.item.tippy : false
        }, [
          createBaseVNode("label", {
            class: normalizeClass(["sorter-button", { ranged: $props.item.range, 'faux-disabled': ($props.item.type === 'filterExtras' ? $options.filterAmounts < 1 : false), 'is-dropdown': $props.item.dropdownOpts }])
          }, [
            ($props.label === false)
              ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(["input-label", { active: $options.isActiveSortItem($props.item) }])
                }, [
                  renderSlot(_ctx.$slots, "default", {}, undefined, true)
                ], 2))
              : createCommentVNode("", true),
            withDirectives(createBaseVNode("input", {
              type: "checkbox",
              value: $props.index,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.inputVmodel) = $event))
            }, null, 8, _hoisted_3$3), [
              [vModelCheckbox, $options.inputVmodel]
            ]),
            ($props.item.type === 'sort')
              ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass(["sortbox", { active: $options.isActiveSortItem($props.item) }])
                }, [
                  createVNode(_component_fa6_solid_sort_down, { "data-icon": "sort-down" }),
                  createVNode(_component_fa6_solid_sort_up, { "data-icon": "sort-up" })
                ], 2))
              : ($props.item.radiobutton)
                ? (openBlock(), createElementBlock("span", _hoisted_4$2, [
                    createVNode(_component_fa_regular_circle, { "data-icon": "circle" }),
                    createVNode(_component_fa_regular_dot_circle, { "data-icon": "circle" })
                  ]))
                : (openBlock(), createElementBlock("span", _hoisted_5$2, [
                    createVNode(_component_ic_round_square, { "data-icon": "square" }),
                    createVNode(_component_fa_solid_check, { "data-icon": "check" })
                  ])),
            ($props.label !== false)
              ? (openBlock(), createElementBlock("span", {
                  key: 4,
                  class: normalizeClass(["input-label", { active: $options.isActiveSortItem($props.item) }])
                }, [
                  createBaseVNode("span", null, [
                    createTextVNode(toDisplayString($props.item.label || $props.item.key.replace(".name", "")) + " ", 1),
                    ($props.item.dropdownOpts)
                      ? (openBlock(), createElementBlock("span", _hoisted_6$2, [
                          ($props.item.exclude)
                            ? (openBlock(), createElementBlock("span", _hoisted_7$1, "Exclude"))
                            : (openBlock(), createElementBlock("span", _hoisted_8, "Include"))
                        ]))
                      : createCommentVNode("", true)
                  ])
                ], 2))
              : createCommentVNode("", true),
            ($props.listName === 'filter')
              ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString($options.filterAmounts), 1))
              : createCommentVNode("", true)
          ], 2),
          ($props.item.range)
            ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createBaseVNode("span", {
                  style: {"font-size":"13px","line-height":"13px","cursor":"w-resize"},
                  onClick: _cache[1] || (_cache[1] = $event => ($options.adjustRange('left')))
                }, toDisplayString(_ctx.range.value[0]) + toDisplayString($props.item.rangeSuffix), 1),
                createVNode(_component_vue_slider, {
                  disabled: _ctx.range.disabled,
                  dragOnClick: true,
                  adsorb: true,
                  lazy: true,
                  hideLabel: true,
                  included: !!(_ctx.range.marks),
                  interval: _ctx.range.min === _ctx.range.max ? 1 : ($props.item.rangeInterval || 1),
                  marks: _ctx.range.marks,
                  modelValue: _ctx.range.value,
                  min: _ctx.range.min,
                  max: _ctx.range.max,
                  "min-range": _ctx.range.min === _ctx.range.max ? 0 : ($props.item.rangeMinDist || 0),
                  "enable-cross": false,
                  onChange: $options.rangeChanged,
                  "tooltip-formatter": $props.item.tooltipFormatter || $options.tooltipFormatter,
                  "tooltip-placement": "top",
                  tooltip: "active",
                  "use-keyboard": false,
                  onDragStart: _cache[2] || (_cache[2] = $event => (_ctx.$store.commit('prop', { key: 'searchOptCloseGuard', value: true }))),
                  onDragEnd: _cache[3] || (_cache[3] = $event => (_ctx.$store.commit('prop', { key: 'searchOptCloseGuard', value: false })))
                }, null, 8, ["disabled", "included", "interval", "marks", "modelValue", "min", "max", "min-range", "onChange", "tooltip-formatter"]),
                createBaseVNode("span", {
                  style: {"font-size":"13px","line-height":"13px","cursor":"e-resize"},
                  onClick: _cache[4] || (_cache[4] = $event => ($options.adjustRange('right')))
                }, toDisplayString(_ctx.range.value[1]) + toDisplayString($props.item.rangeSuffix), 1)
              ]))
            : createCommentVNode("", true),
          (!!$props.item.dropdownOpts)
            ? (openBlock(), createElementBlock("div", _hoisted_11, [
                createVNode(_component_Multiselect, {
                  ref: "multiselect",
                  value: $props.item.value,
                  placeholder: $props.item.placeholder || 'Include...',
                  onChange: $options.dropdownChanged,
                  onOpen: $options.dropdownOpened,
                  options: _ctx.dropdownOptions,
                  mode: "tags",
                  hideSelected: true,
                  clearOnSelect: false,
                  closeOnSelect: false,
                  multiple: true,
                  taggable: true,
                  searchable: true,
                  "track-by": $props.item.dropdownTrackBy,
                  label: $props.item.dropdownLabel,
                  valueProp: $props.item.dropdownValueProp
                }, null, 8, ["value", "placeholder", "onChange", "onOpen", "options", "track-by", "label", "valueProp"])
              ]))
            : createCommentVNode("", true)
        ], 10, _hoisted_2$3)), [
          [_directive_tippy, { 
        delay: 150,
        maxWidth: 350, 
        placement: ($props.tippyTop ? 'top' : 'left'), 
        flipBehavior: ($props.tippyTop ? ['top', 'bottom', 'left', 'right'] : ['left', 'top', 'bottom', 'right']),
        distance: $props.listName ? 20 : 10,
      }]
        ])
      : createCommentVNode("", true)
  ]))
}
const __unplugin_components_1 = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3],['__scopeId',"data-v-2ac66435"]]);

const _hoisted_1$3 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$3, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273c-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556c4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504C119.034 504 8.001 392.967 8 256.002C7.999 119.193 119.646 7.755 256.455 8"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$1 = markRaw({ name: 'fa-solid-redo-alt', render });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$2 = {
  name: "searchOptions",
  props: ["listName"],
  data: function() {
    return {
      css: {
        arrow: { left: "0px" },
        options: { right: "0px" },
      },
    };
  },
  
  computed: {
    
    mainfilters() {
      
      const inWishlist = this.$route.name === 'wishlist';
      const inSeriesSubPage = this.$route.name === 'series';
      const inPodcasts = this.$route.name === 'podcasts';
      
      return _.filter( this.optionsList, ( item ) => {
        
        let conditionsOK = this.allTrue({
          'is regular filter'          : item.type === 'filter',
          'exclude from wishlist'      : inWishlist ? !item.excludeFromWishlist : true,
          'exclude from series subpage': inSeriesSubPage ? !item.excludeFromSeriesSubPage : true,
          'exclude from podcasts'      : inPodcasts ? !item.excludeFromPodcasts : true,
        });
        
        if ( !inWishlist && item.onlyWishlist ) conditionsOK = false;
        
        return conditionsOK;
        
      });
      
    },
    
    filteredOptionsList() {
      
      const inWishlist   = this.$route.name === 'wishlist';
      const inSeriesSubPage = this.$route.name === "series";
      const inPodcasts = this.$route.name === 'podcasts';
      const viewModeGrid = this.$store.state.sticky.viewMode !== 'grid';
      
      return _.filter( this.optionsList, ( item ) => {
        
        let conditionsOK = this.allTrue({
          'no sort values in list view': !(viewModeGrid && item.key === 'sortValues'),
          'is not a regular filter'    : item.type !== 'filter',
          'exclude from wishlist'      : inWishlist ? !item.excludeFromWishlist : true,
          'exclude from series subpage': inSeriesSubPage ? !item.excludeFromSeriesSubPage: true,
          'exclude from podcasts'      : inPodcasts ? !item.excludeFromPodcasts : true,
        });
        
        if ( !inWishlist && item.onlyWishlist ) conditionsOK = false;
        
        return conditionsOK;
      });
      
    },
    
  },

  created: function() {
    
    this.$store.commit('prop', { key: 'lazyScroll', value: false });
    this.$updateQueries({ y: null });
    
    this.optionsList = this.$store.state.listRenderingOpts[ this.listName ];
    
  },

  mounted: function() {
    
    // Reposition options list
    this.repositionSearchOptions();
    this.$compEmitter.on("repositionSearchOpts", this.repositionSearchOptions);
    this.$compEmitter.on("afterWindowResize", this.repositionSearchOptions);

  },

  beforeUnmount: function() {
    
    this.$compEmitter.off("repositionSearchOpts", this.repositionSearchOptions);
    this.$compEmitter.off("afterWindowResize", this.repositionSearchOptions);
    
    scroll({ top: 0, behavior: 'smooth' });
    
    this.$store.commit('prop', { key: 'searchOptOpenHeight', value: null });
    this.$store.commit('prop', { key: 'lazyScroll', value: true });
    
  },

  methods: {
    
    allTrue( input ) {
      
			input = _.values( input );
			return _.every( input );
      
    },
    
    resetFilters: function() {
      
      this.$updateQueries({ filter: null, filterExtras: null });
      this.$store.commit("resetFilters");
      this.$compEmitter.emit("start-filter");
      
    },
    
    repositionSearchOptions: _.debounce(function() {
      
      this.$nextTick(function() {
        
        const searchOpts = {};
        searchOpts.el = this.$refs.options;
        searchOpts.width = searchOpts.el.offsetWidth;
        searchOpts.left = searchOpts.el.offsetLeft;

        const iconsWrapper = {};
        iconsWrapper.el = document.querySelector("#ale-search > .icons");
        iconsWrapper.width = iconsWrapper.el.offsetWidth;

        const option = {};
        option.el = document.querySelector(".search-opt-btn.active").parentNode;
        option.width = option.el.offsetWidth;

        option.left = option.el.offsetLeft;
        // searchOpts.position = option.middle - (searchOpts.width/2);
        option.middle = iconsWrapper.width - (option.left + option.width / 2);
        searchOpts.position = option.middle - searchOpts.width / 2;

        const difference =
          option.el.getBoundingClientRect().left +
          option.width / 2 +
          searchOpts.width / 2 -
          window.innerWidth;

        const fitToWindow = difference > 0 ? difference + 20 /* margin / */ : 0;

        this.css.options.right = searchOpts.position + fitToWindow + "px";
        this.css.arrow.left = searchOpts.width / 2 - 10 + fitToWindow + "px";
        
      });
    }, 150, { leading: true, trailing: false }),
    
    sortersMounted: _.debounce(function() {
      
      if ( this.$refs.options ) {
        let maxHeight = this.$refs.options.offsetHeight + this.$refs.options.offsetTop;
        if ( window.innerHeight > maxHeight ) maxHeight = window.innerHeight;
        else maxHeight = maxHeight + 100;
        
        this.$store.commit('prop', { key: 'searchOptOpenHeight', value: maxHeight });
      }
      
    }, 250, { leading: false, trailing: true }),
    
  }
};

const _hoisted_1$2 = { class: "search-options-inner-wrap" };
const _hoisted_2$2 = { class: "total" };
const _hoisted_3$2 = ["content"];

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa_solid_redo_alt = __unplugin_components_0$1;
  const _component_gallery_sorter = __unplugin_components_1;
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", {
    id: "search-options",
    ref: "options",
    class: normalizeClass($props.listName+'-options'),
    style: normalizeStyle(_ctx.css.options)
  }, [
    createBaseVNode("div", _hoisted_1$2, [
      createBaseVNode("div", {
        class: "search-opts-arrow",
        style: normalizeStyle(_ctx.css.arrow)
      }, null, 4),
      ($props.listName === 'filter' && _ctx.$store.getters.regularFilters)
        ? (openBlock(), createElementBlock("ul", {
            key: 0,
            class: "regular-filters",
            style: normalizeStyle({ top: _ctx.$store.state.topNavOffset + 'px' })
          }, [
            withDirectives((openBlock(), createElementBlock("li", {
              class: "reset-filters",
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.resetFilters && $options.resetFilters(...args))),
              content: "Reset filters"
            }, [
              createVNode(_component_fa_solid_redo_alt)
            ])), [
              [_directive_tippy, { placement: 'top', flipBehavior: ['top', 'right', 'bottom', 'left'] }]
            ]),
            createBaseVNode("li", _hoisted_2$2, [
              createBaseVNode("span", {
                class: normalizeClass({ difference: _ctx.$store.getters.collection.length !== _ctx.$store.getters.collectionTotal })
              }, toDisplayString(_ctx.$store.getters.collection.length), 3),
              createTextVNode(" / " + toDisplayString(_ctx.$store.getters.collectionTotal), 1)
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.mainfilters, (item, index) => {
              return (openBlock(), createElementBlock("li", {
                class: "search-option",
                key: item.key
              }, [
                createVNode(_component_gallery_sorter, {
                  label: item.label,
                  item: item,
                  index: index,
                  currentList: _ctx.optionsList,
                  listName: $props.listName,
                  onVnodeMounted: $options.sortersMounted
                }, null, 8, ["label", "item", "index", "currentList", "listName", "onVnodeMounted"])
              ]))
            }), 128)),
            (_ctx.$store.getters.collectionHours)
              ? withDirectives((openBlock(), createElementBlock("li", {
                  key: 0,
                  class: "duration-text",
                  content: _ctx.$store.getters.collectionHours
                }, [
                  createBaseVNode("small", null, toDisplayString(_ctx.$store.getters.collectionDuration), 1)
                ], 8, _hoisted_3$2)), [
                  [_directive_tippy, { placement: 'top', flipBehavior: ['top', 'left', 'bottom', 'right'] }]
                ])
              : createCommentVNode("", true)
          ], 4))
        : createCommentVNode("", true),
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredOptionsList, (item, index) => {
          return (openBlock(), createElementBlock("li", {
            class: normalizeClass(["search-option", { extras: item.type && item.type.match(/extra/i), divider: item.type === 'divider' }]),
            key: item.key
          }, [
            (item.type !== 'divider')
              ? (openBlock(), createBlock(_component_gallery_sorter, {
                  key: 0,
                  label: item.label,
                  item: item,
                  index: index,
                  currentList: _ctx.optionsList,
                  listName: $props.listName,
                  onVnodeMounted: $options.sortersMounted
                }, null, 8, ["label", "item", "index", "currentList", "listName", "onVnodeMounted"]))
              : createCommentVNode("", true)
          ], 2))
        }), 128))
      ])
    ])
  ], 6))
}
const __unplugin_components_3 = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */
const _sfc_main$1 = {
  name: "searchIcons",
  props: ["listName"],
  data: function() {
    return {
      items: [
        {
          name: "scope",
          on: true,
          active: false,
          icon: "fa-solid fa-microscope",
          tooltip: "Change the search scope for more accurate results"
        },
        {
          name: "filter",
          on: true,
          active: false,
          icon: "fa-solid fa-filter",
          tooltip: "Filter books"
        },
        {
          name: "sort",
          on: true,
          active: false,
          icon: "fa-solid fa-sort",
          tooltip: "Sort books"
        }
      ]
    };
  },
  
  computed: {
    // totalTitle: function() {
    //   return (( this.$route.meta.title === this.$store.state.pageTitle ) ? this.$store.state.pageTitle : (this.$store.state.pageTitle ? (this.$route.meta.title + ' - ' + this.$store.state.pageTitle) : this.$route.meta.title));
    // },
    filtersActive: function() {
      return this.$store.getters.filterExtrasKeys || (this.$store.getters.filterKeys !== 'notStarted,started,finished' && this.$store.getters.filterKeysLength );
    },
    
    filteredItems() {
      return _.filter( this.items, (item) => {
        return this.showIcon( item );
      });
    },
    
  },
  
  methods: {
    
    openSearchOptions: function(clickedOption, e) {
      const listBeforeClick = this.listName;
      this.$emit("update:listName", false);
      if (listBeforeClick !== clickedOption.name) {
        this.$nextTick(function() {
          this.$emit("update:listName", clickedOption.name);
        });
      }
    },
    
    showIcon: function( item ) {
      if ( !item ) return;
      switch ( item.name ) {
        case 'scope':
          return this.$store.state.listRenderingOpts[ item.name ].length > 0;
          
        case 'filter':
          let noRegularFilters = !this.$store.getters.regularFilters;
          return _.filter( this.$store.state.listRenderingOpts[ item.name ], function( filter ) {
            
            let isDivider = filter.type === 'divider';
            let isFilter = noRegularFilters ? true : filter.type === item.name;
            return !isDivider && isFilter;
            
          }).length > 0;
          
        case 'sort':
          return _.filter( this.$store.state.listRenderingOpts[ item.name ], function( filter ) {
            
            let isDivider = filter.type === 'divider';
            let isFilter = filter.type === item.name;
            return !isDivider && isFilter;
            
          }).length > 0;
      }
    },
    
  }
};

const _hoisted_1$1 = { class: "icons" };
const _hoisted_2$1 = ["content"];
const _hoisted_3$1 = { class: "book-in-selection" };
const _hoisted_4$1 = { class: "inner-wrap" };
const _hoisted_5$1 = ["content", "onClick"];
const _hoisted_6$1 = ["data-option"];

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    withDirectives((openBlock(), createElementBlock("div", {
      class: "icon-wrap",
      content: 'Items in current selection: <strong>'+ _ctx.$store.getters.collection.length +'</strong> / <strong>' + _ctx.$store.getters.collectionTotal +'</strong>.' + (!_ctx.$store.getters.collectionHours ? '' : '<br> That amounts to: ' + _ctx.$store.getters.collectionHours + ' ' + `or ${_ctx.$store.getters.collectionDuration}.`) + ' ' + (_ctx.$route.name === 'series' ? 'Owned books only!' : '')
    }, [
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("div", _hoisted_4$1, toDisplayString(_ctx.$store.getters.collection.length), 1)
      ])
    ], 8, _hoisted_2$1)), [
      [_directive_tippy, { trigger: 'click mouseenter' }]
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredItems, (item) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        key: item.name,
        class: normalizeClass(["icon-wrap", { disabled: !item.on }]),
        content: item.tooltip,
        onClick: $event => ($options.openSearchOptions(item, $event))
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["search-opt-btn", { active: $props.listName === item.name, 'active-filters': item.name === 'filter' && $options.filtersActive }]),
          "data-option": item.name
        }, [
          createBaseVNode("i", {
            class: normalizeClass(item.icon)
          }, null, 2)
        ], 10, _hoisted_6$1)
      ], 10, _hoisted_5$1)), [
        [_directive_tippy]
      ])
    }), 128))
  ]))
}
const __unplugin_components_2 = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-3649eece"]]);

const sortName = {
  methods: {
    sortName: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          if ( o.name ) return o.name;
        },
        params.direction
      );
    }
  }
};

const sortIsbns = {
  methods: {
    sortIsbns: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          if ( o.isbns ) {
            
            if ( params.sortKey === 'isbn10' ) {
              const isbn10 = _.find(o.isbns, ["type", "ISBN_10"]);
              if (isbn10) return ''+isbn10.identifier;
              else return null;
            }
            else if ( params.sortKey === 'isbn13' ) {
              const isbn13 = _.find(o.isbns, ["type", "ISBN_13"]);
              if (isbn13) return ''+isbn13.identifier;
              else return null;
            }
            
          } else {
            return null;
          }
          
        },
        params.direction
      );
    }
  }
};

const sortTitle = {
  methods: {
    sortTitle: function(params) {
      return _.orderBy(
        params.books,
        [ 
          function(o) {
            const sortValue = o[params.sortKey];
            if (sortValue) {
              if (params.sortKey === "title") {
                // Audible library sorts with the particles, so...
                
                // var titleLowercase = o.title.toLowerCase();
                // const getThe = titleLowercase.match(/^the /);
                // const getA = titleLowercase.match(/^a /);
                // const getAn = titleLowercase.match(/^an /);
                // const replacements =
                //   (getThe && /^the /) || (getA && /^a /) || (getAn && /^an /);
                // if (replacements) titleLowercase = titleLowercase.replace(replacements, "");
                // return titleLowercase.toLowerCase();
                return o.title || o.titleShort;
              } else {
                if ( _.isArray( sortValue ) && _.find( sortValue, 'name') ) { 
                  return _.map(sortValue, 'name').join(', ');
                }
                else { 
                  return sortValue; 
                }
              }
            } else {
              return null;
            }
          },
          // function(o) {
          //   return o.title || o.titleShort;
          // }
        ],
        params.direction
      );
    }
  }
};

const sortAmount = {
  methods: {
    sortAmount: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          // console.log( params.sortKey )
          if ( params.sortKey === 'amountTotal' ) {
            if ( o.allBooksMinusDupes ) return o.allBooksMinusDupes.length;
            else if ( o.allBooks ) return o.allBooks.length;
          }
          else {
            if ( o.books ) return o.books.length
          }
        },
        params.direction
      );
    },
  }
};

const sortLength = {
  mixins: [timeStringToSeconds],
  methods: {
    sortLength: function(params) {
      const vue = this;
      return _.orderBy(
        params.books,
        function(o) {
          if (o.length) return vue.timeStringToSeconds(o.length);
          else return 0;
        },
        params.direction
      );
    }
  }
};

const sortRatings = {
  methods: {
    sortRatings: function(params) {
      
      const key = params.sortKey;
      const sortArray = [];
      const directionArray = [ params.direction ];
      
      sortArray.push( function(o) {
        const value = _.get( o, key, 0 );
        return Number(value);
      });
      
      switch ( key ) {
        case 'myRating':
        case 'rating':
          sortArray.push( function(o) {
            const numberOfRatings = _.get( o, 'ratings', 0 );
            return Number(numberOfRatings);
          });
          directionArray.push( params.direction );
          break;
        case 'ratings':
          sortArray.push( function(o) {
            const rating = _.get( o, 'rating', 0 );
            return Number(rating);
          });
          directionArray.push( params.direction );
          break;
      }
      
      return _.orderBy(
        params.books,
        sortArray,
        directionArray
      );
    }
  }
};

const sortByLength = {
  methods: {
    sortByLength: function(params) {
      return _.orderBy(
        params.books, 
        function( book ) {
          
          if ( params.sortKey === 'narratorsNumber' ) {
            if ( book.narrators ) {
              let hasFullCast = _.find( book.narrators, function( narrator ) { return narrator.name.match('full cast') });
              if ( hasFullCast && book.narrators.length === 1 ) {
                return 99999999;
              }
              else {
                return book.narrators.length -(hasFullCast ? 1 : 0);
              }
            }
            else {
              return 0;
            }
          }
          else {
            return book[params.sortKey].length || 0;
          }
          
        },
        params.direction
      );
    }
  }
};

const sortProgress = {
  mixins: [timeStringToSeconds],
  methods: {
    sortProgress: function(params) {
      var vue = this;
      return _.orderBy(
        params.books, [
          function(o) {
            if (o.progress) {
              if (o.progress.toLowerCase().trim() === "finished") {
                return 100;
              } else if (o.length) {
                var progress = vue.timeStringToSeconds(o.progress);
                const length = vue.timeStringToSeconds(o.length);
                progress = length - progress;
                return (progress / length) * 100;
              } else {
                return 0;
              }
            } else {
              return 0;
            }
          },
          function(o) {
            if (o.length) return !vue.timeStringToSeconds(o.length);
            else return 0;
          },
        ],
        params.direction
      );
    }
  }
};

const sortDateAdded = {
  methods: {
    sortDateAdded: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          return o.added;
        },
        params.direction
      );
    }
  }
};

const sortFavorites = {
  methods: {
    sortFavorites: function(params) {
      return _.orderBy( params.books, function(o) { return o.favorite }, params.direction );
    }
  }
};

const sortWhispersync = {
  methods: {
    sortWhispersync: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          const sortValue = o[params.sortKey];
          if (sortValue) {
            if ( sortValue === 'owned' ) return 2;
            else if ( sortValue === 'available' ) return 1;
          } else {
            return 0;
          }
        },
        params.direction
      );
    }
  }
};

const sortBookNumbers = {
  methods: {
    
    sortBookNumbers: function(params) {
      
      // const seriesAsin = this.$route.params.series;
      // const seriesObj = _.find( this.$store.state.library.series, { asin: seriesAsin });
      return _.orderBy(
        params.books, 
        function( book ) {
          
          return book.added;
          
        },
        params.direction
      );
    },
    
    sortBookNumbersOriginal: function(params) {
      
      const seriesAsin = this.$route.params.series;
      
      return _.orderBy(
        params.books, 
          function(o) {
            
            let numberize = function( allNumbers ) {
              if (_.isEmpty( allNumbers ) || !allNumbers ) allNumbers = undefined;
              const numbers = _.isArray(allNumbers) ? allNumbers[0] : allNumbers;
              const dashSplit = typeof numbers == "string" ? numbers.split("-") : [numbers];
              return dashSplit[0] ? parseFloat(dashSplit[0]) : dashSplit[0];
            };
            
            if ( seriesAsin && o.series ) {
              let activeSeries = _.find( o.series, { asin: seriesAsin });
              return numberize(activeSeries.bookNumbers);
            }
            else {
                
              let anyNumbers = _.find(o.series, "bookNumbers");
              if (anyNumbers) {
                
                let allNumbers = _.filter( o.series, 'bookNumbers');
                allNumbers = _.map( allNumbers, 'bookNumbers');
                allNumbers = _.flatten( allNumbers );
                return numberize( allNumbers );
              } 
              else {
                
                let inSeries = _.find(o.series);
                if ( inSeries ) return -1; // In series: no number
                else return -2; // Not in series
              }
              
            }
          },
        // ],
        params.direction
      );
    },
    
    // sortBookNumbersOriginal: function(params) {
    //   return _.orderBy(
    //     params.books, 
    //       // [
    //       // function(o) {
    //       //   return this.$store.state.sortBySeries
    //       // },
    //       function(o) {
    //         // let allNumbers = _.filter( o.series, 'bookNumbers')
    //         // allNumbers = _.map( allNumbers, 'bookNumbers')
    //         // allNumbers = _.flatten( allNumbers );
    //         // if (_.isEmpty( allNumbers ) ) allNumbers = null;
  
    //         let anyNumbers = _.find(o.series, "bookNumbers");
    //         if (anyNumbers) {
    //           const seriesObj = _.find(o.series, [ "name", params.seriesName ? params.seriesName : o.series[0].name ]);
              
    //           if ( o.series && _.find( o.series, { name: 'The Secret History of the World, Repairman Jack, The Adversary Cycle' }) ) console.log('%c' + 'series' + '', 'background: #00bb1e; color: #fff; padding: 2px 5px; border-radius: 8px;', o.series);
              
    //           const number = seriesObj.bookNumbers;
    //           if ( o.title === 'The Tomb: Repairman Jack #1' ) console.log( number )
    //           const numbers = _.isArray(number) ? number[0] : number;
    //           // If the number is a string, we assume it's a number range (Some collections/omnibusses have these: books 1-3)
    //           // ...and once again use the first number from that range
    //           const dashSplit = typeof numbers == "string" ? numbers.split("-") : [numbers];
    //           return parseFloat(dashSplit[0]);
    //         } else {
    //           return params.missingNumber >= 0 ? params.missingNumber : 9999999;
    //         }
    //       },
    //     // ],
    //     params.direction
    //   );
    // },
  }
};

const sortReleaseDate = {
  methods: {
    sortReleaseDate: function(params) {
      return _.orderBy(
        params.books,
        function(o) {
          if ( o.releaseDate ) {
            return new Date(o.releaseDate.split('-').join('/'));
          }
          else {
            return 0;
          }
        },
        params.direction
      );
    }
  }
};

const sortStringNameProp = {
  methods: {
    sortStringNameProp: function(params) {
      const keyMinusName = params.sortKey.replace(".name", "");
      return _.orderBy(
        params.books,
        function(o) {
          return o[keyMinusName]
            ? o[keyMinusName][0].name.toLowerCase()
            : null;
        },
        params.direction
      );
    }
  }
};

const sortMissing = {
  methods: {
    sortMissing: function(params) {
      return _.orderBy(
        params.books, // actually series
        [series => series.allBooksMinusDupes ? series.allBooksMinusDupes.length - series.books.length : (series.allBooks ? series.allBooks.length - series.books.length : 0), series => series.myRating],
        [params.direction, "desc"]
      );
    }
  }
};

const sortPrice = {
  methods: {
    
    sortPrice: function(params) {
      
      // const seriesAsin = this.$route.params.series;
      // const seriesObj = _.find( this.$store.state.library.series, { asin: seriesAsin });
      return _.orderBy(
        params.books, 
        function( book ) {
          
          return book.price;
          
        },
        params.direction
      );
    },
  }
};

const filterAndSort = {
  mixins: [
    sortName,
    sortIsbns,
    sortTitle,
    sortAmount,
    sortLength,
    sortRatings,
    sortProgress,
    sortByLength,
    sortDateAdded,
    sortFavorites,
    sortWhispersync,
    sortBookNumbers,
    sortReleaseDate,
    sortStringNameProp,
    sortMissing,
    sortPrice,
  ],
  methods: {

    filterBooks: function (books) {
      const filterRules = _.filter(this.$store.state.listRenderingOpts.filter, {type: 'filter', active: true});
      const regularFilters = _.find(this.$store.state.listRenderingOpts.filter, {type: 'filter'});
      const filterExtraRules = _.filter(this.$store.state.listRenderingOpts.filter, { type: 'filterExtras', active: true });

      if (filterRules || filterExtraRules) {
        
        function conditionCheck(book) {
          let filterConditions = _.map(filterRules, function (filter) {
            return !!filter.condition(book);
          });
          let filterExtrasConditions = _.map(filterExtraRules, function (filter) {
            return !!filter.condition(book);
          });

          return (regularFilters ? _.includes(filterConditions, true) : true) && !_.includes(filterExtrasConditions, false);
        }

        return _.filter(books, conditionCheck);
      } else {
        return books;
      }
    },

    sortBooks: function (books) {
      const sortByItem = _.find(this.$store.state.listRenderingOpts.sort, function (o) {
        if (o.key === 'randomize' && o.active) return true;
        else if (o.current) return true;
      });

      if (sortByItem) {

        const sortOptions = {
          books: books,
          direction: sortByItem.active ? "desc" : "asc",
          sortKey: sortByItem.key
        };

        switch (sortOptions.sortKey) {
          case "randomize":
            books = _.shuffle(books);
            break;
          case "bookNumbers":
            // sortOptions.seriesName = this.gallery.searchOptions.lists.numberSortSeriesName;
            sortOptions.missingNumber = 0;
            books = this.sortBookNumbersOriginal(sortOptions);
            break;
          case "seriesOrder":
            // sortOptions.seriesName = this.gallery.searchOptions.lists.numberSortSeriesName;
            sortOptions.missingNumber = 0;
            books = this.sortBookNumbers(sortOptions);
            break;
          case "added":
            books = this.sortDateAdded(sortOptions);
            break;
          case "releaseDate":
            books = this.sortReleaseDate(sortOptions);
            break;
          case "authors.name":
          case "narrators.name":
          case "publishers.name":
          case "categories":
          case "tags.name":
            books = this.sortStringNameProp(sortOptions);
            break;
          case "narratorsNumber":
            books = this.sortByLength(sortOptions);
            break;
          case "title":
          case "series":
          case "format":
          case "isNew":
          case "language":
          case "fromPlusCatalog":
          case "unavailable":
          case "favorite":
          case "downloaded":
          case "storePageMissing":
          case "storePageChanged":
          case "archived":
            books = this.sortTitle(sortOptions);
            break;
          case "whispersync":
            books = this.sortWhispersync(sortOptions);
            break;
          case "length":
            books = this.sortLength(sortOptions);
            break;
          case "myRating":
          case "rating":
          case "ratings":
            books = this.sortRatings(sortOptions);
            break;
          case "progress":
            books = this.sortProgress(sortOptions);
            break;
          case "favorite":
            books = this.sortFavorites(sortOptions);
            break;
          case "name":
            books = this.sortName(sortOptions);
            break;
          case "amount":
          case "amountTotal":
            books = this.sortAmount(sortOptions);
            break;
          case "isbn10":
          case "isbn13":
            books = this.sortIsbns(sortOptions);
            break;
          case "missing":
            books = this.sortMissing(sortOptions);
            break;
          case "price":
            books = this.sortPrice(sortOptions);
            break;
        }
      }
      
      // console.log('%c' + 'sorted books!' + '', 'background: #7d0091; color: #fff; padding: 2px 5px; border-radius: 8px;', _.clone(books));

      return books;
    }
  }
};

/* unplugin-vue-components disabled */

const _sfc_main = {
  name: "GallerySearch",
  mixins: [filterAndSort],
  props: ['collectionSource'],
  data: function() {
    return {
      enableZoomTimer: null,
      fuse: null,
      // Defaults
      fuseOptions: {
        keys: [],
        location: 0,
        // distance: 350,
        // threshold: 0.15,
        threshold: 0.3,
        ignoreLocation: true,
        shouldSort: true,
        includeScore: true,
        includeMatches: true,
        useExtendedSearch: true,
        minMatchCharLength: 2,
      },

      listName: false,

      waypointOpts: {
        rootMargin: "-37px"
      },
      fixedSearch: false,
      highlightSearch: false,
      readyToCloseOpts: false,
      autocompleteResults: [],
      useAutocomplete: false,
    };
  },
  
  mounted: function() {
    
    if ( this.$route.query.search ) {
      let searchQuery = decodeURIComponent(this.$route.query.search);
      this.$store.commit("prop", { key: "searchQuery", value: searchQuery });
    }
    
    this.$store.commit('prop', { key: 'collectionSource', value: this.collectionSource });
    
    let collection = this.$store.getters.collectionSource;
    const ifUrlParams = this.$route.query.sort || this.$route.query.filter || this.$route.query.filterExtras;
    if ( ifUrlParams ) {
      if ( this.$route.query.filter || this.$route.query.filterExtras ) collection = this.filterBooks( collection );
      if ( this.$route.query.sort   ) collection = this.sortBooks( collection );
      this.$store.commit("prop", { key: 'mutatingCollection', value: collection });
    }
    else {
      // this.$store.commit("prop", { key: 'mutatingCollection', value: collection });
      this.$store.commit("prop", { key: 'mutatingCollection', value: this.sortBooks( this.filterBooks( collection ) ) });
    }
    
    if ( this.$route.query.search ) {
      if ( this.$route.query.sort ) this.fuseOptions.shouldSort = false;
      this.search( null, 'on-load');
    }
    
    this.$refs.aleSearch.addEventListener( "touchstart", this.iosAutozoomDisable, { passive: true });
    this.$compEmitter.on("ios-auto-zoom-disable", this.iosAutozoomDisable);
    this.$compEmitter.on("start-scope", this.scope);
    this.$compEmitter.on("start-sort", this.sort);
    this.$compEmitter.on("start-filter", this.filter);
    this.$compEmitter.on("search-focus", this.focusOnSearch);
    this.$store.commit('prop', { key: 'searchMounted', value: true });
    
  },

  beforeUnmount: function() {
    
    this.$store.commit("prop", { key: "searchQuery", value: '' });
    this.$refs.aleSearch.removeEventListener( "touchstart", this.iosAutozoomDisable);
    this.$compEmitter.off("ios-auto-zoom-disable", this.iosAutozoomDisable);
    this.$compEmitter.off("start-scope", this.scope);
    this.$compEmitter.off("start-sort", this.sort);
    this.$compEmitter.off("start-filter", this.filter);
    this.$compEmitter.off("search-focus", this.focusOnSearch);
    this.$store.commit('prop', { key: 'searchMounted', value: false });
    
  },
  
  methods: {
    
    dontCloseOpts: _.throttle( function() {
      if ( this.readyToCloseOpts ) this.readyToCloseOpts = false;
    }, 50, { leading: false, trailing: true }),
    
    closeOpts: function() {
      if ( this.readyToCloseOpts ) {
        this.readyToCloseOpts = false;
        this.$nextTick(function() {
          let vue = this;
          setTimeout(function() {
            vue.listName = false;
          }, 30); // Timeout prevents interaction with elements below the overlay on click...
        });
      }
    },
    
    scope: function() {
      this.$nextTick(() => {
        // No need to shuffle anything when there's no active search
        if ( this.$store.getters.searchIsActive ) {
          this.$store.commit("prop", { key: 'mutatingCollection', value: this.sortBooks( this.filterBooks(this.$store.getters.collectionSource) ) });
          if ( !this.$store.getters.searchIsActive ) this.fuseOptions.shouldSort = false;
          this.search();
        } 
        
      });
    },
    filter: function() {
      this.$nextTick(() => {
        
        this.$store.commit("prop", { key: 'mutatingCollection', value: this.sortBooks( this.filterBooks(this.$store.getters.collectionSource) ) });
        
        if ( !this.$store.getters.searchIsActive ) this.fuseOptions.shouldSort = false;
        if ( this.$store.getters.searchIsActive ) {
          this.search();
        } 
        
      });
    },
    sort: function() {
      this.$nextTick(() => {
        
        this.$store.commit("prop", { key: ( this.$store.getters.searchIsActive ? 'searchCollection' : 'mutatingCollection'), value: this.sortBooks( this.$store.getters.collection ) });
        
      });
    },
    
    search: _.debounce( function( e, onLoad ) {
      
      // Reset 
      const newQueries = {};
      decodeURIComponent(this.$route.query.search);
      if ( !onLoad ) {
        newQueries.book = null;
        this.$store.commit('prop', { key: 'bookClicked', value: true });
      }
      
      const triggeredByEvent = e;
      if ( triggeredByEvent ) {
        
        this.fuseOptions.shouldSort = true;
        this.$store.commit("prop", { key: "searchQuery", value: e.target.value });
        newQueries.search = encodeURIComponent(e.target.value);
        if ( !newQueries.search ) newQueries.search = null;
        
        if ( e.target.value.trim() !== "" ) {
          if ( this.$route.query.sort ) {
            newQueries.sort = null;
            newQueries.sortDir = null;
          }
        }
        else {
          var activeSorter = _.find( this.$store.state.listRenderingOpts.sort, 'current');
            newQueries.sort = activeSorter.key;
            newQueries.sortDir = activeSorter.active ? "desc" : "asc";
        }
        
      }
      
      this.$updateQueries( newQueries );
      
      // Start searching
      if (this.$store.getters.searchIsActive) {
        const query = this.modifyQuery(this.$store.state.searchQuery);
        
        this.fuseOptions.keys = this.aliciaKeys;
        
        let vue = this;
        
        vue.fuse = new Fuse( vue.$store.state.mutatingCollection, vue.fuseOptions );
        let result = vue.fuse.search(query);
        
        if ( vue.useAutocomplete ) vue.autocomplete( result );
        result = _.map(result, 'item');
        
        vue.$store.commit("prop", { key: 'searchCollection', value: result });
        
      }
      // Stop searching  
      else {
        this.$store.commit("prop", { key: 'searchCollection', value: [] });
      }
      
      
    }, 270, { leading: false, trailing: true }),
    
    autocomplete: function( result ) {
      let sections = _.map( JSON.parse(JSON.stringify(this.aliciaKeys)), function( o, index ) {
        o.key = o.name;
        o.name = o.name.replace('.name', '');
        o.active = index < 1;
        return o;
      });
      
      _.each( result, function( item ) {
        _.each( item.matches, function( match ) {
          
          const targetSection = _.find( sections, { key: match.key });
          targetSection.books = targetSection.books || [];          
          targetSection.books.push({
            item: item.item,
            match: match,
            refIndex: item.refIndex,
            score: item.score,
          });
          
        });
      });
      
      sections = _.filter( sections, 'books');
      
      _.each( sections, function( section, i ) {
        section.books = _.uniqBy( section.books, 'match.value');
        section.books = section.books.slice(0,5);
        if ( section.books.length < 2 ) sections[i] = null;
        section.active = false;
      });
      
      sections = _.compact( sections );
      if ( sections.length ) sections[0].active = true;
      
      console.log('sections', sections);
      
      // sections = _.orderBy( sections, function( sect ) {
      //   return _.minBy( sect.books, 'score' ).score;
      // }, 'asc');
      
      this.autocompleteResults = sections;
      
      console.log( sections );
      
    },
    
    active_ac_item: function( item ) {
      _.each( this.autocompleteResults, function( o ) {
        o.active = false;
      });
      item.active = true;
    },
    
    searchAutocompleteResult: function( book ) {
      
      const searchQuery = book.match.value;
      this.$store.commit('prop', { key: "searchQuery", value: searchQuery });
      this.search();
      
    },
    
    searchEnterBlur: _.debounce( function(e) {
      this.$refs.searchInput.blur();
    }, 100, { leading: false, trailing: true }),
    
    restoreOptions: function() {
      
      updateListRenderingOpts();
      
    },
    
    focusOnSearch: function() {
      scroll({ top: 0 });
      this.$refs.searchInput.focus();
      // this.highlightSearch = true;
      // setTimeout(function() { vue.highlightSearch = false; }, 1200);
      
    },
    
    // scrolling: _.throttle(function(e) {
    //   if (!this.fixedSearch && window.pageYOffset > 44) {
    //     this.fixedSearch = true;
    //   } else if (this.fixedSearch && window.pageYOffset < 44) {
    //     this.fixedSearch = false;
    //   }
    // }, 350),
    
    // onWaypoint({ going, direction }) {
    //   // going: in, out
    //   // direction: top, right, bottom, left
    //   if (going === this.$waypointMap.GOING_IN) {
    //     this.fixedSearch = false;
    //   } else {
    //     this.fixedSearch = true;
    //   }
    // },

    modifyQuery: function(query) {
      let newQuery = query;
      
      if ( query.match(/&/i) || query.match(/ and /i) || query.match(/ a /i) || query.match(/ the /i) ) {
        newQuery = query + "|" + 
                   query.replace(/ & /ig, " ") + "|" + 
                   query.replace(/ and /ig, " ") + "|" + 
                   query.replace(/ a /ig, " ") + "|" + // For some reason titles with particles act kinda weird
                   query.replace(/ an /ig, " ") + "|" + // For some reason titles with particles act kinda weird
                   query.replace(/ the /ig, " "); // For some reason titles with particles act kinda weird
      }
      
      return newQuery;
    },

    iosAutozoomDisable: function() {
      // IOS input focus zoom workaround
      if ( document.querySelector('.is-ios') ) {
        
        const head = document.querySelector("head");
        let metaViewport = head.querySelector("meta[name=viewport]");
        metaViewport.content = "width=device-width, initial-scale=1.0, user-scalable=0";
        
        clearTimeout(this.enableZoomTimer);
        this.enableZoomTimer = setTimeout(function() {
          metaViewport.content = "width=device-width, initial-scale=1.0, user-scalable=1";
        }, 700);
      }
    },
    
  },
  computed: {
    aliciaKeys: function() {
      const filteredKeys = _.filter(
        this.$store.state.listRenderingOpts.scope,
        ["active", true]
      );
      return _.map(filteredKeys, function(item) {
        return { name: item.key, weight: item.weight || 0 };
      });
    },

    placeholder: function() {
      const placeholderKeys = (function(keys) {
        return _.map(keys, function(key) {
          return key.name.replace(".name", "");
        }).join(", ");
      })(this.aliciaKeys);

      return "Search: " + placeholderKeys;
    }
  }
};

const _hoisted_1 = {
  id: "ale-search",
  ref: "aleSearch"
};
const _hoisted_2 = ["value", "placeholder"];
const _hoisted_3 = {
  key: 1,
  class: "autocomplete"
};
const _hoisted_4 = { class: "header-wrapper" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "content" };
const _hoisted_7 = ["onClick"];

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_page_title = __unplugin_components_0$3;
  const _component_gallery_library_wishlist_switcher = __unplugin_components_1$2;
  const _component_gallery_search_icons = __unplugin_components_2;
  const _component_gallery_search_options = __unplugin_components_3;
  const _component_gallery_view_mode_switcher = __unplugin_components_4$1;

  return (openBlock(), createElementBlock("div", null, [
    createVNode(_component_gallery_page_title),
    (_ctx.$route.meta.subPage)
      ? (openBlock(), createBlock(_component_gallery_library_wishlist_switcher, {
          key: 0,
          aboveSearch: true
        }))
      : createCommentVNode("", true),
    createBaseVNode("div", {
      id: "ale-search-wrap",
      ref: "searchWrap",
      class: normalizeClass({ 'search-fixed': _ctx.fixedSearch, 'highlight-search': _ctx.highlightSearch })
    }, [
      withDirectives(createBaseVNode("div", {
        id: "search-dropdown-overlay",
        onMousedown: _cache[0] || (_cache[0] = $event => (_ctx.readyToCloseOpts = true)),
        onTouchstart: _cache[1] || (_cache[1] = $event => (_ctx.readyToCloseOpts = true)),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => ($options.dontCloseOpts && $options.dontCloseOpts(...args))),
        onClick: _cache[3] || (_cache[3] = (...args) => ($options.closeOpts && $options.closeOpts(...args)))
      }, null, 544), [
        [vShow, _ctx.listName]
      ]),
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", {
          class: "search-wrapper",
          onClick: _cache[7] || (_cache[7] = $event => (_ctx.$refs.searchInput.focus()))
        }, [
          createBaseVNode("input", {
            type: "search",
            ref: "searchInput",
            value: _ctx.$store.state.searchQuery,
            onInput: _cache[4] || (_cache[4] = (...args) => ($options.search && $options.search(...args))),
            onKeyup: _cache[5] || (_cache[5] = withKeys((...args) => ($options.searchEnterBlur && $options.searchEnterBlur(...args)), ["enter"])),
            placeholder: $options.placeholder,
            onFocus: _cache[6] || (_cache[6] = $event => (_ctx.listName = false))
          }, null, 40, _hoisted_2)
        ]),
        createVNode(_component_gallery_search_icons, {
          "list-name": _ctx.listName,
          "onUpdate:listName": _cache[8] || (_cache[8] = $event => ((_ctx.listName) = $event))
        }, null, 8, ["list-name"]),
        (_ctx.listName)
          ? (openBlock(), createBlock(_component_gallery_search_options, {
              key: 0,
              "list-name": _ctx.listName,
              "onUpdate:listName": _cache[9] || (_cache[9] = $event => ((_ctx.listName) = $event))
            }, null, 8, ["list-name"]))
          : createCommentVNode("", true)
      ], 512),
      (_ctx.$route.meta.gallery && _ctx.$store.state.windowWidth >= 450)
        ? (openBlock(), createBlock(_component_gallery_view_mode_switcher, { key: 0 }))
        : createCommentVNode("", true)
    ], 2),
    (_ctx.useAutocomplete && _ctx.autocompleteResults && _ctx.autocompleteResults.length)
      ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            _cache[10] || (_cache[10] = createBaseVNode("div", { class: "title" }, "Autocomplete: ", -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.autocompleteResults, (item) => {
              return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["header", { active: item.active }]),
                key: item.key+'-header',
                onClick: $event => ($options.active_ac_item( item ))
              }, [
                createBaseVNode("div", null, toDisplayString(item.name), 1)
              ], 10, _hoisted_5))
            }), 128))
          ]),
          (_ctx.item.active)
            ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.autocompleteResults, (item) => {
                return (openBlock(), createElementBlock("div", {
                  class: "content-wrapper",
                  key: item.key
                }, [
                  createBaseVNode("div", _hoisted_6, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.books, (book) => {
                      return (openBlock(), createElementBlock("div", {
                        onClick: $event => ($options.searchAutocompleteResult(  book ))
                      }, [
                        createBaseVNode("span", null, toDisplayString(book.match.value), 1)
                      ], 8, _hoisted_7))
                    }), 256))
                  ])
                ]))
              }), 128))
            : createCommentVNode("", true)
        ]))
      : createCommentVNode("", true)
  ]))
}
const __unplugin_components_0 = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __unplugin_components_1 as _, __unplugin_components_0 as a };
