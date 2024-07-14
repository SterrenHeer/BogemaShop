function tabs(tabsContainerSelector, tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabs = document.querySelectorAll(`${tabsContainerSelector} ${tabsSelector}`),
		tabsContent = document.querySelectorAll(`${tabsContainerSelector} ${tabsContentSelector}`),
		tabsParent = document.querySelector(`${tabsContainerSelector} ${tabsParentSelector}`);

	function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		let target = event.target;
        if (!target.classList.contains(tabsSelector.slice(1))) {
            target = target.parentNode;
        }
		if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});
}
