package com.entando.template.util;

import java.util.List;

import org.springframework.data.domain.Page;

public class PagedContent<T, P> {
	private List<T> payload;
	private Metadata<P> metadata;

	public PagedContent(List<T> payload, Page<P> pageObj) {
		this.payload = payload;
		this.metadata = new Metadata<>(pageObj);
	}

	public List<T> getPayload() {
		return payload;
	}

	@SuppressWarnings("rawtypes")
	public Metadata getMetadata() {
		return metadata;
	}

	public static class Metadata<P> {
		private int page;
		private int pageSize;
		private int lastPage;
		private long totalItems;

		public Metadata(Page<P> pageObj) {
			this.lastPage = pageObj.getTotalPages();
			this.totalItems = pageObj.getTotalElements();
			this.pageSize = pageObj.getSize();
			this.page = pageObj.getNumber() + 1;
		}

		public int getPage() {
			return page;
		}

		public int getPageSize() {
			return pageSize;
		}

		public int getLastPage() {
			return lastPage;
		}

		public long getTotalItems() {
			return totalItems;
		}
	}
}