function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}

// vnode ---> 用于描述真实dom的JavaScript对象

function mount(vnode, container) {
  // vnode ---> elemnt
  // 1、创建出真实元素，并且在vnode上保存
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2、处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];

      if (key.startsWith("on")) {
        // 处理传入的props为事件
        el.addEventListener(key.slice(2), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3、处理children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      // 数组
      vnode.children.forEach((item) => {
        mount(item, el); // 递归处理
      });
    }
  }

  // 将el挂载到对应的container中
  container.appendChild(el);
}

function patch(n1, n2) {
  console.log(n1);
  // 当两个vnode的tag不一致时，直接将旧的vnode替换成新的vnode
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    // 1、取出element对象，并且在n2中进行保存
    const el = (n2.el = n1.el); // 将旧的el对应的元素指针  --> 指向 el，后续操作这个el

    // 2、处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};

    for (const key in newProps) {
      // 直接遍历newProps，判断新旧的value，不一致则进行替换
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue[key]);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }

    // 2.2  删除旧的props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith("on")) {
          el.removeChildEventListener(
            key.slice(2).toLowerCase(),
            oldProps[key]
          );
        } else {
          el.removeAttribute(key);
        }
      }
    }

    // 3、处理children
    const oldChildren = oldProps.children || [];
    const newChildren = newProps.children || [];

    if (typeof newChildren === "string") {
      // 边界情况
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    }
  }
}
