let activeTab = null;
let activeBtn = null;

function onTabClick(event) 
{
    if (activeBtn == event.currentTarget)
        return;
    for (const child of activeTab.children) {
        child.style.display = 'none';
    }
    activeBtn.setAttribute("aria-selected", "false");
    activeBtn.classList.remove("active");
    
    activeTab = null;
    activeBtn = event.currentTarget;
    activeBtn.setAttribute("aria-selected", "true");
    activeBtn.classList.add("active");

    const tabs = document.getElementsByTagName('release-tab');
    for (const tab of tabs) {
        if(activeBtn.innerText.toLowerCase() === tab.getAttribute('name').toLowerCase()) {
            activeTab = tab;
            break;
        }
    }
    for (const child of activeTab.children) {
        child.style.display = '';
    }
}

function mutationCallback(mutations, observer)
{
    for(const mutation of mutations) {
        if (mutation.target === activeTab)
            continue;

        for (const node of mutation.addedNodes) {
            if(node.style !== undefined)
                node.style.display = 'none';
        }
    }
}

const observer = new MutationObserver(mutationCallback);

class ReleaseTab extends HTMLElement {
    connectedCallback() {
        const btnName = this.getAttribute("name");
        if (activeTab == null && this.getAttribute("default") !== null)
            activeTab = this;

        const btn = document.getElementById(`release-btn-${btnName}`);
        btn.addEventListener('click', onTabClick);
        if (activeTab == this)
            activeBtn = btn;

        observer.observe(this, {childList:true});
    }
}


customElements.define('release-tab', ReleaseTab);