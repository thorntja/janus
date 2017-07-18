'use strict';

import localforage from 'localforage';
import _ from 'lodash';

// documentation
// https://github.com/localForage/localForage

class DB {

	// add new subreddit
	addSubReddit( data ) {
		return localforage.getItem('sub_reddits')
			.then( res => {


				/*
					if no local data stored as 'sub_reddits'
						-store data passed in parameter
						-return data

					if local data
						-update local data with new data
						-return data + local data
				*/
				if ( ! res ) {
						localforage.setItem('sub_reddits', [ data ])
							.then( output => {
								return output;
							});
				}
				if ( res && res.length > 0 ) {
					const updated = res;
					updated.push(data);
					localforage.setItem('sub_reddits', updated )
						.then( output => {
							return output;
						});
				}
			})
	}

	// find subreddit by its url
	findSubRedditByURL(url) {
		return localforage.getItem('sub_reddits')
			.then( (records) => {
				if ( records && records.length > 0 ) {
					const record = _.find( records, { url: url } );
					return record;
				}
			});
	}

	// find and return all subreddits
	findAllSubReddits() {
		return localforage.getItem('sub_reddits')
			.then( (records) => {
				return records;
			});
	}

	findResource(resource){
		return localforage.getItem(resource)
			.then( (records) => {
				return records;
			});
	}

}

export default new DB;
